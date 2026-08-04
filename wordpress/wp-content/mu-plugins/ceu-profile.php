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

    ob_start();
    ?>
    <div id="ceu-profile">
        <?php if ($saved) : ?>
            <div class="ceu-note ceu-note-ok">Your information has been updated.</div>
        <?php elseif ($failed) : ?>
            <div class="ceu-note ceu-note-bad">Sorry — those changes could not be saved. Please try again.</div>
        <?php endif; ?>

        <div class="ceu-pcard">
            <div class="ceu-pcard-head">
                <h2 class="ceu-pcard-title">Personal Information</h2>
                <button type="button" class="ceu-pbtn" data-ceu-profile-open>Edit</button>
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
            <div class="ceu-modal-backdrop" data-ceu-profile-close></div>

            <div class="ceu-modal-box" role="dialog" aria-modal="true" aria-labelledby="ceu-modal-title">
                <div class="ceu-modal-head">
                    <h3 id="ceu-modal-title">Edit your information</h3>
                    <button type="button" class="ceu-modal-x" data-ceu-profile-close aria-label="Close">&times;</button>
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
                        <button type="button" class="ceu-pbtn ceu-pbtn-ghost" data-ceu-profile-close>Cancel</button>
                        <button type="submit" class="ceu-pbtn ceu-pbtn-primary">Save changes</button>
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

// ─── Styles + dialog behaviour ────────────────────────────────────────────────

add_action('wp_footer', function () {
    if (empty($GLOBALS['ceu_profile_rendered'])) return;
    ?>
    <script>
    (function () {
        function init() {
            var modal = document.getElementById('ceu-profile-modal');
            if (!modal) return;

            var lastFocus = null;

            function open() {
                lastFocus = document.activeElement;
                modal.hidden = false;
                document.body.style.overflow = 'hidden';
                var first = modal.querySelector('input, select, textarea');
                if (first) first.focus();
            }

            function close() {
                modal.hidden = true;
                document.body.style.overflow = '';
                if (lastFocus) lastFocus.focus();
            }

            document.querySelectorAll('[data-ceu-profile-open]').forEach(function (b) {
                b.addEventListener('click', open);
            });
            modal.querySelectorAll('[data-ceu-profile-close]').forEach(function (b) {
                b.addEventListener('click', close);
            });
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && !modal.hidden) close();
            });
        }

        document.readyState === 'loading'
            ? document.addEventListener('DOMContentLoaded', init)
            : init();
    })();
    </script>

    <style>
    #ceu-profile {
        --ceu-blue:  #2563eb;
        --ceu-ink:   #0f172a;
        --ceu-muted: #64748b;
        --ceu-line:  #e2e8f0;
        --ceu-bg:    #f8fafc;

        font-family: inherit;
        color: var(--ceu-ink);
    }

    /* ── Save/error notice ── */
    #ceu-profile .ceu-note {
        padding: 11px 14px;
        border-radius: 8px;
        margin-bottom: 14px;
        font-size: .9em;
        font-weight: 600;
    }
    #ceu-profile .ceu-note-ok  { background: #dbeafe; color: #1d4ed8; }
    #ceu-profile .ceu-note-bad { background: #fee2e2; color: #b91c1c; }

    /* ── Summary card ── */
    #ceu-profile .ceu-pcard {
        border: 1px solid var(--ceu-line);
        border-radius: 12px;
        background: #fff;
        padding: 18px;
    }
    #ceu-profile .ceu-pcard-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding-bottom: 14px;
        margin-bottom: 4px;
        border-bottom: 1px solid var(--ceu-line);
    }
    #ceu-profile .ceu-pcard-title {
        margin: 0;
        font-size: 1.05em;
        font-weight: 700;
        line-height: 1.3;
    }

    #ceu-profile .ceu-pdl { margin: 0; }
    #ceu-profile .ceu-pitem { padding: 12px 0; border-bottom: 1px solid var(--ceu-line); }
    #ceu-profile .ceu-pitem:last-child { border-bottom: 0; padding-bottom: 0; }
    #ceu-profile .ceu-pitem dt {
        margin: 0 0 3px;
        font-size: .76em;
        font-weight: 700;
        letter-spacing: .04em;
        text-transform: uppercase;
        color: var(--ceu-muted);
    }
    #ceu-profile .ceu-pitem dd {
        margin: 0;
        font-size: .93em;
        line-height: 1.5;
    }
    #ceu-profile .ceu-pbreak { overflow-wrap: anywhere; }
    #ceu-profile .ceu-pmuted { color: var(--ceu-muted); }

    /* ── Buttons ── */
    #ceu-profile .ceu-pbtn {
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
    #ceu-profile .ceu-pbtn:hover { border-color: var(--ceu-blue); color: var(--ceu-blue); }
    #ceu-profile .ceu-pbtn-primary {
        background: var(--ceu-blue);
        border-color: var(--ceu-blue);
        color: #fff;
    }
    #ceu-profile .ceu-pbtn-primary:hover { background: #1d4ed8; border-color: #1d4ed8; color: #fff; }
    #ceu-profile .ceu-pbtn-ghost { color: var(--ceu-muted); }

    /* ── Modal ── */
    #ceu-profile .ceu-modal { position: fixed; inset: 0; z-index: 99999; }
    #ceu-profile .ceu-modal[hidden] { display: none; }
    #ceu-profile .ceu-modal-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, .55);
    }
    #ceu-profile .ceu-modal-box {
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
    #ceu-profile .ceu-modal-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 22px;
        border-bottom: 1px solid var(--ceu-line);
    }
    #ceu-profile .ceu-modal-head h3 { margin: 0; font-size: 1.1em; font-weight: 700; }
    #ceu-profile .ceu-modal-x {
        border: 0;
        background: none;
        font-size: 1.7em;
        line-height: 1;
        color: var(--ceu-muted);
        cursor: pointer;
        padding: 0 4px;
    }
    #ceu-profile .ceu-modal-x:hover { color: var(--ceu-ink); }

    #ceu-profile .ceu-modal-body { padding: 22px; overflow-y: auto; }

    #ceu-profile .ceu-fieldset-label {
        margin: 0 0 12px;
        font-size: .76em;
        font-weight: 700;
        letter-spacing: .05em;
        text-transform: uppercase;
        color: var(--ceu-muted);
    }
    #ceu-profile .ceu-fgrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-bottom: 26px;
    }
    #ceu-profile .ceu-field { display: flex; flex-direction: column; gap: 5px; }
    #ceu-profile .ceu-field-wide { grid-column: 1 / -1; }
    #ceu-profile .ceu-field > span {
        font-size: .84em;
        font-weight: 600;
        color: var(--ceu-ink);
    }
    #ceu-profile .ceu-field input,
    #ceu-profile .ceu-field select {
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
    #ceu-profile .ceu-field input:focus,
    #ceu-profile .ceu-field select:focus {
        outline: 0;
        border-color: var(--ceu-blue);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, .12);
    }

    #ceu-profile .ceu-modal-foot {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        padding-top: 4px;
    }

    @media (max-width: 560px) {
        #ceu-profile .ceu-fgrid { grid-template-columns: minmax(0, 1fr); }
        #ceu-profile .ceu-modal-box { margin: 12px auto; max-height: calc(100vh - 24px); }
    }
    </style>
    <?php
}, 20);

// ─── NOT YET IMPLEMENTED: change password ─────────────────────────────────────
// The legacy page had a "Change Password" form alongside this one
// (User.class.php::editUserSecurity — PASS = sha256(new)).
//
// It is deliberately left out for now because CEU_USER.PASS doubles as the
// session key: ceu-auth.php stores it in the 'ceuSession' cookie and the legacy
// app matches on it. Changing PASS therefore has to re-issue that cookie and the
// WP session in the same request, or the user is silently logged out — and that
// needs testing against a real session, which cannot be done from the local
// sandbox (it has no WordPress database).
