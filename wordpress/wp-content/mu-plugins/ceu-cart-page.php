<?php
/**
 * Plugin Name: CEU Cart Page
 * Description: The /cart/ page — a port of the legacy www.ceunits.com/cart/ into
 *              the new look. Personal Info + My Status down the left, the
 *              trainings table, promo code, totals and Checkout down the right.
 *
 * REPLACES WOOCOMMERCE'S CART
 * ───────────────────────────
 * /cart/ is WP page 99, holding Woo's [woocommerce_cart] shortcode, which renders
 * from WC()->cart and therefore always shows empty — this site's cart is the
 * 'cart' cookie that ceu-cart.php reads. The_content filter below swaps our block
 * in for Woo's on that page, so the existing "View Cart" links keep working.
 *
 * PLACEMENT — two ways, same convention as ceu-certificates.php:
 *   1. Automatic: anything at the /cart/ slug gets this block instead of Woo's.
 *   2. Shortcode: [ceu_cart] to place it anywhere else.
 *
 * PORTED FROM, AND BEHAVIOURALLY MATCHED TO
 * ─────────────────────────────────────────
 *   CEU/cart/index.php                  the two-column page
 *   CEU/cart/includes/item_list.php     items, promo box, totals, CHECKOUT form
 *   CEU/classes/Trainings.class.php     getTrainingsForCart
 *   CEU/classes/Cart.class.php          checkCartPromo, getDiscountData
 *   CEU/classes/Promotions.class.php    getPromoById, getUserDiscount
 *   CEU/process/forms.php               todo=check_promo validation + messages
 *
 * WHERE THE DATA COMES FROM (all CEU_DB, verified against the live schema)
 * ───────────────────────────────────────────────────────────────────────
 *   items      CEU_TRAININGS_TAKEN ⨝ CEU_TRAININGS_BY_PROFESSION
 *              via ceu_cart_get_items() in ceu-cart.php — see the note there on
 *              why the cart is drawn from taken trainings, not the catalogue
 *   personal   CEU_USER            via ceu_profile_user() in ceu-profile.php
 *   status     CEU_USER_STATUS     CREDITS / PERCENT toward renewal
 *   discounts  CEU_USER_DISCOUNTS → CEU_PROMO_CODES → CEU_PROMO_VALUES
 *   promo      CEU_PROMO_CODES    → CEU_PROMO_VALUES
 *
 * MONEY IS COMPUTED SERVER-SIDE, ALWAYS
 * ─────────────────────────────────────
 * The cart is a cookie the browser can edit at will, so nothing here trusts a
 * price or a total that arrived from the client. The cookie supplies training IDs
 * and a promo code and nothing else; every figure is re-read from CEU_DB on each
 * render, and the IDs only ever select from the signed-in user's own rows.
 *
 * The checkout submission keeps that property: it posts a promo CODE, never a
 * price. cart/checkout.php recomputes final_cost from the cookie and the user's
 * taken trainings, re-applies the promo itself, and charges $_SESSION['total_cost'].
 * See ceu_cart_checkout_vars() for the exact fields.
 *
 * KNOWN DEVIATION
 * ───────────────
 * The legacy cart/index.php redirects to /user when the cart cookie is absent.
 * This page renders an empty state instead — /cart/ is linked from the header
 * drawer on every page here, and bouncing someone off a page they deliberately
 * opened reads as a broken link.
 */

if (!defined('CEU_CART_SLUG')) {
    define('CEU_CART_SLUG', 'cart');
}

// Cookie holding the applied promo code. Separate from 'cart' so removing the
// last training does not silently drop a code the user typed, and so the code
// survives the reload that the remove buttons trigger.
//
// NOT CLEARED ON LOGOUT — like 'cart' itself. ceu-auth.php clears 'ceu',
// 'ceuSession' and 'pro' on wp_logout and in its stale-cookie sweeper, and
// neither cart cookie is in those lists, so both outlive the session by 30 days.
// That matters more here than for 'cart': a code activated from Available
// Discounts belongs to one named user. Add 'cart' and this constant's value to
// both lists in ceu-auth.php when that cleanup is made.
if (!defined('CEU_CART_PROMO_COOKIE')) {
    define('CEU_CART_PROMO_COOKIE', 'ceu_promo');
}

// ─── Is this the cart page? ───────────────────────────────────────────────────

function ceu_is_cart_page() {
    $path = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
    if (basename($path) === CEU_CART_SLUG) return true;
    if (function_exists('is_page') && is_page(CEU_CART_SLUG)) return true;
    return false;
}

// ─── Promo codes ──────────────────────────────────────────────────────────────
//
// Ported from the legacy flow, which is spread over three files:
//   CEU/process/forms.php          todo=check_promo — validation and the messages
//   CEU/classes/Promotions.class.php  getPromoById / getUserDiscount
//   CEU/classes/Cart.class.php        checkCartPromo — the arithmetic
//
// The id this returns as 'PROMO_ID' is CEU_PROMO_VALUES.ID, NOT the row id in
// CEU_PROMO_CODES. getPromoById selects "a.*, b.*" from codes and values, so b.ID
// overwrites a.ID in the associative row, and it is that value the legacy page
// posts to checkout as `promo`. Preserved exactly — see ceu_cart_checkout_vars().

/** getPromoById: a live code, joined to its value. */
function ceu_cart_promo_lookup(string $code): ?array {
    $code = strtolower(trim($code));
    if ($code === '' || !function_exists('ceu_db_connect')) return null;

    $db = ceu_db_connect();
    if (!$db) return null;

    // EXPIRES >= CURDATE(), matching getPromoById — a code expiring today still
    // works for the whole of that day.
    $sql = 'SELECT c.PROMO_CODE, c.RESTRICTION, c.EXPIRES,
                   v.ID AS PROMO_ID, v.DISPLAY_VALUE, v.PROMO_VALUE, v.PROMO_TYPE
            FROM CEU_PROMO_CODES c
            JOIN CEU_PROMO_VALUES v ON v.ID = c.PROMO_ID
            WHERE c.PROMO_CODE = ? AND c.EXPIRES >= CURDATE()
            LIMIT 1';

    $stmt = $db->prepare($sql);
    if (!$stmt) return null;
    $stmt->bind_param('s', $code);
    $stmt->execute();
    $row = $stmt->get_result()->fetch_assoc();
    $stmt->close();

    return $row ?: null;
}

/**
 * getUserDiscount: has this user already spent this code?
 *
 * The legacy answer is not a flag on CEU_USER_DISCOUNTS — it is whether the code
 * appears in one of the user's invoice numbers, because processPayment() builds
 * the invoice as (cart string . promo code). Redemption is therefore recorded by
 * the transaction itself, which is why the same test works for typed codes and
 * assigned discounts alike.
 */
function ceu_cart_promo_used(string $code): bool {
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return false;
    if (!function_exists('ceu_db_connect')) return false;

    $user_id = (int) get_user_meta(get_current_user_id(), '_ceu_id', true);
    if (!$user_id) return false;

    $db = ceu_db_connect();
    if (!$db) return false;

    $stmt = $db->prepare('SELECT 1 FROM CEU_TRANSACTIONS
                          WHERE USER_ID = ? AND INVOICE_NUM LIKE CONCAT("%", ?, "%")
                          LIMIT 1');
    if (!$stmt) return false;
    $stmt->bind_param('is', $user_id, $code);
    $stmt->execute();
    $used = (bool) $stmt->get_result()->fetch_row();
    $stmt->close();

    return $used;
}

/**
 * The legacy state gate. RESTRICTION is usually a state code; a promo restricted
 * to one state is refused to everyone else. 'discount' and 'training' are not
 * states and are exempt — which is also why a code marked 'discount' CAN be typed
 * into the box, not only activated from Available Discounts.
 */
function ceu_cart_promo_state_blocked(array $promo): bool {
    $restriction = trim((string) $promo['RESTRICTION']);
    if ($restriction === '' || in_array($restriction, ['discount', 'training'], true)) {
        return false;
    }

    $user = function_exists('ceu_profile_user') ? ceu_profile_user() : null;
    return $restriction !== (string) ($user['STATE'] ?? '');
}

/**
 * The one-training rule.
 *
 * A percent or free-training promo is refused while more than one training is in
 * the cart — the legacy cart prints "Discount only valid for one training" and
 * drops the code rather than discounting the whole basket. Dollar and free-user
 * codes are not restricted this way.
 */
function ceu_cart_promo_needs_single(array $promo): bool {
    return in_array(strtolower((string) $promo['PROMO_TYPE']), ['percent', 'training'], true);
}

/** The promo applied to this cart, re-validated. Returns [row|null, error]. */
function ceu_cart_applied_promo(array $items): array {
    $code = isset($_COOKIE[CEU_CART_PROMO_COOKIE])
        ? sanitize_text_field($_COOKIE[CEU_CART_PROMO_COOKIE])
        : '';
    if ($code === '') return [null, ''];

    $promo = ceu_cart_promo_lookup($code);
    if (!$promo) return [null, ''];

    // Re-checked on every render, not just when the code is entered: the cart can
    // grow after a promo is applied, and a second training must invalidate a
    // percentage the same way the legacy page does.
    if (ceu_cart_promo_needs_single($promo) && count($items) > 1) {
        return [null, 'Discount only valid for one training. Please remove all trainings but one.'];
    }

    return [$promo, ''];
}

/** Discounts issued to this user and not yet spent. Drives the bottom panel. */
function ceu_cart_available_discounts(): array {
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return [];
    if (!function_exists('ceu_db_connect')) return [];

    $user_id = (int) get_user_meta(get_current_user_id(), '_ceu_id', true);
    if (!$user_id) return [];

    $db = ceu_db_connect();
    if (!$db) return [];

    // getUserDiscountsBYID, plus the expiry filter the legacy applies when it
    // renders each row (getDiscountData shows expired ones greyed out; there is
    // no value in offering those here).
    $sql = 'SELECT d.PROMO_CODE, d.DATE_USED, d.EXPIRES,
                   v.ID AS PROMO_ID, v.DISPLAY_VALUE, v.PROMO_VALUE, v.PROMO_TYPE,
                   c.RESTRICTION
            FROM CEU_USER_DISCOUNTS d
            JOIN CEU_PROMO_CODES  c ON c.PROMO_CODE = d.PROMO_CODE
            JOIN CEU_PROMO_VALUES v ON v.ID = c.PROMO_ID
            WHERE d.USER_ID = ?
              AND d.DATE_USED IS NULL
              AND (d.EXPIRES IS NULL OR d.EXPIRES >= CURDATE())
              AND c.EXPIRES >= CURDATE()
            ORDER BY d.EXPIRES ASC';

    $stmt = $db->prepare($sql);
    if (!$stmt) return [];
    $stmt->bind_param('i', $user_id);
    $stmt->execute();
    $rows = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();

    return $rows;
}

// ─── My Status ────────────────────────────────────────────────────────────────

/** CEU_USER_STATUS row — credits earned this term and percent toward renewal. */
function ceu_cart_user_status(): ?array {
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return null;
    if (!function_exists('ceu_db_connect')) return null;

    $user_id = (int) get_user_meta(get_current_user_id(), '_ceu_id', true);
    if (!$user_id) return null;

    $db = ceu_db_connect();
    if (!$db) return null;

    $sql = 'SELECT s.CREDITS, s.PERCENT, s.CREDITS_OUTSIDE, s.OUTSIDE_SOURCE, s.TERMS,
                   p.PROFESSION
            FROM CEU_USER_STATUS s
            LEFT JOIN CEU_PROFESSIONS p ON p.ID = s.PROFESSION_ID
            WHERE s.USER_ID = ? AND s.ACTIVE = 1
            ORDER BY s.ID DESC
            LIMIT 1';

    $stmt = $db->prepare($sql);
    if (!$stmt) return null;
    $stmt->bind_param('i', $user_id);
    $stmt->execute();
    $row = $stmt->get_result()->fetch_assoc();
    $stmt->close();

    return $row ?: null;
}

// ─── Totals ───────────────────────────────────────────────────────────────────
//
// A port of CART::checkCartPromo (CEU/classes/Cart.class.php). The types and
// their arithmetic, verbatim:
//
//   training   one free training     → new total 0.00
//   free       "free user" account   → new total 0.00
//   dollar     flat amount off       → total − value, floored at 0.00
//   percent    fraction off          → total − (total × value)
//   credits    grants CE credits, not money off — no cart discount
//
// PROMO_VALUE is a varchar: '.25' for a quarter off, '5.00' for five dollars off.
//
// This is display arithmetic only. The legacy checkout does NOT trust the totals
// posted to it — cart/checkout.php recomputes final_cost from the cart cookie and
// the user's own taken-training rows, then re-applies the promo server-side, and
// charges $_SESSION['total_cost']. Keeping that property is the whole reason the
// submission below posts a promo code rather than a price.

function ceu_cart_promo_supported(?array $promo): bool {
    return $promo && in_array(
        strtolower((string) $promo['PROMO_TYPE']),
        ['percent', 'dollar', 'free', 'training'],
        true
    );
}

function ceu_cart_totals(array $items, ?array $promo): array {
    $subtotal = 0.0;
    foreach ($items as $item) {
        $subtotal += (float) $item['cost'];
    }
    $subtotal = round($subtotal, 2);

    $total = $subtotal;
    if (ceu_cart_promo_supported($promo)) {
        switch (strtolower((string) $promo['PROMO_TYPE'])) {
            case 'training':
            case 'free':
                $total = 0.0;
                break;
            case 'dollar':
                $total = max(0.0, $subtotal - (float) $promo['PROMO_VALUE']);
                break;
            case 'percent':
                $total = $subtotal - ($subtotal * (float) $promo['PROMO_VALUE']);
                break;
        }
    }
    $total = round($total, 2);

    return [
        'subtotal' => $subtotal,
        'discount' => round($subtotal - $total, 2),
        'total'    => $total,
    ];
}

/**
 * The four hidden fields the legacy CHECKOUT button submits.
 *
 * cart/checkout.php reads exactly these names:
 *
 *   total       the undiscounted subtotal, always 2dp
 *   new_total   the discounted total, 2dp — EMPTY STRING when no promo applies,
 *               which is how the legacy page leaves it and how checkout tells
 *               "no discount" from "discounted to zero"
 *   promo_code  the code string; drives getPromoById on the checkout side
 *   promo       CEU_PROMO_VALUES.ID; stored as $_SESSION['promo_id'] and written
 *               to CEU_TRANSACTIONS.PROMO_ID
 *
 * When the one-training rule rejects a promo, the legacy page blanks promo_code
 * and promo, so the checkout never sees the code at all. Same here.
 */
function ceu_cart_checkout_vars(array $totals, ?array $promo): array {
    $has_discount = $promo && $totals['discount'] > 0;

    // Cast: mysqli hands back PROMO_ID as a native int, so without this the field
    // value's type depends on whether the row came from the driver or a literal.
    return [
        'total'      => number_format($totals['subtotal'], 2, '.', ''),
        'new_total'  => $has_discount ? number_format($totals['total'], 2, '.', '') : '',
        'promo_code' => (string) ($promo['PROMO_CODE'] ?? ''),
        'promo'      => (string) ($promo['PROMO_ID'] ?? ''),
    ];
}

/**
 * Where CHECKOUT posts. The legacy form targets SECURE_PATH . "/cart/checkout/";
 * on the new site that page has not been rebuilt yet, so this is a constant to
 * point at whatever replaces it without touching the markup.
 */
function ceu_cart_checkout_url(): string {
    if (defined('CEU_CART_CHECKOUT_URL')) return CEU_CART_CHECKOUT_URL;
    return home_url('/checkout/');
}

/**
 * How a discount reads in the Available Discounts list.
 *
 * getDiscountData (CEU/classes/Cart.class.php) labels each type differently, and
 * for percent it multiplies PROMO_VALUE by 100 rather than printing DISPLAY_VALUE
 * — the two disagree in the data (row 10 has DISPLAY_VALUE '15%' against
 * PROMO_VALUE '.15', but nothing guarantees it), so the computed form wins here
 * as it does there.
 */
function ceu_cart_discount_label(array $d): string {
    $value = (string) $d['PROMO_VALUE'];

    switch (strtolower((string) $d['PROMO_TYPE'])) {
        case 'training': return $value . ' Free Training';
        case 'credits':  return $value . ' Free Credits';
        case 'dollar':   return '$' . $value . ' Off';
        case 'free':     return 'Free - No Charge Client';
        case 'percent':  return rtrim(rtrim(number_format((float) $value * 100, 2), '0'), '.') . '% Off';
    }
    return (string) $d['DISPLAY_VALUE'];
}

// ─── The page ─────────────────────────────────────────────────────────────────

function ceu_cart_page_html(): string {
    $ids   = function_exists('ceu_cart_get_ids')   ? ceu_cart_get_ids()        : [];
    $items = function_exists('ceu_cart_get_items') ? ceu_cart_get_items($ids)  : [];

    // The one-training rule can reject a promo as the cart grows, so this is
    // resolved against the current items, not just at the moment it was entered.
    [$promo, $promo_block] = ceu_cart_applied_promo($items);
    $totals     = ceu_cart_totals($items, $promo);
    $checkout   = ceu_cart_checkout_vars($totals, $promo);
    $discounts  = ceu_cart_available_discounts();
    $status     = ceu_cart_user_status();
    $logged_in  = function_exists('ceu_is_logged_in') && ceu_is_logged_in();
    $user       = ($logged_in && function_exists('ceu_profile_user')) ? ceu_profile_user() : null;

    $money = fn($n) => '$' . number_format((float) $n, 2);
    $fcred = fn($n) => rtrim(rtrim(number_format((float) $n, 2), '0'), '.');

    // Training pages live at /{profession}/{id}/{title}/ (ceu-training-page.php's
    // rewrite rule). The profession comes from the 'pro' cookie, which is only set
    // while signed in — so a signed-out visitor gets the title as plain text rather
    // than a link that would 404.
    $pro  = isset($_COOKIE['pro']) ? sanitize_key($_COOKIE['pro']) : '';
    $link = function (array $item) use ($pro) {
        if (!$pro) return '';
        return home_url('/' . $pro . '/' . (int) $item['TRAINING_ID']
                        . '/' . sanitize_title($item['title']) . '/');
    };

    // Outcome of the last promo POST, reported through a query arg the same way
    // ceu-profile.php reports a save.
    // Wording carried over from CEU/process/forms.php so the messages a customer
    // has seen for years do not change under them.
    $entered = sanitize_text_field($_GET['code'] ?? '');
    $promo_notes = [
        'applied'    => ['ok',  'Discount applied.'],
        'removed'    => ['ok',  'Discount removed.'],
        'unknown'    => ['bad', $entered . ' is not in our system.'],
        'used'       => ['bad', $entered . ' has been used.'],
        'restricted' => ['bad', $entered . ' is restricted to a specific state.'],
        'single'     => ['bad', 'Discount only valid for one training. Please remove all trainings but one.'],
        'empty'      => ['bad', 'Promo code is blank.'],
    ];
    $note = $promo_notes[$_GET['promo'] ?? ''] ?? null;

    $back = ceu_is_cart_page() && function_exists('get_permalink') && get_permalink()
        ? get_permalink()
        : home_url('/' . CEU_CART_SLUG . '/');

    ob_start();
    ?>
    <div id="ceu-cart-page">
        <h1 class="ceu-ct-heading">Your Cart</h1>

        <?php if ($note) : ?>
            <div class="ceu-ct-note ceu-ct-note-<?= esc_attr($note[0]) ?>"><?= esc_html($note[1]) ?></div>
        <?php endif; ?>

        <div class="ceu-ct-grid">

            <!-- ── Left column ─────────────────────────────────────────────── -->
            <aside class="ceu-ct-side">

                <section class="ceu-ct-card">
                    <div class="ceu-ct-card-head">
                        <h2>Personal Info</h2>
                        <?php if ($user) : ?>
                            <a class="ceu-ct-link" href="<?= esc_url(home_url('/user/')) ?>">Edit</a>
                        <?php endif; ?>
                    </div>

                    <div class="ceu-ct-card-body">
                        <?php if ($user) :
                            $name = trim(($user['FIRST'] ?? '') . ' ' . ($user['LAST'] ?? ''));
                            $csz  = trim(trim(($user['CITY'] ?? '') . ', ' . ($user['STATE'] ?? ''), ', ')
                                    . ' ' . ($user['ZIP'] ?? ''));
                            ?>
                            <p class="ceu-ct-name"><?= esc_html($name ?: '—') ?></p>
                            <address class="ceu-ct-address">
                                <?php if (!empty($user['ADDRESS_1'])) : ?>
                                    <?= esc_html($user['ADDRESS_1']) ?><br>
                                <?php endif; ?>
                                <?php if (!empty($user['ADDRESS_2'])) : ?>
                                    <?= esc_html($user['ADDRESS_2']) ?><br>
                                <?php endif; ?>
                                <?php if ($csz) : ?><?= esc_html($csz) ?><br><?php endif; ?>
                                <?php if (!empty($user['PHONE'])) : ?>
                                    <?= esc_html($user['PHONE']) ?><br>
                                <?php endif; ?>
                            </address>
                            <?php if (!empty($user['EMAIL'])) : ?>
                                <a class="ceu-ct-link" href="mailto:<?= esc_attr($user['EMAIL']) ?>">
                                    <?= esc_html($user['EMAIL']) ?>
                                </a>
                            <?php endif; ?>
                            <?php if (!empty($user['LIC_NUM'])) : ?>
                                <p class="ceu-ct-lic">
                                    <span class="ceu-ct-lic-label">Licence #</span>
                                    <?= esc_html($user['LIC_NUM']) ?>
                                </p>
                            <?php endif; ?>
                        <?php else : ?>
                            <p class="ceu-ct-muted">
                                Sign in to check out — your courses are added to your account.
                            </p>
                            <a class="ceu-ct-btn ceu-ct-btn-ghost"
                               href="<?= esc_url(home_url('/login/')) ?>">Sign in</a>
                        <?php endif; ?>
                    </div>
                </section>

                <?php if ($status) :
                    // PERCENT is stored, not derived — the renewal target varies by
                    // profession and state, so the number is trusted as written and
                    // only clamped for the bar's width.
                    $pct = max(0, min(100, (int) $status['PERCENT']));
                    ?>
                    <section class="ceu-ct-card">
                        <div class="ceu-ct-card-head"><h2>My Status</h2></div>
                        <div class="ceu-ct-card-body">
                            <div class="ceu-ct-meter" role="img"
                                 aria-label="<?= esc_attr($pct) ?>% of your CE requirement complete">
                                <span class="ceu-ct-meter-fill" style="width: <?= (int) $pct ?>%"></span>
                            </div>
                            <p class="ceu-ct-meter-label">
                                <strong><?= esc_html($pct) ?>%</strong> of your CE requirement
                            </p>

                            <dl class="ceu-ct-stats">
                                <div>
                                    <dt>Credits earned</dt>
                                    <dd><?= esc_html($fcred($status['CREDITS'])) ?></dd>
                                </div>
                                <?php if ((float) $status['CREDITS_OUTSIDE'] > 0) : ?>
                                    <div>
                                        <dt>Credits elsewhere</dt>
                                        <dd><?= esc_html($fcred($status['CREDITS_OUTSIDE'])) ?></dd>
                                    </div>
                                <?php endif; ?>
                                <?php if (!empty($status['PROFESSION'])) : ?>
                                    <div>
                                        <dt>Profession</dt>
                                        <dd><?= esc_html($status['PROFESSION']) ?></dd>
                                    </div>
                                <?php endif; ?>
                            </dl>
                        </div>
                    </section>
                <?php endif; ?>
            </aside>

            <!-- ── Right column ────────────────────────────────────────────── -->
            <main class="ceu-ct-main">

                <section class="ceu-ct-card">
                    <div class="ceu-ct-card-head ceu-ct-card-head-table">
                        <h2>Training<?= count($items) === 1 ? '' : 's' ?></h2>
                        <span class="ceu-ct-col-cost">Cost</span>
                    </div>

                    <?php if (empty($items)) : ?>
                        <div class="ceu-ct-empty">
                            <p>Your cart is empty.</p>
                            <a class="ceu-ct-btn ceu-ct-btn-primary"
                               href="<?= esc_url(home_url('/courses/')) ?>">Browse courses</a>
                        </div>
                    <?php else : ?>
                        <ul class="ceu-ct-items">
                            <?php foreach ($items as $item) :
                                $credits = $fcred($item['credits'] ?? 0);
                                ?>
                                <li class="ceu-ct-item">
                                    <div class="ceu-ct-item-main">
                                        <?php $url = $link($item); ?>
                                        <?php if ($url) : ?>
                                            <a class="ceu-ct-item-title" href="<?= esc_url($url) ?>">
                                                <?= esc_html($item['title']) ?>
                                            </a>
                                        <?php else : ?>
                                            <span class="ceu-ct-item-title"><?= esc_html($item['title']) ?></span>
                                        <?php endif; ?>
                                        <?php if ((float) ($item['credits'] ?? 0) > 0) : ?>
                                            <span class="ceu-ct-item-meta">
                                                <?= esc_html($credits) ?> CE credit
                                                <?= (float) $item['credits'] === 1.0 ? 'hour' : 'hours' ?>
                                            </span>
                                        <?php endif; ?>
                                    </div>

                                    <!-- The delegated [data-ceu-remove] handler in ceu-cart.php
                                         rewrites the cookie and reloads. Same attribute, so the
                                         drawer and this page share one implementation. -->
                                    <button type="button" class="ceu-ct-remove"
                                            data-ceu-remove="<?= (int) $item['TRAINING_ID'] ?>"
                                            aria-label="Remove <?= esc_attr($item['title']) ?> from cart">
                                        &times;
                                    </button>

                                    <span class="ceu-ct-item-cost"><?= esc_html($money($item['cost'])) ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>

                        <div class="ceu-ct-summary">
                            <form class="ceu-ct-promo" method="post"
                                  action="<?= esc_url(admin_url('admin-post.php')) ?>">
                                <input type="hidden" name="action" value="ceu_apply_promo">
                                <input type="hidden" name="redirect_to" value="<?= esc_url($back) ?>">
                                <?php wp_nonce_field('ceu_apply_promo', '_ceu_promo_nonce'); ?>

                                <label class="ceu-ct-promo-label" for="ceu-promo-input">Promo code</label>
                                <div class="ceu-ct-promo-row">
                                    <input id="ceu-promo-input" type="text" name="promo_code"
                                           autocomplete="off" spellcheck="false"
                                           value="<?= esc_attr($promo['PROMO_CODE'] ?? '') ?>"
                                           <?= $promo ? 'readonly' : '' ?>>
                                    <?php if ($promo) : ?>
                                        <button type="submit" name="remove" value="1"
                                                class="ceu-ct-btn ceu-ct-btn-ghost">Remove</button>
                                    <?php else : ?>
                                        <button type="submit" class="ceu-ct-btn ceu-ct-btn-ghost">Apply</button>
                                    <?php endif; ?>
                                </div>

                                <?php if ($promo_block) : ?>
                                    <p class="ceu-ct-promo-warn"><?= esc_html($promo_block) ?></p>
                                <?php elseif ($promo && !ceu_cart_promo_supported($promo)) : ?>
                                    <p class="ceu-ct-promo-warn">
                                        This code awards
                                        <?= esc_html(strtolower($promo['DISPLAY_VALUE'])) ?>
                                        rather than money off, so it does not change this total.
                                    </p>
                                <?php endif; ?>
                            </form>

                            <div class="ceu-ct-summary-right">
                            <dl class="ceu-ct-totals">
                                <div class="ceu-ct-total-row">
                                    <dt>Subtotal</dt>
                                    <dd><?= esc_html($money($totals['subtotal'])) ?></dd>
                                </div>

                                <?php if ($totals['discount'] > 0) : ?>
                                    <div class="ceu-ct-total-row ceu-ct-total-discount">
                                        <dt>
                                            Discount
                                            <span class="ceu-ct-tag"><?= esc_html(ceu_cart_discount_label($promo)) ?></span>
                                        </dt>
                                        <dd>&minus;<?= esc_html($money($totals['discount'])) ?></dd>
                                    </div>
                                <?php endif; ?>

                                <div class="ceu-ct-total-row ceu-ct-total-grand">
                                    <dt>Total</dt>
                                    <dd><?= esc_html($money($totals['total'])) ?></dd>
                                </div>
                            </dl>

                            <?php if ($logged_in) : ?>
                                <!-- The legacy cartCheckout form, field for field. The
                                     checkout page recomputes the charge from the cart
                                     cookie and the user's taken trainings; these carry
                                     the promo it re-applies and the totals it displays. -->
                                <form class="ceu-ct-checkout-form" method="post"
                                      action="<?= esc_url(ceu_cart_checkout_url()) ?>">
                                    <?php foreach ($checkout as $field => $value) : ?>
                                        <input type="hidden" name="<?= esc_attr($field) ?>"
                                               value="<?= esc_attr($value) ?>">
                                    <?php endforeach; ?>
                                    <button type="submit"
                                            class="ceu-ct-btn ceu-ct-btn-primary ceu-ct-checkout">
                                        Checkout
                                    </button>
                                </form>
                            <?php else : ?>
                                <a class="ceu-ct-btn ceu-ct-btn-primary ceu-ct-checkout"
                                   href="<?= esc_url(home_url('/login/')) ?>">Sign in to check out</a>
                            <?php endif; ?>
                            </div>
                        </div>
                    <?php endif; ?>
                </section>

                <?php if ($discounts) : ?>
                    <section class="ceu-ct-card">
                        <div class="ceu-ct-card-head"><h2>Available Discounts</h2></div>
                        <div class="ceu-ct-card-body">
                            <p class="ceu-ct-muted">
                                Select to activate discount.
                                <span class="ceu-ct-hint" title="Only one discount can be used at a time.">?</span>
                            </p>
                            <ul class="ceu-ct-discounts">
                                <?php foreach ($discounts as $d) :
                                    $active = $promo && $promo['PROMO_CODE'] === $d['PROMO_CODE'];
                                    ?>
                                    <li>
                                        <form method="post"
                                              action="<?= esc_url(admin_url('admin-post.php')) ?>">
                                            <input type="hidden" name="action" value="ceu_apply_promo">
                                            <input type="hidden" name="redirect_to" value="<?= esc_url($back) ?>">
                                            <input type="hidden" name="promo_code"
                                                   value="<?= esc_attr($d['PROMO_CODE']) ?>">
                                            <?php wp_nonce_field('ceu_apply_promo', '_ceu_promo_nonce'); ?>

                                            <button type="submit"
                                                    class="ceu-ct-discount <?= $active ? 'ceu-ct-discount-on' : '' ?>"
                                                    <?= $active ? 'disabled' : '' ?>>
                                                <span class="ceu-ct-discount-value">
                                                    <?= esc_html(ceu_cart_discount_label($d)) ?>
                                                </span>
                                                <span class="ceu-ct-discount-meta">
                                                    <?php if (!empty($d['EXPIRES'])) : ?>
                                                        Expires <?= esc_html(date('M j, Y', strtotime($d['EXPIRES']))) ?>
                                                    <?php endif; ?>
                                                </span>
                                                <span class="ceu-ct-discount-cta">
                                                    <?= $active ? 'Applied' : 'Apply' ?>
                                                </span>
                                            </button>
                                        </form>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </section>
                <?php endif; ?>
            </main>
        </div>
    </div>
    <?php
    return ob_get_clean();
}

// ─── Apply / remove a promo code ──────────────────────────────────────────────
// A form POST rather than a JS cookie write, so the code is checked against
// CEU_DB before it is ever stored, and so the outcome can be reported. Registered
// for logged-out users too: a typed code is public, and someone can fill the cart
// before signing in.

function ceu_do_apply_promo() {
    $back = !empty($_POST['redirect_to'])
        ? esc_url_raw($_POST['redirect_to'])
        : home_url('/' . CEU_CART_SLUG . '/');

    // The rejected code rides along so the page can name it, the way the legacy
    // messages do ("bday50 has been used.").
    $finish = function (string $status, string $code = '') use ($back) {
        $url = add_query_arg('promo', $status, $back);
        if ($code !== '') $url = add_query_arg('code', rawurlencode($code), $url);
        wp_safe_redirect($url);
        exit;
    };

    $set_cookie = function (string $value) {
        $exp = $value === '' ? time() - 3600 : time() + 30 * DAY_IN_SECONDS;
        setcookie(CEU_CART_PROMO_COOKIE, $value, $exp, '/');
        $_COOKIE[CEU_CART_PROMO_COOKIE] = $value;
    };

    if (!wp_verify_nonce($_POST['_ceu_promo_nonce'] ?? '', 'ceu_apply_promo')) {
        $finish('unknown');
    }

    // The Remove button posts the same form.
    if (!empty($_POST['remove'])) {
        $set_cookie('');
        $finish('removed');
    }

    $code = strtolower(trim(sanitize_text_field($_POST['promo_code'] ?? '')));
    if ($code === '') $finish('empty');

    // Same order of checks as CEU/process/forms.php todo=check_promo.
    $promo = ceu_cart_promo_lookup($code);
    if (!$promo)                              $finish('unknown', $code);
    if (ceu_cart_promo_used($code))           $finish('used', $code);
    if (ceu_cart_promo_state_blocked($promo)) $finish('restricted', $code);

    // The one-training rule is checked here too, so entering a percentage against
    // a full cart is refused outright rather than silently stored and then
    // suppressed on render.
    $ids   = function_exists('ceu_cart_get_ids')   ? ceu_cart_get_ids()       : [];
    $items = function_exists('ceu_cart_get_items') ? ceu_cart_get_items($ids) : [];
    if (ceu_cart_promo_needs_single($promo) && count($items) > 1) {
        $finish('single', $code);
    }

    $set_cookie($promo['PROMO_CODE']);
    $finish('applied', $code);
}

add_action('admin_post_ceu_apply_promo',        'ceu_do_apply_promo');
add_action('admin_post_nopriv_ceu_apply_promo', 'ceu_do_apply_promo');

// ─── Mounting ─────────────────────────────────────────────────────────────────

add_shortcode('ceu_cart', function () {
    $GLOBALS['ceu_cart_page_rendered'] = true;
    return ceu_cart_page_html();
});

// Replace Woo's cart on /cart/. Priority 20 so Woo's own the_content work is done
// first and simply discarded; is_main_query keeps this off excerpts and feeds.
add_filter('the_content', function ($content) {
    if (is_admin() || !ceu_is_cart_page()) return $content;
    if (!is_main_query() || !in_the_loop())  return $content;
    if (!empty($GLOBALS['ceu_cart_page_rendered'])) return $content;

    $GLOBALS['ceu_cart_page_rendered'] = true;
    return ceu_cart_page_html();
}, 20);

// ─── Styles ───────────────────────────────────────────────────────────────────

add_action('wp_footer', function () {
    if (empty($GLOBALS['ceu_cart_page_rendered'])) return;
    ?>
    <style>
    #ceu-cart-page {
        /* Same tokens as ceu-certificates.php — this block is a sibling of that
           one, not a descendant, so the variables have to be declared again. */
        --ceu-blue:  #2563eb;
        --ceu-navy:  #183e7d;
        --ceu-ink:   #0f172a;
        --ceu-muted: #64748b;
        --ceu-line:  #e2e8f0;
        --ceu-bg:    #f8fafc;
        --ceu-good:  #15803d;

        width: 100%;
        font-family: inherit;
        color: var(--ceu-ink);
    }

    /* Scoped rather than assumed: the full-width Checkout button and the promo
       input both set width:100% alongside their own padding, which overflows the
       card by the padding if the theme has not already set border-box. */
    #ceu-cart-page, #ceu-cart-page *, #ceu-cart-page *::before, #ceu-cart-page *::after {
        box-sizing: border-box;
    }

    #ceu-cart-page .ceu-ct-heading {
        font-size: 1.6em;
        font-weight: 700;
        margin: 0 0 20px;
        line-height: 1.25;
        color: var(--ceu-ink);
    }

    /* ── Notices ── */
    #ceu-cart-page .ceu-ct-note {
        padding: 11px 14px;
        border-radius: 8px;
        margin-bottom: 18px;
        font-size: .92em;
        font-weight: 600;
        border: 1px solid transparent;
    }
    #ceu-cart-page .ceu-ct-note-ok  { background: #f0fdf4; border-color: #bbf7d0; color: #166534; }
    #ceu-cart-page .ceu-ct-note-bad { background: #fef2f2; border-color: #fecaca; color: #b91c1c; }

    /* ── Layout: sidebar + main, stacking on narrow screens ── */
    #ceu-cart-page .ceu-ct-grid {
        display: grid;
        grid-template-columns: minmax(0, 320px) minmax(0, 1fr);
        gap: 24px;
        align-items: start;
    }
    #ceu-cart-page .ceu-ct-side,
    #ceu-cart-page .ceu-ct-main {
        display: flex;
        flex-direction: column;
        gap: 24px;
        min-width: 0;
    }
    @media (max-width: 900px) {
        #ceu-cart-page .ceu-ct-grid { grid-template-columns: minmax(0, 1fr); }
        /* Cart first on a phone — it is what the page is for. */
        #ceu-cart-page .ceu-ct-main { order: -1; }
    }

    /* ── Cards ── */
    #ceu-cart-page .ceu-ct-card {
        border: 1px solid var(--ceu-line);
        border-radius: 12px;
        background: #fff;
        overflow: hidden;
    }
    #ceu-cart-page .ceu-ct-card-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 14px 18px;
        background: var(--ceu-navy);
        color: #fff;
    }
    #ceu-cart-page .ceu-ct-card-head h2 {
        margin: 0;
        font-size: 1em;
        font-weight: 700;
        color: #fff;
        line-height: 1.3;
    }
    #ceu-cart-page .ceu-ct-card-head .ceu-ct-link { color: #fff; opacity: .85; }
    #ceu-cart-page .ceu-ct-col-cost { font-size: .85em; font-weight: 600; opacity: .85; }
    #ceu-cart-page .ceu-ct-card-body { padding: 18px; }

    #ceu-cart-page .ceu-ct-link {
        color: var(--ceu-blue);
        font-size: .9em;
        font-weight: 600;
        text-decoration: none;
        word-break: break-word;
    }
    #ceu-cart-page .ceu-ct-link:hover { text-decoration: underline; }
    #ceu-cart-page .ceu-ct-muted { color: var(--ceu-muted); font-size: .92em; margin: 0 0 12px; }

    /* ── Personal info ── */
    #ceu-cart-page .ceu-ct-name { font-weight: 700; margin: 0 0 6px; font-size: 1.02em; }
    #ceu-cart-page .ceu-ct-address {
        font-style: normal;
        color: var(--ceu-muted);
        line-height: 1.65;
        margin: 0 0 8px;
        font-size: .93em;
    }
    #ceu-cart-page .ceu-ct-lic {
        margin: 12px 0 0;
        padding-top: 12px;
        border-top: 1px solid var(--ceu-line);
        font-size: .93em;
    }
    #ceu-cart-page .ceu-ct-lic-label { color: var(--ceu-muted); margin-right: 6px; }

    /* ── My Status ── */
    #ceu-cart-page .ceu-ct-meter {
        height: 10px;
        border-radius: 20px;
        background: var(--ceu-line);
        overflow: hidden;
    }
    #ceu-cart-page .ceu-ct-meter-fill {
        display: block;
        height: 100%;
        border-radius: 20px;
        background: linear-gradient(90deg, var(--ceu-navy), #4b9ade);
        transition: width .4s ease;
    }
    #ceu-cart-page .ceu-ct-meter-label {
        margin: 10px 0 0;
        font-size: .92em;
        color: var(--ceu-muted);
    }
    #ceu-cart-page .ceu-ct-meter-label strong { color: var(--ceu-ink); font-size: 1.15em; }

    #ceu-cart-page .ceu-ct-stats {
        margin: 16px 0 0;
        padding-top: 14px;
        border-top: 1px solid var(--ceu-line);
        display: flex;
        flex-direction: column;
        gap: 9px;
    }
    #ceu-cart-page .ceu-ct-stats > div {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        font-size: .93em;
    }
    #ceu-cart-page .ceu-ct-stats dt { color: var(--ceu-muted); margin: 0; font-weight: 400; }
    #ceu-cart-page .ceu-ct-stats dd { margin: 0; font-weight: 600; text-align: right; }

    /* ── Items ── */
    #ceu-cart-page .ceu-ct-items { list-style: none; margin: 0; padding: 0; }
    #ceu-cart-page .ceu-ct-item {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto auto;
        align-items: start;
        gap: 14px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--ceu-line);
    }
    #ceu-cart-page .ceu-ct-item-main { min-width: 0; }
    #ceu-cart-page .ceu-ct-item-title {
        display: block;
        color: var(--ceu-navy);
        font-weight: 600;
        font-size: .98em;
        line-height: 1.45;
        text-decoration: none;
    }
    a.ceu-ct-item-title:hover { text-decoration: underline; }
    #ceu-cart-page .ceu-ct-item-meta {
        display: block;
        margin-top: 4px;
        font-size: .85em;
        color: var(--ceu-muted);
    }
    #ceu-cart-page .ceu-ct-item-cost {
        font-weight: 700;
        font-size: .98em;
        white-space: nowrap;
        text-align: right;
        min-width: 72px;
    }
    #ceu-cart-page .ceu-ct-remove {
        flex-shrink: 0;
        width: 26px;
        height: 26px;
        line-height: 1;
        border: 1px solid var(--ceu-line);
        border-radius: 50%;
        background: #fff;
        color: var(--ceu-muted);
        font-size: 16px;
        cursor: pointer;
        padding: 0;
        transition: color .15s, border-color .15s, background .15s;
    }
    #ceu-cart-page .ceu-ct-remove:hover {
        color: #e53e3e;
        border-color: #fecaca;
        background: #fff5f5;
    }

    /* ── Empty state ── */
    #ceu-cart-page .ceu-ct-empty { padding: 40px 18px; text-align: center; }
    #ceu-cart-page .ceu-ct-empty p { margin: 0 0 16px; color: var(--ceu-muted); }

    /* ── Summary: promo on the left, totals on the right ── */
    #ceu-cart-page .ceu-ct-summary {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 300px);
        gap: 24px;
        align-items: start;
        padding: 18px;
        background: var(--ceu-bg);
    }
    @media (max-width: 640px) {
        #ceu-cart-page .ceu-ct-summary { grid-template-columns: minmax(0, 1fr); }
    }

    #ceu-cart-page .ceu-ct-promo-label {
        display: block;
        font-size: .85em;
        font-weight: 600;
        color: var(--ceu-muted);
        margin-bottom: 6px;
    }
    #ceu-cart-page .ceu-ct-promo-row { display: flex; gap: 8px; }
    #ceu-cart-page .ceu-ct-promo-row input {
        flex: 1;
        min-width: 0;
        padding: 9px 12px;
        border: 1px solid var(--ceu-line);
        border-radius: 8px;
        background: #fff;
        font-family: inherit;
        font-size: .93em;
        color: var(--ceu-ink);
    }
    #ceu-cart-page .ceu-ct-promo-row input:focus {
        outline: none;
        border-color: var(--ceu-blue);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, .12);
    }
    #ceu-cart-page .ceu-ct-promo-row input[readonly] { background: #eef2f7; color: var(--ceu-muted); }
    #ceu-cart-page .ceu-ct-promo-warn {
        margin: 8px 0 0;
        font-size: .85em;
        color: #b91c1c;
    }

    #ceu-cart-page .ceu-ct-summary-right { min-width: 0; }
    #ceu-cart-page .ceu-ct-totals { margin: 0; }
    #ceu-cart-page .ceu-ct-total-row {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 12px;
        padding: 7px 0;
        font-size: .95em;
    }
    #ceu-cart-page .ceu-ct-total-row dt { margin: 0; color: var(--ceu-muted); font-weight: 400; }
    #ceu-cart-page .ceu-ct-total-row dd { margin: 0; font-weight: 600; white-space: nowrap; }
    #ceu-cart-page .ceu-ct-total-discount dd { color: var(--ceu-good); }
    #ceu-cart-page .ceu-ct-tag {
        display: inline-block;
        margin-left: 6px;
        padding: 1px 7px;
        border-radius: 20px;
        background: #dcfce7;
        color: var(--ceu-good);
        font-size: .8em;
        font-weight: 700;
    }
    #ceu-cart-page .ceu-ct-total-grand {
        margin-top: 6px;
        padding-top: 12px;
        border-top: 2px solid var(--ceu-line);
    }
    #ceu-cart-page .ceu-ct-total-grand dt { color: var(--ceu-ink); font-weight: 700; font-size: 1.05em; }
    #ceu-cart-page .ceu-ct-total-grand dd { font-size: 1.3em; font-weight: 700; }

    /* ── Buttons ── */
    #ceu-cart-page .ceu-ct-btn {
        display: inline-block;
        padding: 10px 18px;
        border: 1px solid transparent;
        border-radius: 8px;
        font-family: inherit;
        font-size: .92em;
        font-weight: 700;
        text-align: center;
        text-decoration: none !important;
        cursor: pointer;
        transition: background .15s, color .15s, border-color .15s;
    }
    #ceu-cart-page .ceu-ct-btn-primary { background: var(--ceu-navy); color: #fff !important; }
    #ceu-cart-page .ceu-ct-btn-primary:hover { background: #4b9ade; }
    #ceu-cart-page .ceu-ct-btn-ghost {
        background: #fff;
        color: var(--ceu-navy) !important;
        border-color: var(--ceu-line);
    }
    #ceu-cart-page .ceu-ct-btn-ghost:hover { background: #eef2f7; }
    #ceu-cart-page .ceu-ct-checkout { display: block; width: 100%; margin-top: 14px; padding: 13px 18px; font-size: 1em; }

    /* ── Available discounts ── */
    #ceu-cart-page .ceu-ct-hint {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 15px; height: 15px;
        border-radius: 50%;
        background: var(--ceu-line);
        color: var(--ceu-muted);
        font-size: .7em;
        font-weight: 700;
        cursor: help;
        vertical-align: middle;
    }
    #ceu-cart-page .ceu-ct-discounts { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
    #ceu-cart-page .ceu-ct-discounts form { margin: 0; }
    #ceu-cart-page .ceu-ct-discount {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 12px 14px;
        border: 1px solid var(--ceu-line);
        border-radius: 10px;
        background: #fff;
        font-family: inherit;
        text-align: left;
        cursor: pointer;
        transition: border-color .15s, background .15s;
    }
    #ceu-cart-page .ceu-ct-discount:hover:not(:disabled) { border-color: var(--ceu-blue); background: #f8fbff; }
    #ceu-cart-page .ceu-ct-discount:disabled { cursor: default; border-color: #bbf7d0; background: #f0fdf4; }
    #ceu-cart-page .ceu-ct-discount-value { font-weight: 700; font-size: .98em; color: var(--ceu-ink); }
    #ceu-cart-page .ceu-ct-discount-meta { flex: 1; font-size: .85em; color: var(--ceu-muted); }
    #ceu-cart-page .ceu-ct-discount-cta { font-size: .88em; font-weight: 700; color: var(--ceu-blue); }
    #ceu-cart-page .ceu-ct-discount-on .ceu-ct-discount-cta { color: var(--ceu-good); }
    </style>
    <?php
}, 5);
