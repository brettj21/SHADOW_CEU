<?php
defined( 'ABSPATH' ) || exit;
use NjtDuplicate\Helper\Utils;
?>
<div class="wrap njt-duplicate-wrap">
	<div class="njt-duplicate-top-header">
		<div class="njt-duplicate-header-left">
		<div class="njt-duplicate-header-logo">
			<img src="<?php echo NJT_DUPLICATE_PLUGIN_URL; ?>/assets/images/wp-duplicate-page.png" alt="WP Duplicate Page">
		</div>
		<h1 class="njt-duplicate-header-title">WP Duplicate Page</h1>
		<a class="njt-duplicate-btn njt-duplicate-btn-xs" href="https://ninjateam.org" target="_blank" rel="noopener noreferrer">by NinjaTeam</a>
		</div>
		<div class="njt-duplicate-header-actions">
		<a data-tooltip-content="<?php echo esc_html( __( 'Chat with support', 'wp-duplicate-page' ) ); ?>" data-tooltip-place="bottom" href="https://ninjateam.org/support/" target="_blank" rel="noopener noreferrer" class="njt-duplicate-header-link njt-duplicate-btn fixed-width">
			<svg viewBox="0 0 18 18" data-icon="headset" width="17" height="17" fill="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#1D2327]">
			<path d="M2.81663 14.1416H2.54167C1.275 14.1416 0.25 13.1166 0.25 11.8499V9.76658C0.25 8.49992 1.275 7.47492 2.54167 7.47492H2.81663C4.0833 7.47492 5.1083 8.49992 5.1083 9.76658V11.8499C5.1083 13.1082 4.0833 14.1416 2.81663 14.1416ZM2.54167 8.72492C1.96667 8.72492 1.5 9.19158 1.5 9.76658V11.8499C1.5 12.4249 1.96667 12.8916 2.54167 12.8916H2.81663C3.39163 12.8916 3.8583 12.4249 3.8583 11.8499V9.76658C3.8583 9.19158 3.39163 8.72492 2.81663 8.72492H2.54167Z"></path>
			<path d="M15.3165 8.72483C14.9748 8.72483 14.6915 8.4415 14.6915 8.09983V7.19981C14.6915 4.05814 12.1416 1.50814 8.99992 1.50814C5.85824 1.50814 3.30827 4.05814 3.30827 7.19981V8.09983C3.30827 8.4415 3.02494 8.72483 2.68327 8.72483C2.34161 8.72483 2.05827 8.4415 2.05827 8.09983V7.19981C2.05827 3.37481 5.17491 0.258142 8.99992 0.258142C12.8249 0.258142 15.9415 3.37481 15.9415 7.19981V8.09983C15.9415 8.4415 15.6665 8.72483 15.3165 8.72483Z"></path>
			<path d="M10.8002 17.7498H9.90009C9.55842 17.7498 9.27509 17.4664 9.27509 17.1248C9.27509 16.7831 9.55842 16.4998 9.90009 16.4998H10.8002C12.6418 16.4998 14.2501 15.1914 14.6084 13.3831C14.6751 13.0414 15.0084 12.8248 15.3418 12.8914C15.6751 12.9581 15.9001 13.2914 15.8334 13.6248C15.3584 16.0164 13.2418 17.7498 10.8002 17.7498Z"></path>
			<path d="M15.4583 14.1416H15.1833C13.9166 14.1416 12.8916 13.1166 12.8916 11.8499V9.76658C12.8916 8.49992 13.9166 7.47492 15.1833 7.47492H15.4583C16.7249 7.47492 17.7499 8.49992 17.7499 9.76658V11.8499C17.7499 13.1082 16.7249 14.1416 15.4583 14.1416ZM15.1833 8.72492C14.6083 8.72492 14.1416 9.19158 14.1416 9.76658V11.8499C14.1416 12.4249 14.6083 12.8916 15.1833 12.8916H15.4583C16.0333 12.8916 16.4999 12.4249 16.4999 11.8499V9.76658C16.4999 9.19158 16.0333 8.72492 15.4583 8.72492H15.1833Z"></path>
			</svg>
		</a>
		<a data-tooltip-content="<?php echo esc_html( __( 'Details', 'wp-duplicate-page' ) ); ?>" data-tooltip-place="bottom" href="https://ninjateam.org/wp-duplicate-page/" target="_blank" rel="noopener noreferrer" class="njt-duplicate-header-link njt-duplicate-btn fixed-width">
			<svg viewBox="0 0 18 18" data-icon="document" width="18" height="18" fill="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#1D2327]">
			<path d="M12.3333 17.9583H5.66667C2.625 17.9583 0.875 16.2083 0.875 13.1667V4.83333C0.875 1.79167 2.625 0.041666 5.66667 0.041666H12.3333C15.375 0.041666 17.125 1.79167 17.125 4.83333V13.1667C17.125 16.2083 15.375 17.9583 12.3333 17.9583ZM5.66667 1.29167C3.28333 1.29167 2.125 2.45 2.125 4.83333V13.1667C2.125 15.55 3.28333 16.7083 5.66667 16.7083H12.3333C14.7167 16.7083 15.875 15.55 15.875 13.1667V4.83333C15.875 2.45 14.7167 1.29167 12.3333 1.29167H5.66667Z"></path>
			<path d="M14.4167 6.70833H12.75C11.4833 6.70833 10.4583 5.68333 10.4583 4.41667V2.75C10.4583 2.40833 10.7417 2.125 11.0833 2.125C11.425 2.125 11.7083 2.40833 11.7083 2.75V4.41667C11.7083 4.99167 12.175 5.45833 12.75 5.45833H14.4167C14.7583 5.45833 15.0417 5.74167 15.0417 6.08333C15.0417 6.425 14.7583 6.70833 14.4167 6.70833Z"></path>
			<path d="M9 10.4583H5.66666C5.325 10.4583 5.04166 10.175 5.04166 9.83333C5.04166 9.49167 5.325 9.20833 5.66666 9.20833H9C9.34166 9.20833 9.625 9.49167 9.625 9.83333C9.625 10.175 9.34166 10.4583 9 10.4583Z"></path>
			<path d="M12.3333 13.7917H5.66666C5.325 13.7917 5.04166 13.5083 5.04166 13.1667C5.04166 12.825 5.325 12.5417 5.66666 12.5417H12.3333C12.675 12.5417 12.9583 12.825 12.9583 13.1667C12.9583 13.5083 12.675 13.7917 12.3333 13.7917Z"></path>
			</svg>
		</a>
		</div>
	</div><!--/.njt-duplicate-top-header-->
	<div id="njt-duplicate-root">
		<div class="njt-duplicate-layout">
			<div class="njt-duplicate-layout-primary">
				<div class="njt-duplicate-layout-main">
					<div class="njt-duplicate-settings">
						<form method="post" id="njt_duplicate_setting_form">
							<div class="njt-duplicate-card">
								<div class="njt-duplicate-card-header">
									<div class="njt-duplicate-card-title-wrapper">
										<h3 class="njt-duplicate-card-title njt-duplicate-card-header-item">
											<?php echo esc_html( __( 'Duplicate Page Settings', 'wp-duplicate-page' ) ); ?>
										</h3>
									</div>
								</div>
								<div class="njt-duplicate-card-body"> 
									<div class="njt-duplicate-control">
										<label class="njt-duplicate-base-control-label" for="inspector-select-control-2"><?php echo esc_html( __( 'Allowed User Roles', 'wp-duplicate-page' ) ); ?></label>
										<div>
											<?php
											global $wp_roles;
											$roles            = $wp_roles->get_names();
											$editCapabilities = array( 'edit_posts' => true );
											foreach ( $roles as $roleName => $displayName ) :
												$role = get_role( $roleName );
												if ( count( array_intersect_key( $role->capabilities, $editCapabilities ) ) > 0 ) :
													?>
													<div class="njt-duplicate-base-control">
														<div class="njt-duplicate-base-control-field">
															<span class="njt-duplicate-checkbox-control-input-container">
																<input
																	type="checkbox"
																	id="njt-duplicate-<?php echo esc_attr( $roleName ); ?>" 
																	name="njt_duplicate_roles[]" 
																	class="njt-duplicate-checkbox-control-input" 
																	value="<?php echo esc_attr( $roleName ); ?>" 
																	<?php
																	if ( $role->has_cap( 'njt_duplicate_page' ) ) {
																		echo 'checked="checked"';
																	}
																	?>
																	 
																/>
																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" class="njt-duplicate-checkbox-control-checked" aria-hidden="true" focusable="false">
																	<path d="M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"></path>
																</svg>
															</span>
															<label class="njt-duplicate-checkbox-control-label" for="njt-duplicate-<?php echo esc_attr( $roleName ); ?>"><?php echo esc_html( translate_user_role( $displayName ) ); ?></label><br />
														</div>
													</div>
													<?php
												endif;
											endforeach;
											?>
										</div>
									</div>
									<div class="njt-duplicate-control">
										<label class="njt-duplicate-base-control-label" for="inspector-select-control-2"><?php echo esc_html( __( 'Allowed Post Types', 'wp-duplicate-page' ) ); ?></label>
										<div>
											<?php
											$postTypes = get_post_types( array( 'show_ui' => true ), 'objects' );
											foreach ( $postTypes as $postType ) :
												if ( 'attachment' === $postType->name ) {
													continue;
												}
												?>
													<div class="njt-duplicate-base-control">
														<div class="njt-duplicate-base-control-field">
															<span class="njt-duplicate-checkbox-control-input-container">
																<input
																	type="checkbox"
																	id="njt-duplicate-<?php echo esc_attr( $postType->name ); ?>" 
																	name="njt_duplicate_post_types[]" 
																	class="njt-duplicate-checkbox-control-input" 
																	value="<?php echo esc_attr( $postType->name ); ?>" 
																	<?php
																	if ( Utils::checkPostTypeDuplicate( $postType->name ) ) {
																		echo 'checked="checked"';
																	}
																	?>
																	 
																/>
																<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" class="njt-duplicate-checkbox-control-checked" aria-hidden="true" focusable="false">
																	<path d="M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"></path>
																</svg>
															</span>
															<label class="njt-duplicate-checkbox-control-label" for="njt-duplicate-<?php echo esc_attr( $postType->name ); ?>"><?php echo esc_html( translate_user_role( $postType->labels->name ) ); ?></label><br />
														</div>
													</div>
											<?php endforeach; ?>
										</div>
									</div>
									<div class="njt-duplicate-control">
										<label class="njt-duplicate-base-control-label njt-duplicate-text" for="inspector-select-control-text"><?php echo esc_html( __( 'Duplicate Page Link Text', 'wp-duplicate-page' ) ); ?></label>
										<div class="njt-duplicate-base-control">
											<div class="njt-duplicate-base-control-field">
												<?php $duplicateTextLink = get_option( 'njt_duplicate_text_link' ) == false || get_option( 'njt_duplicate_text_link' ) == '' ? 'Duplicate' : get_option( 'njt_duplicate_text_link' ); ?>
												<input name="njt_duplicate_text_link"  class="njt-duplicate-text-control-input" type="text" id="inspector-text-control-2" value="<?php echo esc_attr( $duplicateTextLink ); ?>">
											</div>
											<p id="inspector-text-control-2-help" class="njt-duplicate-base-control-help"><?php echo esc_html( __( 'Text for duplicate page link. Default: ', 'wp-duplicate-page' ) ); ?><span class="njt-duplicate-default-text"><?php echo esc_html( __( 'Duplicate', 'wp-duplicate-page' ) ); ?></span></p>
										</div>
									</div>

									<?php /* Layout for duplicate in editor */ ?>
									<div class="njt-duplicate-control">
										<label class="njt-duplicate-base-control-label"><?php echo esc_html( __( 'Show Duplicate button in Editor', 'wp-duplicate-page' ) ); ?></label>
										<div class="njt-duplicate-base-control">
											<div class="njt-duplicate-base-control-field">
												<div class="njt-duplicate-toggle-control">
													<input
														type="checkbox"
														id="njt-duplicate-in-editor-toggle"
														name="njt_duplicate_in_editor"
														class="njt-duplicate-toggle-control-input"
														value="1"
														<?php
														$duplicateInEditor = get_option( 'njt_duplicate_in_editor', true );
														if ( $duplicateInEditor ) {
															echo 'checked="checked"';
														}
														?>
													/>
													<label for="njt-duplicate-in-editor-toggle" class="njt-duplicate-toggle-control-label">
														<span class="njt-duplicate-toggle-control-switch"></span>
													</label>
												</div>
											</div>
										</div>
									</div>
									
									<p class="submit">
										<input 
											type="submit" 
											class="njt-duplicate-button is-primary"
											value="<?php esc_html_e( 'Save changes', 'wp-duplicate-page' ); ?>" 
										/>
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="njt-duplicate-footer" class="njt-duplicate-footer">
		<div class="njt-duplicate-footer-breadcrumb">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false">
				<path fill="#fff" d="M24 4.050000000000001A19.95 19.95 0 1 0 24 43.95A19.95 19.95 0 1 0 24 4.050000000000001Z"></path>
				<path fill="#01579b" d="M8.001,24c0,6.336,3.68,11.806,9.018,14.4L9.385,17.488C8.498,19.479,8.001,21.676,8.001,24z M34.804,23.194c0-1.977-1.063-3.35-1.67-4.412c-0.813-1.329-1.576-2.437-1.576-3.752c0-1.465,1.471-2.84,3.041-2.84 c0.071,0,0.135,0.006,0.206,0.008C31.961,9.584,28.168,8,24.001,8c-5.389,0-10.153,2.666-13.052,6.749 c0.228,0.074,0.307,0.039,0.611,0.039c1.669,0,4.264-0.2,4.264-0.2c0.86-0.057,0.965,1.212,0.099,1.316c0,0-0.864,0.105-1.828,0.152 l5.931,17.778l3.5-10.501l-2.603-7.248c-0.861-0.046-1.679-0.152-1.679-0.152c-0.862-0.056-0.762-1.375,0.098-1.316 c0,0,2.648,0.2,4.217,0.2c1.675,0,4.264-0.2,4.264-0.2c0.861-0.057,0.965,1.212,0.104,1.316c0,0-0.87,0.105-1.832,0.152l5.891,17.61 l1.599-5.326C34.399,26.289,34.804,24.569,34.804,23.194z M24.281,25.396l-4.8,13.952c1.436,0.426,2.95,0.652,4.52,0.652 c1.861,0,3.649-0.324,5.316-0.907c-0.04-0.071-0.085-0.143-0.118-0.22L24.281,25.396z M38.043,16.318 c0.071,0.51,0.108,1.059,0.108,1.645c0,1.628-0.306,3.451-1.219,5.737l-4.885,14.135C36.805,35.063,40,29.902,40,24 C40,21.219,39.289,18.604,38.043,16.318z"></path>
				<path fill="#01579b" d="M4,24c0,11.024,8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4S4,12.976,4,24z M5.995,24 c0-9.924,8.074-17.999,18.004-17.999S42.005,14.076,42.005,24S33.929,42.001,24,42.001C14.072,42.001,5.995,33.924,5.995,24z"></path>
			</svg>
			<span class="njt-duplicate-footer-breadcrumb-item">Settings</span>
			<span class="njt-duplicate-footer-breadcrumb-separator">&gt;</span>
			<span class="njt-duplicate-footer-breadcrumb-active">Duplicate Page</span>
		</div>
		<div class="njt-duplicate-footer-review-text">
			<?php
			$reviewed     = get_option( 'njt_duplicate_reviewed', '0' ) === '1';
			$reviewedText = 'Thank you for using WP Duplicate Page from <a href="https://ninjateam.org/" target="_blank">NinjaTeam</a>';
			if ( ! $reviewed ) {
				echo '<span class="njt-duplicate-footer-not-reviewed-text">We need your support to keep updating and improving the plugin. Please, <a class="njt-duplicate-footer-review-text-link" target="_blank" href="https://wordpress.org/support/plugin/wp-duplicate-page/reviews/?filter=5/#new-post/">help us by leaving a good review</a> :) Thanks!</span>';
				printf( '<span class="njt-duplicate-footer-reviewed-text" style="display: none;">%s</span>', $reviewedText );
			} else {
				printf( '<span class="njt-duplicate-footer-reviewed-text">%s</span>', $reviewedText );
			}
			?>
		</div>
	</div><!--/.njt-duplicate-footer-->
</div>
