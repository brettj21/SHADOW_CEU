<?php
Redux::setSection($opt_name, array(
   'icon'   => 'el-icon-th-list',
   'title'  => esc_html__('Page Options', 'zilom'),
   'fields' => array(
      array(
         'id'        => 'default_show_page_heading',
         'type'      => 'button_set',
         'title'     => esc_html__('Default Show Page Heading', 'zilom'),
         'subtitle'  => esc_html__('Choose the default state for the page heading, shown/hidden.', 'zilom'),
         'options'   => array(
            '1' => esc_html__('On', 'zilom'),
            '0' => esc_html__('Off', 'zilom')
         ),
         'default'   => '1'
      ),
      array(
         'id'        => 'default_sidebar_config',
         'type'      => 'select',
         'title'     => esc_html__('Default Page Sidebar Config', 'zilom'),
         'subtitle'  => esc_html__('Choose the default sidebar config for pages', 'zilom'),
         'options'   => array(
            'no-sidebars'     => esc_html__('No Sidebars', 'zilom'),
            'left-sidebar'    => esc_html__('Left Sidebar', 'zilom'),
            'right-sidebar'   => esc_html__('Right Sidebar', 'zilom')
         ),
         'default' => 'no-sidebars'
      ),
      array(
         'id'        => 'default_left_sidebar',
         'type'      => 'select',
         'title'     => esc_html__('Default Page Left Sidebar', 'zilom'),
         'subtitle'  => esc_html__('Choose the default left sidebar for pages', 'zilom'),
         'data'      => 'sidebars',
         'default'   => 'sidebar-1'
      ),
      array(
         'id'        => 'default_right_sidebar',
         'type'      => 'select',
         'title'     => esc_html__('Default Page Right Sidebar', 'zilom'),
         'subtitle'  => esc_html__('Choose the default right sidebar for pages', 'zilom'),
         'data'      => 'sidebars',
         'default'   => 'sidebar-1'
      ),
       array(
         'id'     => 'register_page_info',
         'type'   => 'info',
         'icon'   => true,
         'raw'    => '<h3 class="margin-bottom-0">' . esc_html__('Register Page Settings', 'tevily') . '</h3>',
      ),
      array(
         'id'        => 'register_image',
         'type'      => 'media',
         'url'       => true,
         'title'     => esc_html__('Register Image', 'tevily'),
         'default'   => '',
      ),
   )
));  