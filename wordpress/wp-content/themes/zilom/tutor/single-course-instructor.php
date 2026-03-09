<?php
/**
 * Template for displaying single course
 *
 * @since v.1.0.0
 *
 * @author Themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

get_header();

$course_id = get_the_ID();
$layout = tutor_utils()->get_course_settings($course_id, 'single_layout');
$layout = empty($layout) || $layout == '-1' ? 'layout-1' : $layout;
$classes = 'sc-instructor tutor-page-wrap sc-' . esc_attr($layout);
?>

<section id="wp-main-content" class="clearfix main-page title-layout-standard main-sc-<?php echo esc_attr($layout) ?>">

    <?php do_action( 'zilom_before_page_content' ); ?>
    <?php do_action('tutor_course/single/instructor/before/wrap');  ?>

    <div class="container"> 
        <div class="main-page-content row">
            <!-- Main content -->
            <div class="content-page col-12">      
                <div id="wp-content" class="wp-content">

                    <div <?php tutor_post_class( $classes ); ?>>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                   <?php do_action('tutor_course/single/instructor/before/inner-wrap'); ?>
                                    <?php tutor_load_template( 'single.parts.course-top' ); ?>
                                    <?php tutor_course_enrolled_nav(); ?>
                                    <?php tutor_course_topics(); ?>
                                    <?php tutor_course_instructors_html(); ?>
                                    <?php tutor_course_target_reviews_html(); ?>
                                    <?php do_action('tutor_course/single/instructor/after/inner-wrap'); ?>
                                </div> <!-- .tutor-col-8 -->

                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                    <div class="single-course-sidebar">
                                        <?php do_action('tutor_course/single/instructor/before/sidebar'); ?>
                                        <?php tutor_load_template( 'single.parts.sidebar' ); ?>
                                        <?php do_action('tutor_course/single/instructor/after/sidebar'); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>     
              
    <?php do_action('tutor_course/single/instructor/after/wrap'); ?>
    <?php do_action( 'zilom_after_page_content' ); ?>
</section>

<?php
get_footer();
