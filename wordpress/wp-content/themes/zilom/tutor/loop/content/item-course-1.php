<?php
$thumbnail = (isset($image_size) && $image_size) ? $image_size : 'post-thumbnail';
$course_id = get_the_ID();
?>
<div class="item-course">
   <div class="<?php tutor_course_loop_wrap_classes(); ?>">
      <?php 
         do_action('tutor_course/loop/before_content');

         do_action('tutor_course/loop/badge');

         echo '<div class="course-header">';
            echo '<a class="link-overlay" href="' . get_the_permalink() . '">';
               get_tutor_course_thumbnail($thumbnail);
            echo'</a>';
            do_action('tutor_course/loop/header');
         echo '</div>';

         //==
         do_action('tutor_course/loop/start_content_wrap');

         do_action('tutor_course/loop/before_meta');
         do_action('tutor_course/loop/meta');
         do_action('tutor_course/loop/after_meta');

         do_action('tutor_course/loop/before_title');
         do_action('tutor_course/loop/title');
         do_action('tutor_course/loop/after_title');

         do_action('tutor_course/loop/before_rating');
         do_action('tutor_course/loop/rating');
         do_action('tutor_course/loop/after_rating');

         tutor_course_loop_price(); 

         do_action('tutor_course/loop/end_content_wrap');
         //==

         do_action('tutor_course/loop/before_footer');
         do_action('tutor_course/loop/footer');
         do_action('tutor_course/loop/after_footer');

         do_action('tutor_course/loop/after_content');
      ?>
   </div>
</div>      