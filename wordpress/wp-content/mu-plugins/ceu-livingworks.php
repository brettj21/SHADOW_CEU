<?php
/**
 * Plugin Name: CEU LivingWorks
 * Description: /livingworks/ — a partner landing page carrying only the
 *              LivingWorks trainings, replacing the legacy CEU/livingworks/.
 *
 * WHY IT IS NOT JUST ANOTHER PROFESSION PAGE
 * ──────────────────────────────────────────
 * LivingWorks publishes this URL themselves, so people arrive here from outside
 * the site, often knowing nothing about CEUnits. A profession page like
 * /mft-lcsw/ answers a different question: it lists a hundred-odd courses for
 * someone already shopping. This page answers "I attended a LivingWorks workshop,
 * how do I get my credits" and shows only the four LivingWorks trainings.
 *
 * The legacy page (CEU/livingworks/index.php) was a pure splash: the CEUnits and
 * LivingWorks headline, a paragraph of explanation, and a START HERE button that
 * pushed you to /livingworks/register/ or /livingworks/ce/ before you could see
 * anything. The courses are put on the page itself here, since that is what a
 * visitor came to find; the sign-in prompt sits alongside them rather than in
 * front of them.
 *
 * SELECTING THE TRAININGS
 * ───────────────────────
 * From CEU_TRAININGS_GROUPINGS, group 32 — the "Live LivingWorks" category. That
 * is the maintained list: adding a future ASIST v13 to that group puts it on this
 * page with no code change, which is where the decision belongs.
 *
 * Joined to CEU_TRAININGS_BY_PROFESSION for the LivingWorks profession, so the
 * prices and credit values are the LivingWorks ones, and retired titles drop out
 * through the same EXPIRED check the rest of the site uses — Suicide to Hope is
 * in the group but expired in every profession, and should not be offered.
 */

if (!defined('CEU_LIVINGWORKS_SLUG')) {
    define('CEU_LIVINGWORKS_SLUG', 'livingworks');
}

// CEU_TRAINING_TOPICS row for "Live LivingWorks" — the category that decides
// which trainings this page carries.
if (!defined('CEU_LIVINGWORKS_GROUPING_ID')) {
    define('CEU_LIVINGWORKS_GROUPING_ID', 32);
}

// CEU_PROFESSIONS in ceu-courses.php already maps this slug to profession 7, so
// training URLs built as /livingworks/{id}/{title}/ resolve through the same
// rewrite every other course link uses, and price at the LivingWorks rate.
if (!defined('CEU_LIVINGWORKS_PROFESSION_ID')) {
    define('CEU_LIVINGWORKS_PROFESSION_ID', 7);
}

// ─── Which page is this? ──────────────────────────────────────────────────────

function ceu_is_livingworks_page(): bool {
    $path = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
    return $path === CEU_LIVINGWORKS_SLUG;
}

// ─── The courses ──────────────────────────────────────────────────────────────

/**
 * The LivingWorks trainings, priced for the LivingWorks profession.
 *
 * DISTINCT because a training listed twice under the same grouping would
 * otherwise render twice; the category is edited by hand and nothing in the
 * schema prevents a duplicate row.
 *
 * CEU_TRAININGS is deliberately not joined. Nothing on this page needs the
 * description or objectives, and an inner join there would silently drop any
 * training whose row is missing from that table.
 */
function ceu_livingworks_courses(): array {
    if (!function_exists('ceu_db_connect')) return [];
    $db = ceu_db_connect();
    if (!$db) return [];

    $sql = "SELECT DISTINCT
                   p.TRAINING_ID AS training_id,
                   p.TITLE_ALT   AS title,
                   p.CREDIT      AS credits,
                   p.COST        AS cost
            FROM CEU_TRAININGS_GROUPINGS g
            JOIN CEU_TRAININGS_BY_PROFESSION p
              ON p.TRAINING_ID = g.TRAINING_ID
             AND p.PROFESSION_ID = ?
            WHERE g.GROUPING_ID = ?
              AND (p.EXPIRED IS NULL OR p.EXPIRED = 0)
            ORDER BY p.TITLE_ALT ASC";

    $stmt = $db->prepare($sql);
    if (!$stmt) return [];
    $pid   = CEU_LIVINGWORKS_PROFESSION_ID;
    $group = CEU_LIVINGWORKS_GROUPING_ID;
    $stmt->bind_param('ii', $pid, $group);
    $stmt->execute();
    $rows = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();

    return $rows;
}

// ─── The page ─────────────────────────────────────────────────────────────────

function ceu_livingworks_page_html(): string {
    $courses   = ceu_livingworks_courses();
    $logged_in = function_exists('ceu_is_logged_in') && ceu_is_logged_in();

    // Same uploads path the course grid uses (ceu-courses.php), but built from
    // home_url() so it follows the domain instead of naming shadow outright.
    $img_root = home_url('/wordpress/wp-content/uploads/course/');

    $money = fn($n) => '$' . number_format((float) $n, 2);
    $fcred = fn($n) => rtrim(rtrim(number_format((float) $n, 2), '0'), '.');

    ob_start();
    ?>
    <div id="ceu-lw">

        <header class="ceu-lw-intro">
            <p class="ceu-lw-eyebrow">CEUnits &amp; LivingWorks</p>
            <h1 class="ceu-lw-title">Continuing education for your LivingWorks workshop</h1>
            <p class="ceu-lw-lede">
                Attended a LivingWorks workshop and looking to earn continuing
                education credits for your attendance? CEUnits and LivingWorks have
                collaborated to provide this service. Choose your workshop below to
                get started.
            </p>
        </header>

        <?php if (empty($courses)) : ?>
            <div class="ceu-lw-empty">
                <p>These trainings are not available just now. Please
                   <a href="<?= esc_url(home_url('/support/')) ?>">contact support</a>.</p>
            </div>
        <?php else : ?>

            <div class="ceu-lw-grid">
                <?php foreach ($courses as $c) :
                    $tid   = (int) $c['training_id'];
                    $title = (string) $c['title'];
                    $url   = home_url('/' . CEU_LIVINGWORKS_SLUG . '/' . $tid
                                      . '/' . sanitize_title($title) . '/');
                    ?>
                    <article class="ceu-lw-card">
                        <a class="ceu-lw-thumb" href="<?= esc_url($url) ?>">
                            <img src="<?= esc_url($img_root . $tid . '.jpg') ?>"
                                 alt="<?= esc_attr($title) ?>" loading="lazy">
                            <span class="ceu-lw-price"><?= esc_html($money($c['cost'])) ?></span>
                        </a>

                        <div class="ceu-lw-body">
                            <h2 class="ceu-lw-name">
                                <a href="<?= esc_url($url) ?>"><?= esc_html($title) ?></a>
                            </h2>
                            <p class="ceu-lw-credits">
                                <?= esc_html($fcred($c['credits'])) ?> CE credit
                                <?= (float) $c['credits'] === 1.0 ? 'hour' : 'hours' ?>
                            </p>
                            <a class="ceu-lw-btn" href="<?= esc_url($url) ?>">Read training</a>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>

            <aside class="ceu-lw-next">
                <?php if ($logged_in) : ?>
                    <p>
                        You're signed in — open a training above, take the test, and your
                        certificate is issued as soon as you pay.
                    </p>
                <?php else : ?>
                    <p>
                        You'll need a free CEUnits account to record your results and
                        collect your certificate. You only pay once you pass.
                    </p>
                    <div class="ceu-lw-actions">
                        <?php if (function_exists('ceu_signin_button')) : ?>
                            <?= ceu_signin_button('Sign in', 'ceu-lw-btn ceu-lw-btn-ghost') ?>
                        <?php endif; ?>
                        <a class="ceu-lw-btn" href="<?= esc_url(home_url('/register/')) ?>">
                            Create an account
                        </a>
                    </div>
                <?php endif; ?>
            </aside>

        <?php endif; ?>
    </div>
    <?php
    return ob_get_clean();
}

// ─── Mounting ─────────────────────────────────────────────────────────────────
// A real WordPress page at /livingworks/, created once if missing, so the URL
// LivingWorks publishes keeps working and the page can be edited like any other.
//
// The slug must NOT collide with the training-page rewrite in ceu-training-page.php
// (^([a-z0-9-]+)/([0-9]+)/([^/]+)/?$). It does not: that rule needs three
// segments, so /livingworks/ stays a page while /livingworks/215/asist/ still
// resolves to the training under profession 7.

// CREATED IN THE ADMIN ONLY, NEVER ON A FRONT-END REQUEST.
//
// This ran on init, so every visitor hit wp_insert_post(). That fires the whole
// save_post chain — Elementor, Tutor, WooCommerce and revslider all hook it — on
// a front-end request none of them expect, and anything that fatals in there
// takes down every page on the site rather than one admin screen. It is also
// simply wasteful: a write path executed on reads.
//
// admin_init instead. The front end never writes, and the template_redirect
// fallback below serves /livingworks/ whether or not the page row exists yet, so
// nothing depends on an administrator having visited wp-admin first.
add_action('admin_init', function () {
    if (!function_exists('get_page_by_path')) return;

    $known = (int) get_option('ceu_livingworks_page_created');
    if ($known) {
        $post = get_post($known);
        if ($post && $post->post_status !== 'trash') return;
        delete_option('ceu_livingworks_page_created');
    }

    $existing = get_page_by_path(CEU_LIVINGWORKS_SLUG);
    if ($existing && $existing->post_status === 'publish') {
        update_option('ceu_livingworks_page_created', (int) $existing->ID);
        return;
    }
    if ($existing) return;   // trashed or draft — that was deliberate

    $id = wp_insert_post([
        'post_title'   => 'LivingWorks',
        'post_name'    => CEU_LIVINGWORKS_SLUG,
        'post_type'    => 'page',
        'post_status'  => 'publish',
        // A comment, not the shortcode: an unregistered shortcode renders as
        // literal text if this branch is ever reverted.
        'post_content' => '<!-- ceu-livingworks -->',
        'post_author'  => 1,
    ]);

    if ($id && !is_wp_error($id)) {
        update_option('ceu_livingworks_page_created', (int) $id);
        if (function_exists('flush_rewrite_rules')) flush_rewrite_rules(false);
    }
});

// Serve /livingworks/ even with no page row, so the URL LivingWorks publishes
// works from the moment this file is deployed. Priority 1 to beat any 404
// handling a theme or SEO plugin registers at the default.
add_action('template_redirect', function () {
    if (is_admin() || !ceu_is_livingworks_page()) return;
    if (!is_404()) return;
    if (!empty($GLOBALS['ceu_livingworks_rendered'])) return;

    $GLOBALS['ceu_livingworks_rendered'] = true;

    status_header(200);
    nocache_headers();

    get_header();
    echo ceu_livingworks_page_html();
    get_footer();
    exit;
}, 1);

add_shortcode('ceu_livingworks', function () {
    $GLOBALS['ceu_livingworks_rendered'] = true;
    return ceu_livingworks_page_html();
});

add_filter('the_content', function ($content) {
    if (is_admin() || !ceu_is_livingworks_page()) return $content;
    if (!is_main_query() || !in_the_loop())        return $content;
    if (!empty($GLOBALS['ceu_livingworks_rendered'])) return $content;

    $GLOBALS['ceu_livingworks_rendered'] = true;
    return ceu_livingworks_page_html();
}, 20);

// ─── Styles ───────────────────────────────────────────────────────────────────

add_action('wp_footer', function () {
    if (empty($GLOBALS['ceu_livingworks_rendered'])) return;
    ?>
    <style>
    #ceu-lw {
        --ceu-blue:  #2563eb;
        --ceu-navy:  #183e7d;
        --ceu-ink:   #0f172a;
        --ceu-muted: #64748b;
        --ceu-line:  #e2e8f0;
        --ceu-bg:    #f8fafc;

        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 24px 60px;
        font-family: inherit;
        color: var(--ceu-ink);
    }
    @media (max-width: 640px) { #ceu-lw { padding: 24px 16px 40px; } }
    #ceu-lw, #ceu-lw *, #ceu-lw *::before, #ceu-lw *::after { box-sizing: border-box; }

    /* ── Intro ──
       Narrower than the grid on purpose: this is the one block a first-time
       visitor from LivingWorks actually reads, and a full-width paragraph at this
       measure is hard going. */
    #ceu-lw .ceu-lw-intro { max-width: 760px; margin: 0 0 36px; }
    #ceu-lw .ceu-lw-eyebrow {
        margin: 0 0 8px;
        font-size: .8em; font-weight: 700; letter-spacing: .12em;
        text-transform: uppercase; color: var(--ceu-blue);
    }
    #ceu-lw .ceu-lw-title {
        margin: 0 0 14px;
        font-size: 2em; font-weight: 700; line-height: 1.2; color: var(--ceu-ink);
    }
    #ceu-lw .ceu-lw-lede { margin: 0; font-size: 1.05em; line-height: 1.65; color: var(--ceu-muted); }

    /* ── Cards ──
       auto-fit rather than a fixed four columns: there are four trainings today
       and the row should stay honest if that becomes three or five. */
    #ceu-lw .ceu-lw-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 22px;
    }
    #ceu-lw .ceu-lw-card {
        display: flex; flex-direction: column;
        border: 1px solid var(--ceu-line); border-radius: 12px;
        background: #fff; overflow: hidden;
        transition: border-color .15s, box-shadow .15s;
    }
    #ceu-lw .ceu-lw-card:hover {
        border-color: #c7d6ea;
        box-shadow: 0 6px 18px rgba(15, 23, 42, .07);
    }
    #ceu-lw .ceu-lw-thumb {
        position: relative; display: block;
        background: var(--ceu-bg); border-bottom: 1px solid var(--ceu-line);
        padding: 18px;
    }
    #ceu-lw .ceu-lw-thumb img {
        display: block; width: 100%; height: auto; max-height: 150px;
        object-fit: contain; margin: 0 auto;
    }
    #ceu-lw .ceu-lw-price {
        position: absolute; top: 12px; right: 12px;
        padding: 4px 10px; border-radius: 20px;
        background: var(--ceu-navy); color: #fff;
        font-size: .85em; font-weight: 700; white-space: nowrap;
    }

    #ceu-lw .ceu-lw-body { display: flex; flex-direction: column; flex: 1; padding: 16px 18px 18px; }
    #ceu-lw .ceu-lw-name { margin: 0 0 8px; font-size: 1.02em; font-weight: 700; line-height: 1.35; }
    #ceu-lw .ceu-lw-name a { color: var(--ceu-navy); text-decoration: none; }
    #ceu-lw .ceu-lw-name a:hover { text-decoration: underline; }
    #ceu-lw .ceu-lw-credits {
        margin: 0 0 16px; font-size: .88em; color: var(--ceu-muted);
        /* Pushes the button to the bottom so buttons line up across cards whose
           titles wrap to different heights. */
        flex: 1;
    }

    #ceu-lw .ceu-lw-btn {
        display: inline-block; padding: 10px 18px;
        border: 1px solid transparent; border-radius: 8px;
        background: var(--ceu-navy); color: #fff !important;
        font-family: inherit; font-size: .92em; font-weight: 700;
        text-align: center; text-decoration: none !important; cursor: pointer;
        transition: background .15s;
    }
    #ceu-lw .ceu-lw-btn:hover { background: #4b9ade; }
    #ceu-lw .ceu-lw-btn-ghost {
        background: #fff; color: var(--ceu-navy) !important; border-color: var(--ceu-line);
    }
    #ceu-lw .ceu-lw-btn-ghost:hover { background: #eef2f7; }

    /* ── What happens next ── */
    #ceu-lw .ceu-lw-next {
        margin-top: 32px; padding: 20px 22px;
        border: 1px solid var(--ceu-line); border-radius: 12px; background: var(--ceu-bg);
    }
    #ceu-lw .ceu-lw-next p { margin: 0; color: var(--ceu-muted); font-size: .96em; line-height: 1.6; }
    #ceu-lw .ceu-lw-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px; }

    #ceu-lw .ceu-lw-empty { padding: 40px 0; color: var(--ceu-muted); }
    </style>
    <?php
}, 5);
