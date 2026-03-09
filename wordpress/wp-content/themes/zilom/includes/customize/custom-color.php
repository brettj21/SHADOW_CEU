<?php
function zilom_custom_color_theme(){
   $color_theme               = zilom_get_option('color_theme', '');
   $color_link                = zilom_get_option('color_link', '');
   $color_link_hover          = zilom_get_option('color_link_hover', '');
   $color_heading             = zilom_get_option('color_link_hover', '');
   $footer_bg_color           = zilom_get_option('footer_bg_color', '');
   $footer_color              = zilom_get_option('footer_color', '');
   $footer_color_link         = zilom_get_option('footer_color_link', '');
   $footer_color_link_hover   = zilom_get_option('footer_color_link_hover', '');

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

   :root{
      <?php if( !empty($color_theme) ){ ?>
         --zilom-theme-color: <?php echo esc_attr($color_theme) ?>;
      <?php } ?> 

      <?php if( !empty($color_link) ){ ?>
         --zilom-link-color: <?php echo esc_attr($color_link) ?>;
      <?php } ?> 

      <?php if( !empty($color_link_hover) ){ ?>
         --zilom-link-hover-color: <?php echo esc_attr($color_link_hover) ?>;
      <?php } ?> 

      <?php if( !empty($color_heading) ){ ?>
         --zilom-heading-color: <?php echo esc_attr($color_heading) ?>;
      <?php } ?> 

      <?php if( !empty($link_color) ){ ?>
         --zilom-font-sans-serif: "Kumbh Sans", sans-serif; 
      <?php } ?> 

      <?php if ( $main_font_enabled && isset($main_font) && $main_font ){ ?>
         --zilom-font-sans-serif:<?php echo esc_attr( $main_font ); ?>,sans-serif;
      <?php } ?>   

      <?php if ( $secondary_font_enabled && isset($secondary_font) && $secondary_font ){ ?>
         --zilom-heading-font-family :<?php echo esc_attr( $secondary_font ); ?>, sans-serif;
      <?php } ?>

      <?php if( !empty($footer_bg_color) ){ ?>
         --zilom-footer-bg-color: <?php echo esc_attr($footer_bg_color) ?>;
      <?php } ?>   
      
      <?php if( !empty($footer_color) ){ ?>
         --zilom-footer-color: <?php echo esc_attr($footer_color) ?>;
      <?php } ?>   

      <?php if( !empty($footer_color_link) ){ ?>
         --zilom-footer-color-link: <?php echo esc_attr($footer_color_link) ?>;
      <?php } ?>   

      <?php if( !empty($footer_color_link_hover) ){ ?>
         --zilom-footer-color-link-hover: <?php echo esc_attr($footer_color_link_hover) ?>;
      <?php } ?>

   }


<?php
   $styles = ob_get_clean();
   $styles = preg_replace( '!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $styles );
   $styles = str_replace( array( "\r\n", "\r", "\n", "\t", '  ', '   ', '    ' ), '', $styles );
   if($styles){
      wp_enqueue_style( 'zilom-custom-style-color', ZILOM_THEME_URL . '/css/custom_script.css');
      wp_add_inline_style( 'zilom-custom-style-color', $styles );
   }
}

add_action( 'wp_enqueue_scripts', 'zilom_custom_color_theme', 99999 );