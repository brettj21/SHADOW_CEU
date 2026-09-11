<?php
/**
 * TEMPLATE — copy to wp-config.php on each environment and fill in.
 * CONTAINS NO SECRETS. The real file is gitignored, deliberately.
 *
 * WHY IT IS NOT TRACKED
 * ─────────────────────
 * Two reasons, both of which bite during the cutover.
 *
 * 1. WP_HOME and WP_SITEURL are pinned here as constants, and constants override
 *    the values stored in the database. A tracked wp-config.php would therefore
 *    point www's WordPress at shadow's URLs — and at shadow's database — the
 *    moment the integration branch was checked out on www.
 *
 * 2. It carries AUTH_KEY and the salts. Anything that can forge a session cookie
 *    does not belong in a repository.
 *
 * SHADOW vs WWW
 * ─────────────
 * The two differ in exactly three places: the URLs, the database name, and
 * (recommended) the salts. Everything else is identical.
 *
 *   shadow   WP_HOME    https://shadow.ceunits.com
 *            WP_SITEURL https://shadow.ceunits.com/wordpress
 *            DB_NAME    2026_CEU
 *
 *   www      WP_HOME    https://www.ceunits.com
 *            WP_SITEURL https://www.ceunits.com/wordpress
 *            DB_NAME    a COPY of 2026_CEU, never the same database — sharing it
 *                       means changing the URLs on one breaks the other, and
 *                       `git checkout master` cannot undo a database change.
 *
 * NOTE: WordPress core lives in /wordpress while the site is served from the
 * docroot, so WP_SITEURL carries the /wordpress suffix and WP_HOME does not.
 * Getting those the same way round is what makes the root index.php work.
 */

// ─── URLs ─────────────────────────────────────────────────────────────────────
define('WP_HOME',    'https://www.ceunits.com');
define('WP_SITEURL', 'https://www.ceunits.com/wordpress');

// ─── Database ─────────────────────────────────────────────────────────────────
// This is the WordPress database only. The legacy CEU_* tables live in their own
// database, reached by the mu-plugins through CEU_DB_* in ceu-courses.php and by
// the legacy site through secure_files/variables.php. Nothing here touches those.
define('DB_NAME',     '');
define('DB_USER',     '');
define('DB_PASSWORD', '');
define('DB_HOST',     'localhost');
define('DB_CHARSET',  'utf8mb4');
define('DB_COLLATE',  '');

$table_prefix = 'WP_';   // uppercase — the blog install at /blog/ uses lowercase
                         // wp_ in a different database. Do not merge the two.

// ─── Keys and salts ───────────────────────────────────────────────────────────
// Generate fresh: https://api.wordpress.org/secret-key/1.1/salt/
// Use DIFFERENT values per environment. Changing them logs everyone out, which is
// the point: a session minted on shadow should not be valid on www.
define('AUTH_KEY',         '');
define('SECURE_AUTH_KEY',  '');
define('LOGGED_IN_KEY',    '');
define('NONCE_KEY',        '');
define('AUTH_SALT',        '');
define('SECURE_AUTH_SALT', '');
define('LOGGED_IN_SALT',   '');
define('NONCE_SALT',       '');

// ─── Misc ─────────────────────────────────────────────────────────────────────
define('WP_ALLOW_MULTISITE', false);
define('WP_DEBUG', false);

// Turn these on while testing a cutover; they write wp-content/debug.log instead
// of printing to the page, which is what you want on anything public-facing.
// define('WP_DEBUG', true);
// define('WP_DEBUG_LOG', true);
// define('WP_DEBUG_DISPLAY', false);

if (!defined('ABSPATH')) define('ABSPATH', __DIR__ . '/');
require_once ABSPATH . 'wp-settings.php';
