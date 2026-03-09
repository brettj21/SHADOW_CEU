<?php
   global $authordata;
   $thumbnail = (isset($image_size) && $image_size) ? $image_size : 'post-thumbnail';
   $profile_url = tutor_utils()->profile_url($authordata->ID);
   $course_students = tutor_utils()->count_enrolled_users_by_course();
?>

<div class="item-course">
   <div class="tutor-course tutor-course-loop course-block-3 tutor-course-loop-<?php the_ID() ?>">   
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
         
         do_action('tutor_course/loop/before_title');
         do_action('tutor_course/loop/title');
         do_action('tutor_course/loop/after_title');

         ?>
            <div class="course-loop-meta">
               <span><?php echo esc_html__('by', 'zilom') ?></span>
               <a href="<?php echo esc_url($profile_url); ?>"><?php echo get_the_author(); ?></a>
               <span><?php echo esc_html__('in', 'zilom') ?></span>
               <span class="course-category">
                  <?php
                     $course_categories = get_tutor_course_categories();
                     if(!empty($course_categories) && is_array($course_categories ) && count($course_categories)){
                        foreach ($course_categories as $course_category){
                           $category_name = $course_category->name;
                           $category_link = get_term_link($course_category->term_id);
                           echo "<a href='$category_link'>$category_name </a>";
                        }
                     }
                  ?>
               </span>
            </div>

         <?php

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
      ?>
   </div>   
</div>   