<?php

/**
 * Course loop continue when enrolled
 *
 * @since v.1.7.4
 * @author themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.7.4
 */
?>

<div class="tutor-loop-cart-btn-wrap">
    <?php
        $course_id = get_the_ID();
        $enroll_btn = '<div  class="tutor-loop-cart-btn-wrap"><a class="added_to_cart" href="'. get_the_permalink(). '">' . esc_html__('Continue Course', 'zilom') . '</a></div>';
        echo html_entity_decode($enroll_btn);
    ?>
</div>