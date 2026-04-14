<?php
/**
 * Template Name: Profession Courses Page
 * Description: Generic template for all profession pages. Detects the page slug
 *              and pulls the matching courses from CEU_DB automatically.
 *
 * Supported page slugs (must match CEU_PROFESSIONS keys in ceu-courses.php):
 *   nursing, social-workers, mft-lcsw, psychologist, insurance, counselor-addiction
 */

get_header();

$profession_slug = get_post_field('post_name', get_the_ID());
?>

<div id="ceu-page-wrapper">
    <div id="ceu-page-content">

        <h1><?php the_title(); ?></h1>

        <?php echo do_shortcode('[ceu_courses profession="' . esc_attr($profession_slug) . '"]'); ?>

    </div>
</div>

<?php get_footer(); ?>
