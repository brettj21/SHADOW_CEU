<?php
  	Redux::setSection( $opt_name, array(
	 	'title' 	=> esc_html__('Header Options', 'zilom'),
	 	'icon' 	=> 'el-icon-compass',
	 	'fields' => array(
			array(
			  	'id' 			=> 'header_layout',
			  	'type' 		=> 'select',
			  	'title' 		=> esc_html__('Header Layout', 'zilom'),
			  	'subtitle' 	=> esc_html__('Select a header layout option from the examples.', 'zilom'),
			  	'options' 	=> zilom_get_headers(false),
			  	'default' 	=> 'header-1'
			),
			array(
			  'id' 		=> 'header_logo', 
			  'type' 	=> 'media',
			  'url' 		=> true,
			  'title' 	=> esc_html__('Logo in header default', 'zilom'), 
			  'default' => ''
			),  
			array(
			  'id'  		=> 'header_mobile_settings',
			  'type'  	=> 'info',
			  'raw' 		=> '<h3 class="margin-bottom-0">' . esc_html__( 'Header Mobile settings', 'zilom' ) . '</h3>'
			),
			array(
			  'id' 		=> 'hm_logo',
			  'type' 	=> 'media',
			  'url' 		=> true,
			  'title' 	=> esc_html__('Header Mobile | Logo', 'zilom'),
			  'default' => ''
			),
			array(
			  	'id'        => 'hm_logo_width',
			  	'type'      => 'slider',
			  	'title'     => esc_html__('Header Mobile | Logo Width', 'zilom'),
			  	'default'   => 130,
			  	'min'       => 80,
			  	'max'       => 300,
			  	'step'      => 1,
			  	'display_value' => 'text',
			),
			array(
			  	'id'        => 'hm_logo_padding',
			  	'type'      => 'slider',
			  	'title'     => esc_html__('Header Mobile | Logo Padding Top', 'zilom'),
			  	'default'   => 10,
			  	'min'       => 0,
			  	'max'       => 50,
			  	'step'      => 1,
			  	'display_value' => 'text',
			),
			array(
			  'id' 		=> 'hm_show_user',
			  'type' 	=> 'button_set',
			  'title' 	=> esc_html__('Show User', 'zilom'),
			  'options' => array(
			  		'yes' => esc_html__('Enable', 'zilom'), 
			  		'no' => esc_html__('Disable', 'zilom')
			  	),
			  'default' => 'yes'
			),
	 	)
  	));