<?php
/**
 * CEU Debug — dumps session, cookies, and WP login state.
 * Visit: shadow.ceunits.com/wordpress/ceu-debug.php?key=ceu2026
 * DELETE THIS FILE when done testing.
 */
if (($_GET['key'] ?? '') !== 'ceu2026') { http_response_code(403); die('Forbidden'); }

require_once __DIR__ . '/wp-load.php';

if (!session_id()) session_start();

echo '<pre style="font:13px monospace;padding:20px;background:#f5f5f5;">';

echo "=== WP LOGIN STATE ===\n";
echo 'is_user_logged_in : ' . (is_user_logged_in() ? 'YES' : 'NO') . "\n";
if (is_user_logged_in()) {
    $u = wp_get_current_user();
    echo 'WP user ID        : ' . $u->ID . "\n";
    echo 'WP user login     : ' . $u->user_login . "\n";
    echo 'WP display name   : ' . $u->display_name . "\n";
    echo 'WP roles          : ' . implode(', ', $u->roles) . "\n";
    echo '_ceu_id meta      : ' . (get_user_meta($u->ID, '_ceu_id', true) ?: '(none)') . "\n";
}

echo "\n=== SESSION ===\n";
print_r($_SESSION);

echo "\n=== COOKIES ===\n";
foreach ($_COOKIE as $k => $v) {
    if (in_array($k, ['ceu', 'ceuSession', 'pro', 'PHPSESSID']) || strpos($k, 'wordpress') === 0) {
        echo $k . ' = ' . (strlen($v) > 60 ? substr($v, 0, 60) . '...' : $v) . "\n";
    }
}

echo '</pre>';