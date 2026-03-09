<?php 
	$class = 'role-' . $settings['user_role'];
	$avatar = get_avatar_url($user_id, array('size' => 210));
	if(empty($avatar)){
		$avatar = get_template_directory_uri() . '/images/placehoder-user.jpg';
	}

	$tutor_user_social_icons = tutor_utils()->tutor_user_social_icons();
	foreach ($tutor_user_social_icons as $key => $social_icon){
    	$url = get_user_meta($user_id, $key, true);
    	$tutor_user_social_icons[$key]['url']=$url;
	}

	$get_user = tutor_utils()->get_user_by_login($user_name);
	$display_name = isset($get_user->display_name) ? $get_user->display_name : $user_name;
	$is_instructor = tutor_utils()->is_instructor($user_id);

	$profile_bio = get_user_meta($user_id, '_tutor_profile_bio', true);
   $job_title = get_user_meta($user_id, '_tutor_profile_job_title', true);
?>
<div class="profile-block <?php echo esc_attr($class) ?>">
	<div class="user-avatar">
		<a href="<?php echo tutor_utils()->profile_url($user_id); ?>" class="avatar">
			<img src="<?php echo esc_url($avatar); ?>" alt=""/>
		</a>
	</div>

	<div class="profile-content">
		<h3 class="profile-name">
			<a href="<?php echo tutor_utils()->profile_url($user_id, true); ?>">
				<?php echo esc_html($display_name); ?>
			</a>	
		</h3>

		<?php
         if($job_title){
            echo '<div class="profile-sub">' . esc_html( $job_title ) . '</div>';
         }else{
   			if($is_instructor){ 
   				echo '<div class="profile-sub">' . esc_html__( 'Teacher', 'zilom' ) . '</div>';
   			}else{
   				echo '<div class="profile-sub">' . esc_html__( 'Student', 'zilom' ) . '</div>';
   			}
         }
		?>	

		<?php if($is_instructor){ ?>
			<?php  $instructor_rating = tutor_utils()->get_instructor_ratings($user_id); ?>
        	<div class="tutor-loop-rating-wrap">      
            <?php tutor_utils()->star_rating_generator($instructor_rating->rating_avg); ?>
            <span class="tutor-rating-count">
               <?php echo esc_html($instructor_rating->rating_avg); ?>
               <span class="number"><?php echo esc_html($instructor_rating->rating_count) ?></span>
            </span>
        	</div>
      <?php } ?>

      <?php 
      	if($profile_bio){
      		echo '<div class="profile-bio">' . html_entity_decode($profile_bio) . '</div>';
      	}
      ?>

      <div class="meta-bottom">
      	<div class="content-inner">
		      <?php 
		      	if($is_instructor){
		      		$course_count = tutor_utils()->get_course_count_by_instructor($user_id);
		      ?>
			      <div class="meta-item">
			        	<span><?php echo esc_html($course_count); ?></span> 
                  <?php 
                     if($course_count > 1){ 
                        echo esc_html__('Courses', 'zilom');
                     }else{
                        echo esc_html__('Course', 'zilom');
                     }
			        	?>
			      </div>
		                            
		     	<?php 
		      	} else{                            
			         $complete_count = tutor_utils()->get_completed_courses_ids_by_user($user_id);
			         $complete_count = $complete_count ? count($complete_count) : 0;
		      ?>
		    		<div class="meta-item">
		        		<span><?php echo esc_html($complete_count); ?></span> 
                  <?php 
                     if($complete_count > 1){ 
                        echo esc_html__('Courses Completed', 'zilom');
                     }else{
                        echo esc_html__('Course Completed', 'zilom');
                     }
                  ?>
		    		</div>

		      <?php } ?>

				<div class="meta-item profile-socials">
					<?php    
			         foreach ($tutor_user_social_icons as $key => $social_icon){
			            $url = $social_icon['url'];
			            echo !empty($url) ? '<a href="' . esc_url($url) . '" target="_blank" rel="noopener noreferrer nofollow" class="' . esc_attr($social_icon['icon_classes']) . '" title="'.$social_icon['label'].'"></a>' : '';
			         }
			      ?>
				</div>
			</div>	
		</div>	
	</div>
</div>