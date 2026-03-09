<?php
   use Elementor\Icons_Manager;
   
   $this->add_render_attribute( 'block', 'class', [ 'gva-user', ' text-' . $settings['align'] ] );
   $url_profile = wp_login_url();

   if(empty($settings['text_login_url']['url'])) $settings['text_login_url']['url'] = $url_profile;

?>

<div <?php echo $this->get_render_attribute_string( 'block' ) ?>>
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
            <div class="avata">
               <?php  
                  $user_avatar = get_avatar_url($user_id, array('size' => 90));;
                  $avatar_url = !empty($user_avatar) ? $user_avatar : (get_template_directory_uri() . '/images/placehoder-user.jpg');
               ?>
               <img src="<?php echo esc_url($avatar_url) ?>" alt="<?php echo esc_html($user->display_name) ?>">
            </div>
            <div class="name">
               <span class="user-text">
                  <?php echo esc_html($user->display_name) ?><i class="icon fas fa-angle-down"></i>
               </span>
            </div>
         </div>  
         
         <div class="user-account">
            <?php echo ($menu_html) ?>
         </div> 

      </div>

   <?php }else{ ?>

      <div class="login-register">
         <?php if($settings['selected_icon']){ ?>
            <span class="box-icon">
               <?php Icons_Manager::render_icon( $settings['selected_icon'], [ 'class' => 'icon', 'aria-hidden' => 'true' ] ); ?>
            </span>
         <?php } ?> 

         <?php 
            $link_login_tags = 'href="#" data-toggle="modal" data-target="#form-ajax-login-popup"';
            if(isset($settings['link_login']) && !empty($settings['link_login'])){
               $link_login_tags = 'href="' . esc_url($settings['link_login']) . '"';
            }
            echo '<a '. $link_login_tags . '>';
               echo '<span class="sign-in-text"> ' . ($settings['text_login'] ? $settings['text_login'] : "Login") . '</span>';
            echo '</a>';
         ?>

         <span class="divider">/</span>
         <?php if($settings['enable_register'] == 'yes'){ ?>
            <?php 
               $register_link = site_url('/wp-login.php?action=register&redirect_to=' . get_permalink()); 
               if(function_exists('tutor')){
                  $register_link = tutils()->student_register_url();
               }
               $register_link = !empty($settings['link_register']) ? $settings['link_register'] : $register_link;
            ?>

            <a class="register-link" href="<?php echo esc_url($register_link) ?>">
               <span class="sign-in-text"><?php echo ($settings['text_register'] ? $settings['text_register'] : "Register"); ?></span>
            </a>
         <?php } ?>
      </div>
         
   <?php } ?>
</div>