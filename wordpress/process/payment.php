<?php
/**
 * Payment endpoint — the process_payment branch of CEU/process/forms.php,
 * lifted verbatim so the money path is the original code, not a reimplementation.
 *
 * WHY NOT forms.php ITSELF
 * ───────────────────────
 * forms.php is an 879-line switch over $_POST['todo'] carrying register, login,
 * recover, changePassword and score_post alongside the payment. Standing all of
 * that up on a WordPress site would publish a second, parallel login and
 * registration path next to the one ceu-auth.php owns — two ways to authenticate,
 * two places to fix a bug. It also drags in the Mailchimp SDK at file scope, which
 * the payment never touches.
 *
 * So only this branch is here, copied line for line. Everything it calls is the
 * original class file, unmodified:
 *
 *   CART::processPayment()              posts to Authorize.Net
 *   CART::checkTransactionExists()      the double-charge guard
 *   CART::insertTransaction()           writes CEU_TRANSACTIONS
 *   TRAININGS::insertCertificates()     issues the certificates
 *   PROMOTIONS::markPromoDiscountAsUsed()
 *   USER::insertCEBrokerData()          the Florida CE Broker upload
 *   sendPaidTrainings()                 the receipt email
 *
 * WHAT IT CHARGES
 * ───────────────
 * processPayment() charges $_SESSION['total_cost'], NOT anything in $_POST. That
 * session value is written by the checkout page (ceu-checkout-page.php), which
 * recomputes it from the cart cookie and the user's own taken-training rows. A
 * tampered form cannot change the amount, because the amount never travels in the
 * form. $_SESSION['promo_id'] and ['promo_code'] are set the same way.
 *
 * DEVIATIONS FROM THE ORIGINAL, both marked inline below:
 *   - the transactions.txt path is resolved rather than hardcoded to the
 *     production vhost
 *   - $resp is initialised, because the original reads it after a branch that may
 *     not have assigned it
 */

session_start();

// CRATE NEW DB CLASS FOR DB ACCESS
$loadData = true;
$loadTrainings = true;
$loadCart = true;
$loadPromo = true;
$loadStatus = true;

if(!sizeof($_POST)) // IF SOMEONE HITS THIS PAGE WITH NO POST REDIRECT THEM
    header("Location: /");

include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/global.php");
include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/mail_functions.php");

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
        // DEVIATION: resolved rather than hardcoded to the production vhost.
        // Skipped rather than fatal when secure_files is not configured — a
        // transaction that succeeded must not fail on its own audit log.
        $ceu_log_dir = function_exists('ceu_secure_files_dir') ? ceu_secure_files_dir() : '';
        if ($ceu_log_dir)
            GENERIC::writeToTextFile($ceu_log_dir . '/transactions.txt', $str_to_write, 'add');
        else
            error_log('CEU payment: secure_files not configured; transaction log skipped.');
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
