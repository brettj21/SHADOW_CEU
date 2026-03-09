<?php
/**
 *
 * @author     Gaviasthemes Team     
 * @copyright  Copyright (C) 2021 gaviasthemes. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 * 
 */
  	$columns_lg = zilom_get_option('blog_columns_lg', '2');
  	$columns_md = zilom_get_option('blog_columns_md', '2');
  	$columns_sm = zilom_get_option('blog_columns_sm', '1');
  	$columns_xs = zilom_get_option('blog_columns_xs', '1');
?>

<div class="clearfix">

	<?php do_action( 'zilom_page_content_before' ); ?>
	<div class="posts-grids blog-grid-style">
		  	<?php if ( have_posts() ) : ?>
				<div class="post-items lg-block-grid-<?php echo esc_attr($columns_lg) ?> md-block-grid-<?php echo esc_attr($columns_md) ?> sm-block-grid-<?php echo esc_attr($columns_sm) ?> xs-block-grid-<?php echo esc_attr($columns_xs) ?>">
				 	<?php
					 	// Start the Loop.
					 	while ( have_posts() ) : the_post();
						 /*
						  * Include the post format-specific template for the content. If you want to
						  * use this in a child theme, then include a file called called content-___.php
						  * (where ___ is the post format) and that will be used instead.
						  */
						 	if(get_the_ID()){
								echo '<div class="item-columns">';  
						  		set_query_var( 'thumbnail_size', 'full' );
						  		get_template_part( 'content', get_post_format() );
								echo '</div>';  
						 	}
					 	endwhile;
					 // Previous/next page navigation.         
					?>
	 			</div>  
	 		<?php 
			else :
				 // If no content, include the "No posts found" template.
				?>
				 	<div class="search-no-results-content">
				  		<div class="message"><?php echo esc_html__( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'zilom' ); ?></div>
				  		<?php get_search_form() ?>
					</div>
				<?php
		 endif;
		  ?>
		</div>
	  <div class="pagination">
		  <?php echo zilom_pagination(); ?>
	  </div>
	 <?php do_action( 'zilom_page_content_after' ); ?>

</div>


 
