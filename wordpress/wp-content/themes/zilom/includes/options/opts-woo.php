<?php
Redux::setSection( $opt_name, array(
   'icon'   => 'el-icon-shopping-cart',
   'title'  => esc_html__('Product Options', 'zilom'),
   'fields' => array(
      array(
        'id'        => 'products_per_page',
        'type'      => 'text',
        'title'     => esc_html__('Products Per Page', 'zilom'),
        'subtitle'  => esc_html__('Number value.', 'zilom'),
        'desc'      => esc_html__('The amount of products you would like to show per page on shop/category pages.', 'zilom'),
        'validate'  => 'numeric',
        'default'   => '24'
      )       
   )
));

Redux::setSection( $opt_name, array(
   'icon'         => 'el-icon-shopping-cart',
   'title'        => esc_html__('Shop Options', 'zilom'),
   'subsection'   => true,
   'fields'       => array(
      array(
         'id'        => 'product_display_layout',
         'type'      => 'select',
         'title'     => esc_html__('Default Product Display Layout', 'zilom'),
         'subtitle'  => esc_html__('Choose the default product display layout for WooCommerce shop/category pages.', 'zilom'),
         'options'   => array(
            'grid'   => 'Grid',
            'list'   => 'List',
        ),
        'default' => 'standard'
      ),
      array(
         'id'        => 'product_columns_lg',
         'type'      => 'select',
         'title'     => esc_html__('Display Columns for Large Screen', 'zilom'),
         'subtitle'  => esc_html__('Choose the number of columns to display on shop/category pages.', 'zilom'),
         'options'   => array(
            '1'      => '1',
            '2'      => '2',
            '3'      => '3',
            '4'      => '4',
            '5'      => '5',
            '6'      => '6',
         ),
         'default'   => '3'
      ),

      array(
         'id'        => 'product_columns_md',
         'type'      => 'select',
         'title'     => esc_html__('Display Columns for Medium Screen', 'zilom'),
         'subtitle'  => esc_html__('Choose the number of columns to display on shop/category pages.', 'zilom'),
         'options'   => array(
            '1'      => '1',
            '2'      => '2',
            '3'      => '3',
            '4'      => '4',
            '5'      => '5',
            '6'      => '6',
         ),
         'default'   => '3'
      ),

      array(
         'id'        => 'product_columns_sm',
         'type'      => 'select',
         'title'     => esc_html__('Display Columns for Small Screen', 'zilom'),
         'subtitle'  => esc_html__('Choose the number of columns to display on shop/category pages.', 'zilom'),
         'options'   => array(
            '1'      => '1',
            '2'      => '2',
            '3'      => '3',
            '4'      => '4',
            '5'      => '5',
            '6'      => '6',
         ),
         'default'   => '2'
      ),

      array(
         'id'        => 'product_columns_xs',
         'type'      => 'select',
         'title'     => esc_html__('Display Columns for Extra Small Screen', 'zilom'),
         'subtitle'  => esc_html__('Choose the number of columns to display on shop/category pages.', 'zilom'),
         'options'   => array(
            '1'      => '1',
            '2'      => '2',
            '3'      => '3',
            '4'      => '4',
            '5'      => '5',
            '6'      => '6',
         ),
         'default'   => '1'
      ),

      array(
         'id'        => 'woo_sidebar_config',
         'type'      => 'select',
         'title'     => esc_html__('WooCommerce Sidebar Config', 'zilom'),
         'subtitle'  => esc_html__('Choose the sidebar config for WooCommerce shop/category pages.', 'zilom'),
         'options'   => array(
           'no-sidebars'     => 'No Sidebars',
           'left-sidebar'    => 'Left Sidebar',
           'right-sidebar'   => 'Right Sidebar'
         ),
         'default' => 'no-sidebars'
      ),
      array(
         'id'        => 'woo_left_sidebar',
         'type'      => 'select',
         'title'     => esc_html__('WooCommerce Left Sidebar', 'zilom'),
         'subtitle'  => esc_html__('Choose the left sidebar for WooCommerce shop/category pages.', 'zilom'),
         'data'      => 'sidebars',
         'default'   => 'woocommerce_sidebar'
      ),
      array(
         'id'        => 'woo_right_sidebar',
         'type'      => 'select',
         'title'     => esc_html__('WooCommerce Right Sidebar', 'zilom'),
         'subtitle'  => esc_html__('Choose the right sidebar for WooCommerce shop/category pages.', 'zilom'),
         'data'      => 'sidebars',
         'default'   => 'woocommerce_sidebar'
      ),
      array(
         'id'     => 'woo_shop_divide_0',
         'type'   => 'divide'
      ),
      array(
         'id'        => 'woo_breadcrumb_show_title',
         'type'      => 'button_set',
         'title'     => esc_html__('Breadcrumb Display Title Page', 'zilom'),
         'options'   => array(
            1 => esc_html__('Enable', 'zilom'),
            0 => esc_html__('Disable', 'zilom')
         ),
         'default'   => 1
      ),
      array(
         'id'        => 'woo_breadcrumb_padding_top',
         'type'      => 'slider',
         'title'     => esc_html__('Breadcrumb Padding Top', 'zilom'),
         'default'   => 110,
         'min'       => 50,
         'max'       => 500,
         'step'      => 1,
         'display_value' => 'text',
      ),
      array(
         'id'        => 'woo_breadcrumb_padding_bottom',
         'type'      => 'slider',
         'title'     => esc_html__('Breadcrumb Padding Top', 'zilom'),
         'default'   => 100,
         'min'       => 50,
         'max'       => 500,
         'step'      => 1,
         'display_value' => 'text',
      ),
      array(
         'id'        => 'woo_breadcrumb_background_color',
         'type'      => 'color',
         'title'     => esc_html__('Background Overlay Color', 'zilom'),
         'default'   => ''
      ),
      array(
         'id'        => 'woo_breadcrumb_background_opacity',
         'type'      => 'slider',
         'title'     => esc_html__('Breadcrumb Ovelay Color Opacity', 'zilom'),
         'default'   => 50,
         'min'       => 0,
         'max'       => 100,
         'step'      => 2,
         'display_value' => 'text',
      ),
      array(
         'id'        => 'woo_breadcrumb_image',
         'type'      => 'button_set',
         'title'     => esc_html__('Breadcrumb Image', 'zilom'),
         'options'   => array( 
            1 => esc_html__('Enable', 'zilom'),
            0 => esc_html__('Disable', 'zilom')
         ),
         'default'   => 'enable'
      ),
      array(
         'id'        => 'woo_breadcrumb_background_image',
         'type'      => 'media',
         'url'       => true,
         'title'     => esc_html__('Breadcrumb Background Image', 'zilom'),
         'default'   => '',
         'required'  => array('woo_breadcrumb_image', '=', 1 )
      ),
      array(
         'id'        => 'woo_breadcrumb_text_stype',
         'type'      => 'select',
         'title'     => esc_html__('Breadcrumb Text Stype', 'zilom'),
         'options'   => 
         array(
            'text-light'     => esc_html__('Light', 'zilom'),
            'text-dark'      => esc_html__('Dark', 'zilom')
         ),
         'default' => 'text-light'
      ),
      array(
         'id'        => 'woo_breadcrumb_text_align',
         'type'      => 'select',
         'title'     => esc_html__('Breadcrumb Text Align', 'zilom'),
         'options'   => 
         array(
            'text-left'      => esc_html__('Left', 'zilom'),
            'text-center'    => esc_html__('Center', 'zilom'),
            'text-right'     => esc_html__('Right', 'zilom')
         ),
         'default' => 'text-center'
      )
   )
));

Redux::setSection( $opt_name, array(
   'icon'         => 'el-icon-shopping-cart',
   'title'        => esc_html__('Product Options', 'zilom'),
   'subsection'   => true,
   'fields'       => array(
      array(
         'id'        => 'upsell_heading_text',
         'type'      => 'text',
         'title'     => esc_html__('Upsell Heading Text', 'zilom'),
         'default'   => esc_html__('Complete the look', 'zilom')
      ),
      array(
         'id'        => 'related_heading_text',
         'type'      => 'text',
         'title'     => esc_html__('Related Heading Text', 'zilom'),
         'default'   => esc_html__('Related Products', 'zilom')
      )
   )
));