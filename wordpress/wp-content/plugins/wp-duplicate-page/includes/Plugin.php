<?php
namespace NjtDuplicate;

defined( 'ABSPATH' ) || exit;
/**
 * Plugin activate/deactivate logic
 */
class Plugin {
	protected static $instance = null;

	public static function getInstance() {
		if ( null == self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {
	}

	/** Plugin activated hook */
	public static function activate() {
		// Get default roles
			$defaultRoles = array(
				3 => 'editor',
				8 => 'administrator',
			);

			// Cycle all roles and assign capability if its level >= duplicate_post_copy_user_level
			foreach ( $defaultRoles as $level => $name ) {
				$role = get_role( $name );
				if ( ! empty( $role ) ) {
					$role->add_cap( 'njt_duplicate_page' );
				}
			}
	}

	/** Plugin deactivate hook */
	public static function deactivate() {
	}
}
