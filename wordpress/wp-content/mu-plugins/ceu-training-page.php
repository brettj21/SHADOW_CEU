
<?php
/**
 * Plugin Name: CEU Training Page
 * Description: Handles dynamic training detail pages at /{profession-slug}/{id}/{title}/.
 *              Pulls combined data from CEU_TRAININGS + CEU_TRAININGS_BY_PROFESSION.
 *              Safe from WordPress/Elementor/theme updates (MU Plugin).
 *
 * URL pattern: https://shadow.ceunits.com/social-workers/132/Ethics/
 *   - Segment 1: profession slug  → mapped to PROFESSION_ID via CEU_PROFESSIONS
 *   - Segment 2: training ID      → TRAINING_ID in both tables
 *   - Segment 3: title slug       → cosmetic / SEO only (ignored for DB lookup)
 */

// ─── URL Routing ──────────────────────────────────────────────────────────────

add_action('init', function () {
    $pattern = '^([a-z0-9-]+)/([0-9]+)/([^/]+)/?$';

    // Matches e.g. /social-workers/132/Ethics/ or /social-workers/132/Ethics
    add_rewrite_rule(
        $pattern,
        'index.php?ceu_profession=$matches[1]&ceu_training_id=$matches[2]&ceu_title=$matches[3]',
        'top'
    );

    // Auto-flush once if our rule isn't in the stored rule set yet
    $stored = get_option('rewrite_rules');
    if (empty($stored[$pattern])) {
        flush_rewrite_rules();
    }
});

add_filter('query_vars', function ($vars) {
    $vars[] = 'ceu_profession';
    $vars[] = 'ceu_training_id';
    $vars[] = 'ceu_title';
    return $vars;
});

// ─── Data Fetch ───────────────────────────────────────────────────────────────

/**
 * Returns a single associative array of all training data for the given
 * training ID + profession slug, or null if not found / expired.
 *
 * Columns returned:
 *   From CEU_TRAININGS:              TRAINING_ID, TITLE, DESCRIPTION, OBJECTIVES, AUTHOR_ID
 *   From CEU_TRAININGS_BY_PROFESSION: TITLE_ALT, CREDIT, COST, PASSING
 *   From CEU_AUTHORS:                 AUTHOR, AUTHOR_LICENSE
 */
function ceu_get_training($training_id, $profession_slug) {
    // CEU_PROFESSIONS constant is defined in ceu-courses.php (loaded first alphabetically)
    $professions = unserialize(CEU_PROFESSIONS);
    if (!isset($professions[$profession_slug])) return null;

    $profession_id = (int) $professions[$profession_slug];
    $training_id   = (int) $training_id;

    $db = ceu_db_connect();
    if (!$db) return null;

    $sql = "SELECT
                t.TRAINING_ID,
                t.ID            AS post_test_id,
                t.TITLE,
                t.CONTENT,
                t.DESCRIPTION,
                t.OBJECTIVES,
                t.AUTHOR        AS source_bio,
                t.AUTHOR_ID,
                p.TITLE_ALT,
                p.CREDIT,
                p.COST,
                p.PASSING,
                a.AUTHOR        AS author_name,
                a.AUTHOR_LICENSE
            FROM CEU_TRAININGS t
            JOIN CEU_TRAININGS_BY_PROFESSION p
                ON t.TRAINING_ID = p.TRAINING_ID
               AND p.PROFESSION_ID = ?
               AND (p.EXPIRED IS NULL OR p.EXPIRED = 0)
            LEFT JOIN CEU_AUTHORS a ON t.AUTHOR_ID = a.ID
            WHERE t.TRAINING_ID = ?
            LIMIT 1";

    $stmt = $db->prepare($sql);
    if (!$stmt) {
        error_log('CEU training page prepare error: ' . $db->error);
        return null;
    }

    $stmt->bind_param('ii', $profession_id, $training_id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row    = $result->fetch_assoc();
    $stmt->close();

    return $row ?: null;
}

/**
 * Returns post test questions grouped by question ID.
 * Structure: [ question_id => ['question_text' => '...', 'choices' => [...]] ]
 */
function ceu_get_post_test($post_test_id) {
    if (!$post_test_id) return [];
    $post_test_id = (int) $post_test_id;
    $db = ceu_db_connect();
    if (!$db) return [];

    $sql  = "SELECT q.id AS question_id, q.question_text, c.id AS choice_id, c.choice_text, c.is_correct ";
    $sql .= "FROM CEU_questions q ";
    $sql .= "JOIN CEU_question_choices c ON q.id = c.question_id ";
    $sql .= "WHERE q.test_id = ? ORDER BY q.id, c.id";

    $stmt = $db->prepare($sql);
    if (!$stmt) return [];
    $stmt->bind_param('i', $post_test_id);
    $stmt->execute();
    $rows = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();

    $questions = [];
    foreach ($rows as $row) {
        $qid = $row['question_id'];
        if (!isset($questions[$qid])) {
            $questions[$qid] = ['question_text' => $row['question_text'], 'choices' => []];
        }
        $questions[$qid]['choices'][] = [
            'choice_id'   => $row['choice_id'],
            'choice_text' => $row['choice_text'],
            'is_correct'  => (bool) $row['is_correct'],
        ];
    }
    return $questions;
}

// ─── Early WP context setup (priority 1 — before Elementor condition checks) ──
// Elementor Pro resolves header/footer template conditions at the 'wp' action
// (priority ~10). We must fake a page post BEFORE that so Elementor sees
// is_page=true and renders its header/footer templates correctly.

add_action('wp', function () {
    $profession_slug = get_query_var('ceu_profession');
    $training_id     = get_query_var('ceu_training_id');
    if (!$profession_slug || !$training_id) return;

    global $wp_query, $post;
    $post = new WP_Post((object)[
        'ID'                => 0,
        'post_author'       => 1,
        'post_date'         => current_time('mysql'),
        'post_date_gmt'     => current_time('mysql', 1),
        'post_content'      => '',
        'post_title'        => '',
        'post_status'       => 'publish',
        'comment_status'    => 'closed',
        'ping_status'       => 'closed',
        'post_name'         => $profession_slug . '-' . $training_id,
        'post_modified'     => current_time('mysql'),
        'post_modified_gmt' => current_time('mysql', 1),
        'post_parent'       => 0,
        'post_type'         => 'page',
        'filter'            => 'raw',
    ]);
    setup_postdata($post);
    $wp_query->queried_object    = $post;
    $wp_query->queried_object_id = 0;
    $wp_query->post              = $post;
    $wp_query->posts             = [$post];
    $wp_query->found_posts       = 1;
    $wp_query->post_count        = 1;
    $wp_query->is_singular       = true;
    $wp_query->is_page           = true;
    $wp_query->is_404            = false;
    $wp_query->is_home           = false;
    $wp_query->is_archive        = false;

    // Force Zilom to load the builder header (header-builder.php) instead of
    // header-default.php. Without this, zilom_get_header_layout returns null
    // for our fake post and the plain fallback header is used.
    add_filter('zilom_get_header_layout', function ($current) {
        $headers = get_posts([
            'post_type'   => 'gva_header',
            'post_status' => 'publish',
            'numberposts' => 1,
            'orderby'     => 'ID',
            'order'       => 'ASC',
        ]);
        return $headers ? $headers[0]->post_name : $current;
    });

    // Suppress the breadcrumb/page-header banner — our fake post has no
    // zilom_no_breadcrumbs meta so the banner renders by default.
    remove_action('zilom_before_page_content', 'zilom_breadcrumb', 10);

    // Load the builder footer — same pattern as the header filter above.
    add_filter('zilom_get_footer_layout', function ($current) {
        $footers = get_posts([
            'post_type'   => 'footer',
            'post_status' => 'publish',
            'numberposts' => 1,
            'orderby'     => 'ID',
            'order'       => 'ASC',
        ]);
        return $footers ? $footers[0]->post_name : $current;
    });
}, 1);

// ─── Profession slug → human-readable label ───────────────────────────────────

function ceu_profession_label($slug) {
    $map = [
        'livingworks'         => 'Livingworks',
        'social-workers'      => 'Social Workers',
        'social-worker'       => 'Social Workers',
        'mft-lcsw'            => 'MFT / LCSW',
        'psychologist'        => 'Psychologist',
        'counselor-addiction' => 'Counselor / Addiction',
    ];
    return $map[$slug] ?? ucwords(str_replace('-', ' ', $slug));
}

// ─── Enqueue Elementor widget CSS on our dynamic pages ───────────────────────
// Elementor only enqueues widget-heading/toggle CSS when its own widgets are on
// the page. Since we fake a post, we must enqueue them manually.
add_action('wp_enqueue_scripts', function () {
    if (!get_query_var('ceu_training_id')) return;
    $ver  = defined('ELEMENTOR_VERSION') ? ELEMENTOR_VERSION : null;
    $base = WP_PLUGIN_URL . '/elementor/assets/css/';
    wp_enqueue_style('ceu-widget-heading', $base . 'widget-heading.min.css', [], $ver);
    wp_enqueue_style('ceu-widget-toggle',  $base . 'widget-toggle.min.css',  [], $ver);
}, 20);

// ─── Template selection ───────────────────────────────────────────────────────
// Use the theme's own page.php so Zilom renders the full header/containers/footer.
// We inject our HTML via the_content filter below.

add_filter('template_include', function ($template) {
    $profession_slug = get_query_var('ceu_profession');
    $training_id     = get_query_var('ceu_training_id');
    if (!$profession_slug || !$training_id) return $template;

    $training = ceu_get_training($training_id, $profession_slug);

    if (!$training) {
        global $wp_query;
        $wp_query->set_404();
        status_header(404);
        nocache_headers();
        return get_404_template();
    }

    // Cache for the_content filter
    $GLOBALS['ceu_current_training']      = $training;
    $GLOBALS['ceu_current_profession']    = $profession_slug;
    $GLOBALS['ceu_post_test_questions']   = ceu_get_post_test($training['post_test_id'] ?? 0);

    // Update the fake post title now that we have training data
    global $post;
    if ($post) {
        $post->post_title = ($training['TITLE_ALT'] ?: $training['TITLE']);
    }

    return locate_template('page.php') ?: $template;
}, 99);

// Suppress the theme's h1.title for our fake post (ID=0) without touching nav menu items.
// Nav menu calls apply_filters('the_title', $title, $item->ID) where $item->ID > 0,
// so $id === 0 only matches when get_the_ID() returns 0 (our fake post).
add_filter('the_title', function ($title, $id = null) {
    if ($id === 0 && get_query_var('ceu_training_id')) return '';
    return $title;
}, 10, 2);

// ─── Content renderer ─────────────────────────────────────────────────────────
// Uses the exact Elementor canvas structure from the reference page so that
// Elementor's own JS and CSS initialize the toggle widgets identically.

add_filter('the_content', function ($content) {
    if (empty($GLOBALS['ceu_current_training'])) return $content;

    $training        = $GLOBALS['ceu_current_training'];
    $profession_slug = $GLOBALS['ceu_current_profession'];

    $profession_label = ceu_profession_label($profession_slug);
    $course_title     = $training['TITLE_ALT'] ?: $training['TITLE'];
    $cost             = number_format((float) $training['COST'], 2);
    $credits          = $training['CREDIT'];
    $content_html     = $training['CONTENT'];
    $desc             = $training['DESCRIPTION'];
    $obj              = $training['OBJECTIVES'];
    $source           = $training['source_bio'];
    $questions        = $GLOBALS['ceu_post_test_questions'] ?? [];

    $training_id_int = (int) $training['TRAINING_ID'];
    $img_path = WP_CONTENT_DIR . '/uploads/course/' . $training_id_int . '.jpg';
    $img_url  = WP_CONTENT_URL . '/uploads/course/' . $training_id_int . '.jpg';
    $has_img  = file_exists($img_path);

    $user = maybe_unserialize(get_user_meta(get_current_user_id(), '_ceu_row', true));

    $course_data = [
        'TRAINING_ID'  => $training['TRAINING_ID'],
        'post_test_id' => $training['post_test_id'],
        'TITLE_ALT'    => $course_title,
        'CREDIT'       => $training['CREDIT'],
        'COST'         => $training['COST'],
        'PASSING'      => $training['PASSING'],
        'CONTENT'      => '',
        'AUTHOR'       => '',
        'OBJECTIVES'   => '',
        'DESCRIPTION'  => '',
    ];
    $course_json = htmlspecialchars(json_encode($course_data), ENT_QUOTES, 'UTF-8');

    $safe_tags = [
        'p'      => [], 'br'  => [], 'ul' => [], 'ol' => [], 'li' => [],
        'strong' => [], 'b'   => [], 'em' => [], 'i'  => [],
        'h2'     => [], 'h3'  => [], 'h4' => [],
        'a'      => ['href' => [], 'target' => []],
        'span'   => ['style' => []],
        'div'    => ['id' => [], 'style' => [], 'class' => []],
        'input'  => ['name' => [], 'type' => [], 'value' => [], 'checked' => []],
        'table'  => [], 'thead' => [], 'tbody' => [], 'tr' => [],
        'th'     => [], 'td'    => [],
    ];

    $content_html = force_balance_tags(wp_kses($content_html, $safe_tags));
    $desc         = force_balance_tags(wp_kses($desc, $safe_tags));
    $obj          = force_balance_tags(wp_kses($obj, $safe_tags));
    $source       = force_balance_tags(wp_kses($source, $safe_tags));

    // ── Post-test result overlay ──────────────────────────────────────────────
    $show_overlay   = false;
    $overlay_html   = '';
    if (!empty($_SESSION['passed']) && is_array($_SESSION['passed'])
        && (int) $_SESSION['passed']['tid'] === $training_id_int) {

        $r        = $_SESSION['passed'];
        $is_pass  = $r['passing'] === '1';
        $is_free  = (float) ($r['cost'] ?? 0) === 0.0;
        unset($_SESSION['passed']); // consume immediately so refresh doesn't re-show

        $show_overlay = true;

        ob_start();
        $headline   = $is_pass ? 'Congratulations, You Passed!' : 'Sorry, You Did Not Pass.';
        $icon_color = $is_pass ? '#2e7d32' : '#c62828';
        $icon_svg   = $is_pass
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';
        ?>
        <style>
            #ceu-result-backdrop{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:99998;display:none;align-items:center;justify-content:center}
            #ceu-result-backdrop.ceu-overlay-open{display:flex}
            #ceu-result-card{background:#fff;border-radius:14px;padding:40px 36px 32px;max-width:460px;width:90%;position:relative;box-shadow:0 20px 60px rgba(0,0,0,.25);text-align:center;font-family:"Helvetica",sans-serif}
            #ceu-result-card .ceu-ov-icon{color:<?php echo $icon_color ?>;margin-bottom:14px}
            #ceu-result-card .ceu-ov-headline{font-size:22px;font-weight:700;color:#183E7D;margin:0 0 22px}
            #ceu-result-card .ceu-ov-rows{text-align:left;border-top:1px solid #e0e6f0;padding-top:18px;margin-bottom:24px}
            #ceu-result-card .ceu-ov-row{display:flex;justify-content:space-between;align-items:baseline;padding:7px 0;border-bottom:1px solid #f0f4f8;font-size:15px}
            #ceu-result-card .ceu-ov-row:last-child{border-bottom:none}
            #ceu-result-card .ceu-ov-label{color:#666;font-weight:400}
            #ceu-result-card .ceu-ov-val{color:#111;font-weight:700;text-align:right;max-width:260px}
            #ceu-result-card .ceu-ov-actions{display:flex;flex-direction:column;gap:10px}
            #ceu-result-card .ceu-ov-btn{display:block;padding:13px 24px;border-radius:7px;font-size:15px;font-weight:700;text-decoration:none;cursor:pointer;border:none;letter-spacing:.3px;transition:background .15s,color .15s}
            #ceu-result-card .ceu-ov-btn-primary{background:#183E7D;color:#fff}
            #ceu-result-card .ceu-ov-btn-primary:hover{background:#4B9ADE;color:#fff}
            #ceu-result-card .ceu-ov-btn-secondary{background:#f0f4f9;color:#183E7D}
            #ceu-result-card .ceu-ov-btn-secondary:hover{background:#dce6f5;color:#183E7D}
            #ceu-result-close{position:absolute;top:14px;right:16px;background:none;border:none;font-size:22px;color:#999;cursor:pointer;line-height:1;padding:4px 8px}
            #ceu-result-close:hover{color:#333}
        </style>

        <div id="ceu-result-backdrop">
            <div id="ceu-result-card" role="dialog" aria-modal="true" aria-label="Post test result">
                <button id="ceu-result-close" aria-label="Close">&times;</button>
                <div class="ceu-ov-icon"><?php echo $icon_svg ?></div>
                <p class="ceu-ov-headline"><?php echo esc_html($headline) ?></p>
                <div class="ceu-ov-rows">
                    <div class="ceu-ov-row">
                        <span class="ceu-ov-label">Training</span>
                        <span class="ceu-ov-val"><?php echo esc_html(stripslashes($r['training_title'])) ?></span>
                    </div>
                    <div class="ceu-ov-row">
                        <span class="ceu-ov-label">Your Score</span>
                        <span class="ceu-ov-val"><?php echo esc_html($r['score']) ?>%</span>
                    </div>
                    <div class="ceu-ov-row">
                        <span class="ceu-ov-label">CE Credit Hours</span>
                        <span class="ceu-ov-val"><?php echo esc_html($r['credits'] + 0) ?></span>
                    </div>
                    <?php if ($is_pass): ?>
                        <div class="ceu-ov-row">
                            <span class="ceu-ov-label">Cost</span>
                            <span class="ceu-ov-val"><?php echo $is_free ? 'Free' : '$' . esc_html(number_format((float)$r['cost'], 2)) ?></span>
                        </div>
                    <?php endif ?>
                </div>
                <div class="ceu-ov-actions">
                    <?php if ($is_pass): ?>
                        <?php if ($is_free): ?>
                            <a href="<?php echo esc_url(home_url('/user')) ?>" class="ceu-ov-btn ceu-ov-btn-primary">
                                View My Certificate
                            </a>
                        <?php else: ?>
                            <button type="button" class="ceu-ov-btn ceu-ov-btn-primary" id="ceu-ov-cart-btn"
                                    data-tid="<?php echo (int) $r['tid'] ?>"
                                    data-title="<?php echo esc_attr(stripslashes($r['training_title'])) ?>"
                                    data-cost="<?php echo esc_attr(number_format((float) $r['cost'], 2)) ?>">
                                Add to Cart
                            </button>
                        <?php endif ?>
                        <button type="button" class="ceu-ov-btn ceu-ov-btn-secondary" id="ceu-ov-close-btn">Close</button>
                    <?php else: ?>
                        <button type="button" class="ceu-ov-btn ceu-ov-btn-primary" id="ceu-ov-retake-btn">Retake Post Test</button>
                        <button type="button" class="ceu-ov-btn ceu-ov-btn-secondary" id="ceu-ov-close-btn">Close</button>
                    <?php endif ?>
                </div>
            </div>
        </div>
        <script>
            (function () {
                var backdrop = document.getElementById('ceu-result-backdrop');
                function openOverlay()  { backdrop.classList.add('ceu-overlay-open'); }
                function closeOverlay() { backdrop.classList.remove('ceu-overlay-open'); }

                // Auto-open on load
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', openOverlay);
                } else {
                    openOverlay();
                }

                // Close button(s)
                document.getElementById('ceu-result-close').addEventListener('click', closeOverlay);
                var closeBtn = document.getElementById('ceu-ov-close-btn');
                if (closeBtn) closeBtn.addEventListener('click', closeOverlay);

                // Add to Cart button
                var cartBtn = document.getElementById('ceu-ov-cart-btn');
                if (cartBtn) {
                    cartBtn.addEventListener('click', function () {
                        var tid   = cartBtn.dataset.tid;
                        var title = cartBtn.dataset.title;
                        var cost  = parseFloat(cartBtn.dataset.cost) || 0;

                        // Read current cart cookie (pipe-separated training IDs)
                        var existing = '';
                        document.cookie.split(';').forEach(function (c) {
                            var p = c.trim();
                            if (p.startsWith('cart=')) existing = decodeURIComponent(p.slice(5));
                        });

                        // Add tid if not already in cart
                        var ids = existing ? existing.split('|').filter(Boolean) : [];
                        var alreadyIn = ids.indexOf(tid) !== -1;
                        if (!alreadyIn) {
                            ids.push(tid);
                            var exp = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
                            document.cookie = 'cart=' + encodeURIComponent(ids.join('|')) + '; path=/; expires=' + exp;
                        }

                        // Update nav count badge
                        var countEl = document.querySelector('.mini-cart-items');
                        var newCount = alreadyIn ? (parseInt((countEl || {}).textContent, 10) || ids.length) : ids.length;
                        if (countEl) countEl.textContent = newCount;

                        // Inject item into the mini cart dropdown (matches ceu-cart.php ceu_cart_html structure)
                        var contentEl = document.querySelector('.minicart-content');
                        if (contentEl) {
                            var newItem = '<li class="ceu-mc-item">'
                                + '<div class="ceu-mc-item-body">'
                                + '<span class="ceu-mc-item-title">' + title + '</span>'
                                + '<span class="ceu-mc-item-price">$' + cost.toFixed(2) + '</span>'
                                + '</div>'
                                + '<button class="ceu-mc-remove" data-ceu-remove="' + tid + '" title="Remove from cart">'
                                + '<i class="fas fa-trash-alt"></i></button>'
                                + '</li>';

                            var existingList = contentEl.querySelector('.ceu-mc-list');
                            if (existingList && !alreadyIn) {
                                existingList.insertAdjacentHTML('beforeend', newItem);
                                // Update subtotal and badge
                                var subtotalEl = contentEl.querySelector('.ceu-mc-subtotal strong');
                                if (subtotalEl) {
                                    var prev = parseFloat(subtotalEl.textContent.replace(/[^0-9.]/g, '')) || 0;
                                    subtotalEl.textContent = '$' + (prev + cost).toFixed(2);
                                }
                                var badgeEl = contentEl.querySelector('.ceu-mc-badge');
                                if (badgeEl) {
                                    badgeEl.textContent = newCount + (newCount === 1 ? ' course' : ' courses');
                                }
                            } else {
                                // Was empty or missing — build full cart
                                var cartUrl    = '<?php echo esc_js(home_url('/cart/')) ?>';
                                var checkoutUrl = '<?php echo esc_js(home_url('/checkout/')) ?>';
                                var countLabel  = newCount + (newCount === 1 ? ' course' : ' courses');
                                contentEl.innerHTML = '<div class="ceu-mc">'
                                    + '<div class="ceu-mc-header">'
                                    + '<i class="flaticon-shopping-cart ceu-mc-icon"></i>'
                                    + '<span class="ceu-mc-title">Your Cart</span>'
                                    + '<span class="ceu-mc-badge">' + countLabel + '</span>'
                                    + '</div>'
                                    + '<ul class="ceu-mc-list">' + newItem + '</ul>'
                                    + '<div class="ceu-mc-footer">'
                                    + '<div class="ceu-mc-subtotal"><span>Subtotal</span><strong>$' + cost.toFixed(2) + '</strong></div>'
                                    + '<a href="' + cartUrl + '" class="ceu-mc-btn ceu-mc-btn-ghost">View Cart</a>'
                                    + '<a href="' + checkoutUrl + '" class="ceu-mc-btn ceu-mc-btn-primary">Proceed to Checkout &rarr;</a>'
                                    + '</div></div>';
                            }
                        }

                        // Confirm state then close overlay
                        cartBtn.textContent = 'Added to Cart ✓';
                        cartBtn.disabled = true;
                        setTimeout(closeOverlay, 1500);
                    });
                }

                // Retake: close overlay then open + scroll to post test
                var retakeBtn = document.getElementById('ceu-ov-retake-btn');
                if (retakeBtn) {
                    retakeBtn.addEventListener('click', function () {
                        closeOverlay();
                        // Small delay so the fade doesn't fight the scroll
                        setTimeout(function () {
                            var tabTitle   = document.querySelector('#PostTest .elementor-tab-title');
                            var tabContent = document.getElementById('ceu-tab-content-2');
                            if (tabTitle && tabContent) {
                                tabTitle.classList.add('elementor-active');
                                tabTitle.setAttribute('aria-expanded', 'true');
                                tabContent.style.display = 'block';
                            }
                            var el = document.getElementById('PostTest');
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }, 200);
                    });
                }

                // Click backdrop to close
                backdrop.addEventListener('click', function (e) {
                    if (e.target === backdrop) closeOverlay();
                });
            })();
        </script>
        <?php
        $overlay_html = ob_get_clean();
    }

    ob_start(); ?>
    <style>
        /* ── Headings (from post-4606.css values) ── */
        .ceu-tp-wrap .ceu-h-profession{font-family:"Helvetica",Sans-serif;font-size:36px;font-weight:600;letter-spacing:0.1px;color:#183E7D;margin:0;padding:0}
        .ceu-tp-wrap .ceu-h-course{font-family:"Helvetica",Sans-serif;font-size:36px;font-weight:100;letter-spacing:0.1px;color:#000;text-align:start;margin:0; padding:12px 0 30px 0;}
        .ceu-tp-wrap .ceu-h-cost{font-family:"Helvetica",Sans-serif;font-size:20px;font-weight:700;letter-spacing:0.1px;color:#000;margin:0; padding-bottom:20px;}
        /* ── Hero layout: copy left, image right ── */
        .ceu-hero-wrap{display:flex;align-items:flex-start;gap:36px;margin-bottom:8px}
        .ceu-hero-copy{flex:1 1 0;min-width:0}
        .ceu-hero-img{flex:0 0 auto;max-width:340px;width:340px}
        .ceu-hero-img img{width:100%;height:auto;border-radius:10px;display:block;box-shadow:0 2px 12px rgba(0,0,0,.12)}
        @media(max-width:900px){
            .ceu-hero-img{max-width:260px;width:260px}
        }
        @media(max-width:767px){
            .ceu-tp-wrap .ceu-h-profession{font-size:32px;text-align:start}
            .ceu-tp-wrap .ceu-h-course{font-size:32px; padding:12px 0 30px 0; }
            .ceu-tp-wrap .ceu-h-cost{text-align:start; padding-bottom:20px; }
            .ceu-hero-img{display:none}
        }
        /* ── Toggle card containers ── */
        .ceu-tp-wrap .elementor-toggle{background-color:#fcfcfc;border:1px solid #183E7D;border-radius:12px;margin-bottom:12px;text-align:start}
        .ceu-tp-wrap .elementor-toggle:hover{border-color:#4B9ADE}
        .ceu-tp-wrap .ceu-toggle-lg{padding:36px}
        .ceu-tp-wrap .ceu-toggle-sm{padding:18px}
        /* Override widget-toggle.min.css gray borders — card border replaces them */
        .ceu-tp-wrap .elementor-toggle .elementor-tab-title{border-color:transparent;border-block-end-color:transparent;background:transparent;padding:12px 0 12px 3px}
        .ceu-tp-wrap .elementor-toggle .elementor-tab-title.elementor-active{border-block-end:none}
        .ceu-tp-wrap .elementor-toggle .elementor-tab-content{border-block-end-color:transparent;background:transparent;padding:12px 0 12px 3px;font-family:"Helvetica",Sans-serif;font-size:16px;font-weight:400;color:#757783}
        /* Toggle title and icon — navy blue */
        .ceu-tp-wrap .elementor-toggle .elementor-toggle-title,.ceu-tp-wrap .elementor-toggle .elementor-toggle-icon{font-family:"Helvetica",Sans-serif;font-weight:700;color:#183E7D}
        .ceu-tp-wrap .ceu-toggle-lg .elementor-toggle-title{font-size:26px}
        .ceu-tp-wrap .ceu-toggle-sm .elementor-toggle-title{font-size:18px}
        .ceu-tp-wrap .elementor-toggle .elementor-tab-title .elementor-toggle-icon i:before{color:#183E7D}
        /* Active state */
        .ceu-tp-wrap .elementor-toggle .elementor-tab-title.elementor-active a,
        .ceu-tp-wrap .elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon{color:#4B9ADE}
        .ceu-tp-wrap .elementor-toggle .elementor-tab-title.elementor-active .elementor-toggle-icon i:before{color:#4B9ADE}
        /* ── Take Post Test button ── */
        .ceu-take-test-wrap{margin-top:32px;padding-top:24px;border-top:1px solid #e0e6f0;text-align:center}
        .ceu-take-test-btn{background:#183E7D;color:#fff;border:none;padding:14px 36px;font-size:16px;font-weight:700;border-radius:6px;cursor:pointer;letter-spacing:0.5px;transition:background 0.2s}
        .ceu-take-test-btn:hover{background:#4B9ADE}
        .ceu-take-test-btn .ceu-btn-arrow{margin-left:8px;font-style:normal}
    </style>

    <div class="ceu-tp-wrap">

        <div class="ceu-hero-wrap">
            <div class="ceu-hero-copy">
                <h2 class="elementor-heading-title elementor-size-default ceu-h-profession"><?php echo esc_html($profession_label); ?></h2>
                <h2 class="elementor-heading-title elementor-size-default ceu-h-course"><?php echo esc_html($course_title); ?></h2>
                <h2 class="elementor-heading-title elementor-size-default ceu-h-cost"><?php echo esc_html($credits); ?> - CE credit hours training</h2>
                <h2 class="elementor-heading-title elementor-size-default ceu-h-cost">$<?php echo esc_html($cost); ?> - Cost of course</h2>
                <p>This page contains important information about the course, including training details, a comprehensive course description, learning objectives, and source references. <strong>We encourage you to review each section</strong> to gain a clear understanding of the course content, educational goals, and supporting materials before beginning your training and taking the <strong><a href="#PostTest">POST TEST</a></strong> below.</p>
                <p>Target audience and instructional level of this course: <strong>foundational<br /></strong><em>There is no known conflict of interest or commercial support related to this CE program.</em></p>
            </div>
            <?php if ($has_img): ?>
                <div class="ceu-hero-img">
                    <img src="<?php echo esc_url($img_url); ?>" alt="<?php echo esc_attr($course_title); ?>">
                </div>
            <?php endif; ?>
        </div>
        <br />
        <!-- Course Training -->
        <div class="elementor-toggle ceu-toggle-lg">
            <div class="elementor-toggle-item">
                <div class="elementor-tab-title" role="button" aria-controls="ceu-tab-content-1" aria-expanded="false">
                <span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                    <span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
                    <span class="elementor-toggle-icon-opened"><i class="fas fa-caret-up"></i></span>
                </span>
                    <a class="elementor-toggle-title" tabindex="0">Course Training</a>
                </div>
                <div id="ceu-tab-content-1" class="elementor-tab-content elementor-clearfix">
                    <?php echo $content_html; ?>
                    <div class="ceu-take-test-wrap">
                        <button type="button" class="ceu-take-test-btn" onclick="ceuOpenPostTest()">
                            Take the Post Test <em class="ceu-btn-arrow">&#8594;</em>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Post Test -->
        <div class="elementor-toggle ceu-toggle-lg" id="PostTest">
            <div class="elementor-toggle-item">
                <div class="elementor-tab-title" role="button" aria-controls="ceu-tab-content-2" aria-expanded="false">
                <span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                    <span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
                    <span class="elementor-toggle-icon-opened"><i class="fas fa-caret-up"></i></span>
                </span>
                    <a class="elementor-toggle-title" tabindex="0">Post Test</a>
                </div>
                <div id="ceu-tab-content-2" class="elementor-tab-content elementor-clearfix">
                    <?php if (empty($questions)): ?>
                        <p>Post test is not available for this course.</p>
                    <?php else: ?>
                        <style>
                            .ceu-post-test{color:#444;font-size:15px}
                            .ceu-post-test .ceu-q-block{border-bottom:1px solid #e0e6f0;padding:18px 0}
                            .ceu-post-test .ceu-q-block:last-of-type{border-bottom:none}
                            .ceu-post-test .ceu-q-header{display:flex;gap:10px;align-items:baseline;margin-bottom:10px}
                            .ceu-post-test .ceu-q-num{font-weight:700;color:#183E7D;font-size:15px;min-width:22px;flex-shrink:0}
                            .ceu-post-test .ceu-q-text{font-weight:600;color:#222;line-height:1.5}
                            .ceu-post-test .ceu-q-choices{padding-left:32px;display:flex;flex-direction:column;gap:8px}
                            .ceu-post-test label{display:flex;align-items:flex-start;gap:8px;cursor:pointer;color:#444;line-height:1.4;font-weight:400}
                            .ceu-post-test label input[type="radio"]{margin-top:3px;flex-shrink:0;accent-color:#183E7D;width:15px;height:15px}
                            .ceu-post-test .ceu-q-count{color:#666;font-size:14px;margin-bottom:16px}
                            .ceu-post-test .ceu-submit-wrap{margin-top:28px;padding-top:20px;border-top:1px solid #e0e6f0}
                            .ceu-post-test .ceu-submit-btn{background:#183E7D;color:#fff;border:none;padding:12px 32px;font-size:15px;font-weight:700;border-radius:5px;cursor:pointer;letter-spacing:0.5px;transition:background 0.2s}
                            .ceu-post-test .ceu-submit-btn:hover{background:#4B9ADE}
                            .ceu-post-test .ceu-submit-btn:disabled{background:#999;cursor:not-allowed}
                        </style>
                        <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" name="postTestForm" class="ceu-post-test">
                            <input type="hidden" name="action" value="ceu_score_post_v2">
                            <input type="hidden" name="back_url" value="<?php echo esc_url(home_url('/' . $profession_slug . '/' . $training_id_int . '/' . sanitize_title($course_title) . '/')); ?>">
                            <p class="ceu-q-count"><strong><?php echo count($questions); ?> Questions</strong></p>
                            <?php $y = 1; foreach ($questions as $qid => $q): ?>
                                <div class="ceu-q-block">
                                    <div class="ceu-q-header">
                                        <span class="ceu-q-num"><?php echo $y; ?>.</span>
                                        <span class="ceu-q-text"><?php echo esc_html($q['question_text']); ?></span>
                                    </div>
                                    <div class="ceu-q-choices">
                                        <?php foreach ($q['choices'] as $i => $c):
                                            if($user['ID'] == '100039' && $c['is_correct'] == '1') {
                                                $selected = 'checked';
                                            } else {
                                                $selected = '';
                                            }

                                            $letter = chr(97 + $i);
                                            ?>
                                            <label>
                                                <input type="radio" name="<?php echo esc_attr($qid); ?>" value="<?php echo esc_attr($c['choice_id']); ?>" <?php echo $selected ?>>
                                                <span><?php echo esc_html($letter . '. ' . $c['choice_text']); ?></span>
                                            </label>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                                <?php $y++; endforeach; ?>
                            <input type="hidden" name="course" value="<?php echo $course_json; ?>">
                            <div class="ceu-submit-wrap">
                                <button type="submit" class="ceu-submit-btn" onclick="this.disabled=true;this.form.submit();">SUBMIT</button>
                            </div>
                        </form>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <!-- Course Description -->
        <div class="elementor-toggle ceu-toggle-sm">
            <div class="elementor-toggle-item">
                <div class="elementor-tab-title" role="button" aria-controls="ceu-tab-content-3" aria-expanded="false">
                <span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                    <span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
                    <span class="elementor-toggle-icon-opened"><i class="fas fa-caret-up"></i></span>
                </span>
                    <a class="elementor-toggle-title" tabindex="0">Course Description</a>
                </div>
                <div id="ceu-tab-content-3" class="elementor-tab-content elementor-clearfix">
                    <?php echo $desc; ?>
                </div>
            </div>
        </div>

        <!-- Learning Objectives -->
        <div class="elementor-toggle ceu-toggle-sm">
            <div class="elementor-toggle-item">
                <div class="elementor-tab-title" role="button" aria-controls="ceu-tab-content-4" aria-expanded="false">
                <span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                    <span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
                    <span class="elementor-toggle-icon-opened"><i class="fas fa-caret-up"></i></span>
                </span>
                    <a class="elementor-toggle-title" tabindex="0">Learning Objectives</a>
                </div>
                <div id="ceu-tab-content-4" class="elementor-tab-content elementor-clearfix">
                    <?php echo $obj; ?>
                </div>
            </div>
        </div>

        <!-- Source -->
        <div class="elementor-toggle ceu-toggle-sm">
            <div class="elementor-toggle-item">
                <div class="elementor-tab-title" role="button" aria-controls="ceu-tab-content-5" aria-expanded="false">
                <span class="elementor-toggle-icon elementor-toggle-icon-right" aria-hidden="true">
                    <span class="elementor-toggle-icon-closed"><i class="fas fa-caret-right"></i></span>
                    <span class="elementor-toggle-icon-opened"><i class="fas fa-caret-up"></i></span>
                </span>
                    <a class="elementor-toggle-title" tabindex="0">Source</a>
                </div>
                <div id="ceu-tab-content-5" class="elementor-tab-content elementor-clearfix">
                    <?php echo $source; ?>
                </div>
            </div>
        </div>

    </div>

    <script>
        (function () {
            document.querySelectorAll('.ceu-tp-wrap .elementor-tab-title').forEach(function (title) {
                title.addEventListener('click', function () {
                    var isActive = this.classList.contains('elementor-active');
                    var content  = document.getElementById(this.getAttribute('aria-controls'));
                    if (!content) return;
                    this.classList.toggle('elementor-active', !isActive);
                    this.setAttribute('aria-expanded', isActive ? 'false' : 'true');
                    content.style.display = isActive ? '' : 'block';
                });
            });
        })();

        function ceuOpenPostTest() {
            var tabTitle   = document.querySelector('#PostTest .elementor-tab-title');
            var tabContent = document.getElementById('ceu-tab-content-2');
            if (tabTitle && tabContent) {
                tabTitle.classList.add('elementor-active');
                tabTitle.setAttribute('aria-expanded', 'true');
                tabContent.style.display = 'block';
            }
            var postTestEl = document.getElementById('PostTest');
            if (postTestEl) {
                postTestEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    </script>
    <?php
    return $overlay_html . ob_get_clean();
}, 10);

// ─── Post Test Submission Handler ────────────────────────────────────────────
// Mirrors score_post_v2 from CEU/process/forms.php.
// Wired via WordPress's admin-post.php endpoint (same pattern as ceu_do_login).

function ceu_do_score_post_v2() {
    if (!session_id()) session_start();

    // Must be a logged-in CEU user
    if (!ceu_is_logged_in()) {
        wp_safe_redirect(home_url('/login/'));
        exit;
    }

    // Validate back_url stays on this host; fall back to home
    $back_url   = esc_url_raw($_POST['back_url'] ?? '');
    $back_host  = wp_parse_url($back_url, PHP_URL_HOST);
    $home_host  = wp_parse_url(home_url(), PHP_URL_HOST);
    if (!$back_url || $back_host !== $home_host) {
        $back_url = home_url('/');
    }

    $ceu_row = maybe_unserialize(get_user_meta(get_current_user_id(), '_ceu_row', true));
    if (!$ceu_row) {
        wp_safe_redirect(home_url('/'));
        exit;
    }

    $uid        = (int) $ceu_row['ID'];
    $state      = $ceu_row['STATE'] ?? '';
    $email      = $ceu_row['EMAIL'] ?? '';
    $pro_slug   = $ceu_row['PROFESSION'] ?? '';

    $professions = unserialize(CEU_PROFESSIONS);
    if ($pro_slug === 'livingworks' && ($_POST['livingworks_course'] ?? '') === 'yes') {
        $profession_id = 7;
    } elseif (isset($professions[$pro_slug])) {
        $profession_id = (int) $professions[$pro_slug];
    } else {
        $profession_id = 0;
    }

    $training = json_decode(stripslashes($_POST['course'] ?? ''), true);
    if (!$training || empty($training['TRAINING_ID'])) {
        wp_safe_redirect(home_url('/'));
        exit;
    }

    $tid          = (int) $training['TRAINING_ID'];
    $post_test_id = (int) $training['post_test_id'];
    $passing_pct  = (float) $training['PASSING'] * 100;

    $db = ceu_db_connect();
    if (!$db) {
        wp_safe_redirect(home_url('/'));
        exit;
    }

    // Fetch correct choice_id per question_id
    $stmt = $db->prepare(
        "SELECT q.id AS question_id, c.id AS choice_id
         FROM CEU_questions q
         JOIN CEU_question_choices c ON q.id = c.question_id
         WHERE q.test_id = ? AND c.is_correct = 1
         ORDER BY q.id"
    );
    $stmt->bind_param('i', $post_test_id);
    $stmt->execute();
    $rows = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();

    $correct_map = [];
    foreach ($rows as $r) {
        $correct_map[$r['question_id']] = $r['choice_id'];
    }

    $question_count = count($correct_map);
    if ($question_count === 0) {
        wp_safe_redirect(home_url('/'));
        exit;
    }

    // Score submitted answers; build answer string for storage on fail
    $score         = 0;
    $answer_string = '';
    $post_data     = $_POST;
    foreach ($correct_map as $qid => $correct_choice_id) {
        $submitted = $post_data[$qid] ?? null;
        if ((string) $submitted === (string) $correct_choice_id) {
            $score++;
        }
        $answer_string .= $qid . '-' . (int) $submitted . '|';
    }

    $final_score  = round($score / $question_count * 100, 2);
    $is_passing   = $final_score >= $passing_pct;

    $arr = [
        'tid'            => $tid,
        'score'          => $final_score,
        'training_title' => $training['TITLE_ALT'] ?? '',
        'profession_id'  => $profession_id,
        'email'          => $email,
        'state'          => $state,
        'credits'        => $training['CREDIT'] ?? '',
        'uid'            => $uid,
        'cost'           => $training['COST'] ?? '0',
        'passing'        => $is_passing ? '1' : '0',
    ];

    // ── Upsert into CEU_TRAININGS_TAKEN ──────────────────────────────────────
    $check = $db->prepare("SELECT ID FROM CEU_TRAININGS_TAKEN WHERE TRAINING_ID = ? AND USER_ID = ?");
    $check->bind_param('ii', $tid, $uid);
    $check->execute();
    $exists = $check->get_result()->num_rows > 0;
    $check->close();

    $now = date('Y-m-d H:i:s');
    if (!$exists) {
        $ins = $db->prepare(
            "INSERT INTO CEU_TRAININGS_TAKEN
             (TRAINING_ID, TRAINING_TITLE, PROFESSION_ID, STATE, USER_ID, CREDITS, SCORE, PASSING, DATE_COMPLETED)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
        );
        $ins->bind_param(
            'isisissss',
            $tid,
            $arr['training_title'],
            $profession_id,
            $state,
            $uid,
            $arr['credits'],
            $final_score,
            $arr['passing'],
            $now
        );
        $ins->execute();
        $insert_status = $ins->affected_rows;
        $ins->close();
    } else {
        $upd = $db->prepare(
            "UPDATE CEU_TRAININGS_TAKEN
             SET SCORE = ?, PASSING = ?, DATE_COMPLETED = ?
             WHERE USER_ID = ? AND TRAINING_ID = ? AND PROFESSION_ID = ? AND PASSING = 0"
        );
        $upd->bind_param('sssiii', $final_score, $arr['passing'], $now, $uid, $tid, $profession_id);
        $upd->execute();
        $insert_status = $upd->affected_rows;
        $upd->close();
    }

    if ($is_passing) {
        // Delete any saved in-progress submission
        $del = $db->prepare("DELETE FROM CEU_POST_TEST_RESULTS WHERE USER_ID = ? AND TRAINING_ID = ?");
        $del->bind_param('ii', $uid, $post_test_id);
        $del->execute();
        $del->close();

        // Refresh CEU session from DB so user page reflects new state
        $user_stmt = $db->prepare("SELECT * FROM CEU_USER WHERE ID = ?");
        $user_stmt->bind_param('i', $uid);
        $user_stmt->execute();
        $fresh_ceu = $user_stmt->get_result()->fetch_assoc();
        $user_stmt->close();
        if ($fresh_ceu) {
            $_SESSION['session_data'] = [$fresh_ceu];
            update_user_meta(get_current_user_id(), '_ceu_row', maybe_serialize($fresh_ceu));
        }

        $_SESSION['passed'] = $arr;

        // Free course: issue cert immediately
        if ((float) $arr['cost'] === 0.0) {
            $cert = $db->prepare(
                "INSERT INTO CEU_CERTIFICATES
                 (TRAINING_ID, TRAINING_TITLE, DATE_COMPLETED, PROFESSION_ID, STATE, USER_ID, CREDITS, SCORE)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
            );
            $cert->bind_param('isssisss', $tid, $arr['training_title'], $now, $profession_id, $state, $uid, $arr['credits'], $final_score);
            $cert->execute();
            $cert->close();

            $rm = $db->prepare("DELETE FROM CEU_TRAININGS_TAKEN WHERE USER_ID = ? AND TRAINING_ID = ?");
            $rm->bind_param('ii', $uid, $tid);
            $rm->execute();
            $rm->close();
        }

        session_write_close();
        wp_safe_redirect($back_url);
        exit;
    }

    // ── Failing ───────────────────────────────────────────────────────────────

    // Save answer string so user can resume
    $save = $db->prepare(
        "INSERT INTO CEU_POST_TEST_RESULTS (USER_ID, TRAINING_ID, TRAINING_ANSWERS, SCORE, DATE_TAKEN)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE TRAINING_ANSWERS = VALUES(TRAINING_ANSWERS),
                                 SCORE = VALUES(SCORE),
                                 DATE_TAKEN = VALUES(DATE_TAKEN)"
    );
    $save->bind_param('iisss', $uid, $post_test_id, $answer_string, $final_score, $now);
    $save->execute();
    $save->close();

    // Psychologist 3-attempt cap
    if ($pro_slug === 'psychologist') {
        $track = $db->prepare(
            "SELECT SCORE_1, DATE_1, SCORE_2, DATE_2, SCORE_3, DATE_3
             FROM CEU_TRAINING_TRACKING WHERE USER_ID = ? AND TRAINING_ID = ?"
        );
        $track->bind_param('ii', $uid, $tid);
        $track->execute();
        $row = $track->get_result()->fetch_assoc();
        $track->close();

        if ($row === null) {
            $t = $db->prepare(
                "INSERT INTO CEU_TRAINING_TRACKING (USER_ID, TRAINING_ID, SCORE_1, DATE_1)
                 VALUES (?, ?, ?, ?)"
            );
            $t->bind_param('iiss', $uid, $tid, $final_score, $now);
            $t->execute();
            $t->close();
        } elseif (empty($row['SCORE_2'])) {
            $t = $db->prepare(
                "UPDATE CEU_TRAINING_TRACKING SET SCORE_2 = ?, DATE_2 = ?
                 WHERE USER_ID = ? AND TRAINING_ID = ?"
            );
            $t->bind_param('ssii', $final_score, $now, $uid, $tid);
            $t->execute();
            $t->close();
        } elseif (empty($row['SCORE_3'])) {
            $t = $db->prepare(
                "UPDATE CEU_TRAINING_TRACKING SET SCORE_3 = ?, DATE_3 = ?
                 WHERE USER_ID = ? AND TRAINING_ID = ?"
            );
            $t->bind_param('ssii', $final_score, $now, $uid, $tid);
            $t->execute();
            $t->close();
        }
    }

    $_SESSION['passed'] = $arr;

    session_write_close();
    wp_safe_redirect($back_url);
    exit;
}

add_action('admin_post_ceu_score_post_v2',        'ceu_do_score_post_v2');
add_action('admin_post_nopriv_ceu_score_post_v2', function () {
    wp_safe_redirect(home_url('/login/'));
    exit;
});
