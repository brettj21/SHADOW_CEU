<?php
/**
 * Plugin Name: CEU Page Tweaks
 * Description: Small CSS corrections to Elementor-authored sections, kept in
 *              version control rather than in the page database.
 *
 * WHY THIS FILE EXISTS
 * ────────────────────
 * Everything in here could equally be set in Elementor's own controls. It lives
 * in code because the Elementor values sit in the database, which is not in this
 * repo — so a change made in the editor is invisible to code review, invisible to
 * git blame, and lost if a page is ever rebuilt from a backup of a different age.
 *
 * THE TRADE-OFF — READ BEFORE ADDING TO THIS FILE
 * ───────────────────────────────────────────────
 * Elementor writes per-element CSS at high specificity:
 *
 *     .elementor-4291 .elementor-element.elementor-element-85de88e { padding: … }
 *
 * Overriding that needs !important, and !important means THE ELEMENTOR CONTROL
 * FOR THAT PROPERTY STOPS WORKING. Someone editing the section's padding in the
 * editor will watch the number change and the page not move, with nothing on
 * screen explaining why. That is a genuinely nasty half hour for whoever hits it.
 *
 * So: only put something here when it needs to be versioned. Anything else
 * belongs in Elementor, where the next person will look for it first.
 *
 * Each rule below names the page and element it targets, so an orphaned rule can
 * be recognised and deleted once its section is gone.
 */

// /user/ — the top section (class row-top, element 85de88e), which opens the page
// above the profile card and the coursework block. Its authored padding left a
// large empty band under the site header.
if (!defined('CEU_USER_TOP_PADDING')) {
    define('CEU_USER_TOP_PADDING', '50px');
}

add_action('wp_head', function () {
    // Late priority so this prints after Elementor's enqueued page stylesheet.
    ?>
    <style>
    /* /user/ top section — see CEU_USER_TOP_PADDING in ceu-page-tweaks.php.
       !important is required to beat Elementor's own per-element rule, which
       also means the padding control for this section no longer has any effect
       in the editor. Change the value here, not there. */
    .elementor-element.elementor-element-85de88e {
        padding-top: <?= esc_html(CEU_USER_TOP_PADDING) ?> !important;
    }
    </style>
    <?php
}, 99);

// ─── Header: never fall through to the theme's bare default ──────────────────
//
// The theme picks a header per page. zilom_get_header_layout() reads the
// 'zilom_page_header' post meta, falls back to the site-wide header_layout
// option, and finally to the string 'main-menu'. Whatever it lands on is looked
// up as a gva_header post; if that lookup fails, header.php renders
// header-default.php.
//
// On this site the site-wide option is empty, so anything WITHOUT an explicit
// per-page header meta gets header-default.php — which has no blue top bar and
// takes its logo from the theme options, still the Zilom demo logo. Pages built
// in Elementor each carry the meta and look right; everything else does not.
// That is why the cart, the checkout and now every imported blog post and the
// post archive came out branded "Zilom" with no top bar.
//
// Rather than stamping the meta onto each page — which puts the fix in the
// database, where it is invisible to review and lost on a rebuild — this fills
// the gap the theme leaves: when the theme's answer does not name a real header,
// use the one the FRONT PAGE uses. So every page matches the home page unless it
// deliberately says otherwise, which is what the per-page control is for.

function ceu_site_header_layout(): string {
    $header = '';

    $front_id = (int) get_option('page_on_front');
    if ($front_id) {
        $meta = get_post_meta($front_id, 'zilom_page_header', true);
        if ($meta && $meta !== '__default_option_theme') $header = (string) $meta;
    }

    if ($header === '' && function_exists('zilom_get_option')) {
        $header = (string) zilom_get_option('header_layout', '');
    }

    // Only useful if it exists as a gva_header post; otherwise header.php would
    // fall through to header-default.php anyway and nothing would change.
    if ($header !== '' && function_exists('get_page_by_path')) {
        if (!get_page_by_path($header, OBJECT, 'gva_header')) return '';
    }

    return $header;
}

add_filter('zilom_get_header_layout', function ($header) {
    // The theme already resolved a real header — a page with its own setting.
    // Leave it alone; that control still works.
    if ($header && function_exists('get_page_by_path')
        && get_page_by_path($header, OBJECT, 'gva_header')) {
        return $header;
    }

    $site = ceu_site_header_layout();
    return $site !== '' ? $site : $header;
}, 20);

/**
 * ?ceu_debug=header — why this page has the header it has.
 * Administrator-only, matching the debug block in ceu-auth.php.
 */
add_action('wp_footer', function () {
    if (($_GET['ceu_debug'] ?? '') !== 'header') return;
    if (!function_exists('current_user_can') || !current_user_can('manage_options')) return;

    $post_id  = get_queried_object_id();
    $front_id = (int) get_option('page_on_front');
    $row = fn($k, $v) => '  ' . str_pad($k, 34) . (is_scalar($v) ? (string) $v : gettype($v)) . "\n";
    $final = apply_filters('zilom_get_header_layout', null);

    echo '<pre style="position:fixed;bottom:0;left:0;right:0;background:#111;color:#0f0;'
       . 'padding:12px;font-size:12px;z-index:2147483647;max-height:50vh;overflow:auto;">';
    echo "CEU header diagnosis\n\n";
    echo $row('request path', trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/'));
    echo $row('queried object id', $post_id ?: '(none — archive/home)');
    echo $row('  its zilom_page_header', $post_id ? (get_post_meta($post_id, 'zilom_page_header', true) ?: '(empty)') : '-');
    echo $row('front page id', $front_id ?: '(none)');
    echo $row('  its zilom_page_header', $front_id ? (get_post_meta($front_id, 'zilom_page_header', true) ?: '(empty)') : '-');
    echo $row('theme option header_layout', function_exists('zilom_get_option') ? (zilom_get_option('header_layout', '') ?: '(empty)') : '(fn missing)');
    echo $row('ceu_site_header_layout()', ceu_site_header_layout() ?: '(empty — filter stands aside)');
    echo $row('FINAL header slug', $final ?: '(empty)');
    echo $row('  exists as gva_header?', ($final && get_page_by_path($final, OBJECT, 'gva_header')) ? 'YES → header-builder' : 'NO → header-default (no top bar)');

    $headers = get_posts(['post_type' => 'gva_header', 'numberposts' => 20, 'post_status' => 'any']);
    echo "\n  gva_header posts on this site:\n";
    if (!$headers) echo "    (none — every page falls back to header-default.php)\n";
    else foreach ($headers as $h) echo "    - {$h->post_name}  ({$h->post_status})\n";
    echo '</pre>';
}, 999);
