<?php

declare(strict_types=1);

namespace YayRecommendedModules\FilebirdPluginsPageNotification;

defined( 'ABSPATH' ) || exit;

class Plugin
{

    public static function boot(): void
    {
        require_once __DIR__ . '/main.php';
        \FBPluginsPageNotification::get_instance();
    }
}

if (function_exists('add_action')) {
    add_action('plugins_loaded', [Plugin::class, 'boot']);
}
