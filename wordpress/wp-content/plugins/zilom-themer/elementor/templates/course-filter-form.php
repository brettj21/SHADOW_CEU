<?php
   $filter_object = new \TUTOR\Course_Filter();
   $filter_levels = apply_filters( 'tutor_course_level', array(
      'all_levels'   => __( 'All Levels', 'tutor' ),
      'beginner'     => __( 'Beginner', 'tutor' ),
      'intermediate' => __( 'Intermediate', 'tutor' ),
      'expert'       => __( 'Expert', 'tutor' ),
   ) );
   $filter_prices=array(
      'free'=> __('Free', 'zilom-themer'),
      'paid'=> __('Paid', 'zilom-themer')
   );

   $supported_filters = tutor_utils()->get_option('supported_course_filters', array());
   $supported_filters = array_keys($supported_filters);
   $is_membership = get_tutor_option('monetize_by')=='pmpro' && tutils()->has_pmpro();

   $number = 0;
   $number = (in_array('search', $supported_filters) && $settings['search_keyword'] == 'yes') ? $number + 1 : $number;
   $number = (in_array('category', $supported_filters) && $settings['search_category'] == 'yes') ? $number + 1 : $number;
   $number = (in_array('difficulty_level', $supported_filters) && $settings['search_level'] == 'yes') ? $number + 1 : $number;
   $number = (!$is_membership && in_array('price_type', $supported_filters) && $settings['search_price'] == 'yes') ? $number + 1 : $number;

   $this->add_render_attribute( 'block', 'class', ['widget gsc-course-filter-form', $settings['style'] ]  );
   $link = isset($settings['link']['url']) ? $settings['link']['url'] : '';
?>

<div <?php echo $this->get_render_attribute_string( 'block' ) ?>>
   <form class="course-filter-form" action="<?php echo esc_url($link) ?>"> 
      <div class="search-form-content">

         <div class="search-form-fields clearfix cols-<?php echo esc_attr($number) ?>">
            <?php if(in_array('search', $supported_filters) && $settings['search_keyword'] == 'yes'){ ?>
               <div class="course-filter_search">
                  <div class="content-inner">
                     <input type="text" name="keyword" placeholder="<?php echo esc_html__('Search...', 'zilom-themer'); ?>"/>
                     <i class="tutor-icon-magnifying-glass-1"></i>
                  </div>   
               </div>
            <?php } ?>

            <?php if(in_array('category', $supported_filters) && $settings['search_category'] == 'yes'){ ?>
               <div class="course-filter_category course-checkbox-filter">
                  <?php
                     ob_start();
                        wp_dropdown_categories( 
                           array(
                              'taxonomy'           => 'course-category',
                              'hierarchical'       => 1,
                              'show_option_all'    => false,
                              'show_option_none'   => 'All Categories',
                              'option_none_value'  => '',
                              'name'               => 'tutor-course-filter-category',
                              'orderby'            => 'name',
                              'hide_empty'         => false,
                              'class'              => 'option-select2-filter',

                           )
                        );
                     $html = str_replace('<select', '<select data-placeholder="All Categories"', ob_get_clean()); 
                     echo $html; 
                  ?>    
               </div>
            <?php } ?>

            <?php if(in_array('difficulty_level', $supported_filters) && $settings['search_level'] == 'yes'){ ?>
               <div class="course-filter_level course-checkbox-filter">
                  <select name="tutor-course-filter-level" class="option-select2-filter" data-placeholder="All Level">
                     <option value="">All Level</option>
                     <?php foreach($filter_levels as $value=>$title){ ?>
                           <option value="<?php echo $value; ?>"/> <?php echo $title; ?></option>
                     <?php } ?>
                  </select>
               </div>
            <?php } ?>

            <?php if(!$is_membership && in_array('price_type', $supported_filters) && $settings['search_price'] == 'yes'){ ?>
               <div class="course-filter-price_type course-checkbox-filter">
                  <select name="tutor-course-filter-price" class="option-select2-filter" data-placeholder="All Price Type">
                     <option value="">All Price Type</option>
                     <?php foreach($filter_prices as $value=>$title){ ?>
                        <option value="<?php echo $value; ?>"/> <?php echo $title; ?></option>
                     <?php } ?>
                  </select>
               </div>
            <?php } ?>
         </div>

         <div class="form-action">
            <button class="btn-theme btn-action" type="submit">
               <i class="fi flaticon-magnifying-glass"></i>
               <?php echo esc_html__('Search', 'zilom-themer') ?> 
            </button>
         </div>   
      </div>

   </form>
</div>      