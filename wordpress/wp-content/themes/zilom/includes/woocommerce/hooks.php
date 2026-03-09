<?php
add_filter( 'woocommerce_enqueue_styles', '__return_false' );

remove_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open', 10 );
remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );

remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );
remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 10 );
add_action('woocommerce_after_single_product_summary', 'zilom_woocommerce_output_product_data', 10);

remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20 );
add_action( 'woocommerce_before_main_content', 'zilom_woocommerce_breadcrumb', 20 );

remove_action('woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5);

add_filter( 'loop_shop_per_page', 'zilom_woocommerce_shop_pre_page', 20 );

remove_action('woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10);
add_action('woocommerce_before_shop_loop_item_title',  'zilom_swap_images', 10);

// Add save percent next to sale item prices.
remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_show_product_loop_sale_flash', 10 );
add_action( 'woocommerce_before_shop_loop_item_title', 'zilom_woocommerce_custom_sales_price', 10 );

remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );

add_theme_support( 'wc-product-gallery-zoom' );
add_theme_support( 'wc-product-gallery-lightbox' );
add_theme_support( 'wc-product-gallery-slider' );


if(!function_exists('zilom_woocommerce_custom_sales_price')){
  	function zilom_woocommerce_custom_sales_price() {
	 	global $product;
	 	if($product->get_sale_price()){
			$percentage = round( ( ( $product->get_regular_price() - $product->get_sale_price() ) / $product->get_regular_price() ) * 100 );
			echo ( '<span class="onsale">-' . $percentage . '%</span>' );
		}
  	}
}

if(!function_exists('zilom_woocommerce_shop_pre_page')){
	function zilom_woocommerce_shop_pre_page(){
		return zilom_get_option('products_per_page', 16);
	}
}

add_theme_support( 'woocommerce', array(
  'gallery_thumbnail_image_width' => 180,
));

if(!function_exists('zilom_woocommerce_breadcrumb')){
  	function zilom_woocommerce_breadcrumb(){
	  $result = zilom_style_breadcrumb();
      extract($result);
      if(isset($no_breadcrumbs) && $no_breadcrumbs == true) return;
   ?>
      <div class="custom-breadcrumb <?php echo implode(' ', $classes); ?>" <?php echo(count($styles) > 0 ? 'style="' . implode(';', $styles) . '"' : ''); ?>>
         <?php if($styles_overlay){ ?>
            <div class="breadcrumb-overlay" style="<?php echo esc_attr($styles_overlay); ?>"></div>
         <?php } ?>
         <div class="breadcrumb-main">
           <div class="container">
             <div class="breadcrumb-container-inner" <?php echo(count($styles_inner) > 0 ? 'style="' . implode(';', $styles_inner) . '"' : ''); ?>>
               <?php zilom_general_breadcrumbs(); ?>
               <?php if($title && $show_page_title){  
                 echo '<h2 class="heading-title">' . esc_html( $title ) . '</h2>';
               } ?>
             </div>  
           </div>   
         </div>  
      </div>
	<?php
  }
}

if ( ! function_exists( 'zilom_woocommerce_output_product_data_accordions' ) ) {
	function zilom_woocommerce_output_product_data_accordions() {
		wc_get_template( 'single-product/tabs/accordions.php' );
	}
}

if(!function_exists('zilom_woocommerce_output_product_data')){
	function zilom_woocommerce_output_product_data(){
		global $post;
		$tab_style = get_post_meta($post->ID, 'zilom_product_tab_style', true);
		$tab_style = 'tabs';
		if($tab_style == 'accordion'){
			zilom_woocommerce_output_product_data_accordions();
		}else{
			woocommerce_output_product_data_tabs();
		}
	}
}      

function zilom_swap_images(){
  global $post, $product, $woocommerce;
  $image_size = wc_get_image_size('woocommerce_thumbnail');
  $_width = isset($image_size['width']) ? $image_size['width'] : 'auto';
  $_height = isset($image_size['height']) ? $image_size['height'] : 'auto';
  $output = '';
  $class = 'image';
  $output .= '<a class="link-overlay" href="' . get_the_permalink() . '"></a>';
  if(has_post_thumbnail()){
		$output .= '<span class="attachment-shop_catalog">' . get_the_post_thumbnail( $post->ID,'shop_catalog', array('class'=>'') ) . '</span>';
  }else{
		$output .= '<img src="'.wc_placeholder_img_src().'" alt="'. $post->title .'" class="'.$class.'" width="'.$_width.'" height="'.$_height.'" />';
  }
  echo trim($output);
}
