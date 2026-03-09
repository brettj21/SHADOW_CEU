<?php
   use Elementor\Group_Control_Image_Size;
   use Elementor\Utils;
   $_rand = wp_rand();
   
   $image_id = $banner['image']['id']; 
   $image_url = $banner['image']['url'];
   if($image_id){
      $attach_url = Group_Control_Image_Size::get_attachment_image_src($image_id, 'image', $settings);
      if($attach_url) $image_url = $attach_url;
   }

   $taxonomy = $settings['taxonomy'] ? $settings['taxonomy'] : 'course-category'; 
   $term = $link_term = false;
   if( !empty($banner['term_slug']) ){
      $term = get_term_by( 'slug', $banner['term_slug'], $taxonomy );
      if($term){
         $link_term = get_term_link( $term->term_id, $taxonomy );
      }
   }
   $target = $attributes = '';

   if( !empty($banner['custom_link']['url']) ){ 
      $this->add_link_attributes('link_' . $_rand, $banner['custom_link']);
      $link_term = $banner['custom_link']['url'];

      // if($banner['custom_link']['is_external']){
      //    $target = 'target="_blank"';
      // }
      // if($banner['custom_link']['custom_attributes']){
      //    $attributes = $this->get_render_attribute_string('custom_link' );
      // }
   }
?>

<div class="item banner-group-item">
   <div class="banner-item-content">
      
      <?php if($image_url){ ?>
         <div class="banner-image">
            <img src="<?php echo esc_url($image_url) ?>" alt="<?php echo esc_html($banner['title']) ?>" />
         </div>
      <?php } ?>

      <div class="banner-content">
         <?php 
            if ( $settings['show_number_content'] == 'yes' && $term ) {
               if(!empty($banner['term_slug'])){
                  echo '<div class="number-course">' . $term->count . ' ' . $settings['text_suffix_number'] . '</div>';
               }
            } 
         ?>
         <div class="clearfix"></div>
         <?php if($banner['title']){ ?>
            <h3 class="title"><?php echo $banner['title'] ?></h3>
         <?php } ?>
      </div>

      <?php 
      if($link_term){ 
            if(empty($banner['custom_link']['url'])){ 
               echo '<a class="link-term-overlay" href="' . esc_url($link_term) . '"></a>';
            }else{
               echo '<a class="link-term-overlay" ' . $this->get_render_attribute_string( 'link_' . $_rand ) . '></a>';
            }
         }
      ?>
               
   </div>
</div>