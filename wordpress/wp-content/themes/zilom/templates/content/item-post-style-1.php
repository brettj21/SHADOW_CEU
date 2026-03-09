<?php 
   $item_classes = 'all ';
   $separator = ' ';
   $item_cats = get_the_terms( get_the_ID(), 'category' );
   if(!empty($item_cats) && !is_wp_error($item_cats)){
      foreach((array)$item_cats as $item_cat){
         $item_classes .= $item_cat->slug . ' ';
      }
   }
   
   $thumbnail = 'post-thumbnail';

   $thumbnail = (isset($thumbnail_size) && $thumbnail_size) ? $thumbnail_size : 'zilom_medium';
   $excerpt_words = (isset($excerpt_words) && $excerpt_words) ? $excerpt_words : '30';

   if(!isset($layout)){
      $layout = 'carousel';
   }
   if($layout == 'grid'){
      $item_classes .= ' item-columns';
   }
   $desc = zilom_limit_words($excerpt_words, get_the_excerpt(), '');

?>

<div class="<?php echo esc_attr($item_classes) ?>">
   <article id="post-<?php echo esc_attr(get_the_ID()); ?>" <?php post_class('post post-style-1'); ?>>
      <div class="post-thumbnail">
         <a href="<?php echo esc_url( get_permalink() ) ?>">
            <?php the_post_thumbnail( $thumbnail, array( 'alt' => get_the_title() ) ); ?>
         </a>
         <div class="<?php echo esc_attr(empty(get_the_date()) ? 'entry-meta schedule-date' : 'entry-meta' ) ?>">
            <?php zilom_posted_on(); ?>
         </div> 
      </div>   

      <div class="entry-content">
         <div class="content-inner">
            <h3 class="entry-title"><a href="<?php echo esc_url( get_permalink() ) ?>" rel="bookmark"><?php the_title() ?></a></h3>
            <?php if($desc){ ?>
               <div class="entry-desc">
                  <?php echo esc_html($desc) ?>
               </div>   
            <?php } ?>
            <div class="read-more">
               <a class="btn-inline" href="<?php echo esc_url( get_permalink() ) ?>"><?php echo esc_html__('Read more', 'zilom'); ?></a>
            </div>
         </div>

      </div>
   </article>   
</div>

  