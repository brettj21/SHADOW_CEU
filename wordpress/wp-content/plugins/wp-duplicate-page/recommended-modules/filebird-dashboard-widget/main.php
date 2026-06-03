<?php
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'FBDashboardWidgetMain' ) ) {
	class FBDashboardWidgetMain {

		public $plugin_prefix           = '';
		public $plugin_install_searching = '';
		public $plugin_dir_url           = '';
		public $plugin_folder_slug       = '';

		protected static $instance = null;

		public function __construct() {
			$this->plugin_prefix           = 'filebird';
			$this->plugin_install_searching = 'filebird+ninjateam';
			$this->plugin_dir_url           = plugins_url( '', __FILE__ ) . '/';
			$this->plugin_folder_slug       = array( 'filebird/filebird.php', 'filebird-pro/filebird.php' );
		}

		public static function get_instance() {
			if ( null == self::$instance ) {
				self::$instance = new static();
				self::$instance->do_hooks();
			}
			return self::$instance;
		}

		public function is_plugin_exist() {
			if ( defined( 'yay_FILEBIRD_VERSION' ) || defined( 'NJFB_VERSION' ) || defined( 'CATF_PREFIX' ) ) {
				return true;
			}
			if ( ! function_exists( 'get_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}
			$all_plugins = get_plugins();

			if ( is_array( $this->plugin_folder_slug ) ) {
				foreach ( $this->plugin_folder_slug as $slug ) {
					if ( array_key_exists( $slug, $all_plugins ) ) {
						return true;
					}
				}
			} elseif ( array_key_exists( $this->plugin_folder_slug, $all_plugins ) ) {
					return true;
			}

			return false;
		}

		public function do_hooks() {
			add_action(
				'init',
				function () {
					if ( ! $this->is_plugin_exist() ) {
						add_action( 'wp_dashboard_setup', array( $this, 'add_dashboard_widget' ) );
						add_action( 'admin_footer', array( $this, 'add_global_script_styles' ) );
						add_action( "wp_ajax_{$this->plugin_prefix}_dashboard_widget_install", array( $this, 'ajax_install_plugin' ) );
					}
				}
			);
		}

		public function add_dashboard_widget() {
			wp_add_dashboard_widget( 'dashboard_widget', 'Recommended', array( $this, 'add_dashboard_widget_content' ) );
		}

		public function add_dashboard_widget_content() {
			?>
			<style>
				#dashboard-widgets .yay-postbox-title-wrap {
					margin: 15px 0;
				}
				#dashboard-widgets .yay-postbox-title-wrap>h3 {
					font-size: 14px;
					font-weight: 600;
					padding: 0;
					margin: 0 0 10px;
					border: 0;
				}
				#dashboard-widgets .yay-postbox-title-wrap>span {
						font-size: 14px;
				opacity: .9;
					}
				#dashboard-widgets .fbv-widget-img-wrap {
				padding: 10px 0 20px;
				}
				#dashboard-widgets .fbv-install-button .dashicons {
					line-height: 1 !important;
				}
				.fbv-go-pro-button{
					font-weight: bold;
					color: #2c7cb9;
				}
			</style>
			<div class="yay-wrap-postbox">
				<div class="yay-postbox-title-wrap">
				<h3>Your WordPress media library is messy?</h3>
				<span>Start using FileBird to organize your files into folders by drag and drop.</span>
				</div>
				<div class="fbv-widget-img-wrap">
				<img src="https://ps.w.org/filebird/assets/screenshot-2.gif" alt="screenshot_demo">
				</div>
				<div class="fbv-widget-buttons">
				<div><a class="button button-primary fbv-install-button" href="javascript:;"><i class="dashicons dashicons-wordpress-alt"></i>Install for free</a></div>
				<div><a class="fbv-go-pro-button" href="https://1.envato.market/FileBird-Pro-WP" target="_blank" rel="noopener noreferrer">Go Pro</a></div>
				</div>
			</div>
			<?php
		}

		public function add_global_script_styles() {
			if ( function_exists( 'current_user_can' ) && current_user_can( 'install_plugins' ) ) {
				$nonce = wp_create_nonce( 'install-plugin_' . $this->plugin_prefix );
				$url   = self_admin_url( 'update.php?action=install-plugin&plugin=' . $this->plugin_prefix . '&_wpnonce=' . $nonce );
			} else {
				$url = admin_url( "plugin-install.php?s={$this->plugin_install_searching}&tab=search&type=term" );
			}

			if ( function_exists( 'get_current_screen' ) ) {
				$screen = get_current_screen();
				if ( $screen->id !== 'dashboard' )  {
					return;
				}
			} else {
				return;
			}

			wp_register_script( "{$this->plugin_prefix}-dashboard-widget", $this->plugin_dir_url . 'assets/js/script.js', array( 'jquery' ), '1.0', true );
			wp_localize_script(
				"{$this->plugin_prefix}-dashboard-widget",
				"FBDashboardWidget",
				array(
					'nonce'                => wp_create_nonce( "{$this->plugin_prefix}_dashboard_widget_nonce" ),
					'media_url'            => admin_url( 'upload.php' ),
					'filebird_install_url' => $url,
				)
			);
			wp_enqueue_script( "{$this->plugin_prefix}-dashboard-widget" );
			?>
			<style>
				@-webkit-keyframes rotate360{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate360{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes dotLoad{0%{opacity:1}to{opacity:.1}}@keyframes dotLoad{0%{opacity:1}to{opacity:.1}}.fbv-widget-img-wrap{padding:20px}.fbv-widget-img-wrap img{max-width:100%}.fbv-widget-buttons{padding:5px 20px 25px;text-align:center}.fbv-widget-buttons .button-primary{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-weight:500;height:42px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:10px;max-width:100%;min-width:162px;padding:0 20px}.fbv-widget-buttons .button-primary,.fbv-widget-buttons .button-primary:active,.fbv-widget-buttons .button-primary:focus,.fbv-widget-buttons .button-primary:hover{-webkit-box-shadow:none;box-shadow:none;outline:none}.fbv-widget-buttons .button-primary i{margin-right:8px}.fbv-widget-buttons .button-primary .dashicons-saved{background-color:#fff;color:#0085ba;font-size:18px;height:18px;width:18px;border-radius:18px}.fbv-widget-buttons .button-primary.fbv_installing,.fbv-widget-buttons .button-primary.fbv_installing:active,.fbv-widget-buttons .button-primary.fbv_installing:focus,.fbv-widget-buttons .button-primary.fbv_installing:hover{background-color:#e4f7ff;border-color:#e4f7ff;color:#0085ba;cursor:not-allowed}.fbv-widget-buttons .button-primary.fbv_installing i{-webkit-animation:rotate360 1s linear infinite both;animation:rotate360 1s linear infinite both}.text-dots:after,.text-dots:before{content:"."}.text-dots:after,.text-dots:before,.text-dots span{-webkit-animation:dotLoad 1s linear 1s infinite alternate;animation:dotLoad 1s linear 1s infinite alternate;opacity:.1}.text-dots:before{-webkit-animation-delay:.5s;animation-delay:.5s}.text-dots:after{-webkit-animation-delay:1.5s;animation-delay:1.5s}
			</style>
			<?php
		}

		public function ajax_install_plugin() {
			if ( ! function_exists( 'current_user_can' ) || ! current_user_can( 'install_plugins' ) ) {
				wp_send_json_error( array( 'message' => 'Current user cannot install this plugin' ) );
			}
			check_ajax_referer( "{$this->plugin_prefix}_dashboard_widget_nonce", 'nonce', true );

			$installed = $this->plugin_installer( 'filebird' );
			if ( $installed === false ) {
				wp_send_json_error( array( 'message' => $installed ) );
			}
			try {
				$result = activate_plugin( 'filebird/filebird.php' );

				if ( is_wp_error( $result ) ) {
					throw new \Exception( $result->get_error_message() );
				}
				wp_send_json_success();
			} catch ( \Exception $e ) {
				throw new \Exception( esc_html( $e->getMessage() ) );
			}
		}

		public function plugin_installer( $slug ) {
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-ajax-upgrader-skin.php';
			require_once ABSPATH . 'wp-admin/includes/class-plugin-upgrader.php';

			$api      = plugins_api(
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
			$skin     = new \WP_Ajax_Upgrader_Skin();
			$upgrader = new \Plugin_Upgrader( $skin );
			try {
				$result = $upgrader->install( $api->download_link );

				if ( is_wp_error( $result ) ) {
					throw new \Exception( $result->get_error_message() );
				}

				return true;
			} catch ( \Exception $e ) {
				throw new \Exception( esc_html( $e->getMessage() ) );
			}
		}
	}
}

FBDashboardWidgetMain::get_instance();
