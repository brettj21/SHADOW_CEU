<?php
/**
 * $Desc
 *
 * @author     Gaviasthemes Team     
 * @copyright  Copyright (C) 2021 gaviasthemes. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 * 
*/ 

$protocol = is_ssl() ? 'https' : 'http';
$zilom_options = zilom_get_options();
$zilom_logo = ZILOM_THEME_URL . '/images/logo.png';
if(isset($zilom_options['header_logo']['url']) && $zilom_options['header_logo']['url']){
  $zilom_logo = $zilom_options['header_logo']['url'];
}

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  	<meta http-equiv="content-type" content="text/html; charset=<?php bloginfo( 'charset' ); ?>">
  	<meta name="viewport" content="width=device-width">
  	<link rel="profile" href="<?php echo esc_attr($protocol) ?>://gmpg.org/xfn/11">
  	<?php wp_head(); ?>
</head>

<body <?php body_class() ?>>
  	<?php wp_body_open(); ?>
  	<div class="wrapper-page"> <!--page-->
	 	<?php do_action( 'zilom_before_header' );  ?>
	 
	 	<header class="wp-site-header header-default">
		
			<?php do_action( 'zilom_header_mobile' ); ?>

			<div class="header_default_screen">
			  	<div class="header-bottom">
				 	<div class="container">
						<div class="header-bottom-inner">
					  
						  	<div class="logo">
							 	<a class="logo-theme" href="<?php echo esc_url( home_url( '/' ) ); ?>">
									<img src="<?php echo esc_url($zilom_logo); ?>" alt="<?php bloginfo( 'name' ); ?>" />
							 	</a>
						  	</div>
					  
					  		<div class="main-menu-inner">
							 	<div class="content-innter clearfix">
									<div id="gva-mainmenu" class="main-menu">
								  		<?php do_action('zilom_main_menu'); ?>
									</div>
							 	</div> 
					  		</div>

						  	<div class="gsc-search-box">
							 	<div class="content-inner">
									<div class="main-search gva-search">
									  	<a class="control-search">
										 	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M225.474,0C101.151,0,0,101.151,0,225.474c0,124.33,101.151,225.474,225.474,225.474    c124.33,0,225.474-101.144,225.474-225.474C450.948,101.151,349.804,0,225.474,0z M225.474,409.323    c-101.373,0-183.848-82.475-183.848-183.848S124.101,41.626,225.474,41.626s183.848,82.475,183.848,183.848    S326.847,409.323,225.474,409.323z"></path></g></g><g><g><path d="M505.902,476.472L386.574,357.144c-8.131-8.131-21.299-8.131-29.43,0c-8.131,8.124-8.131,21.306,0,29.43l119.328,119.328    c4.065,4.065,9.387,6.098,14.715,6.098c5.321,0,10.649-2.033,14.715-6.098C514.033,497.778,514.033,484.596,505.902,476.472z"></path></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
									  	</a>
									  	<div class="gva-search-content search-content">
										 	<div class="search-content-inner">
												<div class="content-inner"><?php get_search_form(); ?></div>  
										 	</div>  
									  	</div>
									</div>
							 	</div>
						 	</div>

						</div>
				 	</div>  
			  	</div>
			</div> 

	 	</header>
	 	<?php do_action( 'zilom_after_header' );  ?>
	 
	 	<div id="page-content"> <!--page content-->