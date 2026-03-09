<?php
Redux::setSection( $opt_name, array(
	'title'   => esc_html__( 'Course Options', 'zilom' ),
	'icon'    => 'el-icon-website',
	'fields'  => array(
		array(
		  	'id'  	=> 'course_archive_info',
		  	'type'  	=> 'info',
		  	'icon'  	=> true,
		  	'raw' 	=> '<h3 style="margin: 0;">' . esc_html__( 'Archive Course Page', 'zilom' ) . '</h3>',
		),

		array(
			'id'			=> 'course_filter_layout',
			'type'		=> 'select',
			'title'     => esc_html__('Filter Layout', 'zilom'),
		  	'options' 	=> array(
		  		'filter-disable'			=> esc_html__( 'Disable Filter', 'zilom' ),
			  	'filter-layout-top'  	=> esc_html__( 'Filter Top', 'zilom' ),
			  	'filter-layout-left'    => esc_html__( 'Filter Left', 'zilom' ),
			  	'filter-layout-right'   => esc_html__( 'Filter Right', 'zilom' )
		  ),
		),
		array(
			'id'			=> 'course_filter_style',
			'type'		=> 'select',
			'title'     => esc_html__('Select Input Style', 'zilom'),
		  	'options' 	=> array(
		  		'filter-dropdow' => esc_html__('Filter Dropdow', 'zilom'),
				'filter-list'    => esc_html__('Filter List', 'zilom'),
		  	),
		  	'default'	=> 'filter-dropdow',
		  	'required'  => array('course_filter_layout', '=', array('filter-layout-left', 'filter-layout-right'))
		),
		array(
		  	'id' 			=> 'course_column_lg',
		  	'type' 		=> 'select',
		  	'title' 		=> esc_html__('Display Columns for Large Screen', 'zilom'),
		  	'options' 	=> array(
			  	'1'      => '1',
			  	'2'      => '2',
			  	'3'      => '3',
			  	'4'      => '4',
			  	'5'      => '5',
			  	'6'      => '6'
		  ),
		  'default' => '3'
		),
		array(
		  	'id' 			=> 'course_column_md',
		  	'type' 		=> 'select',
		  	'title' 		=> esc_html__('Display Columns for Medium Screen', 'zilom'),
		  	'options' 	=> array(
			  	'1'      => '1',
			  	'2'      => '2',
			  	'3'      => '3',
			  	'4'      => '4',
			  	'5'      => '5',
			  	'6'      => '6'
		  ),
		  'default' => '2'
		),
		array(
		  	'id' 			=> 'course_column_sm',
		  	'type' 		=> 'select',
		  	'title' 		=> esc_html__('Display Columns for Small Screen', 'zilom'),
		  	'options' 	=> array(
			  	'1'      => '1',
			  	'2'      => '2',
			  	'3'      => '3',
			  	'4'      => '4',
			  	'5'      => '5',
			  	'6'      => '6'
		  	),
		  'default' => '2'
		),
		array(
		  	'id' 			=> 'course_column_xs',
		  	'type' 		=> 'select',
		  	'title' 		=> esc_html__('Display Columns for Extra Small Screen', 'zilom'),
		  	'options' 	=> array(
			  	'1'      => '1',
			  	'2'      => '2',
			  	'3'      => '3',
			  	'4'      => '4',
			  	'5'      => '5',
			  	'6'      => '6',
		  	),
		  	'default' => '1'
		),

		array(
		  	'id' 			=> 'archive_course_sidebar',
		  	'type' 		=> 'select',
		  	'title' 		=> esc_html__('Courses Archive Page Sidebar Config', 'zilom'),
		  	'options' 	=> array(
			 	'no-sidebars'     => esc_html__('No Sidebars', 'zilom'),
			 	'left-sidebar'    => esc_html__('Left Sidebar', 'zilom'),
			 	'right-sidebar'   => esc_html__('Right Sidebar', 'zilom')
		  	),
		  	'default' => 'no-sidebars'
		),
	  	array(
			'id' 			=> 'archive_course_left_sidebar',
			'type' 		=> 'select',
			'title' 		=> esc_html__('Courses Archive Page Left Sidebar', 'zilom'),
			'data'      => 'sidebars',
			'default' 	=> 'archive_course_sidebar'
	  	),
		array(
			'id' 				=> 'archive_course_right_sidebar',
			'type' 			=> 'select',
			'title' 			=> esc_html__('Courses Archive Page Right Sidebar', 'zilom'),
			'data'      	=> 'sidebars',
			'default' 		=> 'archive_course_sidebar'
		),
	)
));