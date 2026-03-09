<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
use Elementor\Controls_Manager;
use Elementor\Scheme_Color;
use Elementor\Group_Control_Typography;
use Elementor\Scheme_Typography;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Image_Size;

/**
 * Elementor heading widget.
 *
 * Elementor widget that displays an eye-catching headlines.
 *
 * @since 1.0.0
 */
class GVAElement_Course_Filter_Form extends GVAElement_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve heading widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'gva-course-filter-form';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve heading widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Widget title.
	 */
	public function get_title() {
		return __( 'GVA Course Filter Form', 'zilom-themer' );
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve heading widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'eicon-t-letter';
	}

	/**
	 * Get widget keywords.
	 *
	 * Retrieve the list of keywords the widget belongs to.
	 *
	 * @since 2.1.0
	 * @access public
	 *
	 * @return array Widget keywords.
	 */
	public function get_keywords() {
		return [ 'course', 'filter', 'form' ];
	}

	public function get_script_depends() {
		return [
			'gavias.elements',
		];
	}

	/**
	 * Register heading widget controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls(){
		$supported_filters = tutor_utils()->get_option('supported_course_filters', array());
		$supported_filters = array_keys($supported_filters);

		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Content', 'zilom-themer' ),
			]
		);

		$this->add_control(
			'style',
			[
				'label'  => __( 'Style', 'zilom-themer' ),
				'type'   => Controls_Manager::SELECT,
				'options' => [
				  'style-1' => esc_html__('Style I', 'zilom-themer'),
				  'style-2' => esc_html__('Style II', 'zilom-themer'),
				  'style-3'	=> esc_html__('Style III', 'zilom-themer')	
				],
				'default' => 'style-1',
			]
		);

		$this->add_control(
			'link',
			[
				'label' => __( 'Link Courses Page', 'zilom-themer' ),
				'type' => Controls_Manager::URL,
			]
		);

		if(in_array('search', $supported_filters)){
			$this->add_control(
				'search_keyword',
				[
					'label' => esc_html__( 'Enable Search Keyword', 'zilom-themer' ),
					'type' => Elementor\Controls_Manager::SWITCHER,
					'default' => 'yes',
				]
			);
		}

		if(in_array('category', $supported_filters)){ 
			$this->add_control(
				'search_category',
				[
					'label' => esc_html__( 'Enable Search Category', 'zilom-themer' ),
					'type' => Elementor\Controls_Manager::SWITCHER,
					'default' => 'yes',
				]
			);
		}

		if(in_array('difficulty_level', $supported_filters)){
			$this->add_control(
				'search_level',
				[
					'label' => esc_html__( 'Enable Search Level', 'zilom-themer' ),
					'type' => Elementor\Controls_Manager::SWITCHER,
					'default' => 'yes',
				]
			);
		}

		$this->add_control(
			'search_price',
			[
				'label' => esc_html__( 'Enable Search Price', 'zilom-themer' ),
				'type' => Elementor\Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);

		if(in_array('search', $supported_filters)){
			$this->add_control(
				'placeholder_keyword',
				[
					'label' => esc_html__( 'Placeholder keyword input', 'zilom-themer' ),
					'type' => Elementor\Controls_Manager::TEXT,
					'default' => esc_html__('Search...', 'zilom-themer'),
					'label_block' => true,
					'condition' => [
					  'search_keyword' => array('yes')
					]
				]
			);
		}

		if(in_array('category', $supported_filters)){ 
			$this->add_control(
				'placeholder_category',
				[
					'label' => esc_html__( 'Placeholder Category', 'zilom-themer' ),
					'type' => Elementor\Controls_Manager::TEXT,
					'default' => esc_html__('All Categories', 'zilom-themer'),
					'label_block' => true,
					'condition' => [
					  'search_category' => array('yes')
					]
				]
			);
		}

		if(in_array('difficulty_level', $supported_filters)){
			$this->add_control(
				'placeholder_level',
				[
					'label' => esc_html__( 'Placeholder Level', 'zilom-themer' ),
					'type' => Elementor\Controls_Manager::TEXT,
					'default' => esc_html__('Level', 'zilom-themer'),
					'label_block' => true,
					'condition' => [
					  'search_level' => ('yes')
					]
				]
			);
		}

		$this->add_control(
			'placeholder_price',
			[
				'label' => esc_html__( 'Placeholder Price', 'zilom-themer' ),
				'type' => Elementor\Controls_Manager::TEXT,
				'default' => esc_html__('Price', 'zilom-themer'),
				'label_block' => true,
				'condition' => [
				  'search_price' => ('yes')
				]
			]
		);


		$this->add_control(
			'label_input',
			[
				'label' => esc_html__( 'Enable Label Input', 'zilom-themer' ),
				'type' => Elementor\Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_box_style',
			[
				'label' => __( 'Box', 'zilom-themer' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_responsive_control(
			'box_space',
			[
				'label' => __( 'Heading Element Space Bottom', 'zilom-themer' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 26,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 150,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .gsc-heading' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);
		$this->end_controls_section();

	}

	/**
	 * Render heading widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {
		$settings = $this->get_settings_for_display();
		printf( '<div class="gva-element-%s gva-element">', $this->get_name() );
			include $this->get_template('course-filter-form.php');
		print '</div>';
	}
}

$widgets_manager->register(new GVAElement_Course_Filter_Form());
