<?php

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'YayMailWCSettingsColumnCrossSell' ) ) {
	class YayMailWCSettingsColumnCrossSell {
		protected static $instance = null;
		private $nonce             = '';
		public $pluginDirURL       = '';

		public function __construct() {
			$this->nonce = wp_create_nonce( 'yaymail_wc_settings_column_cross_sell' );
			$this->pluginDirURL = plugins_url( '', __FILE__ ) . '/';
		}

		public static function get_instance() {
			if ( null == self::$instance ) {
				self::$instance = new static();
				self::$instance->init();
			}
			return self::$instance;
		}



		public function init() {
			add_action( 'admin_init', function () {
				if ( ! function_exists( 'WC' ) || defined( 'YAYMAIL_VERSION' ) ) {
					return;
				}
                add_action( 'admin_footer', array( $this, 'add_script' ) );
				add_filter( 'woocommerce_email_setting_columns', array( $this, 'woocommerce_email_setting_columns' ) );
				add_action( 'woocommerce_email_setting_column_yaymail_cs', array( $this, 'woocommerce_email_setting_column_yaymail_cs' ) );
				add_action( 'wp_ajax_yaymail_wc_settings_install_activate', array( $this, 'ajax_install_activate_yaymail' ) );
			});
		}

		public function add_script(){
			if ( function_exists( 'get_current_screen' ) ) {
				$screen = get_current_screen();
				if ( ! in_array( $screen->id, array( 'woocommerce_page_wc-settings', 'woocommerce_page_wc-addons' ) ) ) {
					return;
				}
			} else {
				return;
			}
			wp_enqueue_script( 'yaymail-wc-settings-column-cross', $this->pluginDirURL . 'assets/js/cross.js', array( 'jquery' ), '1.0', true );
			wp_localize_script(
				'yaymail-wc-settings-column-cross',
				'yaymailWCColumnCross',
				array(
					'nonce'              => $this->nonce,
					'is_installed'       => (bool) $this->get_yaymail_plugin_file(),
					'yaymailUrl'         => admin_url( 'admin.php?page=yaymail-settings#/email-templates' ),
					'helpText'			 => __( 'Drag and drop to design your emails. This will install the YayMail plugin from WordPress.org', 'filebird' )					
					)
			);
			?>
			<style>
				.wc-email-settings-table-yaymail_cs .woocommerce-help-tip {color: #999;} #tiptip_holder,#tiptip_content{max-width: 220px !important;}
			</style>
			<?php
		}

		/**
		 * Returns the plugin file path (e.g. "yaymail/yaymail.php") if YayMail is
		 * installed, or false if it is not.
		 */
		private function get_yaymail_plugin_file( $reset = false ) {
			static $cache = null;
			if ( $reset ) {
				$cache = null;
			}
			if ( $cache !== null ) {
				return $cache;
			}
			if ( ! function_exists( 'get_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}
			$cache = false;
			$all_plugins = get_plugins();
			foreach ( $all_plugins as $plugin_file => $plugin_data ) {
				$text_domain = isset( $plugin_data['TextDomain'] ) ? strtolower( $plugin_data['TextDomain'] ) : '';
				if ( basename( $plugin_file ) === 'yaymail.php' && $text_domain === 'yaymail' ) {
					$cache = $plugin_file;
					break;
				}
			}
			return $cache;
		}

		public function ajax_install_activate_yaymail() {
			if ( ! function_exists( 'current_user_can' ) || ! current_user_can( 'install_plugins' ) ) {
				wp_send_json_error( array( 'message' => __( 'You do not have permission to install plugins.', 'filebird' ) ) );
			}
			check_ajax_referer( 'yaymail_wc_settings_column_cross_sell', 'nonce', true );

			$plugin_file = $this->get_yaymail_plugin_file();

			// Install if not present yet
			if ( ! $plugin_file ) {
				try {
					$this->pluginInstaller( 'yaymail' );
				} catch ( \Exception $e ) {
					wp_send_json_error( array( 'message' => $e->getMessage() ) );
				}
				// Re-detect after install (force reset cache)
				$plugin_file = $this->get_yaymail_plugin_file( true );
			}

			if ( ! $plugin_file ) {
				wp_send_json_error( array( 'message' => __( 'Could not locate YayMail plugin file after install.', 'filebird' ) ) );
			}

			// Activate
			$result = activate_plugin( $plugin_file );
			if ( is_wp_error( $result ) ) {
				wp_send_json_error( array( 'message' => $result->get_error_message() ) );
			}

			wp_send_json_success();
		}

		private function pluginInstaller( $slug ) {
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-ajax-upgrader-skin.php';
			require_once ABSPATH . 'wp-admin/includes/class-plugin-upgrader.php';

			$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => $slug,
					'fields' => array(
						'short_description' => false,
						'sections'          => false,
						'requires'          => false,
						'rating'            => false,
						'ratings'           => false,
						'downloaded'        => false,
						'last_updated'      => false,
						'added'             => false,
						'tags'              => false,
						'compatibility'     => false,
						'homepage'          => false,
						'donate_link'       => false,
					),
				)
			);

			if ( is_wp_error( $api ) ) {
				throw new \Exception( esc_html( $api->get_error_message() ) );
			}

			$skin     = new \WP_Ajax_Upgrader_Skin();
			$upgrader = new \Plugin_Upgrader( $skin );
			$result   = $upgrader->install( $api->download_link );

			if ( is_wp_error( $result ) ) {
				throw new \Exception( esc_html( $result->get_error_message() ) );
			}
		}

		public function woocommerce_email_setting_columns( $columns ) {
			$action_column = $columns['actions'];
			unset( $columns['actions'] );
			$columns['yaymail_cs'] = __( 'YayMail', 'filebird' );
			$columns['actions'] = $action_column;
			return $columns;
		}
		public function woocommerce_email_setting_column_yaymail_cs( $email ) {
			?>
			<td>
				<a href="#" class="button yaymail-wc-settings-install-yaymail"><?php esc_html_e( 'Customize this email', 'filebird' ); ?></a>
			</td>
			<?php
		}
	}
}

YayMailWCSettingsColumnCrossSell::get_instance();
