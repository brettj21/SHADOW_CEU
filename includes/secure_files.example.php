<?php
/**
 * TEMPLATE — copy this to <secure_files>/variables.php and fill it in.
 *
 * THIS FILE IS A TEMPLATE AND CONTAINS NO SECRETS. The real one must live
 * OUTSIDE the docroot and OUTSIDE git, because it holds live payment
 * credentials. secure_files.php resolves the directory; the first of these that
 * exists wins:
 *
 *   1. $CEU_SECURE_FILES               (environment variable — set it in the
 *                                       vhost, or in docker-compose)
 *   2. <parent of docroot>/secure_files
 *   3. /var/www/vhosts/ceunits.com/secure_files   (production)
 *
 * On the live server the file already exists at (3) with all of this filled in —
 * copy that one rather than retyping it. On a test box, put a copy at (2) with
 * the Authorize.Net gateway pointed at the sandbox.
 *
 * The directory also needs professions.php (defining $profession_ids, the
 * profession-slug → ID map) and should be writable if you want the
 * transactions.txt audit log; the payment endpoint logs a notice and carries on
 * when it is not.
 *
 * The constant list below was produced by tokenising every file in /classes,
 * /includes and /process, so it is what the ported code actually reads.
 */

// ─── Database (CEU_DB) ────────────────────────────────────────────────────────
define('DB_HOST',  'localhost');
define('DB_LOGIN', '');
define('DB_PASS',  '');
define('DB',       'CEU_DB');

// ─── Paths and identity ───────────────────────────────────────────────────────
// SERVER_ROOT is the docroot WITH a trailing slash — legacy code concatenates
// straight onto it. SECURE_PATH is the site's https base, used to build redirect
// URLs after a payment. ROOT is the app's URL prefix, normally '/'.
define('SERVER_ROOT',  '/var/www/html/');
define('SECURE_PATH',  'https://shadow.ceunits.com');
define('ROOT',         '/');
define('CURRENT_YEAR', (int) date('Y'));
define('BUS_NAME',      'CE Units');
define('CONTACT_EMAIL', 'support@ceunits.com');

// ─── Authorize.Net ────────────────────────────────────────────────────────────
// AUTH_GATEWAY is the endpoint CART::getTransactionResults() posts to. Use the
// sandbox on any box that is not production:
//   live:    https://secure2.authorize.net/gateway/transact.dll
//   sandbox: https://test.authorize.net/gateway/transact.dll
define('AUTH_GATEWAY',   'https://test.authorize.net/gateway/transact.dll');
define('AUTH_LOGIN',     '');
define('AUTH_TRANS_KEY', '');
define('AUTH_VERSION',   '3.1');
define('PAYMENTS_EMAIL', 'support@ceunits.com');

// Comma-separated CEU_USER.ID list. processPayment() sends x_test_request=TRUE
// for these accounts, so a real card is never charged. Put your own test
// account's id here before you try a transaction on shadow.
define('CREDIT_CARD_TEST_USER_IDS', '');

// ─── Outbound mail ────────────────────────────────────────────────────────────
// Generic.class.php in the legacy tree has AWS SES keys hardcoded inline. They
// are deliberately NOT carried into this repo; the copy in /classes reads these
// instead and refuses to send (logging a notice) when they are blank.
define('CEU_SMTP_HOST',      'email-smtp.us-east-2.amazonaws.com');
define('CEU_SMTP_USER',      '');
define('CEU_SMTP_PASS',      '');
define('CEU_SMTP_FROM',      'support@ceunits.com');
define('CEU_SMTP_FROM_NAME', 'CEU Support');

// ─── Business partner promos ──────────────────────────────────────────────────
// Comma-separated and positional: the Nth promo code in BUSINESS_PARTNER_PROMOS
// belongs to the Nth name in BUSINESS_PARTNERS. Both may be empty strings.
define('BUSINESS_PARTNERS',       '');
define('BUSINESS_PARTNER_PROMOS', '');

// ─── CE Broker (Florida uploads) ──────────────────────────────────────────────
// Used only when the billing state is FL.
define('CEBROKER_ENDPOINT',   '');
define('PARENT_PROVIDER_ID',  '');
define('UPLOAD_KEY',          '');

// ─── Unlimited subscriptions ──────────────────────────────────────────────────
// Read by the payment endpoint's unlimited branch. Not reachable from the new
// checkout page, which never posts 'unlimited', but the constants are referenced
// so they must exist.
define('UNLIMITED_CODE',      '');
define('UNLIMITED_PRICE',     0);
define('UNLIMITED_PROMOTION', 0);
define('UNLIMITED_DURATION',  1);

// ─── Mailchimp ────────────────────────────────────────────────────────────────
// Referenced by includes/functions.php. The payment path does not call it, but
// define them so nothing warns.
define('MC_API_KEY', '');
define('MC_LIST_ID', '');
