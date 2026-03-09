<?php
namespace NjtDuplicate\Helper;

defined( 'ABSPATH' ) || exit;

class Utils {

	public static function isCurrentUserAllowedToCopy() {
		return current_user_can( 'njt_duplicate_page' );
	}

	public static function checkPostTypeDuplicate( $postType ) {
		$duplicatePostTypes = get_option( 'njt_duplicate_post_types', array( 'post', 'page' ) );
		if ( ! is_array( $duplicatePostTypes ) ) {
			$duplicatePostTypes = array( $duplicatePostTypes );
		}
		return in_array( $postType, $duplicatePostTypes );
	}

	//Not duplicate meta key
	public static function excludeMetaKey( $key ) {
		$exclude_meta_key = apply_filters(
			'wp_duplicate_page_exclude_meta_key',
			array(
				'_order_number',
			)
		);

		return in_array( $key, $exclude_meta_key );
	}

	public static function getDuplicateLink( $postId = 0, $inEditor = false ) {

		if ( ! self::isCurrentUserAllowedToCopy() ) {
			return;
		}

		if ( ! $post = get_post( $postId ) ) {
			return;
		}

		if ( ! self::checkPostTypeDuplicate( $post->post_type ) ) {
			return;
		}

		$action_name = 'njt_duplicate_page_save_as_new_post';
		$action      = '?action=' . $action_name . '&amp;post=' . $post->ID . ( $inEditor ? '&redirect=new_draft' : '' );
		$postType    = get_post_type_object( $post->post_type );

		if ( ! $postType ) {
			return;
		}

		return wp_nonce_url( admin_url( 'admin.php' . $action ), 'njt-duplicate-page_' . $post->ID );
	}
}
