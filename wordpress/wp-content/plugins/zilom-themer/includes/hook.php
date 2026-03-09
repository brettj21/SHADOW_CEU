<?php
function zilom_themer_mime_types($mimes) {
   $mimes['svg'] = 'image/svg+xml';
   return $mimes;
}
add_filter('upload_mimes', 'zilom_themer_mime_types');

function zilom_themer_share(){
   ob_start();
      require_once(GAVIAS_ZILOM_PLUGIN_DIR . 'templates/sharebox-post.php');
   echo ob_get_clean();
}
add_action('zilom_share', 'zilom_themer_share', 1);

// Disables the block editor from managing widgets in the Gutenberg plugin.
add_filter( 'gutenberg_use_widgets_block_editor', '__return_false' );
// Disables the block editor from managing widgets.
add_filter( 'use_widgets_block_editor', '__return_false' );

add_action( 'init', 'zilom_init_options', 1 );
function zilom_init_options(){
   if( empty(get_option( 'tribeEventsTemplate', '' )) ){
      update_option('tribeEventsTemplate', 'default');
   }
   if( empty(get_option( 'views_v2_enabled', '' )) ){
      update_option('views_v2_enabled', '0');
   }

   if(function_exists('tutor')){
      $options    = (array) maybe_unserialize(get_option('tutor_option'));
      $update = false;
      
      if(empty($options)) return;

      if(!isset($options['course_archive_filter'])){
         $options['course_archive_filter'] = 1;
         $update = true;
      }
      if(!isset($options['course_archive_filter'])){
         $options['course_archive_filter'] = 1;
         $update = true;
      }
      if(!isset($options['supported_course_filters']['search'])){
         $options['supported_course_filters']['search'] = 1;
         $update = true;
      }
      if(!isset($options['supported_course_filters']['category'])){
         $options['supported_course_filters']['category'] = 1;
         $update = true;
      }
      if(!isset($options['supported_course_filters']['difficulty_level'])){
         $options['supported_course_filters']['difficulty_level'] = 1;
         $update = true;
      }
      if(!isset($options['supported_course_filters']['price_type'])){
         $options['supported_course_filters']['price_type'] = 1;
         $update = true;
      }
      if(!isset($options['load_tutor_js'])){
         $options['load_tutor_js'] = 1;
         $update = true;
      }
      if(!isset($options['load_tutor_css']) || $options['load_tutor_css']){
         $options['load_tutor_css'] = 0;
         $update = true;
      }
      if(!isset($options['enable_public_profile'])){
         $options['enable_public_profile'] = 1;
         $update = true;
      }
      if(!isset($options['tutor_dashboard_page_id'])){
         $options['tutor_dashboard_page_id'] = 864;
         $update = true;
      }
      if(!isset($options['course_content_access_for_ia'])){
         $options['course_content_access_for_ia'] = 1;
         $update = true;
      }
      if(!isset($options['course_archive_page'])){
         $options['course_archive_page'] = 963;
         $update = true;
      }
      if(!isset($options['enable_course_marketplace'])){
         $options['enable_course_marketplace'] = 1;
         $update = true;
      }
      if(!isset($options['instructor_register_page'])){
         $options['instructor_register_page'] = 866;
         $update = true;
      }
      if(!isset($options['enable_become_instructor_btn'])){
         $options['enable_become_instructor_btn'] = 1;
         $update = true;
      }
      if(!isset($options['student_register_page'])){
         $options['student_register_page'] = 865;
         $update = true;
      }
      if(!isset($options['students_own_review_show_at_profile'])){
         $options['students_own_review_show_at_profile'] = 1;
         $update = true;
      }
      if(!isset($options['show_courses_completed_by_student'])){
         $options['show_courses_completed_by_student'] = 1;
         $update = true;
      }
      if(!isset($options['enable_tutor_earning'])){
         $options['enable_tutor_earning'] = 1;
         $update = true;
      }
      if(!isset($options['monetize_by'])){
         $options['monetize_by'] = 'wc';
         $update = true;
      }
      if(!isset($options['enable_guest_course_cart'])){
         $options['enable_guest_course_cart'] = 1;
         $update = true;
      }
      if(!isset($options['earning_admin_commission'])){
         $options['earning_admin_commission'] = 20;
         $update = true;
      }
      if(!isset($options['earning_instructor_commission'])){
         $options['earning_instructor_commission'] = 80;
         $update = true;
      }
      if($update){
         update_option('tutor_option', $options);
      }
   }
}

add_shortcode( 'gv-page-content', 'zilom_themer_page_content_shortcode' );
function zilom_themer_page_content_shortcode($atts) {
   $thispage = get_page($atts["id"]);
   return do_shortcode( $thispage->post_content );
}
add_shortcode( 'gv-post-content', 'zilom_themer_post_content_shortcode' );
function zilom_themer_post_content_shortcode($atts) {
   $thispost = get_post($atts["id"]);
   return do_shortcode( $thispost->post_content );
}

add_action( 'admin_menu', 'zilom_themer_remove_menu_pages', 999);
function zilom_themer_remove_menu_pages() {
    if( 
      current_user_can('tutor_instructor') 
      && !current_user_can('administrator') 
      && !current_user_can('editor')
      && !current_user_can('author')
      && !current_user_can('shop_manager')
   ){
      remove_menu_page( 'index.php' );
      remove_menu_page( 'edit.php' );
      remove_menu_page( 'edit.php?post_type=footer' );
      remove_menu_page( 'edit.php?post_type=gva_header' );
      remove_menu_page( 'edit.php?post_type=gva_team' );
      remove_menu_page( 'edit.php?post_type=portfolio' );
      remove_menu_page( 'edit.php?post_type=elementor_library' );
      remove_menu_page( 'upload.php' );
      remove_menu_page( 'profile.php' );
      remove_menu_page( 'tools.php' );
      remove_menu_page( 'wpcf7' );
      remove_menu_page( 'edit-elementor_library' );
   }
}
//add_filter( 'tec_events_views_v1_should_display_deprecated_notice', '__return_false' );

// function zilom_themer_elementor_capability_type($args){
//    $args['capability_type'] = 'post_elementor';
//    return $args;
// }
// add_filter('elementor/template_library/sources/local/register_post_type_args', 'zilom_themer_elementor_capability_type');


add_action('wp_logout','zilom_themer_redirect_after_logout');
function zilom_themer_redirect_after_logout(){
   wp_safe_redirect( home_url() );
   exit;
}

add_filter('wpcf7_autop_or_not', '__return_false');
