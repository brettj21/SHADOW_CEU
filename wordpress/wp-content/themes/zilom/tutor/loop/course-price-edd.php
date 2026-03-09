<?php

/**
 * Course loop price
 *
 * @since v.1.0.0
 * @author themeum
 * @url https://themeum.com
 *
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */
?>

<div class="course-loop-price">
    <?php
    $course_id = get_the_ID();
    $enroll_btn = '<div  class="tutor-loop-cart-btn-wrap">' . apply_filters( 'tutor_course_restrict_new_entry', '<a href="'. get_the_permalink(). '">'.__('Get Enrolled', 'zilom'). '</a>' ) . '</div>';
    $price_html = '<div class="price"> ' . esc_html__('Free', 'zilom') . $enroll_btn . '</div>';
    if (tutor_utils()->is_course_purchasable()) {
	    $enroll_btn = tutor_course_loop_add_to_cart(false);

	    $product_id = tutor_utils()->get_course_product_id($course_id);
	    $price_html = '<div class="price"> ' . apply_filters( 'tutor_course_restrict_new_entry', $enroll_btn ) . ' </div>';
    }

    echo wp_kses($price_html, true);
    ?>
</div>