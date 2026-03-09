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
	$number = (in_array('tag', $supported_filters) && $settings['search_tags'] == 'yes') ? $number + 1 : $number;
	$number = (in_array('difficulty_level', $supported_filters) && $settings['search_level'] == 'yes') ? $number + 1 : $number;
	$number = (!$is_membership && in_array('price_type', $supported_filters) && $settings['search_price'] == 'yes') ? $number + 1 : $number;
	$keyword_value = isset($_GET['keyword']) && $_GET['keyword'] ? $_GET['keyword'] : '';
?>
<div class="tutor-course-filter" tutor-course-filter="">
<form class="course-filter-form select-<?php echo esc_attr($settings['filter_style']) ?> search-cols-<?php echo esc_attr($number) ?>">  
	<?php do_action('tutor_course_filter/before'); ?>
	
	<?php if(in_array('search', $supported_filters) && $settings['search_keyword'] == 'yes'){ ?>
		<div class="course-filter_search">
			<?php if($settings['label_input'] == 'yes'){ ?>
				<label class="title-field"><?php echo esc_html__('Search Keyword', 'zilom-themer'); ?></label>
			<?php } ?>
			<div class="content-inner">
				<input type="text" name="keyword" value="<?php echo esc_attr($keyword_value) ?>" placeholder="<?php echo esc_html__('Search...', 'zilom-themer'); ?>"/>
				<i class="tutor-icon-magnifying-glass-1"></i>
			</div>	
		</div>
	<?php } ?>

	<?php if(in_array('category', $supported_filters) && $settings['search_category'] == 'yes'){ ?>
		<div class="course-filter_category course-checkbox-filter">
			<?php if($settings['label_input'] == 'yes'){ ?>
				<label class="title-field"><?php _e('Category', 'zilom-themer'); ?></label>
			<?php } ?>	
			<div class="show-results" data-placehoder="<?php echo esc_attr($settings['placeholder_category']) ?>">
				<div class="content-inner"><?php echo esc_html($settings['placeholder_category']) ?></div>
			</div>
			<div class="checkbox-filter-content">
				<div class="content-inner">
					<?php $filter_object->render_terms('category'); ?>
				</div>	
			</div>	
		</div>
	<?php } ?>

	<?php if(in_array('tag', $supported_filters) && $settings['search_tags'] == 'yes'){  ?>
		<div class="course-filter_tag course-checkbox-filter">
			<?php if($settings['label_input'] == 'yes'){ ?>
				<label class="title-field"><?php echo esc_html($settings['placeholder_tags']) ?></label>
			<?php } ?>	
			<div class="show-results" data-placehoder="<?php echo esc_attr($settings['placeholder_tags']) ?>">
				<div class="content-inner"><?php echo esc_html($settings['placeholder_tags']) ?></div>
			</div>
			<div class="checkbox-filter-content">
				<div class="content-inner">
					<?php $filter_object->render_terms('tag'); ?>
				</div>	
			</div>
		</div>
	<?php } ?>

	<?php if(in_array('difficulty_level', $supported_filters) && $settings['search_level'] == 'yes'){ ?>
		<div class="course-filter_level course-checkbox-filter">
			<?php if($settings['label_input'] == 'yes'){ ?>
				<label class="title-field"><?php _e('Level', 'zilom-themer'); ?></label>
			<?php } ?>	
			<div class="show-results" data-placehoder="<?php echo esc_attr($settings['placeholder_level']) ?>">
				<div class="content-inner"><?php echo esc_html($settings['placeholder_level']) ?></div>
			</div>
			<div class="checkbox-filter-content">
				<div class="content-inner">
					<?php foreach($filter_levels as $value=>$title){ ?>
					  	<label>
							<input type="checkbox" name="tutor-course-filter-level" value="<?php echo $value; ?>"/>&nbsp;
							<?php echo $title; ?>
					  	</label>
				 	<?php } ?>
				</div>
			</div>	 	
		</div>
	<?php } ?>

	<?php if(!$is_membership && in_array('price_type', $supported_filters) && $settings['search_price'] == 'yes'){ ?>
		<div class="course-filter-price_type course-checkbox-filter">
			<?php if($settings['label_input'] == 'yes'){ ?>
				<label class="title-field"><?php _e('Price', 'zilom-themer'); ?></label>
			<?php } ?>	
			<div class="show-results" data-placehoder="<?php echo esc_attr($settings['placeholder_price']) ?>">
				<div class="content-inner"><?php echo esc_html($settings['placeholder_price']) ?></div>
			</div>
			<div class="checkbox-filter-content">
				<div class="content-inner">
					<?php foreach($filter_prices as $value=>$title){ ?>
					  	<label>
							<input type="checkbox" name="tutor-course-filter-price" value="<?php echo $value; ?>"/>&nbsp;
							<?php echo $title; ?>
					  	</label>
				 	<?php } ?>
				</div>
			</div>	 	
		</div>
	<?php } ?>


	<input type="hidden" name="course_per_page" value="<?php echo esc_attr($settings['per_page']) ?>" />
	<input type="hidden" name="course_column_lg" value="<?php echo esc_attr($settings['grid_items_lg']) ?>" />
	<input type="hidden" name="course_column_md" value="<?php echo esc_attr($settings['grid_items_md']) ?>" />
	<input type="hidden" name="course_column_sm" value="<?php echo esc_attr($settings['grid_items_sm']) ?>" />
	<input type="hidden" name="course_column_xs" value="<?php echo esc_attr($settings['grid_items_xs']) ?>" />
	<input type="hidden" name="course_column_xx" value="<?php echo esc_attr($settings['grid_items_xx']) ?>" />
	<input type="hidden" name="only_course_items" value="1" />


	<?php if(isset($_GET['cat']) && $_GET['cat']){ ?>
	  	<input type="hidden" id="course_cat_filter" name="course_cat_filter" value="<?php echo esc_attr($_GET['cat']) ?>" />
	<?php } ?>
	<?php if(isset($_GET['level']) && $_GET['level']){ ?>
	  	<input type="hidden" id="course_level_filter" name="course_level_filter" value="<?php echo esc_attr($_GET['level']) ?>" />
	<?php } ?>
	<?php if(isset($_GET['price']) && $_GET['price']){ ?>
	  	<input type="hidden" id="course_price_filter" name="course_price_filter" value="<?php echo esc_attr($_GET['price']) ?>" />
	<?php } ?>

	<div class="tutor-clear-all-filter">
		<a href="#" onclick="window.location.reload()">
			<i class="tutor-icon-cross"></i> <?php echo esc_html__('Clear All Filter', 'zilom-themer') ?>
		</a>
	</div>

	<?php do_action('tutor_course_filter/after'); ?>
</form>
</div>
<?php if($settings['layout'] != 'filter-layout-top' && is_active_sidebar('archive_course_sidebar')){ ?>
	<div class="archive-course-sidebar">
		<?php dynamic_sidebar('archive_course_sidebar'); ?>
	</div>
<?php } ?>

