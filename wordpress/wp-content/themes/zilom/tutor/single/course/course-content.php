<?php
/**
 * Template for displaying course content
 *
 * @since v.1.0.0
 *
 * @author Themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */



do_action('tutor_course/single/before/content');

global $post;
?>

   <div class="tutor-single-course-segment tutor-course-content-wrap">
      <div class="tutor-course-content-content">
   		<?php
   		   the_content();
   		?>
      </div>
   </div>

<?php do_action('tutor_course/single/after/content'); ?>