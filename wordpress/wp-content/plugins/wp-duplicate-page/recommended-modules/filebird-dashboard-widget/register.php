<?php

defined( 'ABSPATH' ) || exit;

// Bump version on every init.php behavior change. Newest wins across consumers.
\YayRecommendedModules\Registry::register(
    'filebird-dashboard-widget',
    '1.1.0',
    __DIR__ . '/init.php'
);
