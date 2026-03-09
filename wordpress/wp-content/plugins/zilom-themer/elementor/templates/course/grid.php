<?php
  $query = $this->query_posts();
  $_random = gaviasthemer_random_id();
  if ( ! $query->found_posts ) {
	 return;
  }

	$this->add_render_attribute('wrapper', 'class', ['gva-course-grid clearfix gva-course']);
   $style = $settings['style'];
	//add_render_attribute grid
	$this->get_grid_settings();
?>
  
  <div <?php echo $this->get_render_attribute_string('wrapper'); ?>>
		<div class="gva-content-items"> 
		  <div <?php echo $this->get_render_attribute_string('grid') ?>>
			 <?php
				global $post;
				$count = 0;
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
		<?php if($settings['pagination'] == 'yes'): ?>
			 <div class="pagination">
				  <?php echo $this->pagination($query); ?>
			 </div>
		<?php endif; ?>
  </div>
  <?php

  wp_reset_postdata();

  