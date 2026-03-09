<?php
add_filter('tutor_course_loop_wrap_classes', 'zilom_course_loop_wrap_classes');
function zilom_course_loop_wrap_classes($classes){
   $classes[] = 'course-block';
   return $classes;
}

add_filter( 'body_class', 'zilom_tutor_class_names' );
function zilom_tutor_class_names( $classes ) {
   $page_id = zilom_id();

   $register_student_page_id = (int) tutor_utils()->get_option( 'student_register_page' );
   $register_instructor_page_id = (int) tutor_utils()->get_option( 'instructor_register_page' );
   ($register_student_page_id == $page_id || $register_instructor_page_id == $page_id) ? $classes[] = 'z-register-page' : false;

   return $classes;
}


add_action("tutor_course/settings_tab_content/after/general", 'zilom_settings_tab_text_field', 9);

function zilom_settings_tab_text_field($tab){
      $course_id = get_the_ID();
      $language_val = tutor_utils()->get_course_settings($course_id, 'language', __('English', 'zilom'));
      echo '<div class="tutor-row tutor-mb-32">';
         echo '<div class="tutor-col-12 tutor-col-md-5">';
            echo '<label class="tutor-course-setting-label">' . esc_html__('Language', 'zilom') . '</label>';
         echo '</div>';
         echo '<div class="tutor-col-12 tutor-col-md-7">';
            echo '<input style="max-width:126px !important;" class="tutor-form-control" type="text" name="_tutor_course_settings[language]" value="' . $language_val . '" >';
         echo '</div>';   
      echo '</div>';   

      $certificate_val = tutor_utils()->get_course_settings($course_id, 'certificate', __('Yes', 'zilom'));
      echo '<div class="tutor-row tutor-mb-32">';
         echo '<div class="tutor-col-12 tutor-col-md-5">';
            echo '<label class="tutor-course-setting-label">' . esc_html__('Certificate', 'zilom') . '</label>';
         echo '</div>';
         echo '<div class="tutor-col-12 tutor-col-md-7">';
            echo '<input style="max-width:126px !important;" class="tutor-form-control" type="text" name="_tutor_course_settings[certificate]" value="' . $certificate_val . '" >';
         echo '</div>';   
      echo '</div>';   
      }

add_filter('tutor_course_settings_tabs', 'zilom_course_settings_tabs');

function zilom_course_settings_tabs($args){
   $course_id = get_the_ID();

   $fields = array(
      '_tutor_course_settings[single_layout]' => array(
         'type'      => 'select',
         'label'     => esc_html__('Single Layout', 'zilom'),
         'label_title'=> __('Enable', 'tutor'),
         'options'   => array(
            'layout-1' => esc_html__('Layout I', 'zilom' ),
            'layout-2' => esc_html__('Layout II', 'zilom' ),
            'layout-3' => esc_html__('Layout III', 'zilom' ),
            'layout-4' => esc_html__('Layout IV', 'zilom' ),
            'layout-5' => esc_html__('Layout V', 'zilom' )
         ), 
         'value'  =>  tutor_utils()->get_course_settings($course_id, 'single_layout', 'layout-1')
      )
   );

   $fields_array = apply_filters('zilom_tutor_course_settings', $fields);

   $args['single_course_layout'] = array(
      'label'        => esc_html__('Layout Settings', 'zilom'),
      'icon_class'   => ' tutor-icon-settings-1',
      'fields'       => $fields_array
   );

   return $args;
}


add_action( 'woocommerce_product_query', 'zilom_woocommerce_pre_get_posts_query' );
function zilom_woocommerce_pre_get_posts_query( $query ) {
   if( is_shop() || is_page('shop') ) { 
      $meta_query = (array) $query->get( 'meta_query' );
      $meta_query['relation'] = 'OR';
      $meta_query[] = array(
         'key' => '_tutor_product',
         'compare' => 'NOT EXISTS'
      );
      $meta_query[] = array(
         'key' => '_tutor_product',
         'value'    => 'yes',
         'compare' => '!='
      );
      
      $query->set( 'meta_query', $meta_query );
      return $query;
   }
}

add_filter('nsl_get_template_part', 'zilom_nsl_style');

function zilom_nsl_style($templates){
   $templates = \array_diff($templates, ['style.css']);
   return $templates;
}

do_action('get_template_part_style.css', 'zilom_disable_style');
function zilom_disable_style(){
   return false;
}

add_action('tutor_lesson_edit_modal_form_after', 'zilom_lesson_access_metabox');
function zilom_lesson_access_metabox($post){
   $lesson_access = get_post_meta($post->ID, '_lesson_access', true);
   ?>
   <div class="tutor-option-field-row">
    <div class="tutor-option-field-label">
        <label for=""><?php esc_html__('Select Lesson Access', 'zilom'); ?></label>
    </div>
    <div class="tutor-option-field">
        <select name="_lesson_access">
            <option value="lesson_access_enroll" <?php if($lesson_access == 'lesson_access_enroll'){echo esc_attr('selected');} ?>>
               <?php echo esc_html__('Enroll', 'zilom'); ?>
            </option>
            <option value="lesson_access_free" <?php if($lesson_access == 'lesson_access_free'){echo esc_attr('selected');} ?>>
               <?php echo esc_html__('Free', 'zilom'); ?>
            </option>
        </select>
    </div>
</div>
<?php
}

add_action('save_post_'. tutor()->lesson_post_type, 'zilom_save_lesson_meta');
function zilom_save_lesson_meta($post_ID){
   if (isset($_POST['_lesson_access'])) {
      update_post_meta( $post_ID, '_lesson_access', $_POST['_lesson_access'] );
   }
}

add_filter( 'template_include', 'zilom_tutor_load_single_lesson_template', 99 );
 function zilom_tutor_load_single_lesson_template($template){
      global $wp_query;
      
      if ($wp_query->is_single && ! empty($wp_query->query_vars['post_type']) && $wp_query->query_vars['post_type'] === tutor()->lesson_post_type){
         $page_id = get_the_ID();
         $lesson_access = get_post_meta($page_id, '_lesson_access', true);
         
         do_action('tutor_lesson_load_before', $template);

         setup_postdata($page_id);

         if (is_user_logged_in()) {
            $has_content_access = tutils()->has_enrolled_content_access('lesson');
            if ($has_content_access) {
               $template = tutor_get_template('single-lesson');
            } else {
               $template = tutor_get_template('single.lesson.required-enroll'); //You need to enroll first
            }
         }else{
            if($lesson_access == 'lesson_access_free'){
               $template = tutor_get_template('single-lesson');
            }else{
               $template = tutor_get_template('login');
            }
         }
         wp_reset_postdata();

         // Forcefully show lessons if it is public and not paid
         $ancestors = get_post_ancestors($page_id);
         $root = is_array($ancestors) ? end($ancestors) : null;
         $course_id = is_numeric($root) ? $root : $id;

         if(get_post_meta($course_id, '_tutor_is_public_course', true)=='yes' && !tutor_utils()->is_course_purchasable($course_id)){
            $template = tutor_get_template( 'single-lesson' );
         }
         
         return apply_filters('tutor_lesson_template', $template);
      }
      return $template;
   }

