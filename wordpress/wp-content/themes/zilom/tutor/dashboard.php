<?php
/**
 * Template for displaying frontend dashboard
 *
 * @since v.1.0.0
 *
 * @author Themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

$is_by_short_code = isset($is_shortcode) && $is_shortcode === true;
if(!$is_by_short_code) {
	get_header();
}

global $wp_query;

$dashboard_page_slug = '';
$dashboard_page_name = '';
if(isset($wp_query->query_vars['tutor_dashboard_page']) && $wp_query->query_vars['tutor_dashboard_page']) {
	$dashboard_page_slug = $wp_query->query_vars['tutor_dashboard_page'];
	$dashboard_page_name = $wp_query->query_vars['tutor_dashboard_page'];
}
/**
 * Getting dashboard sub pages
 */
if(isset($wp_query->query_vars['tutor_dashboard_sub_page']) && $wp_query->query_vars['tutor_dashboard_sub_page']) {
	$dashboard_page_name = $wp_query->query_vars['tutor_dashboard_sub_page'];
	if($dashboard_page_slug){
		 $dashboard_page_name = $dashboard_page_slug.'/'.$dashboard_page_name;
	}
}

$user_id = get_current_user_id();
$user = get_user_by('ID', $user_id);
$enable_profile_completion = tutils()->get_option('enable_profile_completion');

do_action('tutor_dashboard/before/wrap');
?>

	<div class="zl-dashboard-page tutor-wrap tutor-dashboard tutor-dashboard-student">
		<div class="container-full">

				<div class="dashboard-main-content">
					<div class="dashboard-sidebar-overlay"></div>
					
					<div class="dashboard-left-menu">

						<div class="tutor-dashboard-header">
							<div class="close-sidebar-control text-center">
								<a class="close-sidebar" href="#">
									<i class="fa fa-times"></i><?php echo esc_html__('close', 'zilom') ?>
								</a>
							</div>
							<div class="user-info">
								<div class="tutor-dashboard-header-avatar">
									<img src="<?php echo get_avatar_url($user_id, array('size' => 150)); ?>" />
								</div>
								<div class="tutor-dashboard-header-info">
									<div class="display-name">
										<?php echo esc_html($user->display_name); ?>
									</div>
									<?php $instructor_rating = tutils()->get_instructor_ratings($user->ID); ?>
									<?php if (current_user_can(tutor()->instructor_role)){ ?>
										<div class="tutor-dashboard-header-stats">
											<div class="tutor-dashboard-header-ratings">
												<?php tutils()->star_rating_generator($instructor_rating->rating_avg); ?>
												<span><?php echo esc_html($instructor_rating->rating_avg);  ?></span>
												<span class="number"> <?php echo esc_html($instructor_rating->rating_count); ?> </span>
											</div>
										</div>
									<?php } ?>
									<div class="view-profile">
										<a class=" btn-inline" href=""><?php echo esc_html__('View Profile', 'zilom') ?></a>
									</div>
								</div>
							</div>    

							<div class="tutor-dashboard-header-button">
								<?php
									$instructor_status = tutor_utils()->instructor_status();
									$instructor_status = is_string($instructor_status) ? strtolower($instructor_status) : '';
									$rejected_on = get_user_meta($user->ID , '_is_tutor_instructor_rejected', true);
									$info_style = 'vertical-align: middle; margin-right: 7px;';
									$info_message_style = 'display:inline-block; color:#7A7A7A; font-size: 15px;';

									ob_start();
									if(tutils()->get_option('enable_become_instructor_btn')){
										?>
											<a class="btn-theme btn-small" href="<?php echo esc_url(tutils()->instructor_register_url()); ?>">
												<?php echo sprintf(__("%s Become an instructor", 'zilom'), '<i class="tutor-icon-man-user"></i> &nbsp;'); ?>
											</a>
										<?php
									}
									$become_button = ob_get_clean();
									
									if($instructor_status=='pending'){
										$on = get_user_meta($user->ID, '_is_tutor_instructor', true);
										$on =  date('d F, Y', $on);
										echo '<span style="'.$info_message_style.'">
											<i class="dashicons dashicons-info" style="color:#E53935; '.$info_style.'"></i>', 
												__('Your Application is pending from', 'zilom'), ' <b>', $on, '</b>',
											'</span>';
									}
									else if($rejected_on || $instructor_status!=='blocked' && !current_user_can(tutor()->instructor_role)){
										echo html_entity_decode($become_button);
									}
								?>
							</div>

							<?php 
								if(
									$instructor_status != 'approved' && 
									$instructor_status != 'pending' && 
									$rejected_on && 
									get_user_meta( get_current_user_id(), 'tutor_instructor_show_rejection_message', true )
								){
									?>
									<div class="tutor-instructor-rejection-notice">
										<?php 
											$on = date('d F, Y', $rejected_on);
											echo '<span>
												<i class="dashicons dashicons-info"></i>', 
												 __('Your application to become an instructor was rejected on', 'zilom') . ' ' . $on .
											 '</span>
											 <a href="?tutor_action=hide_instructor_notice">✕</a>';
										?>
									</div>
									<?php
								}
							?>
						</div>
						<?php do_action('tutor_dashboard/notification_area'); ?>

						<ul class="tutor-dashboard-permalinks">
							<?php
								$dashboard_pages = tutils()->tutor_dashboard_nav_ui_items();
								foreach($dashboard_pages as $dashboard_key => $dashboard_page) {
									$menu_title = $dashboard_page;
									$menu_link = tutils()->get_tutor_dashboard_page_permalink($dashboard_key);
									$separator = false;
									if(is_array($dashboard_page)){
									  	$menu_title = tutils()->array_get('title', $dashboard_page);
									  	//Add new menu item property "url" for custom link
									  	if (isset($dashboard_page['url'])) {
											$menu_link = $dashboard_page['url'];
									  	}
									  	if (isset($dashboard_page['type']) && $dashboard_page['type'] == 'separator') {
											$separator = true;
									  	}
									}
									if($separator){
										echo '<li class="tutor-dashboard-menu-divider"></li>';
										if ($menu_title) {
											echo "<li class='tutor-dashboard-menu-divider-header'>{$menu_title}</li>";
										}
									} else {

										$li_class = "tutor-dashboard-menu-{$dashboard_key}";
										if ($dashboard_key === 'index') $dashboard_key = '';
										$active_class = $dashboard_key == $dashboard_page_slug ? 'active' : '';
										echo "<li class='{$li_class}  {$active_class}'><a href='".$menu_link."'> {$menu_title} </a> </li>";
									}
								}
							?>
						</ul>
					</div>

				 	<div class="tutor-dashboard-content">
					  	<div class="dashboard-content-inner">
					  		<div class="sidebar-mobile">
					  			<a href="#" class="dashboard-control-sidebar btn-theme btn-small">
					  				<i class="las la-bars"></i>
					  				<?php echo esc_html__('Sidebar','zilom'); ?>
					  			</a>
					  		</div>

							<?php
								if ($dashboard_page_name){
									do_action('tutor_load_dashboard_template_before', $dashboard_page_name);

                          	$dashboard_pages = tutils()->tutor_dashboard_nav_ui_items();
									
						
                           if($dashboard_page_name == "my-courses"){
                              if(current_user_can(tutor()->instructor_role)){
                                	$course_type = tutor()->course_post_type;
                                	if ( function_exists( 'tutor_pro' ) ){
                                    do_action( 'tutor_course_create_button' );
                                	}else{
                                    echo "<a class='tutor-btn tutor-btn-outline-primary' href='" . apply_filters('frontend_course_create_url', admin_url("post-new.php?post_type=".tutor()->course_post_type)) . "'>";
                                       echo '<i class="tutor-icon-plus-square tutor-my-n4 tutor-mr-8"></i>';
                                       echo esc_html__('Add A New Course', 'zilom');
                                    echo "</a>";
                                	}
                              }
                           }

                          	$other_location      = '';
									$from_other_location = apply_filters( 'load_dashboard_template_part_from_other_location', $other_location );

									if ( $from_other_location == '' ) {
										tutor_load_template( 'dashboard.' . $dashboard_page_name );
									} else {
										// load template from other location full abspath
										include_once $from_other_location;
									}

									do_action('tutor_load_dashboard_template_before', $dashboard_page_name);
								}else{
									tutor_load_template("dashboard.dashboard");
								}
							?>

							<?php
								if(!$is_by_short_code) {
									get_footer('dashboard');
								}
							?>
					  	</div>    
				 	</div>

				</div>
		</div>
	</div>

<?php do_action('tutor_dashboard/after/wrap'); ?>

	 </div><!--end page content-->
	 
</div><!-- End page -->
</body>
</html>