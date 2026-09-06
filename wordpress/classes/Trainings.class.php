<?php

require_once(__DIR__ . '/DB.class.php');

class TRAININGS extends DB {

	var $db_id;

	function logon($DB_HOST, $DB_LOGIN, $DB_PASS, $DB){
		$this->db_id = mysqli_connect ($DB_HOST, $DB_LOGIN, $DB_PASS, $DB) or die ('Cannot connect to the database');
		//mysql_select_db ($DB);

	}

	function closeDB() {
		mysqli_close($this->db_id);
	}

	public function insertCompletedTraining($arr) {

		$query1 = "SELECT ID FROM CEU_TRAININGS_TAKEN WHERE TRAINING_ID=" . (int)$arr['tid'] . " AND USER_ID=" . (int)$arr['uid'];

		$result = mysqli_query($this->db_id, $query1);
		if(mysqli_affected_rows($this->db_id) == 0) {

		    $pDate = $arr['myo_data_completed'] == '' ? date("Y-m-d H:i:s") : $arr['myo_data_completed'];

			$query = "INSERT INTO CEU_TRAININGS_TAKEN SET 
				TRAINING_ID = '" . (int)$arr['tid'] . "', 
				TRAINING_TITLE ='" . addslashes($arr['training_title']) . "', 
				PROFESSION_ID = '" . $arr['profession_id'] . "',
				STATE = '" . $arr['state'] . "', 
				USER_ID = '" .(int)$arr['uid'] . "', 
				CREDITS = '" . $arr['credits'] . "', 
				SCORE = '" . $arr['score'] . "', 
				PASSING = '" . (int)$arr['passing'] . "', 
				DATE_COMPLETED = '" . $pDate ."'";
				mysqli_query($this->db_id, $query);
		} else {
			// THIS UPDATE ONLY WORKS BECAUSE OF THE TIMESTAMP OTHERWISE AFFECTED ROW WOULD BE 0
			$query = "UPDATE CEU_TRAININGS_TAKEN SET  
				SCORE = '" . $arr['score'] . "', 
				PASSING = '" . (int)$arr['passing'] . "', 
				DATE_COMPLETED = '" . date("Y-m-d H:i:s") ."' 
				WHERE USER_ID=" . (int)$arr['uid'] . " AND TRAINING_ID=" . (int)$arr['tid'] . " AND PROFESSION_ID='" . $arr['profession_id'] . "' AND PASSING=0";
			mysqli_query($this->db_id, $query);
		}

		return mysqli_affected_rows($this->db_id);
	}

	function getCompletedTraining($user_id) {
		$result = mysqli_query($this->db_id, "SELECT a.* , b.AUTHOR_ID, b.CEBROKER_ID FROM CEU_TRAININGS_TAKEN a, CEU_TRAININGS b WHERE a.USER_ID =" . $user_id . " AND a.TRAINING_ID = b.TRAINING_ID ORDER BY DATE_COMPLETED DESC")
			or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}
		return $trainings;
	}

	function getCompletedTrainingsForStatus($user_id, $years_in_status, $lic_expiration) {

		$date_years_ago = date("Y-m-d", strtotime($years_in_status . " years 1 day ago", strtotime($lic_expiration)));
		$exp_date = date("Y-m-d", strtotime($lic_expiration));

		// THIS PULLS COMPLETED TRAININGS NOT PAID FOR
		$result = mysqli_query($this->db_id,"SELECT a.* FROM CEU_TRAININGS_TAKEN a WHERE a.USER_ID =" . $user_id . " AND PASSING=1 AND a.DATE_COMPLETED BETWEEN '" . $date_years_ago . "' AND '". $exp_date . "' ORDER BY DATE_COMPLETED DESC")
			or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}

		// THIS PULLS TRAININGS THAT WERE COMPLETED AND HAVE BEEN PAID FOR
		$result2 = mysqli_query($this->db_id,"SELECT * FROM CEU_CERTIFICATES WHERE USER_ID =" . $user_id . " AND DATE_COMPLETED BETWEEN '" . $date_years_ago . "' AND '". $exp_date . "' ORDER BY DATE_COMPLETED DESC")
			or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged2 = mysqli_fetch_assoc($result2)) {
			$trainings[] = $logged2;
		}


		return $trainings;
	}

	function getTrainingsForCart($user_id) {

		// THIS PULLS ALL TRAININGS USER HAS TAKEN
		$query = "SELECT TRAINING_ID FROM CEU_TRAININGS_TAKEN WHERE USER_ID=" . $user_id;
		$result = mysqli_query($this->db_id, $query);
		$ids = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$ids[] = $logged['TRAINING_ID'];
		}

		$ids_compare = array();
		// THIS PULLS ALL TRAINING INFO BASED ON PROFESSION ID
		$result = mysqli_query($this->db_id,"SELECT a.*, b.COST FROM CEU_TRAININGS_TAKEN a, CEU_TRAININGS_BY_PROFESSION b WHERE USER_ID=" . $user_id . " AND a.PROFESSION_ID = b.PROFESSION_ID AND a.TRAINING_ID = b.TRAINING_ID")
			or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
			$ids_compare[] = $logged['TRAINING_ID'];
		}

		if(count($ids) == count($ids_compare))
			return $trainings;
		else {
			// THIS PULLS DATA FROM DEFAULT CEU_TRAININGS TABLE

			// THIS WAS UPDATED - IF LIVINGWORKS - GET USERS PROFESSION ID INSTEAD OF ID FROM TRAINING WHICH WOULD BE 7 FOR LIVINGWORKS

			$missing_training_info = array_diff($ids, $ids_compare); // IF AN ERROR HITS HERE... THE PROBLEM IS IN TRAININGS_BY_PROFESSION IS MISSING THE PROFESSION ID USUALLY 7 - LIVINGWORKS
			// implode($array, $glue) argument order was removed in PHP 8.0 (fatal TypeError).
			$tid = implode(",", $missing_training_info);

			// Nothing missing -> "IN ()" would be a SQL syntax error; the rows we
			// already fetched are the complete answer.
			if($tid === "")
				return $trainings;

			if(isset($_COOKIE['proid']))
				$query = "SELECT a.*, b.COST FROM CEU_TRAININGS_TAKEN a, CEU_TRAININGS_BY_PROFESSION b WHERE USER_ID=" . $user_id . " AND " . $_COOKIE['proid'] . " = b.PROFESSION_ID AND a.TRAINING_ID = b.TRAINING_ID";
			else
				$query = "SELECT TITLE AS TRAINING_TITLE, COST, CREDITS FROM CEU_TRAININGS WHERE TRAINING_ID IN (" . $tid . ")";

			$result = mysqli_query($this->db_id, $query);
			$trainings = array();
			while ($logged = mysqli_fetch_assoc($result)) {
				$trainings[] = $logged;
			}
			return $trainings;
		}


	}

	function getGenericTrainings() {
		$sql = "SELECT a.*, b.AUTHOR FROM CEU_TRAININGS a, CEU_AUTHORS b WHERE a.AUTHOR_ID=b.ID ORDER BY TRAINING_ID ASC ";
		$sql = "SELECT * FROM CEU_TRAININGS ORDER BY TRAINING_ID ASC ";
		$result = mysqli_query($this->db_id,$sql)
		or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}
		return $trainings;

	}

	function getTrainingsAll() {
		$sql = "SELECT * FROM CEU_TRAININGS ORDER BY TRAINING_ID ASC ";
		$result = mysqli_query($this->db_id,$sql)
		or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}
		return $trainings;

	}

	function getGenericTrainingById($tid) {
		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRAININGS WHERE TRAINING_ID=" . $tid)
			or die(mysqli_error($this->db_id));

		$trainings = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings = $logged;
		}
		return $trainings;

	}

	function getTraining($tid, $pid) {
		$sql = "SELECT a.*, b.ID AS post_test_id, b.CONTENT, b.IS_PDF, b.AUTHOR, b.OBJECTIVES, b.DESCRIPTION, b.TARGET_LEVEL ";
		$sql .= "FROM CEU_TRAININGS_BY_PROFESSION a ";
		$sql .= "LEFT JOIN CEU_TRAININGS b on a.TRAINING_ID=b.TRAINING_ID ";
		$sql .= "WHERE a.TRAINING_ID=" . $tid . " AND a.PROFESSION_ID=" . $pid . ";";

		$result = mysqli_query($this->db_id, $sql)
		or die(mysqli_error($this->db_id));

		$training = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			$training = $logged;
		}
		return $training;
	}
	function getPost($tid) {
		$sql = "SELECT q.id AS question_id, q.question_text, c.id AS choice_id, c.choice_text, c.is_correct ";
		$sql .= "FROM CEU_questions q ";
		$sql .= "JOIN CEU_question_choices c ON q.id = c.question_id ";
		$sql .= "WHERE q.test_id=" . $tid . " ORDER BY q.id, c.id;";

		$result = mysqli_query($this->db_id, $sql)
		or die(mysqli_error($this->db_id));

		$training = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$training[] = $logged;
		}

		return $training;
	}

	function getPostAnswers($tid) {
		$sql = "SELECT q.id AS question_id, c.id AS choice_id, c.is_correct ";
		$sql .= "FROM CEU_questions q JOIN CEU_question_choices c ON q.id = c.question_id  ";
		$sql .= "WHERE q.test_id = " . $tid . " AND c.is_correct = 1  ";
		$sql .= "ORDER BY q.id, c.id;";

		$result = mysqli_query($this->db_id, $sql)
		or die(mysqli_error($this->db_id));

		while ($logged = mysqli_fetch_assoc($result)) {
			$training[$logged['question_id']] = $logged;
		}
		return $training;
	}

	function 	getTrainingsByProfession($profession_id) {

		$test_user_ids = explode(",", CREDIT_CARD_TEST_USER_IDS);

		// IF USER IS AN ADMIN WE PULL ALL TRAININGS FROM THE TRAININGS TABLE, NOT THE TRAININGS BY PROFESSION TABLE
//		if(in_array($_COOKIE['ceu'], $test_user_ids))
//			$query = "SELECT a.*, b.TITLE_ALT, b.PASSING, c.AUTHOR, c.AUTHOR_ABOUT, c.AUTHOR_LICENSE FROM CEU_TRAININGS a, CEU_TRAININGS_BY_PROFESSION b, CEU_AUTHORS c WHERE a.TRAINING_ID=b.TRAINING_ID AND c.ID=a.AUTHOR_ID ORDER BY a.TRAINING_ID ASC";
//		els


		if($profession_id != '7'):
			//$query = "SELECT a.*, b.TITLE, b.AUTHOR_ID, b.NOTES, c.AUTHOR, c.AUTHOR_ABOUT, c.AUTHOR_LICENSE FROM CEU_TRAININGS_BY_PROFESSION a, CEU_TRAININGS b, CEU_AUTHORS c WHERE a.PROFESSION_ID=" . $profession_id . " AND a.TRAINING_ID=b.TRAINING_ID AND c.ID=b.AUTHOR_ID ORDER BY a.TITLE_ALT ASC";
			$query = "SELECT a.*, b.TITLE, b.AUTHOR_ID, b.NOTES, c.AUTHOR, c.AUTHOR_ABOUT, c.AUTHOR_LICENSE, b.OBJECTIVES, b.DESCRIPTION ";
			$query .= "FROM CEU_TRAININGS_BY_PROFESSION a ";
			$query .= "JOIN CEU_TRAININGS b ON a.TRAINING_ID = b.TRAINING_ID ";
			$query .= "LEFT JOIN CEU_AUTHORS c ON b.AUTHOR_ID = c.ID WHERE a.PROFESSION_ID = " . $profession_id . " ";
			$query .= "ORDER BY a.TITLE_ALT ASC;";
		else:
			$query = "SELECT a.*, b.TITLE, b.AUTHOR_ID, b.NOTES, c.AUTHOR, c.AUTHOR_ABOUT, c.AUTHOR_LICENSE, b.OBJECTIVES, b.DESCRIPTION FROM CEU_TRAININGS_BY_PROFESSION a, CEU_TRAININGS b, CEU_AUTHORS c WHERE a.PROFESSION_ID=" . $profession_id . " AND a.TRAINING_ID=b.TRAINING_ID AND c.ID=b.AUTHOR_ID AND b.NOTES='Living Works Training' ORDER BY a.TITLE_ALT ASC";
		endif;

	// CHANGED FROM THE BELOW ON 082312
	// $query = "SELECT a.*, b.TITLE, b.AUTHOR_ID, c.AUTHOR, c.AUTHOR_ABOUT, c.AUTHOR_LICENSE FROM CEU_TRAININGS_BY_PROFESSION a, CEU_TRAININGS b, CEU_AUTHORS c WHERE a.PROFESSION_ID=" . $profession_id . " AND a.TRAINING_ID=b.TRAINING_ID AND c.ID=b.AUTHOR_ID ORDER BY a.TRAINING_ID ASC";

		$result = mysqli_query($this->db_id, $query)
			or die(mysqli_error($this->db_id));

		$k=0;
		while ($logged = mysqli_fetch_assoc($result)) {
			if(strpos((string)($logged['AUTHOR_ID'] ?? ''), ","))
			{
				$authors_multiple = $this->getAuthors($logged['AUTHOR_ID']);
				$tmp = explode("^", $authors_multiple);
				$trainings[$k] = $logged;
				$trainings[$k]['AUTHOR'] = $tmp[0];
				$trainings[$k]['AUTHOR_LICENSE'] = $tmp[1];
			}
			else
				$trainings[$k] = $logged;
			$k +=1;

		}
		return $trainings;

	}

	function getLivingWorksTrainings($profession_id) {

		$query = "SELECT a.*, b.TITLE, b.AUTHOR_ID, b.NOTES, c.AUTHOR, c.AUTHOR_ABOUT, c.AUTHOR_LICENSE FROM CEU_TRAININGS_BY_PROFESSION a, CEU_TRAININGS b, CEU_AUTHORS c WHERE a.PROFESSION_ID=" . $profession_id . " AND a.TRAINING_ID=b.TRAINING_ID AND c.ID=b.AUTHOR_ID ORDER BY a.TITLE_ALT ASC";

		$result = mysqli_query($this->db_id, $query)
			or die(mysqli_error($this->db_id));

		$k=0;
		while ($logged = mysqli_fetch_assoc($result)) {
			if(strpos((string)($logged['AUTHOR_ID'] ?? ''), ","))
			{
				$authors_multiple = $this->getAuthors($logged['AUTHOR_ID']);
				$tmp = explode("^", $authors_multiple);
				$trainings[$k] = $logged;
				$trainings[$k]['AUTHOR'] = $tmp[0];
				$trainings[$k]['AUTHOR_LICENSE'] = $tmp[1];
			}
			else
				$trainings[$k] = $logged;
			$k +=1;

		}
		return $trainings;

	}

	function getPartnerVerify($uid, $tid) {
		$query = "SELECT * FROM CEU_PARTNER_VERIFY WHERE USER_ID='" . $uid . "' AND TRAINING_ID='" . $tid . "'";
		$result = mysqli_query($this->db_id, $query);
		return mysqli_affected_rows($this->db_id);
	}

	function setPartnerVerify($uid, $tid) {
		$query = "INSERT INTO CEU_PARTNER_VERIFY SET 
				USER_ID = '" . (int)$uid . "',
				TRAINING_ID = '" . (int)$tid ."'";
				mysqli_query($this->db_id, $query);
				return mysqli_affected_rows($this->db_id);
	}


	function getTrainingById($training_id, $profession) {

		$result = mysqli_query($this->db_id, "SELECT a.*, b.ID FROM CEU_TRAININGS_BY_PROFESSION a, CEU_PROFESSIONS b WHERE a.TRAINING_ID='" . $training_id . "' AND b.PROFESSION_SHORTCUT='" . $profession . "' AND a.PROFESSION_ID=b.ID")
			or die(mysqli_error($this->db_id));

		$training = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			$training = $logged;
		}
		return $training;
	}

	// $this-free array helper; static so existing TRAININGS:: callers work on PHP 8.
	static function getTrainingDetailsFromArray($tid, $arr) {
		if(!empty($arr)) {
			for ($i = 0; $i < count($arr); $i++) {
				if ($tid == $arr[$i]['TRAINING_ID']) {
					return $arr[$i];
					break;
				}
			}
		}
	}

	function getCertById($cid, $uid) {

		$result = mysqli_query($this->db_id,"SELECT * FROM CEU_CERTIFICATES WHERE ID='" . $cid . "' AND USER_ID=" . $uid)
			or die(mysqli_error($this->db_id));

		$cert = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			$cert = $logged;
		    $auth = $this->getAuthorByTrainingId($cert['TRAINING_ID']);
		    $cert['AUTHOR'] = $auth['AUTHOR'] == "Click Here" ? $auth['AUTHOR_ABOUT'] : $auth['AUTHOR'];
		}
		return $cert;
	}

	function getAuthorByTrainingId($tid) {

        $result = mysqli_query($this->db_id,"SELECT CEU_TRAININGS.AUTHOR_ID, CEU_AUTHORS.AUTHOR, CEU_AUTHORS.AUTHOR_ABOUT FROM CEU_TRAININGS LEFT JOIN CEU_AUTHORS ON CEU_TRAININGS.AUTHOR_ID=CEU_AUTHORS.ID WHERE TRAINING_ID=" . $tid)
        or die(mysqli_error($this->db_id));

        while ($logged = mysqli_fetch_assoc($result)) {
            return $logged;
        }
    }

	function insertCertificates($cartArr) {

		$data = $_SESSION['session_data'];
		// session_data carries either DB-row (STATE) or form (state) keys
		$state = $data['STATE'] ?? $data['state'] ?? '';

	// REMOVED 4/25/14 - MAYBE NOT A GOOD IDEA BUT FOR NOW - ONCE VERICARE IS DONE MAYBE PUT BACK
//		$verify_user = USER::checkEmailExistsUser($_COOKIE['ceu'], $email);
//		if(!$verify_user)
//			header("location: /user/");

//		$email = $data['EMAIL'] != "" ? $data['EMAIL'] : $data['email'];
//		$verify_user = USER::checkEmailExists($email);
//		if(!$verify_user):
//			header("location: /user/");
//			exit;
//		endif;

		$cartArr = explode("|", $cartArr);

		$title_list = "";
		$user_completed = $this->getCompletedTraining($_COOKIE['ceu']);

		foreach($cartArr as $val) {

			$newID = 0;

			if($val != "") {
				$this_training_info = $this->getTrainingDetailsFromArray($val, $user_completed);
				$title = addslashes($this_training_info['TRAINING_TITLE']);

				$query = "INSERT INTO CEU_CERTIFICATES SET TRAINING_ID=" . $val . ", TRAINING_TITLE='" . $title . "', DATE_COMPLETED='" . $this_training_info['DATE_COMPLETED'] . "', PROFESSION_ID=" . $this_training_info['PROFESSION_ID'] . ", STATE='" . $this_training_info['STATE'] . "', USER_ID=" . $this_training_info['USER_ID'] . ", CREDITS='" . $this_training_info['CREDITS'] . "', SCORE='" . $this_training_info['SCORE'] . "'";
				mysqli_query($this->db_id, $query);
				$newID = mysqli_insert_id($this->db_id);

				if($newID > 0)
					$this->removeTrainingTaken($this_training_info['ID']); // AFTER ENTERING CERTIFICATE WE REMOVE FROM CEU_TRAININGS_TAKEN

				$title_list .= $title . "<br>";
			}
		}
		return $title_list;

	}

	function insertFreeCertificate($data)
	{
		$dc = $data['date'] == '' ? date("Y-m-d H:i:s") : $data['date'];

		$query = "INSERT INTO CEU_CERTIFICATES SET TRAINING_ID=" . $data['tid'] . ", TRAINING_TITLE='" . addslashes($data['training_title']) . "', DATE_COMPLETED='" . $dc  . "', PROFESSION_ID=" . $data['profession_id'] . ", STATE='" . $data['state'] . "', USER_ID=" . $data['uid'] . ", CREDITS='" . $data['credits'] . "', SCORE='" . $data['score'] . "'";
		mysqli_query($this->db_id, $query);
		$this->removeTrainingByTidAndUid($data['tid'], $data['uid']); // AFTER ENTERING CERTIFICATE WE REMOVE FROM CEU_TRAININGS_TAKEN
	}

	function insertUnlimitedCertificate($data)
	{
		$query = "INSERT INTO CEU_CERTIFICATES SET TRAINING_ID=" . $data['tid'] . ", TRAINING_TITLE='" . addslashes($data['training_title']) . "', DATE_COMPLETED='" . $data['date_completed']  . "', PROFESSION_ID=" . $data['profession_id'] . ", STATE='" . $data['state'] . "', USER_ID=" . $data['uid'] . ", CREDITS='" . $data['credits'] . "', SCORE='" . $data['score'] . "'";
		mysqli_query($this->db_id, $query);
		$this->removeTrainingByTidAndUid($data['tid'], $data['uid']); // AFTER ENTERING CERTIFICATE WE REMOVE FROM CEU_TRAININGS_TAKEN
	}

	function insert3TestLimit($data, $num_insert) {

		if($num_insert == "1") {
			$query = "INSERT INTO CEU_TRAINING_TRACKING SET ";
			$query .= "USER_ID=" . $data['uid'] . ", ";
			$query .= "TRAINING_ID='" . $data['tid'] . "', ";
			$query .= "SCORE_1='" . $data['score'] . "', ";
			$query .= "DATE_1='" . date("Y-m-d H:i:s") . "';";
		} elseif($num_insert == "2") {
			$query = "UPDATE CEU_TRAINING_TRACKING SET ";
			$query .= "SCORE_2='" . $data['score'] . "', ";
			$query .= "DATE_2='" . date("Y-m-d H:i:s") . "' ";
			$query .= "WHERE USER_ID=" . $data['uid'] . " AND TRAINING_ID='" . $data['tid'] . "'";
		}elseif($num_insert == "3") {
			$query = "UPDATE CEU_TRAINING_TRACKING SET ";
			$query .= "SCORE_3='" . $data['score'] . "', ";
			$query .= "DATE_3='" . date("Y-m-d H:i:s") . "' ";
			$query .= "WHERE USER_ID=" . $data['uid'] . " AND TRAINING_ID='" . $data['tid'] . "'";
		}
		mysqli_query($this->db_id, $query);
	}

	function get3TestLimit($data) {
		// THIS PULLS ALL TRAININGS USER HAS TAKEN
		$query = "SELECT * FROM CEU_TRAINING_TRACKING WHERE USER_ID=" . $data['uid'] . " AND TRAINING_ID='" . $data['tid'] . "'";

		$result = mysqli_query($this->db_id, $query);
		$res = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			$res = $logged;
		}
		if($res['SCORE_1'] == '' && $res['DATE_1'] == "") {
			return '1';
		} else if($res['SCORE_2'] == '' && $res['DATE_2'] == "") {
			return '2';
		} else if($res['SCORE_3'] == '' && $res['DATE_3'] == "") {
			return '3';
		} else if($res['SCORE_3'] != '' && $res['DATE_3'] != "") {
			return 'max';
		}
	}

	function get3TestData($uid) {
		// THIS PULLS ALL TRAININGS USER HAS TAKEN
		$query = "SELECT * FROM CEU_TRAINING_TRACKING WHERE USER_ID=" . $uid;

		$result = mysqli_query($this->db_id, $query);
		while ($logged = mysqli_fetch_assoc($result)) {
			$res[$logged['TRAINING_ID']] = $logged;
		}
		return $res;
	}

	public function loadPostTest($uid, $data, $score) {
		$tid = $data['testNum'];

//		foreach($data as $key=>$value) {
//			if($key != 'testNum' && $key != 'todo' && $key != 'num_questions' && $key != 'score') {
//				$answers .= $key . '-' . $value . '|';
//			}
//		}
//		$answers = substr($answers, 0, -1);

		for($i=0; $i<$data['num_questions']; $i++) {
			if(!empty($data['q' . $i])) {
				$answers .= 'q' . $i . '-' . $data['q' . $i] . '|';
			} else {
				$answers .= 'q' . $i . '-0|';
			}
		}

		$query = "INSERT INTO CEU_POST_TEST_RESULTS SET ";
		$query .= "USER_ID=" . $uid . ", ";
		$query .= "TRAINING_ID='" . $tid . "', ";
		$query .= "TRAINING_ANSWERS='" . $answers . "', ";
		$query .= "SCORE='" . $score . "', ";
		$query .= "DATE_TAKEN='" . date("Y-m-d H:i:s") . "' ";
		$query .= "ON DUPLICATE KEY UPDATE TRAINING_ANSWERS='" . $answers . "', ";
		$query .= "SCORE='" . $score . "', ";
		$query .= "DATE_TAKEN='" . date("Y-m-d H:i:s") . "'";

		mysqli_query($this->db_id, $query);
	}

	public function loadPostTest_V2($uid, $answer_str, $score, $tid) {

		$query = "INSERT INTO CEU_POST_TEST_RESULTS SET ";
		$query .= "USER_ID=" . $uid . ", ";
		$query .= "TRAINING_ID='" . $tid . "', ";
		$query .= "TRAINING_ANSWERS='" . $answer_str . "', ";
		$query .= "SCORE='" . $score . "', ";
		$query .= "DATE_TAKEN='" . date("Y-m-d H:i:s") . "' ";
		$query .= "ON DUPLICATE KEY UPDATE TRAINING_ANSWERS='" . $answer_str . "', ";
		$query .= "SCORE='" . $score . "', ";
		$query .= "DATE_TAKEN='" . date("Y-m-d H:i:s") . "'";

		mysqli_query($this->db_id, $query);
	}

	public function postTestSubmission($uid, $tid) {
		$result = mysqli_query($this->db_id, "SELECT TRAINING_ANSWERS FROM CEU_POST_TEST_RESULTS WHERE USER_ID=" . $uid . " AND TRAINING_ID=" . $tid )
		or die(mysqli_error($this->db_id));
		$res = mysqli_fetch_assoc($result);
		$res_array = explode("|", $res['TRAINING_ANSWERS']);
		foreach($res_array as $k=>$v) {
			$temp = explode("-", $v);
			$new_array[$temp[0]] = $temp[1];
		}
		return $new_array;
	}

	function deletePostTestSubmission($uid, $tid){
		$result = mysqli_query($this->db_id, "DELETE FROM CEU_POST_TEST_RESULTS WHERE USER_ID=" . $uid . " AND TRAINING_ID=" . $tid )
		or die(mysqli_error($this->db_id));
	}

	function getCertificates($uid) {
		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_CERTIFICATES WHERE USER_ID=" . $uid . " ORDER BY DATE_COMPLETED DESC" )
		or die(mysqli_error($this->db_id));
		$certificates = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$check_utype_training = $this->checkUtypeTraining($logged['TRAINING_ID']); // THIS CHECKS IF TRAINING IS "LIVINGWORKS" AND IF SO WE NEED TO ADD VAR TO CERT TABLE
			if($check_utype_training):
				$logged['UTYPE'] = "lv"; // THIS IS SET SO WE KNOW CERT IF FROM LIVING WORKS
			endif;
			$certificates[] = $logged;
		}
		return $certificates;
	}

	function getAuthors($author_ids) {
		$result = mysqli_query($this->db_id, "SELECT AUTHOR, AUTHOR_LICENSE, AUTHOR_ABOUT FROM CEU_AUTHORS WHERE ID IN(" . $author_ids . ")") // $author_ids is comma deliminated
			or die(mysqli_error($this->db_id));

		$author = "";
		$author_lic = "";
		while ($logged = mysqli_fetch_assoc($result)) {
			$author .= $logged['AUTHOR'] . "|";
			$author_lic .= $logged['AUTHOR_LICENSE'] . "|";
		}
		return $author . "^" . $author_lic;
	}

	function removeTrainingTaken($ID)
	{
		$result = mysqli_query($this->db_id, "DELETE FROM CEU_TRAININGS_TAKEN WHERE ID=" . $ID )
			or die(mysqli_error($this->db_id));
	}

	function removeTrainingByTidAndUid($tid, $uid)
	{
		$result = mysqli_query($this->db_id, "DELETE FROM CEU_TRAININGS_TAKEN WHERE USER_ID=" . $uid . " AND TRAINING_ID=" . $tid )
			or die(mysqli_error($this->db_id));

		return true;
	}

	function processPassedTrainings($uid) {
		$trainings = $this->getTrainingsForCart($uid);
		for($i=0; $i<count($trainings); $i++)
		{
			if($trainings[$i]['PASSING'] == '1') {
				$data['tid'] = $trainings[$i]['TRAINING_ID'];
				$data['training_title'] = addslashes($trainings[$i]['TRAINING_TITLE']);
				$data['date_completed'] = $trainings[$i]['DATE_COMPLETED'];
				$data['profession_id'] = $trainings[$i]['PROFESSION_ID'];
				$data['state'] = $trainings[$i]['STATE'];
				$data['uid'] = $uid;
				$data['credits'] = $trainings[$i]['CREDITS'];
				$data['score'] = $trainings[$i]['SCORE'];

				$this->insertUnlimitedCertificate($data); 				// INSERT PASSED TRAININGS INTO CERT TABLE
				$this->removeTrainingByTidAndUid($data['tid'], $uid);	// REMOVE TRAININGS THAT HAVE BEEN ADDED TO CERT TABLE

				$p_trainings[] = $trainings[$i]; // ADD PASSED TRAININGSTO ARRAY
			}
		}

	}


	function checkUtypeTraining($tid) {

		$result = mysqli_query($this->db_id, "SELECT AUTHOR_ID FROM CEU_TRAININGS WHERE TRAINING_ID=" . $tid . " AND AUTHOR_ID='33'")
			or die(mysqli_error($this->db_id));
		return mysqli_num_rows($result);

	}

//*****************************************************************************************
// WORK IN PROGRESS
//*****************************************************************************************

 function getTrainingsByTopics($pro_id) {
        $query = "SELECT a.*, b.*, c.TOPIC, d.TITLE, d.AUTHOR_ID, d.NOTES, e.AUTHOR, e.AUTHOR_ABOUT, e.AUTHOR_LICENSE
			FROM
			CEU_TRAININGS_GROUPINGS a,
			CEU_TRAININGS_BY_PROFESSION b,
			CEU_TRAINING_TOPICS c,
			CEU_TRAININGS d,
			CEU_AUTHORS e
			WHERE
			a.GROUPING_ID=c.ID AND
			a.TRAINING_ID=b.TRAINING_ID AND
			b.TRAINING_ID=d.TRAINING_ID AND
			e.ID=d.AUTHOR_ID AND
			b.PROFESSION_ID=" . $pro_id . " AND
-			EXPIRED IS NULL
			GROUP BY a.GROUPING_ID, b.TRAINING_ID
			ORDER BY c.TOPIC";

        $result = mysqli_query($this->db_id, $query);

        $trainings = array();
        if ($result) {
            while ($logged = mysqli_fetch_assoc($result)) {
                $trainings[$logged['TOPIC']][] = $logged;
            }
        }
        return $trainings;

    }

    function getTrainingsByCredits($pro_id) {
        $query = "SELECT a.*, b.*, c.TOPIC, d.TITLE, d.AUTHOR_ID, d.NOTES, e.AUTHOR, e.AUTHOR_ABOUT, e.AUTHOR_LICENSE
			FROM
			CEU_TRAININGS_GROUPINGS a,
			CEU_TRAININGS_BY_PROFESSION b,
			CEU_TRAINING_TOPICS c,
			CEU_TRAININGS d,
			CEU_AUTHORS e
			WHERE
			a.GROUPING_ID=c.ID AND
			a.TRAINING_ID=b.TRAINING_ID AND
			b.TRAINING_ID=d.TRAINING_ID AND
			e.ID=d.AUTHOR_ID AND
			b.PROFESSION_ID=" . $pro_id . " AND
-			EXPIRED IS NULL
			GROUP BY b.CREDIT, b.TRAINING_ID";

        $result = mysqli_query($this->db_id, $query);

        while ($logged = mysqli_fetch_assoc($result)) {
            $trainings[$logged['CREDIT']][] = $logged;
        }
        return $trainings;
    }

    function getNewTrainings($pro_id) {

        $today = date("Y-m-d H:i:s");

//			$result = mysqli_query("SELECT a.* FROM CEU_TRAININGS WHERE AUTHOR_ID IS NOT NULL AND UPDATED BETWEEN '" . date("Y-m-d H:i:s", strtotime("-61 days")) . "' AND '" . $today . "'")
        // 092813 - ( ADDED EXPIRED IS NULL )
		$str = "SELECT a.*, b.TITLE_ALT FROM CEU_TRAININGS a, CEU_TRAININGS_BY_PROFESSION b WHERE AUTHOR_ID IS NOT NULL AND EXPIRED IS NULL AND UPDATED BETWEEN '" . date("Y-m-d H:i:s", strtotime("-91 days")) . "' AND '" . $today . "' AND a.TRAINING_ID=b.TRAINING_ID AND b.PROFESSION_ID = " . $pro_id . " ORDER BY UPDATED DESC";
		// removed AUTHOR_ID NULL
		$str = "SELECT a.*, b.TITLE_ALT FROM CEU_TRAININGS a, CEU_TRAININGS_BY_PROFESSION b WHERE EXPIRED IS NULL AND UPDATED BETWEEN '" . date("Y-m-d H:i:s", strtotime("-91 days")) . "' AND '" . $today . "' AND a.TRAINING_ID=b.TRAINING_ID AND b.PROFESSION_ID = " . $pro_id . " ORDER BY UPDATED DESC";
        $result = mysqli_query($this->db_id, $str)
        or die(mysqli_error($this->db_id));

        $trainings = array();
        while ($logged = mysqli_fetch_assoc($result)) {
            $trainings[] = $logged;
        }
        return $trainings;
    }

// ************************************************
// ADMIN
// ************************************************

	function markTrainingAsPaid($id) {

		echo "DONE";
		// GET TRAINING DETAILS
		// INSERT THOSE DETAILS INTO CERTIFICATE
		// DELETE TRAINING FROM TRAINING TAKEN
//		$this->removeTrainingTaken($tid);


		$cartArr = explode("|", $cartArr);

		$data = $_SESSION['session_data'];
		$state = $data['state'];

		$user_completed = $this->getCompletedById($id);
//print_r($user_completed);
//die;

		$tid = $user_completed['TRAINING_ID'];
		$title = $user_completed['TRAINING_TITLE'];
		$date_completed = $user_completed['DATE_COMPLETED'];
		$pid = $user_completed['PROFESSION_ID'];
		$state = $user_completed['STATE'];
		$uid = $user_completed['USER_ID'];
		$credits = $user_completed['CREDITS'];
		$score = $user_completed['SCORE'];

		$query = "INSERT INTO CEU_CERTIFICATES SET TRAINING_ID=" . $tid . ", TRAINING_TITLE='" . $title . "', DATE_COMPLETED='" . $date_completed . "', PROFESSION_ID=" . $pid . ", STATE='" . $state . "', USER_ID=" . $uid . ", CREDITS='" . $credits . "', SCORE='" . $score . "'";
echo $query;
die;
		mysqli_query($this->db_id, $query);
		$newID = mysqli_insert_id($this->db_id);

		if($newID > 0)
			$this->removeTrainingTaken($this_training_info['ID']); // AFTER ENTERING CERTIFICATE WE REMOVE FROM CEU_TRAININGS_TAKEN

		return $title_list;


	}

	function getCompletedById($id) {

		// THIS PULLS COMPLETED TRAININGS NOT PAID FOR
		$result = mysqli_query($this->db_id, "SELECT a.* FROM CEU_TRAININGS_TAKEN a WHERE a.ID =" . $id)
			or die(mysqli_error($this->db_id));

		$training = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			$training = $logged;
		}

		return $training;
	}



// ************************************************
// CRON JOBS RELATED
// ************************************************

	function getTrainingsForCAInsuranceSubmission($profession_id) { // PULLS TRAININGS ON THE 1ST AND 15TH EMAILS TO GROUP FOR BOARD SUBMISSION

		$result = mysqli_query($this->db_id, "SELECT a.*, b.FIRST, b.LAST, b.LIC_NUM, b.SSN, c.COURSE_ID FROM CEU_CERTIFICATES a, CEU_USER b, CEU_TRAININGS_REPORT_ID c WHERE a.REPORTED is null AND a. PROFESSION_ID=" . $profession_id . " AND a.STATE='CA' AND c.STATE='CA' AND c.TRAINING_ID=a.TRAINING_ID AND a.USER_ID=b.ID")
			or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}

		return $trainings;
	}

	function getCompletedTrainingsByDate($tid, $month, $year) {
//		$result = mysqli_query("SELECT CEU_CERTIFICATES.TRAINING_ID, COUNT(*), CEU_TRAININGS.TITLE FROM CEU_CERTIFICATES, CEU_TRAININGS WHERE CEU_CERTIFICATES.TRAINING_ID=CEU_TRAININGS.TRAINING_ID AND MONTH(DATE_COMPLETED)='" . $month . "' AND YEAR(DATE_COMPLETED)='" . $year . "' GROUP BY CEU_TRAININGS.TRAINING_ID ORDER BY CEU_TRAININGS.TRAINING_ID")
			$result = mysqli_query($this->db_id, "SELECT COUNT(*) FROM CEU_CERTIFICATES WHERE TRAINING_ID=" . $tid . " AND MONTH(DATE_COMPLETED)='" . $month . "' AND YEAR(DATE_COMPLETED)='" . $year . "' GROUP BY TRAINING_ID ORDER BY TRAINING_ID")
			or die(mysqli_error($this->db_id));

		$resp = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$resp[] = $logged;
		}

		return $resp;
	}

	function markCAInsuranceTrainingsAsReported($arr) {
		for($i=0; $i<count($arr); $i++) {
			$query = "UPDATE CEU_CERTIFICATES SET  
				REPORTED = '1'
				WHERE ID=" . (int)$arr[$i]['ID'];
			$result = mysqli_query($this->db_id, $query);
		}
	}

	function checkFor60DayOldTrainings() { // PULLS ALL TRAININGS 60 DAYS OR OLDER FOR DELETION - 1 DAY GRACE PERIOD
			$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRAININGS_TAKEN WHERE DATE_COMPLETED BETWEEN '2001-01-01 00:00:00' AND '" . date("Y-m-d H:i:s", strtotime("-61 days")) . "'")
			or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}

		$result = mysqli_query($this->db_id, "DELETE FROM CEU_TRAININGS_TAKEN WHERE DATE_COMPLETED BETWEEN '2001-01-01 00:00:00' AND '" . date("Y-m-d H:i:s", strtotime("-61 days")) . " '")
		or die(mysqli_error($this->db_id));

		return $trainings;

	}

	function checkTrainingsExpiring_45Days() { // 2 WEEKS UNTILL TRAININGS EXPIRE
			$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRAININGS_TAKEN WHERE PASSING='1' AND DATE_COMPLETED BETWEEN '" . date("Y-m-d H:i:s", strtotime("-46 days")) . "' AND '" . date("Y-m-d H:i:s", strtotime("-45 days")) . "' ORDER BY USER_ID ASC") // 2 WEEKS LEFT TO EXPIRE
			or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}

		return $trainings;

	}

	function checkTrainingsExpiring_52Days() { // 1 WEEK UNTILL  TRAININGS EXPIRE
			$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRAININGS_TAKEN WHERE PASSING='1' AND DATE_COMPLETED BETWEEN '" . date("Y-m-d H:i:s", strtotime("-53 days")) . "' AND '" . date("Y-m-d H:i:s", strtotime("-52 days")) . " ' ORDER BY USER_ID ASC") // 2 WEEKS LEFT TO EXPIRE
			or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}

		return $trainings;

	}

	function checkTrainingsExpiring_59Days() { // 1 DAY UNTIL TRAININGS EXPIRE
			$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRAININGS_TAKEN WHERE PASSING='1' AND DATE_COMPLETED BETWEEN '" . date("Y-m-d H:i:s", strtotime("-60 days")) . "' AND '" . date("Y-m-d H:i:s", strtotime("-59 days")) . " ' ORDER BY USER_ID ASC") // 2 WEEKS LEFT TO EXPIRE
			or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}

		return $trainings;

	}

	// ************************************************************
	// CERT EXPIRING REMINDERS - PULLS PASSED TRAININGS THAT WERE COMPLETED EXACTLY 30 / 45 / 55 DAYS AGO
	// JOINS CEU_USER SO THE RETURNED ROWS ARE READY TO PASS TO Sendy->subscribe() (name/email/profession ALIASES)
	// CERT EXPIRES 60 DAYS AFTER DATE_COMPLETED - SO THESE ARE 30 / 15 / 5 DAY WARNINGS
	function checkCertExpiring_30Days() { // 30 DAYS OLD - 30 DAYS LEFT BEFORE CERT EXPIRES
		$result = mysqli_query($this->db_id, "SELECT t.USER_ID, t.TRAINING_TITLE, t.DATE_COMPLETED, u.ID, u.FIRST as name, u.EMAIL as email, u.PROFESSION as profession FROM CEU_TRAININGS_TAKEN t, CEU_USER u WHERE t.USER_ID = u.ID AND t.PASSING='1' AND t.DATE_COMPLETED BETWEEN '" . date("Y-m-d 00:00:00", strtotime("-30 days")) . "' AND '" . date("Y-m-d 23:59:59", strtotime("-30 days")) . "' ORDER BY t.USER_ID ASC")
		or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}

		return $trainings;
	}

	function checkCertExpiring_45Days() { // 45 DAYS OLD - 15 DAYS LEFT BEFORE CERT EXPIRES
		$result = mysqli_query($this->db_id, "SELECT t.USER_ID, t.TRAINING_TITLE, t.DATE_COMPLETED, u.ID, u.FIRST as name, u.EMAIL as email, u.PROFESSION as profession FROM CEU_TRAININGS_TAKEN t, CEU_USER u WHERE t.USER_ID = u.ID AND t.PASSING='1' AND t.DATE_COMPLETED BETWEEN '" . date("Y-m-d 00:00:00", strtotime("-45 days")) . "' AND '" . date("Y-m-d 23:59:59", strtotime("-45 days")) . "' ORDER BY t.USER_ID ASC")
		or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}

		return $trainings;
	}

	function checkCertExpiring_55Days() { // 55 DAYS OLD - 5 DAYS LEFT BEFORE CERT EXPIRES
		$result = mysqli_query($this->db_id, "SELECT t.USER_ID, t.TRAINING_TITLE, t.DATE_COMPLETED, u.ID, u.FIRST as name, u.EMAIL as email, u.PROFESSION as profession FROM CEU_TRAININGS_TAKEN t, CEU_USER u WHERE t.USER_ID = u.ID AND t.PASSING='1' AND t.DATE_COMPLETED BETWEEN '" . date("Y-m-d 00:00:00", strtotime("-55 days")) . "' AND '" . date("Y-m-d 23:59:59", strtotime("-55 days")) . "' ORDER BY t.USER_ID ASC")
		or die(mysqli_error($this->db_id));

		$trainings = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trainings[] = $logged;
		}

		return $trainings;
	}

	function wipeSendyList($list_num) { // REMOVES EVERY SUBSCRIBER ROW FOR A GIVEN SENDY LIST (NUMERIC lists.id) - SENT OR NOT
		mysqli_query($this->db_id, "DELETE FROM subscribers WHERE list = " . (int)$list_num)
		or die(mysqli_error($this->db_id));
	}

	function getAllAuthors() {
		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_AUTHORS") // $author_ids is comma deliminated
			or die(mysqli_error($this->db_id));

		$auth = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$auth[] = $logged;
		}
		return $auth;
	}

	function getAllTopics() {
		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRAINING_TOPICS") // $author_ids is comma deliminated
			or die(mysqli_error($this->db_id));

		$topics = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$topics[] = $logged;
		}
		return $topics;
	}

	function insertTrainingGeneric($d) { // THIS IS HIT FROM /couse_insert/index.php

		$q = "SELECT MAX(TRAINING_ID) FROM CEU_TRAININGS";
		$max = mysqli_result(mysqli_query($this->db_id, $q), 0);

		$query = "INSERT INTO CEU_TRAININGS SET 
			TRAINING_ID		= " . ($max + 1) . ",
			TITLE 			= '" . safe($d['title']) . "',
			CREDITS 		= '" . safe($d['credits']) . "',
			COST 			= '" . safe($d['cost']) . "',
			AUTHOR_ID 		= '" . safe($d['author']) . "',
			CEBROKER_ID 	= '" . safe($d['ceb_id']) . "',
			CEBROKER_TRACK 	= '" . safe($d['ceb_tid']) . "',
			NOTES			= '" . safe($d['notes']) . "',
			UPDATED 		= '" . date("Y-m-d H:i:s") ."'";

			mysqli_query($this->db_id, $query);
			return ($max+1);

	}

	function insertTrainingProfession($arr) { // THIS IS HIT FROM /couse_insert/index.php


		$query = "INSERT INTO CEU_TRAININGS_BY_PROFESSION SET 
			TRAINING_ID		= " . $arr['tid'] . ",
			PROFESSION_ID	= " . $arr['pid'] . ",
			TITLE_ALT		= '" . safe($arr['title']) . "',
			CREDIT	 		= '" . safe($arr['credits']) . "',
			COST 			= '" . safe($arr['cost']) . "',
			PASSING 		= '" . safe($arr['pass']) . "',
			EXPIRED		 	= '1'";

			mysqli_query($this->db_id, $query);

	}

	function insertTrainingGroups($tid, $arr) { // THIS IS HIT FROM /couse_insert/index.php

		for($i=0; $i<count($arr); $i++):
			$query = "INSERT INTO CEU_TRAININGS_GROUPINGS SET 
				GROUPING_ID		= " . $arr[$i] . ",
				TRAINING_ID		= " . $tid;

				mysqli_query($this->db_id, $query);
		endfor;
	}

	function getGroupingNames($tid) {

		if($tid):
			$result = mysqli_query($this->db_id, "SELECT b.TOPIC FROM CEU_TRAININGS_GROUPINGS a, CEU_TRAINING_TOPICS b WHERE a.GROUPING_ID=b.ID AND a.TRAINING_ID=" . $tid)
				or die(mysqli_error($this->db_id));

			$top = array();
			while ($logged = mysqli_fetch_assoc($result)) {
				$top[] = $logged;
			}
			return $top;
		endif;
	}

}

?>
