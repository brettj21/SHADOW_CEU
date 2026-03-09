<div class="course-single-thumbnail">
   <?php
      if(tutor_utils()->has_video_in_single()){
         tutor_course_video();
      } else{
         get_tutor_course_thumbnail('full');
      }
    ?>
</div>

<?php do_action('tutor_course/single/enroll_box/after_thumbnail'); ?>

