<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// PHPMailer: prefer the legacy vendor tree when it is present, otherwise use the
// copy WordPress already ships (same PHPMailer\PHPMailer namespace) rather than
// vendoring a second 2.4MB of it into this repo. WP does not autoload these
// outside wp_mail(), so they are required directly.
if (!class_exists('PHPMailer\\PHPMailer\\PHPMailer')) {
    $ceu_vendor = dirname(__DIR__) . '/phpmailer/vendor/autoload.php';
    if (is_readable($ceu_vendor)) {
        require $ceu_vendor;
    } else {
        foreach (['Exception', 'PHPMailer', 'SMTP'] as $ceu_pm) {
            $ceu_pm_file = dirname(__DIR__) . '/wp-includes/PHPMailer/' . $ceu_pm . '.php';
            if (is_readable($ceu_pm_file)) require_once $ceu_pm_file;
        }
    }
}

class GENERIC {

// WE NEED TO ADD AND CHECK THE EXPIRATION FRO THE ACTUAL USER GIVEN PROMO EXPIRATION
// 4/1/17
	static function checkGeneralExpiration($theDate)
	{
		$pass_date = time();
		$expiration_date = strtotime(date("Y-m-d", strtotime($theDate)));
		$days_left = $expiration_date - $pass_date;

		return round($days_left / 86400);
	}

	static function checkUnlimitedUser($data) {
		/*
		if(strtotime($data['EXPIRES']) > time())
			$unlimited_user = 'active';
		elseif(strtotime($data['EXPIRES']) < time())
			$unlimited_user = 'expired';
		return $unlimited_user;
		*/
		return 'expired';
	}

	static function writeToTextFile($text_file_path, $data, $add_or_overwrite) {

		//$filename = 'cc/transactions.txt';
		if($add_or_overwrite == "add")
			$mode = "a";
		else
			$mode = "w";

		if (is_writable($text_file_path)) {
			if ($handle = fopen($text_file_path, $mode)) {
				$status = fwrite($handle, $data);
				fclose($handle);
			}
		}
	}

	static function clearVars($arr, $type)
	{
		if($type == "cookie")
		{
			for($i=0; $i<sizeof($arr); $i++)
			{
				setcookie($arr[0], "", time()-3600, '/');
			}
		}
		if($type == "session")
		{
			for($i=0; $i<sizeof($arr); $i++)
			{
				unset($_SESSION[$arr[$i]]);
				unset($arr[$i]);
			}
		}
	}

	static function xmlToJson($xml)
	{
		$xml = preg_replace('~\s*(<([^>]*)>[^<]*</\2>|<[^>]*>)\s*~','$1',$xml);
		$json = simplexml_load_string($xml,'SimpleXMLElement', LIBXML_NOCDATA);

		$je = json_encode($json);
		$je = str_replace("@", "", $je); // THIS IS BASICALLY IN PLACE FOR CEBROKER LICENSE CHECK - FOR SOME REASON THEY HAVE @ SIGN AND IT CAUSES PROBLEMS

		return $je;
	}

	static function execCurl($endpoint, $xml) {
		$curlHandle	=	curl_init();
//			curl_setopt($curlHandle, CURLOPT_COOKIE, $headers);
			curl_setopt($curlHandle, CURLOPT_URL, $endpoint);
			curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($curlHandle, CURLOPT_TIMEOUT,500);
			curl_setopt($curlHandle, CURLOPT_POST, true);
			curl_setopt($curlHandle, CURLOPT_POSTFIELDS, $xml);
			curl_setopt($curlHandle, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
		$resp	= curl_exec($curlHandle);

		$resp = html_entity_decode($resp);

		return $resp;
	}

	// USED ON TEST PAGE FOR INSURANCE LIMITING QUES NUMS
	static function getNumberQuestions($num_units) {
		if($num_units == "1" || $num_units == "2")
			return 10;
		if($num_units == "3")
			return 10;
		if($num_units == "4")
			return 15;
		if($num_units == "5")
			return 15;
		if($num_units == "6")
			return 20;
		if($num_units == "7")
			return 25;
		if($num_units == "8")
			return 25;
		if($num_units == "9")
			return 30;
		if($num_units == "10")
			return 30;

	}

	static function send_email($to='', $from='', $subject='', $html_content='', $text_content='', $headers='') {

        $mail = new PHPMailer(true);

        try {
            // Credentials come from the untracked config, never from source.
            // The legacy copy of this file has live AWS SES keys inline; they are
            // deliberately not carried into this repo. Define these in
            // secure_files/variables.php alongside the Authorize.Net keys.
            $host  = defined('CEU_SMTP_HOST') ? CEU_SMTP_HOST : '';
            $user  = defined('CEU_SMTP_USER') ? CEU_SMTP_USER : '';
            $upass = defined('CEU_SMTP_PASS') ? CEU_SMTP_PASS : '';

            if ($host === '' || $user === '' || $upass === '') {
                error_log('CEU send_email: SMTP constants are not configured; mail not sent.');
                return false;
            }
            //$to = 'info@ceunits.com';

            // (a commented-out Gmail relay with a live app password was dropped
            //  here rather than copied across; use the constants above instead)



            //$mail->SMTPDebug  = true;                             // Enable verbose debug output
            $mail->isSMTP();                                        // Send using SMTP
            $mail->Host       = $host;                              // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                               // Enable SMTP authentication
            $mail->Username   = $user;                              // SMTP username
            $mail->setFrom(
                defined('CEU_SMTP_FROM') ? CEU_SMTP_FROM : 'support@ceunits.com',
                defined('CEU_SMTP_FROM_NAME') ? CEU_SMTP_FROM_NAME : 'CEU Support'
            );
            $mail->Password   = $upass;                             // SMTP password
            //$mail->SMTPSecure = "ssl";
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;     // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted

            $mail->addAddress($to);
            $mail->Subject = $subject;
            $mail->Body = $html_content;

            $mail->Port       = 587;
            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
            $mail->isHTML(true);
//            $mail->send();

            if (!$mail->send()) {
                echo 'Email not sent an error was encountered: ';// . $mail->ErrorInfo;
            } else {
                return true;
            }

        } catch (phpmailerException $e) {
            echo 'Error #1';
            //echo $e->errorMessage(); //Pretty error messages from PHPMailer
        } catch (Exception $e) {
            echo 'Error #2';
            //echo $e->getMessage(); //Boring error messages from anything else!
        }

	}

	static function mail_attachment($filename, $path, $mailto, $from_mail, $from_name, $replyto, $subject, $message) {

		$file = $path.$filename;
		$file_size = filesize($file);
		if($file_size > 0)
		{
			$handle = fopen($file, "r");
			$content = fread($handle, $file_size);
			fclose($handle);
			$content = chunk_split(base64_encode($content));
			$uid = md5(uniqid(time()));
			$name = basename($file);
			$header = "From: ".$from_mail."\r\n";
			$header .= "Reply-To: ".$replyto."\r\n";
			$header .= "MIME-Version: 1.0\r\n";
			$header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
			$header .= "This is a multi-part message in MIME format.\r\n";
			$header .= "--".$uid."\r\n";
			$header .= "Content-type:text/plain; charset=iso-8859-1\r\n";
			$header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
			$header .= $message."\r\n\r\n";
			$header .= "--".$uid."\r\n";
			$header .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n"; // use different content types here
			$header .= "Content-Transfer-Encoding: base64\r\n";
			$header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
			$header .= $content."\r\n\r\n";
			$header .= "--".$uid."--";

			if (mail($mailto, $subject, "", $header)) {
	//			echo "mail send ... OK"; // or use booleans here
			} else {
	//			echo "mail send ... ERROR!";
			}
		}
	}

}

?>