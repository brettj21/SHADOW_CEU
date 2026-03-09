<?php
/**
 * Template for displaying lead info
 *
 * @since v.1.0.0
 *
 * @author Themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

if ( ! defined( 'ABSPATH' ) )
    exit;

global $authordata;
$profile_url = tutor_utils()->profile_url($authordata->ID);
$course_id = get_the_ID();
?>

<div class="tutor-single-course-segment tutor-single-course-lead-info">
    
    <?php tutor_load_template( 'single.parts.lead-info' ); ?>

    <?php do_action('tutor_course/single/excerpt/before'); ?>
    <div class="tutor-course-enrolled-info">
        <?php $count_completed_lesson = tutor_course_completing_progress_bar(); ?>
    </div>
    
    <?php
        $excerpt = tutor_get_the_excerpt();
        $disable_about = get_tutor_option('disable_course_about');
        if (! empty($excerpt) && ! $disable_about){
            ?>
            <div class="tutor-course-summery">
                <h4  class="tutor-segment-title"><?php echo esc_html__('About Course', 'zilom') ?></h4>
                <?php echo wp_kses($excerpt, true); ?>
            </div>
            <?php
        }
    ?>

    <?php do_action('tutor_course/single/excerpt/after'); ?>

</div>
