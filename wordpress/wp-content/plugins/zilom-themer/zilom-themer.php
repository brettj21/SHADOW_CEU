<?php 
/**
 * Plugin Name: Zilom Themer
 * Description: Open Setting, Post Type, Shortcode ... for theme 
 * Version: 1.2.5
 * Author: Gaviasthemes Team
 */

define( 'GAVIAS_ZILOM_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'GAVIAS_ZILOM_PLUGIN_DIR', plugin_dir_path( __FILE__ )  );

class Gavias_Zilom_Themer{
   private static $instance = null;
   public static function instance() {
      if ( is_null( self::$instance ) ) {
         self::$instance = new self();
      }
      return self::$instance;
   }

	public function __construct(){
		$this->include_files();
		$this->include_post_types();
      add_filter('single_template', array($this, 'single_template'), 99, 1);

      add_action('wp_head', array($this, 'gaviasthemer_ajax_url'));
      add_action('wp_enqueue_scripts', array($this, 'register_scripts'));
      add_action('admin_enqueue_scripts', array($this, 'register_scripts_admin'));
      add_action('init', array($this, 'init'));
      $this->gavias_plugin_update();
	}
   public function init(){
      load_plugin_textdomain('zilom-themer', false, 'zilom-themer/languages/');
   }
   public function gaviasthemer_ajax_url(){
     echo '<script> var ajaxurl = "' . admin_url('admin-ajax.php') . '";</script>';
   }


	public function include_files(){
      require_once('redux/admin-init.php');
      require_once('includes/functions.php');
		require_once('includes/hook.php');
      require_once('elementor/init.php');   
      require_once('sample/init.php'); 
      require_once('add-ons/form-ajax/init.php');
      require_once('widgets/recent_posts.php'); 
	}

	public function include_post_types(){
      require_once('posttypes/footer.php');
      require_once('posttypes/header.php');
      require_once('posttypes/team.php');
      require_once('posttypes/portfolio.php');
	}

   public function single_template($single_template){
      global $post;
      $post_type = $post->post_type;
      if($post_type == 'footer'){
         $single_template = trailingslashit( plugin_dir_path( __FILE__ ) .'templates' ) . 'single-builder-footer.php';
      }
      if($post_type == 'gva_header'){
         $single_template = trailingslashit( plugin_dir_path( __FILE__ ) .'templates' ) . 'single-builder-header.php';
      }
      return $single_template;
   }

   public function register_scripts(){
      $js_dir = plugin_dir_url( __FILE__ ).'assets/js';
      wp_register_script('gavias-themer', $js_dir.'/main.js', array('jquery'), null, true);
      wp_enqueue_script('gavias-themer');
      wp_enqueue_style('widget-icon-list');
      wp_enqueue_style('widget-icon-box');
      wp_enqueue_style('widget-social-icons');
   }


   public function register_scripts_admin() {
      $css_dir = plugin_dir_url( __FILE__ ).'assets/css';
      wp_enqueue_style('zilom-icons-custom', GAVIAS_ZILOM_PLUGIN_URL . 'assets/icons/flaticon.css' );
   }

   public function gavias_plugin_update() {
      require 'plugin-update/plugin-update-checker.php';
      Puc_v4_Factory::buildUpdateChecker(
         'http://gaviasthemes.com/plugins/dummy_data/zilom-themer-update-plugin.json',
         __FILE__,
         'zilom-themer'
      );
   }
}

new Gavias_Zilom_Themer();
