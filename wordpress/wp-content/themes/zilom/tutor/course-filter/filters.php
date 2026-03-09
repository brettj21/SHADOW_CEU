<?php
	$filter_object = new \TUTOR\Course_Filter();
	$filter_levels = array(
	  	'beginner'=> esc_html__('Beginner', 'zilom'),
	  	'intermediate'=> esc_html__('Intermediate', 'zilom'),
	  	'expert'=> esc_html__('Expert', 'zilom')
	);
	$filter_prices=array(
		'free'=> esc_html__('Free', 'zilom'),
		'paid'=> esc_html__('Paid', 'zilom')
	);

	$supported_filters = tutor_utils()->get_option('supported_course_filters', array());
	$supported_filters = array_keys($supported_filters);
	$is_membership = get_tutor_option('monetize_by')=='pmpro' && tutils()->has_pmpro();

	$number = 0;
	$number = in_array('search', $supported_filters) ? $number + 1 : $number;
	$number = in_array('category', $supported_filters) ? $number + 1 : $number;
	$number = in_array('tag', $supported_filters) ? $number + 1 : $number;
	$number = in_array('difficulty_level', $supported_filters) ? $number + 1 : $number;
	$number = !$is_membership && in_array('price_type', $supported_filters) ? $number + 1 : $number;

	$filter_style = zilom_get_option('course_filter_style', 'filter-dropdow');
	$filter_layout = zilom_get_option('course_filter_layout', 'filter-layout-top');
	$filter_style = ($filter_layout == 'filter-layout-top') ? 'filter-dropdow' : $filter_style;

?>
<div class="tutor-course-filter" tutor-course-filter="">
<form class="course-filter-form search-cols-<?php echo esc_attr($number) ?> select-<?php echo esc_attr($filter_style) ?>">  
	
	<?php do_action('tutor_course_filter/before'); ?>
	
	<?php if(in_array('search', $supported_filters)){ ?>
		<div class="course-filter_search">
			<label class="title-field"><?php echo esc_html__('Keyword', 'zilom'); ?></label>
			<div class="content-inner">
				<input type="text" name="keyword" placeholder="<?php echo esc_attr__('Search...', 'zilom'); ?>"/>
				<i class="tutor-icon-magnifying-glass-1"></i>
			</div>	
		</div>
	<?php } ?>


	<?php if(in_array('category', $supported_filters)){ ?>
		<div class="course-filter_category course-checkbox-filter">
			<label class="title-field"><?php echo esc_html__('Category', 'zilom'); ?></label>
			<div class="show-results" data-placehoder="<?php echo esc_attr__('All Category', 'zilom') ?>">
				<div class="content-inner"><?php echo esc_html__('All Category', 'zilom') ?></div>
			</div>
			<div class="checkbox-filter-content">
				<div class="content-inner">
					<?php $filter_object->render_terms('category'); ?>
				</div>	
			</div>
		</div>
	<?php } ?>



	<?php if(in_array('tag', $supported_filters)){ ?>
		<div class="course-filter_tag course-checkbox-filter">
			<label class="title-field"><?php echo esc_html__('Tag', 'zilom'); ?></label>
			<div class="show-results" data-placehoder="<?php echo esc_attr__('All Tags', 'zilom') ?>">
				<div class="content-inner"><?php echo esc_html__('All Tags', 'zilom') ?></div>
			</div>
			<div class="checkbox-filter-content">
				<div class="content-inner">
					<?php $filter_object->render_terms('tag'); ?>
				</div>	
			</div>
		</div> 
	<?php } ?>


	<?php if(in_array('difficulty_level', $supported_filters)){ ?>
		<div class="course-filter_level course-checkbox-filter">
			<label class="title-field"><?php echo esc_html__('Level', 'zilom'); ?></label>
			<div class="show-results" data-placehoder="<?php echo esc_attr__('All Level', 'zilom') ?>">
				<div class="content-inner"><?php echo esc_html__('All Level', 'zilom') ?></div>
			</div>
			<div class="checkbox-filter-content">
				<div class="content-inner">
				  	<?php foreach($filter_levels as $value => $title){ ?>
					  	<label>
							<input type="checkbox" name="tutor-course-filter-level" value="<?php echo esc_attr($value); ?>"/>&nbsp;
							<?php echo esc_html($title); ?>
					  	</label>
					<?php } ?>
				</div>
			</div>		
		</div>
	<?php } ?>

	<?php if(!$is_membership && in_array('price_type', $supported_filters)){ ?>
		<div class="course-filter-price_type course-checkbox-filter">
			<label class="title-field"><?php echo esc_html__('Price', 'zilom'); ?></label>
			<div class="show-results" data-placehoder="<?php echo esc_attr__('Price', 'zilom'); ?>">
				<div class="content-inner"><?php echo esc_html__('Price', 'zilom'); ?></div>
			</div>
			<div class="checkbox-filter-content">
				<div class="content-inner">
					<?php foreach($filter_prices as $value => $title){ ?>
					  	<label>
							<input type="checkbox" name="tutor-course-filter-price" value="<?php echo esc_attr($value); ?>"/>&nbsp;
							<?php echo esc_html($title); ?>
					  	</label>
				 	<?php } ?>
				</div>
			</div>	 	
		</div>
	<?php } ?>
			

	<input type="hidden" name="course_column_lg" value="<?php echo esc_attr(zilom_get_option('course_column_lg', '3')) ?>" />
	<input type="hidden" name="course_column_md" value="<?php echo esc_attr(zilom_get_option('course_column_md', '2')) ?>" />
	<input type="hidden" name="course_column_sm" value="<?php echo esc_attr(zilom_get_option('course_column_sm', '2')) ?>" />
	<input type="hidden" name="course_column_xs" value="<?php echo esc_attr(zilom_get_option('course_column_xs', '1')) ?>" />

	<div class="tutor-clear-all-filter">
		<a href="#" onclick="window.location.reload()">
			<i class="tutor-icon-cross"></i> 
			<span><?php echo esc_html__('Clear All Filter', 'zilom') ?></span>
		</a>
	</div>
	<?php do_action('tutor_course_filter/after'); ?>
</form>
</div>
<?php if(is_active_sidebar('archive_course_sidebar')){ ?>
	<div class="archive-course-sidebar">
		<?php dynamic_sidebar('archive_course_sidebar'); ?>
	</div>
<?php } ?>