<?php
/* Save custom theme styles */
if ( ! function_exists( 'zilom_custom_styles_save' ) ) :
function zilom_custom_styles_save() {

   $main_font = false;
   $main_font_enabled = ( zilom_get_option('main_font_source', 0) == 0 ) ? false : true;
   if ( $main_font_enabled ) {
      $font_main = zilom_get_option('main_font', '');
      if(isset($font_main['font-family']) && $font_main['font-family']){
         $main_font = $font_main['font-family'];
      }
   }

   $secondary_font = false;
   $secondary_font_enabled = ( zilom_get_option('secondary_font_source', 0) == 0 ) ? false : true;
   if ( $secondary_font_enabled ) {
      $font_second = zilom_get_option('secondary_font', '');
      if(isset($font_second['font-family']) && $font_second['font-family']){
         $secondary_font = $font_second['font-family'];
      }
   }

   ob_start();
?>

/* Typography */
<?php if ( $main_font_enabled && isset($main_font) && $main_font ) : ?>
body, .tooltip, .popover,
#wp-calendar caption, dl, .elementor-widget-button a, .milestone-block.style-2 .box-content .milestone-content .milestone-number-inner,
.gva-testimonial-carousel.style-1 .testimonial-item .testimonial-content-inner .testimonial-information span.testimonial-name,
.gsc-work-process .box-content .number-text, .social-networks-post > li.title-share, 
#comments ol.comment-list li #respond #reply-title #cancel-comment-reply-link, #ui-datepicker-div, #ui-datepicker-div button,
.woocommerce-page .content-page-inner input.button, .woocommerce-page .content-page-inner a.button, .woocommerce-cart-form__contents thead tr th,
.woocommerce-cart-form__contents .woocommerce-cart-form__cart-item td.product-name, .woocommerce .button[type*="submit"]
{
   font-family:<?php echo esc_attr( $main_font ); ?>,sans-serif;
}
<?php endif; ?>

<?php if ( $secondary_font_enabled && isset($secondary_font) && $secondary_font ) : ?>
h1, h2, h3, h4, h5, h6,.h1, .h2, .h3, .h4, .h5, .h6
{
   font-family:<?php echo esc_attr( $secondary_font ); ?>,sans-serif;
}
<?php endif; ?>

/* ----- Main Color ----- */
<?php if($style = zilom_get_option('main_color', '')){ ?>
   body{
      color:<?php echo esc_attr($style) ?>;
   }
<?php } ?>

/* ----- Background body ----- */
<?php 
   $main_background = zilom_get_option('main_background_image', '');
   if(isset($main_background['url']) && $main_background['url']){
?>
body{
   <?php if ( strlen( $main_background['url'] ) > 0 ) : ?>
   background-image:url("<?php echo esc_url( $main_background['url'] ); ?>");
   <?php if ( zilom_get_option('main_background_image_type', '') == 'fixed' ) : ?>
   background-attachment:fixed;
   background-size:cover;
   <?php else : ?>
   background-repeat:repeat;
   background-position:0 0;
   <?php endif; endif; ?>
   background-color:<?php echo esc_attr( zilom_get_option('main_background_color', '') ); ?>;
}
<?php } ?>

/* ----- Main content ----- */
<?php if(zilom_get_option('content_background_color', '')){ ?>
div.page {
   background: <?php echo esc_attr( zilom_get_option('content_background_color', '') ); ?>!important;
}
<?php } ?>

<?php if(zilom_get_option('content_font_color', '')){ ?>
div.page {
   color: <?php echo esc_attr( zilom_get_option('content_font_color', '') ); ?>;
}
<?php } ?>

<?php if(zilom_get_option('content_font_color_link', '')){ ?>
div.page a{
   color: <?php echo esc_attr( zilom_get_option('content_font_color_link', '') ); ?>;
}
<?php } ?>

<?php if(zilom_get_option('content_font_color_link_hover', '')){ ?>
div.page a:hover, div.page a:active, div.page a:focus {
   background: <?php echo esc_attr( zilom_get_option('content_font_color_link_hover', '') ); ?>!important;
}
<?php } ?>

/* ----- Footer content ----- */
<?php if(zilom_get_option('footer_background_color', '')){ ?>
#wp-footer {
   background: <?php echo esc_attr( zilom_get_option('footer_background_color', '') ); ?>!important;
}
<?php } ?>

<?php if(zilom_get_option('footer_font_color', '')){ ?>
#wp-footer {
   color: <?php echo esc_attr( zilom_get_option('footer_font_color', '') ); ?>;
}
<?php } ?>

<?php if(zilom_get_option('footer_font_color_link', '')){ ?>
#wp-footer a{
   color: <?php echo esc_attr( zilom_get_option('footer_font_color_link', '') ); ?>;
}
<?php } ?>

<?php if(zilom_get_option('footer_font_color_link_hover', '')){ ?>
#wp-footer a:hover, #wp-footer a:active, #wp-footer a:focus {
   background: <?php echo esc_attr( zilom_get_option('footer_font_color_link_hover', '') ); ?>!important;
}
<?php } ?>

/* ----- Breacrumb Style ----- */

<?php
   $styles = ob_get_clean();
   
    $styles = preg_replace( '!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $styles );
   
   $styles = str_replace( array( "\r\n", "\r", "\n", "\t", '  ', '   ', '    ' ), '', $styles );
      
   update_option( 'zilom_theme_custom_styles', $styles, true );
}
endif;

add_action( 'redux/options/zilom_theme_options/saved', 'zilom_custom_styles_save' );


/* Make sure custom theme styles are saved */
function zilom_custom_styles_install() {
   if ( ! get_option( 'zilom_theme_custom_styles' ) && get_option( 'zilom_theme_options' ) ) {
      zilom_custom_styles_save();
   }
}

add_action( 'redux/options/zilom_theme_options/register', 'zilom_custom_styles_install' );
