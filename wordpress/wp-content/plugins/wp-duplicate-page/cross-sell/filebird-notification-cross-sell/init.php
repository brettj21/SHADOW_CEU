<?php

declare(strict_types=1);

namespace YayCrossSell\FilebirdNoticeCrossSell;

class Plugin
{
    /** URL to THIS module's directory inside whichever consumer plugin won arbitration. */
    private static $base_url;

    public static function boot(): void
    {
        // Canonical asset-URL pattern: plugins_url('', __FILE__) resolves to the URL
        // of this file's directory inside whichever consumer plugin loaded the
        // winning init.php. Modules should always self-locate this way — never
        // depend on a constant defined by a specific consumer plugin.
        //
        //   wp_enqueue_script(
        //       'filebird-cross-sell-admin',
        //       self::$base_url . '/assets/js/admin.js',
        //       ['jquery'],
        //       '1.0.0',
        //       true
        //   );
        self::$base_url = plugins_url('', __FILE__);

        require __DIR__ . '/main.php';
    }
}

if (function_exists('add_action')) {
    add_action('plugins_loaded', [Plugin::class, 'boot']);
}
