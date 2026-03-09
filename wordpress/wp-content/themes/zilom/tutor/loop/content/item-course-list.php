<?php
   global $authordata;
   $course_id = get_the_ID();
?>
<div class="course-block-list clearfix">

   <div class="course-title">
      <h3 class="title"><a href="<?php the_permalink() ?>"><?php echo get_the_title() ?></a></h3>
   </div>

   <div class="course-category">
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
   </div>

   <div class="course-teacher">
      <a href="<?php echo tutor_utils()->profile_url($authordata->ID); ?>"><?php echo get_the_author(); ?></a>
   </div>

   <div class="content-action">
      <div class="course-loop-price"><?php tutor_course_price(); ?></div>
      <div class="enroll">
         <?php
            if(tutor_utils()->is_course_added_to_cart(get_the_ID())){
               tutor_load_template( 'loop.course-in-cart' );
            }
            else if(tutor_utils()->is_enrolled(get_the_ID())){
               tutor_load_template( 'loop.course-continue' );
            }
            else if( tutor_utils()->is_course_purchasable() && function_exists('wc_get_product') ) {
               $enroll_btn = tutor_course_loop_add_to_cart(false);
               $product_id = tutor_utils()->get_course_product_id($course_id);
               $product    = wc_get_product( $product_id );

               if ( $product ) {
                  $btn_html = apply_filters( 'tutor_course_restrict_new_entry', $enroll_btn );
               }
               echo html_entity_decode($btn_html);
            }else{
               $btn_html = '<div class="tutor-loop-cart-btn-wrap">' . apply_filters( 'tutor_course_restrict_new_entry', '<a class="btn-purchase" href="'. get_the_permalink(). '">'.__('Get Enrolled', 'zilom'). '</a>' ) . '</div>';
               echo html_entity_decode($btn_html);
            }
         ?>
      </div>
   </div>
</div>
