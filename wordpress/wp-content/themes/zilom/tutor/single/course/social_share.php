<?php
/**
 * Template for displaying social share
 *
 * @since v.1.0.4
 *
 * @author Themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */


$share_config = array(
	'title' => get_the_title(),
	'text'  => get_the_excerpt(),
	'image' => get_tutor_course_thumbnail('post-thumbnail', true),
);
?>

<div class="course-single-share">
   <a href="#" class="btn-gray-icon btn-control-share"><i class="fas fa-share"></i> <?php echo esc_html__('Share', 'zilom') ?></a>
   <div class="course-share-content">
      <div class="tutor-social-share-wrap" data-social-share-config="<?php echo esc_attr(wp_json_encode($share_config)); ?>">
         <?php
            foreach ($tutor_social_share_icons as $icon){
               echo "<button class='tutor_share {$icon['share_class']}'> {$icon['icon_html']} </button>";
            }
         ?>
      </div>
   </div>   
</div>