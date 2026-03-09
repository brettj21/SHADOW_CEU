<?php
/**
 * Progress bar
 *
 * @since v.1.0.0
 * @author themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

$completed_count = tutor_utils()->get_course_completed_percent();

do_action('tutor_course/single/enrolled/before/lead_info/progress_bar');
?>

<div class="tutor-course-status">
    <h4 class="tutor-segment-title"><?php echo esc_html__('Course Status', 'zilom'); ?></h4>
    <div class="tutor-progress-bar-wrap">
        <div class="tutor-progress-bar">
            <div class="tutor-progress-filled" style="--tutor-progress-left: <?php echo esc_attr($completed_count) . '%;'; ?>"></div>
        </div>
        <span class="tutor-progress-percent"><?php echo esc_html($completed_count); ?>% <?php esc_html__(' Complete', 'zilom')?></span>
    </div>
</div>

<?php
    do_action('tutor_course/single/enrolled/after/lead_info/progress_bar');
?>