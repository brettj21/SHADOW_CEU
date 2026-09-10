<?php

require_once(__DIR__ . '/DB.class.php');

class USER extends DB {

	var $db_id;

	function logon($DB_HOST, $DB_LOGIN, $DB_PASS, $DB){
		$this->db_id = mysqli_connect ($DB_HOST, $DB_LOGIN, $DB_PASS, $DB) or die (mysqli_error('Cannot connect to the database'));
	}

	function closeDB() {
		mysqli_close($this->db_id);
	}


	function insertUser($post) {

		if($post['DATE_JOIN_OLD'] != "")
			$date = $post['DATE_JOIN_OLD'];
		else
			$date = date("Y-m-d H:i:s");

		$query = "INSERT INTO CEU_USER SET 
		FIRST = '" . safe($post['first']) . "', 
		LAST = '" . safe($post['last']) . "',
		EMAIL = '" . safe($post['email']) . "', 
		ADDRESS_1 = '" . safe($post['address_1']) . "', 
		ADDRESS_2 = '" . safe($post['address_2']) . "', 
		CITY = '" . safe($post['city']) . "', 
		STATE = '" . safe($post['state']) . "',
		ZIP = '" . safe($post['zip']) . "', 
		PHONE = '" . safe($post['phone']) . "', 
		PASS = '" . hash("sha256", $post['pass1']) . "', 
		QUESTION = '" . safe($post['question']) . "', 
		SECURITY_1 = '" . safe($post['security']) . "', 
		PROFESSION = '" . safe($post['profession']) . "', 
		DOB = '" . safe($post['dob_year'] . "-" . $post['dob_month'] . "-" . $post['dob_day']) . " 00:00:00" . "',
		SSN = '" . safe(str_replace("-", "", $post['ssn'] ?? '')) . "',   
		LIC_EXP = '" . safe($post['exp_year'] . "-" . $post['exp_month'] . "-" . $post['exp_day']) . " 00:00:00" . "', 
		LIC_NUM = '" . safe($post['lic_num']) . "', 
		UTYPE = '" . safe($post['UTYPE']) . "', 
		DATE_ENTERED = '". $date ."', 
		DATE_VISITED = '" . date("Y-m-d H:i:s") ."'";
// ADDED 01042023 - CHECK IF USERS ARE SUCCESSFUL NOT THE HACKER
//		if($post['profession'] == "social-workers" || post['profession'] == "mft-lcsw" || post['profession'] == "psychologist" || post['profession'] == "counselor-addiction" || post['profession'] == "Profession") {
//		if(strlen($post['first']) < 20 && $post['lic_num'] != '') {
			mysqli_query($this->db_id, $query);
			$newID = mysqli_insert_id($this->db_id);
			$this->addUserToSendyGlobalList($post);
			return $newID;
//		}
	}

	function addUserToSendyGlobalList($post) {
		$time = time();
		$join_date = round(time()/60)*60;

		$sql = "INSERT INTO subscribers SET userID=1, name='" . safe(str_replace("'", "\'", stripslashes($post['first']))) . "', email='" . safe($post['email']) . "', custom_fields='" . safe($post['profession']) . "', list=1, timestamp='" . $time . "', join_date='" . $join_date . "', confirmed=1, method=1, added_via=2; ";
		mysqli_query($this->db_id,$sql) or die(mysqli_error($this->db_id));
	}

	function editUser($post, $first) {
		$query = "UPDATE CEU_USER SET 
		email = '" . safe($post['email']) . "', 
		ADDRESS_1 = '" . safe($post['address_1']) . "', 
		ADDRESS_2 = '" . safe($post['address_2']) . "', 
		CITY = '" . safe($post['city']) . "', 
		STATE = '" . safe($post['state']) . "',
		ZIP = '" . safe($post['zip']) . "', 
		PHONE = '" . safe($post['phone']) . "', 
		PROFESSION = '" . safe($post['profession']) . "', 
		DOB = '" . safe($post['dob_year'] . "-" . $post['dob_month'] . "-" . $post['dob_day']) . " 00:00:00" . "', 
		SSN = '" . safe(str_replace("-", "", $post['ssn'] ?? '')) . "',   
		LIC_EXP = '" . safe($post['exp_year'] . "-" . $post['exp_month'] . "-" . $post['exp_day']) . " 00:00:00" . "', 
		LIC_NUM = '" . safe($post['lic_num']) . "', 
		QUESTION = '" . safe($post['question']) . "', 
		SECURITY_1 = '" . safe($post['security']) . "' 
		WHERE PASS='" .  $_COOKIE['ceuSession'] . "' 
		AND FIRST='" . $first . "' 
		AND ID=" . $_COOKIE['ceu'];

		mysqli_query($this->db_id, $query);
		return mysqli_affected_rows($this->db_id);
	}


	function insertUnlimitedUser($uid, $trans_id, $unlimited_duration) {

		$date = date('Y-m-d H:i:s',strtotime(date("Y-m-d H:i:s", mktime()) . " +" . $unlimited_duration));

		$query = "INSERT INTO CEU_USER_UNLIMITED SET 
		USER_ID = '" . $uid . "', 
		EXPIRES = '" . $date . "',
		TRANS_ID = '" . $trans_id . "'";

		mysqli_query($this->db_id, $query);
		return $newID;

	}

	function getUnlimitedUser($uid) {
		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_USER_UNLIMITED WHERE USER_ID=" . $uid)
			or die(mysqli_error($this->db_id));

		$data = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			$data = $logged;
		}
		return $data;
	}


	function getAllUsers() {
		$result = mysqli_query($this->db_id,"SELECT * FROM CEU_USER ORDER BY DATE_VISITED DESC LIMIT 25")
			or die(mysqli_error($this->db_id));

		$users = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$users[] = $logged;
		}
		return $users;
	}


	function getUser($uid) {
		$result = mysqli_query($this->db_id,"SELECT * FROM CEU_USER WHERE ID=" . $uid)
			or die(mysqli_error($this->db_id));

		$user = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			$user = $logged;
		}
		return $user;
	}


	function editUserSecurity($post) {
		$query = "UPDATE CEU_USER SET 		
		PASS = '" . hash("sha256", $post['pass1']) . "'
		WHERE PASS='" .  $_COOKIE['ceuSession'] . "' 
		AND ID=" . $_COOKIE['ceu'];

		mysqli_query($this->db_id, $query);
		return mysqli_affected_rows($this->db_id);
	}


	function updateUserLicense($user_id, $new_date) {
		$query = "UPDATE CEU_USER SET 		
		LIC_EXP = '" . safe($new_date) . "'
		WHERE ID='" .  $user_id . "'";

		mysqli_query($this->db_id, $query);
		return mysqli_affected_rows($this->db_id);
	}


	function checkEmailExists($email) {

		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_USER WHERE EMAIL='" . safe($email) . "'")
			or die(mysqli_error($this->db_id));
		return mysqli_num_rows($result);

	}


	function checkUserIsUser($uid, $pass) {

	    $uid = safe($uid);
	    $pass = safe($pass);
	    $query = "SELECT * FROM CEU_USER WHERE ID='" . $uid . "' AND PASS='" . $pass . "'";

		$result = mysqli_query($this->db_id, $query)
			or die(mysqli_error($this->db_id));

		return mysqli_num_rows($result);

	}

	function checkEmailExistsUser($id, $email) { // CHECKS USERS EMAIL IGNORING THE ACTUAL USER LOGGED IN
			$result = mysqli_query($this->db_id,"SELECT * FROM CEU_USER WHERE EMAIL='" . safe($email) . "' AND id !=" . $id)
			or die(mysqli_error($this->db_id));
		return mysqli_num_rows($result);
	}

	function userLogin($post) {
		$result = mysqli_query($this->db_id,"SELECT * FROM CEU_USER WHERE EMAIL='" . safe($post['email']) . "' AND PASS='" . hash("sha256", $post['pass']) . "'")
			or die(mysqli_error($this->db_id));

		$data = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$data[] = $logged;
		}

		if(!empty($data))
			$this->updateVisitDate($data[0]['ID']);
		return $data;

	}

	function updateVisitDate($id) {
		$query = "UPDATE CEU_USER SET DATE_VISITED='" . date("Y-m-d H:i:s") . "' WHERE ID='" . $id. "'";
		mysqli_query($this->db_id, $query);
	}

	function loginFromCookies($uid, $hashPass) {

		$result = mysqli_query($this->db_id,"SELECT * FROM CEU_USER WHERE ID=" . safe($uid))
			or die(mysqli_error($this->db_id));

		$data = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			if($logged["PASS"] == safe($hashPass))
				$data = $logged;
		}
// ADDED 3/15
		if(!empty($data))
			$this->updateVisitDate($data['ID']);

		return $data;
	}

	function passwordRecoveryInsert($session, $email, $random) {
		$query = "INSERT INTO CEU_PASSWORD_RECOVER SET 
		SESSION_ID = '" . $session . "', 
		EMAIL = '" . safe($email) . "',
		RAND = '" . $random . "', 
		DATE_ENTERED = '". date("Y-m-d H:i:s") ."'";

		mysqli_query($this->db_id, $query);
	}

	function clearSessions($nowMinus30) {
		$query = "DELETE FROM CEU_PASSWORD_RECOVER WHERE DATE_ENTERED BETWEEN '2011-01-01 00:00:00' AND '" . $nowMinus30 . "'";
		mysqli_query($this->db_id, $query);
	}

	function getRecoverVariables($session, $rand) {
			$result = mysqli_query($this->db_id,"SELECT * FROM CEU_PASSWORD_RECOVER WHERE SESSION_ID='" . safe($session) . "' AND RAND='" . safe($rand) . "'")
			or die(mysqli_error($this->db_id));

		while ($logged = mysqli_fetch_assoc($result)) {
			$email = $logged['EMAIL'];
		}
		return $email;
	}

	function changePassword($email, $pass) {
		$query = "UPDATE CEU_USER SET PASS='" . hash("sha256", $pass) . "' WHERE EMAIL='" . $email. "'";
		mysqli_query($this->db_id, $query);
	}

	function resetPass($uid) {
		$query = "UPDATE CEU_USER SET PASS='03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4' WHERE ID='" . $uid. "'";
		mysqli_query($this->db_id, $query);
	}

	function ceBrokerCheckLic($post, $endpoint, $ipp, $uk) {
		$lic = $post['license_num'];
		$lic_pre = strtoupper(substr($lic, 0, 2));
		$lic_num = substr($lic, 2, (strlen($lic) -2));

		$xml = 'InXML=<licensees id_parent_provider="' . $ipp . '" upload_key="' . $uk . '"><licensee><licensee_profession>' . $lic_pre . '</licensee_profession><licensee_number>' . $lic_num . '</licensee_number></licensee></licensees>';

		$resp = GENERIC::execCurl($endpoint, $xml);

		$json_return = GENERIC::xmlToJson( $resp );

		return $json_return;
	}

	function insertCEBrokerData($post, $endpoint, $ipp, $uk) {

        //GENERIC::send_email('brett@ceunits.com', 'info@ceunits.com', 'CE Broker', 'insert hit');

		$resp = $this->ceBrokerCheckLic($post, CEBROKER_ENDPOINT, PARENT_PROVIDER_ID, UPLOAD_KEY);
		$resp = json_decode($resp);
		$valid = ($resp->licensees->licensee->attributes->valid);

		if($valid == "true") { // IF USER EXISTS IN FL SYSTEM
			$first = ($resp->licensees->licensee->attributes->first_name);
			$last = ($resp->licensees->licensee->attributes->last_name);
			$lic_pre = ($resp->licensees->licensee->attributes->licensee_profession);
			$lic_num = ($resp->licensees->licensee->attributes->licensee_number);

			$cartArr = $_COOKIE['cart'];
			$cartArr = explode("|", $cartArr);
			// getCompletedTraining() uses $this, so it needs a real instance -
			// a static call is a fatal Error on PHP 8.
			$t = new TRAININGS;
			$user_completed = $t->getCompletedTraining($_COOKIE['ceu']);

			foreach($cartArr as $val) { // GET TRAINING INFO SO WE CAN ADD IT TO THE CEBROKER XML
				if($val != "") {
					$this_training_info = TRAININGS::getTrainingDetailsFromArray($val, $user_completed);

					$roster .= '<roster id_parent_provider="' . $ipp . '" upload_key="' . $uk . '"><id_provider>' . $ipp . '</id_provider><provider_course_code/><id_course>' . $this_training_info['CEBROKER_ID'] .'</id_course><id_publishing>' . $this_training_info['CEBROKER_TRACK'] . '</id_publishing><end_date>' . date("m/d/Y", strtotime($this_training_info['DATE_COMPLETED'])) . '</end_date><attendees><attendee><licensee_profession>' . $lic_pre . '</licensee_profession><licensee_number>' . $lic_num . '</licensee_number><first_name>' . $first . '</first_name><last_name>' . $last . '</last_name><cebroker_state>' . $post['state'] . '</cebroker_state><date_completed>' . date("m/d/Y", strtotime($this_training_info['DATE_COMPLETED'])) . '</date_completed><ce_credit_hours>' . $this_training_info['CREDITS'] . '</ce_credit_hours></attendee></attendees></roster>';
					//REMOVED THE .0 - $roster .= '<roster id_parent_provider="' . $ipp . '" upload_key="' . $uk . '"><id_provider>' . $ipp . '</id_provider><provider_course_code/><id_course>' . $this_training_info['CEBROKER_ID'] .'</id_course><id_publishing>' . $this_training_info['CEBROKER_TRACK'] . '</id_publishing><end_date>' . date("m/d/Y", strtotime($this_training_info['DATE_COMPLETED'])) . '</end_date><attendees><attendee><licensee_profession>' . $lic_pre . '</licensee_profession><licensee_number>' . $lic_num . '</licensee_number><first_name>' . $first . '</first_name><last_name>' . $last . '</last_name><cebroker_state>' . $post['state'] . '</cebroker_state><date_completed>' . date("m/d/Y", strtotime($this_training_info['DATE_COMPLETED'])) . '</date_completed><ce_credit_hours>' . $this_training_info['CREDITS'] . '.0</ce_credit_hours></attendee></attendees></roster>';

				}
			}

			// THIS HAS TEST = TRUE FOR TESTING
//			$xml = 'InXML=<rosters id_parent_provider="' . $ipp . '" upload_key="' . $uk . '" test="true">' . $roster . '</rosters>';
			$xml = 'InXML=<rosters id_parent_provider="' . $ipp . '" upload_key="' . $uk . '">' . $roster . '</rosters>';

			$resp = GENERIC::execCurl($endpoint, $xml);
			$json_return = GENERIC::xmlToJson( $resp );

            //GENERIC::send_email('brett@ceunits.com', 'info@ceunits.com', 'CE Broker', $json_return);

			// *** DO A CHECK HERE TO SEE IF ENTRY WAS SUCCESSFUL
			return true;
		}

		return false;

	}

	function insertEvalData($user_id, $training_id, $ans, $posiive, $negative, $changeT) {
		$query = "INSERT INTO CEU_EVALS SET 
		UID = '" . safe($user_id) . "', 
		TID = '" . safe($training_id) . "',
		ANSWERS = '" . safe($ans) . "', 
		POSITIVE = '" . safe($posiive) ."',
		NEGATIVE = '" . safe($negative) . "',
		CHANGET = '" . safe($changeT) . "',
		DATE_COMPLETED = '" . date("Y-m-d H:i:s") . "'";

		mysqli_query($this->db_id, $query);
		//$newID = mysql_insert_id();
		return true;
	}
	function getUserEvals($uid, $tid) {
		$query = "SELECT * FROM CEU_EVALS WHERE UID=" . $uid . " AND TID=" . $tid;

		mysqli_query($this->db_id, $query);
		return mysqli_affected_rows($this->db_id);
	}
	//**************************************
	// TRANSACTION FUNCTIONS FOR ADMIN PAGES
	//**************************************

	function getUsersByDate($date, $extra='', $type='') {

		if($type == 'state')
			$add_sql = " AND STATE='" . $extra . "'";
		if($type == 'pro')
			$add_sql = " AND PROFESSION='" . $extra . "'";

		$month = substr($date, 5, 2);
		$year = substr($date, 0, 4);

		$result = mysqli_query($this->db_id, "SELECT DATE(DATE_VISITED), COUNT(*) FROM CEU_USER WHERE MONTH(DATE_VISITED) = " . $month . " AND YEAR(DATE_VISITED) = " . $year . $add_sql . " GROUP BY DATE(DATE_VISITED)")
			or die(mysqli_error($this->db_id));

		$trans = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trans[] = $logged;
		}

		return $trans;
	}

	function getUsersByBDate($month, $day) {

		$result = mysqli_query($this->db_id, "SELECT ID, FIRST as name, EMAIL as email, PROFESSION as profession, DOB FROM CEU_USER WHERE MONTH(DOB) = " . $month . " AND DAY(DOB) = " . $day)
			or die(mysqli_error($this->db_id));

		$trans = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trans[] = $logged;
		}

		return $trans;
	}

	function getNewUsers($month, $year=null) {

		$sql = "SELECT COUNT(*) FROM CEU_USER WHERE MONTH(DATE_ENTERED) = '" . $month . "'";

		if($year) {
			$sql .= " AND YEAR(DATE_ENTERED) = '" . $year . "'";
		}

		$result = mysqli_query($this->db_id,$sql)
			or die(mysqli_error($this->db_id));

		return ($logged = mysqli_fetch_assoc($result));

	}

	function getUserBY($e, $by) {

		if($by == 'em')
			$query = "SELECT * FROM CEU_USER WHERE EMAIL='" . $e . "' ORDER BY DATE_VISITED DESC";
		if($by == 'fi')
			$query = "SELECT * FROM CEU_USER WHERE FIRST='" . $e . "' ORDER BY DATE_VISITED DESC";
		if($by == 'la')
			$query = "SELECT * FROM CEU_USER WHERE LAST='" . $e . "' ORDER BY DATE_VISITED DESC";
		if($by == 'st')
			$query = "SELECT * FROM CEU_USER WHERE STATE='" . $e . "' ORDER BY DATE_VISITED DESC";
		if($by == 'pr')
			$query = "SELECT * FROM CEU_USER WHERE PROFESSION='" . $e . "' ORDER BY DATE_VISITED DESC";

		$result = mysqli_query($this->db_id, $query)
			or die(mysqli_error($this->db_id));

		$user = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$user[] = $logged;
		}
		return $user;
	}

	function checkLicenseExpiring_90Days() { // AUTO EMAIL CALLS ALL USERS THAT HAVE LICENSE EXPIRING IN 3 MONTHS
			$result = mysqli_query($this->db_id,"SELECT * FROM CEU_USER WHERE LIC_EXP BETWEEN '" . date("Y-m-d H:i:s", strtotime("-90 days")) . "' AND '" . date("Y-m-d H:i:s", strtotime("-89 days")) . " ' ORDER BY LIC_EXP ASC")
			or die(mysqli_error($this->db_id));

		$USERS = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$USERS[] = $logged;
		}
		return $USERS;
	}

	function getUsersExpiringDate($interval) {
        $result = mysqli_query($this->db_id,"SELECT ID, FIRST as name, EMAIL as email, PROFESSION as profession FROM CEU_USER WHERE LIC_EXP=(CURRENT_DATE() + INTERVAL " . $interval . " DAY)")
        or die(mysqli_error($this->db_id));

        $USERS = array();
        while ($logged = mysqli_fetch_assoc($result)) {
            $USERS[] = $logged;
        }
        return $USERS;
    }

	// MAIL CHIMP WEBHOOK - URL SET IN MAILCHIMP CALLS /mchimp/mc_unsubscribe.php
    //deprecated
	function mailChimpOptOut($email) {
		$query = "UPDATE CEU_USER SET OPT_OUT='1' WHERE email='" . $email . "'";
		mysqli_query($this->db_id, $query);
	}

	function CEBroker_admin_post($user_id, $training_id) {

		$user_data = $this->getUser($user_id);

		$lic = $user_data['LIC_NUM'];
		$lic_pre = strtoupper(substr($lic, 0, 2));
		$lic_num = substr($lic, 2, (strlen($lic) -2));

		$xml = 'InXML=<licensees id_parent_provider="' . PARENT_PROVIDER_ID . '" upload_key="' . UPLOAD_KEY . '"><licensee><licensee_profession>' . $lic_pre . '</licensee_profession><licensee_number>' . $lic_num . '</licensee_number></licensee></licensees>';

		$resp = GENERIC::execCurl(CEBROKER_ENDPOINT, $xml);
		$json_return = GENERIC::xmlToJson( $resp );

		$resp = json_decode($json_return);

		$valid = ($resp->licensees->licensee->attributes->valid);

		if($valid == "true") // IF USER EXISTS IN FL SYSTEM
		{
			$first = ($resp->licensees->licensee->attributes->first_name);
			$last = ($resp->licensees->licensee->attributes->last_name);
			$lic_pre = ($resp->licensees->licensee->attributes->licensee_profession);
			$lic_num = ($resp->licensees->licensee->attributes->licensee_number);

			// Both TRAININGS calls in this method use $this -> need an instance.
			$t = new TRAININGS;
			$user_completed = $t->getCertificates($user_id);

			for($i=0; $i<count($user_completed); $i++) { // GET TRAINING INFO SO WE CAN ADD IT TO THE CEBROKER XML
				if($user_completed[$i]['TRAINING_ID'] == $training_id) {

					$ceb_t_number = $t->getGenericTrainingById($training_id);

					$roster .= '<roster id_parent_provider="' . PARENT_PROVIDER_ID . '" upload_key="' . UPLOAD_KEY . '"><id_provider>' . PARENT_PROVIDER_ID . '</id_provider><provider_course_code/><id_course>' . $ceb_t_number['CEBROKER_ID'] .'</id_course><id_publishing>' . $ceb_t_number['CEBROKER_TRACK'] . '</id_publishing><end_date>' . date("m/d/Y", strtotime($user_completed[$i]['DATE_COMPLETED'])) . '</end_date><attendees><attendee><licensee_profession>' . $lic_pre . '</licensee_profession><licensee_number>' . $lic_num . '</licensee_number><first_name>' . $user_data['first'] . '</first_name><last_name>' . $user_data['last'] . '</last_name><cebroker_state>' . $user_completed[$i]['STATE'] . '</cebroker_state><date_completed>' . date("m/d/Y", strtotime($user_completed[$i]['DATE_COMPLETED'])) . '</date_completed><ce_credit_hours>' . $user_completed[$i]['CREDITS'] . '</ce_credit_hours></attendee></attendees></roster>';

// REMOVED THE .0 FROM THE ABOVE FOR TESTING AS WE NOW HAVE OUR CREDITS WITH .
					//$roster .= '<roster id_parent_provider="' . PARENT_PROVIDER_ID . '" upload_key="' . UPLOAD_KEY . '"><id_provider>' . PARENT_PROVIDER_ID . '</id_provider><provider_course_code/><id_course>' . $ceb_t_number['CEBROKER_ID'] .'</id_course><id_publishing>' . $ceb_t_number['CEBROKER_TRACK'] . '</id_publishing><end_date>' . date("m/d/Y", strtotime($user_completed[$i]['DATE_COMPLETED'])) . '</end_date><attendees><attendee><licensee_profession>' . $lic_pre . '</licensee_profession><licensee_number>' . $lic_num . '</licensee_number><first_name>' . $user_data['first'] . '</first_name><last_name>' . $user_data['last'] . '</last_name><cebroker_state>' . $user_completed[$i]['STATE'] . '</cebroker_state><date_completed>' . date("m/d/Y", strtotime($user_completed[$i]['DATE_COMPLETED'])) . '</date_completed><ce_credit_hours>' . $user_completed[$i]['CREDITS'] . '.0</ce_credit_hours></attendee></attendees></roster>';

				}
			}

			// THIS HAS TEST = TRUE FOR TESTING
//			$xml = 'InXML=<rosters id_parent_provider="' . $ipp . '" upload_key="' . $uk . '" test="true">' . $roster . '</rosters>';
			$xml = 'InXML=<rosters id_parent_provider="' . PARENT_PROVIDER_ID . '" upload_key="' . UPLOAD_KEY . '">' . $roster . '</rosters>';
			$resp = GENERIC::execCurl(CEBROKER_ENDPOINT, $xml);
			$json_return = GENERIC::xmlToJson( $resp );

			//GENERIC::send_email('brett@xcage.com', 'info@ceunits.com', 'CE Broker', $json_return);
			return true;
		}
		else
		{
			return false;
		}
	}
}

?>
