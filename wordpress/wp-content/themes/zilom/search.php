<?php
/**
 * $Desc
 *
 * @author     Gaviasthemes Team     
 * @copyright  Copyright (C) 2021 gaviasthemes. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 * 
*/
  	get_header(); 

  	$sidebar_layout_config = zilom_get_option('archive_post_sidebar', ''); 
  	$left_sidebar = zilom_get_option('archive_post_left_sidebar', '');  
  	$right_sidebar = zilom_get_option('archive_post_right_sidebar', ''); 

	$left_sidebar_config  = array('active' => false);
	$right_sidebar_config = array('active' => false);
	$main_content_config  = array('class' => 'col-lg-12 col-lg-12 col-md-12 col-sm-12 col-xs-12');
	 
	$sidebar_config = zilom_sidebar_global($sidebar_layout_config, $left_sidebar, $right_sidebar);
	
	extract($sidebar_config);
	$grid_class = 'lg-block-grid-3 md-block-grid-3 sm-block-grid-2 xs-block-grid-1';
	if( ($left_sidebar_config['active'] && is_active_sidebar($left_sidebar_config['name'])) || ($right_sidebar_config['active'] && is_active_sidebar($right_sidebar_config['name'])) ){
		$grid_class = 'lg-block-grid-2 md-block-grid-2 sm-block-grid-2 xs-block-grid-1';
	}
?>

<section id="wp-main-content" class="clearfix main-page title-layout-standard">
  	<?php do_action( 'zilom_before_page_content' ); ?>
  	<div class="container">
	 	<div class="row main-page-content">
			<div class="content-page <?php echo esc_attr($main_content_config['class']); ?>"> 
			  	<div id="wp-content" class="wp-content">
				 	<?php  if ( have_posts() ) : ?>
						<div class="post-area posts-grids results-search clearfix post-items content-page-index">
						  	<div class="<?php echo esc_attr($grid_class) ?> post-masonry-style post-masonry-index">
							 	<?php  while ( have_posts() ) : the_post(); ?>
									<?php if( get_post_type() == 'product' && class_exists('WooCommerce') ){ ?>
										<div class="item-columns item-masory">
											<?php  wc_get_template_part( 'content', 'product' ); ?>
										</div>
									<?php }else{ ?>
										<div class="item-columns item-masory">
										  	<div class="post post-block post-style-1 clearfix">

											<div class="post-thumbnail">
									         <a href="<?php echo esc_url( get_permalink() ) ?>">
									            <?php the_post_thumbnail( 'post-thumbnail', array( 'alt' => get_the_title() ) ); ?>
									         </a>
									         <div class="<?php echo esc_attr(empty(get_the_date()) ? 'entry-meta schedule-date' : 'entry-meta' ) ?>">
									            <?php zilom_posted_on(); ?>
									         </div> 
									      </div>   

											<div class="entry-content">
									         <div class="content-inner"> 
									            <h3 class="entry-title"><a href="<?php echo esc_url( get_permalink() ) ?>" rel="bookmark"><?php the_title() ?></a></h3>
									            <div class="read-more">
									               <a class="btn-inline" href="<?php echo esc_url( get_permalink() ) ?>"><?php echo esc_html__('Read more', 'zilom'); ?></a>
									            </div>
									         </div>

									      </div>

										  </div>
										</div>
									<?php } ?>	


							 	<?php endwhile; ?> 
						  	</div>       
						</div>                    
				 	<?php else: ?>
						<div class="search-no-results-content">
							<div class="message"><?php echo esc_html__( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'zilom' ); ?></div>
							<?php get_search_form() ?>
						</div>
				 	<?php endif ?>
				 	<div class="pagination">
						<?php echo zilom_pagination(); ?>
				  	</div>
			  	</div>
			</div>

			<!-- Left sidebar -->
			<?php if($left_sidebar_config['active']): ?>
			  	<div class="sidebar wp-sidebar sidebar-left <?php echo esc_attr($left_sidebar_config['class']); ?>">
				 	<?php do_action( 'zilom_before_sidebar' ); ?>
				 	<div class="sidebar-inner">
						<?php dynamic_sidebar($left_sidebar_config['name'] ); ?>
				 	</div>
				 	<?php do_action( 'zilom_after_sidebar' ); ?>
			  	</div>
			<?php endif ?>

			<!-- Right Sidebar -->
			<?php if($right_sidebar_config['active']): ?>
			  	<div class="sidebar wp-sidebar sidebar-right <?php echo esc_attr($right_sidebar_config['class']); ?>">
				 	<?php do_action( 'zilom_before_sidebar' ); ?>
					<div class="sidebar-inner">
					  <?php dynamic_sidebar($right_sidebar_config['name'] ); ?>
					</div>
				 	<?php do_action( 'zilom_after_sidebar' ); ?>
			  	</div>
			<?php endif ?>

	 	</div>
  	</div>
  	<?php do_action( 'zilom_after_page_content' ); ?>
</section>
<?php get_footer(); ?>
