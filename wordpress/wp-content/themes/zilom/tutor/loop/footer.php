<?php
/**
   * @package TutorLMS/Templates
   * @version 1.4.3
*/
$course_id = get_the_ID();
$course_duration = get_tutor_course_duration_context();
$tutor_lesson_count = tutor_utils()->get_lesson_count_by_course($course_id);
?>

<div class="course-loop-footer">
   <div class="content-inner">
      <?php if($tutor_lesson_count) { ?>
         <div class="loop-footer-item course-lesson-count">
            <i class="far fa-folder-open"></i><?php echo sprintf(esc_html__( '%s Lessons', 'zilom' ), $tutor_lesson_count) ?>
         </div>
      <?php } ?>
      
      <?php if(!empty($course_duration)) { ?>
         <div class="loop-footer-item coruse-duration">
            <span><i class="far fa-clock"></i><?php echo html_entity_decode($course_duration); ?></span>
         </div>
      <?php } ?>
      <div class="loop-footer-item course-loop-level">
         <span><i class="far fa-flag"></i><?php echo get_tutor_course_level() ?></span>
      </div>
   </div>

   <div class="course-loop-hover hidden">
      <?php
         if(tutor_utils()->is_course_added_to_cart(get_the_ID())){
           // tutor_load_template( 'loop.course-in-cart' );
         }
         else if(tutor_utils()->is_enrolled(get_the_ID())){
            //tutor_load_template( 'loop.course-continue' );
         }
         else if( tutor_utils()->is_course_purchasable() && function_exists('wc_get_product') && function_exists('tutor_course_loop_add_to_cart') ) {
            //$enroll_btn = tutor_course_loop_add_to_cart(false);
           // $product_id = tutor_utils()->get_course_product_id($course_id);
           // $product    = wc_get_product( $product_id );

           // if ( $product ) {
           //    $btn_html = apply_filters( 'tutor_course_restrict_new_entry', $enroll_btn );
          //  }
          //  echo html_entity_decode($btn_html);
         }else{
            $btn_html = '<div class="tutor-loop-cart-btn-wrap"><a class="btn-purchase" href="' . get_the_permalink() . '">' . esc_html__('Get Enrolled', 'zilom') . '</a></div>';
          //  echo html_entity_decode($btn_html);
         }
      ?>

   </div>
</div>
