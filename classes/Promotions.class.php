<?php

require_once(__DIR__ . '/DB.class.php');

class PROMOTIONS extends DB {

	var $db_id;

	function logon($DB_HOST, $DB_LOGIN, $DB_PASS, $DB){
		$this->db_id = mysqli_connect ($DB_HOST, $DB_LOGIN, $DB_PASS, $DB) or die ('Cannot connect to the database because: ' . mysqli_connect_error());
	}

	function closeDB() {
		mysqli_close($this->db_id);
	}

	function getAllPromotions() { // THIS IS FOR PROMO CODES ONLY

		$result = mysqli_query($this->db_id,"SELECT a.PROMO_CODE, a.PROMO_ID, a.EXPIRES, a.RESTRICTION, b.DISPLAY_VALUE, b.PROMO_VALUE, b.PROMO_TYPE, b.ID FROM CEU_PROMO_CODES a, CEU_PROMO_VALUES b WHERE a.PROMO_ID = b.ID")
			or die(mysqli_error($this->db_id));

		$promos = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$promos[] = $logged;
		}
		return $promos;
	}

	function getUserDiscount($user_id, $discount_id) {

//		$result = mysql_query("SELECT a.DATE_USED, b.* FROM CEU_USER_DISCOUNTS a, CEU_PROMO_VALUES b WHERE a.USER_ID=" . $user_id . " AND b.ID=" . $discount_id)
		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRANSACTIONS WHERE USER_ID=" . $user_id . " AND INVOICE_NUM LIKE '%" . $discount_id . "%'")
			or die(mysqli_error($this->db_id));
			return mysqli_num_rows($result);
//		while ($logged = mysql_fetch_assoc($result)) {
//			$discount = $logged;
//		}
//		return $discount;
	}

	function getUserDiscountsBYID($uid) { // THIS IS FOR USER EARNED DISCOUNTS
		$result = mysqli_query($this->db_id, "SELECT a.PROMO_CODE, a.DATE_USED, a.EXPIRES, b.*, c.RESTRICTION FROM CEU_USER_DISCOUNTS a, CEU_PROMO_VALUES b, CEU_PROMO_CODES c WHERE a.USER_ID=" . $uid . " AND a.PROMO_CODE=c.PROMO_CODE AND b.ID=c.PROMO_ID")
			or die(mysqli_error($this->db_id));

		$discounts = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$discounts[] = $logged;
		}
		return $discounts;
	}

	function getPromoById($promo_code) {

		$result = mysqli_query($this->db_id, "SELECT a.*, b.* FROM CEU_PROMO_CODES a, CEU_PROMO_VALUES b WHERE a.PROMO_CODE='" . $promo_code . "' AND a.EXPIRES >= CURDATE() AND a.PROMO_ID=b.ID")
			or die(mysqli_error($this->db_id));
		$promo = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			$promo = $logged;
		}
		return $promo;
	}

	function markPromoDiscountAsUsed($user_id, $promo_code) {

			mysqli_query($this->db_id, "UPDATE CEU_USER_DISCOUNTS SET DATE_USED='" . date("Y-m-d H:i:s") . "' WHERE USER_ID=" . $user_id . " AND PROMO_CODE='" . $promo_code . "'")
			or die(mysqli_error($this->db_id));
	}

	function addVericareUser($uid, $credits, $training_ids, $promo_code_business_name) {
		$query2 = "INSERT INTO CEU_vericare SET 
				uid = " . (int)$uid . ", 
				total_credits =" . (int)$credits . ",
				training_ids ='" . $training_ids . "',
				business = '" . $promo_code_business_name . "',
				dateAdded = '" . date("Y-m-d H:i:s") . "'";

				@mysqli_query($this->db_id, $query2) or die(mysqli_error($this->db_id));
	}

	function checkVericareFlag($email) { // IF VERICARE EMPLOYEE WAS FIRED WE WANT TO CONFIRM THEY ARE STILL ACTIVE
		$query = "SELECT EMAIL FROM CEU_vericare_bad_list WHERE EMAIL='" . $email . "'";
		//$query = "SELECT * FROM CEU_vericare WHERE uid=" . $uid . " AND flagged='fired'";
		$result = mysqli_query($this->db_id, $query);
		return mysqli_affected_rows($this->db_id);
	}

	// THIS CHECK IF USER HAS A DISCOUNT ADDED TO THEIR USER ID - SHOULD BE A WITHIN YEAR
	function checkPromoExists($user_id, $promo_code) {
		$query = "SELECT USER_ID FROM CEU_USER_DISCOUNTS WHERE USER_ID='" . $user_id . "' AND PROMO_CODE='" . $promo_code . "' AND DATE_USED is NULL";
		$result = mysqli_query($this->db_id, $query);
		return mysqli_affected_rows($this->db_id);
	}
	// THIS ADD PROMOTION IF USER DOESN'T HAVE ONE ALREADY THERE - CURRENTLY USED FOR FB LIKE
	function addUserBonusPromo($user_id, $promo_code, $interval=null) {

	    if(empty($interval)) {
	        $interval = "INTERVAL 1 YEAR";
        }
		$query2 = "INSERT INTO CEU_USER_DISCOUNTS SET 
				USER_ID = " . (int)$user_id . ", 
				PROMO_CODE ='" . $promo_code . "',
				EXPIRES = (CURDATE() + " . $interval . ")";
				@mysqli_query($this->db_id, $query2)or die(mysqli_error($this->db_id));
	}

    function addMultipPromosCronJob($vals) {
        $query2 = "INSERT INTO CEU_USER_DISCOUNTS (USER_ID, PROMO_CODE, EXPIRES) VALUES " . $vals;
        @mysqli_query($this->db_id, $query2)or die(mysqli_error($this->db_id));
    }

	function removePromoCromJob() {
		$sql = "DELETE FROM CEU_USER_DISCOUNTS WHERE EXPIRES < CURDATE();";
		@mysqli_query($this->db_id, $sql)or die(mysqli_error($this->db_id));
	}

	function checkPromosFor11Months($pid) {
		$result = mysqli_query($this->db_id,"SELECT USER_ID FROM CEU_TRANSACTIONS WHERE PROMO_ID='" . $pid ."' AND DATE_ENTERED >= DATE_SUB(CURDATE(), INTERVAL 11 MONTH)")
		or die(mysqli_error($this->db_id));

		$promos = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$promos[] = $logged['USER_ID'];
		}
		return $promos;
	}

	function movePromoListToInactiveList($from, $to) {
		$sql = "UPDATE subscribers SET list = " . $to . " WHERE list=" . $from;
		@mysqli_query($this->db_id, $sql)or die(mysqli_error($this->db_id));
	}

	//******************************************
	//ADMIN PAGE
	//******************************************

	function getAllPromoValues() {
		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_PROMO_VALUES")
			or die(mysqli_error($this->db_id));

		$promos = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$promos[] = $logged;
		}
		return $promos;
	}
}

?>
