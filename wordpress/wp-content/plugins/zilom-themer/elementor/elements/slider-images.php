<?php
if ( ! defined( 'ABSPATH' ) ) {
	 exit; // Exit if accessed directly.
}

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Scheme_Typography;
use Elementor\Repeater;

/**
 * Class GVAElement_Gallery
 */
class GVAElement_Slider_Images extends GVAElement_Base{

	public function get_name() {
		return 'gva-slider-images';
	}

	public function get_title() {
		return __('GVA Slider Images', 'zilom-themer');
	}

	 /**
	  * Get widget icon.
	  *
	  * Retrieve testimonial widget icon.
	  *
	  * @since  1.0.0
	  * @access public
	  *
	  * @return string Widget icon.
	  */
	public function get_icon() {
		return 'eicon-slider-push';
	}

	public function get_keywords() {
		return [ 'slider', 'images', 'carousel' ];
	}

	public function get_script_depends() {
		return [
			'jquery.owl.carousel',
			'gavias.elements',
		];
	}

	public function get_style_depends() {
		return [
			'owl-carousel-css',
		];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_query',
			[
				'label' => __('Query & Layout', 'zilom-themer'),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);

		$repeater = new Repeater();
      $repeater->add_control(
         'image',
         [
            'label'       => __('Image', 'zilom-themer'),
            'type'        => Controls_Manager::MEDIA,
            'show_label' => false,
            'default'    => [
               'url' => GAVIAS_ZILOM_PLUGIN_URL . 'elementor/assets/images/image-2.jpg',
            ]
         ]
      );
		$this->add_control(
         'images',
         [
            'label'       => __('Testimonials Content Item', 'zilom-themer'),
            'type'        => Controls_Manager::REPEATER,
            'fields'      => $repeater->get_controls(),
            'title_field' => '{{{ title }}}',
            'default'     => array(
              	array(
                  'image'    => [
                     'url' => GAVIAS_ZILOM_PLUGIN_URL . 'elementor/assets/images/image-1.jpg',
                  ],
                  'title' => esc_html__('The New Future of architecture', 'zilom-themer'),
              	),
               array(
                  'image'    => [
                     'url' => GAVIAS_ZILOM_PLUGIN_URL . 'elementor/assets/images/image-2.jpg',
                  ],
                  'title' => esc_html__('The New Future of architecture', 'zilom-themer'),
              	),
            )
         ]
      );

		$this->add_control( // xx Layout
			'layout_heading',
			[
				'label'   => __( 'Layout', 'zilom-themer' ),
				'type'    => Controls_Manager::HEADING,
			]
		);
		
		$this->add_control(
			'image_size',
			[
				'label'     => __('Style', 'zilom-themer'),
				'type'      => \Elementor\Controls_Manager::SELECT,
				'options'   => $this->get_thumbnail_size(),
				'default'   => 'zilom_medium'
			]
		);
	
		$this->end_controls_section();

	}

	 protected function render() {
		  $settings = $this->get_settings_for_display();
		  printf( '<div class="gva-element-%s gva-element">', $this->get_name() );
			include $this->get_template('slider-images.php');
		  print '</div>'; 

	 }
}

$widgets_manager->register(new GVAElement_Slider_Images());
