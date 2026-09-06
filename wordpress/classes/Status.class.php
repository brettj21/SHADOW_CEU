<?php

require_once(__DIR__ . '/DB.class.php');

class STATUS extends DB {

	var $db_id;

	function logon($DB_HOST, $DB_LOGIN, $DB_PASS, $DB){
		$this->db_id = mysqli_connect ($DB_HOST, $DB_LOGIN, $DB_PASS, $DB) or die ('Cannot connect to the database because: ' . mysqli_connect_error());
	}

	function closeDB() {
		mysqli_close($this->db_id);
	}

	function getStatusVars($user_id) {

		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_USER_STATUS WHERE USER_ID =" . $user_id)
			or die(mysqli_error($this->db_id));

		$status = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$status[] = $logged;
		}
		return $status;

	}

	function populateGeneralStatus($user_id, $state, $profession_id, $lic_exp, $post="") {

		$state_requirements = $this->getStateReqByAbbrev($state);
		$approved_for_status = "";

		// Defaults for the no-$post path: these are passed to updateStatus() below
		// regardless of which branches run, so they must always exist.
		$num_creds       = 0;
		$where           = '';
		$ceu_credits     = 0;
		$percent_complete = 0;

		if($post != ""):
			$num_creds = $post['num_credits'];
			$where = isset($post['where']);
		endif;

		for($i=0; $i<sizeof($state_requirements ?? []); $i++)
		{
			if($state_requirements[$i]['PROFESSION_ID'] == $profession_id)
			{
				$state_requirements = $state_requirements[$i];

				if($state_requirements['CEU_APPROVED'] == 'yes')
					$approved_for_status = true;
				break;
			}
		}

		if($approved_for_status)  {
		    $t = new TRAININGS;
			$completed_trainings 		= $t->getCompletedTrainingsForStatus($user_id, $state_requirements['REQ_TERMS_NUM'], $lic_exp);
			$current_status_settings	= $this->getStatusVars($user_id);

			$outside_credits = $num_creds + (int)($current_status_settings[0]['CREDITS_OUTSIDE'] ?? 0);

			if(!empty($completed_trainings) || $outside_credits != "")
			{
				{
					for($i=0; $i<sizeof($completed_trainings ?? []); $i++)
					{
						$ceu_credits += $completed_trainings[$i]['CREDITS'];
					}
				}

				$total_status_credits = (int)$ceu_credits + (int)$outside_credits;
				// CREDITS_REQ can be 0/missing for a state that isn't set up yet.
				// PHP 8 throws DivisionByZeroError instead of warning + INF.
				$credits_req = (int)($state_requirements['CREDITS_REQ'] ?? 0);
				$percent_complete = $credits_req > 0
					? round((($total_status_credits / $credits_req) * 100), 0)
					: 0;

				if((int)$percent_complete > 100)
					$percent_complete = 100;
			}

			$this->updateStatus($user_id, $ceu_credits, $outside_credits, $percent_complete, $profession_id, $where); // UPDATE STATUS FOR USER IN DB
		}
	}


	function updateStatus($user_id, $ceu_credits, $outside_credits, $percent_complete, $profession_id, $outside_source) {

		if(trim($outside_source) == "," || $outside_source == "") // THIS MAY JUST EQUAL A COMMA IF WE DON'T ADD ANYTHING ANYTIME
			$outside_source = '';
		else
			$outside_source = "OUTSIDE_SOURCE = CONCAT(OUTSIDE_SOURCE, '" . safe($outside_source) . ".'), ";

		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_USER_STATUS WHERE USER_ID = " . $user_id . " AND PROFESSION_ID=" . $profession_id)
			or die(mysqli_error($this->db_id));

		if(mysqli_affected_rows($this->db_id) == 1) {
			$query = "UPDATE CEU_USER_STATUS SET 
				CREDITS = " . (int)$ceu_credits . ", 
				CREDITS_OUTSIDE = " . (int)$outside_credits . ", 
				" . $outside_source . "
				PERCENT =" . (int)$percent_complete . ",
				ACTIVE = 1, 
				TERMS = 1 
				WHERE PROFESSION_ID = " . (int)$profession_id . "
				AND USER_ID = " . (int)$user_id;
			mysqli_query($this->db_id, $query) or die(mysqli_error($this->db_id));
		} else {
			$query2 = "INSERT INTO CEU_USER_STATUS SET 
				CREDITS = " . (int)$ceu_credits . ", 
				CREDITS_OUTSIDE =" . (int)$outside_credits . ",
				" . $outside_source . "
				PERCENT =" . (int)$percent_complete . ", 
				PROFESSION_ID = " . (int)$profession_id . ", 
				ACTIVE = 1, 
				TERMS = 1,
				USER_ID = " . (int)$user_id;

				@mysqli_query($this->db_id, $query2)or die(mysqli_error($this->db_id));
		}

	}

	function resetStatus($user_id, $profession_id) {
		$query = "UPDATE CEU_USER_STATUS SET 
			CREDITS = 0, 
			CREDITS_OUTSIDE =0, 
			PERCENT =0,
			ACTIVE = 1, 
			TERMS = 1 
			WHERE PROFESSION_ID = " . (int)$profession_id . "
			AND USER_ID = " . (int)$user_id;
		mysqli_query($this->db_id, $query) or die(mysqli_error($this->db_id));
	}


	function getAllStates() { // THIS IS FOR PROMO CODES ONLY AND ONLY RETURNS PROMO CODES THAT ARE NOT EXPIRED

		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_STATE_INFO")
			or die(mysqli_error($this->db_id));

		$states = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$states[] = $logged;
		}
		return $states;
	}

	function getStatesByProfessionId($pid) { // THIS IS FOR PROMO CODES ONLY AND ONLY RETURNS PROMO CODES THAT ARE NOT EXPIRED

		$result = mysqli_query($this->db_id, "SELECT a.* FROM CEU_STATE_INFO a WHERE a.PROFESSION_ID = " . $pid . " ORDER BY STATE ASC")
			or die(mysqli_error($this->db_id));

		$states = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$states[] = $logged;
		}
		return $states;
	}

	function getReqsByState($state) { // THIS IS USED FOR BUILDING THE STATE MAP XML FOR FLASH MAP /map/xml_producer.php

		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_STATE_INFO WHERE STATE='" . $state . "'")
			or die(mysqli_error($this->db_id));

		$states = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$states[] = $logged;
		}
		return $states;
	}

	function getStateReqByAbbrev($state) { // THIS IS FOR PROMO CODES ONLY AND ONLY RETURNS PROMO CODES THAT ARE NOT EXPIRED

		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_STATE_INFO WHERE STATE = '" . $state . "'")
			or die(mysqli_error($this->db_id));

		$reqs = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$reqs[] = $logged;
		}
		return $reqs;
	}


}

?>
