<?php
function zilom_register_meta_boxes(){
	$prefix = 'zilom_';
	global $meta_boxes, $wp_registered_sidebars;;
	$sidebar = array();
	$sidebar[""] = ' --Default-- ';
	foreach($wp_registered_sidebars as $key => $value){
		$sidebar[$value['id']] = $value['name'];
	}
	$default_options = get_option('zilom_options');
	
	$meta_boxes = array();

	/* ====== Metabox Post Thumbnail ====== */
	$meta_boxes[] = array(
		'id' 			=> 'gavias_metaboxes_post_thumbnail',
		'title' 		=> esc_html__('Thumbnail', 'zilom'),
		'pages' 		=> array( 'post' ),
		'context' 	=> 'normal',
		'fields' 	=> array(
			
			// THUMBNAIL IMAGE
			array(
				'name'  => esc_html__('Thumbnail image', 'zilom'),
				'desc'  => esc_html__('The image that will be used as the thumbnail image.', 'zilom'),
				'id'    => "{$prefix}thumbnail_image",
				'type'  => 'image_advanced',
				'max_file_uploads' => 1
			),

			// THUMBNAIL VIDEO
			array(
				'name' => esc_html__('Thumbnail video URL', 'zilom'),
				'id' => $prefix . 'thumbnail_video_url',
				'desc' => esc_html__('Enter the video url for the thumbnail. Only links from Vimeo & YouTube are supported.', 'zilom'),
				'clone' => false,
				'type'  => 'oembed',
				'std' => '',
			),

			// THUMBNAIL AUDIO
			array(
				'name' 	=> esc_html__('Thumbnail audio URL', 'zilom'),
				'id' 		=> "{$prefix}thumbnail_audio_url",
				'desc' 	=> esc_html__('Enter the audio url for the thumbnail.', 'zilom'),
				'clone' 	=> false,
				'type'  	=> 'oembed',
				'std' 	=> '',
			),

			// THUMBNAIL GALLERY
			array(
				'name'             => esc_html__('Thumbnail gallery', 'zilom'),
				'desc'             => esc_html__('The images that will be used in the thumbnail gallery.', 'zilom'),
				'id'               => "{$prefix}thumbnail_gallery",
				'type'             => 'image_advanced',
				'max_file_uploads' => 50,
			),

			// THUMBNAIL LINK TYPE
			array(
				'name' 		=> esc_html__('Thumbnail link type', 'zilom'),
				'id'   		=> "{$prefix}thumbnail_link_type",
				'type' 		=> 'select',
				'options' 	=> array(
					'link_to_post'    => esc_html__('Link to item', 'zilom'),
					'link_to_url'     => esc_html__('Link to URL', 'zilom'),
					'link_to_url_nw'  => esc_html__('Link to URL (New Window)', 'zilom'),
					'lightbox_thumb'  => esc_html__('Lightbox to the thumbnail image', 'zilom'),
					'lightbox_image'  => esc_html__('Lightbox to image (select below)', 'zilom'),
					'lightbox_video'  => esc_html__('Fullscreen Video Overlay (input below)', 'zilom')
				),
				'multiple' => false,
				'std'  => 'link-to-post',
				'desc' => esc_html__('Choose what link will be used for the image(s) and title of the item.', 'zilom')
			),

			// THUMBNAIL LINK URL
			array(
				'name' 	=> esc_html__('Thumbnail link URL', 'zilom'),
				'id' 		=> $prefix . 'thumbnail_link_url',
				'desc' 	=> esc_html__('Enter the url for the thumbnail link.', 'zilom'),
				'clone' 	=> false,
				'type'  	=> 'text',
				'std' 	=> '',
			),

			// THUMBNAIL LINK LIGHTBOX IMAGE
			array(
				'name'  => esc_html__('Thumbnail link lightbox image', 'zilom'),
				'desc'  => esc_html__('The image that will be used as the lightbox image.', 'zilom'),
				'id'    => "{$prefix}thumbnail_link_image",
				'type'  => 'thickbox_image'
			),
		)
	);

	/* ====== Metabox Page ====== */
	$meta_boxes[] = array(
		'id'    		=> 'gavias_metaboxes_page',
		'title' 		=> esc_html__('Page Meta', 'zilom'),
		'pages' 		=> array( 'page', 'portfolio', 'product', 'post', 'courses' ),
		'priority'  => 'high',
		'fields' 	=> array(
			array(
				'name' => esc_html__('Full Width( 100% Main Width )', 'zilom'),
				'id'   => "{$prefix}page_full_width",
				'type' => 'switch',
				'desc' => esc_html__('Turn on to have the main area display at 100% width according to the window size. Turn off to follow site width.', 'zilom'),
				'std'  => 0,
			),
			array(
				'name' 		=> esc_html__('Header', 'zilom'),
				'id' 			=> $prefix . 'page_header',
				'desc' 		=> esc_html__("You can change header for page if you like's.", 'zilom'),
				'type'  		=> 'select',
				'options'   => zilom_get_headers(),
				'std' 		=> '__default_option_theme',
			),
			array(
				'name'      => esc_html__('Footer', 'zilom'),
				'id'        => $prefix . 'page_footer',
				'desc'      => esc_html__("You can change footer for page if you like's",'zilom'),
				'type'      => 'select',
				'options'   =>  zilom_get_footer(),
				'std'       => '__default_option_theme'
			),
			array(
				'name' 	=> esc_html__('Extra page class', 'zilom'),
				'id' 		=> $prefix . 'extra_page_class',
				'desc' 	=> esc_html__("If you wish to add extra classes to the body class of the page (for custom css use), then please add the class(es) here.", 'zilom'),
				'clone' 	=> false,
				'type'  	=> 'text',
				'std' 	=> '',
			),
		)
	);

	/* ====== Metabox Page Title ====== */
	$meta_boxes[] = array(
		'id' 			=> 'gavias_metaboxes_page_heading',
		'title' 		=> esc_html__('Page Title & Breadcrumb', 'zilom'),
		'pages' 		=> array( 'post', 'page', 'product', 'portfolio', 'gva_team', 'courses'),
		'context' 	=> 'normal',
		'priority'  => 'high',
		'fields' => array(
		  array(
			 'name' => esc_html__('Remove Title of Page', 'zilom'),   
			 'id'   => "{$prefix}disable_page_title",
			 'type' => 'switch',
			 'std'  => 0,
		  ),
		  array(
			 'name' => esc_html__('Disable Breadcrumbs', 'zilom'),
			 'id'   => "{$prefix}no_breadcrumbs",
			 'type' => 'switch',
			 'desc' => esc_html__('Disable the breadcrumbs from under the page title on this page.', 'zilom'),
			 'std'  => 0,
		  ),
		  array(
			 'name' 		=> esc_html__('Breadcrumb Layout', 'zilom'),
			 'id'   		=> "{$prefix}breadcrumb_layout",
			 'type' 		=> 'select',
			 'options' 	=> array(
				 'theme_options'     => esc_html__('Default Options in Theme-Settings', 'zilom'),
				 'page_options'      => esc_html__('Individuals Options This Page', 'zilom')
			 ),
			 'multiple' => false,
			 'std'  => 'theme_options',
			 'desc' => esc_html__('You can use breadcrumb settings default in Theme-Settings or individuals this page', 'zilom')
		  ),
		  array(
			 'name'    => esc_html__('Show page title in the breadcrumbs', 'zilom'),   
			 'id'      => "{$prefix}page_title",
			 'type'    => 'switch',
			 'std'     => 1,
			 'class'   => 'breadcrumb_setting'
		  ),
		  array(
			 'name' 		=> esc_html__('Page Title Override', 'zilom'),
			 'id' 		=> $prefix . 'page_title_one',
			 'desc' 		=> esc_html__("Enter a custom page title if you'd like.", 'zilom'),
			 'type'  	=> 'text',
			 'std' 		=> '',
			 'class'   	=> 'breadcrumb_setting'
		  ),
		  array(
			 'name'        => esc_html__( 'Breadcrumb Padding Top (px)', 'zilom' ),
			 'id'          => "{$prefix}breadcrumb_padding_top",
			 'type'        => 'number',
			 'prefix'      => 'px',
			 'class'       => 'breadcrumb_setting',
			 'desc'        => esc_html__('Option Padding Top of Breacrumb, set empty = padding default of theme', 'zilom'),
			 'std'         => zilom_get_option('breadcrumb_padding_top', '135'),
		  ),
		  array(
			 'name'       => esc_html__( 'Breadcrumb Padding Bottom (px)', 'zilom' ),
			 'id'         => "{$prefix}breadcrumb_padding_bottom",
			 'type'       => 'number',
			 'prefix'     => 'px',
			 'class'      => 'breadcrumb_setting',
			 'desc'       => esc_html__('Option Padding Bottom of Breacrumb, set empty = padding default of theme', 'zilom'),
			 'std'        => zilom_get_option('breadcrumb_padding_bottom', '135'),
		  ),
		  array(
			 'name' 	=> esc_html__( 'Background Overlay Color', 'zilom' ),
			 'id'   	=> "{$prefix}bg_color_title",
			 'desc' 	=> esc_html__( "Set an overlay color for hero heading image.", 'zilom' ),
			 'type' 	=> 'color',
			 'class' => 'breadcrumb_setting',
			 'std'  	=> '',
		  ),
		  array(
			 'name'       => esc_html__( 'Overlay Opacity', 'zilom' ),
			 'id'         => "{$prefix}bg_opacity_title",
			 'desc'       => esc_html__( 'Set the opacity level of the overlay. This will lighten or darken the image depening on the color selected.', 'zilom' ),
			 'clone'      => false,
			 'type'       => 'slider',
			 'prefix'     => '%',
			 'class'   	  => 'breadcrumb_setting',
			 'js_options' => array(
				  'min'  => 0,
				  'max'  => 100,
				  'step' => 1,
			 ),
			 'std'   => '50'
		  ),
		  array(
			 'name'    => esc_html__('Enable Breadcrumb Image', 'zilom'),
			 'id'      => "{$prefix}image_breadcrumbs",
			 'type'    => 'switch',
			 'class'   => 'breadcrumb_setting',
			 'std'     => 1,
		  ),
		  array(
			 'name'  	=> esc_html__('Breadcrumb Background Image', 'zilom'),
			 'id'    	=> "{$prefix}page_title_image",
			 'type'  	=> 'image_advanced',
			 'class'   	=> 'breadcrumb_setting',
			 'max_file_uploads' => 1
		  ),
		  array(
			 'name' 		=> esc_html__('Heading Text Style', 'zilom'),
			 'id'   		=> '{$prefix}page_title_text_style',
			 'type' 		=> 'select',
			 'class'    => 'breadcrumb_setting',
			 'options'  => array(
				 'text-light'     => esc_html__('Light', 'zilom'),
				 'text-dark'      => esc_html__('Dark', 'zilom')
			 ),
			 'multiple' => false,
			 'std'  		=> zilom_get_option('breadcrumb_text_stype', 'text-dark'),
			 'desc' 		=> esc_html__('If you uploaded an image in the option above, choose light/dark styling for the text heading text here.', 'zilom')
		  ),
		  array(
			 'name' 	=> esc_html__('Heading Text Align', 'zilom'),
			 'id'   	=> "{$prefix}page_title_text_align",
			 'type' 	=> 'select',
			 'class'   => 'breadcrumb_setting',
			 'options' => array(
				 'text-left'      => esc_html__('Left', 'zilom'),
				 'text-center'    => esc_html__('Center', 'zilom'),
				 'text-right'     => esc_html__('Right', 'zilom')
			 ),
			 'multiple' => false,
			 'std'  => zilom_get_option('breadcrumb_text_align', 'text-center'),
			 'desc' => esc_html__('Choose the text alignment for the hero heading.', 'zilom')
		  ),
		)
	);

	/* ====== Metabox Page ====== */
	$meta_boxes[] = array(
		'id'    => 'gavias_metaboxes_sidebar_page',
		'title' => esc_html__('Sidebar Options', 'zilom'),
		'pages' => array( 'post', 'page', 'portfolio' ),
		'priority'   => 'high',
		'fields' => array(
			// SIDEBAR CONFIG
			array(
				'name' => esc_html__('Sidebar configuration', 'zilom'),
				'id'   => "{$prefix}sidebar_config",
				'type' => 'select',
				'options' => array(
				  ''                   => esc_html__('--Default--', 'zilom'),
				  'no-sidebars'        => esc_html__('No Sidebars', 'zilom'),
				  'left-sidebar'       => esc_html__('Left Sidebar', 'zilom'),
				  'right-sidebar'      => esc_html__('Right Sidebar', 'zilom'),
				),
				'multiple' => false,
				'std'  => '',
				'desc' => esc_html__('Choose the sidebar configuration for the detail page of this page.', 'zilom'),
			),
			// LEFT SIDEBAR
			array (
				'name'   	=> esc_html__('Left Sidebar', 'zilom'),
				 'id'    	=> "{$prefix}left_sidebar",
				 'type' 		=> 'select',
				 'options'  => $sidebar,
				 'std'   	=> ''
			),
			// RIGHT SIDEBAR
			array (
				'name'   	=> esc_html__('Right Sidebar', 'zilom'),
				'id'    		=> "{$prefix}right_sidebar",
				'type' 		=> 'select',
				'options'  	=> $sidebar,
				'std'   	=> ''
			),
		)
	);

	/* ====== Metabox Team ====== */
  	$meta_boxes[] = array(
	 	'id'    		=> 'metaboxes_team_page',
	 	'title' 		=> esc_html__('Team Settings', 'zilom'),
	 	'pages' 		=> array( 'gva_team' ),
	 	'priority'  => 'high',
	 	'fields' 	=> array(
			array (
			  	'name'   => esc_html__('Position', 'zilom'),
			  	'id'    	=> "{$prefix}team_position",
			  	'type' 	=> 'text',
			  	'std'   	=> ''
			),
			array (
			  	'name'   => esc_html__('Quote', 'zilom'),
			  	'id'    	=> "{$prefix}team_quote",
			  	'type' 	=> 'textarea',
			  	'std'   	=> ''
			),
			array(
			  	'name'   => esc_html__('Email', 'zilom'),
			  	'id'    	=> "{$prefix}team_email",
			  	'type' 	=> 'text',
			  	'std'   	=> ''
			),
			array(
			  	'name'   => esc_html__('Phone', 'zilom'),
			  	'id'    	=> "{$prefix}team_phone",
			  	'type' 	=> 'text',
			  	'std'   	=> ''
			),
			array(
			  	'name'   => esc_html__('Address', 'zilom'),
			  	'id'    	=> "{$prefix}team_address",
			  	'type' 	=> 'text',
			  	'std'   	=> ''
			)
		)
  );

  	/* ====== Metabox Header Builder ====== */
  	$meta_boxes[] = array(
	 	'id'    		=> 'metaboxes_header_builder',
	 	'title' 		=> esc_html__('Header Builder', 'zilom'),
	 	'pages' 		=> array( 'gva_header' ),
	 	'priority' 	=> 'high',
	 	'fields' 	=> array(
			array(
		  		'name' => esc_html__('Enable Background Black', 'zilom'),
		  		'id'   => "{$prefix}header_bg_black",
		  		'type' => 'switch',
		  		'desc' => esc_html__('It will display background black when builder header.', 'zilom'),
		  		'std'  => 0,
			),
			array(
			  	'name' => esc_html__('Full Width( 100% Main Width )', 'zilom'),
			  	'id'   => "{$prefix}header_full_width",
			  	'type' => 'switch',
			  	'desc' => esc_html__('Turn on to have the main area display at 100% width according to the window size. Turn off to follow site width.', 'zilom'),
			  	'std'  => 0,
	  		),
			array(
			  	'name' => esc_html__('Position Styling', 'zilom'),
			  	'id'   => "{$prefix}header_position",
			  	'type' => 'select',
			  	'options' => array(
				 	'relative'      => esc_html__('Relative', 'zilom'),
				 	'absolute'      => esc_html__('Absolute', 'zilom'),
			  	),
		  		'std' 	  => 'relative',
		  		'multiple' => false,
			)
	 	)
  	);
  	if(current_user_can('administrator')){
	  	$meta_boxes[] = array(
		 	'id'    		=> 'administrator_course_settings',
		 	'title' 		=> esc_html__('Administrator Settings for Course', 'zilom'),
		 	'pages' 		=> array( 'courses' ),
		 	'priority'   => 'high',
		 	'fields' 	=> array(
				array(
				  	'name' => esc_html__('Featured', 'zilom'),
				  	'id'   => "{$prefix}course_featured",
				  	'type'    => 'switch',
			  		'std' 	  => '0',
				)
		 	)
	  	);
	}

	return $meta_boxes;
 }  
  /********************* META BOX REGISTERING ***********************/
  add_filter( 'rwmb_meta_boxes', 'zilom_register_meta_boxes' , 99 );

