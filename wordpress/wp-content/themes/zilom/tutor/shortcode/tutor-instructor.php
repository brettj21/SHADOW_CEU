<div class="tutor-courses tutor-courses-loop-wrap tutor-courses-layout-<?php echo esc_attr($column_count); ?>">
    <?php
        foreach($instructors as $instructor){

            $course_count = tutor_utils()->get_course_count_by_instructor($instructor->ID);
            $instructor_rating = tutor_utils()->get_instructor_ratings($instructor->ID);
            ?>
            <div class="tutor-course-col-<?php echo esc_attr($column_count); ?>">
                <a href="<?php echo tutor_utils()->profile_url($instructor->ID); ?>" class="tutor-course tutor-course-loop tutor-instructor-list tutor-instructor-list-<?php echo esc_attr($layout); ?> tutor-instructor-list-<?php echo esc_attr($instructor->ID); ?>">
                    <div class="tutor-instructor-cover-photo" style="background-image:url(<?php echo tutor_utils()->get_cover_photo_url($instructor->ID); ?>)"></div>
                    <div class="tutor-instructor-profile-photo" style="background-image:url(<?php echo get_avatar_url($instructor->ID, array('size'=>500)); ?>)"></div>                    
                    <div class="tutor-instructor-rating">
                        <div class="ratings">
                            <span class="rating-generated">
                                <?php tutor_utils()->star_rating_generator($instructor_rating->rating_avg); ?>
                            </span>

                            <?php
                            echo " <span class='rating-digits'>{$instructor_rating->rating_avg}</span> ";
                            echo " <span class='rating-total-meta'>({$instructor_rating->rating_count})</span> ";
                            ?>
                        </div>
                    </div>
                    <h4 class="tutor-instructor-name"><?php echo esc_html($instructor->display_name); ?></h4>
                    <div class="tutor-instructor-course-count">
                        <span><?php echo esc_html($course_count); ?></span>
                        <span>
                            <?php 
                                if($course_count > 1){
                                    echo esc_html__('Courses', 'zilom');
                                }else{
                                   echo esc_html__('Course', 'zilom');
                                } 
                            ?>
                        </span>
                    </div>
                </a>
            </div>
            <?php
        }

        if(!count($instructors)){
            echo '<div class="alert alert-info">', esc_html__('No Instructor Found', 'zilom'), '</div>';
        }
    ?>
</div>

<?php
    if($previous_page || $next_page) {
        $prev_url = !$show_filter ? '?instructor-page=' . esc_url($previous_page) : '#';
        $next_url = !$show_filter ? '?instructor-page='. esc_url($next_page) : '#';
        ?>
        <div class="tutor-pagination-wrap">
            <?php 
                echo esc_html($previous_page) ? '<a class="page-numbers" href="' . esc_url($prev_url) . '" data-page_number="' . esc_attr($previous_page) . '">« ' . esc_html__('Previous', 'zilom') . '</a>' : '';
                echo esc_html($next_page) ? '&nbsp; <a class="next page-numbers" href="' . esc_url($next_url) . '" data-page_number="' . esc_attr($next_page) . '">' . esc_html__('Next', 'zilom') . ' »</a>' : '';
            ?> 
        </div>
        <?php
    }
?>