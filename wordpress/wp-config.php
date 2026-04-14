<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

if ( ! getenv('DOCKER_ENV') ) {
    define('WP_HOME',    'https://shadow.ceunits.com/wordpress');
    define('WP_SITEURL', 'https://shadow.ceunits.com/wordpress');
}


// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '2026_CEU' );

/** Docker local environment DB host override */
if ( getenv('DOCKER_ENV') ) {
    define( 'DB_HOST', 'mysql' );
} else {
    define( 'DB_HOST', 'localhost:3306' );
}

/** Database username */
define( 'DB_USER', 'ceunits' );

/** Database password */
define( 'DB_PASSWORD', 'KvGidZtwpt6z4@~7' );


/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'I2j*+wr3QFhdgq7qjc5tb!|8)*(x05v8ohQ97&2-758IWYD|J-H#VM5G(9+aLgOU');
define('SECURE_AUTH_KEY', 'Dnf+0]y/gMAnWh57f%97cA]OkIk%+9429JBuj(RK*:[FvSfZ5pd!61b[;i1k:pTZ');
define('LOGGED_IN_KEY', 'l_:4#m8y/fw*n&%g(/_@J%x&m[CAoSwqTb)!d*)CaXz21W31eDsb63x#6i4z5-S+');
define('NONCE_KEY', 'O@Lix0Bd~Jt8lI!*G!jVA*%MW:yIC6]z6U-1W1J-%34ugWjTP6l5@8D#N2A(4:9Q');
define('AUTH_SALT', '10A/kHh7(;JJ0_S-Dg6n[M#kdbmg_!-YHGpg]+a;Q5s005RY3[tV6&5jCP%B71wd');
define('SECURE_AUTH_SALT', '6P_Q5YosfoE|_!0(]|h5JFHQGR)[rAw#4~h#-(P)s&#-%6e65v+@212xU_%1pevI');
define('LOGGED_IN_SALT', 'Q0Ym[7clit_mBVC*uoI]*~5_!u15/9L5-Cbj/E]d/l[*5Qx/]183_O6MA5GLo4[&');
define('NONCE_SALT', '935CF%8Z/9f0O9CO7)K[)1001XqCN0:2Pq5&cKv(7P+1+Fi;QXZ%h*J:39k45L2I');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'WP_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
