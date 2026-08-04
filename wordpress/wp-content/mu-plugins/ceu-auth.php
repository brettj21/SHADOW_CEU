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

// ─── CEU Login State Helper ───────────────────────────────────────────────────
// Returns true only for users who logged in via the CEU form (have _ceu_id meta).
// WP admins logged in via wp-admin return false so they appear as guests on the
// frontend and do not trigger the user name display or Tutor dropdown.

function ceu_is_logged_in() {
    return is_user_logged_in()
        && (bool) get_user_meta(get_current_user_id(), '_ceu_id', true);
}

// ─── One-Time Cleanup: Remove _ceu_id From Admin Accounts ────────────────────
// Early versions of this plugin used get_user_by('email') and accidentally set
// _ceu_id on the WP admin account. This runs once and strips that meta so the
// admin is never mistaken for a CEU subscriber.

add_action('init', function () {
    if (get_option('_ceu_admin_meta_cleaned_v1')) return;
    $admins = get_users(['role' => 'administrator', 'fields' => 'ids']);
    foreach ($admins as $uid) {
        delete_user_meta($uid, '_ceu_id');
        delete_user_meta($uid, '_ceu_pro');
        delete_user_meta($uid, '_ceu_row');
    }
    update_option('_ceu_admin_meta_cleaned_v1', true);
}, 2);

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

    // Never query CEU_DB for wp-admin / wp-login.php logins.
    // The frontend CEU login goes through admin-post.php, not wp-login.php.
    $script = $_SERVER['PHP_SELF'] ?? '';
    if (str_contains($script, 'wp-login.php') || str_contains($script, 'wp-admin')) {
        return $user;
    }

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

    // Find or create a subscriber-level WP user for this CEU account.
    // Never look up by email — the admin account may share the same address.
    $wp_user = null;
    $found = get_users([
        'meta_key'    => '_ceu_id',
        'meta_value'  => (string) $ceu['ID'],
        'role__not_in' => ['administrator', 'editor'],
        'number'      => 1,
        'fields'      => 'ids',
    ]);
    if (!empty($found)) {
        $wp_user = get_user_by('ID', $found[0]);
    }
    if (!$wp_user) {
        $wp_login = 'ceu_' . sanitize_user(strtolower($ceu['EMAIL']), true);
        if (username_exists($wp_login)) $wp_login = 'ceu_' . $ceu['ID'];
        $uid = wp_insert_user([
            'user_login' => $wp_login,
            'user_email' => 'ceu_' . $ceu['ID'] . '@ceunits.local',
            'user_pass'  => wp_generate_password(32, true, true),
            'role'       => 'subscriber',
        ]);
        if (is_wp_error($uid)) return $uid;
        $wp_user = get_user_by('ID', $uid);
    }

    wp_update_user([
        'ID'           => $wp_user->ID,
        'display_name' => trim($ceu['FIRST'] . ' ' . $ceu['LAST']) ?: $ceu['EMAIL'],
        'first_name'   => $ceu['FIRST'],
        'last_name'    => $ceu['LAST'],
    ]);
    update_user_meta($wp_user->ID, '_ceu_id',  (string) $ceu['ID']);
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
    if (!ceu_is_logged_in()) return;
    if (!empty($_SESSION['session_data'])) return;

    $raw = get_user_meta(get_current_user_id(), '_ceu_row', true);
    if (!$raw) return;

    $_SESSION['session_data'] = [maybe_unserialize($raw)];
}, 5);

// ─── Clear Stale CEU Cookies for Non-CEU Users ───────────────────────────────
// When a WP admin (or any non-CEU user) loads the frontend, erase any leftover
// CEU cookies and session data from a previous CEU login in the same browser.
// Prevents stale ceu=10039 cookies from bleeding into a wp-admin session.

add_action('init', function () {
    if (is_admin()) return;                          // leave wp-admin alone
    if (ceu_is_logged_in()) return;                  // real CEU user — keep data
    if (!is_user_logged_in() && empty($_COOKIE['ceu'])) return; // nothing to clear

    // Clear lingering CEU session
    if (!empty($_SESSION['session_data'])) {
        unset($_SESSION['session_data']);
    }
    // Clear lingering CEU cookies — also unset superglobal so the current
    // request no longer sees the old value (setcookie alone only clears next load).
    foreach (['ceu', 'ceuSession', 'pro'] as $name) {
        if (isset($_COOKIE[$name])) {
            setcookie($name, '', time() - 3600, '/');
            unset($_COOKIE[$name]);
        }
    }
}, 6);

// ─── /logout/ Route ──────────────────────────────────────────────────────────
// Visiting shadow.ceunits.com/logout/ logs the user out and returns to home.
// Works for both CEU users and WP admin sessions.

add_action('template_redirect', function () {
    $path = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
    if ($path !== 'logout') return;

    wp_logout(); // fires wp_logout hook → clears CEU session + cookies below
    wp_safe_redirect(home_url('/'));
    exit;
});

// ─── Clear CEU Session + Cookies on Logout ───────────────────────────────────

add_action('wp_logout', function () {
    if (session_id()) {
        unset($_SESSION['session_data']);
    }
    foreach (['ceu', 'ceuSession', 'pro'] as $name) {
        setcookie($name, '', time() - 3600, '/');
    }
});

// ─── Hide Tutor User Dropdown for Non-CEU Users ──────────────────────────────
// WP admins logged in via wp-admin should appear as guests on the frontend.
// The Tutor dropdown is gated by zilom theme option 'hm_show_user'. We set it
// to 'no' for any logged-in user who isn't a CEU user.

add_action('wp', function () {
    if (is_admin()) return;
    if (is_user_logged_in() && !ceu_is_logged_in()) {
        global $zilom_options;
        if (is_array($zilom_options)) {
            $zilom_options['hm_show_user'] = 'no';
        }
    }
});

// ─── Hide WP Admin Bar on the Frontend ───────────────────────────────────────
// Never show the WP admin bar to site visitors — CEU users don't need it,
// and it was confusing a logged-in WP admin who was testing the login page.
// Admins can still access /wp-admin directly.
add_filter('show_admin_bar', '__return_false');

// ─── Nav Menu: Remove Sign In / Register (PHP — no flash) ────────────────────
add_filter('wp_nav_menu_objects', function ($items, $args) {
    if (!isset($args->theme_location) || $args->theme_location !== 'primary') {
        return $items;
    }
    if (!ceu_is_logged_in()) return $items;

    $remove = ['sign in', 'register', 'login', 'sign in/register', 'sign in / register'];
    return array_values(array_filter($items, function ($item) use ($remove) {
        return !in_array(strtolower(trim($item->title)), $remove, true);
    }));
}, 10, 2);



// ─── Nav Menu: Inject User Name + Logout via JS ───────────────────────────────
// The zilom theme intercepts nav link clicks with a jQuery popup handler.
// Using capture-phase JS (runs before theme handlers) + window.location.href
// for logout bypasses the popup completely.

add_action('wp_footer', function () {
    if (!ceu_is_logged_in()) return;

    $uid    = get_current_user_id();
    $first  = get_user_meta($uid, 'first_name', true) ?: '';
    $last   = get_user_meta($uid, 'last_name',  true) ?: '';
    $name   = trim($first . ' ' . stripslashes($last)) ?: wp_get_current_user()->display_name;
    $logout = wp_logout_url(home_url('/'));
    ?>
    <script>
        (function () {
            var userName   = <?= json_encode($name) ?>;
            var logoutUrl  = <?= json_encode($logout) ?>;

            function injectNav() {
                // Target both desktop and mobile primary nav containers
                var navs = document.querySelectorAll(
                    '#gva-mainmenu .gva-main-menu, #gva-mobile-menu .gva-mobile-menu'
                );
                navs.forEach(function (nav) {
                    if (nav.querySelector('.ceu-user-item')) return; // already injected

                    // User name — plain text, no link (avoids popup trigger)
                    var userLi = document.createElement('li');
                    userLi.className = 'menu-item ceu-user-item';
                    userLi.innerHTML =
                        '<span style="padding:0 12px;color:inherit;cursor:default;white-space:nowrap;">' +
                        '<i class="fas fa-user-alt" style="margin-right:5px;"></i>' +
                        document.createTextNode(userName).textContent +
                        '</span>';
                    nav.appendChild(userLi);

                    // Logout — capture phase so it fires before the theme popup handler
                    var logoutLi = document.createElement('li');
                    logoutLi.className = 'menu-item ceu-logout-item';
                    var a = document.createElement('a');
                    a.textContent = 'Logout';
                    a.href        = logoutUrl;
                    a.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        window.location.href = logoutUrl;
                    }, true); // true = capture phase
                    logoutLi.appendChild(a);
                    nav.appendChild(logoutLi);
                });
            }

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', injectNav);
            } else {
                injectNav();
            }
        })();
    </script>
    <?php
});

// ─── [ceu_login] Shortcode ───────────────────────────────────────────────────
// Renders a real login form that authenticates via wp_signon() → our
// authenticate filter → CEU_USER table. Replace any CF7/WooCommerce form on
// the login page with [ceu_login] in the WordPress page editor.
//
// Usage: add [ceu_login] to any WordPress page body.

// ── CEU Login Handler ─────────────────────────────────────────────────────────
// Routes through wp-admin/admin-post.php — WordPress's dedicated form endpoint.
// This completely bypasses the WooCommerce My Account page and any plugin that
// hooks into template_redirect or init to intercept login POSTs.
//
// Mirrors CEU's process/forms.php:
//   1. Query CEU_USER with SHA-256 (same as userLogin())
//   2. Set $_SESSION['session_data'] and cookies (same structure as global.php)
//   3. Set WP subscriber auth cookie (so WP functions work on all pages)
//   4. Redirect to /user/ — never wp-admin

function ceu_do_login() {
    if (!session_id()) session_start();

    $back = !empty($_POST['back_url']) ? esc_url_raw($_POST['back_url']) : home_url('/login/');

    if (!wp_verify_nonce($_POST['_ceu_login_nonce'] ?? '', 'ceu_login_form')) {
        $_SESSION['ceu_login_error'] = 'Security check failed. Please try again.';
        wp_safe_redirect($back);
        exit;
    }

    $email    = trim($_POST['log'] ?? '');
    $password = $_POST['pwd'] ?? '';
    $remember = !empty($_POST['rememberme']);

    if (empty($email) || empty($password)) {
        $_SESSION['ceu_login_error'] = 'Please enter your email and password.';
        wp_safe_redirect($back);
        exit;
    }

    // ── Step 1: Query CEU_USER (identical to CEU's userLogin()) ──────────────
    $db = ceu_db_connect();
    if (!$db) {
        $_SESSION['ceu_login_error'] = 'Database connection error. Please try again.';
        wp_safe_redirect($back);
        exit;
    }

    $stmt = $db->prepare('SELECT * FROM CEU_USER WHERE EMAIL = ? AND PASS = ?');
    $hash = hash('sha256', $password);
    $stmt->bind_param('ss', $email, $hash);
    $stmt->execute();
    $ceu = $stmt->get_result()->fetch_assoc();
    $stmt->close();

    if (!$ceu) {
        $_SESSION['ceu_login_error'] = 'The email or password you entered is incorrect.';
        wp_safe_redirect($back);
        exit;
    }

    // ── Step 2: Create / sync a WP subscriber (never touches admin account) ───
    $wp_user = null;
    $found   = get_users([
        'meta_key'   => '_ceu_id',
        'meta_value' => (string) $ceu['ID'],
        'number'     => 1,
        'fields'     => 'ids',
    ]);
    if (!empty($found)) {
        $wp_user = get_user_by('ID', $found[0]);
    }
    if (!$wp_user) {
        $wp_login = 'ceu_' . sanitize_user(strtolower($ceu['EMAIL']), true);
        if (username_exists($wp_login)) $wp_login = 'ceu_' . $ceu['ID'];
        $uid = wp_insert_user([
            'user_login' => $wp_login,
            'user_email' => 'ceu_' . $ceu['ID'] . '@ceunits.local',
            'user_pass'  => wp_generate_password(32, true, true),
            'role'       => 'subscriber',
        ]);
        $wp_user = is_wp_error($uid) ? false : get_user_by('ID', $uid);
    }
    if ($wp_user) {
        wp_update_user([
            'ID'           => $wp_user->ID,
            'display_name' => trim($ceu['FIRST'] . ' ' . $ceu['LAST']) ?: $ceu['EMAIL'],
            'first_name'   => $ceu['FIRST'],
            'last_name'    => $ceu['LAST'],
        ]);
        update_user_meta($wp_user->ID, '_ceu_id',  (string) $ceu['ID']);
        update_user_meta($wp_user->ID, '_ceu_pro', $ceu['PROFESSION']);
        update_user_meta($wp_user->ID, '_ceu_row', maybe_serialize($ceu));

        // wp_set_auth_cookie replaces any existing cookie (including admin).
        // Do NOT call wp_logout() here — it fires our wp_logout hook which
        // would immediately clear the CEU session we're about to set below.
        wp_set_auth_cookie($wp_user->ID, $remember, is_ssl());
    }

    // ── Step 3: Set CEU session + cookies AFTER wp_set_auth_cookie ───────────
    // Must come last so our wp_logout hook (triggered by any earlier logout
    // call) cannot erase what we're setting here.
    $_SESSION['session_data'] = [$ceu];
    $exp = mktime(0, 0, 0, 12, 31, (int) date('Y') + 1);
    setcookie('ceu',        (string) $ceu['ID'],         $exp, '/');
    setcookie('ceuSession', (string) $ceu['PASS'],       $exp, '/');
    setcookie('pro',        (string) $ceu['PROFESSION'],  $exp, '/');

    // ── Step 4: Redirect to homepage (change to /user/ once that page exists) ─
    $redirect = !empty($_POST['redirect_to']) ? esc_url_raw($_POST['redirect_to']) : home_url('/');
    wp_safe_redirect($redirect);
    exit;
}

// admin_post_nopriv_ = not logged in (normal case)
// admin_post_         = already logged in (handles double-submit edge case)
add_action('admin_post_nopriv_ceu_login', 'ceu_do_login');
add_action('admin_post_ceu_login',        'ceu_do_login');

// Shortcode renderer.
add_shortcode('ceu_login', function () {

    if (is_user_logged_in() && get_user_meta(get_current_user_id(), '_ceu_id', true)) {
        // Only show "signed in" state for actual CEU users, not WP admins.
        // WP admins visiting this page fall through to the login form so they
        // can authenticate as a CEU user (which replaces their admin session).
        $uid   = get_current_user_id();
        $first = get_user_meta($uid, 'first_name', true) ?: '';
        $last  = get_user_meta($uid, 'last_name',  true) ?: '';
        $name  = trim($first . ' ' . stripslashes($last)) ?: wp_get_current_user()->display_name;
        return '<div class="ceu-login-logged">'
            . '<p>You are signed in as <strong>' . esc_html($name) . '</strong>.</p>'
            . '<a href="' . esc_url(wp_logout_url(home_url('/'))) . '" class="ceu-submit-btn">Sign out</a>'
            . '</div>';
    }

    if (!session_id()) session_start();
    $error_msg = '';
    if (!empty($_SESSION['ceu_login_error'])) {
        $error_msg = $_SESSION['ceu_login_error'];
        unset($_SESSION['ceu_login_error']);
    }

    $redirect = esc_url(home_url('/'));

    ob_start(); ?>
    <style>
        .ceu-login-wrap { font-family:inherit; }
        .ceu-login-error { background:#fef2f2; border:1px solid #fca5a5; color:#b91c1c; padding:12px 16px; border-radius:8px; margin-bottom:16px; font-size:14px; }
        .ceu-login-wrap form { border:none; padding:0; background:transparent; }
        .ceu-field { margin-bottom:18px; }
        .ceu-field label { display:block; font-size:14px; font-weight:400; color:#4a4a4a; margin-bottom:6px; }
        .ceu-field input[type="text"],
        .ceu-field input[type="password"] { width:100%; padding:11px 14px; border:none; border-radius:6px; font-size:14px; color:#111827; background:#eef0f3; box-sizing:border-box; }
        /* Override browser autofill yellow highlight */
        .ceu-field input:-webkit-autofill,
        .ceu-field input:-webkit-autofill:hover,
        .ceu-field input:-webkit-autofill:focus { -webkit-box-shadow:0 0 0 1000px #eef0f3 inset !important; box-shadow:0 0 0 1000px #eef0f3 inset !important; -webkit-text-fill-color:#111827 !important; }
        .ceu-field input:focus { outline:2px solid #11326E; outline-offset:0; }
        .ceu-row { display:flex; justify-content:space-between; align-items:center; margin-bottom:22px; }
        .ceu-remember { display:flex; align-items:center; gap:7px; font-size:13px; color:#6b7280; cursor:pointer; }
        .ceu-forgot { font-size:13px; color:#11326E; text-decoration:none; }
        .ceu-forgot:hover { text-decoration:underline; }
        .ceu-submit-btn { display:block; width:100%; padding:13px; background:#11326E; color:#fff; border:none; border-radius:8px; font-size:15px; font-weight:700; cursor:pointer; letter-spacing:.02em; transition:background .15s; text-align:center; text-decoration:none; box-sizing:border-box; }
        .ceu-submit-btn:hover { background:#1a4a9e; color:#fff; }
        .ceu-login-logged { text-align:center; padding:30px; }
    </style>

    <div class="ceu-login-wrap">
        <?php if ($error_msg): ?>
            <div class="ceu-login-error"><?= esc_html($error_msg) ?></div>
        <?php endif ?>
        <form method="post" action="<?= esc_url(admin_url('admin-post.php')) ?>" novalidate>
            <input type="hidden" name="action"      value="ceu_login">
            <input type="hidden" name="back_url"    value="<?= esc_url(get_permalink() ?: home_url('/login/')) ?>">
            <input type="hidden" name="redirect_to" value="<?= $redirect ?>">
            <?= wp_nonce_field('ceu_login_form', '_ceu_login_nonce', true, false) ?>

            <div class="ceu-field">
                <label for="ceu-log">Email Address <span style="color:#e53e3e">*</span></label>
                <input type="text" id="ceu-log" name="log" required autocomplete="email"
                       placeholder="your@email.com"
                       value="<?= esc_attr($_POST['log'] ?? '') ?>">
            </div>

            <div class="ceu-field">
                <label for="ceu-pwd">Password <span style="color:#e53e3e">*</span></label>
                <input type="password" id="ceu-pwd" name="pwd" required autocomplete="current-password"
                       placeholder="Password">
            </div>

            <div class="ceu-row">
                <label class="ceu-remember">
                    <input type="checkbox" name="rememberme" value="forever"> Remember me
                </label>
                <a href="<?= esc_url(wp_lostpassword_url(get_permalink())) ?>" class="ceu-forgot">Forgot password?</a>
            </div>

            <button type="submit" class="ceu-submit-btn">Log In</button>
        </form>
    </div>
    <?php
    return ob_get_clean();
});

// ─── Popup Login Form Override ───────────────────────────────────────────────
// Replaces Zilom's built-in AJAX login form (which only knows WP passwords) with
// our [ceu_login] shortcode inside the #form-ajax-login-popup modal. The form
// posts to admin-post.php exactly like the /login/ page — identical auth flow.
//
// On failed login: ceu_do_login() sets a session error and redirects back to the
// current page. JS then auto-reopens the popup so the user sees the error message.

add_action('wp_footer', function () {
    if (ceu_is_logged_in()) return;

    // Capture whether there is a pending login error BEFORE the shortcode consumes it.
    if (!session_id()) session_start();
    $had_error = !empty($_SESSION['ceu_login_error']);

    // Render our login form (also clears the session error).
    $form_html = do_shortcode('[ceu_login]');
    ?>
    <script>
        (function () {
            function replaceCeuPopupForm() {
                var container = document.querySelector('.form-ajax-login-popup-content');
                if (!container) return;
                container.innerHTML = <?= json_encode($form_html) ?>;
            }

            function fixRegisterLink() {
                document.querySelectorAll('a.register-link, a.registration-popup').forEach(function (a) {
                    a.href = <?= json_encode(home_url('/register/')) ?>;
                });
            }

            function maybeOpenPopup() {
                <?php if ($had_error): ?>
                // Login failed — reopen the popup so the user sees the error.
                var trigger = document.querySelector('[data-target="#form-ajax-login-popup"]');
                if (trigger && typeof jQuery !== 'undefined') {
                    jQuery('#form-ajax-login-popup').modal('show');
                } else if (trigger) {
                    trigger.click();
                }
                <?php endif; ?>
            }

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function () {
                    replaceCeuPopupForm();
                    maybeOpenPopup();
                    fixRegisterLink();
                });
            } else {
                replaceCeuPopupForm();
                maybeOpenPopup();
                fixRegisterLink();
            }
        })();
    </script>
    <?php
}, 25);

// ─── TEMP DEBUG — remove after testing ───────────────────────────────────────
add_action('wp_footer', function () {
    if (($_GET['ceu_debug'] ?? '') !== 'ceu2026') return;
    if (!session_id()) session_start();
    echo '<pre style="position:fixed;bottom:0;left:0;right:0;background:#111;color:#0f0;padding:10px;font-size:11px;z-index:99999;max-height:40vh;overflow:auto;">';
    echo "WP logged in: " . (is_user_logged_in() ? 'YES' : 'NO') . "\n";
    if (is_user_logged_in()) {
        $u = wp_get_current_user();
        echo "WP user: {$u->user_login} | roles: " . implode(',', $u->roles) . " | _ceu_id: " . (get_user_meta($u->ID,'_ceu_id',true)?:'none') . "\n";
    }
    echo "SESSION session_data: " . (empty($_SESSION['session_data']) ? 'EMPTY' : 'SET — FIRST=' . ($_SESSION['session_data'][0]['FIRST']??'?') . ' LAST=' . ($_SESSION['session_data'][0]['LAST']??'?')) . "\n";
    echo "COOKIE ceu=" . ($_COOKIE['ceu']??'—') . " pro=" . ($_COOKIE['pro']??'—') . "\n";
    echo '</pre>';
}, 999);
