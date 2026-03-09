<?php
/**
 * @package TutorLMS/Templates
 * @version 1.5.8
 */
   
   $course_id = get_the_ID();
?>

<div class="course-header-meta">
	<?php
        $is_wishlisted = tutor_utils()->is_wishlisted($course_id);
        $has_wish_list = '';
        if ($is_wishlisted){
            $has_wish_list = 'has-wish-listed';
        }

        $action_class = '';
        if ( is_user_logged_in()){
            $action_class = apply_filters('tutor_wishlist_btn_class', 'tutor-course-wishlist-btn');
        }else{
            $action_class = apply_filters('tutor_popup_login_class', 'cart-required-login');
        }

    	echo '<span class="tutor-course-wishlist">';
            echo '<a href="javascript:;" class="' . esc_attr($action_class) . ' ' . esc_attr($has_wish_list) . ' " data-course-id="' . esc_attr($course_id) . '"><i class="icon far fa-heart"></i></a>';
        echo '</span>';
	?>

    <?php 
        if(get_post_meta( get_the_ID(), 'zilom_course_featured', true)){ 
            echo '<div class="featured-label">' . esc_html__('Featured', 'zilom') . '</div>';
        }
    ?>
</div>
