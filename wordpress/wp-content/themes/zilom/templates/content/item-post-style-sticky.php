<?php 

   $thumbnail = 'post-thumbnail';
   if(isset($thumbnail_size) && $thumbnail_size){
      $thumbnail = $thumbnail_size;
   }

   if(!isset($excerpt_words)){
      $excerpt_words = zilom_get_option('blog_excerpt_limit', 20);
   }

?>

<article id="post-<?php echo esc_attr(get_the_ID()); ?>" class="post post-block">
   
   <div class="post-thumbnail">
      <a href="<?php echo esc_url( get_permalink() ) ?>">
         <?php the_post_thumbnail( $thumbnail, array( 'alt' => get_the_title() ) ); ?>
      </a>
   </div>

   <div class="entry-content">
      <div class="content-inner clearfix">
         <div class="entry-meta">
            <?php zilom_posted_on_2(); ?>
         </div> 
         <h2 class="entry-title"><a href="<?php echo esc_url( get_permalink() ) ?>" rel="bookmark"><?php the_title() ?></a></h2>
      </div>
   </div>
</article>   

  