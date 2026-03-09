<?php
   global $wp_query;

   $cat = isset($_GET['tutor-course-filter-category']) && $_GET['tutor-course-filter-category'] ? $_GET['tutor-course-filter-category'] : '';
   $tag = isset($_GET['tag']) && $_GET['tutor-course-filter-tag'] ? $_GET['tutor-course-filter-tag'] : '';
   $level = isset($_GET['tutor-course-filter-level']) && $_GET['tutor-course-filter-level'] ? $_GET['tutor-course-filter-level'] : '';
   $price = isset($_GET['tutor-course-filter-price']) && $_GET['tutor-course-filter-price'] ? $_GET['tutor-course-filter-price'] : '';
   $search_key = isset($_GET['keyword']) && $_GET['keyword'] ? $_GET['keyword'] : '';
   $is_membership = get_tutor_option('monetize_by')=='pmpro' && tutils()->has_pmpro();
   
   $args = array(
      'post_status'     => 'publish',
      'post_type'       => 'courses',
      'posts_per_page'  => $settings['per_page'],
      'paged'           => 1,
      'tax_query'       => array(
         'relation' => 'OR'
      )
   );

   if(is_front_page()){
      $args['paged'] = (get_query_var('page')) ? get_query_var('page') : 1;
   }else{
      $args['paged'] = (get_query_var('paged')) ? get_query_var('paged') : 1;
   }

   $args['s'] = $search_key ? $search_key : '';
   
   $level_price = array();
   $is_membership = get_tutor_option('monetize_by')=='pmpro' && tutils()->has_pmpro();

   foreach(array( 'level', 'price' ) as $type){
      if($is_membership && $type=='price'){
         continue;
      }
      $value = ($type =='level') ? $level : $price;
      if(!empty($value)){
         $level_price[] = array(
            'key'      => $type == 'level' ? '_tutor_course_level' : '_tutor_course_price_type',
            'value'    => $value,
            'compare'  => 'IN'
         );
      }
   }

   count($level_price) ? $args['meta_query'] = $level_price : 0;

   if($cat){
      $tax_query =array(
         'taxonomy'   => 'course-category',
         'field'      => 'term_id',
         'terms'      => $cat
      );
      array_push($args['tax_query'], $tax_query);
   }
   if($tag){
      $tax_query =array(
         'taxonomy'   => 'course-tag',
         'field'      => 'term_id',
         'terms'      => $tag
      );
      array_push($args['tax_query'], $tax_query);
   }

   $the_query = new WP_Query($args);
   //Cols
   $classes = array();
   $classes[] = 'lg-block-grid-' . esc_attr($settings['grid_items_lg']);
   $classes[] = 'md-block-grid-' . esc_attr($settings['grid_items_md']);
   $classes[] = 'sm-block-grid-' . esc_attr($settings['grid_items_sm']);
   $classes[] = 'xs-block-grid-' . esc_attr($settings['grid_items_xs']);
   $classes[] = 'xx-block-grid-' . esc_attr($settings['grid_items_xx']);


   do_action('tutor_course/archive/before_loop');
   $course_filter = true;
   $loop_content_only   = 1;
   $column_per_row      = 3;
   $course_per_page     = $settings['per_page'];
   $current_page = 1;

   if ($the_query->have_posts()){
      echo '<div class="tutor-wrap tutor-wrap-parent tutor-courses-wrap tutor-container course-archive-page">';
         echo '<div class="tutor-courses tutor-courses-loop-wrap ">';
         
            echo '<div class="tutor-pagination-wrapper-replaceable ' . esc_attr(implode(' ', $classes)) . '" tutor-course-list-container>';

               while ( $the_query->have_posts() ) : 
                  $the_query->the_post();
                  do_action('tutor_course/archive/before_loop_course');
                  tutor_load_template('loop.course');
                  do_action('tutor_course/archive/after_loop_course');
               endwhile;

               if($settings['pagination']){ 
                  // Load the pagination now
                  global $wp_query;
                  $GLOBALS['tutor_course_archive_arg'] = array(
                     'course_filter'      => 1,
                     'supported_filters'  => 1,
                     'loop_content_only'  => 1,
                     'show_pagination'    => 1,
                     'only_course_items'  => 1
                  );
                  $current_url = wp_doing_ajax() ? $_SERVER['HTTP_REFERER'] : tutor()->current_url;
                  $push_link = add_query_arg( array_merge( $_POST, $GLOBALS['tutor_course_archive_arg'] ), $current_url );

                  $data = wp_doing_ajax(  ) ? $_POST : $_GET;
                  $pagination_data = array(
                     'total_page'  => isset($the_query) ? $the_query->max_num_pages : $wp_query->max_num_pages,
                     'per_page'    => $course_per_page,
                     'paged'       => $current_page,
                     'data_set'    => array('push_state_link'=>$push_link),
                     'ajax'        => array_merge($data, array(
                        'loading_container' => '.tutor-course-filter-loop-container',
                        'action' => 'tutor_course_filter_ajax',
                     ))
                  );

                  tutor_load_template_from_custom_path(
                     tutor()->path . 'templates/dashboard/elements/pagination.php',
                     $pagination_data
                  );
               }

            echo '</div>';
         echo '</div>';
      echo '</div>';

   }else{
      tutor_load_template('course-none');
   }

?>

<?php 
   wp_reset_postdata();
   do_action('tutor_course/archive/after_loop');
