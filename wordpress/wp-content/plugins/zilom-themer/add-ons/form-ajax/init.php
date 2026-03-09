<?php
class Gavias_Addon_Form_Ajax{
	
	private static $instance = null;
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function __construct(){
		add_action( 'init', array($this, 'register_scripts') );
		$this->include_files();
	}

	public function include_files(){
		require_once('ajax-login.php'); 
		require_once('ajax-forget-pwd.php'); 
	}

	public static function html_form(){
		if (!is_user_logged_in()) {
			ob_start();
			require_once('template.php'); 
			return ob_get_clean();
		}
		return false;
	}

	public function register_scripts(){
		wp_register_script('ajax-form', GAVIAS_ZILOM_PLUGIN_URL . 'assets/js/ajax-form.js', array('jquery') ); 
		wp_enqueue_script('ajax-form');
		$redirecturl = function_exists('tutor_utils') ? tutor_utils()->tutor_dashboard_url() : home_url();
		wp_localize_script( 'ajax-form', 'form_ajax_object', array( 
		  'ajaxurl' => admin_url( 'admin-ajax.php' ),
		  'redirecturl' => $redirecturl,
		  'security_nonce' => wp_create_nonce( "zilom-ajax-security-nonce" )
		));
	}

}

new Gavias_Addon_Form_Ajax();