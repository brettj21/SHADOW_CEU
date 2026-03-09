<?php
$thumbnail = (isset($image_size) && $image_size) ? $image_size : 'post-thumbnail';
?>
<div class="item-course">
   <div class="tutor-course tutor-course-loop course-block-2 tutor-course-loop-<?php the_ID() ?>">   
      <?php
         do_action('tutor_course/loop/before_content');

         do_action('tutor_course/loop/badge');

         echo '<div class="course-header">';
            get_tutor_course_thumbnail($thumbnail);
            do_action('tutor_course/loop/header');
            echo '<a class="link-overlay" href="' . get_the_permalink() . '"></a>';
         echo '</div>';

         //==
         echo '<div class="course-content-wrap">';
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

            echo '<div class="course-loop-price">';
                tutor_course_loop_price(); 
            echo '</div>';

            do_action('tutor_course/loop/end_content_wrap');
            //==

            do_action('tutor_course/loop/before_footer');
            do_action('tutor_course/loop/footer');
            do_action('tutor_course/loop/after_footer');

            do_action('tutor_course/loop/after_content');
         echo '</div>';   
      ?>
   </div>   
</div>   