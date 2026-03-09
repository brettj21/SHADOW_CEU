<?php
  	$this->add_render_attribute( 'block', 'class', [ 'widget gsc-cart-box' ] );
?>
<div <?php echo $this->get_render_attribute_string( 'block' ) ?>>
	<div class="content-inner">
		
		<?php if(class_exists('WooCommerce')){ ?>
		 	<div class="mini-cart-header">
			 	<div class="cart cart_2 mini-cart-inner">
					<a class="mini-cart" href="#" title="<?php echo esc_html__('View your shopping cart', 'zilom'); ?>">
						<span class="title-cart"><i class="flaticon-shopping-cart"></i></span>
						<span class="mini-cart-items">
							<?php 
								if(!is_admin()){
							 		echo WC()->cart->get_cart_contents_count(); 
							 	}else{
							 		echo '1';
							 	}
							?>
						</span>
					</a>
					<div class="minicart-content">
						<?php if(!is_admin()){
							woocommerce_mini_cart(); 
						} ?>
					</div>
					<div class="minicart-overlay"></div>
				</div>
		 	</div>
	  <?php } ?>
		
	</div>
</div>
