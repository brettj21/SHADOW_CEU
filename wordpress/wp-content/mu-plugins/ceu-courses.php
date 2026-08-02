<?php
/**
 * Plugin Name: CEU Courses
 * Description: Pulls courses from CEU_DB and renders them. Safe from WordPress updates (MU Plugin).
 *
 * Usage:
 *   - Shortcode on any page: [ceu_courses profession="social-workers"]
 *   - Available slugs: nursing, social-workers, mft-lcsw, psychologist, insurance, counselor-addiction
 *
 * To run the one-time migration (imports courses as Tutor LMS posts):
 *   1. Set CEU_MIGRATE_KEY below to a secret string
 *   2. Visit any WP URL with ?ceu_migrate=1&ceu_key=YOUR_SECRET while logged in as admin
 *   Re-running is safe — already-imported courses are skipped.
 */

// ─── Config ───────────────────────────────────────────────────────────────────

define('CEU_DB_HOST', getenv('DOCKER_ENV') ? 'mysql' : 'localhost:3306');
define('CEU_DB_NAME', 'CEU_DB');
define('CEU_DB_USER', getenv('DOCKER_ENV') ? 'db31242_CEU2' : 'ceunits');
define('CEU_DB_PASS', getenv('DOCKER_ENV') ? 'Tth3c0l0ny2055' : 'KvGidZtwpt6z4@~7');

define('CEU_MIGRATE_KEY', 'change_me_before_running'); // change this before running migration

// Profession slug → CEU_DB ID (matches CEU_PROFESSIONS table)
define('CEU_PROFESSIONS', serialize([
    'livingworks'         => 7,
    'social-workers'      => 2,
    'social-worker'       => 2,
    'mft-lcsw'            => 3,
    'psychologist'        => 4,
    'counselor-addiction' => 6,
]));

// Professions whose listing page should open pre-filtered to a specific category.
// The value is matched case-insensitively against the topic/category label, so it
// keeps working even if the underlying topic ID changes.
define('CEU_DEFAULT_CATEGORY', serialize([
    'livingworks' => 'LivingWorks',
]));

// ─── DB Connection ────────────────────────────────────────────────────────────

function ceu_db_connect() {
    static $ceu_db = null;
    if ($ceu_db === null) {
        $ceu_db = new mysqli(CEU_DB_HOST, CEU_DB_USER, CEU_DB_PASS, CEU_DB_NAME);
        if ($ceu_db->connect_error) {
            error_log('CEU_DB connect error: ' . $ceu_db->connect_error);
            return null;
        }
    }
    return $ceu_db;
}

// ─── Get Courses from CEU_DB ──────────────────────────────────────────────────

function ceu_get_courses($profession_slug) {
    $professions = unserialize(CEU_PROFESSIONS);
    if (!isset($professions[$profession_slug])) return [];

    $profession_id = (int) $professions[$profession_slug];
    $db = ceu_db_connect();
    if (!$db) return [];

    $sql = "SELECT
                p.TITLE_ALT   AS title,
                p.CREDIT      AS credits,
                p.COST        AS cost,
                p.TRAINING_ID AS training_id,
                p.EXPIRED     AS expired,
                t.DESCRIPTION AS description,
                t.OBJECTIVES  AS objectives,
                a.AUTHOR      AS author,
                a.AUTHOR_LICENSE AS author_license
            FROM CEU_TRAININGS_BY_PROFESSION p
            JOIN CEU_TRAININGS t ON p.TRAINING_ID = t.TRAINING_ID
            LEFT JOIN CEU_AUTHORS a ON t.AUTHOR_ID = a.ID
            WHERE p.PROFESSION_ID = ?
              AND (p.EXPIRED IS NULL OR p.EXPIRED = 0)
            ORDER BY p.TITLE_ALT ASC";

    $stmt = $db->prepare($sql);
    $stmt->bind_param('i', $profession_id);
    $stmt->execute();
    $result = $stmt->get_result();

    $courses = [];
    while ($row = $result->fetch_assoc()) {
        $courses[] = $row;
    }
    $stmt->close();
    return $courses;
}

// ─── Get Topics for a profession ─────────────────────────────────────────────

function ceu_get_topics($profession_slug) {
    $professions = unserialize(CEU_PROFESSIONS);
    if (!isset($professions[$profession_slug])) return [];

    $profession_id = (int) $professions[$profession_slug];
    $db = ceu_db_connect();
    if (!$db) return [];

    $sql = "SELECT tt.ID, tt.TOPIC, COUNT(DISTINCT g.TRAINING_ID) AS course_count
            FROM CEU_TRAINING_TOPICS tt
            JOIN CEU_TRAININGS_GROUPINGS g ON tt.ID = g.GROUPING_ID
            JOIN CEU_TRAININGS_BY_PROFESSION p ON g.TRAINING_ID = p.TRAINING_ID
            WHERE p.PROFESSION_ID = ?
              AND (p.EXPIRED IS NULL OR p.EXPIRED = 0)
            GROUP BY tt.ID, tt.TOPIC
            ORDER BY tt.TOPIC ASC";

    $stmt = $db->prepare($sql);
    $stmt->bind_param('i', $profession_id);
    $stmt->execute();
    $result = $stmt->get_result();

    $topics = [];
    while ($row = $result->fetch_assoc()) {
        $topics[] = $row;
    }
    $stmt->close();
    return $topics;
}

// ─── Shortcode: [ceu_courses profession="social-workers"] ────────────────────

add_shortcode('ceu_courses', function($atts) {
    $atts    = shortcode_atts(['profession' => 'social-workers'], $atts);
    $slug    = sanitize_key($atts['profession']);
    $courses = ceu_get_courses($slug);
    $topics  = ceu_get_topics($slug);

    if (empty($courses)) {
        return '<p>No courses found.</p>';
    }

    $img_root = 'https://shadow.ceunits.com/wordpress/wp-content/uploads/course/';

    $topic_map = [];
    foreach ($topics as $t) {
        $topic_map[$t['ID']] = $t['TOPIC'];
    }

    $db = ceu_db_connect();
    foreach ($courses as &$c) {
        $stmt = $db->prepare("SELECT GROUPING_ID FROM CEU_TRAININGS_GROUPINGS WHERE TRAINING_ID = ?");
        $stmt->bind_param('i', $c['training_id']);
        $stmt->execute();
        $res = $stmt->get_result();
        $ids = [];
        while ($row = $res->fetch_assoc()) $ids[] = $row['GROUPING_ID'];
        $c['topic_ids'] = implode(',', $ids);
        $stmt->close();
    }
    unset($c);

    // Pre-selected category for this profession's listing page (e.g. LivingWorks).
    // Resolve the configured label to a topic ID present in this profession's topics.
    $default_topic_id = '';
    $default_map      = unserialize(CEU_DEFAULT_CATEGORY);
    if (isset($default_map[$slug])) {
        $needle = strtolower($default_map[$slug]);
        foreach ($topics as $t) {
            if (strpos(strtolower($t['TOPIC']), $needle) !== false) {
                $default_topic_id = (string) $t['ID'];
                break;
            }
        }
    }

    // How many courses are visible under the initial filter (for the count label).
    $initial_visible = 0;
    foreach ($courses as $c) {
        if ($default_topic_id === '' ||
            in_array($default_topic_id, explode(',', $c['topic_ids']), true)) {
            $initial_visible++;
        }
    }

    // Defined once outside the loop; no <div> in allowlist so stray </div> can't break card structure
    $safe_tags = ['p' => [], 'br' => [], 'ul' => [], 'ol' => [], 'li' => [],
        'strong' => [], 'b' => [], 'em' => [], 'i' => [],
        'a' => ['href' => [], 'target' => []], 'span' => ['style' => []]];

    ob_start();
    ?>
    <div class="ceu-section">

        <div class="ceu-toolbar">
            <span class="ceu-count-label"><?php echo $initial_visible; ?> Course<?php echo $initial_visible !== 1 ? 's' : ''; ?></span>
            <div class="ceu-toolbar-right">
                <?php if (!empty($topics)): ?>
                    <div class="ceu-filter-wrap">
                        <label for="ceu-topic-select">Filter by Category:</label>
                        <select id="ceu-topic-select" class="ceu-topic-select">
                            <option value="">All Categories</option>
                            <?php foreach ($topics as $t): ?>
                                <option value="<?php echo esc_attr($t['ID']); ?>" <?php selected($default_topic_id, (string) $t['ID']); ?>>
                                    <?php echo esc_html($t['TOPIC']); ?> (<?php echo (int)$t['course_count']; ?>)
                                </option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                <?php endif; ?>
                <div class="ceu-view-toggle">
                    <button id="ceu-btn-grid" class="ceu-view-btn active" title="Grid view" aria-pressed="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><rect x="0" y="0" width="7" height="7"/><rect x="9" y="0" width="7" height="7"/><rect x="0" y="9" width="7" height="7"/><rect x="9" y="9" width="7" height="7"/></svg>
                    </button>
                    <button id="ceu-btn-list" class="ceu-view-btn" title="List view (no images)" aria-pressed="false">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><rect x="0" y="1" width="16" height="2"/><rect x="0" y="7" width="16" height="2"/><rect x="0" y="13" width="16" height="2"/></svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="ceu-grid">
            <?php foreach ($courses as $i => $c): ?>
                <?php $card_hidden = ($default_topic_id !== '' &&
                    !in_array($default_topic_id, explode(',', $c['topic_ids']), true)); ?>
                <div class="ceu-card<?php echo $card_hidden ? ' ceu-hidden' : ''; ?>" data-topics="<?php echo esc_attr($c['topic_ids']); ?>">

                    <div class="ceu-card-image">
                        <a href="<?php echo $c['training_id']; ?>/<?php echo sanitize_title($c['title']); ?>/"><img src="<?php echo $img_root . $c['training_id']; ?>.jpg" alt="<?php echo esc_attr($c['title']); ?>" loading="lazy" /></a>
                        <div class="ceu-card-badge">
                            <?php if ($c['cost'] > 0): ?>
                                $<?php echo number_format((float)$c['cost'], 2); ?>
                            <?php else: ?>
                                FREE
                            <?php endif; ?>
                        </div>
                    </div>

                    <div class="ceu-card-body">
                        <h3 class="ceu-card-title"><?php echo stripcslashes(esc_html($c['title'])); ?></h3>

                        <?php if ($c['author']): ?>
                            <!--<p class="ceu-card-author">By: <?php echo esc_html($c['author']);
                                if ($c['author_license']) echo ', ' . esc_html($c['author_license']); ?></p> -->
                        <?php endif; ?>

                        <div class="ceu-card-meta">
                            <span class="ceu-card-credits"><?php echo esc_html($c['credits']); ?> Credits</span>
                        </div>

                        <div class="ceu-card-links">
                            <?php if ($c['description']): ?>
                                <a href="#" class="ceu-toggle-link" data-target="ceu-desc-<?php echo $i; ?>">Description</a>
                            <?php endif; ?>
                            <?php if ($c['objectives']): ?>
                                <a href="#" class="ceu-toggle-link" data-target="ceu-obj-<?php echo $i; ?>">Objectives</a>
                            <?php endif; ?>
                        </div>

                        <?php if ($c['description']): ?>
                            <div id="ceu-desc-<?php echo $i; ?>" class="ceu-course-detail" style="display:none;">
                                <?php echo force_balance_tags(wp_kses($c['description'], $safe_tags)); ?>
                            </div>
                        <?php endif; ?>

                        <?php if ($c['objectives']): ?>
                            <div id="ceu-obj-<?php echo $i; ?>" class="ceu-course-detail" style="display:none;">
                                <?php echo force_balance_tags(wp_kses($c['objectives'], $safe_tags)); ?>
                            </div>
                        <?php endif; ?>

                        <a href="<?php echo $c['training_id']; ?>/<?php echo sanitize_title($c['title']); ?>/" class="ceu-btn-read">Read Training</a>
                    </div>

                </div>
            <?php endforeach; ?>
        </div>

        <p class="ceu-no-results" style="display:none;">No courses found for this category.</p>

    </div>

    <style>
        /* ── Toolbar ── */
        .ceu-toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; }
        .ceu-count-label { font-size: 0.9em; color: #666; }
        .ceu-toolbar-right { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .ceu-filter-wrap { display: flex; align-items: center; gap: 8px; }
        .ceu-filter-wrap label { font-size: 0.88em; color: #444; white-space: nowrap; }
        .ceu-topic-select { font-size: 0.88em; padding: 7px 12px; border: 1px solid #c8d0dc; border-radius: 4px; color: #333; background: #fff; cursor: pointer; min-width: 220px; }
        .ceu-topic-select:focus { outline: none; border-color: #244271; box-shadow: 0 0 0 2px rgba(36,66,113,0.15); }

        /* ── View toggle buttons ── */
        .ceu-view-toggle { display: flex; gap: 4px; }
        .ceu-view-btn { display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; padding: 0; border: 1px solid #c8d0dc; border-radius: 4px; background: #fff; color: #777; cursor: pointer; transition: background 0.15s, color 0.15s, border-color 0.15s; }
        .ceu-view-btn:hover { background: #f0f4f9; color: #244271; border-color: #244271; }
        .ceu-view-btn.active { background: #244271; color: #fff; border-color: #244271; }

        /* ── List view ── */
        .ceu-section.ceu-list-mode .ceu-grid { grid-template-columns: 1fr; gap: 10px; }
        .ceu-section.ceu-list-mode .ceu-card { flex-direction: row; align-items: stretch; }
        .ceu-section.ceu-list-mode .ceu-card-image { display: none; }
        .ceu-section.ceu-list-mode .ceu-card-body { padding: 12px 16px; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 8px 16px; }
        .ceu-section.ceu-list-mode .ceu-card-title { flex: 1 1 300px; font-size: 0.88em; margin: 0; }
        .ceu-section.ceu-list-mode .ceu-card-author { margin: 0; flex: 0 0 auto; }
        .ceu-section.ceu-list-mode .ceu-card-meta { margin: 0; }
        .ceu-section.ceu-list-mode .ceu-card-links { margin: 0; }
        .ceu-section.ceu-list-mode .ceu-course-detail { flex: 0 0 100%; margin: 4px 0 0; }
        .ceu-section.ceu-list-mode .ceu-btn-read { margin-top: 0; flex-shrink: 0; }

        /* ── Grid ── */
        .ceu-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .ceu-card { background: #fff; border: 1px solid #e4e4e4; border-radius: 6px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 2px 6px rgba(0,0,0,0.06); transition: box-shadow 0.2s, transform 0.2s; }
        .ceu-card:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.12); transform: translateY(-2px); }
        .ceu-card.ceu-hidden { display: none; }

        /* image */
        .ceu-card-image { position: relative; overflow: hidden !important; height: 160px !important; max-height: 160px !important; flex: 0 0 160px; background: #e8edf3; }
        .ceu-card-image img { display: block !important; width: 100% !important; height: 160px !important; max-height: 160px !important; object-fit: cover !important; }
        .ceu-card-badge { position: absolute; top: 10px; right: 10px; background: #48B4E2; color: #fff; font-size: 14px; font-weight: 700; padding: 3px 9px; border-radius: 3px; }

        /* body */
        .ceu-card-body { padding: 14px; display: flex; flex-direction: column; flex: 1; }
        .ceu-card-title { font-size: 0.9em; font-weight: 700; color: #222; margin: 0 0 5px; line-height: 1.4; }
        .ceu-card-author { font-size: 0.78em; color: #777; margin: 0 0 8px; }
        .ceu-card-meta { margin-bottom: 10px; }
        .ceu-card-credits { font-size: 0.78em; background: #f0f4f9; color: #244271; font-weight: 600; padding: 2px 7px; border-radius: 3px; }
        .ceu-card-links { margin-bottom: 8px; }
        .ceu-toggle-link { font-size: 0.78em; color: #244271; text-decoration: none; display: inline-block; margin-right: 10px; border-bottom: 1px dashed #244271; }
        .ceu-toggle-link:hover { color: #64afd5; border-bottom-color: #64afd5; }
        .ceu-course-detail { margin: 6px 0; padding: 10px 12px; background: #f0f4f9; border-left: 3px solid #244271; font-size: 0.82em; line-height: 1.6; color: #444; }
        .ceu-btn-read { display: inline-block; margin-top: auto; padding: 7px 14px; background: #244271; color: #fff; font-size: 0.78em; font-weight: 600; text-decoration: none; border-radius: 3px; transition: background 0.15s; align-self: flex-start; }
        .ceu-btn-read:hover { background: #64afd5; color: #fff; }
        .ceu-no-results { text-align: center; color: #666; padding: 30px 0; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
            .ceu-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
            .ceu-section { padding: 0 14px; }
            .ceu-grid { grid-template-columns: 1fr; }
            .ceu-toolbar { flex-direction: column; align-items: flex-start; }
            .ceu-toolbar-right { width: 100%; }
            .ceu-topic-select { width: 100%; min-width: unset; }
        }
    </style>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var section  = document.querySelector('.ceu-section');
            var btnGrid  = document.getElementById('ceu-btn-grid');
            var btnList  = document.getElementById('ceu-btn-list');

            if (btnGrid && btnList && section) {
                btnGrid.addEventListener('click', function() {
                    section.classList.remove('ceu-list-mode');
                    btnGrid.classList.add('active');    btnGrid.setAttribute('aria-pressed', 'true');
                    btnList.classList.remove('active'); btnList.setAttribute('aria-pressed', 'false');
                });
                btnList.addEventListener('click', function() {
                    section.classList.add('ceu-list-mode');
                    btnList.classList.add('active');    btnList.setAttribute('aria-pressed', 'true');
                    btnGrid.classList.remove('active'); btnGrid.setAttribute('aria-pressed', 'false');
                });
            }

            document.querySelectorAll('.ceu-toggle-link').forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    var target = document.getElementById(this.dataset.target);
                    if (target) target.style.display = target.style.display === 'none' ? 'block' : 'none';
                });
            });

            var select = document.getElementById('ceu-topic-select');
            if (!select) return;
            var countLabel = document.querySelector('.ceu-count-label');
            var noResults  = document.querySelector('.ceu-no-results');

            select.addEventListener('change', function() {
                var val     = this.value;
                var cards   = document.querySelectorAll('.ceu-card');
                var visible = 0;

                cards.forEach(function(card) {
                    var topics = card.dataset.topics ? card.dataset.topics.split(',') : [];
                    var show   = !val || topics.indexOf(val) !== -1;
                    card.classList.toggle('ceu-hidden', !show);
                    if (show) visible++;
                });

                if (countLabel) countLabel.textContent = visible + ' Course' + (visible !== 1 ? 's' : '');
                if (noResults)  noResults.style.display = visible === 0 ? 'block' : 'none';
            });
        });
    </script>
    <?php
    return ob_get_clean();
});

// ─── FAQ Tabs: JavaScript DOM transform ──────────────────────────────────────
// Elementor renders each FAQ block as separate toggle widgets. We let Elementor
// render them normally, then replace the FAQ column with a tabbed UI via JS.
// The 4 FAQ toggles live inside column elementor-element-62cf551.

add_action('wp_footer', function() {
    $uri             = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    $profession_slug = sanitize_key(basename($uri));
    $professions     = unserialize(CEU_PROFESSIONS);
    if (!isset($professions[$profession_slug])) return;
    ?>
    <style>
        .ceu-tabs-wrap { border: 1px solid #dde3ec; border-radius: 6px; overflow: hidden; margin: 0; }
        .ceu-tabs-nav  { display: flex; flex-wrap: wrap; background: #244271; }
        .ceu-tab-btn   { flex: 1; min-width: 0; padding: 13px 16px; background: none; border: none; border-right: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.75); font-size: 0.82em; font-weight: 600; cursor: pointer; text-align: center; transition: background 0.15s, color 0.15s; line-height: 1.3; }
        .ceu-tab-btn:last-child   { border-right: none; }
        .ceu-tab-btn:hover        { background: rgba(255,255,255,0.1); color: #fff; }
        .ceu-tab-btn.active       { background: #fff; color: #244271; border-bottom: 3px solid #48B4E2; }
        .ceu-tabs-body            { background: #fff; }
        .ceu-tab-panel            { display: none; padding: 24px; font-size: 0.9em; line-height: 1.7; color: #333; }
        .ceu-tab-panel.active     { display: block; }
        .ceu-tab-panel p          { margin-bottom: 12px; }
        .ceu-tab-panel ul         { padding-left: 20px; margin-bottom: 12px; }
        .ceu-tab-panel li         { margin-bottom: 6px; }
        @media (max-width: 600px) {
            .ceu-tab-btn { flex: 0 0 50%; border-bottom: 1px solid rgba(255,255,255,0.15); }
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var col = document.querySelector('.elementor-element-62cf551');
            if (!col) return;

            var toggleWidgets = col.querySelectorAll('.elementor-widget-toggle');
            if (toggleWidgets.length === 0) return;

            var tabs = [];
            toggleWidgets.forEach(function(widget) {
                var titleEl   = widget.querySelector('.elementor-toggle-title');
                var contentEl = widget.querySelector('.elementor-tab-content');
                if (titleEl && contentEl) {
                    tabs.push({ title: titleEl.textContent.trim(), content: contentEl.innerHTML });
                }
            });

            if (tabs.length === 0) return;

            var uid  = 'ceu-faq-tabs';
            var nav  = tabs.map(function(t, i) {
                return '<button class="ceu-tab-btn' + (i === 0 ? ' active' : '') +
                    '" data-tab="' + uid + '-' + i + '">' + t.title + '</button>';
            }).join('');
            var body = tabs.map(function(t, i) {
                return '<div class="ceu-tab-panel' + (i === 0 ? ' active' : '') +
                    '" id="' + uid + '-' + i + '">' + t.content + '</div>';
            }).join('');

            var wrapper = document.createElement('div');
            wrapper.className = 'ceu-tabs-wrap';
            wrapper.id        = uid;
            wrapper.innerHTML = '<div class="ceu-tabs-nav">' + nav + '</div>' +
                '<div class="ceu-tabs-body">' + body + '</div>';

            col.innerHTML = '';
            col.appendChild(wrapper);

            wrapper.querySelectorAll('.ceu-tab-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    wrapper.querySelectorAll('.ceu-tab-btn').forEach(function(b)   { b.classList.remove('active'); });
                    wrapper.querySelectorAll('.ceu-tab-panel').forEach(function(p) { p.classList.remove('active'); });
                    this.classList.add('active');
                    document.getElementById(this.dataset.tab).classList.add('active');
                });
            });
        });
    </script>
    <?php
});

// ─── Elementor gva-posts interceptor ─────────────────────────────────────────
// Elementor wraps all widget rendering in its own ob_start/ob_get_clean before
// applying render_content, so the filter receives the full widget output
// regardless of how the widget renders internally.

add_filter('elementor/widget/render_content', function($content, $widget) {
    if ($widget->get_name() !== 'gva-posts') return $content;

    $post_id         = get_queried_object_id() ?: get_the_ID();
    $profession_slug = get_post_field('post_name', $post_id);
    $professions     = unserialize(CEU_PROFESSIONS);

    if (!isset($professions[$profession_slug])) return $content;

    return do_shortcode('[ceu_courses profession="' . esc_attr($profession_slug) . '"]');
}, 10, 2);

// ─── One-time Migration ───────────────────────────────────────────────────────
// Imports all CEU_DB courses as Tutor LMS course posts in WordPress.
// Visit: http://localhost:8080/wordpress/?ceu_migrate=1&ceu_key=YOUR_SECRET
// Must be logged in as admin. Safe to re-run — skips already-imported courses.

add_action('init', function() {
    if (!isset($_GET['ceu_migrate'], $_GET['ceu_key'])) return;
    if ($_GET['ceu_key'] !== CEU_MIGRATE_KEY)           wp_die('Invalid key.');
    if (!current_user_can('manage_options'))             wp_die('Admins only.');

    $profession_labels = [
        'nursing'             => 'Nursing',
        'social-workers'      => 'Social Workers',
        'mft-lcsw'            => 'MFT / LCSW',
        'psychologist'        => 'Psychologist',
        'insurance'           => 'Insurance',
        'counselor-addiction' => 'Counselor / Addiction Professional',
    ];

    $professions = unserialize(CEU_PROFESSIONS);
    $db          = ceu_db_connect();
    if (!$db) wp_die('Cannot connect to CEU_DB.');

    $imported = 0;
    $skipped  = 0;

    foreach ($professions as $slug => $profession_id) {

        if (!term_exists($slug, 'course-category')) {
            wp_insert_term($profession_labels[$slug] ?? ucfirst($slug), 'course-category', ['slug' => $slug]);
        }
        $term = get_term_by('slug', $slug, 'course-category');

        $courses = ceu_get_courses($slug);

        foreach ($courses as $c) {
            $existing = get_posts([
                'post_type'   => 'courses',
                'meta_key'    => '_ceu_training_id',
                'meta_value'  => $c['training_id'],
                'numberposts' => 1,
                'fields'      => 'ids',
            ]);
            if ($existing) {
                $skipped++;
                continue;
            }

            $post_id = wp_insert_post([
                'post_title'   => $c['title'],
                'post_content' => $c['description'] ?? '',
                'post_status'  => 'publish',
                'post_type'    => 'courses',
                'post_author'  => 1,
            ]);

            if (is_wp_error($post_id)) continue;

            update_post_meta($post_id, '_ceu_training_id',    $c['training_id']);
            update_post_meta($post_id, '_ceu_credits',        $c['credits']);
            update_post_meta($post_id, '_ceu_cost',           $c['cost']);
            update_post_meta($post_id, '_ceu_objectives',     $c['objectives']);
            update_post_meta($post_id, '_ceu_author',         $c['author']);
            update_post_meta($post_id, '_ceu_author_license', $c['author_license']);
            update_post_meta($post_id, '_tutor_course_price', $c['cost']);

            if ($term) {
                wp_set_post_terms($post_id, [$term->term_id], 'course-category');
            }

            $imported++;
        }
    }

    wp_die("CEU Migration complete.<br>Imported: <strong>$imported</strong> | Skipped (already exist): <strong>$skipped</strong>");
});
