<?php
/**
 * Single Event Template
 * A single event. This displays the event title, description, meta, and
 * optionally, the Google map for the event.
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/single-event.php
 *
 * @package TribeEventsCalendar
 * @version 4.6.19
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}
   $page_id = $event_id = zilom_id();
	$events_label_singular = tribe_get_event_label_singular();
	$events_label_plural   = tribe_get_event_label_plural();
?>

<section id="wp-main-content" class="clearfix main-page">
    <?php do_action( 'zilom_before_page_content' ); ?>
   <div class="container">  
    <div class="main-page-content row">
         <div class="content-page col-12>      
            <div id="wp-content" class="wp-content clearfix">

					<div id="tribe-events-content" class="tribe-events-single">
						<div class="tribe-event-content-inner clearfix row">
							<div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
								<div class="event-single-left">
									<div class="tribe-events-back">
										<a href="<?php echo esc_url( tribe_get_events_link() ); ?>"> <?php printf( '&laquo; ' . esc_html_x( 'All %s', '%s Events plural label', 'zilom' ), $events_label_plural ); ?></a>
									</div>

									<?php tribe_the_notices() ?>

									<?php the_title( '<h1 class="tribe-events-single-event-title">', '</h1>' ); ?>
									<div class="tribe-events-schedule tribe-clearfix">
										<?php echo tribe_events_event_schedule_details( $event_id, '<span><i class="icon far fa-clock"></i>', '</span>' ); ?>
										
										<?php if ( tribe_get_cost() ) : ?>
											<span class="tribe-events-cost d-none"><?php echo tribe_get_cost( null, true ) ?></span>
										<?php endif; ?>

									</div>
									<?php do_action( 'tribe_events_single_event_before_the_content' ) ?>
									<div class="tribe-events-single-event-description tribe-events-content">
										<?php the_content(); ?>
									</div>
									<?php do_action( 'tribe_events_single_event_after_the_content' ) ?>
								</div>
							</div>	

							<div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12">
								<div class="event-single-right">
									<?php echo tribe_event_featured_image( $event_id, 'medium', false ); ?>
								</div>	
							</div>	
						</div>	


						<?php while ( have_posts() ) :  the_post(); ?>
							<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
								
								<!-- Event meta -->
								<?php do_action( 'tribe_events_single_event_before_the_meta' ) ?>
								<?php tribe_get_template_part( 'modules/meta' ); ?>
								<?php do_action( 'tribe_events_single_event_after_the_meta' ) ?>
							</div> <!-- #post-x -->
							<?php if ( get_post_type() == Tribe__Events__Main::POSTTYPE && tribe_get_option( 'showComments', false ) ) comments_template() ?>
						<?php endwhile; ?>

						<!-- Event footer -->
						<div id="tribe-events-footer">
							<!-- Navigation -->
							<nav class="tribe-events-nav-pagination" aria-label="<?php printf( esc_html__( '%s Navigation', 'zilom' ), $events_label_singular ); ?>">
								<ul class="tribe-events-sub-nav">
									<li class="tribe-events-nav-previous"><?php tribe_the_prev_event_link( '<span>&laquo;</span> %title%' ) ?></li>
									<li class="tribe-events-nav-next"><?php tribe_the_next_event_link( '%title% <span>&raquo;</span>' ) ?></li>
								</ul>
								<!-- .tribe-events-sub-nav -->
							</nav>
						</div>
						<!-- #tribe-events-footer -->

					</div><!-- #tribe-events-content -->
				</div>    
         </div>   
         
      </div>   
    </div>
    <?php do_action( 'zilom_after_page_content' ); ?>
</section>