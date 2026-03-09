<?php
/**
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

use Tutor\Models\CourseModel;
$user_name = sanitize_text_field( get_query_var( 'tutor_profile_username' ) );
$get_user = tutor_utils()->get_user_by_login($user_name);
$user_id = $get_user->ID;
$pageposts = tutor_utils()->get_courses_by_instructor($user_id);
?>
<div class="tutor-courses">
	<?php if ($pageposts):
		global $post;
		echo '<div class="lg-block-grid-4 md-block-grid-3 sm-block-grid-2 xs-block-grid-2 xx-block-grid-1">';
			foreach ($pageposts as $post):
				setup_postdata($post);

				/**
			 * Usage Idea, you may keep a loop within a wrap, such as bootstrap col
				 * @hook tutor_course/archive/before_loop_course
				 * @type action
				 */
				do_action('tutor_course/archive/before_loop_course');

				tutor_load_template('loop.course');

				/**
			 * Usage Idea, If you start any div before course loop, you can end it here, such as </div>
			 *
				 * @hook tutor_course/archive/after_loop_course
				 * @type action
				 */
				do_action('tutor_course/archive/after_loop_course');

			endforeach;
		echo '</div>';	
	else : ?>
    <div>
		<div class="alert alert-primary"><?php echo esc_html__("No course yet." , 'zilom'); ?></div>
    </div>
	<?php endif; ?>
</div>