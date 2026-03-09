<?php 
add_filter('woocommerce_add_to_cart_fragments', 'zilom_woocommerce_header_add_to_cart_fragment');
add_action( 'wp_print_scripts', 'zilom_de_script', 100 );

if(!function_exists('zilom_de_script')){
	function zilom_de_script() {
		wp_dequeue_script( 'wc-cart-fragments' );
		return true;
	}
}

if(!function_exists('zilom_woocommerce_header_add_to_cart_fragment')){
	function zilom_woocommerce_header_add_to_cart_fragment( $fragments ) {
		global $woocommerce;
		ob_start();
		zilom_get_cart_contents();
		$fragments['.cart_2'] = ob_get_clean();
		return $fragments;
	}
}    

if(!function_exists('zilom_get_cart_contents')){
	function zilom_get_cart_contents(){
		global $woocommerce;
		?>
			<div class="cart mini-cart-inner">
				<a class="mini-cart" href="#" title="<?php echo esc_attr__('View your shopping cart', 'zilom'); ?>">
					<span class="title-cart"><i class="flaticon-shopping-cart"></i></span>
					<span class="mini-cart-items">
						<?php 
							if(!is_admin()){ 
						 		echo WC()->cart->get_cart_contents_count(); 
						 	}
						?>
					</span>
				</a>
				<div class="minicart-content">
					<?php woocommerce_mini_cart(); ?>
				</div>
				<div class="minicart-overlay"></div>
			</div>
		<?php
	}
}
