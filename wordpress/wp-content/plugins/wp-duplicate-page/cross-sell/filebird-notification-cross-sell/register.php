<?php
// Bump version on every init.php behavior change. Newest wins across consumers.
\YayCrossSell\Registry::register(
    'filebird-notification-cross-sell',
    '1.0.0',
    __DIR__ . '/init.php'
);
