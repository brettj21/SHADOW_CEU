<?php
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'FBPluginsPageNotification' ) ) {
	class FBPluginsPageNotification {

		public $plugin_prefix            = '';
		public $plugin_install_searching = '';
		public $plugin_dir_url           = '';
		public $plugin_folder_slug       = '';
		public $display_after            = 24; // 24 hour

		protected static $instance = null;

		public function __construct( $display_after = 24 ) {
			$this->plugin_prefix           = 'filebird';
			$this->plugin_install_searching = 'filebird+ninjateam';
			$this->plugin_dir_url           = plugins_url( '', __FILE__ ) . '/';
			$this->plugin_folder_slug       = array( 'filebird/filebird.php', 'filebird-pro/filebird.php' );
			$this->display_after            = $display_after;
		}

		public static function get_instance( $display_after = 24 ) {
			if ( null == self::$instance ) {
				self::$instance = new static( $display_after );
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
					 	$notification_option = get_option( "{$this->plugin_prefix}_plugins_page_notification" );
						if(false === $notification_option){
							$this->need_update_option();
							return;
						}
						if ( time() >= $notification_option ) {
							add_action( 'admin_notices', array( $this, 'add_notification' ) );
							add_action( "wp_ajax_{$this->plugin_prefix}_plugins_page_notification", array( $this, 'ajax_set_notification' ) );
						}

						add_action( 'admin_footer', array( $this, 'add_global_script_styles' ) );
						
						add_action( "wp_ajax_{$this->plugin_prefix}_plugins_page_notification_install", array( $this, 'ajax_install_plugin' ) );
						add_action( "wp_ajax_{$this->plugin_prefix}_plugins_page_notification_hide", array( $this, 'ajax_hide_notification' ) );
					}
				}
			);
		}

		public function need_update_option() {
			$time = time() + ($this->display_after * 60 * 60);
			update_option( "{$this->plugin_prefix}_plugins_page_notification", $time );
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
				if ( $screen->id !== 'plugins' ) {
					return;
				}
			} else {
				return;
			}

			wp_register_script( "{$this->plugin_prefix}_plugins_page_notification", $this->plugin_dir_url . 'assets/js/script.js', array( 'jquery' ), '1.0', true );
			wp_localize_script(
				"{$this->plugin_prefix}_plugins_page_notification",
				'FBPluginsPageNotification',
				array(
					'nonce'                => wp_create_nonce( "{$this->plugin_prefix}_plugins_page_notification_nonce" ),
					'media_url'            => admin_url( 'upload.php' ),
					'filebird_install_url' => $url,
				)
			);
			wp_enqueue_script( "{$this->plugin_prefix}_plugins_page_notification" );
			?>
			<style>
				.fbv-noti-install-failed{margin-bottom:10px;margin-top:5px}.fbv-noti-install-failed a{font-weight:600}.fbv-label-error{color:#e90808;margin-bottom:2px}.text-dots:after,.text-dots:before{content:"."}.text-dots:after,.text-dots:before,.text-dots span{-webkit-animation:dotLoad 1s linear 1s infinite alternate;animation:dotLoad 1s linear 1s infinite alternate;opacity:.1}.text-dots:before{-webkit-animation-delay:.5s;animation-delay:.5s}.text-dots:after{-webkit-animation-delay:1.5s;animation-delay:1.5s}
			</style>
			<?php
		}

		public function add_notification() {
			if ( function_exists( 'get_current_screen' ) ) {
				$screen = get_current_screen();
				if ( ! in_array( $screen->id, array( 'plugins' ) ) ) {
					return;
				}
			} else {
				return;
			}

			if ( function_exists( 'current_user_can' ) && current_user_can( 'install_plugins' ) ) {
				$nonce = wp_create_nonce( 'install-plugin_' . $this->plugin_prefix );
				$url   = self_admin_url( 'update.php?action=install-plugin&plugin=' . $this->plugin_prefix . '&_wpnonce=' . $nonce );
			} else {
				$url = admin_url( "plugin-install.php?s={$this->plugin_install_searching}&tab=search&type=term" );
			}
			?>
			<div class="notice notice-info is-dismissible" id="yay-fb-banner-wrapper">
				<div class="yay-d-row yay-justify-between">
					<div class="yay-fb-banner-info">
					<h4 class="yay-fb-banner-title">Recommend</h4>
					<p>To easily manage your files in WordPress media library with folders, please try FileBird plugin.</p>
					<div class="yay-btn-row">
						<a class="button button-primary fbv-install-button yay-fb-banner-install-button" rel="noopener noreferrer" href="javascript:;">
							<strong>Free install</strong>
						</a>
						<a class="button button-secondary" target="_blank" rel="noopener noreferrer" href="https://1.envato.market/FileBird-Premium-WP">
							<strong>Go FileBird Pro</strong>
						</a>
						<a class="fbv-nothanks-link fbv-nothanks-notification" href="javascript:;">
							No, thanks
						</a>
					</div>
					</div>
					<img class="yay-fb-banner-img" src="<?php echo esc_url( $this->plugin_dir_url . 'assets/img/FB_Wireframe.png' ); ?>" alt="filebird">
				</div>
			</div>
			<style>
				.yay-d-row{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.yay-justify-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.yay-fb-banner-info{padding:15px 0 30px}@media screen and (max-width:782px){.yay-fb-banner-info{padding:0}}.yay-fb-banner-info p{margin-bottom:25px}.yay-fb-banner-title{font-size:16px;margin:0 0 15px}.yay-fb-banner-img{max-width:252px}.yay-btn-row{display: flex;align-items: center;}.yay-btn-row>.button{margin-right:10px}
			</style>
			<?php
		}

		public function ajax_install_plugin() {
			if ( ! function_exists( 'current_user_can' ) || ! current_user_can( 'install_plugins' ) ) {
				wp_send_json_error( array( 'message' => 'Current user cannot install this plugin' ) );
			}
			check_ajax_referer( "{$this->plugin_prefix}_plugins_page_notification_nonce", 'nonce', true );

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

		public function ajax_set_notification() {
			check_ajax_referer( "{$this->plugin_prefix}_plugins_page_notification_nonce", 'nonce', true );
			//Save after 30 days
			update_option( "{$this->plugin_prefix}_plugins_page_notification", time() + ( 30 * 60 * 60 * 24 ) );
			wp_send_json_success();
		}

		public function ajax_hide_notification() {
			check_ajax_referer( "{$this->plugin_prefix}_plugins_page_notification_nonce", 'nonce', true );
			$days = isset( $_POST['days'] ) ? (int) sanitize_text_field( $_POST['days'] ) : 30;
			$time = time() + ( $days * 60 * 60 * 24 ); // hide X days

			update_option( "{$this->plugin_prefix}_plugins_page_notification", $time );
			wp_send_json_success();
		}
	}
}
