<?php

/**
 * Course loop show view cart if in added to.
 *
 * @since v.1.7.5
 * @author themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.7.5
 */
?>

<div class="course-loop-price">
    <?php
    $course_id = get_the_ID();
    $cart_url = function_exists('wc_get_cart_url') ? wc_get_cart_url() : '#';
    $enroll_btn = '<div  class="tutor-loop-cart-btn-wrap"><a class="added_to_cart" href="' . esc_url($cart_url) .'">' . esc_html__('View Cart', 'zilom') . '</a></div>';
    echo html_entity_decode($enroll_btn);
    ?>
</div>