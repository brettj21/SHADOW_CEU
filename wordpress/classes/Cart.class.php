<?php

require_once(__DIR__ . '/DB.class.php');

class CART extends DB {

	var $db_id;

	var $auth_login;
	var $auth_trans_key;


	function __construct() {
		$this->logon(DB_HOST, DB_LOGIN, DB_PASS, DB);
	}

	function logon($DB_HOST, $DB_LOGIN, $DB_PASS, $DB){
		$this->db_id = mysqli_connect ($DB_HOST, $DB_LOGIN, $DB_PASS, $DB) or die ('Cannot connect to the database because: ' . mysqli_connect_error());
	}

	function closeDB() {
		mysqli_close($this->db_id);
	}

	function getReceipts($user_id, $profession_id) {

//		CHANGED ON 012215 FOR LIVING WORKS CONFLICT
//		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRANSACTIONS WHERE USER_ID =" . $user_id . " AND PROFESSION_ID = " . $profession_id)
		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRANSACTIONS WHERE USER_ID =" . $user_id)
			or die(mysqli_error($this->db_id));

		$receipts = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$receipts[] = $logged;
		}

		return $receipts;

	}

	function getReceiptById($user_id, $rid) {

		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRANSACTIONS WHERE USER_ID =" . $user_id . " AND ID = " . $rid)
			or die(mysqli_error($this->db_id));

		$receipt = null;
		while ($logged = mysqli_fetch_assoc($result)) {
			$receipt = $logged;
		}
		return $receipt;

	}

	// $this-free helper. Declared static so the existing CART::checkCartPromo()
	// callers in the checkout flow work on PHP 8 (calling a non-static method
	// statically is a fatal Error). Instance calls ($obj->) still work fine.
	static function checkCartPromo($promo_post, $total_cost) {

		if(!strpos($total_cost, "."))
			 $total_cost .= ".00";

		$promo_type = $promo_post['promo_type'] ?? '';
		$promo_val = $promo_post['promo_val'] ?? '';
		$promo_code = $promo_post['promo_code'] ?? '';
		$display_value = $promo_post['disp_val'] ?? ''; // UNITS | TRAINING | PERCENT | DOLLAR | FREE

		if($promo_type == "training") { // FREE TRAINING
			$ret_arr['promo_msg'] = "Free Training";
			$ret_arr['promo_display_value'] = "1 Free";
			$ret_arr['total_cost'] = $total_cost;
			$ret_arr['discount_display_value'] = "-$" . $total_cost;
			$ret_arr['new_total'] = "0.00";

			return $ret_arr;
		}
		if($promo_type == "dollar") { // DOLLAR AMOUNT OFF TOTAL
			$ret_arr['promo_msg'] = "$" . $promo_val . " Dollars Off Total";
			$ret_arr['promo_display_value'] = "-$" . $promo_val;
			$ret_arr['total_cost'] = $total_cost;
			$ret_arr['discount_display_value'] = "-$" . $promo_val;

			$new_total = ($total_cost - $promo_val);
			if($new_total < 0) // if promo is used and final is less then 0
				$new_total = "0.00";

			if(!strpos($new_total, "."))
				 $new_total .= ".00";

			$ret_arr['new_total'] = $new_total;

			return $ret_arr;
		}
		if($promo_type == "percent") { // PERCENT OFF TOTAL
		    $promo_code = ''; // this was removed as it would show a promo code user could type in and would work anytime
			$ret_arr['promo_msg'] = 'Promotion<div id="clear5Bottom"></div><span style="font-size:12px; color:#666666;">' . $promo_code . '</span>';
			$ret_arr['promo_display_value'] = "-" . $display_value;
			$ret_arr['total_cost'] = $total_cost;
			$ret_arr['discount_display_value'] = "-" . $display_value;

			$new_total = ($total_cost - ($total_cost * $promo_val));

			if(!strpos($new_total, "."))
				 $new_total .= ".00";
			elseif(strrpos(strrev($new_total), ".") == 1)
				 $new_total .= "0";

			$ret_arr['new_total'] = $new_total;

			return $ret_arr;
		}
		if($promo_type == "free") { // FREE USER
			$ret_arr['promo_msg'] = 'Free User<div id="clear5Bottom"></div><span style="font-size:12px; color:#666666;">All Trainings Free</span>';
			$ret_arr['promo_display_value'] = "-$" . $total_cost;
			$ret_arr['total_cost'] = $total_cost;
			$ret_arr['discount_display_value'] = "-$" . $total_cost;
			$ret_arr['new_total'] = "0.00";

			return $ret_arr;
		}
		// THIS WAS ADDED ON 4/17/14 FOR THE CONTRACT WITH BUSINESS PARTNERS
		// IF WE ARE NO LONGER HONORING THIS DEAL WE CAN DELETE THIS if
        $business_partners = explode(",", BUSINESS_PARTNERS);
        $business_partner_promos = explode(",", BUSINESS_PARTNER_PROMOS);
		if(in_array($promo_type, $business_partner_promos)) {

            $key = array_search($promo_type, $business_partner_promos);
            if(array_key_exists($key, $business_partners)):
                $partner = $business_partners[$key];
            endif;

			$ret_arr['promo_msg'] = strtoupper($partner) . ' User<div id="clear5Bottom"></div><span style="font-size:12px; color:#666666;">No Cost Trainings</span>';
			$ret_arr['promo_display_value'] = "-$" . $total_cost;
			$ret_arr['total_cost'] = $total_cost;
			$ret_arr['discount_display_value'] = "-$" . $total_cost;
			$ret_arr['new_total'] = "0.00";

			return $ret_arr;
		}

	}

	function getDiscountData($arr) {

		$usedD = "";   // only set below when the discount has been used
		$promo_type = $arr['PROMO_TYPE'];
		$expired = GENERIC::checkGeneralExpiration($arr['EXPIRES']);
		if($arr['DATE_USED'] !== NULL):
			$expired2 = GENERIC::checkGeneralExpiration($arr['DATE_USED']);
		else:
			$expired2 = 0;
		endif;

			if($expired >= 0 || $promo_type == 'free'): // NOT EXPIRED
				if($expired2 < 0 && $promo_type != 'free'):
					// do nothing
				else:
					echo '<input type="radio" name="discount_id" value="' . $arr['PROMO_CODE'] . '" onClick="addDiscount(\'' . $arr['PROMO_CODE'] . '\');" /> ';
				endif;
			else:
				echo "<span class='expired_discount'>expired - </span>";
			endif;

			if($expired2 < 0):
				$usedD = "<span class='expired_discount'> - Used " . date("m/d/Y", strtotime($arr['DATE_USED'])) . "</span><div id='clear5Bottom'></div>";
			endif;

			if($promo_type == "training")
				echo $arr['PROMO_VALUE'] . " Free Training" . $usedD . "<div id='clear5Bottom'></div>";
			if($promo_type == "credits")
				echo  $arr['PROMO_VALUE'] . " Free Credits<div id='clear5Bottom'></div>";
			if($promo_type == "dollar")
				echo  "$" . $arr['PROMO_VALUE'] . " Off" . $usedD . "<div id='clear5Bottom'></div>";
			if($promo_type == "free")
				echo  "Free - No Charge Client<div id='clear5Bottom'></div>";
			if($promo_type == "percent")
				echo  ($arr['PROMO_VALUE'] * 100) . "% Off" . $usedD . "<div id='clear5Bottom'></div>";

	}


	function processPayment($post, $email, $process_unlimited, $pulled_user = null) {

        $user_id 	= $_COOKIE['ceu'];
		$cart		= $_COOKIE['cart'];

		if($process_unlimited == 'true')
			$cart = 'unlimited';

		if($user_id == "" || $cart == "" || !isset($_SESSION['total_cost']) && $process_unlimited != 'false') //ALL OF THESE ITEMS ARE MANDATORY OTHERWISE REDIRECT
			header("location: /user/?er=exp");

		if($pulled_user['EMAIL'] !=  $email)
			header("location: /cart");

		$test_user_ids = explode(",", CREDIT_CARD_TEST_USER_IDS); // THIS WILL PUT TRANSACTION IN TEST MODE

		$x_version 			= 	AUTH_VERSION;
		$x_login 			= 	AUTH_LOGIN;
		$x_tran_key 		= 	AUTH_TRANS_KEY;
		$x_merchant_email 	= 	PAYMENTS_EMAIL;
		$x_method 			= 	"CC";
		$x_country 			= 	"USA";
		$x_description 		= 	BUS_NAME . " - Payment Processed";
		$x_type 			= 	"AUTH_CAPTURE";
		$x_email 			= 	$email;
		$x_email_customer	= 	"false";
		$expDate 			= 	$post['exp_month'].$post['exp_year'];
		$cardNum 			= 	$post['cardNum'];
		$invoiceNum 		= 	$cart . $_SESSION['promo_code'];
		$amount 			= 	$_SESSION['total_cost'];
		$first 				= 	htmlentities($post['first'], ENT_QUOTES);
		$last 				= 	htmlentities($post['last'], ENT_QUOTES);
		$address			= 	htmlentities($post['address_1'], ENT_QUOTES);
		$city				= 	htmlentities($post['city'], ENT_QUOTES);
		$state 				=	$post['state'];
		$zip 				= 	htmlentities($post['zip'], ENT_QUOTES);
		$email 				= 	$email;
		$phone 				= 	$pulled_user['PHONE'];
		$fax 				= 	"";

		if(in_array($user_id, $test_user_ids))
			$x_test_request = 	"TRUE";
		else
			$x_test_request = 	"FALSE";


		$authnet_values				= array
		(
			"x_login"				=> $x_login,
			"x_version"				=> $x_version,
			"x_delim_char"			=> "^",
			"x_delim_data"			=> "TRUE",
			"x_test_request"		=> $x_test_request,
			"x_url"					=> "FALSE",
			"x_type"				=> $x_type,
			"x_method"				=> $x_method,
			"x_tran_key"			=> $x_tran_key,
			"x_relay_response"		=> "FALSE",
			"x_card_num"			=> $cardNum,
			"x_exp_date"			=> $expDate,
			"x_description"			=> $x_description,
			"x_invoice_num"			=> $invoiceNum,
			"x_amount"				=> $amount,
			"x_first_name"			=> $first,
			"x_last_name"			=> $last,
			"x_address"				=> $address,
			"x_city"				=> $city,
			"x_state"				=> $state,
			"x_zip"					=> $zip,
			"x_email"				=> $email,
			"x_phone"				=> $phone,
			"x_fax"					=> $fax,
			"x_country"				=> $x_country,
			"x_cust_id"				=> $user_id,
			"x_email_customer"		=> $x_email_customer,
		//	"x_merchant_email"		=> $merchant_email,
		);

		$trans_results = $this->getTransactionResults($authnet_values); // SEND DATA TO AUTHORIZE.NET

		return $trans_results;

	}

	function getTransactionResults($authnet_values) {

		$fields = "";

		foreach( $authnet_values as $key => $value ) $fields .= "$key=" . urlencode( $value ) . "&";

		$ch = curl_init(AUTH_GATEWAY); 									// URL of gateway for cURL to post to
		curl_setopt($ch, CURLOPT_HEADER, 0); 							// set to 0 to eliminate header info from response
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 					// Returns response data instead of TRUE(1)
		curl_setopt($ch, CURLOPT_POSTFIELDS, rtrim( $fields, "& " )); 	// use HTTP POST to send form data
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 				// uncomment this line if you get no gateway response. ###
		$resp = curl_exec($ch); 										//execute post and get results
		curl_close ($ch);

//		$ret_vals = explode("^", $resp);

		return $resp;
	}

	function insertTransaction($post, $auth_arr, $profession_id) {

		// USING REPLACE INSTEAD OF INSERT MAY CAUSE ALL TEST TRANSACTIONS TO UPDATE ONE ROW
		$query = "REPLACE INTO CEU_TRANSACTIONS SET 
		FIRST='" . safe($post['first']) . "', 
		LAST='" . safe($post['last']) . "', 
		USER_ID=" . $auth_arr[12] . ", 
		ADDRESS='" . safe($post['address_1']) . "', 
		CITY='" . safe($post['city']) . "', 
		STATE='" . safe($post['state']) . "', 
		ZIP='" . safe($post['zip']) . "',
		PROFESSION_ID='" . (int)$profession_id . "',
		DATE_ENTERED='".date("Y-m-d H:i:s")."',
		CC_NUM='" . $auth_arr[50] . "', 
		EXP_DATE='" . safe($post['exp_month'].$post['exp_year']) . "', 
		AMOUNT='" . $auth_arr[9] . "', 
		INVOICE_NUM='" . $auth_arr[7] . "', 
		TRANS_ID='" . $auth_arr[6] . "', 
		APPROVAL_CODE='" . $auth_arr[4] . "', 
		PROMO_ID='" . $_SESSION['promo_id'] . "'";

		@mysqli_query($this->db_id, $query);
		return $query;
	}

	//ADDED 122312
	function checkTransactionExists($user_id, $invoice_num) {

		$result = mysqli_query($this->db_id, "SELECT * FROM CEU_TRANSACTIONS WHERE USER_ID=" . $user_id . " AND INVOICE_NUM='" . $invoice_num . "'")
			or die(mysqli_error($this->db_id));
		return mysqli_num_rows($result);

	}

	//**************************************
	// TRANSACTION FUNCTIONS FOR ADMIN PAGES
	//**************************************

	function getYearTotals($year) {

		$result = mysqli_query($this->db_id, "SELECT DATE(DATE_ENTERED), SUM(AMOUNT) AS TOTAL FROM CEU_TRANSACTIONS WHERE DATE(DATE_ENTERED) BETWEEN '" . $year . "-01-01' AND '" . $year . "-12-31' GROUP BY MONTH(DATE_ENTERED)")
			or die(mysqli_error($this->db_id));

		$trans = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trans[] = $logged;
		}
		return $trans;
	}

	function getTranactionsAmounts($month, $year, $extra='', $type='') {

		if($type == 'state')
			$add_sql = " AND STATE='" . $extra . "'";
		if($type == 'pro')
			$add_sql = " AND PROFESSION_ID='" . $extra . "'";

//		$month = substr($date, 4, 2);
//		$year = substr($date, 0, 4);

		$result = mysqli_query($this->db_id, "SELECT DATE(DATE_ENTERED), SUM(AMOUNT) AS TOTAL FROM CEU_TRANSACTIONS WHERE MONTH(DATE_ENTERED) = " . $month . " AND YEAR(DATE_ENTERED) = " . $year . $add_sql . " GROUP BY DATE(DATE_ENTERED)")
			or die(mysqli_error($this->db_id));

		$trans = array();
		while ($logged = mysqli_fetch_assoc($result)) {
			$trans[] = $logged;
//print_r($logged);
		}

		return $trans;
	}
}

?>
