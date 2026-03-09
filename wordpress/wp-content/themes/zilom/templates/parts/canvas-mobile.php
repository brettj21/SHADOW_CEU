<?php
	$zilom_options = zilom_get_options();
?>
<div class="canvas-mobile">
	<div class="canvas-menu gva-offcanvas">
	  	<a class="dropdown-toggle" data-canvas=".mobile" href="#"><i class="icon las la-bars"></i></a>
	</div>
	<div class="gva-offcanvas-content mobile">
		<div class="top-canvas">
			<?php $logo_mobile = (isset($zilom_options['hm_logo']['url']) && $zilom_options['hm_logo']['url']) ? $zilom_options['hm_logo']['url'] : get_template_directory_uri().'/images/logo-mobile.png' ; ?>
		  	<a class="logo-mm" href="<?php echo esc_url( home_url( '/' ) ); ?>">
			 	<img src="<?php echo esc_url($logo_mobile); ?>" alt="<?php bloginfo( 'name' ); ?>" />
		  	</a>
			<a class="control-close-mm" href="#"><i class="far fa-times-circle"></i></a>
		</div>
		<div class="wp-sidebar sidebar">
			<?php do_action('zilom_mobile_menu'); ?>
			<div class="after-offcanvas">
				<?php
					if(is_active_sidebar( 'offcanvas_sidebar_mobile' )){ 
						dynamic_sidebar( 'offcanvas_sidebar_mobile' );
					}
				?>
			</div>    
	  </div>
	</div>
</div>