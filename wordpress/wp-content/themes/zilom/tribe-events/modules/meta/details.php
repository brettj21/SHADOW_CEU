<?php
/**
 * Single Event Meta (Details) Template
 *
 * Override this template in your own theme by creating a file at:
 * [your-theme]/tribe-events/modules/meta/details.php
 *
 * @package TribeEventsCalendar
 * @version 4.6.19
 */


$time_format = get_option( 'time_format', Tribe__Date_Utils::TIMEFORMAT );
$time_range_separator = tribe_get_option( 'timeRangeSeparator', ' - ' );

$start_datetime = tribe_get_start_date();
$start_date = tribe_get_start_date( null, false );
$start_time = tribe_get_start_date( null, false, $time_format );
$start_ts = tribe_get_start_date( null, false, Tribe__Date_Utils::DBDATEFORMAT );

$end_datetime = tribe_get_end_date();
$end_date = tribe_get_display_end_date( null, false );
$end_time = tribe_get_end_date( null, false, $time_format );
$end_ts = tribe_get_end_date( null, false, Tribe__Date_Utils::DBDATEFORMAT );

$time_formatted = null;
if ( $start_time == $end_time ) {
	$time_formatted = esc_html( $start_time );
} else {
	$time_formatted = esc_html( $start_time . $time_range_separator . $end_time );
}

$event_id = Tribe__Main::post_id_helper();

/**
 * Returns a formatted time for a single event
 *
 * @var string Formatted time string
 * @var int Event post id
 */
$time_formatted = apply_filters( 'tribe_events_single_event_time_formatted', $time_formatted, $event_id );

/**
 * Returns the title of the "Time" section of event details
 *
 * @var string Time title
 * @var int Event post id
 */

$cost    = tribe_get_formatted_cost();
$website = tribe_get_event_website_link();
?>

<div class="tribe-events-meta-group-details">
	<div class="clearfix tribe-event-single-meta-detail">
		<?php do_action( 'tribe_events_single_meta_details_section_start' ); ?>

		<div class="event-meta-date">
			<?php
				// All day (multiday) events
				if ( tribe_event_is_all_day() && tribe_event_is_multiday() ) :
			?>
				<span class="icon"><i class="far fa-clock"></i></span>
				<span class="tribe-events-start-date"> <?php echo esc_html( $start_date ) ?> </span><span> - </span>
				<span class="tribe-events-end-date"> <?php echo esc_html( $end_date ) ?> </span>
			<?php
			// All day (single day) events
			elseif ( tribe_event_is_all_day() ):
				?>
				<span class="icon"><i class="far fa-clock"></i></span>
				<span class="tribe-events-start-date"> <?php echo esc_html( $start_date ) ?> </span>
			<?php
			// Multiday events
			elseif ( tribe_event_is_multiday() ) :
				?>
				<span class="icon"><i class="far fa-clock"></i></span>
				<span class="tribe-events-start-datetime updated"> <?php echo esc_html( $start_datetime ) ?> </span><span> - </span>
				<span class="tribe-events-end-datetime"> <?php echo esc_html( $end_datetime ) ?> </span>
			<?php
			// Single day events
			else :
				?>
				<span class="icon"><i class="far fa-clock"></i></span>
				<span class="tribe-events-start-date"> <?php echo esc_html( $start_date ) ?> </span>
				<span class="tribe-events-start-time-label"> @ </span>
				<span class="tribe-events-start-time"><?php echo esc_html($time_formatted); ?></span>
			<?php endif ?>
		</div>		

		<div class="event-meta-cost">
			<?php if ( ! empty( $cost ) ) : ?>
				<span class="icon"><i class="fas fa-donate"></i></span>
				<span class="text"> <?php echo esc_html( $cost ); ?> </span>
			<?php endif ?>
		</div>	

		<div class="event-meta-website">
			<?php
			if ( ! empty( $website ) ) : ?>
				<span class="icon"><i class="fas fa-globe"></i></span>
				<span class="tribe-events-event-url"> <?php echo esc_url($website); ?> </span>
			<?php endif ?>
		</div>

		<div class="event-meta-categories">
			<?php
				echo tribe_get_event_categories(
					get_the_id(), array(
						'before'       => '',
						'sep'          => ', ',
						'after'        => '',
						'label'        => null, // An appropriate plural/singular label will be provided
						'label_before' => '<span class="d-none tribe-events-event-categories-label">',
						'label_after'  => '</span>',
						'wrap_before'  => '<span class="tribe-events-event-categories"><span class="icon"><i class="fas fa-align-justify"></i> </span>',
						'wrap_after'   => '</span>',
					)
				);
			?>
		</div>
			
		<div class="event-meta-tags">
			<?php echo tribe_meta_event_tags( '<span class="icon"><i class="fas fa-tags"></i> </span>', ', ', false ) ?>
		</div>	

		<?php do_action( 'tribe_events_single_meta_details_section_end' ) ?>
	</div>
</div>
