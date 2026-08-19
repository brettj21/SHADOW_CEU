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

function ceu_cart_get_items(array $ids): array {
    if (empty($ids) || !function_exists('ceu_db_connect')) return [];
    $db = ceu_db_connect();
    if (!$db) return [];

    $pro_slug      = isset($_COOKIE['pro']) ? sanitize_key($_COOKIE['pro']) : '';
    $professions   = defined('CEU_PROFESSIONS') ? unserialize(CEU_PROFESSIONS) : [];
    $profession_id = isset($professions[$pro_slug]) ? (int) $professions[$pro_slug] : 0;

    // $ids are already intval-sanitized — safe to inline
    $id_list = implode(',', $ids);

    if ($profession_id) {
        $sql = "SELECT p.TRAINING_ID, p.TITLE_ALT AS title, p.COST AS cost
                FROM CEU_TRAININGS_BY_PROFESSION p
                WHERE p.TRAINING_ID IN ($id_list)
                  AND p.PROFESSION_ID = $profession_id
                ORDER BY p.TITLE_ALT ASC";
    } else {
        $sql = "SELECT TRAINING_ID, TITLE_ALT AS title, MIN(COST) AS cost
                FROM CEU_TRAININGS_BY_PROFESSION
                WHERE TRAINING_ID IN ($id_list)
                GROUP BY TRAINING_ID
                ORDER BY TITLE_ALT ASC";
    }

    $result = $db->query($sql);
    if (!$result) return [];
    return $result->fetch_all(MYSQLI_ASSOC);
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

            function ceuUpdateNav() {
                var countEl = document.querySelector('.mini-cart-items');
                if (countEl) countEl.textContent = ceuCartCount;
                var contentEl = document.querySelector('.minicart-content');
                if (contentEl) {
                    contentEl.innerHTML = ceuCartHtml;
                    ceuLiftCart(contentEl);
                }
            }

            // ── Lift the dropdown above the rest of the header ────────────────────
            // The panel opened UNDER the top bar's user menu and social icons. It
            // lives inside the theme's header, so whichever ancestor forms the
            // nearest stacking context is what the top bar is really being ranked
            // against — raising the panel alone changes nothing.
            //
            // So walk up from the panel and lift every positioned ancestor as far
            // as the header. Only positioned elements are touched, because z-index
            // is ignored on static ones, and nothing else about them is changed.
            //
            // Deliberately below the profile dialogs' 2147483000: those are moved
            // to <body> to clear the header entirely, and a tie here would let the
            // header cover them again, since it comes later in the document.
            var CEU_CART_LAYER = 2147482000;

            function ceuLiftCart(panel) {
                for (var el = panel; el && el !== document.body; el = el.parentElement) {
                    var style = window.getComputedStyle(el);
                    if (style.position === 'static') continue;

                    var current = parseInt(style.zIndex, 10);
                    if (isNaN(current) || current < CEU_CART_LAYER) {
                        el.style.zIndex = String(CEU_CART_LAYER);
                    }
                }
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
