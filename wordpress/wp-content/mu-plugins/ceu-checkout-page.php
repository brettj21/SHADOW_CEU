<?php
/**
 * Plugin Name: CEU Checkout Page
 * Description: /cart/checkout/ — billing address, card details and order summary
 *              in the new look, submitting to the original legacy payment code.
 *
 * THE SPLIT
 * ─────────
 * This file owns the PAGE only. It draws the form and works out what is owed.
 * It takes no payment and issues no certificate.
 *
 * The money is handled by /process/payment.php, which is the process_payment
 * branch of the legacy CEU/process/forms.php copied verbatim, calling the
 * original class files in /classes — CART::processPayment() to Authorize.Net,
 * CART::insertTransaction(), TRAININGS::insertCertificates(),
 * PROMOTIONS::markPromoDiscountAsUsed() and the receipt email. None of that is
 * reimplemented here.
 *
 * THE AMOUNT NEVER TRAVELS IN THE FORM
 * ────────────────────────────────────
 * CART::processPayment() charges $_SESSION['total_cost']. This page writes that
 * session value, having recomputed it from the cart cookie against the user's own
 * CEU_TRAININGS_TAKEN rows and re-validated any promo code against CEU_DB. So a
 * hand-edited form cannot change the price: the price is not in the form.
 *
 * That is the legacy design too — cart/checkout.php recomputes final_cost and
 * writes the same three session keys — and it is the reason the cart page posts a
 * promo CODE rather than a discounted total. The arithmetic itself is the shared
 * port of CART::checkCartPromo in ceu-cart-page.php, so the cart and the checkout
 * cannot disagree about what is owed.
 *
 * WHY /cart/checkout/ IS A WORDPRESS PAGE AND NOT A DIRECTORY
 * ──────────────────────────────────────────────────────────
 * WordPress's .htaccess only rewrites to index.php when the target is not a real
 * file or directory. Creating wordpress/cart/ on disk would therefore stop /cart/
 * itself reaching WordPress and take the cart page down. So this is a child page
 * of the cart page, created below if it is missing, and the legacy tree lives at
 * /classes, /includes and /process where nothing collides with a WP route.
 */

if (!defined('CEU_CHECKOUT_SLUG')) {
    define('CEU_CHECKOUT_SLUG', 'checkout');
}

// Where the form posts. A real file on disk, served by Apache, never by WordPress.
if (!defined('CEU_PAYMENT_ENDPOINT')) {
    define('CEU_PAYMENT_ENDPOINT', '/process/payment.php');
}

// ─── The page itself ──────────────────────────────────────────────────────────
// Created as a child of the cart page so the URL comes out as /cart/checkout/.
//
// WRITTEN TO SURVIVE A BRANCH SWITCH ON A LIVE SERVER
// ──────────────────────────────────────────────────
// Checking this branch out and later reverting to master restores the FILES but
// not the DATABASE: the page row and the option below both persist. Two
// consequences are handled here.
//
// First, the page body is an HTML comment, not the [ceu_checkout] shortcode.
// After a revert the shortcode is no longer registered, and WordPress renders an
// unregistered shortcode as literal text — so a customer landing on
// /cart/checkout/ would read "[ceu_checkout]" on the page. A comment renders as
// nothing. The block itself arrives through the_content filter below, which is
// how the cart page works too.
//
// Second, the option is treated as a cache rather than as proof. If it names a
// page that has since been deleted — reverted, tidied up, rebuilt from a backup —
// the option is cleared and the page recreated, so switching back to this branch
// restores a working checkout instead of a 404.
// Bump when ceu_checkout_layout_keys() changes, to re-run the one-time sync.
if (!defined('CEU_CHECKOUT_LAYOUT_VERSION')) {
    define('CEU_CHECKOUT_LAYOUT_VERSION', 1);
}

if (!defined('CEU_CHECKOUT_PAGE_MARKER')) {
    define('CEU_CHECKOUT_PAGE_MARKER', '<!-- ceu-checkout -->');
}

add_action('init', function () {
    if (!function_exists('get_page_by_path')) return;

    // Cached id, but only trusted while the page it names is really still there.
    $known = (int) get_option('ceu_checkout_page_created');
    if ($known) {
        $post = get_post($known);
        if ($post && $post->post_status !== 'trash') {
            // Already created — but a page made before the layout keys existed,
            // or before this version of them, still needs bringing into line.
            // Version-gated so it runs once and does not clobber a deliberate
            // edit on every page load.
            if ((int) get_option('ceu_checkout_layout_synced') !== CEU_CHECKOUT_LAYOUT_VERSION) {
                $cart = get_page_by_path(ceu_checkout_cart_slug());
                if ($cart) ceu_checkout_sync_layout($known, (int) $cart->ID);
                update_option('ceu_checkout_layout_synced', CEU_CHECKOUT_LAYOUT_VERSION);
            }
            return;
        }
        delete_option('ceu_checkout_page_created');
    }

    // Find the cart page BY PATH first, and only then fall back to the Woo
    // option. Everything else here identifies the cart by its URL —
    // ceu_is_cart_page() matches the path, not an id — so /cart/ can be working
    // perfectly while woocommerce_cart_page_id is unset, stale, or pointing at a
    // page that was rebuilt. Trusting the option alone meant this hook returned
    // early in that case and the checkout page was never created, giving a 404
    // on a site whose cart was fine.
    $cart_page = get_page_by_path(ceu_checkout_cart_slug());
    $cart_id   = ($cart_page && $cart_page->post_status === 'publish') ? (int) $cart_page->ID : 0;

    if (!$cart_id) {
        $option_id = (int) get_option('woocommerce_cart_page_id');
        if ($option_id && get_post($option_id)) $cart_id = $option_id;
    }

    if (!$cart_id) return;

    // Adopt a page already at that path, but only a live one: get_page_by_path()
    // also returns trashed pages, and adopting one would leave the option
    // pointing at a page nobody can reach.
    $existing = get_page_by_path(ceu_checkout_cart_slug() . '/' . CEU_CHECKOUT_SLUG);
    if ($existing && $existing->post_status === 'publish') {
        update_option('ceu_checkout_page_created', (int) $existing->ID);
        return;
    }
    if ($existing) return;  // trashed or draft — leave it alone, that was deliberate

    $id = wp_insert_post([
        'post_title'   => 'Checkout',
        'post_name'    => CEU_CHECKOUT_SLUG,
        'post_parent'  => $cart_id,
        'post_type'    => 'page',
        'post_status'  => 'publish',
        'post_content' => CEU_CHECKOUT_PAGE_MARKER,
        'post_author'  => 1,
    ]);

    if ($id && !is_wp_error($id)) {
        update_option('ceu_checkout_page_created', (int) $id);
        ceu_checkout_sync_layout((int) $id, $cart_id);
        update_option('ceu_checkout_layout_synced', CEU_CHECKOUT_LAYOUT_VERSION);

        // Once, on creation only. Page permalinks normally resolve without a
        // flush, but a site with stale rewrite rules would 404 the new child
        // until something else rebuilt them, and this runs at most once.
        if (function_exists('flush_rewrite_rules')) flush_rewrite_rules(false);
    }
}, 20);

/**
 * The page-layout settings copied from the cart page onto the checkout page.
 *
 * The checkout was created with no meta at all, so it took the theme's defaults
 * and rendered the full breadcrumb hero — a "Checkout" banner over a stock photo,
 * with a Home / user-cart / Checkout trail, above the page's own Checkout heading.
 * The cart page has none of that.
 *
 * Rather than work out which individual flag suppresses it, the whole layout
 * block is copied across, so the two pages match by construction. Included:
 *
 *   _wp_page_template            the page template itself — an Elementor
 *                                full-width template bypasses the theme's title
 *                                area entirely, so this alone may be the answer
 *   zilom_no_breadcrumbs         suppresses the breadcrumb hero
 *   zilom_disable_page_title     suppresses the title inside it
 *   zilom_breadcrumb_*           its geometry and background, when shown
 *   zilom_page_title*            the title text and styling
 *   zilom_page_full_width        content width
 *   zilom_sidebar_config etc.    sidebars
 *   zilom_page_footer            footer choice
 *
 * zilom_page_header is deliberately NOT copied: the cart page's value is the one
 * that dropped it onto header-default.php with no top bar, and ceu-cart-page.php
 * already overrides the header for both pages through zilom_get_header_layout.
 */
function ceu_checkout_layout_keys(): array {
    return [
        '_wp_page_template',
        'zilom_page_full_width',
        'zilom_page_footer',
        'zilom_extra_page_class',
        'zilom_disable_page_title',
        'zilom_no_breadcrumbs',
        'zilom_breadcrumb_layout',
        'zilom_breadcrumb_padding_top',
        'zilom_breadcrumb_padding_bottom',
        'zilom_page_title',
        'zilom_page_title_one',
        'zilom_bg_color_title',
        'zilom_bg_opacity_title',
        'zilom_image_breadcrumbs',
        'zilom_page_title_image',
        'zilom_page_title_text_style',
        'zilom_page_title_text_align',
        'zilom_sidebar_config',
        'zilom_left_sidebar',
        'zilom_right_sidebar',
    ];
}

/**
 * Make the checkout page's layout match the cart page's.
 *
 * A key the cart page does not set is DELETED from the checkout rather than left
 * behind, so this converges on the cart's settings instead of accumulating.
 */
function ceu_checkout_sync_layout(int $checkout_id, int $cart_id): void {
    if (!$checkout_id || !$cart_id) return;

    foreach (ceu_checkout_layout_keys() as $key) {
        $value = get_post_meta($cart_id, $key, true);
        if ($value === '' || $value === null) {
            delete_post_meta($checkout_id, $key);
        } else {
            update_post_meta($checkout_id, $key, $value);
        }
    }
}

function ceu_checkout_cart_slug(): string {
    return defined('CEU_CART_SLUG') ? CEU_CART_SLUG : 'cart';
}

function ceu_is_checkout_page(): bool {
    $path = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
    return $path === ceu_checkout_cart_slug() . '/' . CEU_CHECKOUT_SLUG;
}

// ─── What is owed ─────────────────────────────────────────────────────────────

/**
 * Recompute the charge and publish it to the session for the payment endpoint.
 *
 * Everything here is derived server-side. $_POST from the cart carries a promo
 * code and two display totals; the totals are ignored outright and the code is
 * re-validated, exactly as cart/checkout.php re-runs getPromoById on what it was
 * given.
 *
 * Returns [items, promo, totals, blocked-message].
 */
function ceu_checkout_prepare(): array {
    $ids   = function_exists('ceu_cart_get_ids')   ? ceu_cart_get_ids()       : [];
    $items = function_exists('ceu_cart_get_items') ? ceu_cart_get_items($ids) : [];

    [$promo, $blocked] = ceu_cart_applied_promo($items);
    $totals = ceu_cart_totals($items, $promo);

    if (!session_id() && !headers_sent()) session_start();

    // The three keys the legacy payment code reads. total_cost is the string
    // Authorize.Net is asked to capture; promo_id lands in
    // CEU_TRANSACTIONS.PROMO_ID and promo_code becomes part of the invoice
    // number, which is what makes a code single-use per customer.
    $_SESSION['total_cost'] = number_format($totals['total'], 2, '.', '');
    $_SESSION['promo_id']   = (string) ($promo['PROMO_ID'] ?? '');
    $_SESSION['promo_code'] = (string) ($promo['PROMO_CODE'] ?? '');

    return [$items, $promo, $totals, $blocked];
}

// ─── Render ───────────────────────────────────────────────────────────────────

function ceu_checkout_page_html(): string {
    // The pricing, promo validation and discount labels all live in
    // ceu-cart-page.php, which mu-plugins load first alphabetically. Guarded
    // anyway: a half-installed plugin set should degrade to a message, not a
    // fatal on a page that takes money.
    foreach (['ceu_cart_applied_promo', 'ceu_cart_totals', 'ceu_cart_discount_label'] as $dep) {
        if (!function_exists($dep)) {
            return '<div id="ceu-checkout-page"><div class="ceu-ck-card ceu-ck-card-pad">'
                 . '<p class="ceu-ck-muted">Checkout is temporarily unavailable. '
                 . 'Please contact support.</p></div></div>';
        }
    }

    $logged_in = function_exists('ceu_is_logged_in') && ceu_is_logged_in();

    if (!$logged_in) {
        // Same overlay trigger the cart uses; /login/ is not a page on this site.
        $signin = function_exists('ceu_signin_button')
            ? ceu_signin_button('Sign in', 'ceu-ck-btn ceu-ck-btn-primary')
            : '<a class="ceu-ck-btn ceu-ck-btn-primary" href="'
              . esc_url(wp_login_url(home_url('/'))) . '">Sign in</a>';

        return '<div id="ceu-checkout-page"><div class="ceu-ck-card ceu-ck-card-pad">'
             . '<p class="ceu-ck-muted">Please sign in to complete your purchase.</p>'
             . $signin
             . '</div></div>';
    }

    [$items, $promo, $totals, $blocked] = ceu_checkout_prepare();

    $cart_url = home_url('/' . ceu_checkout_cart_slug() . '/');

    if (empty($items)) {
        return '<div id="ceu-checkout-page"><div class="ceu-ck-card ceu-ck-card-pad">'
             . '<p class="ceu-ck-muted">Your cart is empty.</p>'
             . '<a class="ceu-ck-btn ceu-ck-btn-ghost" href="' . esc_url($cart_url) . '">Back to cart</a>'
             . '</div></div>';
    }

    $user   = function_exists('ceu_profile_user') ? ceu_profile_user() : null;
    $states = function_exists('ceu_profile_states') ? ceu_profile_states() : [];
    $money  = fn($n) => '$' . number_format((float) $n, 2);
    $fcred  = fn($n) => rtrim(rtrim(number_format((float) $n, 2), '0'), '.');

    // A zero total skips the card fields entirely and tells the payment endpoint
    // to bypass Authorize.Net, which is what the legacy 'discount=active' flag
    // does. Reached when a free/100%-off promo covers the whole cart.
    $is_free = $totals['total'] <= 0.0;

    // ?er=1 is where the legacy payment endpoint sends a declined card.
    $declined = ($_GET['er'] ?? '') === '1';

    $year = (int) date('Y');

    ob_start();
    ?>
    <div id="ceu-checkout-page">
        <h1 class="ceu-ck-heading">Checkout</h1>

        <?php if ($declined) : ?>
            <div class="ceu-ck-note ceu-ck-note-bad">
                There was an error processing your transaction. Please check your card
                details and try again.
            </div>
        <?php endif; ?>

        <?php if ($blocked) : ?>
            <div class="ceu-ck-note ceu-ck-note-bad"><?= esc_html($blocked) ?></div>
        <?php endif; ?>

        <form method="post" action="<?= esc_url(home_url(CEU_PAYMENT_ENDPOINT)) ?>"
              class="ceu-ck-form" id="ceu-checkout-form">

            <!-- Field names are the legacy ones: /process/payment.php passes this
                 $_POST straight into CART::processPayment() and
                 CART::insertTransaction(). -->
            <input type="hidden" name="todo" value="process_payment">
            <?php if ($is_free) : ?>
                <input type="hidden" name="discount" value="active">
            <?php endif; ?>

            <div class="ceu-ck-grid">
                <div class="ceu-ck-main">

                    <div class="ceu-ck-block">
                        <h2 class="ceu-ck-subheading">Billing address</h2>
                        <div class="ceu-ck-card ceu-ck-card-pad">
                            <p class="ceu-ck-muted">
                                Any changes to your billing address you can make here.
                            </p>
                            <div class="ceu-ck-fields">
                                <label class="ceu-ck-field">
                                    <span>First name</span>
                                    <input type="text" name="first" autocomplete="given-name"
                                           value="<?= esc_attr($user['FIRST'] ?? '') ?>" required>
                                </label>
                                <label class="ceu-ck-field">
                                    <span>Last name</span>
                                    <input type="text" name="last" autocomplete="family-name"
                                           value="<?= esc_attr($user['LAST'] ?? '') ?>" required>
                                </label>
                                <label class="ceu-ck-field ceu-ck-field-wide">
                                    <span>Address</span>
                                    <input type="text" name="address_1" autocomplete="address-line1"
                                           value="<?= esc_attr($user['ADDRESS_1'] ?? '') ?>" required>
                                </label>
                                <label class="ceu-ck-field">
                                    <span>City</span>
                                    <input type="text" name="city" autocomplete="address-level2"
                                           value="<?= esc_attr($user['CITY'] ?? '') ?>" required>
                                </label>
                                <label class="ceu-ck-field">
                                    <span>State</span>
                                    <select name="state" autocomplete="address-level1" required>
                                        <?php foreach ($states as $code => $name) : ?>
                                            <option value="<?= esc_attr($code) ?>"
                                                <?= ($user['STATE'] ?? '') === $code ? 'selected' : '' ?>>
                                                <?= esc_html($name) ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                </label>
                                <label class="ceu-ck-field">
                                    <span>ZIP</span>
                                    <input type="text" name="zip" autocomplete="postal-code"
                                           inputmode="numeric"
                                           value="<?= esc_attr($user['ZIP'] ?? '') ?>" required>
                                </label>
                            </div>
                        </div>
                    </div>

                    <?php if (!$is_free) : ?>
                        <div class="ceu-ck-block">
                            <h2 class="ceu-ck-subheading">Card details</h2>
                            <div class="ceu-ck-card ceu-ck-card-pad">
                                <div class="ceu-ck-cards" role="radiogroup" aria-label="Card type">
                                    <?php foreach (['visa' => 'Visa', 'mc' => 'MasterCard', 'amex' => 'Amex'] as $v => $label) : ?>
                                        <label class="ceu-ck-cardtype">
                                            <input type="radio" name="cardType" value="<?= esc_attr($v) ?>"
                                                   <?= $v === 'visa' ? 'checked' : '' ?>>
                                            <span><?= esc_html($label) ?></span>
                                        </label>
                                    <?php endforeach; ?>
                                </div>

                                <div class="ceu-ck-fields">
                                    <label class="ceu-ck-field ceu-ck-field-wide">
                                        <span>Card number</span>
                                        <input type="text" name="cardNum" inputmode="numeric"
                                               autocomplete="cc-number" spellcheck="false"
                                               maxlength="19" required>
                                    </label>
                                    <label class="ceu-ck-field">
                                        <span>Expiry month</span>
                                        <select name="exp_month" autocomplete="cc-exp-month" required>
                                            <?php for ($m = 1; $m <= 12; $m++) :
                                                $mm = str_pad((string) $m, 2, '0', STR_PAD_LEFT); ?>
                                                <option value="<?= esc_attr($mm) ?>"><?= esc_html($mm) ?></option>
                                            <?php endfor; ?>
                                        </select>
                                    </label>
                                    <label class="ceu-ck-field">
                                        <span>Expiry year</span>
                                        <select name="exp_year" autocomplete="cc-exp-year" required>
                                            <?php for ($y = $year; $y < $year + 9; $y++) : ?>
                                                <option value="<?= esc_attr($y) ?>"><?= esc_html($y) ?></option>
                                            <?php endfor; ?>
                                        </select>
                                    </label>
                                </div>

                                <p class="ceu-ck-secure">
                                    Your card details are sent directly to our payment
                                    processor and are not stored on this site.
                                </p>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>

                <!-- ── Order summary ── -->
                <aside class="ceu-ck-side">
                    <div class="ceu-ck-block">
                        <h2 class="ceu-ck-subheading">Order summary</h2>
                        <div class="ceu-ck-card">
                            <ul class="ceu-ck-items">
                                <?php foreach ($items as $item) : ?>
                                    <li class="ceu-ck-item">
                                        <span class="ceu-ck-item-title">
                                            <?= esc_html($item['title']) ?>
                                            <?php if ((float) ($item['credits'] ?? 0) > 0) : ?>
                                                <span class="ceu-ck-item-meta">
                                                    <?= esc_html($fcred($item['credits'])) ?> CE credit
                                                    <?= (float) $item['credits'] === 1.0 ? 'hour' : 'hours' ?>
                                                </span>
                                            <?php endif; ?>
                                        </span>
                                        <span class="ceu-ck-item-cost"><?= esc_html($money($item['cost'])) ?></span>
                                    </li>
                                <?php endforeach; ?>
                            </ul>

                            <div class="ceu-ck-totals">
                                <div class="ceu-ck-total-row">
                                    <span>Subtotal</span>
                                    <span><?= esc_html($money($totals['subtotal'])) ?></span>
                                </div>
                                <?php if ($totals['discount'] > 0) : ?>
                                    <div class="ceu-ck-total-row ceu-ck-total-discount">
                                        <span>
                                            Discount
                                            <span class="ceu-ck-tag"><?= esc_html(ceu_cart_discount_label($promo)) ?></span>
                                        </span>
                                        <span>&minus;<?= esc_html($money($totals['discount'])) ?></span>
                                    </div>
                                <?php endif; ?>
                                <div class="ceu-ck-total-row ceu-ck-total-grand">
                                    <span>Total</span>
                                    <span><?= esc_html($money($totals['total'])) ?></span>
                                </div>

                                <button type="submit" class="ceu-ck-btn ceu-ck-btn-primary ceu-ck-submit">
                                    <?= $is_free ? 'Complete order' : 'Pay ' . esc_html($money($totals['total'])) ?>
                                </button>

                                <a class="ceu-ck-back" href="<?= esc_url($cart_url) ?>">Back to cart</a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </form>
    </div>
    <?php
    return ob_get_clean();
}

// ─── Mounting ─────────────────────────────────────────────────────────────────

add_shortcode('ceu_checkout', function () {
    $GLOBALS['ceu_checkout_page_rendered'] = true;
    return ceu_checkout_page_html();
});

// Fallback: serve /cart/checkout/ even when no page row exists.
//
// The page above is created automatically, but that depends on the database
// being in the state this code expects — the cart page findable, the option
// writable, the row not since deleted. When any of that is not true the request
// falls through to a 404 on a URL the Checkout button points at, which is the
// worst possible failure for the one page that takes money.
//
// So if the request is for /cart/checkout/ and WordPress resolved nothing, the
// block is rendered into the theme directly. A real page, once it exists, is
// never a 404 and this stays out of the way.
add_action('template_redirect', function () {
    if (is_admin() || !ceu_is_checkout_page()) return;
    if (!is_404()) return;
    if (!empty($GLOBALS['ceu_checkout_page_rendered'])) return;

    $GLOBALS['ceu_checkout_page_rendered'] = true;

    status_header(200);
    nocache_headers();

    get_header();
    echo ceu_checkout_page_html();
    get_footer();
    exit;
}, 1);   // priority 1: SEO plugins and themes commonly redirect 404s at the
         // default 10, and this has to win that race — the URL the Checkout
         // button points at must never be handed to a 404 handler.

add_filter('the_content', function ($content) {
    if (is_admin() || !ceu_is_checkout_page())  return $content;
    if (!is_main_query() || !in_the_loop())     return $content;
    if (!empty($GLOBALS['ceu_checkout_page_rendered'])) return $content;

    $GLOBALS['ceu_checkout_page_rendered'] = true;
    return ceu_checkout_page_html();
}, 20);

// Prevent a double submit: the legacy endpoint guards against a repeat charge via
// checkTransactionExists(), but a customer who clicks twice should not have to
// rely on that.
add_action('wp_footer', function () {
    if (empty($GLOBALS['ceu_checkout_page_rendered'])) return;
    ?>
    <script>
    (function () {
        var form = document.getElementById('ceu-checkout-form');
        if (!form) return;
        form.addEventListener('submit', function () {
            var btn = form.querySelector('.ceu-ck-submit');
            if (!btn) return;
            // Disabled AFTER submission is under way, and the label is swapped
            // rather than the button removed, so the click still posts.
            setTimeout(function () {
                btn.disabled = true;
                btn.textContent = 'Processing…';
            }, 0);
        });
    })();
    </script>

    <style>
    #ceu-checkout-page {
        --ceu-blue:  #2563eb;
        --ceu-navy:  #183e7d;
        --ceu-ink:   #0f172a;
        --ceu-muted: #64748b;
        --ceu-line:  #e2e8f0;
        --ceu-bg:    #f8fafc;
        --ceu-good:  #15803d;

        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 24px 60px;
        font-family: inherit;
        color: var(--ceu-ink);
    }
    @media (max-width: 640px) {
        #ceu-checkout-page { padding: 24px 16px 40px; }
    }
    #ceu-checkout-page, #ceu-checkout-page *,
    #ceu-checkout-page *::before, #ceu-checkout-page *::after { box-sizing: border-box; }

    #ceu-checkout-page .ceu-ck-heading {
        font-size: 1.6em; font-weight: 700; color: var(--ceu-ink);
        margin: 0 0 20px; line-height: 1.25;
    }
    #ceu-checkout-page .ceu-ck-subheading {
        font-size: 1.15em; font-weight: 700; color: var(--ceu-ink);
        margin: 0 0 12px; line-height: 1.3;
    }

    #ceu-checkout-page .ceu-ck-note {
        padding: 11px 14px; border-radius: 8px; margin-bottom: 18px;
        font-size: .92em; font-weight: 600; border: 1px solid transparent;
    }
    #ceu-checkout-page .ceu-ck-note-bad { background: #fef2f2; border-color: #fecaca; color: #b91c1c; }

    #ceu-checkout-page .ceu-ck-form { margin: 0; }
    #ceu-checkout-page .ceu-ck-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 380px);
        gap: 24px;
        align-items: start;
    }
    #ceu-checkout-page .ceu-ck-main,
    #ceu-checkout-page .ceu-ck-side {
        display: flex; flex-direction: column; gap: 24px; min-width: 0;
    }
    @media (max-width: 900px) {
        #ceu-checkout-page .ceu-ck-grid { grid-template-columns: minmax(0, 1fr); }
        /* Summary first on a phone: what you are paying before how you pay. */
        #ceu-checkout-page .ceu-ck-side { order: -1; }
    }
    #ceu-checkout-page .ceu-ck-block { min-width: 0; }

    #ceu-checkout-page .ceu-ck-card {
        border: 1px solid var(--ceu-line); border-radius: 12px;
        background: #fff; overflow: hidden;
    }
    #ceu-checkout-page .ceu-ck-card-pad { padding: 18px; }
    #ceu-checkout-page .ceu-ck-muted { color: var(--ceu-muted); font-size: .92em; margin: 0 0 14px; }

    /* ── Form fields ── */
    #ceu-checkout-page .ceu-ck-fields {
        display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px;
    }
    @media (max-width: 560px) {
        #ceu-checkout-page .ceu-ck-fields { grid-template-columns: minmax(0, 1fr); }
    }
    #ceu-checkout-page .ceu-ck-field-wide { grid-column: 1 / -1; }
    #ceu-checkout-page .ceu-ck-field { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
    #ceu-checkout-page .ceu-ck-field > span {
        font-size: .82em; font-weight: 700; color: var(--ceu-muted);
        letter-spacing: .03em; text-transform: uppercase;
    }
    #ceu-checkout-page .ceu-ck-field input,
    #ceu-checkout-page .ceu-ck-field select {
        width: 100%; padding: 10px 12px;
        border: 1px solid var(--ceu-line); border-radius: 8px;
        background: #fff; font-family: inherit; font-size: .95em; color: var(--ceu-ink);
    }
    #ceu-checkout-page .ceu-ck-field input:focus,
    #ceu-checkout-page .ceu-ck-field select:focus {
        outline: none; border-color: var(--ceu-blue);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, .12);
    }

    #ceu-checkout-page .ceu-ck-cards { display: flex; gap: 10px; margin-bottom: 16px; flex-wrap: wrap; }
    #ceu-checkout-page .ceu-ck-cardtype {
        display: inline-flex; align-items: center; gap: 7px;
        padding: 8px 14px; border: 1px solid var(--ceu-line); border-radius: 8px;
        font-size: .9em; font-weight: 600; cursor: pointer; background: #fff;
    }
    #ceu-checkout-page .ceu-ck-cardtype:has(input:checked) {
        border-color: var(--ceu-navy); background: #f4f8ff;
    }
    #ceu-checkout-page .ceu-ck-secure { margin: 14px 0 0; font-size: .82em; color: var(--ceu-muted); }

    /* ── Order summary ── */
    #ceu-checkout-page .ceu-ck-items { list-style: none; margin: 0; padding: 0; }
    #ceu-checkout-page .ceu-ck-item {
        display: flex; justify-content: space-between; align-items: flex-start; gap: 14px;
        padding: 14px 18px; border-bottom: 1px solid var(--ceu-line);
    }
    #ceu-checkout-page .ceu-ck-item-title {
        font-size: .93em; font-weight: 600; color: var(--ceu-navy); line-height: 1.45; min-width: 0;
    }
    #ceu-checkout-page .ceu-ck-item-meta {
        display: block; margin-top: 3px; font-size: .85em; font-weight: 400; color: var(--ceu-muted);
    }
    #ceu-checkout-page .ceu-ck-item-cost { font-weight: 700; font-size: .93em; white-space: nowrap; }

    #ceu-checkout-page .ceu-ck-totals { padding: 16px 18px; background: var(--ceu-bg); }
    #ceu-checkout-page .ceu-ck-total-row {
        display: flex; justify-content: space-between; align-items: baseline;
        gap: 12px; padding: 6px 0; font-size: .95em; color: var(--ceu-muted);
    }
    #ceu-checkout-page .ceu-ck-total-row span:last-child { font-weight: 600; color: var(--ceu-ink); }
    #ceu-checkout-page .ceu-ck-total-discount span:last-child { color: var(--ceu-good); }
    #ceu-checkout-page .ceu-ck-tag {
        display: inline-block; margin-left: 6px; padding: 1px 7px; border-radius: 20px;
        background: #dcfce7; color: var(--ceu-good); font-size: .8em; font-weight: 700;
    }
    #ceu-checkout-page .ceu-ck-total-grand {
        margin-top: 6px; padding-top: 12px; border-top: 2px solid var(--ceu-line);
        color: var(--ceu-ink); font-weight: 700;
    }
    #ceu-checkout-page .ceu-ck-total-grand span:last-child { font-size: 1.3em; }

    #ceu-checkout-page .ceu-ck-btn {
        display: inline-block; padding: 10px 18px;
        border: 1px solid transparent; border-radius: 8px;
        font-family: inherit; font-size: .92em; font-weight: 700;
        text-align: center; text-decoration: none !important; cursor: pointer;
        transition: background .15s, color .15s, border-color .15s;
    }
    #ceu-checkout-page .ceu-ck-btn-primary { background: var(--ceu-navy); color: #fff !important; }
    #ceu-checkout-page .ceu-ck-btn-primary:hover { background: #4b9ade; }
    #ceu-checkout-page .ceu-ck-btn-primary:disabled { background: #94a3b8; cursor: default; }
    #ceu-checkout-page .ceu-ck-btn-ghost {
        background: #fff; color: var(--ceu-navy) !important; border-color: var(--ceu-line);
    }
    #ceu-checkout-page .ceu-ck-submit {
        display: block; width: 100%; margin-top: 16px; padding: 14px 18px; font-size: 1em;
    }
    #ceu-checkout-page .ceu-ck-back {
        display: block; text-align: center; margin-top: 12px;
        font-size: .88em; font-weight: 600; color: var(--ceu-muted); text-decoration: none;
    }
    #ceu-checkout-page .ceu-ck-back:hover { color: var(--ceu-navy); text-decoration: underline; }
    </style>
    <?php
}, 5);
