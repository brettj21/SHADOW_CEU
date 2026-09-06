<?php
//error_reporting(0);
if (session_status() === PHP_SESSION_NONE && !headers_sent()) {
	session_start();
}

require_once(__DIR__ . '/secure_files.php');
ceu_load_secure_file('variables.php');

include_once(SERVER_ROOT . "includes/functions.php");
include_once(SERVER_ROOT . "classes/User.class.php");
include_once(SERVER_ROOT . "classes/Trainings.class.php");
include_once(SERVER_ROOT . "classes/Promotions.class.php");
include_once(SERVER_ROOT . "classes/Cart.class.php");
include_once(SERVER_ROOT . "classes/Status.class.php");
include_once(SERVER_ROOT . "classes/Generic.class.php");

// Initialize bootstrap flags / state vars so PHP 8 doesn't warn on undefined
// variables. ??= only sets a default when a page hasn't already assigned one,
// preserving existing behavior (unset previously evaluated as null/false).
$loadData      = $loadData      ?? false;
$loadTrainings = $loadTrainings ?? false;
$loadCart      = $loadCart      ?? false;
$loadStatus    = $loadStatus    ?? false;
$loadPromo     = $loadPromo     ?? false;
$isUser        = $isUser        ?? false;
$posted        = $posted        ?? false;
$logged_in     = $logged_in     ?? false;
$old_user      = $old_user      ?? false;
$minimal       = $minimal       ?? false;
$lw_url        = $lw_url         ?? false;
$dbPro         = $dbPro         ?? "";
$page          = $page          ?? "";
$first         = $first         ?? "";
$last          = $last          ?? "";

// Profile / form-repopulation values. These are only assigned inside the
// $_SESSION['session_data'] block further down (and some, like $dob_year, are
// commented out there entirely), but shared includes - includes/states.php,
// user/edit_user.php - read them unconditionally, several inside 12-to-60
// iteration <option> loops. Undefined reads there were the bulk of the
// production warning volume.
$email      = $email      ?? "";
$address_1  = $address_1  ?? "";
$address_2  = $address_2  ?? "";
$city       = $city       ?? "";
$state      = $state      ?? "";
$zip        = $zip        ?? "";
$phone      = $phone      ?? "";
$ssn        = $ssn        ?? "";
$utype      = $utype      ?? "";
$dob        = $dob        ?? "";
$exp        = $exp        ?? "";
$dob_month  = $dob_month  ?? "";
$dob_day    = $dob_day    ?? "";
$dob_year   = $dob_year   ?? "";
$exp_month  = $exp_month  ?? "";
$exp_day    = $exp_day    ?? "";
$exp_year   = $exp_year   ?? "";
$lic_num    = $lic_num    ?? "";
$security   = $security   ?? "";
$question   = $question   ?? "";
$prof       = $prof       ?? "";
$pro        = $pro        ?? "";
$note       = $note       ?? "";
$msg        = $msg        ?? "";
$cred_hdr   = $cred_hdr   ?? "";
$status_vars   = $status_vars   ?? array();
$state_requirements = $state_requirements ?? array();
$livingworks   = $livingworks   ?? false;
$isLivingWorks = $isLivingWorks ?? false;

$business_partners = explode(",", BUSINESS_PARTNERS);
$business_promos = explode(",", BUSINESS_PARTNER_PROMOS);

// THIS IS USED IN /process/forms.php - THIS ALLOWS TO CHECK FOR OLD USERS
//include_once(SERVER_ROOT . "classes/UserOld.class.php");

function cleanPost($form) {
//    $data = $this->secure_form($_POST);
    foreach ($form as $key => $value) {
        $data = trim($value);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        $form[$key] = $data;
    }
    return $form;
}


if(class_exists("User") && $loadData)
{
	$dbData = new USER();
	$dbData->logon(DB_HOST, DB_LOGIN, DB_PASS, DB);
}

if($loadTrainings)
	$dbTrainingData = new TRAININGS();

if($loadCart)
	$dbCartData = new CART();

if($loadStatus)
	$dbStatusData = new STATUS();

if($loadPromo)
	$dbPromoData = new PROMOTIONS();

if(isset($_COOKIE['ceu']) && isset($_COOKIE['ceuSession']))
	$isUser = $dbData->checkUserIsUser($_COOKIE['ceu'], $_COOKIE['ceuSession']);

if($isUser && !isset($_COOKIE['PHPSESSID']))
	$dbData->updateVisitDate($_COOKIE['ceu']);

if(!empty($_SESSION['session_data'])) {

	$data = $_SESSION['session_data'];
	$data = ($data[0] ?? '') != "" ? $data[0] : $data;

	$first = ($data['FIRST'] ?? '') != "" ? $data['FIRST'] : ($data['first'] ?? '');	
	$last = ($data['LAST'] ?? '') != "" ? $data['LAST'] : ($data['last'] ?? '');
	$email = ($data['EMAIL'] ?? '') != "" ? $data['EMAIL'] : ($data['email'] ?? '');
	$address_1 = ($data['ADDRESS_1'] ?? '') != "" ? $data['ADDRESS_1'] : ($data['address_1'] ?? '');
	$address_2 = ($data['ADDRESS_2'] ?? '') != "" ? $data['ADDRESS_2'] : ($data['address_2'] ?? '');
	$city = ($data['CITY'] ?? '') != "" ? $data['CITY'] : ($data['city'] ?? '');
	$state = ($data['STATE'] ?? '') != "" ? $data['STATE'] : ($data['state'] ?? '');
	$zip = ($data['ZIP'] ?? '') != "" ? $data['ZIP'] : ($data['zip'] ?? '');
	$phone = ($data['PHONE'] ?? '') != "" ? $data['PHONE'] : ($data['phone'] ?? '');
	$ssn = ($data['SSN'] ?? '') != "" ? $data['SSN'] : ($data['ssn'] ?? '');
	$utype = ($data['UTYPE'] ?? '') != "" ? $data['UTYPE'] : ($data['utype'] ?? '');

	$dob = ($data['DOB'] ?? '') != "" ? $data['DOB'] : ($data['dob'] ?? '');
	if($dob == "")
		$dob = "2000-" . ($data['dob_month'] ?? '') . "-" . ($data['dob_day'] ?? '') . " 00:00:00";
	
	$exp = ($data['LIC_EXP'] ?? '') != "" ? $data['LIC_EXP'] : ($data['lic_exp'] ?? '');
	if($exp == "")
		$exp = ($data['exp_year'] ?? '') . "-" . ($data['exp_month'] ?? '') . "-" . ($data['exp_day'] ?? '') . " 00:00:00";
		
	$lic_num = ($data['LIC_NUM'] ?? '') != "" ? $data['LIC_NUM'] : ($data['lic_num'] ?? '');
	$prof = ($data['PROFESSION'] ?? '') != "" ? $data['PROFESSION'] : ($data['profession'] ?? '');
	
	$security = ($data['SECURITY_1'] ?? '') != "" ? $data['SECURITY_1'] : ($data['security'] ?? '');
	$question = ($data['QUESTION'] ?? '') != "" ? $data['QUESTION'] : ($data['question'] ?? '');
	
	if($pro == "Profession"):
		$prof = "social-workers";
	endif; 
	
	$dbPro = $prof != "" ? $prof : ($_COOKIE['pro'] ?? '');

	if(empty($data['old_user']))
	{

		$dob_month = date("m", strtotime($dob));
		$dob_day = date("d", strtotime($dob));
//		$dob_year = date("Y", strtotime($dob));
	
		$exp_month = date("m", strtotime($exp));
		$exp_day = date("d", strtotime($exp));
		$exp_year = date("Y", strtotime($exp));
	
		if($page != "blog"):
			setcookie('pro', $dbPro,  mktime(0, 0, 0, 12, 31, CURRENT_YEAR+1), "/");
		endif; 
			
		$logged_in = true;
	} else {
		$old_user = true;
		$ID_OLD = $data['ID_OLD']; // WE NEED THIS HERE SO ON REG PAGE WE CAN GET OLD TRAININGS AND INSERT INTO NEW SYSTEM
		$old_user_join_date = $data['DATE_JOIN_OLD'];
	}
	
	// THE SESSION HAS BEEN SET NOT TO EXPIRE ABOVE SESSION_START AT TOP OF PAGE
	// IF COOKIES ARE GONE, THIS WILL RECREATE THEM
	if(!isset($_COOKIE['ceuSession']) && isset($data['PASS']))
		createCookie("ceuSession", $data['PASS'], mktime(0, 0, 0, 12, 31, CURRENT_YEAR+1), "/");
	if(!isset($_COOKIE['ceu']) && isset($data['ID']))
		createCookie("ceu", $data['ID'], mktime(0, 0, 0, 12, 31, CURRENT_YEAR+1), "/");

}  elseif(isset($_COOKIE['ceu']) && isset($_COOKIE['ceuSession']))  {

	if($isUser && $page != 'blog') {
		checkUserStatus(); // LOGS USER IN BASED ON UID IN COOKIE SAND SHA ENCRYPTED PASSWORD
		header("Location: " . $_SERVER['REQUEST_URI']);
	}

}

if($loadStatus && isset($_COOKIE['ceu']) && $isUser)
	$status_vars = $dbStatusData->getStatusVars($_COOKIE['ceu']);

// THIS HIGHLIGHTS THE SUB NAVIGATION PROFESSION
$profession = $_GET['profession'] ?? "";
	
if($profession == "" && isset($_COOKIE['pro']))
	$profession = $_COOKIE['pro'];

ceu_load_secure_file('professions.php');

if(isset($profession) && ($_COOKIE['pro'] ?? '') != $profession)
	createCookie("pro", $profession, mktime(0, 0, 0, 12, 31, CURRENT_YEAR+1), "/");

// The 'pro' cookie is client supplied and may hold a profession we do not know
// (bots send junk values like "wordpress").
if(isset($_COOKIE['pro']))
	createCookie("proid", $profession_ids[$_COOKIE['pro']] ?? '', mktime(0, 0, 0, 12, 31, CURRENT_YEAR+1), "/");

// LIVING WORKS TRAINING CITIES
$goodCityArr = array("Los Angeles", "Dallas", "Orlando");
$fakeCityArr = array("New York", "Chicago", "Seattle");
$cityArr = array_merge($goodCityArr, $fakeCityArr);

$url = $_SERVER['REQUEST_URI']; 
if(strpos($url, "livingworks")):
	$lw_url = true;
endif;

if($posted && isset($data['ID'])) {

	// IF EMAIL DOESN'T MATCH USERS LOGGED IN
	// THIS WAS REMOVED AS WE DON'T REALLY CARE IF EMAIL MATCHES
	//if($data['EMAIL'] == $myo_email) {
        // THIS SAME FUNCTION BELOW EXISTS IN forms.php UNDER login AND register
        $myo_date = $myo_completion_date;

        $arr['tid'] = '225';
        $arr['uid'] = $data['ID'];
        $arr['training_title'] = 'FIT eLearning... Practice excellence daily';
        $arr['profession_id'] = '8';
        $arr['credits'] = '12';
        $arr['passing'] = '1';
        $arr['myo_data_completed'] = date("Y-m-d H:i:s", strtotime($myo_date));

        $dbTrainingData->insertCompletedTraining($arr);
        setcookie("myo", "", time() - 3600, '/');
        header("Location: /user");
    //} else {
    //    header("Location: /myoutcomes?error=email");
	//}
}

?>