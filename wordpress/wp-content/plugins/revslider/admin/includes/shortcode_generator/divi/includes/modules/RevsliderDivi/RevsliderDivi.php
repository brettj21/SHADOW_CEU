<?php

class RevsliderDiviModule extends ET_Builder_Module {

	public $slug      	= 'revslider_divi';
	public $vb_support	= 'on';
	public $name		= '';
	public $icon_path	= '';

	protected $module_credits = [
		'module_uri' => '',
		'author'     => '',
		'author_uri' => '',
	];

	public function init() {
		$this->name = esc_html__( 'Slider Revolution', 'revslider' );
        $this->icon_path = plugin_dir_path( __FILE__ ) . 'images/rslogo.svg';
	}

    public function get_fields() {
        return [
            'revslider_divi' => [
                'label' => '',
                'type' => 'revslider_divi_input',
                'option_category' => 'basic_option',
                'description' => esc_html__('Select Revslider module among all the modules you have created.', 'revslider'),
                'toggle_slug' => 'revslider_divi',
            ],
        ];
    }

    public function get_settings_modal_toggles() {
        return [
            'general' => [
                'toggles' => [
                    'revslider_divi' => [
                        'priority' => 0,
                        'title' => esc_html__( 'Slider Revolution', 'revslider' ),
                    ],
                ],
            ],
        ];
    }

    public function get_advanced_fields_config() {
        return [
            'main_content' => false,
            'link_options' => false,
            'background' => false,
            'borders' => false,
            'box_shadow' => false,
            'button' => false,
            'filters' => false,
            'fonts' => false,
            'margin_padding' => false,
            'max_width' => false,
        ];
    }

	public function render( $attrs, $content = null, $render_slug = '' ) {
        return do_shortcode( et_pb_fix_shortcodes( str_replace( ['&#91;', '&#93;'], ['[', ']'], $this->props['revslider_divi'] ), true ) );
	}
}

new RevsliderDiviModule;
