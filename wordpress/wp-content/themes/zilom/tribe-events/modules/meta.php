<?php
/**
 * Single Event Meta Template
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe-events/modules/meta.php
 *
 * @version 4.6.10
 *
 * @package TribeEventsCalendar
 */


// Check for skeleton mode (no outer wrappers per section)
$not_skeleton = ! apply_filters( 'tribe_events_single_event_the_meta_skeleton', false, get_the_ID() );

// Do we want to group venue meta separately?
$set_venue_apart = apply_filters( 'tribe_events_single_event_the_meta_group_venue', false, get_the_ID() );
?>


<div class="tribe-events-event-meta">
	<?php do_action( 'tribe_events_single_meta_before' ); ?>
	<div class="tribe-event-single-detail clearfix">
		<?php tribe_get_template_part( 'modules/meta/details' ); ?>
	</div>

	<div class="tribe-event-meta-bottom">
		
		<div class="row">

			<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 event-single-organizer">
				<div class="content-inner">
					<?php
						if ( tribe_get_venue_id() ) {
							if ( ! $set_venue_apart && ! tribe_embed_google_map() ) {
								tribe_get_template_part( 'modules/meta/venue' );
							} elseif ( ! $set_venue_apart && ! tribe_has_organizer() && tribe_embed_google_map() ) {
								tribe_get_template_part( 'modules/meta/venue' );
								echo '<div class="tribe-events-meta-group tribe-events-meta-group-gmap">';
								tribe_get_template_part( 'modules/meta/map' );
								echo '</div>';
							} else {
								$set_venue_apart = true;
							}
						}

						if ( tribe_has_organizer() ) {
							tribe_get_template_part( 'modules/meta/organizer' );
						}
					?>
				</div>	
			</div>

			<?php if ( $set_venue_apart ) : ?>
				<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 event-single-map">
					<div class="content-inner clearfix">
						<?php tribe_get_template_part( 'modules/meta/map' ); ?>
					</div>		
				</div>
				<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 event-single-venue">
					<div class="content-inner clearfix">
						<?php tribe_get_template_part( 'modules/meta/venue' ); ?>
					</div>	
				</div>
			<?php endif; ?>

		</div>
	</div>	

	<?php do_action( 'tribe_events_single_meta_after' ); ?>
</div>	
