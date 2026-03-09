<?php
/**
 * Plugin Name: WP Duplicate Page
 * Plugin URI: https://ninjateam.org
 * Description: Duplicate Posts, Pages and Custom Post Types.
 * Version: 1.8.1
 * Author: NinjaTeam
 * Author URI: https://ninjateam.org
 * Text Domain: wp-duplicate-page
 * Domain Path: /i18n/languages/
 *
 * @package NjtDuplicate
 */

namespace NjtDuplicate;

defined( 'ABSPATH' ) || exit;

define( 'NJT_DUPLICATE_VERSION', '1.8.1' );
define( 'NJT_DUPLICATE_DOMAIN', 'wp-duplicate-page' );

define( 'NJT_DUPLICATE_PLUGIN_DIR', __DIR__ );
define( 'NJT_DUPLICATE_PLUGIN_NAME', plugin_basename( __FILE__ ) );
define( 'NJT_DUPLICATE_PLUGIN_URL', plugins_url( '', __FILE__ ) );
define( 'NJT_DUPLICATE_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );

spl_autoload_register(
	function ( $class ) {
		$prefix   = __NAMESPACE__; // project-specific namespace prefix
		$base_dir = __DIR__ . '/includes'; // base directory for the namespace prefix

		$len = strlen( $prefix );
		if ( strncmp( $prefix, $class, $len ) !== 0 ) { // does the class use the namespace prefix?
			return; // no, move to the next registered auto loader
		}

		$relative_class_name = substr( $class, $len );

		// replace the namespace prefix with the base directory, replace namespace
		// separators with directory separators in the relative class name, append
		// with .php
		$file = $base_dir . str_replace( '\\', '/', $relative_class_name ) . '.php';

		if ( file_exists( $file ) ) {
			require $file;
		}
	}
);

function init() {
	I18n::loadPluginTextdomain();
	Page\Settings::getInstance();
}
add_action( 'plugins_loaded', 'NjtDuplicate\\init' );

register_activation_hook( __FILE__, array( 'NjtDuplicate\\Plugin', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'NjtDuplicate\\Plugin', 'deactivate' ) );
