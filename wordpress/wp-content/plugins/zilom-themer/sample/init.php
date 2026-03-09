<?php
function zilom_themer_path_demo_content(){
	return (__DIR__.'/demo-data/');
}
add_filter('wbc_importer_dir_path', 'zilom_themer_path_demo_content');

//Way to set menu, import revolution slider, and set home page.
function zilom_themer_import_sample( $demo_active_import , $demo_directory_path ) {
	reset( $demo_active_import );
	$current_key = key( $demo_active_import );

	if ( class_exists( 'RevSlider' ) ) {
		$wbc_sliders_array = array( 'slider-1.zip', 'slider-2.zip' );
		$slider = new RevSlider();
		foreach ($wbc_sliders_array as $s) {
			if ( file_exists( zilom_themer_path_demo_content() . 'main/'. $s ) ) {
				$slider->importSliderFromPost( true, true, zilom_themer_path_demo_content().'main/'.$s );
			}
		}
	}

	//Setting Menus
	$wbc_menu_array = array( 'main' );
	if ( isset( $demo_active_import[$current_key]['directory'] ) && !empty( $demo_active_import[$current_key]['directory'] ) && in_array( $demo_active_import[$current_key]['directory'], $wbc_menu_array ) ) {
		$top_menu = get_term_by( 'name', 'Main Menu', 'nav_menu' );
		if ( isset( $top_menu->term_id ) ) {
			set_theme_mod( 'nav_menu_locations', array(
					'primary' => $top_menu->term_id
				)
			);
		}
	}

	//Set HomePage

	$wbc_home_pages = array(
		'main' => 'Home 1'
	);
	if ( isset( $demo_active_import[$current_key]['directory'] ) && !empty( $demo_active_import[$current_key]['directory'] ) && array_key_exists( $demo_active_import[$current_key]['directory'], $wbc_home_pages ) ) {
		$page = get_page_by_title( $wbc_home_pages[$demo_active_import[$current_key]['directory']] );
		if ( isset( $page->ID ) ) {
			update_option( 'page_on_front', $page->ID );
			update_option( 'show_on_front', 'page' );
		}
	}
	 update_option( 'elementor_experiment-e_dom_optimization', 'inactive' );
    update_option( 'elementor_experiment-a11y_improvements', 'inactive' );
    update_option( 'elementor_editor_break_lines', '1' );
    update_option( 'elementor_unfiltered_files_upload', '1' );
    update_option( 'elementor_experiment-container', 'inactive' );
    update_option( 'elementor_experiment-e_optimized_assets_loading', 'inactive' );
    update_option( 'elementor_experiment-additional_custom_breakpoints', 'inactive' );
    update_option( 'elementor_experiment-e_swiper_latest', 'inactive' );
    update_option( 'elementor_experiment-e_optimized_css_loading', 'inactive' );
    update_option( 'elementor_experiment-e_font_icon_svg', 'inactive' );
}

add_action( 'wbc_importer_after_content_import', 'zilom_themer_import_sample', 10, 2 );
