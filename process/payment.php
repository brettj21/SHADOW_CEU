<?php
/**
 * Payment endpoint — the process_payment branch of CEU/process/forms.php,
 * lifted verbatim and run against the ORIGINAL legacy files, not copies.
 *
 * NOTHING FROM THE LEGACY SITE IS COPIED INTO THIS REPO
 * ────────────────────────────────────────────────────
 * An earlier version vendored classes/ and includes/ in here. That was wrong.
 * When shadow becomes www the legacy pages — /cart/, /user/, /trainings/ — have
 * to keep running against their own files, and copies sitting at the same paths
 * would shadow them: a five-month-old global.php, and a Generic.class.php edited
 * to read SMTP constants the live variables.php has never defined, which would
 * have stopped site-wide email the moment it was deployed. Copies also rot,
 * quietly, in exactly the code that takes money.
 *
 * So this loads the real tree. On shadow that is the www docroot next door on the
 * same box; after the cutover it is simply the docroot. Same files either way,
 * and they are the ones the rest of the legacy site already runs on.
 *
 * The legacy chain cooperates. global.php pulls its classes through SERVER_ROOT
 * (defined in secure_files/variables.php) rather than DOCUMENT_ROOT, and loads
 * variables.php by an absolute path already correct on this server. The single
 * DOCUMENT_ROOT reference in that tree is in mail_functions.php's
 * sendPassingEmail(), which the payment path never calls — it calls
 * sendPaidTrainings().
 *
 * Everything doing the work is therefore the untouched original:
 *
 *   CART::processPayment()              posts to Authorize.Net
 *   CART::checkTransactionExists()      the double-charge guard
 *   CART::insertTransaction()           writes CEU_TRANSACTIONS
 *   TRAININGS::insertCertificates()     issues the certificates
 *   PROMOTIONS::markPromoDiscountAsUsed()
 *   USER::insertCEBrokerData()          the Florida CE Broker upload
 *   sendPaidTrainings()                 the receipt email
 *
 * WHY NOT forms.php ITSELF
 * ───────────────────────
 * forms.php is an 879-line switch over $_POST['todo'] carrying register, login,
 * recover, changePassword and score_post alongside the payment. Exposing all of
 * it on the WordPress host would publish a second authentication path beside the
 * one ceu-auth.php owns. Only the branch that takes money is reproduced here.
 *
 * WHAT IT CHARGES
 * ───────────────
 * processPayment() charges $_SESSION['total_cost'], NOT anything in $_POST. That
 * value is written by the checkout page, which recomputes it from the cart cookie
 * and the user's own taken-training rows. A tampered form cannot change the
 * amount, because the amount never travels in the form.
 *
 * DEVIATION FROM THE ORIGINAL, marked inline below: $resp is initialised, because
 * the original reads it after the one branch that never assigns it.
 */

// ─── Locate the legacy tree ───────────────────────────────────────────────────
// First hit wins:
//   1. $CEU_LEGACY_ROOT      explicit override, set it in the vhost
//   2. this docroot          true after the cutover, when shadow IS www
//   3. a sibling httpdocs/   true on shadow today: www lives next door
//   4. the production path   last resort
//
// Ordered so no configuration is needed either side of the cutover: the moment
// this docroot holds the legacy tree, it wins over the neighbour's.
if (!defined('CEU_LEGACY_ROOT')) {
    $ceu_docroot = rtrim($_SERVER['DOCUMENT_ROOT'] ?? '', '/');

    foreach ([
        getenv('CEU_LEGACY_ROOT') ?: null,
        $ceu_docroot ?: null,
        $ceu_docroot ? dirname($ceu_docroot) . '/httpdocs' : null,
        '/var/www/vhosts/ceunits.com/httpdocs',
    ] as $ceu_candidate) {
        if ($ceu_candidate && is_readable(rtrim($ceu_candidate, '/') . '/includes/global.php')) {
            define('CEU_LEGACY_ROOT', rtrim($ceu_candidate, '/'));
            break;
        }
    }
}

if (!defined('CEU_LEGACY_ROOT')) {
    error_log('CEU payment: legacy tree not found; set CEU_LEGACY_ROOT for this vhost.');
    http_response_code(500);
    exit('Checkout is temporarily unavailable. Please contact support.');
}

session_start();

// CRATE NEW DB CLASS FOR DB ACCESS
$loadData = true;
$loadTrainings = true;
$loadCart = true;
$loadPromo = true;
$loadStatus = true;

if(!sizeof($_POST)) // IF SOMEONE HITS THIS PAGE WITH NO POST REDIRECT THEM
    header("Location: /");

include_once(CEU_LEGACY_ROOT . "/includes/global.php");
include_once(CEU_LEGACY_ROOT . "/includes/mail_functions.php");

// DEVIATION: the original reads $resp after the "cost is zero" branch, which is
// the one path that never assigns it. Initialised so that read is defined.
$resp = [];
$successful_process = false;

if($_POST['todo'] == "process_payment") {

    $cart_items     = $_COOKIE['cart'];
    $cost_is_zero   = $_POST['discount'] ?? ''; // THIS RETURNS THE VALUE OF 'active'
    $user_id 	    = $_COOKIE['ceu'];

    if($_REQUEST['unlimited'] ?? '') { // USER PAID FOR UNLIMITED COURSES
        $process_unlimited = true;
        $cart_items = 'unlimited';

        if(strtolower($_POST['ul_promo_code']) == UNLIMITED_CODE)
            $_SESSION['total_cost'] = UNLIMITED_PRICE - (UNLIMITED_PRICE * UNLIMITED_PROMOTION);
    }
    else {
        $process_unlimited = false;
        if($cart_items == "")
            header("location: /cart/checkout/ul?er=1");
    }

    //ADDED 122312
    $current_cart = explode("|", $cart_items);
    $inv_exists = $dbCartData->checkTransactionExists($user_id, $cart_items); // CHECKS TRANSACTTION DB - GET INVOICE NUM FOR COMPARISON
    if($inv_exists) { // TRANSACTION ALREADY EXISTS
        header("location: /user/processed?er=7");

// WE CAN ADD THIS LATER - CHECKS CERTS THAT EXIST IN TRANSACTIONS BUT NOT IN CERTS		
        /*		$get_user_certs = $dbTrainingData->getCertificates($_COOKIE['ceu']); // GET USER CERTS TO COMPARE
                for($i=0; $i<sizeof($get_user_certs); $i++):
                    $utid = $get_user_certs[$i]['TRAINING_ID'];
                    if(in_array($utid, $current_cart)):
                        // CERT EXISTS SO NO FURTHER ACTION
                    else:
                        // CERT DOES NOT EXIST - LOAD IT
                    endif;
                endfor;
        */
        // CHECK IF CERT IS IN SYSTEM
        // IF NO ENTER IT INTO SYSTEM
        // IF YES REDIRECT TO CERT PAGE
    }

// IF FINAL COST IS ZERO WE NEED TO BYPASS PAYMENT SUBMISSION	

    if($cost_is_zero != 'active'): // IF COST = ZERO DISCOUNT IS ACTIVE - THIS SHOULD ONLY HAPPEN IF COST IS NOT ZERO

        $user = $dbData->getUser($user_id);

        $auth_trans_resp = $dbCartData->processPayment($_POST, $email, $process_unlimited, $user); // SUBMIT DATA AND PROCESS - GET RESPONSE FROM AUTHORIZE
        $resp = explode("^", $auth_trans_resp);

        // THIS IS FOR GOOGLE CONVERSION - JUST ADDS THE PRICE TO THE CONVERSION - google_conversion.php
        createCookie("am", $resp[9], mktime(0, 0, 0, 12, 31, CURRENT_YEAR+1), "/");

        // THIS WILL WRITE ALL TRANSACTION DETAILS TO THE transactions.txt FILE
        $i = 0;
        foreach($resp as $key=>$val) {
            if($val != "" && $i == 0)
            {
                $str_to_write = "**************************************** " . "\n";
                $str_to_write .= date('F j, Y, h:i a') . "\n" . "USER ID - " . $_COOKIE['ceu'] . "\n" . "TRAININGS - " . $cart_items . "\n";
                if(isset($_SESSION['promo_id']))
                    $str_to_write .= "PROMO / DISCOUNT - " . $_SESSION['promo_id'] . "\n";
            }
            if($val != "")
                $str_to_write .= " $i - " . $val . "\n";
            $i += 1;
        }
        $str_to_write .= "\n\n";

        // WRITE TRANSACTION DATA TO TXT FILE
        // The original's path, which is correct on this server. Guarded only so
        // a transaction that has already succeeded is never failed by its own
        // audit log.
        $ceu_log = '/var/www/vhosts/ceunits.com/secure_files/transactions.txt';
        if (is_writable(dirname($ceu_log)))
            GENERIC::writeToTextFile($ceu_log, $str_to_write, 'add');
        else
            error_log('CEU payment: transaction log not writable; entry skipped.');
    endif;

    if($resp[0] == "1" || $resp[2] == '5' || $cost_is_zero == 'active') { 	// resp[2] = 5 means amount was zero but promotion could have made it 0 - AUTHORIZE SUCCESSFUL TRANSACTION PUT IN DB

        $profession_id = $profession_ids[$_COOKIE['pro']];
        $dbCartData->insertTransaction($_POST, $resp, $profession_id); 									// INSERT TRANSACTION

        if(!$process_unlimited):

            // NORMAL PAYMENT ACCEPTED - NOW DO NORMAL PROCESS

            // WE NEED THIS TO PROCESS CEBROKER INSERT
            $_POST['license_num'] = $lic_num;
            if($_POST['state'] == "FL")
                $dbData->insertCEBrokerData($_POST, CEBROKER_ENDPOINT, PARENT_PROVIDER_ID, UPLOAD_KEY);		// INSERTS TRAINING INTO CEBROKER SYSTEM

            $dbPromoData->markPromoDiscountAsUsed($_COOKIE['ceu'], $_SESSION['promo_code']); 					// MARK PROMOTION/DISCOUNT AS USED
            $trainings_str_for_email = $dbTrainingData->insertCertificates($cart_items); 							// INSERT CERTIFICATE

            sendPaidTrainings($email, $resp, $dbTrainingData);

        else:
            // UNLIMITED PAYMENT MADE - PROCESS NOW
            $dbData->insertUnlimitedUser($_COOKIE['ceu'], $resp[6], UNLIMITED_DURATION); 	// ADD USER TO UNLIMITED DB
            $dbTrainingData->processPassedTrainings($_COOKIE['ceu']);							// GET ALL TRAININGS PASSED AND PUT IN CERT TABLE AND REMOVE FROM TAKEN TABLE

// ADDED 011813
// THIS IS HERE AS A TEST
            if($_POST['state'] == "FL"):
                $dbData->insertCEBrokerData($_POST, CEBROKER_ENDPOINT, PARENT_PROVIDER_ID, UPLOAD_KEY);		// INSERTS TRAINING INTO CEBROKER SYSTEM
            endif;
//******************************
// FORMAT AND SEND EMAIL
//******************************

        endif;

        // CLEAR VARS
        $arr = explode("|", $cart_items);
        GENERIC::clearVars($arr, 'cookie');
        $arr = array('total_cost', 'promo_id', 'promo_code');
        GENERIC::clearVars($arr, 'session');

        $successful_process = true;

    } else {
        header("location: /cart/checkout/?er=1");
    }


    if($successful_process)
        header("location: " . SECURE_PATH . "/user/processed");

}
