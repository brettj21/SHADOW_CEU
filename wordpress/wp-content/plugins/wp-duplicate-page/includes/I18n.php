<?php
namespace NjtDuplicate;

defined( 'ABSPATH' ) || exit;
/**
 * I18n Logic
 */
class I18n {
	public static function loadPluginTextdomain() {
		if ( function_exists( 'determine_locale' ) ) {
			$locale = determine_locale();
		} else {
			$locale = is_admin() ? get_user_locale() : get_locale();
		}
		unload_textdomain( 'wp-duplicate-page' );
		load_textdomain( 'wp-duplicate-page', NJT_DUPLICATE_PLUGIN_PATH . '/i18n/languages/' . $locale . '.mo' );
		load_plugin_textdomain( 'wp-duplicate-page', false, NJT_DUPLICATE_PLUGIN_PATH . '/i18n/languages/' );
	}
}
