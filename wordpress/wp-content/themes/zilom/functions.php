<?php
/**
	* $Desc
	*
	* @author     Gaviasthemes Team     
	* @copyright  Copyright (C) 2021 gaviasthemes. All Rights Reserved.
	* @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
	* 
*/

define('ZILOM_THEME_DIR', get_template_directory());
define('ZILOM_THEME_URL', get_template_directory_uri());

/*
	* Include list of files from Gavias Framework.
*/
require_once(ZILOM_THEME_DIR . '/includes/theme-functions.php'); 
require_once(ZILOM_THEME_DIR . '/includes/template.php'); 
require_once(ZILOM_THEME_DIR . '/includes/theme-hook.php'); 
require_once(ZILOM_THEME_DIR . '/includes/theme-layout.php'); 
require_once(ZILOM_THEME_DIR . '/includes/comment.php'); 
require_once(ZILOM_THEME_DIR . '/includes/metaboxes.php'); 
require_once(ZILOM_THEME_DIR . '/includes/menu/megamenu.php'); 
require_once(ZILOM_THEME_DIR . '/includes/elementor/hooks.php');
require_once(ZILOM_THEME_DIR . '/includes/customize/custom-color.php'); 

//Load Woocommerce plugin
if(class_exists('WooCommerce')){
	add_theme_support('woocommerce');
	require_once(ZILOM_THEME_DIR . '/includes/woocommerce/functions.php'); 
	require_once(ZILOM_THEME_DIR . '/includes/woocommerce/hooks.php'); 
}

if(function_exists('tutor')){
	require_once(ZILOM_THEME_DIR . '/includes/tutor/hooks.php'); 
}

if(class_exists('NextendSocialLogin')){
	require_once(ZILOM_THEME_DIR . '/includes/nsl.php'); 
}

add_action('after_setup_theme', 'zilom_after_setup_theme');
function zilom_after_setup_theme(){
	// Load Redux - Theme options framework
	if(class_exists('Redux')){
		require(ZILOM_THEME_DIR . '/includes/options/init.php');
		require_once(ZILOM_THEME_DIR . '/includes/options/opts-general.php'); 
		require_once(ZILOM_THEME_DIR . '/includes/options/opts-header.php'); 
		require_once(ZILOM_THEME_DIR . '/includes/options/opts-footer.php'); 
		require_once(ZILOM_THEME_DIR . '/includes/options/opts-breadcrumb.php'); 
		require_once(ZILOM_THEME_DIR . '/includes/options/opts-styling.php'); 
		require_once(ZILOM_THEME_DIR . '/includes/options/opts-typography.php'); 
		require_once(ZILOM_THEME_DIR . '/includes/options/opts-blog.php'); 
		require_once(ZILOM_THEME_DIR . '/includes/options/opts-page.php'); 
		require_once(ZILOM_THEME_DIR . '/includes/options/opts-portfolio.php'); 
		if(function_exists('tutor')){
			require_once(ZILOM_THEME_DIR . '/includes/options/opts-course.php'); 
		}
		if(class_exists('WooCommerce')){
			require_once(ZILOM_THEME_DIR . '/includes/options/opts-woo.php'); 
		}
	} 
	//	Registry menu
	register_nav_menus( array(
		'primary'      => esc_html__( 'Main menu', 'zilom' ),
	));
}

// TGM plugin activation
if (is_admin()) {
	require_once(ZILOM_THEME_DIR . '/includes/tgmpa/class-tgm-plugin-activation.php');
	require(ZILOM_THEME_DIR . '/includes/tgmpa/config.php');
}
load_theme_textdomain('zilom', get_template_directory() . '/languages');

//-------- Register sidebar default in theme -----------
//------------------------------------------------------
function zilom_widgets_init() {
	register_sidebar(array(
		'name' 				=> esc_html__('Default Sidebar', 'zilom'),
		'id' 					=> 'default_sidebar',
		'description' 		=> esc_html__('Appears in the Default Sidebar section of the site.', 'zilom'),
		'before_widget' 	=> '<aside id="%1$s" class="widget clearfix %2$s">',
		'after_widget' 	=> '</aside>',
		'before_title' 	=> '<h3 class="widget-title"><span>',
		'after_title' 		=> '</span></h3>',
	));

	if(class_exists('WooCommerce')){
		register_sidebar( array(
			'name' 				=> esc_html__('WooCommerce Sidebar', 'zilom'),
			'id' 					=> 'woocommerce_sidebar',
			'description' 		=> esc_html__('Appears in the Plugin WooCommerce section of the site.', 'zilom'),
			'before_widget' 	=> '<aside id="%1$s" class="widget clearfix %2$s">',
			'after_widget'	 	=> '</aside>',
			'before_title' 	=> '<h3 class="widget-title"><span>',
			'after_title' 		=> '</span></h3>',
		));
		register_sidebar(array(
			'name' 				=> esc_html__('WooCommerce Single', 'zilom'),
			'id' 					=> 'woocommerce_single_summary',
			'description' 		=> esc_html__('Appears in the WooCommerce Single Page like social, description text ...', 'zilom'),
			'before_widget' 	=> '<aside id="%1$s" class="widget clearfix %2$s">',
			'after_widget' 	=> '</aside>',
			'before_title' 	=> '<h3 class="widget-title"><span>',
			'after_title' 		=> '</span></h3>',
		));
	}
	register_sidebar(array(
		'name' 				=> esc_html__('After Offcanvas Mobile', 'zilom'),
		'id' 					=> 'offcanvas_sidebar_mobile',
		'description' 		=> esc_html__('Appears in the Offcanvas section of the site.', 'zilom'),
		'before_widget' 	=> '<aside id="%1$s" class="widget clearfix %2$s">',
		'after_widget' 	=> '</aside>',
		'before_title' 	=> '<h3 class="widget-title"><span>',
		'after_title' 		=> '</span></h3>',
	));
	register_sidebar(array(
		'name' 				=> esc_html__('Blog Sidebar', 'zilom'),
		'id' 					=> 'blog_sidebar',
		'description' 		=> esc_html__('Appears in the Blog sidebar section of the site.', 'zilom'),
		'before_widget' 	=> '<aside id="%1$s" class="widget clearfix %2$s">',
		'after_widget' 	=> '</aside>',
		'before_title' 	=> '<h3 class="widget-title"><span>',
		'after_title' 		=> '</span></h3>',
	));
	register_sidebar(array(
		'name' 					=> esc_html__('Page Sidebar', 'zilom'),
		'id' 						=> 'other_sidebar',
		'description' 			=> esc_html__('Appears in the Page Sidebar section of the site.', 'zilom'),
		'before_widget' 		=> '<aside id="%1$s" class="widget clearfix %2$s">',
		'after_widget' 		=> '</aside>',
		'before_title' 		=> '<h3 class="widget-title"><span>',
		'after_title' 			=> '</span></h3>',
	));
	register_sidebar(array(
		'name' 					=> esc_html__('Portfolio Sidebar', 'zilom'),
		'id' 						=> 'porfolio_sidebar',
		'description' 			=> esc_html__('Appears in the Portfolio Page Sidebar section of the site.', 'zilom'),
		'before_widget' 		=> '<aside id="%1$s" class="widget clearfix %2$s">',
		'after_widget' 		=> '</aside>',
		'before_title' 		=> '<h3 class="widget-title"><span>',
		'after_title' 			=> '</span></h3>',
	));

	if(function_exists('tutor')){
		register_sidebar(array(
			'name' 					=> esc_html__('Archive Course Sidebar', 'zilom'),
			'id' 						=> 'archive_course_sidebar',
			'description' 			=> esc_html__('Appears in the Archive Course Page Sidebar section of the site.', 'zilom'),
			'before_widget' 		=> '<aside id="%1$s" class="widget clearfix %2$s">',
			'after_widget' 		=> '</aside>',
			'before_title' 		=> '<h3 class="widget-title"><span>',
			'after_title' 			=> '</span></h3>',
		));
	}

}
add_action('widgets_init', 'zilom_widgets_init');


if ( ! function_exists('zilom_fonts_url') ) :
/**
 *
 * @return string Google fonts URL for the theme.
 */
function zilom_fonts_url() { 
	$fonts_url = '';
	$fonts     = array();
	$subsets   = '';
	$protocol = is_ssl() ? 'https' : 'http';
	/*
		* Translators: If there are characters in your language that are not supported
		* by Noto Sans, translate this to 'off'. Do not translate into your own language.
	*/
	if('off' !== _x('on', 'Kumbh Sans font: on or off', 'zilom')){
		$fonts[] = 'Kumbh+Sans:wght@400;700';
	}
	if($fonts){
		$fonts_url = add_query_arg( array(
			'family' => (implode('&family=', $fonts)),
			'display' => 'swap',
		),  $protocol.'://fonts.googleapis.com/css2');
	}

	return $fonts_url;
}
endif;

function zilom_custom_styles() {
	$custom_css = get_option('zilom_theme_custom_styles');
	if($custom_css){
		wp_enqueue_style(
			'zilom-custom-style',
			ZILOM_THEME_URL . '/css/custom_script.css'
		);
		wp_add_inline_style('zilom-custom-style', $custom_css);
	}
}
add_action('wp_enqueue_scripts', 'zilom_custom_styles', 9999);

function zilom_init_scripts(){
	global $post;
	$protocol = is_ssl() ? 'https' : 'http';
	if ( is_singular() && comments_open() && get_option('thread_comments') ){
		wp_enqueue_script('comment-reply');
	}

	$theme = wp_get_theme('zilom');
	$theme_version = $theme['Version'];

	wp_enqueue_style('zilom-fonts', zilom_fonts_url(), array(), null );
	wp_enqueue_script('bootstrap', ZILOM_THEME_URL . '/js/bootstrap.min.js', array('jquery') );
	wp_enqueue_script('perfect-scrollbar', ZILOM_THEME_URL . '/js/perfect-scrollbar.jquery.min.js');
	wp_enqueue_script('jquery-magnific-popup', ZILOM_THEME_URL . '/js/magnific/jquery.magnific-popup.min.js');
	wp_enqueue_script('jquery-cookie', ZILOM_THEME_URL . '/js/jquery.cookie.js', array('jquery'));
	wp_enqueue_script('owl-carousel', ZILOM_THEME_URL . '/js/owl-carousel/owl.carousel.min.js');
	wp_enqueue_script('jquery-appear', ZILOM_THEME_URL . '/js/jquery.appear.js');
	wp_enqueue_script('select2', ZILOM_THEME_URL . '/js/select2/js/select2.min.js');
	wp_enqueue_script( 'smooth-scroll', ZILOM_THEME_URL . '/js/smooth-scroll.js');
	wp_enqueue_script( 'notify', ZILOM_THEME_URL . '/js/notify.min.js');
	wp_enqueue_script('zilom-main', ZILOM_THEME_URL . '/js/main.js', array('imagesloaded', 'jquery-masonry'));
  
	wp_enqueue_style('dashicons');
	wp_enqueue_style('owl-carousel', ZILOM_THEME_URL .'/js/owl-carousel/assets/owl.carousel.css');
	wp_enqueue_style('magnific', ZILOM_THEME_URL .'/js/magnific/magnific-popup.css');
	wp_enqueue_style('fontawesome', ZILOM_THEME_URL . '/css/fontawesome/css/all.min.css');
	wp_enqueue_style('line-awesome', ZILOM_THEME_URL . '/css/line-awesome/css/line-awesome.min.css');
	wp_enqueue_style('select2', ZILOM_THEME_URL . '/js/select2/css/select2.min.css');

	wp_enqueue_style('zilom-style', ZILOM_THEME_URL . '/style.css');
	wp_enqueue_style('bootstrap', ZILOM_THEME_URL . '/css/bootstrap.css', array(), $theme_version , 'all'); 
	wp_enqueue_style('zilom-template', ZILOM_THEME_URL . '/css/template.css', array(), $theme_version , 'all');
	wp_enqueue_style('zilom-course', ZILOM_THEME_URL . '/css/course.css', array(), $theme_version , 'all');
	
	//Woocommerce
	if(class_exists('WooCommerce')){
		wp_enqueue_script('zilom-woocommerce', ZILOM_THEME_URL . '/js/woocommerce.js');
		wp_dequeue_script('wc-add-to-cart');
		wp_register_script('wc-add-to-cart', ZILOM_THEME_URL . '/js/add-to-cart.js' , array('jquery'));
		wp_enqueue_script('wc-add-to-cart');
		wp_enqueue_style('zilom-woocoomerce', ZILOM_THEME_URL . '/css/woocommerce.css', array(), $theme_version , 'all'); 
	}
}
add_action('wp_enqueue_scripts', 'zilom_init_scripts', 999);
