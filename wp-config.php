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
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_602_core' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'rWzq(~[R:4I2>i|aC5Hq8)S2=atC&@#`,6^yaU?q6~)A5Yc@s87N,YnlZ~;#~ri,' );
define( 'SECURE_AUTH_KEY',  'vM4qOg/2<#2>F|0fJj:sJ2;P!m%u1AcKsD gtdwB@ wjGr#s2@jzb=i:.Uls!UyW' );
define( 'LOGGED_IN_KEY',    'Ln|:El)pY:> 0:|w#}!!I*= b.R>p=E=gd).6;H1X;>R@qjf&=Y5JPssf(E]A`+P' );
define( 'NONCE_KEY',        '@,_16f})BV2cVHUe LB|2V*{AvOeM`[<1-ogx$T!YCRRr:?O2 /8@vR-$YW8,cg7' );
define( 'AUTH_SALT',        'nCZh!p1nv4_G}Nb0r;U$^~Bjw@YRPvq&7dM!dpT[iA@O{j4=DM^.tO*NWA~l:J((' );
define( 'SECURE_AUTH_SALT', 'fB<O$|4_Za;8m`z[s.h-eFcT%:;l15Q&H86Ih 7~jD}d5E5.ur]7See*?FHK<ih7' );
define( 'LOGGED_IN_SALT',   '{z!f! dB-E[OpzE#s5HlY}ToYRfOWSN;+}:4nYuQw,f,5lZ GIk9@WD``k^z<QqJ' );
define( 'NONCE_SALT',       'GTwCM<9S+?ZaT?Lvgvk?EJV4HWEmNsdHzv^OaQbP ]hW<g~=+E$mGH}@mYoHEU_.' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
