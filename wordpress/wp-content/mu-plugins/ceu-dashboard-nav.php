<?php
/**
 * Plugin Name: CEU Dashboard Nav
 * Description: Controls the Tutor LMS user dropdown menu (the "Bret Johnson ▾"
 *              header dropdown). Safe from WordPress/Tutor updates (MU Plugin).
 *
 * HOW ICONS WORK
 * ──────────────
 * Icons are CSS-driven. Tutor LMS applies ::before pseudo-elements to each
 * list item via its class name: .tutor-dashboard-menu-{key} a::before
 *
 * Built-in Tutor LMS icon classes (use in 'icon' key — works on dashboard page):
 *   tutor-icon-dashboard      tutor-icon-user-bold       tutor-icon-mortarboard-o
 *   tutor-icon-star-bold      tutor-icon-quiz-attempt    tutor-icon-cart-bold
 *   tutor-icon-question       tutor-icon-gear            tutor-icon-signout
 *   tutor-icon-bookmark-bold  tutor-icon-rocket          tutor-icon-wallet
 *
 * For CUSTOM items in the HEADER DROPDOWN, add Font Awesome CSS below —
 * Font Awesome is already loaded on the site.
 *
 * TUTOR 4.0 BREAKING CHANGE (upgraded from 3.9.12 — Aug 2026)
 * ──────────────────────────────────────────────────────────
 * Tutor 4.0 rewrote the dashboard nav. The old keys this file used to target
 * are gone, which silently blanked the whole dropdown:
 *
 *   3.9.12 key        → 4.0 status
 *   index             → still 'index' (now titled "Home")
 *   my-profile        → moved under hidden 'account' page (account/profile)
 *   enrolled-courses  → renamed 'courses'
 *   reviews           → moved under 'account' page
 *   my-quiz-attempts  → gone (instructor-only 'quiz-attempts')
 *   purchase_history  → gone (now account/billing)
 *   question-answer   → replaced by 'discussions'
 *   wishlist          → REMOVED FROM TUTOR CORE entirely
 *   settings          → moved under 'account' page; 'bottom_nav_items' filter deleted
 *   logout            → same, no longer a nav item
 *
 * Tutor 4.0 now ships only: index, courses, discussions (+ hidden account,
 * retrieve-password). So rather than patching individual keys, section 1
 * discards Tutor's list and declares the dropdown outright.
 *
 * Slugs below are deliberately the OLD pre-4.0 names — the Zilom theme already
 * styles .tutor-dashboard-menu-{slug} a::before for each, so the original
 * icons keep working with no extra CSS.
 */

// ── 1. Modify the nav items ───────────────────────────────────────────────────

// ceu_is_logged_in() is defined in ceu-auth.php (loads first alphabetically).
// Returns true only for users who logged in via the CEU frontend form.
// WP admins logged in via wp-admin get the default Tutor dropdown unchanged.

add_filter('tutor_dashboard/nav_ui_items', function ($items) {
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return $items;

    // Settings now lives at {dashboard}/account/settings in Tutor 4.0.
    $settings_url = class_exists('\TUTOR\Dashboard')
        ? \TUTOR\Dashboard::get_account_page_url('settings')
        : home_url('/dashboard/account/settings/');

    // THE DROPDOWN — declared outright, in display order.
    //
    // 'title' → link text
    // 'url'   → honoured by BOTH renderers: the theme header dropdown
    //           (themes/zilom/templates/parts/header-mobile.php) and Tutor's own
    //           dashboard sidebar. Set it here; no JS rewriting needed.
    // 'icon'  → Tutor 4.0 SVG icon name (see classes/Icon.php constants). Used by
    //           the dashboard sidebar. The header dropdown uses the theme's CSS
    //           icons keyed off the slug instead.
    //
    // To add an item, add an entry. If you use a slug the theme has no icon CSS
    // for, add a Font Awesome rule in section 4 below.
    return [
        'my-profile' => [
            'title' => 'My Profile',
            'url'   => home_url('/user/'),
            'icon'  => 'user-circle',
        ],
        'enrolled-courses' => [
            'title' => 'My Certificates',
            'url'   => home_url('/user-2/'),
            'icon'  => 'certificate',
        ],
        'settings' => [
            'title' => 'Settings',
            'url'   => $settings_url,
            'icon'  => 'setting',
        ],
        'logout' => [
            'title' => 'Logout',
            'url'   => home_url('/logout/'),
            'icon'  => 'logout',
        ],
    ];
});

// ── 2. Custom icons via Font Awesome CSS ──────────────────────────────────────
// For each custom slug above, add a CSS rule that targets:
//   .tutor-dashboard-menu-{slug} a::before
// Font Awesome 5 "content" codes: https://fontawesome.com/icons
// Example for 'ceu-certificates' using fa-certificate (\f0a3)
// and 'ceu-support' using fa-headset (\f590).

// ── 3. Client-side URL fallback ───────────────────────────────────────────────
// Rewrites dropdown hrefs in the browser, matched by the li class
// (.tutor-dashboard-menu-{slug}).
//
// Since the Tutor 4.0 rebuild this is NO LONGER needed for the dropdown itself —
// every item sets its URL directly via the 'url' key in section 1, and both
// renderers honour it. $url_map is therefore empty on purpose.
//
// The script still runs, because its other job is live: cleaning Tutor's ugly
// ?page_id=N hrefs into clean slug URLs elsewhere on the page.
//
// Only add entries here for links you cannot reach from the section 1 filter.
// Keys are Tutor slugs, values are the final URL.
$url_map = [];

// Fix Tutor dropdown URLs via JavaScript — targets li classes directly so it
// works regardless of how get_permalink() generates the ugly ?page_id= URL.

add_action('wp_footer', function () use ($url_map) {
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return;
    if (!function_exists('tutils')) return;

    $page_id = (int) tutils()->get_option('tutor_dashboard_page_id');
    if (!$page_id) return;

    $page      = get_post($page_id);
    $slug      = ($page && $page->post_name) ? $page->post_name : '';
    $overrides = $url_map; // key → final URL
    ?>
    <script>
        (function () {
            var pageId    = <?= json_encode((string) $page_id) ?>;
            var slug      = <?= json_encode($slug) ?>;
            var overrides = <?= json_encode($overrides) ?>;

            function fixLinks() {
                // All Tutor dropdown links live inside .account-dashboard
                document.querySelectorAll('.account-dashboard a').forEach(function (a) {
                    var li = a.closest('li');
                    if (!li) return;

                    // 1. Fix ?page_id=X to clean slug URL
                    if (slug && a.href.indexOf('page_id=' + pageId) !== -1) {
                        a.href = a.href.replace(
                            new RegExp('[?&]page_id=' + pageId + '\\/?'),
                            '/' + slug + '/'
                        );
                    }

                    // 2. Apply explicit $url_map overrides by li class
                    Object.keys(overrides).forEach(function (key) {
                        var cls = key === 'index'
                            ? 'tutor-dashboard-menu-index'
                            : 'tutor-dashboard-menu-' + key;
                        if (li.classList.contains(cls)) {
                            a.href = overrides[key];
                        }
                    });
                });
            }

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', fixLinks);
            } else {
                fixLinks();
            }
        })();
    </script>
    <?php
}, 20);

// ── 4. Custom icons via Font Awesome CSS ──────────────────────────────────────
// For each custom slug above, add a CSS rule that targets:
//   .tutor-dashboard-menu-{slug} a::before
// Font Awesome 5 "content" codes: https://fontawesome.com/icons
// Example for 'ceu-certificates' using fa-certificate (\f0a3)
// and 'ceu-support' using fa-headset (\f590).

add_action('wp_head', function () {
    ?>
    <style>
        /* ── Custom dashboard nav icons (Font Awesome 5 Free solid) ── */

        /* Example — uncomment when you add custom items above:

        .tutor-dashboard-menu-ceu-certificates a::before {
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            content: "\f0a3";   /* fa-certificate */
        }

        .tutor-dashboard-menu-ceu-support a::before {
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            content: "\f590";   /* fa-headset */
        }

        */
    </style>
    <?php
});
