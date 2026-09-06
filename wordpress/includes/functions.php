<?php

// *****************************************
//            LOGIN FUNCTIONS
// *****************************************

function checkUserStatus() // CHECKS IF USER HAS COOKIES AND NO SESSION - ATTEMPTS TO LOGIN
{
	global $dbData;
	if(isset($_COOKIE['ceu']) && isset($_COOKIE['ceuSession']) && !isset($_SESSION['session_data']))
	{
	    $dbData = new USER();
		$dataReturn = $dbData->loginFromCookies($_COOKIE['ceu'], $_COOKIE['ceuSession']);
		$_SESSION['session_data'] = $dataReturn;
	}
}

function insertUser($post) {
    global $dbData;
	return $dbData->insertUser($post);
}

function editUserSecurity($post) {
    global $dbData;
	return $dbData->editUserSecurity($post);
}

function userLogin($post) {
    global $dbData;
	return $dbData->userLogin($post);
}

function checkLoggedIn($redirect_url) // THIS CHECKS IF THEY ARE LOGGED IN AND REDIRECTS IF YES
{	
	if(isset($_COOKIE['ceu']) && isset($_COOKIE['ceuSession']) && isset($_SESSION['session_data']))
		header("Location: " . ROOT . $redirect_url);	
}

function checkEmail($email)
{
	global $dbData;
	$valid = validEmail($email);

	if(!$valid) {
        return 1; // EMAIL IS NOT VALID
    }

	if(!isset($_COOKIE['ceu'])) { 	// USER IS NEW SO CHECK ALL EMAILS
		$exists = $dbData->checkEmailExists($email);
	} else {						// USER EXISTS SEARCH ALL BUT THEIR OWN
		$exists = $dbData->checkEmailExistsUser($_COOKIE['ceu'], $email);
	}
	
	if($exists > 0) {
		return 2; // EMAIL ALREADY EXISTS
	}
		
	return 0;
}

function validEmail($email) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
         return true;
      }
      else {
         return false;
      } 

}

function setSessionPasswordRecovery($session, $email, $random) {
    global $dbData;
	$dbData->passwordRecoveryInsert($session, $email, $random);
}

function clearSessionsOver30Mins() {
    global $dbData;
	$minus30 = date("Y-m-d H:i:s", strtotime("-30 minute")); // THIS PASSES NOW MINUS 30 SO WE CAN REMOVE ALL OLD ENTRIES
	$dbData->clearSessions($minus30);
}

function checkRecoverVariables($post) {
    global $dbData;
	$session = $_COOKIE['PHPSESSID'];
	$rand = trim($post['authNum']);
	$email = $dbData->getRecoverVariables($session, $rand);
	return $email;
}
function changePassword($email, $pass) {
    global $dbData;
	$dbData->changePassword($email, $pass);
}
function resetPass($uid) {
    global $dbData;
	$dbData->resetPass($uid);
}

function addUserToMailChimp($arr) {

    $email = $arr['email'];
    $name = $arr['name'];
    $lname = $arr['lname'];
    $state = $arr['state'];
    $profession = $arr['pro'];
    $lic_exp = $arr['licexp'];
    $dob = $arr['dob'];

    $MailChimp = new MailChimp(MC_API_KEY);
    $MC_list_id = MC_LIST_ID;

    $result = $MailChimp->post("lists/$MC_list_id/members", [
        'email_address' => $email,
        'merge_fields' => ['FNAME'=>$name,
                           'LNAME'=>$lname,
                           'STATE'=>$state,
                           'PROFESSION'=>$profession,
                           'LICEXP'=>$lic_exp,
                           'DATEJOIN'=>date("m/d/Y"),
                           'DOB'=>$dob],
        'status'        => 'subscribed',
    ]);
}
function updateUserMailChimp($email) {

    $MailChimp = new MailChimp(MC_API_KEY);
    $MC_list_id = MC_LIST_ID;
    $subscriber_hash = $MailChimp->subscriberHash($email);

    $d = date("m/d/Y");
    $result = $MailChimp->patch("lists/$MC_list_id/members/$subscriber_hash", [
        'merge_fields' => ['LASTVISIT'=>$d],
    ]);

}
function unsubMailChimp($email) {

    $MailChimp = new MailChimp(MC_API_KEY);
    $MC_list_id = MC_LIST_ID;
    $subscriber_hash = $MailChimp->subscriberHash($email);

    $result = $MailChimp->patch("lists/$MC_list_id/members/$subscriber_hash", [
        'status'=> 'unsubscribed',
    ]);

}

// *****************************************
//           END LOGIN FUNCTIONS
// *****************************************


function closeDB($dbObj)
{
	// SET THIS UP AS A GLOBAL FUNCTION FOR ALL DB CLEAN UP
	$dbObj->closeDB();
	$dbObj = "";
}


//This stops SQL Injection in POST vars
function safe($data)
{
    // Called on optional POST/GET fields that may be absent; trim(null) is
    // deprecated in PHP 8.1+ and null already coerced to "" here.
    $data = trim($data ?? '');
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
} 

function checkSel($one, $two)
{
	if($one == $two)
		echo " SELECTED";
}

function createCookie($name, $value, $exp, $path)
{
	// Callers pass lookups that can miss (bad/stale cookie values); passing
	// null to setcookie() is deprecated in PHP 8.1+.
	setcookie($name, $value ?? '', $exp, $path);
}

function getExpirationDayCount($theDate)
{
	$pass_date = time();
	$expiration_date = strtotime(date("Y-m-d", strtotime($theDate)) . " +60 days");
	$days_left = $expiration_date - $pass_date;
	
	return round($days_left / 86400);

}


// *****************************************
//           POST TEST FUNCTIONS
// *****************************************


function doLine($question, $q_num, $q_count=0, $user_prev_submission=null)
{

	global $q_count; // THIS DOESN'T EXIST OUTSIDE BUT THIS SETS IT SO IT WILL INCREMENT
	global $training_id;

    $prev_answers = $user_prev_submission;
    if(!empty($prev_answers)) {
        $user_answer = $prev_answers['q' . $q_num];
    } else {
// OLD SESSION TEST POPULATION - REMOVED 032623
//        $session_answers = $_SESSION['postTest' . $training_id]; // THIS PULLS THE USERS ANSWERS FROM THE SESSION FOR THIS TRAINING
//        $user_answer = $session_answers["q" . $q_num];
    }

	$question_data = getQuestion($question);
	if(is_array($question_data))
	{
		$the_question = $question_data[0];
	}
	else
		$the_question = $question_data;

	echo "\n";
	echo '<div id="post_test_div">';
		echo "\n";
		echo '<div id="post_test_qnum">' . ($q_count + 1) . '.</div>';
		echo "\n";
		echo '<div id="post_test_q">';
			echo str_replace("^", "", substr($the_question, 1, strlen($the_question)));
		echo '</div>';
		echo "\n";
		echo '<div style="clear:left;"></div>';
		echo "\n";
		echo '<div id="post_test_answers">';
		echo "\n";
			
		if(is_array($question_data)) // IS MULTIPLE CHOICE
		{
			for($i=1; $i<sizeof($question_data); $i++)
			{
				if($i == 1) $letter = "a";
				if($i == 2) $letter = "b";
				if($i == 3) $letter = "c";
				if($i == 4) $letter = "d";
				if($i == 5) $letter = "e";
				if($i == 6) $letter = "f";	
			
				$mark = $letter == $user_answer ? " checked" : "";
				echo '<INPUT TYPE="radio" NAME="q' . $q_num . '" VALUE="' . $letter . '"' . $mark . '> ' . $letter . '. '.$question_data[$i].'<BR>';
				echo "\n";
			}
		}
		else // TRUE OR FALSE
		{
			$mark = $user_answer == 't' ? " checked" : "";
			echo '<INPUT TYPE="radio" NAME="q' . $q_num . '" VALUE="t"' . $mark . '> True<br>';
			echo "\n";
			$mark = $user_answer == 'f' ? " checked" : "";
			echo '<INPUT TYPE="radio" NAME="q' . $q_num . '" VALUE="f"' . $mark . '> False';	
		}
			
		echo "\n";
		echo '</div>';
		echo "\n";
	echo '</div>';
	echo "\n";
	
	
	$q_count = $q_count + 1;
	
}

function getQuestion($question) // RETURNS QUESTION FROM POST_TEST.PHP FILE IN ARRAY FOR MULTIPLE CHOICE OR JUST STRING FOR T AND F
{
	if(strpos($question, "|")) // IS MULTIPLE CHOICE
		$qData = explode("|", $question);
	else
		$qData = $question;
	
	return $qData;
		
}

function getPre($inc, $answer) // THIS PREPARES QUESTIONS FOR USERS POST TEST ANSWER EMAIL
{
	
	$answer_tweaked = $answer == "t" ? "TRUE" : strtoupper($answer);
	$answer_tweaked = $answer == "f" ? "FALSE" : $answer_tweaked;
	
//	$line = ($inc + 1) . ". - " . $answer_tweaked . " - "; // THIS ONE DISPLAYS NUMBER BEFORE QUESTION IN POST TEST EMAIL
	$line = $answer_tweaked;
	
	return $line;
}

function checkPostTest($arr, $answers_arr)
{
//	print_r($answers_arr);
//	print_r($arr); die;
	foreach($arr as $key=>$value)
	{
		$new_key = str_replace("q", "", $key);
		if(strlen($new_key) < 3)
		{
			if($value == strtolower($answers_arr[$new_key]))
				$score +=1;
		}
	}
	return $score;
}

// *****************************************
//           END POST TEST FUNCTIONS
// *****************************************



// *****************************************
//           TRAINING FUNCTIONS
// *****************************************


function getAuthorIfMultiple($author, $lic) {
	if(strpos($author, "|")) {
		$tmp_authors = explode("|", $author);
		$tmp_lic = explode("|", $lic);
		for($i=0; $i<(sizeof($tmp_authors)-1); $i++)
		{
			$string .= $tmp_authors[$i] . "<span id='training_page_auth_lic'> ( " . $tmp_lic[$i] . " )</span>";
			if(($i+1) != (sizeof($tmp_authors)-1))
				$string .= ", ";
		}
		return $string;
	} else {
		return $author . "<span id='training_page_auth_lic'> ( " . $lic . " )</span>";	
	}
}

function orderTrainings($arr) {
	$test = array();
	foreach ($arr as $key => $row) {
   		$test[$key] = $row["TITLE_ALT"] ?? '';
	}
	if(empty($test))
		return $arr;
	array_multisort($test, SORT_ASC,  $arr);
	return $arr;
}

function getStrForUrl($training_title) {

	$str_rep_params_for_title = array(
		'/' 	=> '-',
		' / ' 	=> '-',
		'  '	=> '-',
		' ' 	=> '-',
		"'"		=> '',
		','		=> '',
		'('		=> '',
		')'		=> '',
		' & '	=> '-',
		'&'		=> '',
        ':'		=> '',
        '.'		=> ''
	);

	return strtr(trim(stripslashes($training_title)), $str_rep_params_for_title);

}
// *****************************************
//           END TRAINING FUNCTIONS
// *****************************************


// *****************************************
//           EVAL FUNCTIONS
// *****************************************

function loopObj($file, $num)  {
    ob_start();
    $x = 0;
    if ($file = fopen($file, "r")) {
        while (! feof($file)) {
            $data = fgets($file);
            $data = str_replace('"', '', preg_replace( "/\r|\n/", "",$data));
            $arr = array('</li>'=>'', '<li>'=>'<LI>', '</LI>'=>'');
            $line = strtr($data, $arr);

            $count = substr_count($line, 'LI>');
            if ($count > 1) {
                $pos = strpos_all($line, '<LI>');

                for ($i = 0; $i < count($pos); $i++) {
                    if (($i + 1) == count($pos)) {
                        $nstr = str_replace("<LI>", "",substr($line, $pos[$i], strlen($line) - $pos[$i])) . "<br>";
                    } else {
                        $nstr = str_replace("<LI>", "",substr($line, $pos[$i], $pos[$i + 1] - $pos[$i])) . "<br>";
                    }
                    echo"<b>" . ucfirst(trim(strtolower($nstr))) . "</b>";
                    loadRadios($num);
                }
            } else {
                if (strstr($line, '<LI>')) {
                    $nstr = str_replace("<LI>", "", $line) . '<br>';
                    echo "<b>" . ucfirst(trim(strtolower($nstr))) . "</b>";
                    loadRadios($num + $x);
                    $x = $x+1;
                }
            }

        }
        fclose($file);
    }
}
function loadRadios($i) {
    echo "<input type='radio' name='a" . $i . "' value='5' /> strongly agree <input type='radio' name='a" . $i . "' value='4' /> agree <input type='radio' name='a" . $i . "' value='3' /> n/a <input type='radio' name='a" . $i . "' value='2' /> disagree <input type='radio' name='a" . $i . "' value='1' /> strongly disagree<br /><br />";
}
function strpos_all($haystack, $needle_regex)
{
    preg_match_all('/' . $needle_regex . '/', $haystack, $matches, PREG_OFFSET_CAPTURE);
    return array_map(function ($v) {
        return $v[1];
    }, $matches[0]);
}

// *****************************************
//           END EVAL FUNCTIONS
// *****************************************

?>