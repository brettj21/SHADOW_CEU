<?php
/**
 * Plugin Name: CEU Profile
 * Description: "Personal Information" panel for /user/ — a compact read-only
 *              summary card plus an Edit button that opens a modal holding the
 *              full form, prefilled from CEU_DB.CEU_USER.
 *
 * WHY A MODAL
 * ───────────
 * The old layout tried to fit ~15 form fields into a narrow left column, so the
 * inputs overflowed the box. The summary card now shows only what you read at a
 * glance; editing happens in a dialog with room for a two-column form.
 *
 * PLACEMENT
 * ─────────
 * Drop [ceu_profile] on the /user page in Elementor, in the left column, in
 * place of the old form widget.
 *
 * FIELDS
 * ──────
 * Mirrors the legacy edit form (CEU/user/edit_user.php + classes/db/User.class.php
 * editUser()), with two deliberate differences:
 *   - SSN is omitted. The legacy form displayed it but editUser() never saved it,
 *     so the field silently discarded input. Not worth reproducing for PII.
 *   - Password change is NOT here yet — see the note at the bottom of this file.
 */

// Matches CEU_REGISTER_MIN_PASS in ceu-register.php — kept as its own constant so
// this file does not depend on that one having loaded.
if (!defined('CEU_PROFILE_MIN_PASS')) {
    define('CEU_PROFILE_MIN_PASS', 8);
}

// ─── Reference data ───────────────────────────────────────────────────────────

// PROFESSION is stored as the slug (verified against CEU_USER: 'social-workers',
// 'mft-lcsw', …), not the display name and not the numeric ID.
function ceu_profile_professions() {
    return [
        'nursing'             => 'Nursing',
        'social-workers'      => 'Social Workers',
        'mft-lcsw'            => 'MFT / NBCC',
        'psychologist'        => 'Psychologist',
        'insurance'           => 'Insurance',
        'counselor-addiction' => 'Counselor / Addiction Professional',
    ];
}

// QUESTION is an int 1-5, matching the legacy option values exactly.
function ceu_profile_questions() {
    return [
        1 => 'What is the name of your elementary school?',
        2 => 'What was the name of your childhood pet?',
        3 => 'What street did you live on as a child?',
        4 => "What is your father's middle name?",
        5 => 'What school did you graduate from?',
    ];
}

// STATE is stored as the 2-letter code.
function ceu_profile_states() {
    return [
        'AL' => 'Alabama', 'AK' => 'Alaska', 'AZ' => 'Arizona', 'AR' => 'Arkansas',
        'CA' => 'California', 'CO' => 'Colorado', 'CT' => 'Connecticut', 'DE' => 'Delaware',
        'DC' => 'District of Columbia', 'FL' => 'Florida', 'GA' => 'Georgia', 'HI' => 'Hawaii',
        'ID' => 'Idaho', 'IL' => 'Illinois', 'IN' => 'Indiana', 'IA' => 'Iowa',
        'KS' => 'Kansas', 'KY' => 'Kentucky', 'LA' => 'Louisiana', 'ME' => 'Maine',
        'MD' => 'Maryland', 'MA' => 'Massachusetts', 'MI' => 'Michigan', 'MN' => 'Minnesota',
        'MS' => 'Mississippi', 'MO' => 'Missouri', 'MT' => 'Montana', 'NE' => 'Nebraska',
        'NV' => 'Nevada', 'NH' => 'New Hampshire', 'NJ' => 'New Jersey', 'NM' => 'New Mexico',
        'NY' => 'New York', 'NC' => 'North Carolina', 'ND' => 'North Dakota', 'OH' => 'Ohio',
        'OK' => 'Oklahoma', 'OR' => 'Oregon', 'PA' => 'Pennsylvania', 'RI' => 'Rhode Island',
        'SC' => 'South Carolina', 'SD' => 'South Dakota', 'TN' => 'Tennessee', 'TX' => 'Texas',
        'UT' => 'Utah', 'VT' => 'Vermont', 'VA' => 'Virginia', 'WA' => 'Washington',
        'WV' => 'West Virginia', 'WI' => 'Wisconsin', 'WY' => 'Wyoming',
    ];
}

// ─── Where to land after saving ───────────────────────────────────────────────
// The permalink of the page holding the shortcode, so this keeps working if the
// panel is ever placed somewhere other than /user/. Falls back to the coursework
// page, then the home page.

function ceu_profile_return_url() {
    $permalink = function_exists('get_permalink') ? get_permalink() : '';
    if ($permalink) return $permalink;

    // CEU_COURSEWORK_SLUG comes from ceu-certificates.php, which mu-plugins load
    // earlier alphabetically — but don't depend on that.
    $slug = defined('CEU_COURSEWORK_SLUG') ? CEU_COURSEWORK_SLUG : 'user';
    return home_url('/' . $slug . '/');
}

// ─── Load the current user's row ──────────────────────────────────────────────

function ceu_profile_user() {
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in()) return null;

    $user_id = (int) get_user_meta(get_current_user_id(), '_ceu_id', true);
    if (!$user_id || !function_exists('ceu_db_connect')) return null;

    $db = ceu_db_connect();
    if (!$db) return null;

    // Read fresh from the DB rather than the session, so the card reflects an
    // edit immediately after saving.
    $r = $db->query('SELECT ID, FIRST, LAST, EMAIL, ADDRESS_1, ADDRESS_2, CITY, STATE, ZIP,
                            PHONE, QUESTION, SECURITY_1, PROFESSION, DOB, LIC_EXP, LIC_NUM
                     FROM CEU_USER WHERE ID = ' . $user_id . ' LIMIT 1');
    if (!$r) return null;

    $row = $r->fetch_assoc();
    return $row ?: null;
}

// ─── The panel ────────────────────────────────────────────────────────────────

function ceu_profile_html() {
    $u = ceu_profile_user();
    if (!$u) return '';

    $professions = ceu_profile_professions();
    $questions   = ceu_profile_questions();
    $states      = ceu_profile_states();

    $name  = trim(($u['FIRST'] ?? '') . ' ' . ($u['LAST'] ?? ''));
    $csz   = trim(trim(($u['CITY'] ?? '') . ', ' . ($u['STATE'] ?? ''), ', ') . ' ' . ($u['ZIP'] ?? ''));
    $prof  = $professions[$u['PROFESSION'] ?? ''] ?? '';

    // Datetime columns → the Y-m-d that <input type="date"> expects.
    $as_date = function ($v) {
        if (empty($v) || strpos((string) $v, '0000') === 0) return '';
        $ts = strtotime($v);
        return $ts ? date('Y-m-d', $ts) : '';
    };
    $dob     = $as_date($u['DOB'] ?? '');
    $lic_exp = $as_date($u['LIC_EXP'] ?? '');

    $saved  = isset($_GET['profile']) && $_GET['profile'] === 'saved';
    $failed = isset($_GET['profile']) && $_GET['profile'] === 'error';

    // Password change reports through its own query arg so the two panels never
    // claim each other's outcome.
    $pw_messages = [
        'saved'    => ['ok',  'Your password has been changed.'],
        'wrong'    => ['bad', 'That current password is not right. Nothing was changed.'],
        'mismatch' => ['bad', 'The two new passwords did not match. Nothing was changed.'],
        'short'    => ['bad', 'Your new password must be at least ' . CEU_PROFILE_MIN_PASS . ' characters.'],
        'error'    => ['bad', 'Sorry — your password could not be changed. Please try again.'],
    ];
    $pw_note = $pw_messages[$_GET['password'] ?? ''] ?? null;

    ob_start();
    ?>
    <div id="ceu-profile" class="ceu-profile-scope">
        <?php if ($saved) : ?>
            <div class="ceu-note ceu-note-ok">Your information has been updated.</div>
        <?php elseif ($failed) : ?>
            <div class="ceu-note ceu-note-bad">Sorry — those changes could not be saved. Please try again.</div>
        <?php endif; ?>

        <?php if ($pw_note) : ?>
            <div class="ceu-note ceu-note-<?= esc_attr($pw_note[0]) ?>"><?= esc_html($pw_note[1]) ?></div>
        <?php endif; ?>

        <div class="ceu-pcard">
            <div class="ceu-pcard-head">
                <h2 class="ceu-pcard-title">Personal Information</h2>
                <div class="ceu-pcard-actions">
                    <button type="button" class="ceu-pbtn" data-ceu-open="ceu-profile-modal">Edit</button>
                    <button type="button" class="ceu-pbtn" data-ceu-open="ceu-password-modal">Change password</button>
                </div>
            </div>

            <dl class="ceu-pdl">
                <div class="ceu-pitem">
                    <dt>Name</dt>
                    <dd><?= esc_html($name ?: '—') ?></dd>
                </div>
                <div class="ceu-pitem">
                    <dt>Address</dt>
                    <dd>
                        <?= esc_html($u['ADDRESS_1'] ?: '—') ?>
                        <?php if (!empty($u['ADDRESS_2'])) : ?><br><?= esc_html($u['ADDRESS_2']) ?><?php endif; ?>
                        <?php if ($csz) : ?><br><?= esc_html($csz) ?><?php endif; ?>
                    </dd>
                </div>
                <div class="ceu-pitem">
                    <dt>Phone</dt>
                    <dd><?= esc_html($u['PHONE'] ?: '—') ?></dd>
                </div>
                <div class="ceu-pitem">
                    <dt>Email</dt>
                    <dd class="ceu-pbreak"><?= esc_html($u['EMAIL'] ?: '—') ?></dd>
                </div>
                <div class="ceu-pitem">
                    <dt>Profession</dt>
                    <dd><?= esc_html($prof ?: '—') ?></dd>
                </div>
                <div class="ceu-pitem">
                    <dt>Licence</dt>
                    <dd>
                        <?= esc_html($u['LIC_NUM'] ?: '—') ?>
                        <?php if ($lic_exp) : ?>
                            <span class="ceu-pmuted">expires <?= esc_html(date('M j, Y', strtotime($lic_exp))) ?></span>
                        <?php endif; ?>
                    </dd>
                </div>
            </dl>
        </div>

        <!-- ── Edit dialog ── -->
        <div class="ceu-modal" id="ceu-profile-modal" hidden>
            <div class="ceu-modal-backdrop" data-ceu-close></div>

            <div class="ceu-modal-box" role="dialog" aria-modal="true" aria-labelledby="ceu-modal-title">
                <div class="ceu-modal-head">
                    <h3 id="ceu-modal-title">Edit your information</h3>
                    <button type="button" class="ceu-modal-x" data-ceu-close aria-label="Close">&times;</button>
                </div>

                <form class="ceu-modal-body" method="post"
                      action="<?= esc_url(admin_url('admin-post.php')) ?>">
                    <input type="hidden" name="action" value="ceu_update_profile">
                    <input type="hidden" name="redirect_to" value="<?= esc_url(ceu_profile_return_url()) ?>">
                    <?php wp_nonce_field('ceu_update_profile', '_ceu_profile_nonce'); ?>

                    <p class="ceu-fieldset-label">Contact</p>
                    <div class="ceu-fgrid">
                        <label class="ceu-field ceu-field-wide">
                            <span>Address</span>
                            <input type="text" name="address_1" maxlength="128" value="<?= esc_attr($u['ADDRESS_1']) ?>">
                        </label>
                        <label class="ceu-field ceu-field-wide">
                            <span>Address 2</span>
                            <input type="text" name="address_2" maxlength="128" value="<?= esc_attr($u['ADDRESS_2']) ?>">
                        </label>
                        <label class="ceu-field">
                            <span>City</span>
                            <input type="text" name="city" maxlength="64" value="<?= esc_attr($u['CITY']) ?>">
                        </label>
                        <label class="ceu-field">
                            <span>State</span>
                            <select name="state">
                                <option value="">Select a state</option>
                                <?php foreach ($states as $code => $label) : ?>
                                    <option value="<?= esc_attr($code) ?>" <?= selected($u['STATE'], $code, false) ?>>
                                        <?= esc_html($label) ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </label>
                        <label class="ceu-field">
                            <span>ZIP</span>
                            <input type="text" name="zip" maxlength="16" value="<?= esc_attr($u['ZIP']) ?>">
                        </label>
                        <label class="ceu-field">
                            <span>Phone</span>
                            <input type="tel" name="phone" maxlength="16" value="<?= esc_attr($u['PHONE']) ?>">
                        </label>
                        <label class="ceu-field ceu-field-wide">
                            <span>Email</span>
                            <input type="email" name="email" maxlength="64" required value="<?= esc_attr($u['EMAIL']) ?>">
                        </label>
                    </div>

                    <p class="ceu-fieldset-label">Licence</p>
                    <div class="ceu-fgrid">
                        <label class="ceu-field">
                            <span>Date of birth</span>
                            <input type="date" name="dob" value="<?= esc_attr($dob) ?>">
                        </label>
                        <label class="ceu-field">
                            <span>Licence number</span>
                            <input type="text" name="lic_num" maxlength="20" value="<?= esc_attr($u['LIC_NUM']) ?>">
                        </label>
                        <label class="ceu-field">
                            <span>Licence expiration</span>
                            <input type="date" name="lic_exp" value="<?= esc_attr($lic_exp) ?>">
                        </label>
                        <label class="ceu-field">
                            <span>Profession</span>
                            <select name="profession">
                                <option value="">Select a profession</option>
                                <?php foreach ($professions as $slug => $label) : ?>
                                    <option value="<?= esc_attr($slug) ?>" <?= selected($u['PROFESSION'], $slug, false) ?>>
                                        <?= esc_html($label) ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </label>
                    </div>

                    <p class="ceu-fieldset-label">Security question</p>
                    <div class="ceu-fgrid">
                        <label class="ceu-field ceu-field-wide">
                            <span>Question</span>
                            <select name="question">
                                <option value="">Select a question</option>
                                <?php foreach ($questions as $id => $label) : ?>
                                    <option value="<?= (int) $id ?>" <?= selected((int) $u['QUESTION'], $id, false) ?>>
                                        <?= esc_html($label) ?>
                                    </option>
                                <?php endforeach; ?>
                            </select>
                        </label>
                        <label class="ceu-field ceu-field-wide">
                            <span>Answer</span>
                            <input type="text" name="security" maxlength="32" value="<?= esc_attr($u['SECURITY_1']) ?>">
                        </label>
                    </div>

                    <div class="ceu-modal-foot">
                        <button type="button" class="ceu-pbtn ceu-pbtn-ghost" data-ceu-close>Cancel</button>
                        <button type="submit" class="ceu-pbtn ceu-pbtn-primary">Save changes</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- ── Change password dialog ── -->
        <div class="ceu-modal" id="ceu-password-modal" hidden>
            <div class="ceu-modal-backdrop" data-ceu-close></div>

            <div class="ceu-modal-box ceu-modal-box-sm" role="dialog" aria-modal="true"
                 aria-labelledby="ceu-password-title">
                <div class="ceu-modal-head">
                    <h3 id="ceu-password-title">Change your password</h3>
                    <button type="button" class="ceu-modal-x" data-ceu-close aria-label="Close">&times;</button>
                </div>

                <form class="ceu-modal-body" method="post"
                      action="<?= esc_url(admin_url('admin-post.php')) ?>">
                    <input type="hidden" name="action" value="ceu_update_password">
                    <input type="hidden" name="redirect_to" value="<?= esc_url(ceu_profile_return_url()) ?>">
                    <?php wp_nonce_field('ceu_update_password', '_ceu_password_nonce'); ?>

                    <div class="ceu-fgrid">
                        <label class="ceu-field ceu-field-wide">
                            <span>Current password</span>
                            <input type="password" name="current_pass" required
                                   autocomplete="current-password">
                        </label>
                        <label class="ceu-field ceu-field-wide">
                            <span>New password</span>
                            <input type="password" name="new_pass" required
                                   minlength="<?= (int) CEU_PROFILE_MIN_PASS ?>"
                                   autocomplete="new-password">
                            <small class="ceu-phint">Minimum <?= (int) CEU_PROFILE_MIN_PASS ?> characters</small>
                        </label>
                        <label class="ceu-field ceu-field-wide">
                            <span>Confirm new password</span>
                            <input type="password" name="confirm_pass" required
                                   minlength="<?= (int) CEU_PROFILE_MIN_PASS ?>"
                                   autocomplete="new-password">
                        </label>
                    </div>

                    <div class="ceu-modal-foot">
                        <button type="button" class="ceu-pbtn ceu-pbtn-ghost" data-ceu-close>Cancel</button>
                        <button type="submit" class="ceu-pbtn ceu-pbtn-primary">Change password</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <?php
    return ob_get_clean();
}

add_shortcode('ceu_profile', function () {
    $html = ceu_profile_html();
    if ($html) $GLOBALS['ceu_profile_rendered'] = true;
    return $html;
});

// ─── Save handler ─────────────────────────────────────────────────────────────

function ceu_do_update_profile() {
    $back = !empty($_POST['redirect_to'])
        ? esc_url_raw($_POST['redirect_to'])
        : ceu_profile_return_url();

    $fail = function () use ($back) {
        wp_safe_redirect(add_query_arg('profile', 'error', $back));
        exit;
    };

    if (!wp_verify_nonce($_POST['_ceu_profile_nonce'] ?? '', 'ceu_update_profile')) $fail();
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in())               $fail();

    $user_id = (int) get_user_meta(get_current_user_id(), '_ceu_id', true);
    if (!$user_id || !function_exists('ceu_db_connect')) $fail();

    $db = ceu_db_connect();
    if (!$db) $fail();

    // ── Validate ──────────────────────────────────────────────────────────────
    $email = sanitize_email($_POST['email'] ?? '');
    if (!$email || !is_email($email)) $fail();

    $states      = ceu_profile_states();
    $professions = ceu_profile_professions();
    $questions   = ceu_profile_questions();

    $state = strtoupper(trim($_POST['state'] ?? ''));
    if ($state !== '' && !isset($states[$state])) $fail();

    // Reject anything not on the list — the legacy form's empty option wrote the
    // literal string "Profession" into 281 rows. Don't add to that.
    $profession = trim($_POST['profession'] ?? '');
    if ($profession !== '' && !isset($professions[$profession])) $fail();

    $question = (int) ($_POST['question'] ?? 0);
    if ($question !== 0 && !isset($questions[$question])) $fail();

    // <input type="date"> gives Y-m-d; the columns are datetime.
    $to_datetime = function ($v) {
        $v = trim((string) $v);
        if ($v === '') return null;
        $ts = strtotime($v);
        return $ts ? date('Y-m-d', $ts) . ' 00:00:00' : null;
    };
    $dob     = $to_datetime($_POST['dob'] ?? '');
    $lic_exp = $to_datetime($_POST['lic_exp'] ?? '');

    $address_1 = sanitize_text_field($_POST['address_1'] ?? '');
    $address_2 = sanitize_text_field($_POST['address_2'] ?? '');
    $city      = sanitize_text_field($_POST['city'] ?? '');
    $zip       = sanitize_text_field($_POST['zip'] ?? '');
    $phone     = sanitize_text_field($_POST['phone'] ?? '');
    $lic_num   = sanitize_text_field($_POST['lic_num'] ?? '');
    $security  = sanitize_text_field($_POST['security'] ?? '');

    // ── Write ─────────────────────────────────────────────────────────────────
    // Prepared statement — the legacy editUser() concatenated $_POST straight
    // into SQL and keyed the WHERE off a cookie.
    $sql = 'UPDATE CEU_USER SET
                EMAIL = ?, ADDRESS_1 = ?, ADDRESS_2 = ?, CITY = ?, STATE = ?, ZIP = ?,
                PHONE = ?, PROFESSION = ?, DOB = ?, LIC_EXP = ?, LIC_NUM = ?,
                QUESTION = ?, SECURITY_1 = ?
            WHERE ID = ?';

    $stmt = $db->prepare($sql);
    if (!$stmt) $fail();

    $stmt->bind_param(
        'sssssssssssisi',
        $email, $address_1, $address_2, $city, $state, $zip,
        $phone, $profession, $dob, $lic_exp, $lic_num,
        $question, $security, $user_id
    );

    $ok = $stmt->execute();
    $stmt->close();
    if (!$ok) $fail();

    // ── Refresh the cached session row ────────────────────────────────────────
    // ceu-certificates.php reads FIRST/LAST/LIC_EXP from here, so a stale copy
    // would show the old licence expiry until the next login.
    $r = $db->query('SELECT * FROM CEU_USER WHERE ID = ' . $user_id . ' LIMIT 1');
    if ($r && ($row = $r->fetch_assoc())) {
        if (session_status() === PHP_SESSION_ACTIVE) {
            $_SESSION['session_data'] = [$row];
        }
        update_user_meta(get_current_user_id(), '_ceu_row', $row);
    }

    wp_safe_redirect(add_query_arg('profile', 'saved', $back));
    exit;
}

add_action('admin_post_ceu_update_profile', 'ceu_do_update_profile');

// ─── Change password ──────────────────────────────────────────────────────────
// CEU_USER.PASS is sha256(password) — the same scheme ceu-auth.php authenticates
// against and ceu-register.php writes.
//
// The catch is that PASS doubles as a session key: ceu-auth.php copies it into
// the 'ceuSession' cookie at login, caches the whole row in the _ceu_row user
// meta, and keeps a copy in $_SESSION. Writing a new PASS without refreshing all
// three leaves the browser holding a key that no longer matches the row, which
// legacy CEU code reads as a dead session. So this updates every copy in the
// same request. The WordPress auth cookie is independent of PASS, so the user
// stays logged in throughout.

function ceu_do_update_password() {
    $back = !empty($_POST['redirect_to'])
        ? esc_url_raw($_POST['redirect_to'])
        : ceu_profile_return_url();

    // Every exit reports through ?password= so the panel can say what happened.
    $fail = function ($why) use ($back) {
        wp_safe_redirect(add_query_arg('password', $why, $back));
        exit;
    };

    if (!wp_verify_nonce($_POST['_ceu_password_nonce'] ?? '', 'ceu_update_password')) $fail('error');
    if (!function_exists('ceu_is_logged_in') || !ceu_is_logged_in())                  $fail('error');

    $user_id = (int) get_user_meta(get_current_user_id(), '_ceu_id', true);
    if (!$user_id || !function_exists('ceu_db_connect')) $fail('error');

    $current = (string) ($_POST['current_pass'] ?? '');
    $new     = (string) ($_POST['new_pass'] ?? '');
    $confirm = (string) ($_POST['confirm_pass'] ?? '');

    // Checked before touching the database, cheapest first.
    if ($new !== $confirm)                        $fail('mismatch');
    if (strlen($new) < CEU_PROFILE_MIN_PASS)      $fail('short');

    $db = ceu_db_connect();
    if (!$db) $fail('error');

    // Prove the current password before changing it — the WordPress session
    // alone is not enough to re-key an account.
    $stmt = $db->prepare('SELECT PASS FROM CEU_USER WHERE ID = ? LIMIT 1');
    if (!$stmt) $fail('error');
    $stmt->bind_param('i', $user_id);
    $stmt->execute();
    $row = $stmt->get_result()->fetch_assoc();
    $stmt->close();

    if (!$row) $fail('error');
    if (!hash_equals((string) $row['PASS'], hash('sha256', $current))) $fail('wrong');

    $hash = hash('sha256', $new);

    $stmt = $db->prepare('UPDATE CEU_USER SET PASS = ? WHERE ID = ?');
    if (!$stmt) $fail('error');
    $stmt->bind_param('si', $hash, $user_id);
    $ok = $stmt->execute();
    $stmt->close();
    if (!$ok) $fail('error');

    // ── Re-key the session in this same request ───────────────────────────────
    // Same three places, and the same cookie expiry, that ceu-auth.php sets at
    // login. Miss any one and the next page load looks logged out to legacy code.
    $r = $db->query('SELECT * FROM CEU_USER WHERE ID = ' . $user_id . ' LIMIT 1');
    if ($r && ($fresh = $r->fetch_assoc())) {
        if (session_status() === PHP_SESSION_ACTIVE) {
            $_SESSION['session_data'] = [$fresh];
        }
        update_user_meta(get_current_user_id(), '_ceu_row', $fresh);

        if (!headers_sent()) {
            $exp = mktime(0, 0, 0, 12, 31, (int) date('Y') + 1);
            setcookie('ceuSession', (string) $fresh['PASS'], $exp, '/');
            $_COOKIE['ceuSession'] = (string) $fresh['PASS'];
        }
    }

    wp_safe_redirect(add_query_arg('password', 'saved', $back));
    exit;
}

add_action('admin_post_ceu_update_password', 'ceu_do_update_password');

// ─── Styles + dialog behaviour ────────────────────────────────────────────────

add_action('wp_footer', function () {
    if (empty($GLOBALS['ceu_profile_rendered'])) return;
    ?>
    <script>
    (function () {
        function init() {
            // Two dialogs now — edit details and change password — so openers name
            // their target: data-ceu-open="<modal id>".
            var openers = document.querySelectorAll('[data-ceu-open]');
            if (!openers.length) return;

            // ── Move the dialogs to <body> ────────────────────────────────────
            // They are authored inside the panel, which sits inside an Elementor
            // column. Any ancestor with a transform, a filter or its own z-index
            // makes a stacking context, and a fixed-position child cannot escape
            // it — which is why the dialogs opened UNDER the sticky header even
            // at z-index 99999. Re-parenting to <body> puts them in the page's
            // top-level stacking context, where their z-index counts.
            //
            // The wrapper carries .ceu-profile-scope so every style below still
            // applies: the panel's CSS is scoped to that class, not to #ceu-profile,
            // precisely so the dialogs keep their styling after this move.
            var portal = document.querySelector('.ceu-profile-portal');
            if (!portal) {
                portal = document.createElement('div');
                portal.className = 'ceu-profile-scope ceu-profile-portal';
                document.body.appendChild(portal);
            }
            document.querySelectorAll('.ceu-modal').forEach(function (m) {
                portal.appendChild(m);
            });

            var lastFocus = null;
            var current   = null;

            function open(modal) {
                if (!modal) return;
                lastFocus = document.activeElement;
                current   = modal;
                modal.hidden = false;
                document.body.style.overflow = 'hidden';
                var first = modal.querySelector('input, select, textarea');
                if (first) first.focus();
            }

            function close() {
                if (!current) return;
                current.hidden = true;
                current = null;
                document.body.style.overflow = '';
                if (lastFocus) lastFocus.focus();
            }

            openers.forEach(function (b) {
                b.addEventListener('click', function () {
                    open(document.getElementById(b.dataset.ceuOpen));
                });
            });

            document.querySelectorAll('[data-ceu-close]').forEach(function (b) {
                b.addEventListener('click', close);
            });

            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape') close();
            });
        }

        document.readyState === 'loading'
            ? document.addEventListener('DOMContentLoaded', init)
            : init();
    })();
    </script>

    <style>
    /* Stated rather than inherited from the theme: the fields are width:100% with
       padding and a border, so under content-box they overflow their dialog. */
    .ceu-profile-scope, .ceu-profile-scope *, .ceu-profile-scope *::before, .ceu-profile-scope *::after {
        box-sizing: border-box;
    }

    .ceu-profile-scope {
        --ceu-blue:  #2563eb;
        --ceu-ink:   #0f172a;
        --ceu-muted: #64748b;
        --ceu-line:  #e2e8f0;
        --ceu-bg:    #f8fafc;
        /* The brand navy from Elementor's global kit (post-48.css) — the colour
           of the contact card's border and icon directly below this panel. */
        --ceu-navy:  #183e7d;

        font-family: inherit;
        color: var(--ceu-ink);
    }

    /* ── Save/error notice ── */
    .ceu-profile-scope .ceu-note {
        padding: 11px 14px;
        border-radius: 8px;
        margin-bottom: 14px;
        font-size: .9em;
        font-weight: 600;
    }
    .ceu-profile-scope .ceu-note-ok  { background: #dbeafe; color: #1d4ed8; }
    .ceu-profile-scope .ceu-note-bad { background: #fee2e2; color: #b91c1c; }

    /* ── Summary card ── */
    /* Deliberately matched to the contact card that sits under it in the same
       column: same navy keyline, same corner radius. A pale grey border made this
       panel read as secondary to a card that is only support details. */
    .ceu-profile-scope .ceu-pcard {
        border: 2px solid var(--ceu-navy);
        border-radius: 16px;
        background: #fff;
        padding: 20px;
    }
    .ceu-profile-scope .ceu-pcard-head {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding-bottom: 14px;
        margin-bottom: 4px;
        border-bottom: 1px solid var(--ceu-line);
    }
    .ceu-profile-scope .ceu-pcard-title {
        margin: 0;
        font-size: 1.2em;
        font-weight: 700;
        line-height: 1.3;
        color: var(--ceu-navy);
    }
    /* Two buttons in a narrow left column. Wrapping is on the flex line, not a
       media query: what matters is the width of the COLUMN, which a viewport
       breakpoint cannot see. Both fit beside the title in a wide column and drop
       to their own row in a narrow one. */
    .ceu-profile-scope .ceu-pcard-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
    /* Card buttons carry the brand navy and sit smaller than the dialog's own
       buttons: in the card they are a quiet secondary action beside the heading,
       where the dialog's Save and Cancel are the point of the screen. */
    .ceu-profile-scope .ceu-pcard-actions .ceu-pbtn {
        padding: 5px 11px;
        font-size: .8em;
        border-radius: 6px;
        border-color: var(--ceu-navy);
        color: var(--ceu-navy);
    }
    .ceu-profile-scope .ceu-pcard-actions .ceu-pbtn:hover {
        background: var(--ceu-navy);
        border-color: var(--ceu-navy);
        color: #fff;
    }

    .ceu-profile-scope .ceu-pdl { margin: 0; }
    .ceu-profile-scope .ceu-pitem { padding: 12px 0; border-bottom: 1px solid var(--ceu-line); }
    .ceu-profile-scope .ceu-pitem:last-child { border-bottom: 0; padding-bottom: 0; }
    /* The colour does the work here as much as the weight: 700 → 800 is invisible
       in a font with no 800 face, which then falls back to 700. */
    .ceu-profile-scope .ceu-pitem dt {
        margin: 0 0 3px;
        font-size: .78em;
        font-weight: 800;
        letter-spacing: .05em;
        text-transform: uppercase;
        color: var(--ceu-navy);
    }
    .ceu-profile-scope .ceu-pitem dd {
        margin: 0;
        font-size: .93em;
        line-height: 1.5;
    }
    .ceu-profile-scope .ceu-pbreak { overflow-wrap: anywhere; }
    .ceu-profile-scope .ceu-pmuted { color: var(--ceu-muted); }

    /* ── Buttons ── */
    .ceu-profile-scope .ceu-pbtn {
        padding: 8px 16px;
        border: 1px solid var(--ceu-line);
        border-radius: 8px;
        background: #fff;
        color: var(--ceu-ink);
        font-size: .88em;
        font-weight: 600;
        font-family: inherit;
        cursor: pointer;
        transition: background .15s, border-color .15s, color .15s;
    }
    .ceu-profile-scope .ceu-pbtn:hover { border-color: var(--ceu-blue); color: var(--ceu-blue); }
    .ceu-profile-scope .ceu-pbtn-primary {
        background: var(--ceu-blue);
        border-color: var(--ceu-blue);
        color: #fff;
    }
    .ceu-profile-scope .ceu-pbtn-primary:hover { background: #1d4ed8; border-color: #1d4ed8; color: #fff; }
    .ceu-profile-scope .ceu-pbtn-ghost { color: var(--ceu-muted); }

    /* ── Modal ── */
    /* The theme's sticky header runs to nine-figure z-indexes, and the dialogs are
       moved to <body> by the script above so this number is actually comparable
       with it — inside the Elementor column it was being judged against the
       column's stacking context instead, where no value could have won. */
    .ceu-profile-scope .ceu-modal { position: fixed; inset: 0; z-index: 2147483000; }
    /* The <body>-level wrapper holding the moved dialogs. Lays out nothing; it
       exists to carry the scope class so the styles below still apply. */
    .ceu-profile-portal { position: static; }
    .ceu-profile-scope .ceu-modal[hidden] { display: none; }
    .ceu-profile-scope .ceu-modal-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, .55);
    }
    .ceu-profile-scope .ceu-modal-box {
        position: relative;
        width: min(760px, calc(100vw - 32px));
        max-height: calc(100vh - 64px);
        margin: 32px auto;
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 14px;
        box-shadow: 0 20px 50px rgba(15, 23, 42, .3);
        overflow: hidden;
    }
    /* Three password fields do not need the full-width edit dialog. */
    .ceu-profile-scope .ceu-modal-box-sm { width: min(440px, calc(100vw - 32px)); }

    .ceu-profile-scope .ceu-phint {
        font-size: .8em;
        color: var(--ceu-muted);
    }
    .ceu-profile-scope .ceu-modal-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 22px;
        border-bottom: 1px solid var(--ceu-line);
    }
    .ceu-profile-scope .ceu-modal-head h3 { margin: 0; font-size: 1.1em; font-weight: 700; }
    .ceu-profile-scope .ceu-modal-x {
        border: 0;
        background: none;
        font-size: 1.7em;
        line-height: 1;
        color: var(--ceu-muted);
        cursor: pointer;
        padding: 0 4px;
    }
    .ceu-profile-scope .ceu-modal-x:hover { color: var(--ceu-ink); }

    .ceu-profile-scope .ceu-modal-body { padding: 22px; overflow-y: auto; }

    .ceu-profile-scope .ceu-fieldset-label {
        margin: 0 0 12px;
        font-size: .76em;
        font-weight: 700;
        letter-spacing: .05em;
        text-transform: uppercase;
        color: var(--ceu-muted);
    }
    .ceu-profile-scope .ceu-fgrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-bottom: 26px;
    }
    .ceu-profile-scope .ceu-field { display: flex; flex-direction: column; gap: 5px; }
    .ceu-profile-scope .ceu-field-wide { grid-column: 1 / -1; }
    .ceu-profile-scope .ceu-field > span {
        font-size: .84em;
        font-weight: 600;
        color: var(--ceu-ink);
    }
    .ceu-profile-scope .ceu-field input,
    .ceu-profile-scope .ceu-field select {
        width: 100%;
        padding: 9px 12px;
        border: 1px solid var(--ceu-line);
        border-radius: 8px;
        background: #fff;
        font-size: .92em;
        font-family: inherit;
        color: var(--ceu-ink);
        transition: border-color .15s, box-shadow .15s;
    }
    .ceu-profile-scope .ceu-field input:focus,
    .ceu-profile-scope .ceu-field select:focus {
        outline: 0;
        border-color: var(--ceu-blue);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, .12);
    }

    .ceu-profile-scope .ceu-modal-foot {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        padding-top: 4px;
    }

    @media (max-width: 560px) {
        .ceu-profile-scope .ceu-fgrid { grid-template-columns: minmax(0, 1fr); }
        .ceu-profile-scope .ceu-modal-box { margin: 12px auto; max-height: calc(100vh - 24px); }
    }
    </style>
    <?php
}, 20);

// ─── Change password: UNVERIFIED AGAINST A REAL SESSION ───────────────────────
// ceu_do_update_password() above now implements what this note used to defer,
// including the re-keying the old note warned about: PASS, the _ceu_row meta,
// $_SESSION['session_data'] and the 'ceuSession' cookie are all rewritten in the
// one request.
//
// It has NOT been exercised end to end. The local sandbox has no WordPress
// database, so there is no way to log in as a CEU user here and confirm that the
// session survives the change. Worth watching on the first real run:
//
//   1. After changing the password, load another page. Still logged in?
//   2. Log out and back in with the NEW password.
//   3. Check a page that reads $_SESSION['session_data'] — the licence expiry
//      warnings in ceu-certificates.php are the easiest tell.
//
// If a change does log the user out, the cookie is the first suspect: this runs
// on admin-post.php, so anything that sends output before setcookie() would drop
// it silently (the headers_sent() guard skips it rather than warn).
