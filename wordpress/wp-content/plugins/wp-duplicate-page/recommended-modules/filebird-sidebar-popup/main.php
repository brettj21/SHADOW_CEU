<?php
defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'FBSidebarPopup' ) ) {
	class FBSidebarPopup {

		public $plugin_prefix           = '';
		public $plugin_install_searching = '';
		public $plugin_dir_url           = '';
		public $plugin_folder_slug       = '';
		public $display_after            = 24; // 1 hour

		public $media_page = false;
		public $post_page  = false;
		public $product_page = false;

		public const MINIMUM_ITEMS_TO_SHOW_CROSS_SALE = 16;

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
				self::$instance = new static($display_after);
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

		private function get_sidebar_screens() {
			$screens = array( 'upload' );
			$custom_post_types = get_post_types( array( 'public' => true ) );
			foreach ( $custom_post_types as $post_type ) {
				$screens[] = "edit-$post_type";
			}
			return $screens;
		}

		private function get_list_item_count( $screen_id ) {
			switch ( $screen_id ) {
				case 'upload':
					return array_sum( (array) wp_count_attachments() );
				case 'edit-post':
					return $this->count_posts_by_type( 'post' );
				case 'edit-page':
					return $this->count_posts_by_type( 'page' );
				case 'edit-product':
					return $this->count_posts_by_type( 'product' );
				default:
					$post_type = str_replace( 'edit-', '', $screen_id );
					return $this->count_posts_by_type( $post_type );
			}
		}

		private function count_posts_by_type( $post_type ) {
			$counts = wp_count_posts( $post_type );
			$total  = 0;
			foreach ( (array) $counts as $status => $count ) {
				if ( ! in_array( $status, array( 'trash', 'auto-draft' ), true ) ) {
					$total += (int) $count;
				}
			}
			return $total;
		}

		public function do_hooks() {
			add_action(
				'init',
				function () {
					if ( ! $this->is_plugin_exist() ) {
						$this->media_page        = get_option( "{$this->plugin_prefix}_sidebar_popup_media_page" ); //Save the next time notification will appear
						$this->post_page         = get_option( "{$this->plugin_prefix}_sidebar_post_page" );
						$this->product_page      = get_option( "{$this->plugin_prefix}_sidebar_product_page" );
						$this->need_update_option( $this->media_page, $this->post_page, $this->product_page );
						
						add_action( 'admin_footer', array( $this, 'add_global_script_styles' ) );
						add_action( 'admin_footer', array( $this, 'add_media_sidebar_html' ) );
						add_action( "wp_ajax_{$this->plugin_prefix}_sidebar_popup_install", array( $this, 'ajax_install_plugin' ) );
						add_action( "wp_ajax_{$this->plugin_prefix}_sidebar_popup_hide", array( $this, 'ajax_hide' ) );
					}
				}
			);
		}

		public function need_update_option( $media_page, $post_page, $product_page ) {
			$time = time() +($this->display_after * 60 * 60);
			if($media_page == false) {
				update_option( "{$this->plugin_prefix}_sidebar_popup_media_page", $time );
			}
			if($post_page == false) {
				update_option( "{$this->plugin_prefix}_sidebar_post_page", $time );
			}
			if($product_page == false) {
				update_option( "{$this->plugin_prefix}_sidebar_product_page", $time );
			}
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
				if ( ! in_array( $screen->id, $this->get_sidebar_screens() ) ) {
					return;
				}
			} else {
				return;
			}

			$show_popup = false;

			if ( $screen->id === 'upload' && ( false === $this->media_page || time() >= $this->media_page) && $this->get_list_item_count( $screen->id ) >= self::MINIMUM_ITEMS_TO_SHOW_CROSS_SALE )  {
				$show_popup = true;
			}

			wp_register_script( "{$this->plugin_prefix}-sidebar-popup", $this->plugin_dir_url . 'assets/js/script.js', array( 'jquery' ), '1.0', true );
			wp_localize_script(
				"{$this->plugin_prefix}-sidebar-popup",
				'FBSidebarPopup',
				array(
					'nonce'                => wp_create_nonce( "{$this->plugin_prefix}_sidebar_popup_nonce" ),
					'media_url'            => admin_url( 'upload.php' ),
					'filebird_install_url' => $url,
					'show_popup'           => $show_popup,
				)
			);
			wp_enqueue_script( "{$this->plugin_prefix}-sidebar-popup" );
			?>
			<style>
				@-webkit-keyframes rotate360{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate360{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes dotLoad{0%{opacity:1}to{opacity:.1}}@keyframes dotLoad{0%{opacity:1}to{opacity:.1}}.fbv-icon{background-color:transparent;background-position:50%;background-repeat:no-repeat;background-size:contain;display:inline-block;height:1em;width:1em}.fbv-i-folder{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2h-8l-2-2z'/%3E%3C/svg%3E")}.fbv-popup-wrap{bottom:45px;position:fixed;right:30px;-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease;-webkit-transition-delay:.5s;-o-transition-delay:.5s;transition-delay:.5s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:100000}.fbv-popup-wrap.fbv_permanent_hide{opacity:0;pointer-events:none}.fbv-link{color:#a1a1a1;font-size:12px;text-decoration:none}.fbv-link:active,.fbv-link:focus,.fbv-link:hover{-webkit-box-shadow:none;box-shadow:none;color:#a1a1a1;opacity:.8;outline:none}.fbv-popup{cursor:pointer;position:relative;z-index:100}.fbv-icon-wrap{background-color:#0085ba;-webkit-box-shadow:0 6px 10px 2px rgba(0,0,0,.1);box-shadow:0 6px 10px 2px rgba(0,0,0,.1);line-height:1;position:relative;height:56px;width:56px;border-radius:56px}.fbv-icon-wrap i{color:#fff;font-size:32px;left:50%;margin-left:-16px;margin-top:-16px;position:absolute;top:50%;-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease}.fbv-popup-open .fbv-icon-wrap i.fbv-icon{opacity:0;-webkit-transform:rotate(1turn);-ms-transform:rotate(1turn);transform:rotate(1turn)}.fbv-icon-wrap i.dashicons{opacity:0;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);height:auto;width:auto}.fbv-popup-open .fbv-icon-wrap i.dashicons{opacity:1;-webkit-transform:rotate(1turn);-ms-transform:rotate(1turn);transform:rotate(1turn)}.fbv-sub{background-color:#fff;border-radius:3px;-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.1);box-shadow:0 2px 10px 0 rgba(0,0,0,.1);color:#0085ba;font-size:14px;font-weight:500;margin:-13px 10px 0 0;padding:4px 12px;position:absolute;right:100%;top:50%;-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease;white-space:nowrap}.fbv-popup-open .fbv-sub{opacity:0;pointer-events:none;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px);visibility:hidden}.fbv-window{background-color:#fff;border-radius:3px;bottom:100%;-webkit-box-shadow:0 10px 10px 4px rgba(0,0,0,.04);box-shadow:0 10px 10px 4px rgba(0,0,0,.04);margin-bottom:15px;opacity:0;pointer-events:none;position:absolute;right:-5px;-webkit-transform:translateY(50px);-ms-transform:translateY(50px);transform:translateY(50px);-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease;visibility:hidden;width:360px;z-index:99}.fbv-window-mess{background-color:#0085ba;border-radius:3px 3px 0 0;color:#fff;padding:15px 20px}.fbv-window-mess h3{color:#fff;font-size:14px;margin:0 0 10px}.fbv-window-mess span{font-size:14px;line-height:1.5;opacity:.9}.fbv-window-img-wrap{padding:20px}.fbv-window-img-wrap img{max-width:100%}.fbv-window-btn{padding:5px 20px 25px;text-align:center}.fbv-window-btn .button-primary{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-weight:500;height:42px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:10px;max-width:100%;min-width:162px;padding:0 20px}.fbv-window-btn .button-primary,.fbv-window-btn .button-primary:active,.fbv-window-btn .button-primary:focus,.fbv-window-btn .button-primary:hover{-webkit-box-shadow:none;box-shadow:none;outline:none}.fbv-window-btn .button-primary i{margin-right:8px}.fbv-window-btn .button-primary .dashicons-saved, #fb-sidebar-widget i.dashicons-saved{background-color:#fff;color:#0085ba;font-size:18px;height:18px;width:18px;border-radius:18px}.fbv-window-btn .button-primary.fbv_installing,.fbv-window-btn .button-primary.fbv_installing:active,.fbv-window-btn .button-primary.fbv_installing:focus,.fbv-window-btn .button-primary.fbv_installing:hover{background-color:#e4f7ff;border-color:#e4f7ff;color:#0085ba;cursor:not-allowed}.button-primary.fbv_installing i {-webkit-animation:rotate360 1s linear infinite both;animation:rotate360 1s linear infinite both}.fbv-popup-open .fbv-window{opacity:1;pointer-events:all;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);visibility:visible}.fbv-label-error{color:#e90808;margin-bottom:2px}.text-dots:after,.text-dots:before{content:"."}.text-dots:after,.text-dots:before,.text-dots span{-webkit-animation:dotLoad 1s linear 1s infinite alternate;animation:dotLoad 1s linear 1s infinite alternate;opacity:.1}.text-dots:before{-webkit-animation-delay:.5s;animation-delay:.5s}.text-dots:after{-webkit-animation-delay:1.5s;animation-delay:1.5s}
				/* Media library sidebar */
				#wpbody.yay-fb-has-sidebar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}
				#wpbody #wpbody-content .wrap.yay-fb-has-sidebar{display:-webkit-box;display:-ms-flexbox;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}
				#wpbody.yay-fb-has-sidebar>.wrap{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:0}
				#wpbody.yay-fb-has-sidebar #wpbody-content, #wpbody-content .wrap.yay-fb-has-sidebar .products-content{padding-left:16px}
				#fb-sidebar-widget{position:relative;padding: 16px 16px 0 0;width:240px;min-width:240px;-ms-flex-negative:0;flex-shrink:0;border-right:1px solid #dcdcde;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}
				#fb-sidebar-widget .yay-fb-preview-img{-ms-flex-negative:0;flex-shrink:0}
				#fb-sidebar-widget .yay-fb-preview-img img{width:100%;display:block;border-radius: 4px;}
				#fb-sidebar-widget .yay-fb-badge-body{padding:16px 0 20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:12px}
				#fb-sidebar-widget .yay-fb-badge{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:7px;background:#fff;border:1px solid #e8e8e8;border-radius:6px;padding:4px 8px 4px 4px;-webkit-box-shadow:0px 1px 2px 0px #0000000D;box-shadow:0px 1px 2px 0px #0000000D;font-size:12px;font-weight:600;color:#122940;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}
				#fb-sidebar-widget .yay-fb-badge span{ line-height: 1; }
				#fb-sidebar-widget .yay-fb-badge-text{font-size:14px;font-weight:600;line-height:1.45;color:#122940;margin:0}
				#fb-sidebar-widget .yay-fb-install-btn {text-align: center;font-size: 13px;font-weight: 600;}
				#fb-sidebar-widget .fbv-install-button { width: 100%;text-align: center; display: flex;align-items: center;justify-content: center; gap: 6px;}
				#fb-sidebar-widget .fbv-install-button .dashicons { line-height: 1 !important; }
				#fb-sidebar-widget .yay-fb-close-btn{position:absolute;top:20px;right:20px;width:20px;height:18px;border:none;border-radius:4px;background:#fff;color:#1d2427;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:2;-webkit-transition:background .15s,border-color .15s;-o-transition:background .15s,border-color .15s;transition:background .15s,border-color .15s}
				#fb-sidebar-widget .yay-fb-close-btn:hover{background:#00000080;color: #fff;box-shadow:0 1px 5px rgba(0,0,0,.2);-webkit-box-shadow:0 1px 5px rgba(0,0,0,.2);-moz-box-shadow:0 1px 5px rgba(0,0,0,.2);}
				#fb-sidebar-widget .yay-fb-close-btn:hover svg{fill: #fff; stroke: #fff;}
				#yay-fb-confirm-modal{position:fixed;top:0;left:0;right:0;bottom:0;z-index:100001}
				.yay-fb-confirm-dialog{background:#fff;border-radius:8px;padding:20px;width:280px;position:absolute;-webkit-box-shadow:0px 5px 15px 0px #0000001A;box-shadow: 0px 5px 15px 0px #0000001A;}
				.yay-fb-confirm-dialog::before{content:'';position:absolute;left:-9px;top:16px;border-top:9px solid transparent;border-bottom:9px solid transparent;border-right:9px solid rgba(0,0,0,.1)}
				.yay-fb-confirm-dialog::after{content:'';position:absolute;left:-8px;top:17px;border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #fff}
				.yay-fb-confirm-x{position:absolute;top:10px;right:12px;background:none;border:none;font-size:22px;cursor:pointer;color:#666;line-height:1;padding:0;width:28px;height:28px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}
				.yay-fb-confirm-x:hover{color:#000}
				.yay-fb-confirm-dialog h3{font-size:16px;font-weight:600;margin:0 0 8px;color:#1d2427}
				.yay-fb-confirm-dialog>p{margin:0 0 14px;color:#444;font-size:14px;line-height:1.5}
				.yay-fb-confirm-check{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;margin-bottom:18px;font-size:14px;cursor:pointer;color:#1d2327}
				.yay-fb-confirm-check input{margin:0;cursor:pointer}
				.yay-fb-confirm-actions{display:-webkit-box;display:-ms-flexbox;display:flex;justify-content: flex-end;gap:8px;background:#F7F8F9;margin:16px -20px -20px;padding:14px 20px;border-radius:0 0 8px 8px}
				.fbv-window .fbv-install-button .dashicons{line-height: 1 !important;}	
			</style>
			<?php
		}

		public function add_media_sidebar_html() {
			if ( ! function_exists( 'get_current_screen' ) ) {
				return;
			}
			$screen = get_current_screen();
			
			if ( ! $screen || ! in_array( $screen->id, $this->get_sidebar_screens() ) ) {
				return;
			}

			$show_sidebar = false;

			switch ( $screen->id ) {
				case 'upload':
					if ( false === $this->media_page || time() >= $this->media_page ) {
						$show_sidebar = true;
					}
					$type = 'media';
					$img_url = esc_js( $this->plugin_dir_url . 'assets/img/fb-media-sidebar.jpg' );
					$icon_text = 'Your media files is messy? Organize into folders with ease.';
					break;
				case 'edit-post':
				case 'edit-page':
					if ( false === $this->post_page || time() >= $this->post_page ) {
						$show_sidebar = true;
					}
					$type = 'post';
					$img_url = esc_js( $this->plugin_dir_url . 'assets/img/fb-post-sidebar.jpg' );
					$icon_text = 'Organize your posts into folders with ease.';
					break;
				case 'edit-product':
					if ( false === $this->product_page || time() >= $this->product_page ) {
						$show_sidebar = true;
					}
					$type = 'product';
					$img_url = esc_js( $this->plugin_dir_url . 'assets/img/fb-products-sidebar.jpg' );
					$icon_text = 'Organize your products into folders effortlessly.';
					break;
				default:
					if ( false === $this->post_page || time() >= $this->post_page ) {
						$show_sidebar = true;
					}
					$type = 'post';
					$img_url = esc_js( $this->plugin_dir_url . 'assets/img/fb-post-sidebar.jpg' );
					$icon_text = 'Organize your posts into folders with ease.';
					break;
			}

			if ( ! $show_sidebar ) {
				return;
			}

			if ( $this->get_list_item_count( $screen->id ) < self::MINIMUM_ITEMS_TO_SHOW_CROSS_SALE ) {
				return;
			}


			$nonce     = wp_create_nonce( "{$this->plugin_prefix}_sidebar_popup_nonce" );
			$media_url = admin_url( 'upload.php' );
			$action    = esc_js( "{$this->plugin_prefix}_sidebar_popup_install" );
			
			$icon_url  = esc_js( $this->plugin_dir_url . 'assets/img/fb-icon.png' );
			?>
			<script>
			(function($) {
				$(function() {
					if ($('#fb-sidebar-widget').length) return;
					var nonce    = '<?php echo esc_js( $nonce ); ?>';
					var mediaUrl = '<?php echo esc_js( $media_url ); ?>';
					var action   = '<?php echo esc_html( $action ); ?>';
					var loading  = '<i class="dashicons dashicons-update-alt"></i>Installing...';
					var done     = '<i class="dashicons dashicons-saved"></i>Installed! Organize files now';
					var err      = '<i class="dashicons dashicons-warning"></i>Install failed. Retry';

					var sidebar = $(
						'<div id="fb-sidebar-widget">' +
							'<button class="yay-fb-close-btn" title="Close" aria-label="Close"><svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.85598 3.25005L6.12433 0.981665C6.29189 0.814097 6.29189 0.543245 6.12433 0.375676C5.95676 0.208108 5.68591 0.208108 5.51835 0.375676L3.25 2.64406L0.981652 0.375676C0.814087 0.208108 0.54324 0.208108 0.375674 0.375676C0.208109 0.543245 0.208109 0.814097 0.375674 0.981665L2.64402 3.25005L0.375674 5.51844C0.208109 5.68601 0.208109 5.95686 0.375674 6.12443C0.459243 6.208 0.568953 6.25 0.678663 6.25C0.788374 6.25 0.898084 6.208 0.981652 6.12443L3.25 3.85604L5.51835 6.12443C5.60192 6.208 5.71163 6.25 5.82134 6.25C5.93105 6.25 6.04076 6.208 6.12433 6.12443C6.29189 5.95686 6.29189 5.68601 6.12433 5.51844L3.85598 3.25005Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/> </svg></button>' +
							'<div class="yay-fb-preview-img">' +
								'<img src="<?php echo esc_url( $img_url ); ?>" alt="FileBird">' +
							'</div>' +
							'<div class="yay-fb-badge-body">' +
								'<div class="yay-fb-badge">' +
									'<img src="<?php echo esc_url( $icon_url ); ?>" alt="" width="14" height="14">' +
									'<span>FileBird</span>' +
								'</div>' +
								'<p class="yay-fb-badge-text"><?php echo esc_js( $icon_text ); ?></p>' +
								'<div><a class="button button-primary fbv-install-button" href="javascript:;"><i class="dashicons dashicons-wordpress-alt"></i>Install for free</a></div>' +
							'</div>' +
						'</div>'
					);
					<?php if ( in_array( $screen->id, array( 'edit-product' ) ) ) : ?>
						const wrap = $('#wpbody #wpbody-content .wrap');
						// get all element in wrap and wrap them into a div
						const all_elements = wrap.children();
						const wrap_div = $('<div class="products-content">');
						all_elements.appendTo(wrap_div);
						wrap.addClass('yay-fb-has-sidebar').append(sidebar);
						wrap.append(wrap_div);
					<?php else : ?>
						const wpBody = $('#wpbody');
						const wpBodyContent = wpBody.find('#wpbody-content');
						// Check if has wpBodyContent and wpBodyContent is first child of wpBody then add yay-fb-has-sidebar
						if (wpBodyContent.length && wpBodyContent.index() === 0) {
							wpBody.addClass('yay-fb-has-sidebar').prepend(sidebar);
						}
						
					<?php endif; ?>

					function yayFbRemoveSidebar() {
						sidebar.remove();
						<?php if ( in_array( $screen->id, array( 'edit-product' ) ) ) : ?>
							var wrap = $('#wpbody #wpbody-content .wrap');
							wrap.removeClass('yay-fb-has-sidebar');
							wrap.find('.products-content').children().appendTo(wrap);
							wrap.find('.products-content').remove();
						<?php else : ?>
							$('#wpbody').removeClass('yay-fb-has-sidebar');
						<?php endif; ?>
					}

					sidebar.find('.yay-fb-close-btn').on('click', function() {
						var modal = $(
							'<div id="yay-fb-confirm-modal">' +
								'<div class="yay-fb-confirm-dialog">' +
									'<h3>Remove this widget?</h3>' +
									'<label class="yay-fb-confirm-check">' +
										'<input type="checkbox" id="yay-fb-dont-show">' +
										" Don\'t display this widget again" +
									'</label>' +
									'<div class="yay-fb-confirm-actions">' +
										'<button class="button button-primary yay-fb-confirm-submit">Remove</button>' +
										'<button class="button yay-fb-confirm-cancel">Cancel</button>' +
									'</div>' +
								'</div>' +
							'</div>'
						);
						$('body').append(modal);
						var rect = sidebar[0].getBoundingClientRect();
						modal.find('.yay-fb-confirm-dialog').css({ top: rect.top +3, left: rect.right -2 });
						modal.on('click', function(e) {
							if (!$(e.target).closest('.yay-fb-confirm-dialog').length) {
								modal.remove();
							}
						});
						modal.find('.yay-fb-confirm-cancel, .yay-fb-confirm-x').on('click', function() {
							modal.remove();
						});
						modal.find('.yay-fb-confirm-submit').on('click', function() {
							var dontShow = modal.find('#yay-fb-dont-show').is(':checked');
							modal.remove();
							yayFbRemoveSidebar();
							if (dontShow) {
								$.post(ajaxurl, { action: 'filebird_sidebar_popup_hide', nonce: nonce, type: "<?php echo esc_js( $type ); ?>", dont_show_again: true });
							} else {
								$.post(ajaxurl, { action: 'filebird_sidebar_popup_hide', nonce: nonce, type: "<?php echo esc_js( $type ); ?>"});
							}
						});
					});

					sidebar.find('.yay-fb-install-btn').on('click', function(e) {
						e.preventDefault();
						var btn = $(this);
						if (btn.hasClass('yay-fb-installing') || btn.hasClass('yay-fb-done')) return;
						$.ajax({
							url: ajaxurl, method: 'POST',
							data: { action: action, nonce: nonce },
							beforeSend: function() { btn.addClass('yay-fb-installing').html(loading); },
							success: function(res) {
								if (res.success) {
									btn.removeClass('yay-fb-installing').addClass('yay-fb-done').html(done);
									btn.off('click').on('click', function() { window.location.href = mediaUrl; });
								} else {
									btn.removeClass('yay-fb-installing').addClass('yay-fb-error').html(err);
								}
							},
							error: function() { btn.removeClass('yay-fb-installing').addClass('yay-fb-error').html(err); }
						});
					});
				});
			})(jQuery);
			</script>
			<?php
		}

		public function ajax_install_plugin() {
			if ( ! function_exists( 'current_user_can' ) || ! current_user_can( 'install_plugins' ) ) {
				wp_send_json_error( array( 'message' => 'Current user cannot install this plugin' ) );
			}
			check_ajax_referer( "{$this->plugin_prefix}_sidebar_popup_nonce", 'nonce', true );

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

		public function ajax_hide() {
			check_ajax_referer( "{$this->plugin_prefix}_sidebar_popup_nonce", 'nonce', true );
			$type = isset( $_POST['type'] ) ? sanitize_text_field( $_POST['type'] ) : 'media';
			$dont_show_again = isset( $_POST['dont_show_again'] ) ? sanitize_text_field( $_POST['dont_show_again'] ) : false;
			if(!$dont_show_again) {
				$time = time() + ( 30 * 60 * 60 * 24 ); // hide 30 days
			} else {
				$time = time() + ( 10000 * 60 * 60 * 24 ); // hide 10000 days
			}

			if($type === 'media') {
				$this->media_page = $time;
				update_option( "{$this->plugin_prefix}_sidebar_popup_{$type}_page", $time );
			} elseif($type === 'post') {
				$this->post_page = $time;
				update_option( "{$this->plugin_prefix}_sidebar_{$type}_page", $time );
			} elseif($type === 'product') {
				$this->product_page = $time;
				update_option( "{$this->plugin_prefix}_sidebar_{$type}_page", $time );
			}
			wp_send_json_success();
		}
	}
}
