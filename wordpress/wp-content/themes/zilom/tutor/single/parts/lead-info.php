<?php
   global $post, $authordata;
   $profile_url = tutor_utils()->profile_url($authordata->ID);
   $course_id = get_the_ID();
?>

<div class="tutor-single-course-meta tutor-meta-top">
    <?php
        $disable_course_author = get_tutor_option('disable_course_author');
        $disable_course_level = get_tutor_option('disable_course_level');
        $disable_update_date = get_tutor_option('disable_course_update_date');
    ?>
    <?php if ( !$disable_course_author || !$disable_update_date){ ?>
        <div class="tutor-single-course-author-meta">
            <?php if(!$disable_course_author){ ?>
                <div class="author-information">
                    <div class="course-avatar">
                        <a href="<?php echo esc_url($profile_url); ?>"> <?php echo tutor_utils()->get_tutor_avatar($post->post_author); ?></a>
                    </div>
                    <div class="course-author-name">
                        <a href="<?php echo tutor_utils()->profile_url($authordata->ID); ?>"><?php echo get_the_author(); ?></a>
                    </div>
                </div>
                    <div class="line">/</div>
            <?php } ?>    
                
            <?php if( !$disable_update_date){ ?>
                <div class="course-last-update">
                    <span><?php esc_html__('Last Update', 'zilom') ?></span>
                    <?php echo esc_html(get_the_modified_date()); ?>
                </div>    
            <?php } ?>
        </div>
    <?php } ?>

    <div class="course-single-action">
        <div class="course-single-wishlist">
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
            echo '<span class="tutor-course-wishlist"><a href="javascript:;" class="btn-gray-icon '.$action_class.' '.$has_wish_list.' " data-course-id="'.$course_id.'">';
                echo '<i class="icon far fa-heart"></i>';
                echo esc_html__('Wishlist', 'zilom');
            echo '</a> </span>';
            ?>
        </div>

        <?php if (tutor_utils()->get_option('enable_course_share', false, true, true)) { ?>
            <div class="tutor-social-share">
                <?php tutor_load_template_from_custom_path(tutor()->path . '/views/course-share.php', array(), false); ?>
            </div>
        <?php } ?>
    </div>    

</div>

<?php do_action('tutor_course/single/title/before'); ?>
<h2 class="course-single-title"><?php the_title(); ?></h2>
<?php do_action('tutor_course/single/title/after'); ?>

<div class="course-single-top-meta">

  <?php
  $disable = get_tutor_option('disable_course_review');
  if ( !$disable ){ ?>
        <div class="tutor-single-course-rating">
            <?php
            $course_rating = tutor_utils()->get_course_rating();
            tutor_utils()->star_rating_generator($course_rating->rating_avg);
            ?>
            <span class="tutor-rating-count">
                <?php
                echo esc_html($course_rating->rating_avg);
                echo '<span class="number">' . $course_rating->rating_count . '</span>';
                ?>
            </span>
        </div>
  <?php } ?>

    <?php
        $disable_total_enrolled = get_tutor_option('disable_course_total_enrolled');
        if( !$disable_total_enrolled){ ?>
            <div class="course-total-enrolled">
                <span class="icon"><i class="fas fa-user-friends"></i></span>
                <?php echo (int) tutor_utils()->count_enrolled_users_by_course(); ?>
                <span><?php echo esc_html__('Enrolled', 'zilom') ?></span>
            </div>
    <?php } ?>

    <?php
        $course_categories = get_tutor_course_categories();
        if(is_array($course_categories) && count($course_categories)){ ?>
            <div class="course-category">
                <span class="icon"><i class="fas fa-tags"></i></span>
                <?php
                    $i = 0;
                    foreach ($course_categories as $course_category){
                        $i++;
                        $category_name = $course_category->name;
                        $category_link = get_term_link($course_category->term_id);
                        echo "<a href='$category_link'>$category_name</a>";
                        if($i < count($course_categories)){
                            echo ", ";
                        }
                    }
                ?>
            </div>
    <?php } ?>

</div>

<?php do_action('tutor_course/single/lead_meta/before'); ?>

<?php do_action('tutor_course/single/lead_meta/after'); ?>

