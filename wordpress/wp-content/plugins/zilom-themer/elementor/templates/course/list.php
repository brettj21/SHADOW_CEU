<?php
  $query = $this->query_posts();
  $_random = gaviasthemer_random_id();
  if ( ! $query->found_posts ) {
    return;
  }

   $this->add_render_attribute('wrapper', 'class', ['gva-course-list clearfix gva-course']);

?>
  
  <div <?php echo $this->get_render_attribute_string('wrapper'); ?>>
      <div class="gva-content-items"> 
        <div class="list-course-content">
          <?php
            global $post;
            while ( $query->have_posts() ) { 
               $query->the_post();
               echo '<div class="item">';
                  $this->zilom_get_template_part('tutor/loop/content/item', 'course-list');
               echo '</div>';     
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

  