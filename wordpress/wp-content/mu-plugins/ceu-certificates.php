<?php
/**
 * Plugin Name: CEU Certificates
 * Description: Renders "Certified Coursework" (Completed Courses + Certificates)
 *              on /user/ with live data from CEU_DB.CEU_TRAININGS_TAKEN and
 *              CEU_DB.CEU_CERTIFICATES.
 *
 * BOTH PANELS LOAD AT ONCE — the tab buttons only show/hide the already-rendered
 * divs. No second page, no extra request. /user-2/ is retired.
 *
 * PLACEMENT — two ways, pick either:
 *   1. Shortcode (preferred): drop [ceu_coursework] on the /user page in
 *      Elementor, exactly where you want the block.
 *   2. Auto-inject (fallback): if the shortcode is absent, the block is written
 *      to the footer and JS moves it into the Elementor column that has no form
 *      fields. This is a guess about the layout — the shortcode is more robust.
 *
 * DEEP LINK — /user/#certificates opens with the Certificates tab active.
 * That is what the "My Certificates" dropdown item points to (ceu-dashboard-nav.php).
 */

// Page this block belongs to. Change here if the slug ever moves.
if (!defined('CEU_COURSEWORK_SLUG')) {
    define('CEU_COURSEWORK_SLUG', 'user');
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
    // ceu_is_logged_in() and the _ceu_id meta are both set by ceu-auth.php only
    // after a successful CEU login.
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

    // User name and license expiry come from the CEU session, not the DB.
    $session  = $_SESSION['session_data'][0] ?? [];
    $name     = trim(($session['FIRST'] ?? '') . ' ' . ($session['LAST'] ?? ''));
    $lic_exp  = !empty($session['LIC_EXP']) ? $session['LIC_EXP'] : null;
    $exp_days = $lic_exp ? (int) floor((strtotime($lic_exp) - time()) / 86400) : null;

    $clean = fn($t) => strip_tags(str_replace(['<br>', '<br/>'], ' ', $t));
    $fdate = fn($d)  => date('n-d-Y', strtotime($d));
    $fcred = fn($n)  => rtrim(rtrim(number_format((float) $n, 2), '0'), '.');

    $course_card = function ($c) use ($clean, $fdate, $fcred, $exp_days) {
        $passed = (int) $c['PASSING'] === 1;
        $score  = (int) $c['SCORE'];
        $label  = $passed ? 'Completed' : 'Last taken';

        $h  = '<div class="ceu-card">';
        $h .= '<div class="ceu-card-title">' . esc_html($clean($c['TRAINING_TITLE'])) . '</div>';
        $h .= '<div class="ceu-card-row">CE Credit Hours: ' . esc_html($fcred($c['CREDITS'])) . '</div>';
        $h .= '<div class="ceu-card-row">' . $label . ': ' . esc_html($fdate($c['DATE_COMPLETED'])) . '</div>';
        $h .= '<div class="ceu-card-score ' . ($passed ? 'ceu-pass' : 'ceu-fail') . '">Score ' . $score . '%</div>';
        if ($passed && $exp_days !== null) {
            $cls = $exp_days < 0 ? 'ceu-expired' : 'ceu-expiring';
            $h  .= '<div class="ceu-card-row ' . $cls . '">This training expires in ' . $exp_days . ' day(s)</div>';
        }
        $h .= '<hr class="ceu-divider">';
        $h .= $passed
            ? '<span class="ceu-btn">&#9679; Add to Cart</span>'
            : '<a class="ceu-btn" href="/courses/">Retake training</a>';
        $h .= '</div>';
        return $h;
    };

    $cert_card = function ($c) use ($clean, $fdate, $fcred) {
        $h  = '<div class="ceu-card">';
        $h .= '<div class="ceu-card-title">' . esc_html($clean($c['TRAINING_TITLE'])) . '</div>';
        $h .= '<div class="ceu-card-row">CE Credit Hours: ' . esc_html($fcred($c['CREDITS'])) . '</div>';
        $h .= '<div class="ceu-card-row">Completed: ' . esc_html($fdate($c['DATE_COMPLETED'])) . '</div>';
        $h .= '<div class="ceu-card-score ceu-pass">Certificate Earned</div>';
        $h .= '<hr class="ceu-divider">';
        $h .= '<span class="ceu-btn">&#9679; Download</span>';
        $h .= '</div>';
        return $h;
    };

    ob_start();
    ?>
    <div id="ceu-coursework">
        <?php if ($name) : ?>
        <h2 class="ceu-heading">Certified Coursework for <?= esc_html($name) ?></h2>
        <?php endif; ?>

        <div class="ceu-tabs">
            <button class="ceu-tab ceu-tab-active" data-target="ceu-panel-taken" data-hash="completed">
                Completed Courses - <?= count($taken) ?>
            </button>
            <button class="ceu-tab" data-target="ceu-panel-certs" data-hash="certificates">
                Certificates - <?= count($certs) ?>
            </button>
        </div>

        <div id="ceu-panel-taken" class="ceu-panel">
            <div class="ceu-grid">
                <?php foreach ($taken as $c) echo $course_card($c); ?>
            </div>
        </div>

        <div id="ceu-panel-certs" class="ceu-panel" style="display:none;">
            <div class="ceu-grid">
                <?php foreach ($certs as $c) echo $cert_card($c); ?>
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
            // With the shortcode, it is already in the right place — leave it alone.
            if (!<?= $placed_by_shortcode ? 'true' : 'false' ?>) {
                var pageEl = document.querySelector('[data-elementor-type="wp-page"]');
                if (pageEl) {
                    // Pick the Elementor column with no form fields — on /user that is
                    // the one beside the profile form.
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

            // ── Show/hide the panels ───────────────────────────────────────────────
            var tabs = Array.from(cw.querySelectorAll('.ceu-tab'));

            function activate(tab, updateHash) {
                if (!tab) return;
                tabs.forEach(function (b) { b.classList.remove('ceu-tab-active'); });
                cw.querySelectorAll('.ceu-panel').forEach(function (p) { p.style.display = 'none'; });

                tab.classList.add('ceu-tab-active');
                var panel = document.getElementById(tab.dataset.target);
                if (panel) panel.style.display = '';

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
        width: 100%;
        padding: 0;
        font-family: inherit;
    }
    .ceu-heading {
        font-size: 2em;
        font-weight: 700;
        color: #1a2e5a;
        margin-bottom: 24px;
    }
    .ceu-tabs {
        display: flex;
        gap: 16px;
        margin-bottom: 28px;
    }
    .ceu-tab {
        flex: 1;
        padding: 14px 20px;
        border: 2px solid #d0d5dd;
        border-radius: 10px;
        background: #fff;
        color: #999;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        transition: border-color .2s, color .2s;
    }
    .ceu-tab-active {
        border-color: #3b82f6;
        color: #3b82f6;
    }
    .ceu-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    @media (max-width: 900px) {
        .ceu-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 560px) {
        .ceu-grid { grid-template-columns: 1fr; }
    }
    .ceu-card {
        border: 2px solid #3b82f6;
        border-radius: 12px;
        padding: 20px;
        background: #fff;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .ceu-card-title {
        font-size: 1.05em;
        font-weight: 700;
        color: #3b82f6;
        line-height: 1.4;
    }
    .ceu-card-row  { font-size: .95em; color: #333; line-height: 1.5; }
    .ceu-card-score { font-size: .95em; font-weight: 600; }
    .ceu-pass      { color: #3b82f6; }
    .ceu-fail      { color: #ef4444; }
    .ceu-expired   { color: #ef4444; font-size: .9em; }
    .ceu-expiring  { color: #f97316; font-size: .9em; }
    .ceu-divider   { border: none; border-top: 1px solid #e5e7eb; margin: 8px 0 4px; }
    .ceu-btn       { font-size: .9em; font-weight: 600; color: #1a2e5a; text-decoration: none; cursor: pointer; }
    .ceu-btn:hover { text-decoration: underline; }
    @media (max-width: 640px) { .ceu-tabs { flex-direction: column; } }
    </style>
    <?php
}, 20);
