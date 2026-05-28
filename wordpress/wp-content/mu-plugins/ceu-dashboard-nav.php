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
 * Available keys (all default Tutor LMS items):
 *   index            → Dashboard
 *   my-profile       → My Profile
 *   enrolled-courses → Enrolled Courses
 *   reviews          → Reviews
 *   my-quiz-attempts → My Quiz Attempts
 *   purchase_history → Order History
 *   question-answer  → Question & Answer
 *   settings         → Settings
 *   logout           → Logout
 */

// ── 1. Modify the nav items ───────────────────────────────────────────────────

// ceu_is_logged_in() is defined in ceu-auth.php (loads first alphabetically).
// Returns true only for users who logged in via the CEU frontend form.
// WP admins logged in via wp-admin get the default Tutor dropdown unchanged.

add_filter('tutor_dashboard/nav_ui_items', function ($items) {
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return $items;

    // Items to REMOVE
    $remove = [
        'index',
        'reviews',
        //'enrolled-courses',
        'purchase_history',
        'my-quiz-attempts',
        'question-answer',
    ];
    foreach ($remove as $key) {
        unset($items[$key]);
    }

    // Items to RENAME (keep existing icon)
    $rename = [
        //'index'            => 'My Dashboard',
        'enrolled-courses' => 'My Certificates',
        //'purchase_history' => 'My Certificates',
    ];
    foreach ($rename as $key => $label) {
        if (isset($items[$key])) {
            if (is_array($items[$key])) {
                $items[$key]['title'] = $label;
            } else {
                $items[$key] = $label;
            }
        }
    }

    // Custom items — insert before Settings/Logout
    // Each entry: 'slug' => ['title' => '...', 'icon' => 'tutor-icon-...']
    // The slug becomes the li class: tutor-dashboard-menu-{slug}
    // Add Font Awesome CSS for each custom icon in section 2 below.
    $custom = [
        // 'ceu-certificates' => [
        //     'title' => 'My Certificates',
        //     'icon'  => 'tutor-icon-bookmark-bold', // Tutor icon, or add FA CSS below
        // ],
        // 'ceu-support' => [
        //     'title' => 'Support',
        //     'icon'  => 'tutor-icon-question',
        // ],
    ];

    if (!empty($custom)) {
        $settings_pos = array_search('settings', array_keys($items));
        if ($settings_pos !== false) {
            $before = array_slice($items, 0, $settings_pos, true);
            $after  = array_slice($items, $settings_pos, null, true);
            $items  = array_merge($before, $custom, $after);
        } else {
            $items = array_merge($items, $custom);
        }
    }

    return $items;
});

// ── 2. Custom icons via Font Awesome CSS ──────────────────────────────────────
// For each custom slug above, add a CSS rule that targets:
//   .tutor-dashboard-menu-{slug} a::before
// Font Awesome 5 "content" codes: https://fontawesome.com/icons
// Example for 'ceu-certificates' using fa-certificate (\f0a3)
// and 'ceu-support' using fa-headset (\f590).

// ── 3. Override individual dropdown item URLs ─────────────────────────────────
// Tutor builds each href as base_url + key — there is no per-item filter.
// We capture the rendered header HTML and do string replacements before output.
//
// Add the items you want to change to $url_map below.
// Keys match the Tutor slug (same keys used in sections 1 and 2).
// Leave $url_map empty to skip URL overriding entirely.

$url_map = [
    //'index'            => home_url('/user/'),             // My Dashboard
    'my-profile'       => home_url('/user/'),     // My Profile
    'enrolled-courses' => home_url('/user-2/'),  // My Courses
    'logout'           => home_url('/logout/'),
    //purchase_history' => home_url('/user-2/'),      // Purchase History
    // 'settings'         => home_url('/user/settings/'),    // Settings
];

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
