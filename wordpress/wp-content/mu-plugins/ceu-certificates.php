<?php
/**
 * Plugin Name: CEU Certificates
 * Description: Renders "Certified Coursework" (Completed Courses + Certificates)
 *              on /user/ with live data from CEU_DB.CEU_TRAININGS_TAKEN and
 *              CEU_DB.CEU_CERTIFICATES.
 *
 * BOTH PANELS LOAD AT ONCE — the tab buttons only show/hide the already-rendered
 * lists. No second page, no extra request. /user-2/ is retired.
 *
 * PLACEMENT — two ways, pick either:
 *   1. Shortcode (preferred): drop [ceu_coursework] on the /user page in
 *      Elementor, exactly where you want the block.
 *   2. Auto-inject (fallback): if the shortcode is absent, the block is written
 *      to the footer and JS moves it into the Elementor column that has no form
 *      fields.
 *
 * DEEP LINK — /user/#certificates opens with the Certificates tab active.
 * That is what the "My Certificates" dropdown item points to (ceu-dashboard-nav.php).
 */

// Page this block belongs to. Change here if the slug ever moves.
if (!defined('CEU_COURSEWORK_SLUG')) {
    define('CEU_COURSEWORK_SLUG', 'user');
}

// Certificate thumbnail shown against each earned certificate.
if (!defined('CEU_CERT_IMAGE')) {
    define('CEU_CERT_IMAGE', 'https://www.ceunits.com/images/certificate.gif');
}

// ─── Is this the coursework page? ─────────────────────────────────────────────

function ceu_is_coursework_page() {
    $path = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
    if (basename($path) === CEU_COURSEWORK_SLUG) return true;
    // Fallback for ?page_id= style URLs.
    if (function_exists('is_page') && is_page(CEU_COURSEWORK_SLUG)) return true;
    return false;
}

// ─── Fetch rows from CEU_DB ───────────────────────────────────────────────────

function ceu_coursework_data() {
    // Identity must come from the verified WP session, never from the 'ceu'
    // cookie — that value is client-controlled, so trusting it let anyone read
    // another user's CE records by editing the cookie in devtools.
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return null;

    $user_id = (int) get_user_meta(get_current_user_id(), '_ceu_id', true);
    if (!$user_id || !function_exists('ceu_db_connect')) return null;

    $db = ceu_db_connect();
    if (!$db) return null;

    // Fetched via query() — no mysqlnd required. $user_id is an int cast above.
    $taken = [];
    $r = $db->query('SELECT TRAINING_TITLE, DATE_COMPLETED, CREDITS, SCORE, PASSING, STATE
                     FROM CEU_TRAININGS_TAKEN WHERE USER_ID = ' . $user_id . '
                     ORDER BY DATE_COMPLETED DESC');
    if ($r) {
        while ($row = $r->fetch_assoc()) $taken[] = $row;
    }

    $certs = [];
    $r = $db->query('SELECT TRAINING_TITLE, DATE_COMPLETED, CREDITS, STATE
                     FROM CEU_CERTIFICATES WHERE USER_ID = ' . $user_id . '
                     ORDER BY DATE_COMPLETED DESC');
    if ($r) {
        while ($row = $r->fetch_assoc()) $certs[] = $row;
    }

    if (empty($taken) && empty($certs)) return null;

    return ['taken' => $taken, 'certs' => $certs];
}

// ─── Build the block markup ───────────────────────────────────────────────────

function ceu_coursework_html() {
    $data = ceu_coursework_data();
    if (!$data) return '';

    $taken = $data['taken'];
    $certs = $data['certs'];

    // Licence expiry comes from the CEU session, not the DB.
    $session  = $_SESSION['session_data'][0] ?? [];
    $lic_exp  = !empty($session['LIC_EXP']) ? $session['LIC_EXP'] : null;
    $exp_days = $lic_exp ? (int) floor((strtotime($lic_exp) - time()) / 86400) : null;

    $clean = fn($t) => strip_tags(str_replace(['<br>', '<br/>'], ' ', $t));
    $fdate = fn($d)  => date('M j, Y', strtotime($d));
    $fcred = fn($n)  => rtrim(rtrim(number_format((float) $n, 2), '0'), '.');

    // One row = one course/certificate. Compact list, not a card grid — at 47
    // certificates a card wall is unreadable.
    $row = function ($c, $kind) use ($clean, $fdate, $fcred, $exp_days) {
        $title   = $clean($c['TRAINING_TITLE']);
        $credits = $fcred($c['CREDITS']);
        $hours   = $credits === '1' ? 'hour' : 'hours';

        // Both lists label their date; only the wording differs.
        $date_label = $kind === 'cert' ? 'Date completed' : 'Date taken';

        $h  = '<div class="ceu-row">';
        $h .= '<div class="ceu-row-main">';
        $h .= '<div class="ceu-row-title">' . esc_html($title) . '</div>';
        $h .= '<div class="ceu-row-meta">';
        // Value/label pairs — the number and the date carry the weight, the
        // words around them stay quiet.
        $h .= '<span class="ceu-stat">'
            . '<span class="ceu-stat-value">' . esc_html($credits) . '</span>'
            . '<span class="ceu-stat-label">CE ' . $hours . '</span>'
            . '</span>';
        $h .= '<span class="ceu-sep">·</span>';
        $h .= '<span class="ceu-stat">'
            . '<span class="ceu-stat-label">' . $date_label . '</span>'
            . '<span class="ceu-stat-value">' . esc_html($fdate($c['DATE_COMPLETED'])) . '</span>'
            . '</span>';

        if ($kind === 'taken') {
            $passed = (int) $c['PASSING'] === 1;
            // Expiry only matters for a course you actually passed.
            if ($passed && $exp_days !== null && $exp_days < 90) {
                $h .= '<span class="ceu-sep">·</span>';
                $h .= $exp_days < 0
                    ? '<span class="ceu-warn ceu-warn-bad">Licence expired</span>'
                    : '<span class="ceu-warn">Expires in ' . (int) $exp_days . ' days</span>';
            }
        }

        $h .= '</div></div>';

        $h .= '<div class="ceu-row-side">';
        if ($kind === 'taken') {
            $passed = (int) $c['PASSING'] === 1;
            $score  = (int) $c['SCORE'];
            $h .= '<span class="ceu-chip ' . ($passed ? 'ceu-chip-pass' : 'ceu-chip-fail') . '">'
                . $score . '%</span>';
            $h .= $passed
                ? '<span class="ceu-action">Add to cart</span>'
                : '<a class="ceu-action" href="/courses/">Retake</a>';
        } else {
            // Certificate thumbnail + "click here", as on the old site.
            $h .= '<span class="ceu-cert">';
            $h .= '<img class="ceu-cert-img" src="' . esc_url(CEU_CERT_IMAGE) . '"'
                . ' alt="Certificate" loading="lazy" width="72" height="54">';
            $h .= '<span class="ceu-action ceu-action-primary">click here</span>';
            $h .= '</span>';
        }
        $h .= '</div></div>';

        return $h;
    };

    $empty = fn($msg) => '<div class="ceu-empty">' . esc_html($msg) . '</div>';

    ob_start();
    ?>
    <div id="ceu-coursework">
        <div class="ceu-head">
            <h2 class="ceu-heading">Coursework and Certificates</h2>
        </div>

        <div class="ceu-toolbar">
            <div class="ceu-tabs" role="tablist">
                <button type="button" class="ceu-tab ceu-tab-active" role="tab"
                        data-target="ceu-panel-taken" data-hash="completed">
                    Completed Courses <span class="ceu-count"><?= count($taken) ?></span>
                </button>
                <button type="button" class="ceu-tab" role="tab"
                        data-target="ceu-panel-certs" data-hash="certificates">
                    Certificates <span class="ceu-count"><?= count($certs) ?></span>
                </button>
            </div>
        </div>

        <div id="ceu-panel-taken" class="ceu-panel" role="tabpanel">
            <div class="ceu-list">
                <?php
                echo $taken
                    ? implode('', array_map(fn($c) => $row($c, 'taken'), $taken))
                    : $empty('No completed courses yet.');
                ?>
            </div>
        </div>

        <div id="ceu-panel-certs" class="ceu-panel" role="tabpanel" hidden>
            <div class="ceu-list">
                <?php
                echo $certs
                    ? implode('', array_map(fn($c) => $row($c, 'cert'), $certs))
                    : $empty('No certificates yet.');
                ?>
            </div>
        </div>
    </div>
    <?php
    return ob_get_clean();
}

// ─── Shortcode: [ceu_coursework] ──────────────────────────────────────────────
// Preferred placement. Sets a flag so the footer fallback below stands down.

add_shortcode('ceu_coursework', function () {
    $html = ceu_coursework_html();
    if ($html) $GLOBALS['ceu_coursework_rendered'] = true;
    return $html;
});

// ─── Footer output: markup fallback + tab behaviour + styles ──────────────────

add_action('wp_footer', function () {
    // Run on the coursework page, or anywhere the shortcode was used — so the
    // styles and tab behaviour follow the block if you place it elsewhere.
    $placed_by_shortcode = !empty($GLOBALS['ceu_coursework_rendered']);
    if (!ceu_is_coursework_page() && !$placed_by_shortcode) return;

    // If the shortcode already placed the block, emit behaviour/styles only.
    $html = $placed_by_shortcode ? '' : ceu_coursework_html();

    // Nothing to show and nothing already on the page — stay silent.
    if (!$placed_by_shortcode && !$html) return;

    if ($html) echo $html;
    ?>
    <script>
    (function () {
        function init() {
            var cw = document.getElementById('ceu-coursework');
            if (!cw) return;

            // ── Relocate, only when the block came from the footer fallback ────────
            if (!<?= $placed_by_shortcode ? 'true' : 'false' ?>) {
                var pageEl = document.querySelector('[data-elementor-type="wp-page"]');
                if (pageEl) {
                    var wraps   = Array.from(pageEl.querySelectorAll('.elementor-widget-wrap.elementor-element-populated'));
                    var certCol = wraps.find(function (w) {
                        return !w.querySelector('form, input, select, textarea');
                    });

                    if (certCol) {
                        certCol.innerHTML = '';
                        certCol.appendChild(cw);
                    } else {
                        pageEl.parentNode.insertBefore(cw, pageEl.nextSibling);
                    }
                }
            }

            // ── Stacked layout: lift this block to the top of the row ─────────────
            // At narrow widths Elementor stacks the columns in DOM order, which
            // buries Coursework and Certificates under the whole Personal
            // Information panel. Rather than guess Elementor's breakpoint, tag this
            // block's own column whenever the row is ACTUALLY stacked; the CSS below
            // gives it order:-1, which beats the untouched siblings sitting at 0.
            // The rule is capped at 1024px too, so a real side-by-side desktop
            // layout is never touched.
            //
            // Deliberately keyed off nothing but this block's own column: the left
            // column may hold the [ceu_profile] panel or the older Elementor form
            // widget, and this works either way.
            (function stackOrder() {
                // A legacy Elementor column, or a direct child of one of the newer
                // flexbox containers. If the block is not inside either, the page is
                // not a column layout and there is nothing to reorder.
                var cwItem = cw.closest('.elementor-column') ||
                             cw.closest('.e-con-inner > *, .e-con > *');
                if (!cwItem) return;

                var row = cwItem.parentElement;
                if (!row || row.children.length < 2) return;

                // `order` only bites inside a flex/grid parent. Elementor's column
                // container already is one; anything else gets made a flex column by
                // the .ceu-stack-row rule (inside the media query, so desktop is safe).
                var display = window.getComputedStyle(row).display;
                if (display.indexOf('flex') === -1 && display.indexOf('grid') === -1) {
                    row.classList.add('ceu-stack-row');
                }

                // Stacked = this column has the row to itself. Compared as a ratio so
                // padding and gutters do not read as "still side by side"; a genuine
                // two-column split lands near 0.5, never above 0.9. Still true once
                // the column has moved to the top, so the test does not oscillate.
                function sync() {
                    var item = cwItem.getBoundingClientRect().width;
                    var full = row.getBoundingClientRect().width;
                    cwItem.classList.toggle('ceu-stack-first', full > 0 && item / full > 0.9);
                }

                sync();
                var pending = false;
                window.addEventListener('resize', function () {
                    if (pending) return;
                    pending = true;
                    window.requestAnimationFrame(function () {
                        pending = false;
                        sync();
                    });
                });
            })();

            var tabs   = Array.from(cw.querySelectorAll('.ceu-tab'));
            var panels = Array.from(cw.querySelectorAll('.ceu-panel'));

            // ── Show/hide the panels ───────────────────────────────────────────────
            function activate(tab, updateHash) {
                if (!tab) return;
                tabs.forEach(function (b) { b.classList.remove('ceu-tab-active'); });
                panels.forEach(function (p) { p.hidden = true; });

                tab.classList.add('ceu-tab-active');
                var panel = document.getElementById(tab.dataset.target);
                if (panel) panel.hidden = false;

                // replaceState keeps the deep link shareable without jumping the page.
                if (updateHash && tab.dataset.hash && window.history.replaceState) {
                    window.history.replaceState(null, '', '#' + tab.dataset.hash);
                }
            }

            tabs.forEach(function (btn) {
                btn.addEventListener('click', function () { activate(btn, true); });
            });

            // ── Deep link: /user/#certificates opens the Certificates tab ──────────
            function openFromHash() {
                var hash = (window.location.hash || '').replace('#', '');
                if (!hash) return;
                var match = tabs.find(function (t) { return t.dataset.hash === hash; });
                if (match) activate(match, false);
            }

            openFromHash();
            window.addEventListener('hashchange', openFromHash);
        }

        document.readyState === 'loading'
            ? document.addEventListener('DOMContentLoaded', init)
            : init();
    })();
    </script>

    <style>
    #ceu-coursework {
        --ceu-blue:   #2563eb;
        --ceu-ink:    #0f172a;
        --ceu-muted:  #64748b;
        --ceu-line:   #e2e8f0;
        --ceu-bg:     #f8fafc;

        width: 100%;
        font-family: inherit;
        color: var(--ceu-ink);
    }

    /* ── Header ── */
    #ceu-coursework .ceu-heading {
        font-size: 1.6em;
        font-weight: 700;
        color: var(--ceu-ink);
        margin: 0 0 20px;
        line-height: 1.25;
    }

    /* ── Toolbar: tabs + search ── */
    #ceu-coursework .ceu-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    /* Segmented control rather than two big outlined blocks. */
    #ceu-coursework .ceu-tabs {
        display: inline-flex;
        padding: 4px;
        background: var(--ceu-bg);
        border: 1px solid var(--ceu-line);
        border-radius: 10px;
        gap: 4px;
    }
    #ceu-coursework .ceu-tab {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 14px;
        border: 0;
        border-radius: 7px;
        background: transparent;
        color: var(--ceu-muted);
        font-size: .92em;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        white-space: nowrap;
        transition: background .15s, color .15s;
    }
    #ceu-coursework .ceu-tab:hover { color: var(--ceu-ink); }
    #ceu-coursework .ceu-tab-active {
        background: #fff;
        color: var(--ceu-ink);
        box-shadow: 0 1px 2px rgba(15, 23, 42, .08);
    }
    #ceu-coursework .ceu-count {
        display: inline-block;
        min-width: 20px;
        padding: 1px 6px;
        border-radius: 20px;
        background: var(--ceu-line);
        color: var(--ceu-muted);
        font-size: .82em;
        font-weight: 700;
        text-align: center;
    }
    #ceu-coursework .ceu-tab-active .ceu-count {
        background: var(--ceu-blue);
        color: #fff;
    }

    /* ── List ── */
    #ceu-coursework .ceu-list {
        border: 1px solid var(--ceu-line);
        border-radius: 12px;
        overflow: hidden;
        background: #fff;
    }
    #ceu-coursework .ceu-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 14px 18px;
        border-top: 1px solid var(--ceu-line);
        transition: background .12s;
    }
    #ceu-coursework .ceu-row:first-child { border-top: 0; }
    #ceu-coursework .ceu-row:hover { background: var(--ceu-bg); }

    /* Themes routinely set display on bare elements, which beats the native
       [hidden] attribute. Restate it so the panels actually hide. */
    #ceu-coursework .ceu-row[hidden],
    #ceu-coursework .ceu-panel[hidden] { display: none !important; }

    #ceu-coursework .ceu-row-main { min-width: 0; }
    #ceu-coursework .ceu-row-title {
        font-size: .98em;
        font-weight: 600;
        color: var(--ceu-ink);
        line-height: 1.4;
    }
    #ceu-coursework .ceu-row-meta {
        display: flex;
        align-items: center;
        gap: 9px;
        flex-wrap: wrap;
        margin-top: 6px;
        font-size: .88em;
        color: var(--ceu-muted);
    }
    #ceu-coursework .ceu-sep { color: #cbd5e1; }

    /* Credits and date read as data, not as body copy. */
    #ceu-coursework .ceu-stat {
        display: inline-flex;
        align-items: baseline;
        gap: 5px;
    }
    #ceu-coursework .ceu-stat-value {
        color: var(--ceu-ink);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
    }
    #ceu-coursework .ceu-stat-label { color: var(--ceu-muted); }
    #ceu-coursework .ceu-warn     { color: #b45309; font-weight: 600; }
    #ceu-coursework .ceu-warn-bad { color: #dc2626; }

    #ceu-coursework .ceu-row-side {
        display: flex;
        align-items: center;
        gap: 14px;
        flex-shrink: 0;
    }
    #ceu-coursework .ceu-chip {
        padding: 3px 10px;
        border-radius: 20px;
        font-size: .8em;
        font-weight: 700;
        white-space: nowrap;
    }
    #ceu-coursework .ceu-chip-pass { background: #dbeafe; color: #1d4ed8; }
    #ceu-coursework .ceu-chip-fail { background: #fee2e2; color: #b91c1c; }

    #ceu-coursework .ceu-action {
        font-size: .88em;
        font-weight: 600;
        color: var(--ceu-muted);
        text-decoration: none;
        cursor: pointer;
        white-space: nowrap;
    }
    #ceu-coursework .ceu-action:hover { color: var(--ceu-blue); text-decoration: underline; }
    #ceu-coursework .ceu-action-primary { color: var(--ceu-blue); }

    /* ── Certificate thumbnail ── */
    #ceu-coursework .ceu-cert {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        cursor: pointer;
    }
    #ceu-coursework .ceu-cert-img {
        display: block;
        width: 72px;
        height: auto;
        border-radius: 3px;
    }
    #ceu-coursework .ceu-cert:hover .ceu-action { text-decoration: underline; }

    #ceu-coursework .ceu-empty {
        padding: 32px 18px;
        text-align: center;
        color: var(--ceu-muted);
        font-size: .92em;
    }

    /* ── Stacked columns: Coursework and Certificates first ── */
    /* The classes are applied by the script above, and only while the columns are
       genuinely stacked — so a side-by-side row is never reordered. The cap keeps a
       wide desktop layout out of it entirely. order:-1 beats the sibling columns,
       which stay at the default 0; !important because Elementor sets `order` itself
       for its reverse-column option. */
    @media (max-width: 1024px) {
        .ceu-stack-row   { display: flex; flex-direction: column; }
        .ceu-stack-first { order: -1 !important; }
    }

    /* ── Narrow columns ── */
    @media (max-width: 640px) {
        #ceu-coursework .ceu-toolbar { flex-direction: column; align-items: stretch; }
        #ceu-coursework .ceu-tabs { justify-content: center; }
        #ceu-coursework .ceu-row { flex-direction: column; align-items: flex-start; gap: 10px; }
        #ceu-coursework .ceu-row-side { width: 100%; justify-content: space-between; }
        #ceu-coursework .ceu-cert { flex-direction: row; gap: 8px; align-items: center; }
        #ceu-coursework .ceu-cert-img { width: 52px; }
    }
    </style>
    <?php
}, 20);
