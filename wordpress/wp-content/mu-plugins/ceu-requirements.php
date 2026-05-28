<?php
/**
 * Plugin Name: CEU Requirements
 * Description: CE state requirements widgets for profession pages and /accreditations/.
 *              Safe from WordPress/Tutor updates (MU Plugin).
 *
 * Shortcodes:
 *   [ceu_state_requirements]                       — auto-detects profession from page slug
 *   [ceu_state_requirements profession="psychologist"] — explicit profession
 *   [ceu_all_requirements]                         — all professions, used on /accreditations/
 *
 * Auto-inject:
 *   Profession pages  — inserts [ceu_state_requirements] before the course grid (.ceu-section)
 *   /accreditations/  — appends [ceu_all_requirements] via the_content + JS fallback
 *
 * Requires: CEU_PROFESSIONS constant defined in ceu-courses.php (loads first alphabetically).
 */

// ─── Slug → JSON profession key map ──────────────────────────────────────────

define('CEU_SLUG_TO_PROFESSION', serialize([
    'social-workers'      => 'Social Workers',
    'social-worker'       => 'Social Workers',
    'psychologist'        => 'Psychologists',
    'psychologists'       => 'Psychologists',
    'counselor-addiction' => 'Counselors',
    'counselor'           => 'Counselors',
    'counselors'          => 'Counselors',
    'mft-lcsw'            => 'Marriage & Family Therapists',
    'mft'                 => 'Marriage & Family Therapists',
    'lcsw'                => 'Marriage & Family Therapists',
]));

// ─── Helper: JSON file path ───────────────────────────────────────────────────

function ceu_req_json_path() {
    return dirname(__DIR__) . '/US_ce_requirements.json';
}

// ─── Helper: is this the /accreditations/ page? ───────────────────────────────

function ceu_is_accreditations_page() {
    // URL-based (works before WP query is established)
    $path = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
    if (basename($path) === 'accreditations') return true;
    // WP conditional fallback (handles ?page_id= URLs and edge cases)
    if (function_exists('is_page') && is_page('accreditations')) return true;
    return false;
}

// ─── Shortcode: [ceu_state_requirements] ─────────────────────────────────────
// Renders a state dropdown + dynamic requirements box from US_ce_requirements.json.
// Profession resolved by: explicit attribute → WP page slug → URL path segment.

add_shortcode('ceu_state_requirements', function ($atts) {
    $atts              = shortcode_atts(['profession' => ''], $atts);
    $slug_to_profession = unserialize(CEU_SLUG_TO_PROFESSION);

    if (!empty($atts['profession'])) {
        $profession_slug = sanitize_key($atts['profession']);
    } else {
        $post_id         = get_queried_object_id() ?: get_the_ID();
        $profession_slug = get_post_field('post_name', $post_id);
        if (!isset($slug_to_profession[$profession_slug])) {
            $uri             = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
            $profession_slug = sanitize_key(basename($uri));
        }
    }

    if (!isset($slug_to_profession[$profession_slug])) return '';

    $json_path = ceu_req_json_path();
    if (!file_exists($json_path)) return '<p>Requirements data not found.</p>';

    $data = json_decode(file_get_contents($json_path), true);
    if (!$data) return '<p>Could not parse requirements data.</p>';

    $profession_key  = $slug_to_profession[$profession_slug];
    $profession_data = $data['professions'][$profession_key] ?? [];
    $metadata        = $data['_metadata'] ?? [];
    $states          = array_keys($profession_data);
    sort($states);

    $json_encoded = wp_json_encode($profession_data);

    if (!session_id()) session_start();
    $user_state = $_SESSION['session_data'][0]['STATE'] ?? '';

    ob_start(); ?>
    <div class="ceu-req-wrap">

        <?php if (!empty($metadata)): ?>
            <div class="ceu-req-meta">
                <div class="ceu-req-meta-title"><?php echo esc_html($metadata['title'] ?? ''); ?></div>
                <?php if (!empty($metadata['disclaimer'])): ?>
                    <div class="ceu-req-meta-disclaimer">
                        <span class="ceu-req-note-icon">&#9432;</span>
                        <?php echo esc_html($metadata['disclaimer']); ?>
                    </div>
                <?php endif; ?>
            </div>
        <?php endif; ?>

        <div class="ceu-req-selector">
            <label for="ceu-state-select" class="ceu-req-selector-label">
                Select your state to view <?php echo esc_html($profession_key); ?> CE requirements:
            </label>
            <select id="ceu-state-select" class="ceu-req-state-select">
                <option value="">— Choose a state —</option>
                <?php foreach ($states as $state): ?>
                    <option value="<?php echo esc_attr($state); ?>"><?php echo esc_html($state); ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        <?php if ($user_state): ?>
            <p class="ceu-req-session-note" style="font-size:0.82em;color:#666;margin:0 0 10px;">
                Showing requirements for your state on file. <a href="#" id="ceu-change-state" style="color:#244271;">Change state</a>
            </p>
        <?php endif; ?>

        <div class="ceu-req-box" id="ceu-req-box" style="display:none;">

            <button class="ceu-req-header" aria-expanded="true" aria-controls="ceu-req-collapsible">
                    <span class="ceu-req-header-left">
                        <span class="ceu-req-state" id="ceu-req-title"></span>
                        <span class="ceu-req-licenses" id="ceu-req-licenses"></span>
                    </span>
                <span class="ceu-req-chevron" aria-hidden="true">&#8963;</span>
            </button>

            <div class="ceu-req-collapsible" id="ceu-req-collapsible">
                <div class="ceu-req-stats" id="ceu-req-stats"></div>
                <div class="ceu-req-body" id="ceu-req-body"></div>
                <div class="ceu-req-note" id="ceu-req-note" style="display:none;">
                    <span class="ceu-req-note-icon">&#9432;</span>
                    <span id="ceu-req-note-text"></span>
                </div>
            </div>
        </div>

    </div><!-- .ceu-req-wrap -->

    <style>
        .ceu-req-wrap { max-width: 860px; margin: 0 auto 30px; }
        .ceu-req-meta { margin-bottom: 18px; }
        .ceu-req-meta-title { font-size: 1.05em; font-weight: 700; color: #244271; margin-bottom: 6px; }
        .ceu-req-meta-disclaimer { display: flex; gap: 7px; align-items: flex-start; background: #f5f8ff; border: 1px solid #dde3ec; border-radius: 6px; padding: 10px 14px; font-size: 0.8em; color: #666; line-height: 1.5; }
        .ceu-req-selector { margin-bottom: 16px; }
        .ceu-req-selector-label { display: block; font-size: 0.88em; font-weight: 600; color: #333; margin-bottom: 7px; }
        .ceu-req-state-select { font-size: 0.92em; padding: 9px 14px; border: 1px solid #c8d0dc; border-radius: 5px; color: #333; background: #fff; cursor: pointer; width: 100%; max-width: 340px; }
        .ceu-req-state-select:focus { outline: none; border-color: #244271; box-shadow: 0 0 0 2px rgba(36,66,113,0.15); }
        .ceu-req-box { background: #fff; border: 1px solid #dde3ec; border-radius: 8px; overflow: hidden; font-family: inherit; box-shadow: 0 2px 10px rgba(0,0,0,0.07); }
        .ceu-req-header { width: 100%; background: #244271; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; gap: 12px; border: none; cursor: pointer; text-align: left; }
        .ceu-req-header:hover { background: #1d3560; }
        .ceu-req-header-left { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .ceu-req-state { font-size: 1em; font-weight: 700; color: #fff; }
        .ceu-req-licenses { display: flex; gap: 5px; flex-wrap: wrap; }
        .ceu-req-license-badge { background: rgba(255,255,255,0.18); color: #fff; font-size: 0.7em; font-weight: 700; padding: 2px 8px; border-radius: 3px; letter-spacing: 0.05em; }
        .ceu-req-chevron { color: rgba(255,255,255,0.8); font-size: 1.6em; flex-shrink: 0; transition: transform 0.25s ease; display: inline-block; line-height: 1; }
        .ceu-req-header[aria-expanded="false"] .ceu-req-chevron { transform: rotate(180deg); }
        .ceu-req-collapsible { overflow: hidden; transition: max-height 0.3s ease; max-height: 1000px; }
        .ceu-req-collapsible.ceu-collapsed { max-height: 0; }
        .ceu-req-stats { display: flex; border-bottom: 1px solid #eaeff6; background: #f9fbfd; }
        .ceu-req-stat { flex: 1; text-align: center; padding: 18px 10px; border-right: 1px solid #eaeff6; }
        .ceu-req-stat:last-child { border-right: none; }
        .ceu-req-stat-value { display: block; font-size: 1.9em; font-weight: 800; color: #244271; line-height: 1; margin-bottom: 4px; }
        .ceu-req-stat-label { display: block; font-size: 0.68em; color: #888; text-transform: uppercase; letter-spacing: 0.07em; }
        .ceu-req-body { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        .ceu-req-section { padding: 16px 24px; border-bottom: 1px solid #eaeff6; border-right: 1px solid #eaeff6; }
        .ceu-req-section:nth-child(even) { border-right: none; }
        .ceu-req-section:last-child, .ceu-req-section:nth-last-child(2):nth-child(odd) { border-bottom: none; }
        .ceu-req-section-title { font-size: 0.7em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #244271; margin: 0 0 7px; }
        .ceu-req-list { margin: 0; padding-left: 16px; }
        .ceu-req-list li { font-size: 0.85em; color: #444; line-height: 1.65; margin-bottom: 3px; }
        .ceu-req-text { font-size: 0.85em; color: #555; margin: 0; line-height: 1.6; }
        .ceu-req-board-link { font-size: 0.85em; color: #244271; text-decoration: none; border-bottom: 1px solid #64afd5; }
        .ceu-req-board-link:hover { color: #48B4E2; border-bottom-color: #48B4E2; }
        .ceu-req-note { display: flex; gap: 8px; align-items: flex-start; background: #f5f8ff; border-top: 1px solid #dde3ec; padding: 10px 24px; font-size: 0.79em; color: #666; line-height: 1.5; }
        .ceu-req-note-icon { color: #48B4E2; font-size: 1em; flex-shrink: 0; margin-top: 2px; }
        @media (max-width: 768px) {
            .ceu-req-body { grid-template-columns: 1fr; }
            .ceu-req-section { border-right: none; }
            .ceu-req-section:last-child { border-bottom: none; }
        }
        @media (max-width: 600px) {
            .ceu-req-stats { flex-wrap: wrap; }
            .ceu-req-stat { flex: 0 0 50%; border-bottom: 1px solid #eaeff6; }
            .ceu-req-stat:nth-child(odd) { border-right: 1px solid #eaeff6; }
            .ceu-req-stat:last-child { border-bottom: none; }
            .ceu-req-state-select { max-width: 100%; }
        }
    </style>

    <script>
        (function () {
            var data      = <?php echo $json_encoded; ?>;
            var userState = <?php echo wp_json_encode($user_state); ?>;

            var abbrevMap = {
                'AL':'Alabama','AK':'Alaska','AZ':'Arizona','AR':'Arkansas','CA':'California',
                'CO':'Colorado','CT':'Connecticut','DE':'Delaware','DC':'District of Columbia',
                'FL':'Florida','GA':'Georgia','HI':'Hawaii','ID':'Idaho','IL':'Illinois',
                'IN':'Indiana','IA':'Iowa','KS':'Kansas','KY':'Kentucky','LA':'Louisiana',
                'ME':'Maine','MD':'Maryland','MA':'Massachusetts','MI':'Michigan','MN':'Minnesota',
                'MS':'Mississippi','MO':'Missouri','MT':'Montana','NE':'Nebraska','NV':'Nevada',
                'NH':'New Hampshire','NJ':'New Jersey','NM':'New Mexico','NY':'New York',
                'NC':'North Carolina','ND':'North Dakota','OH':'Ohio','OK':'Oklahoma','OR':'Oregon',
                'PA':'Pennsylvania','RI':'Rhode Island','SC':'South Carolina','SD':'South Dakota',
                'TN':'Tennessee','TX':'Texas','UT':'Utah','VT':'Vermont','VA':'Virginia',
                'WA':'Washington','WV':'West Virginia','WI':'Wisconsin','WY':'Wyoming'
            };

            var select    = document.getElementById('ceu-state-select');
            var box       = document.getElementById('ceu-req-box');
            var titleEl   = document.getElementById('ceu-req-title');
            var licensesEl = document.getElementById('ceu-req-licenses');
            var statsEl   = document.getElementById('ceu-req-stats');
            var bodyEl    = document.getElementById('ceu-req-body');
            var noteEl    = document.getElementById('ceu-req-note');
            var noteText  = document.getElementById('ceu-req-note-text');
            var toggleBtn = box ? box.querySelector('.ceu-req-header') : null;
            var panel     = document.getElementById('ceu-req-collapsible');

            function esc(str) {
                var d = document.createElement('div');
                d.appendChild(document.createTextNode(str));
                return d.innerHTML;
            }

            function renderState(state) {
                var req = data[state];
                if (!req) return;

                titleEl.textContent = state + ' <?php echo esc_js($profession_key); ?> Requirements';
                licensesEl.innerHTML = (req.license_types || []).map(function (lt) {
                    return '<span class="ceu-req-license-badge">' + esc(lt) + '</span>';
                }).join('');

                var stats = [];
                if (req.hours_required != null)      stats.push({ value: req.hours_required,       label: 'CE Hours Required' });
                if (req.renewal_period_years != null) stats.push({ value: req.renewal_period_years, label: 'Year Renewal Period' });
                if (req.renewal_cycle)                stats.push({ value: req.renewal_cycle,         label: 'Renewal Cycle' });
                statsEl.innerHTML = stats.map(function (s) {
                    return '<div class="ceu-req-stat">' +
                        '<span class="ceu-req-stat-value">' + esc(String(s.value)) + '</span>' +
                        '<span class="ceu-req-stat-label">' + esc(s.label) + '</span>' +
                        '</div>';
                }).join('');

                var sections = [];
                if (req.specific_requirements && req.specific_requirements.length) {
                    sections.push(
                        '<div class="ceu-req-section">' +
                        '<h4 class="ceu-req-section-title">Specific Requirements</h4>' +
                        '<ul class="ceu-req-list">' +
                        req.specific_requirements.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') +
                        '</ul></div>'
                    );
                }
                if (req.online_limit) {
                    sections.push(
                        '<div class="ceu-req-section">' +
                        '<h4 class="ceu-req-section-title">Online Course Limit</h4>' +
                        '<p class="ceu-req-text">' + esc(req.online_limit) + '</p>' +
                        '</div>'
                    );
                }
                if (req.board) {
                    var boardHtml = req.board_url
                        ? '<a href="' + esc(req.board_url) + '" target="_blank" rel="noopener noreferrer" class="ceu-req-board-link">' + esc(req.board) + '</a>'
                        : '<p class="ceu-req-text">' + esc(req.board) + '</p>';
                    sections.push(
                        '<div class="ceu-req-section">' +
                        '<h4 class="ceu-req-section-title">Licensing Board</h4>' +
                        boardHtml +
                        '</div>'
                    );
                }
                bodyEl.innerHTML = sections.join('');

                if (req.notes) {
                    noteText.textContent = req.notes;
                    noteEl.style.display = 'flex';
                } else {
                    noteEl.style.display = 'none';
                }

                box.style.display = 'block';
                if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
                if (panel) panel.classList.remove('ceu-collapsed');
                box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            if (select) {
                select.addEventListener('change', function () {
                    if (this.value) renderState(this.value);
                    else box.style.display = 'none';
                });
            }

            if (toggleBtn && panel) {
                toggleBtn.addEventListener('click', function () {
                    var expanded = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', String(!expanded));
                    panel.classList.toggle('ceu-collapsed', expanded);
                });
            }

            if (userState && select) {
                var fullName = abbrevMap[userState.toUpperCase()] || userState;
                var matched  = '';
                for (var i = 0; i < select.options.length; i++) {
                    if (select.options[i].value.toLowerCase() === fullName.toLowerCase()) {
                        matched = select.options[i].value;
                        break;
                    }
                }
                if (matched) {
                    select.value = matched;
                    renderState(matched);
                    var selectorDiv = select.closest('.ceu-req-selector');
                    if (selectorDiv) selectorDiv.style.display = 'none';
                }
            }

            var changeLink = document.getElementById('ceu-change-state');
            if (changeLink) {
                changeLink.addEventListener('click', function (e) {
                    e.preventDefault();
                    var selectorDiv = select ? select.closest('.ceu-req-selector') : null;
                    if (selectorDiv) selectorDiv.style.display = '';
                    this.parentElement.style.display = 'none';
                });
            }
        })();
    </script>
    <?php
    return ob_get_clean();
});

// ─── Auto-inject [ceu_state_requirements] on profession pages ─────────────────
// Inserts the widget before the course grid (.ceu-section) — no Elementor editing needed.

add_action('wp_footer', function () {
    $uri             = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
    $profession_slug = sanitize_key(basename($uri));
    $professions     = unserialize(CEU_PROFESSIONS);
    if (!isset($professions[$profession_slug])) return;

    $html = do_shortcode('[ceu_state_requirements profession="' . esc_attr($profession_slug) . '"]');
    if (!$html) return;
    ?>
    <script>
        (function () {
            var html = <?= wp_json_encode($html) ?>;
            function inject() {
                if (document.querySelector('.ceu-req-wrap')) return;
                var courses = document.querySelector('.ceu-section');
                if (!courses) return;
                var div = document.createElement('div');
                div.innerHTML = html;
                courses.parentNode.insertBefore(div, courses);
                div.querySelectorAll('script').forEach(function (old) {
                    var s = document.createElement('script');
                    s.textContent = old.textContent;
                    old.parentNode.replaceChild(s, old);
                });
            }
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', inject);
            } else {
                inject();
            }
        })();
    </script>
    <?php
}, 20);

// ─── Shortcode: [ceu_all_requirements] ───────────────────────────────────────
// State picker → tabs for all 4 professions. No session auto-select.
// Used on /accreditations/.

add_shortcode('ceu_all_requirements', function () {
    $json_path = ceu_req_json_path();
    if (!file_exists($json_path)) return '<p>Requirements data not found.</p>';

    $data = json_decode(file_get_contents($json_path), true);
    if (!$data) return '<p>Could not parse requirements data.</p>';

    $professions = $data['professions'];
    $all_states  = [];
    foreach ($professions as $prof_data) {
        $all_states = array_merge($all_states, array_keys($prof_data));
    }
    $all_states = array_unique($all_states);
    sort($all_states);

    $json_encoded = wp_json_encode($professions);
    $prof_names   = wp_json_encode(array_keys($professions));

    ob_start(); ?>
    <div class="ceu-all-req-wrap">
        <div class="ceu-all-req-selector">
            <label for="ceu-all-state-select" class="ceu-all-req-label">
                Select your state to view CE requirements:
            </label>
            <select id="ceu-all-state-select" class="ceu-req-state-select">
                <option value="">— Choose a state —</option>
                <?php foreach ($all_states as $state): ?>
                    <option value="<?php echo esc_attr($state); ?>"><?php echo esc_html($state); ?></option>
                <?php endforeach; ?>
            </select>
        </div>

        <div id="ceu-all-req-box" style="display:none; margin-top:18px;">
            <div class="ceu-all-tabs-nav" id="ceu-all-tabs-nav"></div>
            <div class="ceu-all-tabs-body" id="ceu-all-tabs-body"></div>
        </div>
    </div>

    <style>
        .ceu-all-req-wrap { max-width: 900px; margin: 0 auto 30px; }
        .ceu-all-req-selector { margin-bottom: 16px; }
        .ceu-all-req-label { display: block; font-size: 0.95em; font-weight: 600; color: #333; margin-bottom: 8px; }
        .ceu-all-tabs-nav { display: flex; flex-wrap: wrap; background: #244271; border-radius: 8px 8px 0 0; overflow: hidden; }
        .ceu-all-tab-btn { flex: 1; min-width: 0; padding: 12px 10px; background: none; border: none; border-right: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.75); font-size: 0.8em; font-weight: 600; cursor: pointer; text-align: center; transition: background 0.15s, color 0.15s; line-height: 1.3; }
        .ceu-all-tab-btn:last-child { border-right: none; }
        .ceu-all-tab-btn:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .ceu-all-tab-btn.active { background: #fff; color: #244271; border-bottom: 3px solid #48B4E2; }
        .ceu-all-tabs-body { background: #fff; border: 1px solid #dde3ec; border-top: none; border-radius: 0 0 8px 8px; padding: 24px; }
        .ceu-all-tab-panel { display: none; }
        .ceu-all-tab-panel.active { display: block; }
        .ceu-all-stats { display: flex; gap: 0; border: 1px solid #eaeff6; border-radius: 6px; overflow: hidden; margin-bottom: 18px; background: #f9fbfd; }
        .ceu-all-stat { flex: 1; text-align: center; padding: 14px 10px; border-right: 1px solid #eaeff6; }
        .ceu-all-stat:last-child { border-right: none; }
        .ceu-all-stat-value { display: block; font-size: 1.7em; font-weight: 800; color: #244271; line-height: 1; margin-bottom: 3px; }
        .ceu-all-stat-label { display: block; font-size: 0.65em; color: #888; text-transform: uppercase; letter-spacing: 0.07em; }
        .ceu-all-section-title { font-size: 0.7em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: #244271; margin: 16px 0 6px; }
        .ceu-all-list { margin: 0 0 12px; padding-left: 18px; }
        .ceu-all-list li { font-size: 0.85em; color: #444; line-height: 1.65; margin-bottom: 3px; }
        .ceu-all-text { font-size: 0.85em; color: #555; margin: 0 0 12px; line-height: 1.6; }
        .ceu-all-board-link { font-size: 0.85em; color: #244271; text-decoration: none; border-bottom: 1px solid #64afd5; }
        .ceu-all-board-link:hover { color: #48B4E2; }
        .ceu-all-note { font-size: 0.8em; color: #666; background: #f5f8ff; border: 1px solid #dde3ec; border-radius: 5px; padding: 8px 12px; margin-top: 12px; }
        .ceu-all-no-data { font-size: 0.88em; color: #888; font-style: italic; }
        @media (max-width: 600px) {
            .ceu-all-tab-btn { flex: 0 0 50%; border-bottom: 1px solid rgba(255,255,255,0.15); }
            .ceu-all-stats { flex-wrap: wrap; }
            .ceu-all-stat { flex: 0 0 50%; }
        }
    </style>

    <script>
        (function () {
            var data      = <?php echo $json_encoded; ?>;
            var profNames = <?php echo $prof_names; ?>;

            var stateSelect = document.getElementById('ceu-all-state-select');
            var box         = document.getElementById('ceu-all-req-box');
            var tabsNav     = document.getElementById('ceu-all-tabs-nav');
            var tabsBody    = document.getElementById('ceu-all-tabs-body');

            function esc(str) {
                var d = document.createElement('div');
                d.appendChild(document.createTextNode(String(str)));
                return d.innerHTML;
            }

            function renderProfession(state, profName) {
                var req = (data[profName] || {})[state];
                if (!req) return '<p class="ceu-all-no-data">No data available for this state.</p>';

                var html  = '';
                var stats = [];
                if (req.hours_required != null)      stats.push({ v: req.hours_required,       l: 'CE Hours' });
                if (req.renewal_period_years != null) stats.push({ v: req.renewal_period_years, l: 'Year Renewal' });
                if (req.renewal_cycle)                stats.push({ v: req.renewal_cycle,         l: 'Cycle' });
                if (stats.length) {
                    html += '<div class="ceu-all-stats">' +
                        stats.map(function (s) {
                            return '<div class="ceu-all-stat">' +
                                '<span class="ceu-all-stat-value">' + esc(s.v) + '</span>' +
                                '<span class="ceu-all-stat-label">' + esc(s.l) + '</span>' +
                                '</div>';
                        }).join('') + '</div>';
                }
                if (req.specific_requirements && req.specific_requirements.length) {
                    html += '<p class="ceu-all-section-title">Specific Requirements</p>' +
                        '<ul class="ceu-all-list">' +
                        req.specific_requirements.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') +
                        '</ul>';
                }
                if (req.online_limit) {
                    html += '<p class="ceu-all-section-title">Online Course Limit</p>' +
                        '<p class="ceu-all-text">' + esc(req.online_limit) + '</p>';
                }
                if (req.board) {
                    html += '<p class="ceu-all-section-title">Licensing Board</p>' +
                        (req.board_url
                            ? '<a href="' + esc(req.board_url) + '" target="_blank" rel="noopener noreferrer" class="ceu-all-board-link">' + esc(req.board) + '</a>'
                            : '<p class="ceu-all-text">' + esc(req.board) + '</p>');
                }
                if (req.notes) {
                    html += '<div class="ceu-all-note">&#x2139;&#xFE0F; ' + esc(req.notes) + '</div>';
                }
                return html;
            }

            function renderState(state) {
                var navHtml  = '';
                var bodyHtml = '';
                profNames.forEach(function (prof, i) {
                    var id = 'ceu-all-panel-' + i;
                    navHtml  += '<button class="ceu-all-tab-btn' + (i === 0 ? ' active' : '') +
                        '" data-panel="' + id + '">' + esc(prof) + '</button>';
                    bodyHtml += '<div class="ceu-all-tab-panel' + (i === 0 ? ' active' : '') +
                        '" id="' + id + '">' + renderProfession(state, prof) + '</div>';
                });
                tabsNav.innerHTML = navHtml;
                tabsBody.innerHTML = bodyHtml;
                box.style.display = 'block';

                tabsNav.querySelectorAll('.ceu-all-tab-btn').forEach(function (btn) {
                    btn.addEventListener('click', function () {
                        tabsNav.querySelectorAll('.ceu-all-tab-btn').forEach(function (b) { b.classList.remove('active'); });
                        tabsBody.querySelectorAll('.ceu-all-tab-panel').forEach(function (p) { p.classList.remove('active'); });
                        this.classList.add('active');
                        document.getElementById(this.dataset.panel).classList.add('active');
                    });
                });
            }

            if (stateSelect) {
                stateSelect.addEventListener('change', function () {
                    if (this.value) renderState(this.value);
                    else box.style.display = 'none';
                });
            }
        })();
    </script>
    <?php
    return ob_get_clean();
});

// ─── Auto-inject [ceu_all_requirements] on /accreditations/ ──────────────────
// Strategy: echo the widget directly into wp_footer so PHP/scripts run natively,
// then use JS to move the already-rendered element up into the Elementor content
// area. Moving a DOM node preserves all event listeners — no script re-execution
// needed. Falls back to displaying it at the top of the footer if no container
// is found (still visible, just not inside the Elementor layout).

add_action('wp_footer', function () {
    if (!ceu_is_accreditations_page()) return;
    $html = do_shortcode('[ceu_all_requirements]');
    if (!$html) return;
    ?>
    <div id="ceu-all-req-widget" style="padding:20px 0 0 0;">
        <?= $html ?>
    </div>
    <script>
        (function () {
            var widget = document.getElementById('ceu-all-req-widget');
            if (!widget) return;

            function reposition() {
                // Insert after the section containing the anchor paragraph.
                var anchor = null;
                document.querySelectorAll('p').forEach(function (el) {
                    if (!anchor && el.textContent.indexOf('Below is a list of accreditations') !== -1) {
                        anchor = el;
                    }
                });

                if (anchor) {
                    var section = anchor.closest('.elementor-section')
                        || anchor.closest('.elementor-widget')
                        || anchor.parentNode;
                    section.parentNode.insertBefore(widget, section.nextSibling);
                    return;
                }

                // Fallback: append to Elementor content area.
                var target = document.querySelector('.elementor-section-wrap')
                    || document.querySelector('.elementor')
                    || document.querySelector('main');
                if (target) target.appendChild(widget);
            }

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', reposition);
            } else {
                reposition();
            }
        })();
    </script>
    <?php
}, 1); // Priority 1 — output before theme footer so the widget is in the DOM early
