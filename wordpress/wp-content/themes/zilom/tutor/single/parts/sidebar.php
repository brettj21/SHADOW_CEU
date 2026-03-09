<?php

$course_id = get_the_ID();
$layout = tutor_utils()->get_course_settings($course_id, 'single_layout');
$layout = empty($layout) || $layout == '-1' ? 'layout-1' : $layout;

if($layout == 'layout-3' || $layout == 'layout-4'){
   tutor_load_template( 'single.course.course-thumbnail' );
}

tutor_load_template('single.course.course-entry-box');

get_template_part( 'tutor/single/course/course', 'meta' );
tutor_course_requirements_html();
tutor_course_tags_html(); 
tutor_course_target_audience_html();
