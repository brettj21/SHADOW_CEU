<?php
Redux::setSection( $opt_name, array(
  'title'     	=> esc_html__( 'Styling', 'zilom' ),
  'icon'      	=> 'el-icon-pencil',
  'fields' 		=> array(
	 	array(
			'id'  	=> 'colors_info_styling',
			'type'   => 'info',
			'raw' 	=> '<h3 class="margin-bottom-0">' . esc_html__( 'Colors', 'zilom' ) . '</h3>'
	 	),
	 	array(
			'id'        	=> 'body_color',
			'type'         => 'color',
			'title'        => esc_html__( 'Body Color', 'zilom' ),
			'default'      => '',
			'transparent'  => false,
			'validate'     => 'color'
	 	),
	 	array(
			'id'        	=> 'color_link',
			'type'         => 'color',
			'title'        => esc_html__( 'Link Color', 'zilom' ),
			'default'      => '',
			'transparent'  => false,
			'validate'     => 'color'
	 	),
	 	array(
			'id'        	=> 'color_link_hover',
			'type'         => 'color',
			'title'        => esc_html__( 'Link Hover Color', 'zilom' ),
			'default'      => '',
			'transparent'  => false,
			'validate'     => 'color'
	 	),
	 	array(
			'id'        	=> 'color_heading',
			'type'         => 'color',
			'title'        => esc_html__( 'Heading Color', 'zilom' ),
			'default'      => '',
			'transparent'  => false,
			'validate'     => 'color'
	 	),

	 	array(
			'id'  	=> 'info_background',
			'type'   => 'info',
			'raw' 	=> '<h3 class="margin-bottom-0">' . esc_html__( 'Background', 'zilom' ) . '</h3>'
	 	),
	 	array(
			'id'        	=> 'main_background_color',
			'type'         => 'color',
			'title'        => esc_html__( 'Background Color', 'zilom' ),
			'desc'         => esc_html__( 'Used for the main site background.', 'zilom' ),
			'default'      => '',
			'transparent'  => false,
			'validate'     => 'color'
	 	),
	 	array(
			'id'  	=> 'main_background_image',
			'type'   => 'media', 
			'url' 	=> true,
			'title'  => esc_html__( 'Background Image', 'zilom' ),
			'desc'   => esc_html__( 'Upload a background image or specify a URL (boxed layout).', 'zilom' )
	 	),
		array(
			'id'     	=> 'main_background_image_type',
			'type'      => 'select',
			'title'     => esc_html__( 'Background Type', 'zilom' ),
			'desc'      => esc_html__( 'Select the background-image type (fixed image or repeat pattern/texture).', 'zilom' ),
			'options'   => array( 
				'fixed' => esc_html__('Fixed (Full)', 'zilom'), 
				'repeat' => esc_html__('Repeat (Pattern)', 'zilom')
			),
			'default'   => 'fixed'
		),
	 	
	 	array(
			'id'  		=> 'footer_info_styling',
			'type'  		=> 'info',
			'raw' 		=> '<h3 class="margin-bottom-0">' . esc_html__( 'Footer Default Styling', 'zilom' ) . '</h3>'
	 	),
		array(
			'id'    		=> 'footer_bg_color',
			'type'    	=> 'color',
			'title'   	=> esc_html__( 'Background Color', 'zilom' ),
			'default' 	=> '',
			'validate'  => 'color'
		),
	 	array(
			'id'    		=> 'footer_color',
			'type'    	=> 'color',
			'title'   	=> esc_html__( 'Text Color', 'zilom' ),
			'default' 	=> '',
			'validate'  => 'color'
	 	),
		array(
			'id'    		=> 'footer_color_link',
			'type'    	=> 'color',
			'title'   	=> esc_html__( 'Link Color', 'zilom' ),
			'default' 	=> '',
			'validate'  => 'color'
		),
	  	array(
			'id'    		=> 'footer_color_link_hover',
			'type'    	=> 'color',
			'title'   	=> esc_html__( 'Link Hover Color', 'zilom' ),
			'default' 	=> '',
			'validate'  => 'color'
	 	)
  	)
));