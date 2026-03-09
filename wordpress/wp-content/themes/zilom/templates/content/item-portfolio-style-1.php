<?php 
   $_rand = rand(100, 99999);
   $item_classes = 'all ';
   $post_category = ''; $separator = ' | '; $output = '';
   $item_cats = get_the_terms( get_the_ID(), 'category_portfolio' );
   $images = get_post_meta( get_the_ID(), 'zilom_gallery_images' , false );

   if(!empty($item_cats) && !is_wp_error($item_cats)){
      foreach((array)$item_cats as $item_cat){
         $item_classes .= $item_cat->slug . ' ';
         $output .= '<a href="'.get_category_link( $item_cat->term_id ).'" title="' . esc_attr( sprintf( esc_attr__( "View all posts in %s", 'zilom' ), $item_cat->name ) ) . '">'.$item_cat->name.'</a>'.$separator;
      }
      $post_category = trim($output, $separator);
   }
   $thumbnail = 'post-thumbnail';
   if(isset($thumbnail_size) && $thumbnail_size){
      $thumbnail = $thumbnail_size;
   }
   if(isset($layout) && $layout && $layout == 'grid'){
      $item_classes .= ' item-columns isotope-item';
   }
   if(!isset($excerpt_words)){
      $excerpt_words = zilom_get_option('blog_excerpt_limit', 20);
   }
?>
<div class="<?php echo esc_attr($item_classes) ?>">
   <div class="portfolio-block portfolio-v1">      
      <div class="images">
         <a class="link-image-content" href="<?php the_permalink(); ?>">
            <?php if ( has_post_thumbnail()) {
               the_post_thumbnail($thumbnail);
            }?>
         </a>
         <?php if($images && is_array($images) && count($images) > 0):
            $i = 0;
            foreach($images as $image): 
               $i++; $image_full_src = false; $image_thumb_src = false;
               if($image_full_src = wp_get_attachment_image_src($image, 'full')) $image_full_src = $image_full_src['0'];
               if($image_thumb_src = wp_get_attachment_image_src($image, 'thumbnail')) $image_thumb_src = $image_thumb_src['0']; 
               ?>
               <a class="link-gallery photo-gallery-item<?php echo esc_attr($i==1 ? '' : ' hidden'); ?>" href="<?php echo esc_url($image_full_src) ?>" data-elementor-lightbox-slideshow="<?php echo esc_attr($_rand); ?>">
                  <span class="image-expand"><i class="icon far fa-images"></i></span>
                  <img src="<?php echo esc_url($image_thumb_src) ?>" alt="<?php the_title_attribute() ?>" class="hidden" />
               </a>
            <?php endforeach;?>
         <?php endif; ?>   
      </div>
      <div class="portfolio-content">
         <div class="content-inner">
            <div class="portfolio-meta"><?php echo wp_kses($post_category, true) ?></div>
            <h3 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3> 
         </div>    
      </div>   
   </div>
</div>

  