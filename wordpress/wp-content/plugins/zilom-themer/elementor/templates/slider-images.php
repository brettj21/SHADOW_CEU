<?php
	use Elementor\Group_Control_Image_Size;

	$this->add_render_attribute('wrapper', 'class', ['gva-gallery-carousel']);
	$this->add_render_attribute('carousel', 'class', 'init-carousel-owl owl-carousel slider-fade');
	$_random = gaviasthemer_random_id();
?>
 
	<div <?php echo $this->get_render_attribute_string('wrapper'); ?>>
		<div <?php echo $this->get_render_attribute_string('carousel') ?> data-items="1" data-items_lg="1" data-items_md="1" data-items_sm="1" data-items_xs="1" data-items_xx="1" data-loop="1" data-speed="800" data-auto_play="1" data-auto_play_speed="800" data-auto_play_timeout="6000" data-auto_play_hover="1" data-navigation="0" data-pagination="0" data-mouse_drag="1" data-touch_drag="1">
			<?php
				foreach ($settings['images'] as $image){
				   $image_id = $image['image']['id']; 
				   $image_url = $image['image']['url'];
				   $image_url_thumbnail = $image['image']['url'];
				   if($image_id){
				      $attach_url = Group_Control_Image_Size::get_attachment_image_src($image_id, 'image', $settings);
				      if($attach_url){
				         $image_url_thumbnail = $attach_url;
				      }
				   }
			?>
				<div class="item">
					<div class="gallery-item">
				      <?php if($image_url){ ?>
				         <div class="image">
				            <img src="<?php echo esc_url($image_url_thumbnail) ?>" alt="<?php echo esc_html($image['title']) ?>" />  
				         </div>
				      <?php } ?>
				   </div>
				</div>   

			<?php } ?>
		</div>
	</div>

