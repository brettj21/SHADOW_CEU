<?php
/**
 * Override for gva-posts grid template.
 * On profession pages, renders courses from CEU_DB instead of WordPress posts.
 * Edit this file to change the Available Courses layout.
 */

// Derive slug from the URL since global query context is not available inside Elementor's render
$uri             = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
$profession_slug = sanitize_key(basename($uri));
$professions     = function_exists('ceu_get_courses') ? unserialize(CEU_PROFESSIONS) : [];

if (isset($professions[$profession_slug])) {
    echo do_shortcode('[ceu_courses profession="' . esc_attr($profession_slug) . '"]');
    return;
}

// Not a profession page — fall back to default gva-posts grid behaviour
$query    = $this->query_posts();
$_random  = gaviasthemer_random_id();
if (!$query->found_posts) return;

$this->add_render_attribute('wrapper', 'class', ['gva-posts-grid clearfix gva-posts']);
$this->get_grid_settings();
?>
    <div <?php echo $this->get_render_attribute_string('wrapper'); ?>>
        <div class="gva-content-items">
            <div <?php echo $this->get_render_attribute_string('grid'); ?>>
                <?php
                global $post;
                $count = 0;
                while ($query->have_posts()) {
                    $query->the_post();
                    $post->loop      = $count++;
                    $post->post_count = $query->post_count;
                    $this->zilom_get_template_part('templates/content/item', $settings['style'], [
                        'thumbnail_size' => $settings['image_size'],
                        'excerpt_words'  => $settings['excerpt_words'],
                    ]);
                }
                ?>
            </div>
        </div>
        <?php if ($settings['pagination'] == 'yes'): ?>
            <div class="pagination">
                <?php echo $this->pagination($query); ?>
            </div>
        <?php endif; ?>
    </div>
<?php wp_reset_postdata();
