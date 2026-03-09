<?php
   $course_id = get_the_ID();
   $tutor_lesson_count = tutor_utils()->get_lesson_count_by_course($course_id);
   $tutor_course_duration = get_tutor_course_duration_context($course_id);
   $maximum_students = tutor_utils()->get_course_settings($course_id, 'maximum_students');
   $certificate = tutor_utils()->get_course_settings($course_id, 'certificate');
   $language = tutor_utils()->get_course_settings($course_id, 'language');
?>
<div class="course-single-meta">
   <div class="meta-item">
      <span class="icon"><i class="far fa-clock"></i></span>
      <span>
         <?php echo esc_html__('Durations:', 'zilom') ?>
         <span class="value"><?php echo trim($tutor_course_duration) ?></span>
      </span>
   </div>
   <div class="meta-item">
      <span class="icon"><i class="far fa-folder-open"></i></span>
      <span>
         <?php echo esc_html__('Lectures:', 'zilom') ?>
         <span class="value"><?php echo esc_html($tutor_lesson_count) ?></span>
      </span>
   </div>
   <div class="meta-item">
      <span class="icon"><i class="far fa-user-circle"></i></span>
      <span>
         <?php echo esc_html__('Students:', 'zilom') ?>
         <span class="value"><?php echo esc_html__('Max', 'zilom') ?> <?php echo esc_attr($maximum_students) ?></span>
      </span>
   </div>
   <div class="meta-item">
      <span class="icon"><i class="far fa-flag"></i></span>
      <span>
         <?php echo esc_html__('Level:', 'zilom') ?> 
         <span class="value"><?php echo get_tutor_course_level() ?></span>
      </span>
   </div>
   <div class="meta-item">
      <span class="icon"><i class="fas fa-language"></i></span>
      <span>
         <?php echo esc_html__('Language:', 'zilom') ?> 
         <span class="value"><?php echo esc_html($language) ?></span>
      </span>
   </div>
   <div class="meta-item">
      <span class="icon"><i class="fas fa-certificate"></i></span>
      <span>
         <?php echo esc_html__('Certificate:', 'zilom') ?> 
         <span class="value"><?php echo esc_html($certificate) ?></span>
      </span>
   </div>
</div>