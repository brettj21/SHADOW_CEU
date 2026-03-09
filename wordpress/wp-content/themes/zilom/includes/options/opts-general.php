<?php
Redux::setSection( $opt_name, array(
   'title' => esc_html__('General Options', 'zilom'),
   'icon' => 'el-icon-wrench',
   'fields' => array(
      array(
         'id'           => 'color_theme',
         'type'         => 'color',
         'title'        => esc_html__( 'Custom Color Theme', 'zilom' ),
         'desc'         => esc_html__( 'Used custom color theme instead of Skin Colors Available.', 'zilom' ),
         'default'      => '',
         'transparent'  => false,
         'validate'     => 'color'
      ),
      array(
         'id'           => 'page_layout',
         'type'         => 'button_set',
         'title'        => esc_html__('Page Layout', 'zilom'),
         'subtitle'     => esc_html__('Select the page layout type', 'zilom'),
         'options'      => array(
            'boxed'     => esc_html__('Boxed', 'zilom'),
            'fullwidth' => esc_html__('Fullwidth', 'zilom')
         ),
         'default' => 'fullwidth'
      ),
      array(
         'id'        => 'enable_backtotop',
         'type'      => 'button_set',
         'title'     => esc_html__('Enable Back To Top', 'zilom'),
         'subtitle'  => esc_html__('Enable the back to top button that appears in the bottom right corner of the screen.', 'zilom'),
         'options'   => array(
            '1' => esc_html__('On', 'zilom'),
            '0' => esc_html__('Off', 'zilom')
         ),
         'default'   => '1'
      ),
      array(
        'id' => 'map_api_key',
        'type' => 'text',
        'title' => esc_html__('Google Map API key', 'zilom'),
        'default' => ''
      ),
   )
));