<?php
namespace NjtDuplicate\Classes;

defined( 'ABSPATH' ) || exit;
use NjtDuplicate\Helper\Utils;
use NjtDuplicate\Classes\CreateDuplicate;

class ButtonDuplicate {
	protected static $instance = null;

	public static function getInstance() {
		if ( null == self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {
		add_action( 'admin_init', array( $this, 'addDuplicateButtonLink' ) );
		add_action( 'admin_action_njt_duplicate_page_save_as_new_post', array( $this, 'duplicateNewPageAction' ) );
	}

	public function addDuplicateButtonLink() {
		$duplicatePostTypes = get_option( 'njt_duplicate_post_types' );
		$duplicatePostTypes = ( false === $duplicatePostTypes || empty( $duplicatePostTypes ) ) ? array() : $duplicatePostTypes;
		add_filter( 'post_row_actions', array( $this, 'duplicateButtonLink' ), 10, 2 );
		add_filter( 'page_row_actions', array( $this, 'duplicateButtonLink' ), 10, 2 );
		foreach ( $duplicatePostTypes as $key => $value ) {
			if ( 'shop_order' === $value ) {
				if ( class_exists( '\Automattic\WooCommerce\Utilities\OrderUtil' ) && \Automattic\WooCommerce\Utilities\OrderUtil::custom_orders_table_usage_is_enabled() ) {
					add_filter( 'bulk_actions-woocommerce_page_wc-orders', array( $this, 'duplicateBulkLink' ), 100, 1 );
					add_filter( 'handle_bulk_actions-woocommerce_page_wc-orders', array( $this, 'duplicateBulkHandleHPOS' ), 100, 3 );
				} else {
					add_filter( "bulk_actions-edit-{$value}", array( $this, 'duplicateBulkLink' ), 100, 1 );
					add_filter( "handle_bulk_actions-edit-{$value}", array( $this, 'duplicateBulkHandle' ), 100, 3 );
				}
			} else {
				add_filter( "bulk_actions-edit-{$value}", array( $this, 'duplicateBulkLink' ), 100, 1 );
				add_filter( "handle_bulk_actions-edit-{$value}", array( $this, 'duplicateBulkHandle' ), 100, 3 );
			}
		}

	}

	public function duplicateBulkLink( $bulkActions ) {
		if ( Utils::isCurrentUserAllowedToCopy() ) {
			$duplicateTextLink                            = get_option( 'njt_duplicate_text_link' ) == false || get_option( 'njt_duplicate_text_link' ) == '' ? 'Duplicate' : get_option( 'njt_duplicate_text_link' );
			$bulkActions['wp_duplicate_page_bulk_action'] = esc_html( sprintf( __( '%s', 'wp-duplicate-page' ), $duplicateTextLink ) );
		}
		return $bulkActions;
	}

	public function duplicateBulkHandle( $redirect, $action, $postIds ) {
		if ( 'wp_duplicate_page_bulk_action' === $action ) {
			if ( ! Utils::isCurrentUserAllowedToCopy() ) {
				return $redirect;
			}
			// Get the original post
			$counter = 0;
			if ( is_array( $postIds ) ) {
				foreach ( $postIds as $postId ) {
					$post = get_post( $postId );
					// Copy the post and insert it
					if ( isset( $post ) && null !== $post ) {
						$postType        = $post->post_type;
						$createDuplicate = CreateDuplicate::getInstance();
						$newPostId       = $createDuplicate->createDuplicate( $post );
						++$counter;

					} else {
						wp_die( esc_html__( 'Copy creation failed, could not find original:', 'wp-duplicate-page' ) . ' ' . htmlspecialchars( $postId ) );
					}
				}
			}

			return add_query_arg( 'bulk_cloned', $counter, $redirect );
		}
		return $redirect;
	}

	public function duplicateBulkHandleHPOS( $redirect, $action, $ids ) {
		if ( 'wp_duplicate_page_bulk_action' === $action ) {
			if ( ! Utils::isCurrentUserAllowedToCopy() ) {
				return $redirect;
			}
			$counter = 0;
			if ( is_array( $ids ) ) {
				foreach ( $ids as $orderId ) {
					$order = wc_get_order( $orderId );
					if ( ! empty( $order ) ) {
						$createDuplicate = CreateDuplicate::getInstance();
						$newOrderId      = $createDuplicate->createDuplicateOrderHPOS( $order );
						++$counter;
					} else {
						wp_die( esc_html__( 'Copy creation failed, could not find original:', 'wp-duplicate-page' ) . ' ' . htmlspecialchars( $orderId ) );
					}
				}
			}

			return add_query_arg( 'bulk_cloned', $counter, $redirect );
		}
		return $redirect;
	}

	public function duplicateButtonLink( $actions, $post ) {
		if ( Utils::isCurrentUserAllowedToCopy() && Utils::checkPostTypeDuplicate( $post->post_type ) ) {
			$duplicateTextLink             = get_option( 'njt_duplicate_text_link' ) == false || get_option( 'njt_duplicate_text_link' ) == '' ? 'Duplicate' : get_option( 'njt_duplicate_text_link' );
			$actions['njt_duplicate_page'] = sprintf(
				'<a href="%s" rel="bookmark" aria-label="%s">%s</a>',
				Utils::getDuplicateLink( $post->ID ),
				esc_attr( __( 'Duplicate', 'wp-duplicate-page' ) ),
				/* translators: %s: Button Duplicate text. */
				esc_html( sprintf( __( ' %s ', 'wp-duplicate-page' ), $duplicateTextLink ) )
			);
			return $actions;
		}
		return $actions;
	}

	public function duplicateNewPageAction() {

		if ( ! Utils::isCurrentUserAllowedToCopy() ) {
			wp_die( esc_html__( 'Current user is not allowed to duplicate .', 'wp-duplicate-page' ) );
		}

		if ( ! ( isset( $_GET['post'] ) || isset( $_POST['post'] ) || ( isset( $_REQUEST['action'] ) && 'njt_duplicate_page_save_as_new_post' === $_REQUEST['action'] ) ) ) {
			wp_die( esc_html__( 'No post to duplicate!', 'wp-duplicate-page' ) );
		}

		// Get the original post
		$postId = ( isset( $_GET['post'] ) ? sanitize_text_field( $_GET['post'] ) : sanitize_text_field( $_POST['post'] ) );

		$redirectToEdit = isset( $_GET['redirect'] ) ? sanitize_text_field( $_GET['redirect'] ) : '';

		check_admin_referer( 'njt-duplicate-page_' . $postId );

		$post = get_post( $postId );

		// Copy the post and insert it
		if ( isset( $post ) && null !== $post ) {
			$postType        = $post->post_type;
			$createDuplicate = CreateDuplicate::getInstance();
			$newPostId       = $createDuplicate->createDuplicate( $post );

			if ( ! empty( $redirectToEdit ) && $newPostId ) {
				// Redirect to the edit page of the newly created duplicate
				$editUrl = get_edit_post_link( $newPostId, 'raw' );
				if ( $editUrl ) {
					wp_safe_redirect( $editUrl );
					exit;
				}
			} else {
				$redirect = wp_get_referer();
			}

			if ( ! $redirect ||
				strpos( $redirect, 'post.php' ) !== false ||
				strpos( $redirect, 'post-new.php' ) !== false ) {
				if ( 'attachment' == $postType ) {
					$redirect = admin_url( 'upload.php' );
				} else {
					$redirect = admin_url( 'edit.php' );
					if ( ! empty( $postType ) ) {
						$redirect = add_query_arg( 'post_type', $postType, $redirect );
					}
				}
			} else {
				$redirect = remove_query_arg( array( 'trashed', 'untrashed', 'deleted', 'ids' ), $redirect );
			}
			// Redirect to the post list screen
			wp_safe_redirect( add_query_arg( array( 'ids' => $post->ID ), $redirect ) );

			exit;

		} else {
			wp_die( esc_html__( 'Copy creation failed, could not find original:', 'wp-duplicate-page' ) . ' ' . htmlspecialchars( $postId ) );
		}
	}
}
