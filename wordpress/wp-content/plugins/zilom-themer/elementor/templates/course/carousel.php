<?php
	$query = $this->query_posts();
	$_random = gaviasthemer_random_id();
	if ( ! $query->found_posts ) {
		return;
	}

	$this->add_render_attribute('wrapper', 'class', ['gva-course-carousel gva-course']);

	$this->add_render_attribute('wrapper', 'data-filter', $_random);

	$this->add_render_attribute('carousel', 'class', 'init-carousel-owl owl-carousel');
  	$style = $settings['style'];
  ?>

	<div <?php echo $this->get_render_attribute_string('wrapper'); ?>>
		<div <?php echo $this->get_render_attribute_string('carousel') ?> <?php echo $this->get_carousel_settings() ?>>
			<?php
			  	global $post;
			  	while ( $query->have_posts() ) { 
				 	$query->the_post();
				 	if($style == 'course-1'){
				 		do_action('tutor_course/archive/before_loop_course');
				 	}
				 	$this->zilom_get_template_part( 'tutor/loop/content/item', $settings['style'], array(
				 		'image_size'   => $settings['image_size']
				 	) );
				 	if($style == 'course-1'){
				 		do_action('tutor_course/archive/after_loop_course');
				 	}
			  	}
			?>
		</div>
	</div>
  <?php
  wp_reset_postdata();