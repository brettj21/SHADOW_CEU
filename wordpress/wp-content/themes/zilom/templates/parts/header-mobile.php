<?php 
	$zilom_options = zilom_get_options();
?>

<div class="header-mobile header_mobile_screen">
  	
  	<div class="header-mobile-content">
		<div class="header-content-inner clearfix"> 
		 
		  	<div class="header-left">
				<div class="logo-mobile">
					<?php $logo_mobile = (isset($zilom_options['hm_logo']['url']) && $zilom_options['hm_logo']['url']) ? $zilom_options['hm_logo']['url'] : get_template_directory_uri().'/images/logo-mobile.png' ; ?>
				  	<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
					 	<img src="<?php echo esc_url($logo_mobile); ?>" alt="<?php bloginfo( 'name' ); ?>" />
				  	</a>
				</div>
		  	</div>

		  	<div class="header-right">

				<?php if(function_exists('tutor') && zilom_get_option('hm_show_user') == 'yes'){ ?>
					<div class="gva-user">
					   <?php if(is_user_logged_in()){ ?>
					      <?php
					         $user_id = get_current_user_id();
					         $user = get_user_by('ID', $user_id);
					         $dashboard_page_slug = '';
					         $dashboard_page_name = '';
					         if (isset($wp_query->query_vars['tutor_dashboard_page']) && $wp_query->query_vars['tutor_dashboard_page']) {
					             $dashboard_page_slug = $wp_query->query_vars['tutor_dashboard_page'];
					             $dashboard_page_name = $wp_query->query_vars['tutor_dashboard_page'];
					         }
					         /**
					          * Getting dashboard sub pages
					          */
					         if (isset($wp_query->query_vars['tutor_dashboard_sub_page']) && $wp_query->query_vars['tutor_dashboard_sub_page']) {
					            $dashboard_page_name = $wp_query->query_vars['tutor_dashboard_sub_page'];
					            if ($dashboard_page_slug){
					               $dashboard_page_name = $dashboard_page_slug.'/'.$dashboard_page_name;
					            }
					         }
					         $menu_html = '<ul class="tutor-dashboard-permalinks account-dashboard gva-nav-menu listing-account-nav">';
					         
					         if(function_exists('tutor')){
					            $dashboard_pages = tutils()->tutor_dashboard_nav_ui_items();
					            foreach ($dashboard_pages as $dashboard_key => $dashboard_page) {
					               $menu_title = $dashboard_page;
					               $menu_link = tutils()->get_tutor_dashboard_page_permalink($dashboard_key);
					               $separator = false;
					               if (is_array($dashboard_page)){
					                  $menu_title = tutils()->array_get('title', $dashboard_page);
					                  //Add new menu item property "url" for custom link
					                  if (isset($dashboard_page['url'])) {
					                     $menu_link = $dashboard_page['url'];
					                  }
					                  if (isset($dashboard_page['type']) && $dashboard_page['type'] == 'separator') {
					                     $separator = true;
					                  }
					               }
					               if ($separator) {
					                  $menu_html .= '<li class="tutor-dashboard-menu-divider"></li>';
					                  if ($menu_title) {
					                     $menu_html .= "<li class='tutor-dashboard-menu-divider-header'>{$menu_title}</li>";
					                  }
					               } else {
					                  $li_class = "tutor-dashboard-menu-{$dashboard_key}";
					                  $menu_html .= "<li class='{$li_class} '><a href='".$menu_link."'> {$menu_title} </a> </li>";
					               }
					            }
					         }

					         $menu_html .= '</ul>';
					      ?>
					      <div class="login-account">
					         <div class="profile">
					            <a href="#"><i class="icon la la-user-circle-o"></i></a>
					            <div class="name hidden">
					               <span class="user-text">
					                  <?php echo esc_html($user->display_name) ?><i class="icon fas fa-angle-down"></i>
					               </span>
					            </div>
					         </div>  
					         
					         <div class="user-account">
					            <?php echo wp_kses($menu_html, true) ?>
					         </div> 

					      </div>

					   <?php }else{ ?>

					   	<div class="login-account">
					         <div class="profile">
					            <div class="icon">
					               <i class="la la-user-circle-o"></i>
					            </div>
					            <div class="name hidden">
					               <span class="user-text">
					                 <i class="icon fas fa-angle-down"></i>
					               </span>
					            </div>
					         </div>  
					         
					         <div class="user-account">
					            <ul class="tutor-dashboard-permalinks account-dashboard gva-nav-menu">
					            	<li>
					            		<a class="login-link" href="#" data-toggle="modal" data-target="#form-ajax-login-popup">
								            <span class="sign-in-text"><?php echo esc_html__('Sign in', 'zilom') ?></span>
								         </a>
								      </li>
								      <li>
								      	<?php 
							               $register_link = site_url('/wp-login.php?action=register&redirect_to=' . get_permalink()); 
							               if(function_exists('tutor')){
							                  $register_link = tutils()->student_register_url();
							               }
							            ?>
							            <a class="register-link" href="<?php echo esc_url($register_link) ?>">
							               <span class="sign-in-text"><?php echo esc_html__('Register', 'zilom') ?></span>
							            </a>
								      </li>   
					            </ul>
					         </div> 

					      </div>

					   <?php } ?>
					</div>
				<?php } ?>
			 	
				<?php get_template_part('templates/parts/canvas-mobile'); ?>

		  	</div>

		</div>  
  	</div>
</div>