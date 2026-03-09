<?php
if (!defined('ABSPATH')) {
	 exit; // Exit if accessed directly.
}

if(!class_exists('Zilom_Listings_Addons')){
  	class Zilom_Listings_Addons {

		public function __construct(){
			$this->include_files();
		}

		public function include_files(){
			//require_once('comment/base.php');
			//require_once('comment/backend.php');
			//require_once('comment/frontend.php');
		}
  	}
}

new Zilom_Listings_Addons();