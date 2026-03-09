<?php
   $course_id = get_the_ID();
   $user_id = get_current_user_id();
   $sub_page = get_query_var('course_subpage');
   $enrolled = $user_id && tutils()->is_enrolled($course_id, $user_id);
   $layout = tutor_utils()->get_course_settings($course_id, 'single_layout');
   $layout = empty($layout) || $layout == '-1' ? 'layout-1' : $layout;
?>

<?php 
   if($layout == 'layout-2' || $layout == 'layout-3' || $layout == 'layout-4' || $layout == 'layout-5'){
      if($enrolled){ 
         tutor_course_enrolled_lead_info();
      }else{

         tutor_course_lead_info();
      }
   }
?>

<?php
   if($layout == 'layout-1' || $layout == 'layout-2' || $layout == 'layout-5'){
      tutor_load_template( 'single.course.course-thumbnail' );
   }
?>

<div class="single-course-description">
   <?php 
      if($layout == 'layout-1'){
         if($enrolled){ 
            tutor_course_lead_info(); 
         }else{
            tutor_course_enrolled_lead_info();
         }
      }
   ?>

   <?php 
      if(empty($sub_page)){ 
         tutor_course_content();
         tutor_course_benefits_html(); 
      }
   ?>
</div>