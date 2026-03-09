<?php
/**
 * Course Loop Start
 *
 * @since v.1.0.0
 * @author themeum
 * @url https://themeum.com
 *
 * @package TutorLMS/Templates
 * @version 1.4.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$shortcode_arg = isset($GLOBALS['tutor_shortcode_arg']) ? $GLOBALS['tutor_shortcode_arg']['column_per_row'] : null;
//$courseCols = $shortcode_arg===null ? tutor_utils()->get_option( 'courses_col_per_row', 4 ) : $shortcode_arg;

$column_lg = isset($_POST['course_column_lg']) && $_POST['course_column_lg'] ? $_POST['course_column_lg'] : zilom_get_option('course_column_lg', '3');
$column_md = isset($_POST['course_column_md']) && $_POST['course_column_md'] ? $_POST['course_column_md'] : zilom_get_option('course_column_md', '2');
$column_sm = isset($_POST['course_column_sm']) && $_POST['course_column_sm'] ? $_POST['course_column_sm'] : zilom_get_option('course_column_sm', '2');
$column_xs = isset($_POST['course_column_xs']) && $_POST['course_column_xs'] ? $_POST['course_column_xs'] : zilom_get_option('course_column_xs', '1');
$classes = array();
$classes[] = 'lg-block-grid-'. esc_attr($column_lg);
$classes[] = 'md-block-grid-' . esc_attr($column_md);
$classes[] = 'sm-block-grid-' . esc_attr($column_sm);
$classes[] = 'xs-block-grid-' . esc_attr($column_xs);
?>

<div class="tutor-courses tutor-courses-loop-wrap <?php echo esc_attr(implode(' ', $classes)) ?>">