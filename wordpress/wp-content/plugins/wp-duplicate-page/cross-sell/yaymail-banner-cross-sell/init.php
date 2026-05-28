<?php

declare(strict_types=1);

namespace YayCrossSell\YaymailBannerCrossSell;

class Plugin
{
    private static $base_url;
    public static function boot(): void
    {
        self::$base_url = plugins_url('', __FILE__);

        require __DIR__ . '/main.php';
    }
}

if (function_exists('add_action')) {
    add_action('plugins_loaded', [Plugin::class, 'boot']);
}
