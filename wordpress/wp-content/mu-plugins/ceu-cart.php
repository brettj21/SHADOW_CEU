<?php
/**
 * Plugin Name: CEU Cart
 * Description: Cookie-based cart using $_COOKIE['cart'] (pipe-separated TRAINING_IDs).
 *              PHP generates the mini cart HTML server-side on every page load;
 *              JS injects it into the nav widget (which otherwise renders WC's empty cart).
 */

// ── Helpers ───────────────────────────────────────────────────────────────────

function ceu_cart_get_ids(): array {
    $raw = isset($_COOKIE['cart']) ? sanitize_text_field($_COOKIE['cart']) : '';
    if (!$raw) return [];
    return array_values(array_unique(array_filter(array_map('intval', explode('|', $raw)))));
}

/**
 * The trainings in the cart, priced.
 *
 * A CEU cart holds trainings the user has ALREADY TAKEN — you sit the course and
 * its test for free, then pay to have the credits and certificate issued. So the
 * cart is drawn from CEU_TRAININGS_TAKEN, not from the course catalogue, exactly
 * as the legacy cart does (CEU/classes/Trainings.class.php getTrainingsForCart).
 *
 * Two consequences fall out of that, both deliberate:
 *
 *   - A signed-out visitor has no cart. There is no user, so there are no taken
 *     trainings, and every row is scoped by USER_ID. The cookie can say anything
 *     it likes; it selects from that user's own rows or it selects nothing.
 *
 *   - Price comes from the profession stored ON THE TAKEN ROW, joined to
 *     CEU_TRAININGS_BY_PROFESSION on both TRAINING_ID and PROFESSION_ID — the
 *     profession the user held when they took it, which is what they owe for.
 *     The old query priced from the 'pro' cookie and fell back to MIN(COST)
 *     when it was absent, so the same training could be quoted at $43.75 or
 *     $25.00 depending on a cookie that logout deletes.
 *
 * Title and credits come from the taken row too, so a course keeps the title and
 * credit value it carried on the day it was sat, even if the catalogue changes.
 */
function ceu_cart_get_items(array $ids): array {
    if (empty($ids) || !function_exists('ceu_db_connect')) return [];
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return [];

    $user_id = (int) get_user_meta(get_current_user_id(), '_ceu_id', true);
    if (!$user_id) return [];

    $db = ceu_db_connect();
    if (!$db) return [];

    // $ids are already intval-sanitized by ceu_cart_get_ids() — safe to inline.
    $id_list = implode(',', $ids);

    // One taken row per (user, training) and a 1:1 join to the profession row, so
    // no training can appear — or be charged for — twice.
    $sql = "SELECT t.TRAINING_ID,
                   t.TRAINING_TITLE AS title,
                   t.CREDITS        AS credits,
                   p.COST           AS cost
            FROM CEU_TRAININGS_TAKEN t
            JOIN CEU_TRAININGS_BY_PROFESSION p
              ON p.TRAINING_ID = t.TRAINING_ID
             AND p.PROFESSION_ID = t.PROFESSION_ID
            WHERE t.USER_ID = ?
              AND t.TRAINING_ID IN ($id_list)
            ORDER BY t.TRAINING_TITLE ASC";

    $stmt = $db->prepare($sql);
    if (!$stmt) return [];
    $stmt->bind_param('i', $user_id);
    $stmt->execute();
    $rows = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();

    return $rows;
}

// ── Build mini cart HTML (shared by PHP render + JS inline add) ───────────────

function ceu_cart_html(array $items): string {
    $count = count($items);
    $total = array_sum(array_column($items, 'cost'));
    $label = $count === 1 ? '1 course' : $count . ' courses';

    ob_start();
    ?>
    <div class="ceu-mc">
        <div class="ceu-mc-header">
            <i class="flaticon-shopping-cart ceu-mc-icon"></i>
            <span class="ceu-mc-title">Your Cart</span>
            <?php if ($count > 0): ?>
                <span class="ceu-mc-badge"><?php echo esc_html($label) ?></span>
            <?php endif ?>
        </div>

        <?php if (empty($items)): ?>
            <div class="ceu-mc-empty">
                <i class="far fa-shopping-cart ceu-mc-empty-icon"></i>
                <p>Your cart is empty.</p>
            </div>
        <?php else: ?>
            <ul class="ceu-mc-list">
                <?php foreach ($items as $item): ?>
                    <li class="ceu-mc-item">
                        <div class="ceu-mc-item-body">
                            <span class="ceu-mc-item-title"><?php echo esc_html($item['title']) ?></span>
                            <span class="ceu-mc-item-price">$<?php echo esc_html(number_format((float) $item['cost'], 2)) ?></span>
                        </div>
                        <button class="ceu-mc-remove" data-ceu-remove="<?php echo (int) $item['TRAINING_ID'] ?>" title="Remove from cart">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </li>
                <?php endforeach ?>
            </ul>
            <div class="ceu-mc-footer">
                <div class="ceu-mc-subtotal">
                    <span>Subtotal</span>
                    <strong>$<?php echo esc_html(number_format($total, 2)) ?></strong>
                </div>
                <a href="<?php echo esc_url(home_url('/cart/')) ?>" class="ceu-mc-btn ceu-mc-btn-ghost">View Cart</a>
                <a href="<?php echo esc_url(home_url('/checkout/')) ?>" class="ceu-mc-btn ceu-mc-btn-primary">Proceed to Checkout &rarr;</a>
            </div>
        <?php endif ?>
    </div>
    <?php
    return ob_get_clean();
}

// ── Inject CEU cart into nav on every page ───────────────────────────────────
// The Elementor nav cart widget hard-codes WC()->cart calls that know nothing
// about the CEU cookie. We generate correct HTML in PHP (which CAN read the
// cookie and query CEU_DB), then splice it in via JS after the page loads.

add_action('wp_footer', function () {
    if (is_admin()) return;

    $ids   = ceu_cart_get_ids();
    $items = ceu_cart_get_items($ids);
    $count = count($items);
    ?>
    <style>
        /* ── The drawer, once moved to <body> ── */
        /* The script below re-parents .minicart-content out of the header. The
           theme's rules for it are descendant selectors rooted at
           .mini-cart-header, so they stop matching after the move — these restate
           the same geometry it had (zilom/sass/woocommerce/_style.scss:393).
           z-index is the 32-bit maximum because the theme ships 9999999999 and
           9999999999999, which overflow and are clamped to exactly that; as the
           last child of <body> this wins the resulting tie on document order. */
        .ceu-cart-panel {
            position: fixed; top: 0; bottom: 0; right: -360px;
            width: 350px; max-width: 100%;
            padding: 0 25px 30px;
            background: #fff;
            overflow-y: auto; overflow-x: hidden;
            box-shadow: 0 0 5px rgba(0, 0, 0, .3);
            opacity: 0;
            transition: all .35s;
            z-index: 2147483647;
        }
        .ceu-cart-panel.ceu-cart-open { right: 0; opacity: 1; }
        body.admin-bar .ceu-cart-panel { margin-top: 30px; }
        @media (max-width: 991px) {
            .ceu-cart-panel { padding-left: 15px; padding-right: 15px; }
        }

        /* ── CEU Mini Cart ── */
        .ceu-mc { font-family: "Helvetica Neue", Helvetica, sans-serif; min-width: 300px; }

        .ceu-mc-header {
            display: flex; align-items: center; gap: 8px;
            background: #183E7D; color: #fff;
            padding: 14px 16px; border-radius: 0;
        }
        .ceu-mc-icon { font-size: 16px; opacity: .85; }
        .ceu-mc-title { font-size: 15px; font-weight: 700; flex: 1; }
        .ceu-mc-badge {
            font-size: 11px; font-weight: 600; background: rgba(255,255,255,.2);
            padding: 2px 8px; border-radius: 20px; white-space: nowrap;
        }

        .ceu-mc-empty { padding: 28px 16px; text-align: center; color: #888; }
        .ceu-mc-empty-icon { font-size: 32px; display: block; margin-bottom: 10px; opacity: .4; }
        .ceu-mc-empty p { margin: 0; font-size: 14px; }

        .ceu-mc-list { list-style: none; margin: 0; padding: 0; max-height: 260px; overflow-y: auto; }

        .ceu-mc-item {
            display: flex; align-items: flex-start; gap: 10px;
            padding: 12px 16px; border-bottom: 1px solid #f0f2f5;
        }
        .ceu-mc-item:last-child { border-bottom: none; }
        .ceu-mc-item-body { flex: 1; min-width: 0; }
        .ceu-mc-item-title {
            display: block; font-size: 13px; font-weight: 600;
            color: #1a2e5a; line-height: 1.45; margin-bottom: 5px;
        }
        .ceu-mc-item-price { font-size: 13px; color: #555; font-weight: 500; }

        .ceu-mc-remove {
            flex-shrink: 0; background: none; border: none; cursor: pointer;
            color: #bbb; padding: 4px 6px; border-radius: 5px; font-size: 13px;
            transition: color .15s, background .15s; margin-top: 1px;
        }
        .ceu-mc-remove:hover { color: #e53e3e; background: #fff5f5; }

        .ceu-mc-footer {
            padding: 14px 16px; border-top: 2px solid #f0f2f5;
            display: flex; flex-direction: column; gap: 8px;
        }
        .ceu-mc-subtotal {
            display: flex; justify-content: space-between; align-items: center;
            font-size: 14px; color: #333; padding-bottom: 8px;
            border-bottom: 1px solid #f0f2f5;
        }
        .ceu-mc-subtotal strong { font-size: 16px; color: #111; }

        .ceu-mc-btn {
            display: block; text-align: center; padding: 10px 16px;
            border-radius: 6px; font-size: 13px; font-weight: 700;
            text-decoration: none !important; transition: background .15s, color .15s;
            letter-spacing: .2px;
        }
        .ceu-mc-btn-primary { background: #183E7D; color: #fff !important; }
        .ceu-mc-btn-primary:hover { background: #4B9ADE; color: #fff !important; }
        .ceu-mc-btn-ghost { background: #f0f4f9; color: #183E7D !important; }
        .ceu-mc-btn-ghost:hover { background: #dce6f5; }
    </style>

    <script>
        (function () {
            var ceuCartCount = <?php echo $count ?>;
            var ceuCartHtml  = <?php echo json_encode(ceu_cart_html($items)) ?>;

            // querySelectorAll, not querySelector: the theme renders a header for
            // desktop (.header_default_screen) and another for mobile
            // (.header_mobile_screen), each with its own cart. Filling only the
            // first left the other showing WooCommerce's empty cart.
            function ceuUpdateNav() {
                document.querySelectorAll('.mini-cart-items').forEach(function (el) {
                    el.textContent = ceuCartCount;
                });
                document.querySelectorAll('.minicart-content').forEach(function (panel) {
                    panel.innerHTML = ceuCartHtml;
                    ceuPortalCart(panel);
                });
            }

            // ── Move the drawer out of the header ─────────────────────────────────
            // It opened underneath the header's avatar, user name and social icons.
            // Two earlier attempts raised z-index — on the panel, then on every
            // positioned ancestor, at the 32-bit maximum — and neither worked. The
            // ancestor dump says why: the drawer sits inside .header_default_screen
            // while the elements covering it live in .header-mobile, a different
            // branch of the same header, and .gv-sticky-wrapper (position:relative,
            // z-index:1) is added by the theme's sticky script AFTER page load,
            // forming a stacking context around the drawer that caps everything
            // inside it at that level. No z-index applied inside can escape it.
            //
            // So the drawer leaves the header entirely. It is position:fixed with
            // top:0/bottom:0 — anchored to the viewport, not to the cart icon — so
            // being a child of <body> changes nothing about where it appears, and
            // there it answers to no stacking context but the root's.
            //
            // The theme's close handler is unaffected: it is delegated on document
            // and reads the overlay's own parent, and the overlay stays put.
            function ceuPortalCart(panel) {
                if (panel.dataset.ceuPortaled) return;

                // Remembered because the theme opens the drawer by putting .open on
                // this ancestor, via a descendant selector that stops matching once
                // the panel is moved. The class is mirrored onto the panel instead.
                var owner = panel.closest('.mini-cart-inner');
                if (!owner) return;

                panel.dataset.ceuPortaled = '1';
                panel.classList.add('ceu-cart-panel');
                document.body.appendChild(panel);

                var sync = function () {
                    panel.classList.toggle('ceu-cart-open', owner.classList.contains('open'));
                };
                new MutationObserver(sync).observe(owner, {
                    attributes: true, attributeFilter: ['class']
                });
                sync();
            }

            // Remove item: update cookie and reload so PHP re-renders the correct state
            document.addEventListener('click', function (e) {
                var el = e.target.closest('[data-ceu-remove]');
                if (!el) return;
                e.preventDefault();
                var tid = String(el.dataset.ceuRemove);
                var existing = '';
                document.cookie.split(';').forEach(function (c) {
                    var p = c.trim();
                    if (p.startsWith('cart=')) existing = decodeURIComponent(p.slice(5));
                });
                var ids = existing ? existing.split('|').filter(function (id) { return id && id !== tid; }) : [];
                var exp = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
                document.cookie = 'cart=' + (ids.length ? encodeURIComponent(ids.join('|')) : '')
                    + '; path=/; expires=' + exp;
                window.location.reload();
            });

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', ceuUpdateNav);
            } else {
                ceuUpdateNav();
            }
        })();
    </script>
    <?php
}, 5);
