<?php
/**
 * List View Single Event
 * This file contains one event in the list view
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/list/single-event.php
 *
 * @version 4.6.19
 *
 */
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

$excerpt_words = 20;

// Setup an array of venue details for use later in the template
$venue_details = tribe_get_venue_details();

// The address string via tribe_get_venue_details will often be populated even when there's
// no address, so let's get the address string on its own for a couple of checks below.
$venue_address = tribe_get_address();

// Venue
$has_venue_address = ( ! empty( $venue_details['address'] ) ) ? ' location' : '';

$thumbnail = (isset($thumbnail_size) && $thumbnail_size) ? $thumbnail_size : 'post-thumbnail';

?>

<div class="tribe-event-block clearfix">
	
	<div class="block-content">
		<?php echo tribe_event_featured_image( null, $thumbnail ); ?>
		<div class="tribe-start-date">
			<div class="day"><?php echo tribe_get_start_date(get_the_ID(), false, 'd'); ?></div>
			<div class="month"><?php echo tribe_get_start_date(get_the_ID(), false, 'M'); ?></div>
		</div>
		<div class="tribe-event-content clearfix">
			<div class="tribe-events-event-meta">
				<span class="tribe-event-schedule-details">
					<span class="icon"><i class="far fa-clock"></i></span><?php echo tribe_get_start_date(null) ?>
				</span>
			</div>
			<h3 class="tribe-events-list-event-title event-title">
				<?php the_title() ?>
			</h3>
		</div>
	</div>
	<a class="tribe-event-url" href="<?php echo esc_url( tribe_get_event_link() ); ?>"></a>

</div>