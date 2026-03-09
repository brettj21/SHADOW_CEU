<?php
/**
 * Announcements
 *
 * @since v.1.0.0
 * @author themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

$announcements = tutor_utils()->get_announcements(get_the_ID());
?>

<?php do_action('tutor_course/announcements/before'); ?>
<div class="tutor-announcements-wrap sc-segment-block">
	<?php
	if (is_array($announcements) && count($announcements)){
		?>
		<?php
		foreach ($announcements as $announcement){
			?>
            <div class="tutor-announcement">
                <div class="tutor-announcement-title-wrap">
                    <h3><?php echo esc_html($announcement->post_title); ?></h3>
                </div>

                <div class="tutor-announcement-meta tutor-text-mute">
					<?php echo sprintf(esc_html__("Posted by %s, at %s ago", 'zilom'), 'admin', human_time_diff(strtotime($announcement->post_date))); ?>
                </div>

                <div class="tutor-announcement-content">
					<?php echo tutor_utils()->announcement_content(wpautop(stripslashes($announcement->post_content))); ?>
                </div>
            </div>
			<?php
		}
		?>
		<?php
	}else{
		?>
        <div class="tutor-no-announcements">
            <h2><?php echo esc_html__('No announcements posted yet.', 'zilom'); ?></h2>
            <p>
				<?php echo esc_html__('The instructor hasn’t added any announcements to this course yet. Announcements are used to inform you of updates or additions to the course.', 'zilom'); ?>
            </p>
        </div>

		<?php
	}
	?>
</div>

<?php do_action('tutor_course/announcements/after'); ?>