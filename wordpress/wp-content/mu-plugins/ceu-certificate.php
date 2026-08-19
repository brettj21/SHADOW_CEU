<?php
/**
 * Plugin Name: CEU Certificate
 * Description: Renders one certificate at /certificate/?cid=N — the WordPress port
 *              of the legacy CEU/cert.php, opened in a new tab from the
 *              Certificates tab of [ceu_coursework].
 *
 * TWO DELIBERATE DIFFERENCES FROM cert.php
 * ────────────────────────────────────────
 * 1. OWNERSHIP. The legacy page passed $_COOKIE['ceu'] to getCertById() as the
 *    user id, so the row it returned was chosen by a client-controlled value —
 *    edit the cookie in devtools and you read someone else's certificate. Here
 *    the id comes from the verified WordPress session, exactly as
 *    ceu-certificates.php already does for the list.
 *
 * 2. THE COURSE EVALUATION MODAL is not ported. It posted to the legacy app's
 *    /process/forms endpoint, which does not exist on this site, and cert.php
 *    itself has it switched off ("EVAL REMOVED 040620").
 *
 * ACCREDITATION NUMBERS — REQUIRED CONFIGURATION
 * ──────────────────────────────────────────────
 * The provider numbers printed on the certificate (NBCC ACEP, ASWB, NAADAC, the
 * three NYSED numbers, CCAPP, APA) live in the legacy app's secure_files, outside
 * both repos:
 *
 *     /var/www/vhosts/ceunits.com/secure_files/variables.php
 *
 * They are not reproduced here. They are regulatory identifiers on a document a
 * licensee submits to their board, so guessing or stale-copying them is not an
 * option: a wrong ACEP number on a CE certificate is a compliance problem, not a
 * cosmetic one.
 *
 * Two ways to supply them, in order of preference:
 *
 *   1. Leave CEU_CERT_SECURE_VARIABLES pointing at the legacy file. If the path is
 *      readable from this host, the real values are used and there is exactly one
 *      copy of them.
 *   2. If it is not readable, define the constants in wp-config.php. Copy them
 *      from variables.php — see ceu_certificate_accreditation() for the names.
 *
 * Until one of those is in place, /certificate/ renders a notice instead of a
 * certificate. That is deliberate: a certificate missing its provider numbers is
 * worse than no certificate, because it looks valid.
 */

// ─── Config ───────────────────────────────────────────────────────────────────

if (!defined('CEU_CERTIFICATE_SLUG')) {
    define('CEU_CERTIFICATE_SLUG', 'certificate');
}

// Logo, header and signature images still come from production, the same way
// CEU_CERT_IMAGE in ceu-certificates.php does.
if (!defined('CEU_CERT_ASSETS')) {
    define('CEU_CERT_ASSETS', 'https://www.ceunits.com');
}

if (!defined('CEU_CERT_SECURE_VARIABLES')) {
    define('CEU_CERT_SECURE_VARIABLES', '/var/www/vhosts/ceunits.com/secure_files/variables.php');
}

// ─── Accreditation values ─────────────────────────────────────────────────────

/**
 * Returns the provider numbers, or null when none are configured.
 *
 * The legacy file is included rather than parsed, which is how the legacy app
 * itself reads it. Output is buffered away and warnings silenced for the include
 * alone: variables.php may define names WordPress has already taken (DB_NAME is
 * the likely collision), and a redefinition warning printed mid-document would
 * corrupt the certificate.
 */
function ceu_certificate_accreditation() {
    static $loaded = null;
    if ($loaded !== null) return $loaded;

    if (!defined('NBCC') && is_readable(CEU_CERT_SECURE_VARIABLES)) {
        $level = error_reporting(E_ALL & ~E_WARNING & ~E_NOTICE & ~E_DEPRECATED);
        ob_start();
        include_once CEU_CERT_SECURE_VARIABLES;
        ob_end_clean();
        error_reporting($level);
    }

    $get = fn($name) => defined($name) ? constant($name) : '';

    $values = [
        'business' => $get('BUS_NAME') ?: $get('FULL_DISPLAY_NAME') ?: 'CEUnits.com',
        'address'  => $get('ADDRESS'),
        'nbcc'     => $get('NBCC'),
        'aswb'     => $get('ASWB'),
        'naadac'   => $get('NAADAC'),
        'ccapp'    => $get('CCAPP'),
        'apa'      => $get('APA'),
        'ny_lic'   => $get('NY_LIC'),
        'ny_lic2'  => $get('NY_LIC2'),
        'ny_lic3'  => $get('NY_LIC3'),
    ];

    // The four that actually appear as provider numbers on the document. Without
    // them there is nothing worth printing.
    $required = ['nbcc', 'aswb', 'naadac', 'ny_lic'];
    foreach ($required as $key) {
        if ($values[$key] === '') return $loaded = null;
    }

    return $loaded = $values;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

/**
 * The certificate, its author and its owner — or null if this user may not see it.
 */
function ceu_certificate_data($cid) {
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return null;

    $user_id = (int) get_user_meta(get_current_user_id(), '_ceu_id', true);
    $cid     = (int) $cid;
    if (!$user_id || !$cid || !function_exists('ceu_db_connect')) return null;

    $db = ceu_db_connect();
    if (!$db) return null;

    // USER_ID in the WHERE clause is what enforces ownership. It comes from the
    // WordPress session, never from the request or the 'ceu' cookie.
    $stmt = $db->prepare('SELECT * FROM CEU_CERTIFICATES WHERE ID = ? AND USER_ID = ? LIMIT 1');
    if (!$stmt) return null;
    $stmt->bind_param('ii', $cid, $user_id);
    $stmt->execute();
    $cert = $stmt->get_result()->fetch_assoc();
    $stmt->close();

    if (!$cert) return null;

    // Author, as getCertById() assembled it: the "Click Here" placeholder in
    // CEU_AUTHORS.AUTHOR means the real name is in AUTHOR_ABOUT.
    $cert['AUTHOR'] = '';
    $stmt = $db->prepare('SELECT a.AUTHOR, a.AUTHOR_ABOUT
                          FROM CEU_TRAININGS t
                          LEFT JOIN CEU_AUTHORS a ON t.AUTHOR_ID = a.ID
                          WHERE t.TRAINING_ID = ? LIMIT 1');
    if ($stmt) {
        $stmt->bind_param('i', $cert['TRAINING_ID']);
        $stmt->execute();
        if ($auth = $stmt->get_result()->fetch_assoc()) {
            $cert['AUTHOR'] = ($auth['AUTHOR'] ?? '') === 'Click Here'
                ? ($auth['AUTHOR_ABOUT'] ?? '')
                : ($auth['AUTHOR'] ?? '');
        }
        $stmt->close();
    }

    $stmt = $db->prepare('SELECT FIRST, LAST, STATE, LIC_NUM, PROFESSION
                          FROM CEU_USER WHERE ID = ? LIMIT 1');
    if (!$stmt) return null;
    $stmt->bind_param('i', $user_id);
    $stmt->execute();
    $user = $stmt->get_result()->fetch_assoc();
    $stmt->close();

    if (!$user) return null;

    return ['cert' => $cert, 'user' => $user];
}

/**
 * Display name for the profession, preferring the one recorded on the certificate.
 *
 * The certificate stores PROFESSION_ID; CEU_USER stores the slug. CEU_PROFESSIONS
 * (ceu-courses.php) maps slug → id, so it is reversed here, then the label comes
 * from ceu-profile.php.
 */
function ceu_certificate_profession($cert, $user) {
    $labels = function_exists('ceu_profile_professions') ? ceu_profile_professions() : [];
    $slug   = $user['PROFESSION'] ?? '';

    if (!empty($cert['PROFESSION_ID']) && defined('CEU_PROFESSIONS')) {
        $by_slug = unserialize(CEU_PROFESSIONS);
        if (is_array($by_slug)) {
            $found = array_search((int) $cert['PROFESSION_ID'], $by_slug, true);
            if ($found !== false) $slug = $found;
        }
    }

    return [$slug, $labels[$slug] ?? ''];
}

// ─── The page ─────────────────────────────────────────────────────────────────

add_action('template_redirect', function () {
    $path = trim(parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
    if ($path !== CEU_CERTIFICATE_SLUG) return;

    $data = ceu_certificate_data($_GET['cid'] ?? 0);

    // One message for "not yours", "no such id" and "not logged in" alike —
    // distinguishing them would confirm which certificate ids exist.
    if (!$data) {
        status_header(404);
        ceu_certificate_notice(
            'Certificate not available',
            'This certificate could not be found, or it does not belong to your account.'
        );
        exit;
    }

    $acc = ceu_certificate_accreditation();
    if (!$acc) {
        status_header(503);
        error_log('CEU certificate: accreditation constants unavailable — see the header of ceu-certificate.php');
        ceu_certificate_notice(
            'Certificate temporarily unavailable',
            'This certificate cannot be issued because the provider accreditation numbers are not configured on this server. Please contact support@ceunits.com.'
        );
        exit;
    }

    ceu_certificate_render($data['cert'], $data['user'], $acc);
    exit;
});

/** A plain standalone page — this route never renders inside the theme. */
function ceu_certificate_notice($title, $message) {
    ?><!DOCTYPE html>
    <html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?= esc_html($title) ?></title>
        <style>
            body { margin: 0; padding: 64px 24px; font: 16px/1.6 system-ui, sans-serif;
                   color: #0f172a; background: #f8fafc; text-align: center; }
            h1   { font-size: 1.3em; margin: 0 0 12px; color: #183e7d; }
            p    { margin: 0 auto; max-width: 460px; color: #475569; }
        </style>
    </head>
    <body>
        <h1><?= esc_html($title) ?></h1>
        <p><?= esc_html($message) ?></p>
    </body>
    </html><?php
}

function ceu_certificate_render($cert, $user, $acc) {
    $name = trim(($user['FIRST'] ?? '') . ' ' . stripslashes($user['LAST'] ?? ''));

    // NY licensees report contact hours; everyone else, CE credit hours.
    $credit_name = ($user['STATE'] ?? '') === 'NY' ? 'Contact Hours' : 'CE Credit Hours';

    // LIVE_COURSES comes from the same secure file as the provider numbers. If it
    // is absent, online is the safe answer — it is what all but one course is.
    $live      = defined('LIVE_COURSES') ? (array) LIVE_COURSES : [];
    $is_live   = in_array($cert['TRAINING_ID'], $live);

    // Training 234 is split across three delivery formats; cert.php spells it out.
    $training_type = (string) $cert['TRAINING_ID'] === '234'
        ? '9 Hours - Recorded asynchronous non-interactive distance learning<br>'
          . '1 Hour - Synchronous interactive distance learning<br>'
          . '8 Hours - Reading-based asynchronous non-interactive distance learning'
        : ($is_live ? 'Live Course' : 'Online Course/Self Study');

    [$prof_slug, $prof_label] = ceu_certificate_profession($cert, $user);

    $completed = !empty($cert['DATE_COMPLETED']) && strtotime($cert['DATE_COMPLETED'])
        ? date('M j, Y', strtotime($cert['DATE_COMPLETED']))
        : (string) ($cert['DATE_COMPLETED'] ?? '');

    // NBCC hours are labelled as such on the MFT/NBCC certificate.
    $credits = rtrim(rtrim(number_format((float) $cert['CREDITS'], 2), '0'), '.')
        . ($prof_slug === 'mft-lcsw' ? ' NBCC' : '') . ' ' . $credit_name;

    $row = function ($label, $value) {
        if ($value === '' || $value === null) return;
        ?>
        <div class="cert-row">
            <div class="cert-label"><?= esc_html($label) ?></div>
            <div class="cert-value"><?= wp_kses($value, ['br' => []]) ?></div>
        </div>
        <?php
    };
    ?><!DOCTYPE html>
    <html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Certificate — <?= esc_html($acc['business']) ?></title>
        <style>
            body { margin: 0; padding: 20px; background: #fff; color: #000;
                   font: 12px/1.5 Arial, Helvetica, sans-serif; }
            .cert-actions { width: 740px; max-width: 100%; margin: 0 auto 10px;
                            text-align: right; }
            .cert-btn { display: inline-block; padding: 8px 16px; margin-left: 8px;
                        border: 1px solid #183e7d; border-radius: 6px; background: #fff;
                        color: #183e7d; font-size: 13px; font-weight: 600;
                        text-decoration: none; cursor: pointer; font-family: inherit; }
            .cert-btn:hover { background: #183e7d; color: #fff; }
            .cert-outer { width: 740px; max-width: 100%; margin: 0 auto;
                          border: 1px solid #999; padding: 20px; box-sizing: border-box; }
            .cert-inner { border: 1px solid #999; padding: 15px; text-align: center; }
            .cert-logo  { margin-bottom: 10px; max-width: 100%; }
            .cert-addr  { color: #999; }
            .cert-name  { color: #2e3083; font-size: 24px; font-weight: 700;
                          font-family: "Times New Roman", Times, serif; }
            .cert-rule  { width: 660px; max-width: 100%; color: #accddc; }
            .cert-body  { padding: 0 30px; text-align: left; }
            .cert-row   { display: flex; gap: 20px; padding: 3px 0; }
            .cert-label { width: 25%; text-align: right; color: #666;
                          text-transform: uppercase; }
            .cert-value { width: 70%; }
            .cert-providers { background: #e6e7e9; padding: 10px; margin-top: 15px;
                              text-align: left; }
            .cert-providers table { border-collapse: collapse; margin: 0 auto; }
            .cert-providers td { border: 1px solid #000; padding: 5px; text-align: left; }
            .cert-notes { font-size: 12px; color: #666; text-align: left; margin-top: 14px; }
            .cert-sig   { text-align: left; margin-top: 15px; }
            @media print { .cert-actions { display: none; } body { padding: 0; } }
        </style>
    </head>
    <body>
        <div class="cert-actions">
            <a class="cert-btn" href="<?= esc_url(home_url('/' . (defined('CEU_COURSEWORK_SLUG') ? CEU_COURSEWORK_SLUG : 'user') . '/#certificates')) ?>">Back</a>
            <button type="button" class="cert-btn" onclick="window.print()">Print</button>
        </div>

        <div class="cert-outer">
            <div class="cert-inner">
                <img class="cert-logo" src="<?= esc_url(CEU_CERT_ASSETS . '/images/logo_main_v2.png') ?>"
                     width="203" height="35" alt="<?= esc_attr($acc['business']) ?>">
                <?php if ($acc['address']) : ?>
                    <div class="cert-addr"><?= wp_kses(str_replace('<br>', ' | ', $acc['address']), ['br' => []]) ?></div>
                <?php endif; ?>
                <br>
                <img class="cert-logo" src="<?= esc_url(CEU_CERT_ASSETS . '/images/hdr_cert.gif') ?>"
                     width="356" height="48" alt="Certificate">
                <br><br>

                This is to certify that <?= esc_html($name) ?> has completed, in its entirety, the<br>
                following Continuing Education Activity sponsored by CEUnits.com.
                <br><br>
                <span class="cert-name"><?= esc_html($name) ?></span>
                <hr class="cert-rule">

                <div class="cert-body">
                    <?php
                    $row('Profession', $prof_label);
                    $row('Training/Course Title', esc_html($cert['TRAINING_TITLE'] ?? ''));
                    $row('Training Type', $training_type);
                    $row(strtoupper($credit_name), esc_html($credits));
                    $row('Instructor/Author', esc_html($cert['AUTHOR'] ?? ''));
                    $row('Completion Date', esc_html($completed));
                    $row('License #', esc_html($user['LIC_NUM'] ?? ''));
                    ?>
                </div>

                <div class="cert-providers">
                    <b>Continuing Education Provider Numbers</b><br><br>
                    <table>
                        <tr>
                            <td><b>APA</b> <?= esc_html($acc['apa']) ?></td>
                            <td><b>ASWB</b> <?= esc_html($acc['aswb']) ?></td>
                        </tr>
                        <tr>
                            <td><b>CCAPP</b> <?= esc_html($acc['ccapp']) ?></td>
                            <td><?= esc_html($acc['nbcc']) ?></td>
                        </tr>
                        <tr>
                            <td><b>NAADAC</b> <?= esc_html($acc['naadac']) ?></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <b>NYSED</b> Board of Social Work — <?= esc_html($acc['ny_lic']) ?><br>
                                <b>NYSED</b> Board of Licensed Mental Health Counselors — <?= esc_html($acc['ny_lic2']) ?><br>
                                <b>NYSED</b> Board of Psychology — <?= esc_html($acc['ny_lic3']) ?>
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="cert-notes">
                    CEUnits.com has been approved by NBCC as an Approved Continuing Education
                    Provider, ACEP No. <?= esc_html($acc['nbcc']) ?>. Programs that do not qualify
                    for NBCC credit are clearly identified. CEUnits is solely responsible for all
                    aspects of the programs.<br><br>
                    CEUnits.com is recognized by the New York State Education Department's State
                    Board for Social Work as an approved provider of continuing education for
                    licensed social workers <?= esc_html($acc['ny_lic']) ?><br><br>
                    CEUnits.com is recognized by the New York State Education Department's State
                    Board for Mental Health Practitioners as an approved provider of continuing
                    education for licensed mental health counselors <?= esc_html($acc['ny_lic2']) ?><br><br>
                    <?= esc_html($acc['apa']) ?><br>888-702-9680<br><br>
                    CEUnits.com is recognized by the New York State Education Department's State
                    Board for Psychology as an approved provider of continuing education for
                    licensed psychologists <?= esc_html($acc['ny_lic3']) ?><br><br>
                    CEUnits (Provider # 1112), is approved as an ACE provider to offer social work
                    continuing education by the Association of Social Work Boards (ASWB) Approved
                    Continuing Education (ACE) program. Regulatory boards are the final authority
                    on courses accepted for continuing education credit. ACE provider approval
                    period: 6/5/24 to 6/5/27. Social workers completing this course receive the
                    number of continuing education credits and the type of credits stated on the
                    course certificate.
                </div>

                <div class="cert-sig">
                    <img src="<?= esc_url(CEU_CERT_ASSETS . '/images/sig_bj.gif') ?>"
                         width="120" height="50" alt=""><br>
                    Brett Johnson<br>
                    CEUnits Representative
                    <br><br>
                    info@ceunits.com<br>
                    <?= wp_kses($acc['address'], ['br' => []]) ?>
                </div>
            </div>
        </div>
    </body>
    </html><?php
}
