<?php
namespace NjtDuplicate\Classes;

defined( 'ABSPATH' ) || exit;
use NjtDuplicate\Helper\Utils;

class EditorDuplicate {
	protected static $instance = null;

	public static function getInstance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {
		add_action( 'post_submitbox_start', array( $this, 'add_duplicate_button_in_editor_submitbox' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_duplicate_button_assets' ) );
	}

	public function add_duplicate_button_in_editor_submitbox( $post = null ) {
		if ( is_null( $post ) ) {
			if ( isset( $_GET['post'] ) ) {
				$id   = sanitize_text_field( wp_unslash( $_GET['post'] ) );
				$post = get_post( $id );
			}
		}

		if ( $post instanceof \WP_Post && Utils::isCurrentUserAllowedToCopy() && Utils::checkPostTypeDuplicate( $post->post_type ) ) {
			$duplicateTextLink = get_option( 'njt_duplicate_text_link' ) === false || get_option( 'njt_duplicate_text_link' ) === '' ? 'Duplicate' : get_option( 'njt_duplicate_text_link' );
			?>
			<div>
				<a class="njt-duplicate-link"
					href="<?php echo esc_url( Utils::getDuplicateLink( $post->ID, true ) ); ?>"><?php echo esc_html( $duplicateTextLink ); ?>
				</a>
			</div>
			<?php
		}
	}

	public function enqueue_duplicate_button_assets() {
		if ( ! isset( $_GET['post'] ) ) {
			return;
		}

		$post_id = absint( sanitize_text_field( wp_unslash( $_GET['post'] ) ) );
		if ( ! $post_id ) {
			return;
		}

		$post = get_post( $post_id );
		if ( ! ( $post instanceof \WP_Post ) ) {
			return;
		}

		if ( ! Utils::isCurrentUserAllowedToCopy() || ! Utils::checkPostTypeDuplicate( $post->post_type ) ) {
			return;
		}

		$duplicate_text_link = get_option( 'njt_duplicate_text_link' ) === false || get_option( 'njt_duplicate_text_link' ) === '' ? 'Duplicate' : get_option( 'njt_duplicate_text_link' );

		$handle = 'njt-duplicate-editor-sidebar';
		wp_enqueue_script(
			$handle,
			NJT_DUPLICATE_PLUGIN_URL . '/assets/js/editor-duplicate.js',
			array( 'wp-element', 'wp-components', 'wp-edit-post', 'wp-plugins' ),
			NJT_DUPLICATE_VERSION,
			true
		);

		wp_localize_script(
			$handle,
			'njtDuplicateEditor',
			array(
				'link' => html_entity_decode( Utils::getDuplicateLink( $post->ID, true ) ),
				'text' => $duplicate_text_link,
			)
		);
	}
}
