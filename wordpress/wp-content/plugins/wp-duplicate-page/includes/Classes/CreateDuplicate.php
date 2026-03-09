<?php
namespace NjtDuplicate\Classes;

defined( 'ABSPATH' ) || exit;
use NjtDuplicate\Helper\Utils;

class CreateDuplicate {
	protected static $instance = null;

	public static function getInstance() {
		if ( null == self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {

	}

	public function createDuplicate( $post, $parentId = '' ) {

		if ( ! Utils::checkPostTypeDuplicate( $post->post_type ) && 'attachment' !== $post->post_type ) {
			wp_die( esc_html__( 'Copy features for this post type are not enabled in setting page', 'wp-duplicate-page' ) );
		}

		$newPostAuthor   = wp_get_current_user();
		$newPostAuthorId = $newPostAuthor->ID;

		if ( 'attachment' !== $post->post_type ) {

			$title = trim( $post->post_title );
			// empty title
			if ( '' === $title ) {
				$title = __( 'Untitled', 'wp-duplicate-page' );
			}
		}

		$newPost = array(
			'menu_order'            => $post->menu_order,
			'comment_status'        => $post->comment_status,
			'ping_status'           => $post->ping_status,
			'post_author'           => $newPostAuthorId,
			'post_content'          => $post->post_content,
			'post_content_filtered' => $post->post_content_filtered,
			'post_excerpt'          => $post->post_excerpt,
			'post_mime_type'        => $post->post_mime_type,
			'post_parent'           => empty( $parentId ) ? $post->post_parent : $parentId,
			'post_password'         => $post->post_password,
			'post_status'           => 'draft',
			'post_title'            => $title,
			'post_type'             => $post->post_type,
			'post_name'             => $post->post_name,
			'post_date'             => $post->post_date,
			'post_date_gmt'         => get_gmt_from_date( $post->post_date ),
		);

		$newPostId = wp_insert_post( wp_slash( $newPost ) );

		// Duplicate postmeta, comment, attachment, children, taxonomies,
		if ( 0 !== $newPostId && ! is_wp_error( $newPostId ) ) {
			$this->duplicateDetails( $newPostId, $post );
		}

		return $newPostId;
	}

	public function createDuplicateOrderHPOS( $originalOrder ) {
		if ( ! Utils::checkPostTypeDuplicate( 'shop_order' ) ) {
			wp_die( esc_html__( 'Copy features for this post type are not enabled in setting page', 'wp-duplicate-page' ) );
		}

		$newDuplicateAuthor   = wp_get_current_user();
		$newDuplicateAuthorId = $newDuplicateAuthor->ID;

		// Disable all WooCommerce order status emails.
		add_filter( 'woocommerce_email_enabled_new_order', '__return_false' );
		add_filter( 'woocommerce_email_enabled_cancelled_order', '__return_false' );
		add_filter( 'woocommerce_email_enabled_failed_order', '__return_false' );
		add_filter( 'woocommerce_email_enabled_customer_on_hold_order', '__return_false' );
		add_filter( 'woocommerce_email_enabled_customer_processing_order', '__return_false' );
		add_filter( 'woocommerce_email_enabled_customer_completed_order', '__return_false' );
		add_filter( 'woocommerce_email_enabled_customer_refunded_order', '__return_false' );
		add_filter( 'woocommerce_email_enabled_customer_invoice', '__return_false' );

		// Temporarily disable stock management.
		add_filter( 'woocommerce_can_reduce_order_stock', '__return_false' );

		$orderData = array(
			'customer_id' => $newDuplicateAuthorId,
			'status'      => 'pending',
			'currency'    => $originalOrder->get_currency(),
			'created_via' => $originalOrder->get_created_via(),
			'billing'     => $originalOrder->get_address( 'billing' ),
			'shipping'    => $originalOrder->get_address( 'shipping' ),
		);

		$order = wc_create_order( $orderData );

		foreach ( $originalOrder->get_meta_data() as $meta ) {
			if ( Utils::excludeMetaKey( $meta->key ) ) {
				continue;
			}
			$order->update_meta_data( $meta->key, $meta->value );
		}

		foreach ( $originalOrder->get_items() as $item ) {
			if ( $item->get_type() === 'line_item' ) {
				$product = $item->get_product();
				if ( $product ) {
					$newItem = new \WC_Order_Item_Product();
					$newItem->set_product_id( $item->get_product_id() );
					$newItem->set_variation_id( $item->get_variation_id() );
					$newItem->set_quantity( $item->get_quantity() );

					// Handle pricing option.
					$newItem->set_subtotal( (string) $item->get_subtotal() );
					$newItem->set_total( (string) $item->get_total() );

					// Copy item meta.
					foreach ( $item->get_meta_data() as $meta ) {
						$newItem->add_meta_data( $meta->key, $meta->value, true );
					}

					$order->add_item( $newItem );
				}
			} else {
				$order->add_item( clone $item );
			}
		}

		// Clone or set new shipping method based on the setting.
		foreach ( $originalOrder->get_items( 'shipping' ) as $shippingItem ) {
			$newShippingItem = new \WC_Order_Item_Shipping();
			$newShippingItem->set_method_title( $shippingItem->get_method_title() );
			$newShippingItem->set_method_id( $shippingItem->get_method_id() );
			$newShippingItem->set_total( $shippingItem->get_total() );
			$newShippingItem->set_taxes( $shippingItem->get_taxes() );

			foreach ( $shippingItem->get_meta_data() as $meta ) {
				$newShippingItem->add_meta_data( $meta->key, $meta->value, true );
			}

			$order->add_item( $newShippingItem );
		}

		// Coupon items.
		foreach ( $originalOrder->get_items( 'coupon' ) as $couponItem ) {
			$newCouponItem = new \WC_Order_Item_Coupon();
			$newCouponItem->set_code( $couponItem->get_code() );
			$newCouponItem->set_discount( $couponItem->get_discount() );
			$order->add_item( $newCouponItem );
		}

		$order->calculate_totals();
		$order->update_status( 'pending' );
		$order->set_address( $orderData['billing'], 'billing' );
		$order->set_address( $orderData['shipping'], 'shipping' );

		// Set the order's date created.
		$current_date = current_time( 'mysql' );
		$order->set_date_created( $current_date );
		$order->add_order_note( sprintf( 'This order was duplicated from order %d.', $originalOrder->get_id() ) );
		$order->save();

		// Re-enable stock management and adjust stock levels manually.
		remove_filter( 'woocommerce_can_reduce_order_stock', '__return_false' );

		foreach ( $order->get_items() as $item ) {
			$product  = $item->get_product();
			$quantity = $item->get_quantity();
			if ( $product && $product->managing_stock() && $product->get_stock_quantity() > 0 ) {
				wc_update_product_stock( $product, $quantity, 'decrease' );
			}
		}

		// Enable all WooCommerce order status emails.
		remove_filter( 'woocommerce_email_enabled_new_order', '__return_false' );
		remove_filter( 'woocommerce_email_enabled_cancelled_order', '__return_false' );
		remove_filter( 'woocommerce_email_enabled_failed_order', '__return_false' );
		remove_filter( 'woocommerce_email_enabled_customer_on_hold_order', '__return_false' );
		remove_filter( 'woocommerce_email_enabled_customer_processing_order', '__return_false' );
		remove_filter( 'woocommerce_email_enabled_customer_completed_order', '__return_false' );
		remove_filter( 'woocommerce_email_enabled_customer_refunded_order', '__return_false' );
		remove_filter( 'woocommerce_email_enabled_customer_invoice', '__return_false' );

		return $order->get_id();
	}

	// Run all function to copy details
	private function duplicateDetails( $newPostId, $post ) {
		$this->copyPostMeta( $newPostId, $post );
		$this->copyChildrens( $newPostId, $post );
		$this->copyComments( $newPostId, $post );
		$this->copyTaxonomies( $newPostId, $post );
		if ( 'shop_order' === $post->post_type ) {
			$this->copyOrderDetails( $newPostId, $post );
		}
	}
	// Duplicate post meta
	private function copyPostMeta( $newPostId, $post ) {
		$metaKeys = get_post_custom_keys( $post->ID );
		if ( empty( $metaKeys ) ) {
			return;
		}

		foreach ( $metaKeys as $metaKey ) {
			$metaValues = get_post_custom_values( $metaKey, $post->ID );
			foreach ( $metaValues as $metaValue ) {
				$metaValue = maybe_unserialize( $metaValue );
				add_post_meta( $newPostId, $metaKey, wp_slash( $metaValue ) );
			}
		}
	}
	// Duplicate all children post
	private function copyChildrens( $newPostId, $post ) {
		$postChildren = get_posts(
			array(
				'post_type'   => 'any',
				'numberposts' => -1,
				'post_status' => 'any',
				'post_parent' => $post->ID,
			)
		);
		foreach ( $postChildren as $children ) {
			if ( 'attachment' === $children->post_type ) {
				continue;
			}
			$this->createDuplicate( $children, $newPostId );
		}
	}
	// Duplicate all comments of post
	private function copyComments( $newPostId, $post ) {
		$comments = get_comments(
			array(
				'post_id' => $post->ID,
				'order'   => 'ASC',
				'orderby' => 'comment_date_gmt',
			)
		);

		$parentId = array();
		foreach ( $comments as $comment ) {
			// do not copy pingbacks or trackbacks
			if ( 'pingback' === $comment->comment_type || 'trackback' === $comment->comment_type ) {
				continue;
			}
			$parent                           = ( $comment->comment_parent && $parentId[ $comment->comment_parent ] ) ? $parentId[ $comment->comment_parent ] : 0;
			$newComment                       = array(
				'comment_post_ID'      => $newPostId,
				'comment_author'       => $comment->comment_author,
				'comment_author_email' => $comment->comment_author_email,
				'comment_author_url'   => $comment->comment_author_url,
				'comment_content'      => $comment->comment_content,
				'comment_type'         => $comment->comment_type,
				'comment_parent'       => $parent,
				'user_id'              => $comment->user_id,
				'comment_author_IP'    => $comment->comment_author_IP,
				'comment_agent'        => $comment->comment_agent,
				'comment_karma'        => $comment->comment_karma,
				'comment_approved'     => $comment->comment_approved,
				'comment_date'         => $comment->comment_date,
				'comment_date_gmt'     => get_gmt_from_date( $comment->comment_date ),
			);
			$newCommentId                     = wp_insert_comment( $newComment );
			$parentId[ $comment->comment_ID ] = $newCommentId;
		}
	}
	// Duplicate post taxonomies
	private function copyTaxonomies( $newPostId, $post ) {
		global $wpdb;
		if ( isset( $wpdb->terms ) ) {
			wp_set_object_terms( $newPostId, null, 'category' );
			$taxonomies = get_object_taxonomies( $post->post_type );

			if ( post_type_supports( $post->post_type, 'post-formats' ) && ! in_array( 'post_format', $taxonomies ) ) {
				$taxonomies[] = 'post_format';
			}

			foreach ( $taxonomies as $taxonomy ) {
				$postTerms = wp_get_object_terms( $post->ID, $taxonomy, array( 'orderby' => 'term_order' ) );
				$terms     = array();
				for ( $i = 0; $i < count( $postTerms ); $i++ ) {
					$terms[] = $postTerms[ $i ]->slug;
				}
				wp_set_object_terms( $newPostId, $terms, $taxonomy );
			}
		}
	}
	//Duplicate order details
	private function copyOrderDetails( $newPostId, $post ) {
		$order     = wc_get_order( $post->ID );
		$copyOrder = wc_get_order( $newPostId );
		foreach ( $order->get_items() as $item ) {
			$products = wc_get_product( $item->get_product_id() );
			$quantity = $item->get_quantity();
			$copyOrder->add_product( $products, $quantity );
		}

		$orderMetaFields = array(
			'customer_id',
			'billing_first_name',
			'billing_last_name',
			'billing_company',
			'billing_address_1',
			'billing_address_2',
			'billing_city',
			'billing_state',
			'billing_postcode',
			'billing_country',
			'billing_email',
			'billing_phone',
			'shipping_first_name',
			'shipping_last_name',
			'shipping_company',
			'shipping_address_1',
			'shipping_address_2',
			'shipping_city',
			'shipping_state',
			'shipping_postcode',
			'shipping_country',
			'created_via',
		);
		foreach ( $orderMetaFields as $metaField ) {
			$setMetaFunction = "set_{$metaField}";
			$getMetaFunction = "get_{$metaField}";
			$copyOrder->$setMetaFunction( $order->$getMetaFunction() );
		}

		$orderTax      = $order->get_items( 'tax' );
		$orderShipping = $order->get_items( 'shipping' );
		$orderFee      = $order->get_items( 'fee' );
		$orderCoupon   = $order->get_items( 'coupon' );
		foreach ( $orderTax as $tax ) {
			$copyOrder->add_item( $tax );
		}
		foreach ( $orderShipping as $shipping ) {
			$copyOrder->add_item( $shipping );
		}
		foreach ( $orderFee as $fee ) {
			$copyOrder->add_item( $fee );
		}
		foreach ( $orderCoupon as $coupon ) {
			$copyOrder->add_item( $coupon );
		}
		$copyOrder->calculate_totals();
		$copyOrder->save();
	}
}
