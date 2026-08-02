<?php
/**
 * Plugin Name: CEU Certificates
 * Description: Renders "Certified Coursework" page (/user-2/) with live data
 *              from CEU_DB.CEU_TRAININGS_TAKEN and CEU_DB.CEU_CERTIFICATES.
 */

add_action('wp_footer', function () {
    $path = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
    if (basename($path) !== 'user-2') return;

    // Identity must come from the verified WP session, never from the 'ceu'
    // cookie — that value is client-controlled, so trusting it let anyone read
    // another user's CE records just by editing the cookie in devtools.
    // ceu_is_logged_in() and the _ceu_id meta are both set by ceu-auth.php only
    // after a successful CEU login.
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return;

    $user_id = (int) get_user_meta(get_current_user_id(), '_ceu_id', true);
    if (!$user_id || !function_exists('ceu_db_connect')) return;

    $db = ceu_db_connect();
    if (!$db) return;

    // ── Fetch data via query() — no mysqlnd required ───────────────────────────
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

    if (empty($taken) && empty($certs)) return;

    // ── User name and license expiry from session ──────────────────────────────
    $session  = $_SESSION['session_data'][0] ?? [];
    $name     = trim(($session['FIRST'] ?? '') . ' ' . ($session['LAST'] ?? ''));
    $lic_exp  = !empty($session['LIC_EXP']) ? $session['LIC_EXP'] : null;
    $exp_days = $lic_exp ? (int) floor((strtotime($lic_exp) - time()) / 86400) : null;

    // ── Helpers ────────────────────────────────────────────────────────────────
    $clean = fn($t) => strip_tags(str_replace(['<br>', '<br/>'], ' ', $t));
    $fdate = fn($d)  => date('n-d-Y', strtotime($d));
    $fcred = fn($n)  => rtrim(rtrim(number_format((float) $n, 2), '0'), '.');

    // ── Card builders ──────────────────────────────────────────────────────────
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

    $taken_count = count($taken);
    $cert_count  = count($certs);
    ?>

    <div id="ceu-coursework">
        <?php if ($name) : ?>
        <h2 class="ceu-heading">Certified Coursework for <?= esc_html($name) ?></h2>
        <?php endif; ?>

        <div class="ceu-tabs">
            <button class="ceu-tab ceu-tab-active" data-target="ceu-panel-taken">
                Completed Courses - <?= $taken_count ?>
            </button>
            <button class="ceu-tab" data-target="ceu-panel-certs">
                Certificates - <?= $cert_count ?>
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

    <script>
    (function () {
        function init() {
            var cw = document.getElementById('ceu-coursework');
            if (!cw) return;

            // ── Inject into the right-column widget wrap (not the sidebar) ──────────
            // The page has two .elementor-widget-wrap columns: left (form) and right (certs).
            // Find the one without form elements — that's the certificate column.
            var pageEl = document.querySelector('[data-elementor-type="wp-page"]');
            if (!pageEl) return;

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

            // ── Tab switching ──────────────────────────────────────────────────────
            cw.querySelectorAll('.ceu-tab').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    cw.querySelectorAll('.ceu-tab').forEach(function (b) { b.classList.remove('ceu-tab-active'); });
                    cw.querySelectorAll('.ceu-panel').forEach(function (p) { p.style.display = 'none'; });
                    btn.classList.add('ceu-tab-active');
                    var panel = document.getElementById(btn.dataset.target);
                    if (panel) panel.style.display = '';
                });
            });
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
