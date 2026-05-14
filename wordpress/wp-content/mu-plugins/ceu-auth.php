<?php
/**
 * Plugin Name: CEU Authentication
 * Description: Authenticates users against CEU_USER (SHA-256). Sets CEU-compatible
 *              session/cookie data. Shows logged-in name in header. Safe from
 *              WordPress core updates (MU Plugin — never auto-deleted).
 *
 * Depends on: ceu_db_connect() from ceu-courses.php (loaded after this file
 *             alphabetically, but all MU plugins are fully loaded before any
 *             hook fires, so the function is always available at call time).
 */

// ─── Session Bootstrap ────────────────────────────────────────────────────────
// Start a PHP session on every request so CEU session data persists.
// Priority 1 = runs before almost everything else on init.

add_action('init', function () {
    if (!session_id() && !headers_sent()) {
        session_start();
    }
}, 1);

// ─── Authentication ───────────────────────────────────────────────────────────
// Priority 30 runs after WP's built-in checks (priority 20).
// If WP already authenticated the user (admin with a real WP password) we leave
// it alone. For everyone else we try CEU_USER with SHA-256.

add_filter('authenticate', function ($user, $username, $password) {

    // Already authenticated — don't interfere (covers WP admins).
    if ($user instanceof WP_User) return $user;

    if (empty($username) || empty($password)) return $user;

    $db = ceu_db_connect();
    if (!$db) return $user;

    $stmt = $db->prepare('SELECT * FROM CEU_USER WHERE EMAIL = ? AND PASS = ?');
    $hash = hash('sha256', $password);
    $stmt->bind_param('ss', $username, $hash);
    $stmt->execute();
    $ceu = $stmt->get_result()->fetch_assoc();
    $stmt->close();

    if (!$ceu) {
        return new WP_Error('ceu_bad_login', __('The email or password you entered is incorrect.'));
    }

    // Get or create a matching WordPress user record.
    $wp_user = get_user_by('email', $ceu['EMAIL']);
    if (!$wp_user) {
        $uid = wp_create_user(
            $ceu['EMAIL'],
            wp_generate_password(32, true, true), // random; CEU auth is always used
            $ceu['EMAIL']
        );
        if (is_wp_error($uid)) return $uid;
        $wp_user = get_user_by('ID', $uid);
    }

    // Sync name so WP display_name matches CEU FIRST/LAST.
    $display = trim($ceu['FIRST'] . ' ' . $ceu['LAST']) ?: $ceu['EMAIL'];
    wp_update_user([
        'ID'           => $wp_user->ID,
        'display_name' => $display,
        'first_name'   => $ceu['FIRST'],
        'last_name'    => $ceu['LAST'],
    ]);

    // Cache the full CEU_USER row in user meta for session hydration.
    update_user_meta($wp_user->ID, '_ceu_id',  $ceu['ID']);
    update_user_meta($wp_user->ID, '_ceu_pro', $ceu['PROFESSION']);
    update_user_meta($wp_user->ID, '_ceu_row', maybe_serialize($ceu));

    return get_user_by('ID', $wp_user->ID);

}, 30, 3);

// ─── Set CEU Session + Cookies After Login ────────────────────────────────────
// Mirrors CEU's exact cookie/session structure so any legacy CEU code that
// runs on this site finds the same data it expects.
//
// CEU structure:
//   $_SESSION['session_data'][0]  = full CEU_USER row
//   cookie 'ceu'        = user ID
//   cookie 'ceuSession' = SHA-256 hashed password
//   cookie 'pro'        = profession

add_action('wp_login', function ($login, $wp_user) {

    $raw = get_user_meta($wp_user->ID, '_ceu_row', true);
    if (!$raw) return;
    $ceu = maybe_unserialize($raw);

    if (!session_id()) session_start();
    $_SESSION['session_data'] = [$ceu];

    $exp = mktime(0, 0, 0, 12, 31, (int) date('Y') + 1);
    setcookie('ceu',        (string) $ceu['ID'],         $exp, '/');
    setcookie('ceuSession', (string) $ceu['PASS'],       $exp, '/');
    setcookie('pro',        (string) $ceu['PROFESSION'],  $exp, '/');

}, 10, 2);

// ─── Restore CEU Session on Subsequent Requests ───────────────────────────────
// PHP sessions survive across requests only when the session file still exists.
// Re-hydrate from user meta whenever a WP auth cookie is present but the CEU
// session array is missing (e.g. after a server restart).

add_action('init', function () {
    if (!is_user_logged_in()) return;
    if (!empty($_SESSION['session_data'])) return;

    $raw = get_user_meta(get_current_user_id(), '_ceu_row', true);
    if (!$raw) return;

    $_SESSION['session_data'] = [maybe_unserialize($raw)];
}, 5);

// ─── Clear CEU Session + Cookies on Logout ───────────────────────────────────

add_action('wp_logout', function () {
    if (session_id()) {
        unset($_SESSION['session_data']);
    }
    foreach (['ceu', 'ceuSession', 'pro'] as $name) {
        setcookie($name, '', time() - 3600, '/');
    }
});

// ─── Nav Menu: Remove Sign In / Register When Logged In ──────────────────────
// Works on the menu object array before HTML is generated, so it's reliable
// regardless of how the item title is styled or linked.

add_filter('wp_nav_menu_objects', function ($items, $args) {
    if (!isset($args->theme_location) || $args->theme_location !== 'primary') {
        return $items;
    }
    if (!is_user_logged_in()) return $items;

    $remove = ['sign in', 'register', 'login', 'sign in/register', 'sign in / register'];

    return array_values(array_filter($items, function ($item) use ($remove) {
        return !in_array(strtolower(trim($item->title)), $remove, true);
    }));
}, 10, 2);

// ─── Nav Menu: Append Logged-In User Name + Logout Link ──────────────────────
// Appends a "<First Last>" link (clicking it logs out) to the primary nav.
// Matches the CEU pattern: icon + name, with a separate logout action.

add_filter('wp_nav_menu_items', function ($items, $args) {
    if (!isset($args->theme_location) || $args->theme_location !== 'primary') {
        return $items;
    }
    if (!is_user_logged_in()) return $items;

    $uid   = get_current_user_id();
    $first = get_user_meta($uid, 'first_name', true) ?: '';
    $last  = get_user_meta($uid, 'last_name',  true) ?: '';
    $name  = trim($first . ' ' . stripslashes($last)) ?: wp_get_current_user()->display_name;

    $user_url   = home_url('/user/');       // adjust if your dashboard page differs
    $logout_url = wp_logout_url(home_url('/'));

    $items .= '<li class="menu-item ceu-user-nav">'
            .   '<a href="' . esc_url($user_url) . '" title="' . esc_attr($name) . '">'
            .     '<i class="fas fa-user-alt"></i>&nbsp;' . esc_html($name)
            .   '</a>'
            .   '<ul class="sub-menu">'
            .     '<li><a href="' . esc_url($logout_url) . '">Logout</a></li>'
            .   '</ul>'
            . '</li>';

    return $items;
}, 10, 2);

// ─── Login Form: Fix Injected Email Field Validation ─────────────────────────
// Third-party plugins (MailChimp for WP, NSL, etc.) hook into woocommerce_login_form
// and login_form actions and inject type="email" required inputs. When those
// fields are empty, WooCommerce's JS validation blocks the login button with
// "Please enter an email address." This script strips required from any email
// input inside a login/register form that is not the primary credential field,
// and adds novalidate to the register form so it doesn't interfere with login.

add_action('wp_footer', function () {
    ?>
    <script>
    (function () {
        var loginForm = document.querySelector('#ajax-login-form');
        if (!loginForm) return;

        // Suppress browser validation on CF7 forms so they don't block the page.
        document.querySelectorAll('.wpcf7 > form').forEach(function (form) {
            form.setAttribute('novalidate', '');
        });

        // The CF7 register form's submit button overlaps the login button in the
        // page layout. Intercept clicks on CF7 submit buttons (capture phase,
        // before any form submit is generated). If login credentials are filled,
        // block the click entirely and trigger the actual login form instead.
        // Empty credentials = genuine register attempt, let CF7 submit normally.
        document.addEventListener('click', function (e) {
            var btn = e.target.closest('input[type="submit"], button[type="submit"]');
            if (!btn) return;
            if (!btn.form || btn.form === loginForm) return; // ignore login btn itself

            var username = (loginForm.querySelector('#username') || {}).value || '';
            var password = (loginForm.querySelector('#password') || {}).value || '';

            if (username.trim() && password.trim()) {
                e.preventDefault();
                e.stopImmediatePropagation();
                loginForm.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
            }
        }, true); // capture phase — fires before the click reaches the button
    })();
    </script>
    <?php
});
