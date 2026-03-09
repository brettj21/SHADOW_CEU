<?php

/**
 * Template for displaying course content
 *
 * @since v.1.6.7
 *
 * @author Themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version v.1.6.7
 */

if (!defined('ABSPATH'))
    exit;

global $wp_query;

?>

<div class="tutor-price-preview-box">
    <div class="price-meta">
        <?php tutor_course_price(); ?>

        <div class="tutor-lead-info-btn-group">
            <?php do_action('tutor_course/single/actions_btn_group/before'); ?>

            <?php
                if ($wp_query->query['post_type'] !== 'lesson') {
                    $lesson_url = tutor_utils()->get_course_first_lesson();
                    if ($lesson_url) { ?>
                        <a href="<?php echo esc_url($lesson_url); ?>" class="tutor-button tutor-success">
                            <?php echo esc_html__('Continue to lesson', 'zilom'); ?>
                        </a>
                <?php }
            }
            ?>
        </div>
    </div>    

    <?php tutor_course_material_includes_html(); ?>

</div> <!-- tutor-price-preview-box -->