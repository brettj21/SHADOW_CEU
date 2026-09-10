<?php

include_once(SERVER_ROOT . "email/global.php");

function sendPasswordEmail($emailAddress, $random) {
	
	$html_email = getPasswordHtmlString($random);
	$txt_email = getPasswordTxtString($random);

	GENERIC::send_email($emailAddress, CONTACT_EMAIL, BUS_NAME . ' Password Reset', $html_content=$html_email, $text_content=$txt_email);

}

function sendOLDPasswordEmail($emailAddress, $pass) {
	
	$html_email = getOLDPasswordHtmlString($emailAddress, $pass);
	$txt_email = getOLDPasswordTxtString($emailAddress, $pass);
	
	GENERIC::send_email($emailAddress, CONTACT_EMAIL, BUS_NAME . ' Password Help', $html_content=$html_email, $text_content=$txt_email);

}

function sendUpdatedInfoEmail($emailAddress) {
	
	$html_email = getUpdatedHtmlString();
	$txt_email = getUpdatedTxtString();
	
	GENERIC::send_email($emailAddress, CONTACT_EMAIL, BUS_NAME . ' Information Updated', $html_content=$html_email, $text_content=$txt_email);

}

// THIS COMES FROM /process/forms - process_payment FUNCTION - THIS EMAIL GOES TO USER
function sendPaidTrainings($emailAddress, $details, $dbTrainingData) {
	
	$payment_html_email = getPaymentHtmlString($details, $dbTrainingData);
	$payment_txt_email = getPaymentTxtString($details, $dbTrainingData);
	
	GENERIC::send_email($emailAddress, CONTACT_EMAIL, BUS_NAME . '  - Thank you for your payment', $html_content=$payment_html_email, $text_content=$payment_txt_email);

}
function sendVericareTrainings($emailAddress, $details, $dbTrainingData) {
	$payment_html_email = getVericareHtmlString($details, $dbTrainingData);
	$payment_txt_email = getVericareTxtString($details, $dbTrainingData);
	
	GENERIC::send_email($emailAddress, CONTACT_EMAIL, BUS_NAME . '  - Thank you using ' . BUS_NAME, $html_content=$payment_html_email, $text_content=$payment_txt_email);

}

function sendPassingEmail($arr, $post_test_id = null, $dbTrainingData = null) {
	
	$emailAddress = $arr['email'];
	
	$postTest = $_SERVER['DOCUMENT_ROOT'] . '/trainings/training_answers.php';
	$tid = $arr['tid'];
	$score = $arr['score'];
	$training_title = $arr['training_title'];
		
	$training_id = $tid;
	include($postTest);


    if($post_test_id) {
        $post = $dbTrainingData->getPost($post_test_id);
        $q = '';
        $f = '';
        foreach($post as $k=>$v) {
            $q_tmp = $v['question_text'];
            if($q_tmp != $q) {
                $f .= "<br />" . 'Q - ' . $q_tmp;
                $q = $q_tmp;
            }
            if($v['is_correct']) {
                $f .= "<br />" . 'A - ' . $v['choice_text'] . "<br />";
            }
        }
        $copy = $f;
    }
    $passed_html_email = getPassedHtmlString($training_title, $score, $copy);
    $passed_txt_email = getPassedTxtString($training_title, $score, $copy);
	
	GENERIC::send_email($emailAddress, CONTACT_EMAIL, BUS_NAME . '  - Training Passed', $html_content=$passed_html_email, $text_content=$passed_txt_email);  

}

function sendWelcomeEmail($email, $first) {

	$welcome_html_email = getWelcomeHtmlString($email, $first);
	$welcome_txt_email = getWelcomeTxtString($email, $first);

	GENERIC::send_email($email, CONTACT_EMAIL, BUS_NAME . '  - Welcome', $html_content=$welcome_html_email, $text_content=$welcome_txt_email);  
	
}

// THIS COMES FROM /contact - THIS EMAIL GOES TO ADMIN -info@
function sendContactPage($post, $emailAddress) {
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <support@ceunits.com>' . "\r\n";

    $msg = "<b>NAME:</b> " . $post['name'] . "<br>\n" . "<b>EMAIL:</b> " . $post['ea'] . "<br>\n" . "<b>HELP WITH:</b> " . $post['helpWith'] . "<br>\n" . "<b>COMMENT:</b>" . "<br>\n" . $post['comments'];
    GENERIC::send_email('support@ceunits.com', CONTACT_EMAIL, BUS_NAME . ' - Contact Page', $msg);
    
    /*
        mail('support@ceunits.com',
            BUS_NAME . ' - Contact Page',
            "<b>NAME:</b> " . $post['name'] . "<br>\n" . "<b>EMAIL:</b> " . $post['ea'] . "<br>\n" . "<b>HELP WITH:</b> " . $post['helpWith'] . "<br>\n" . "<b>COMMENT:</b>" . "<br>\n" . $post['comments'],
          $headers);
    /*
        mail($emailAddress, BUS_NAME . ' - Contact Page',
        "<b>NAME:</b> " . $post['name'] . "<br>\n" . "<b>EMAIL:</b> " . $post['ea'] . "<br>\n" . "<b>HELP WITH:</b> " . $post['helpWith'] . "<br>\n" . "<b>COMMENT:</b>" . "<br>\n" . $post['comments'],
        "To: " . $emailAddress . "\n" .
        "From: " . BUS_NAME . " <" . CONTACT_EMAIL . ">\n" .
        "MIME-Version: 1.0\n" .
        "Content-type: text/html; charset=iso-8859-1");
    */
}


// ************************************************
// CRON JOBS
// ************************************************

// THIS COMES FROM /cron_jobs/remove_60_day_trainings.php - THIS EMAIL GOES TO ADMIN EMAIL ADDRESS
function sendDeletedTrainingsEmail($str, $emailAddress, $msg) {
	mail($emailAddress, 'CRON JOB - ' . $msg,  
    $str,  
    "To: " . $emailAddress . "\n" .  
    "From: " . BUS_NAME . " <" . CONTACT_EMAIL . ">\n" .  
    "MIME-Version: 1.0\n" .  
    "Content-type: text/html; charset=iso-8859-1");  
}

// THIS COMES FROM /cron_jobs/check_expired_and_email.php - THIS EMAIL GOES TO USER EMAIL ADDRESS
function sendExpirationEmailWarning($name, $emailAddress, $copy, $course_copy) {
	
	$expired_html_email = getExpiredHtmlString($name, $copy, $course_copy);
	$expired_txt_email = getExpiredTxtString($name, $copy, $course_copy);
	GENERIC::send_email($emailAddress, CONTACT_EMAIL, BUS_NAME . '  - Your Courses Expiring', $html_content=$expired_html_email, $text_content=$expired_txt_email);  
	
}

// THIS COMES FROM /cron_jobs/license_renewal.php - CHECKS DAILY SENDS EMAIL TO USERS WITH EXPIRING LICENSE
function sendLicenseExpirationEmail($first, $state, $pro, $emailAddress, $promo) {
	
	$expired_html_email = getLicHtmlString($first, $pro, $state, $promo);
	$expired_txt_email = getLicTxtString($first, $pro, $state, $promo);
	GENERIC::send_email($emailAddress, CONTACT_EMAIL, BUS_NAME . '  - Your License Could Be Expiring', $html_content=$expired_html_email, $text_content=$expired_txt_email); 
//	GENERIC::send_email('brett@xcage.com', CONTACT_EMAIL, BUS_NAME . $emailAddress . '  - Your License Could Be Expiring', $html_content=$expired_html_email, $text_content=$expired_txt_email);
//	GENERIC::send_email('mark@ceunits.com', CONTACT_EMAIL, BUS_NAME . '  - Your License Could Be Expiring', $html_content=$expired_html_email, $text_content=$expired_txt_email);  
	
}


?>