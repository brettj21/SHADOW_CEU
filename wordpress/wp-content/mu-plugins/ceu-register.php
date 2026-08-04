<?php
/**
 * Plugin Name: CEU Register
 * Description: CEU account registration — [ceu_register] renders the form and
 *              admin_post_ceu_register writes the new CEU_USER row, then signs
 *              the user in.
 *
 * WHY THIS EXISTS
 * ───────────────
 * /login-register/ only ever had a WordPress/Tutor LOGIN form on it. There was
 * no CEU registration form anywhere in the codebase — nothing collected first
 * name, licence, profession, or wrote to CEU_USER. This ports the legacy form
 * at CEU/register/index.php (fields) and CEU/classes/User.class.php::insertUser
 * (the write).
 *
 * SIGN-IN AFTER REGISTERING
 * ─────────────────────────
 * The handler does NOT duplicate any of ceu-auth.php's account plumbing. It
 * inserts the CEU_USER row, then calls wp_signon() with the same credentials —
 * ceu-auth.php's `authenticate` filter then does what it does for any login:
 * finds/creates the subscriber WP user, sets _ceu_id / _ceu_pro / _ceu_row, and
 * the wp_login hook sets the CEU session and cookies.
 *
 * PLACEMENT
 * ─────────
 * Put [ceu_register] on the /register page.
 *
 * NOT PORTED — see the note at the foot of this file for reCAPTCHA, the Sendy
 * mailing-list signup, SSN, and the legacy migration fields.
 */

// ─── Reference data ───────────────────────────────────────────────────────────
// Shared with ceu-profile.php, which mu-plugins load first (alphabetical), but
// don't rely on load order.

function ceu_register_states() {
    return function_exists('ceu_profile_states') ? ceu_profile_states() : [];
}

function ceu_register_professions() {
    return function_exists('ceu_profile_professions') ? ceu_profile_professions() : [];
}

function ceu_register_questions() {
    return function_exists('ceu_profile_questions') ? ceu_profile_questions() : [];
}

// Minimum password length. The legacy form said "min 4 characters"; that is too
// weak to reproduce for new accounts. Lower it here if it causes friction.
if (!defined('CEU_REGISTER_MIN_PASS')) {
    define('CEU_REGISTER_MIN_PASS', 8);
}

// ─── reCAPTCHA v3 ─────────────────────────────────────────────────────────────
// Same keys, action and threshold as the legacy site (CEU/process/forms.php),
// so both registration paths score against one reCAPTCHA property.
//
// v3 is invisible — no checkbox. It scores the request 0.0 (bot) to 1.0 (human);
// anything under the threshold is rejected.
//
// Define any of these in wp-config.php to override without touching this file.
// Moving the SECRET there is worth doing — see the note at the foot of the file.
if (!defined('CEU_RECAPTCHA_SITE_KEY')) {
    define('CEU_RECAPTCHA_SITE_KEY', '6LeYwEYtAAAAALrV_Ye27myZea_AYVbn_2yOF4cN');
}
if (!defined('CEU_RECAPTCHA_SECRET')) {
    define('CEU_RECAPTCHA_SECRET', '6LeYwEYtAAAAAK8b3GXtujt5fK_um1LHt7a6U5X1');
}
if (!defined('CEU_RECAPTCHA_MIN_SCORE')) {
    define('CEU_RECAPTCHA_MIN_SCORE', 0.5); // Raise to be stricter; lower if real users get blocked.
}
if (!defined('CEU_RECAPTCHA_ACTION')) {
    define('CEU_RECAPTCHA_ACTION', 'register');
}

// ─── Sendy mailing list ───────────────────────────────────────────────────────
// Sendy shares the CEU database rather than sitting behind its own HTTP API, so
// subscribing is a plain INSERT on the same connection — no API key, no URL.
//   list 1  = "CEU Global List"  (see the `lists` table)
//   userID  = the owning Sendy account
if (!defined('CEU_SENDY_LIST'))    define('CEU_SENDY_LIST', 1);
if (!defined('CEU_SENDY_USER_ID')) define('CEU_SENDY_USER_ID', 1);

function ceu_register_subscribe($db, $first, $email, $profession) {
    if (!CEU_SENDY_LIST) return; // Set to 0 in wp-config.php to disable.

    $list = (int) CEU_SENDY_LIST;

    // The legacy insert was unconditional, so re-registering a released email
    // stacked up duplicate rows on the list. Check first.
    $stmt = $db->prepare('SELECT id FROM subscribers WHERE email = ? AND list = ? LIMIT 1');
    if ($stmt) {
        $stmt->bind_param('si', $email, $list);
        $stmt->execute();
        $stmt->store_result();
        $already = $stmt->num_rows > 0;
        $stmt->close();
        if ($already) return;
    }

    // Matches the column values the legacy rows carry: confirmed, method 1,
    // added_via 2, profession slug in custom_fields, join_date to the minute.
    $sql = 'INSERT INTO subscribers
                (userID, name, email, custom_fields, list, timestamp, join_date,
                 confirmed, method, added_via)
            VALUES (?,?,?,?,?,?,?,1,1,2)';

    $stmt = $db->prepare($sql);
    if (!$stmt) {
        error_log('CEU register: could not prepare Sendy insert — ' . $db->error);
        return;
    }

    $user_id   = (int) CEU_SENDY_USER_ID;
    $timestamp = time();
    $join_date = (int) (round($timestamp / 60) * 60);

    $stmt->bind_param('isssiii', $user_id, $first, $email, $profession, $list, $timestamp, $join_date);

    // Non-fatal on purpose: the account already exists at this point, so a list
    // problem must not turn a successful signup into an error. The legacy code
    // used `or die()` here, which would have done exactly that.
    if (!$stmt->execute()) {
        error_log('CEU register: Sendy subscribe failed for ' . $email . ' — ' . $stmt->error);
    }
    $stmt->close();
}

// ─── Verify a v3 token with Google ────────────────────────────────────────────

function ceu_register_verify_captcha($token) {
    if (!CEU_RECAPTCHA_SECRET) return true; // No secret configured — don't lock everyone out.
    if (!$token) return false;

    // wp_remote_post rather than raw cURL: honours WP's HTTP config and timeouts.
    $res = wp_remote_post('https://www.google.com/recaptcha/api/siteverify', [
        'timeout' => 10,
        'body'    => [
            'secret'   => CEU_RECAPTCHA_SECRET,
            'response' => $token,
            'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
        ],
    ]);

    if (is_wp_error($res)) {
        error_log('CEU register: reCAPTCHA request failed — ' . $res->get_error_message());
        return false;
    }

    $body = json_decode(wp_remote_retrieve_body($res), true);

    // All three must hold: Google accepted the token, it was minted for this
    // action, and the score clears the threshold.
    return !empty($body['success'])
        && ($body['action'] ?? '') === CEU_RECAPTCHA_ACTION
        && (float) ($body['score'] ?? 0) >= (float) CEU_RECAPTCHA_MIN_SCORE;
}

// ─── Error messages ───────────────────────────────────────────────────────────
// Keyed the same way as the legacy ?er=N codes, spelled out instead of numbered.

function ceu_register_error($code) {
    $map = [
        'email_invalid'  => 'That email address does not look valid. Please check it and try again.',
        'email_exists'   => 'An account with that email address already exists. If you have forgotten your password, use the password recovery link.',
        'pass_mismatch'  => 'The two passwords do not match. Please try again.',
        'pass_short'     => 'Your password must be at least ' . CEU_REGISTER_MIN_PASS . ' characters.',
        'required'       => 'Please fill in all of the required fields.',
        'insert_failed'  => 'Something went wrong creating your account. Please contact support@ceunits.com.',
        'bad_request'    => 'Your session expired. Please try submitting the form again.',
        'captcha_failed' => 'We could not confirm you are not a robot. Please reload the page and try again.',
        'blocked'        => 'That submission looked automated. If this is a mistake, please contact support@ceunits.com.',
    ];
    return $map[$code] ?? $map['insert_failed'];
}

// ─── The form ─────────────────────────────────────────────────────────────────

function ceu_register_html() {
    // Already signed in — no reason to show a registration form.
    if (function_exists('ceu_is_logged_in') && ceu_is_logged_in()) {
        return '<div id="ceu-register"><p class="ceu-rnote">You are already signed in. '
             . '<a href="' . esc_url(home_url('/user/')) . '">Go to your account</a>.</p></div>';
    }

    $states      = ceu_register_states();
    $professions = ceu_register_professions();
    $questions   = ceu_register_questions();

    // Repopulate after a failed submit so nothing has to be retyped.
    // Passwords are deliberately never echoed back.
    if (!session_id() && !headers_sent()) session_start();
    $old   = $_SESSION['ceu_register_old'] ?? [];
    $error = $_SESSION['ceu_register_error'] ?? '';
    unset($_SESSION['ceu_register_old'], $_SESSION['ceu_register_error']);

    $v = fn($k) => esc_attr($old[$k] ?? '');

    ob_start();
    ?>
    <div id="ceu-register">
        <?php if ($error) : ?>
            <div class="ceu-rnote ceu-rnote-bad"><?= esc_html(ceu_register_error($error)) ?></div>
        <?php endif; ?>

        <form class="ceu-rform" method="post" action="<?= esc_url(admin_url('admin-post.php')) ?>">
            <input type="hidden" name="action" value="ceu_register">
            <?php wp_nonce_field('ceu_register', '_ceu_register_nonce'); ?>

            <p class="ceu-rlegend">Your details</p>
            <div class="ceu-rgrid">
                <label class="ceu-rfield">
                    <span>First name <b>*</b></span>
                    <input type="text" name="first" maxlength="32" required value="<?= $v('first') ?>">
                </label>
                <label class="ceu-rfield">
                    <span>Last name <b>*</b></span>
                    <input type="text" name="last" maxlength="32" required value="<?= $v('last') ?>">
                </label>
                <label class="ceu-rfield ceu-rwide">
                    <span>Email <b>*</b></span>
                    <input type="email" name="email" maxlength="64" required value="<?= $v('email') ?>">
                </label>
                <label class="ceu-rfield">
                    <span>Password <b>*</b></span>
                    <input type="password" name="pass1" required
                           minlength="<?= (int) CEU_REGISTER_MIN_PASS ?>"
                           autocomplete="new-password">
                    <small>Minimum <?= (int) CEU_REGISTER_MIN_PASS ?> characters</small>
                </label>
                <label class="ceu-rfield">
                    <span>Confirm password <b>*</b></span>
                    <input type="password" name="pass2" required
                           minlength="<?= (int) CEU_REGISTER_MIN_PASS ?>"
                           autocomplete="new-password">
                </label>
                <label class="ceu-rfield">
                    <span>Phone</span>
                    <input type="tel" name="phone" maxlength="10" value="<?= $v('phone') ?>"
                           placeholder="xxxxxxxxxx">
                </label>
                <label class="ceu-rfield">
                    <span>Date of birth</span>
                    <input type="date" name="dob" value="<?= $v('dob') ?>">
                </label>
            </div>

            <p class="ceu-rlegend">Address</p>
            <div class="ceu-rgrid">
                <label class="ceu-rfield ceu-rwide">
                    <span>Address</span>
                    <input type="text" name="address_1" maxlength="128" value="<?= $v('address_1') ?>">
                </label>
                <label class="ceu-rfield ceu-rwide">
                    <span>Address 2</span>
                    <input type="text" name="address_2" maxlength="128" value="<?= $v('address_2') ?>">
                </label>
                <label class="ceu-rfield">
                    <span>City</span>
                    <input type="text" name="city" maxlength="64" value="<?= $v('city') ?>">
                </label>
                <label class="ceu-rfield">
                    <span>State</span>
                    <select name="state">
                        <option value="">Select a state</option>
                        <?php foreach ($states as $code => $label) : ?>
                            <option value="<?= esc_attr($code) ?>" <?= selected($old['state'] ?? '', $code, false) ?>>
                                <?= esc_html($label) ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                </label>
                <label class="ceu-rfield">
                    <span>ZIP</span>
                    <input type="text" name="zip" maxlength="16" value="<?= $v('zip') ?>">
                </label>
            </div>

            <p class="ceu-rlegend">Licence</p>
            <div class="ceu-rgrid">
                <label class="ceu-rfield ceu-rwide">
                    <span>Profession <b>*</b></span>
                    <select name="profession" required>
                        <option value="">Select a profession</option>
                        <?php foreach ($professions as $slug => $label) : ?>
                            <option value="<?= esc_attr($slug) ?>" <?= selected($old['profession'] ?? '', $slug, false) ?>>
                                <?= esc_html($label) ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                </label>
                <label class="ceu-rfield">
                    <span>Licence number</span>
                    <input type="text" name="lic_num" maxlength="20" value="<?= $v('lic_num') ?>">
                </label>
                <label class="ceu-rfield">
                    <span>Licence expiration</span>
                    <input type="date" name="lic_exp" value="<?= $v('lic_exp') ?>" data-ceu-licexp>
                    <label class="ceu-rcheck">
                        <input type="checkbox" name="lc_na" value="1" <?= checked(!empty($old['lc_na']), true, false) ?>>
                        <span>My licence does not expire</span>
                    </label>
                </label>
            </div>

            <p class="ceu-rlegend">Security question</p>
            <div class="ceu-rgrid">
                <label class="ceu-rfield ceu-rwide">
                    <span>Question</span>
                    <select name="question">
                        <option value="">Select a question</option>
                        <?php foreach ($questions as $id => $label) : ?>
                            <option value="<?= (int) $id ?>" <?= selected((int) ($old['question'] ?? 0), $id, false) ?>>
                                <?= esc_html($label) ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                </label>
                <label class="ceu-rfield ceu-rwide">
                    <span>Answer</span>
                    <input type="text" name="security" maxlength="32" value="<?= $v('security') ?>">
                </label>
            </div>

            <!-- reCAPTCHA v3 token, filled in by JS at submit time -->
            <input type="hidden" name="g-recaptcha-response" id="ceu-recaptcha-token">

            <div class="ceu-rfoot">
                <button type="submit" class="ceu-rbtn">Create my account</button>
                <p class="ceu-rsmall">Already have an account?
                    <a href="<?= esc_url(home_url('/login/')) ?>">Sign in</a>.
                </p>
            </div>

            <p class="ceu-rsmall ceu-rlegal">
                Protected by reCAPTCHA — Google's
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a> and
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener">Terms of Service</a> apply.
            </p>
        </form>
    </div>
    <?php
    return ob_get_clean();
}

add_shortcode('ceu_register', function () {
    $html = ceu_register_html();
    if ($html) $GLOBALS['ceu_register_rendered'] = true;
    return $html;
});

// ─── Handler ──────────────────────────────────────────────────────────────────

function ceu_do_register() {
    $back = wp_get_referer() ?: home_url('/register/');

    if (!session_id() && !headers_sent()) session_start();

    $fail = function ($code, $keep = []) use ($back) {
        $_SESSION['ceu_register_error'] = $code;
        $_SESSION['ceu_register_old']   = $keep;
        wp_safe_redirect($back);
        exit;
    };

    // Everything except the passwords is safe to hand back to the form.
    $keep = array_intersect_key($_POST, array_flip([
        'first', 'last', 'email', 'phone', 'dob', 'address_1', 'address_2',
        'city', 'state', 'zip', 'profession', 'lic_num', 'lic_exp', 'lc_na',
        'question', 'security',
    ]));
    $keep = array_map('sanitize_text_field', $keep);

    if (!wp_verify_nonce($_POST['_ceu_register_nonce'] ?? '', 'ceu_register')) {
        $fail('bad_request', $keep);
    }

    // ── Bot checks, before anything touches the database ──────────────────────
    if (!ceu_register_verify_captcha($_POST['g-recaptcha-response'] ?? '')) {
        $fail('captcha_failed', $keep);
    }

    // Ported from the legacy handler: a bot was stuffing hrefs into the name
    // fields, and a colon is the tell. Cheap, and it caught a real attack.
    if (strpos((string) ($_POST['first'] ?? ''), ':') !== false
        || strpos((string) ($_POST['last'] ?? ''), ':') !== false) {
        $fail('blocked', $keep);
    }

    // ── Validate ──────────────────────────────────────────────────────────────
    $first = sanitize_text_field($_POST['first'] ?? '');
    $last  = sanitize_text_field($_POST['last'] ?? '');
    $email = sanitize_email($_POST['email'] ?? '');
    $pass1 = (string) ($_POST['pass1'] ?? '');
    $pass2 = (string) ($_POST['pass2'] ?? '');

    if ($first === '' || $last === '')          $fail('required', $keep);
    if (!$email || !is_email($email))           $fail('email_invalid', $keep);
    if ($pass1 !== $pass2)                      $fail('pass_mismatch', $keep);
    if (strlen($pass1) < CEU_REGISTER_MIN_PASS) $fail('pass_short', $keep);

    $states      = ceu_register_states();
    $professions = ceu_register_professions();
    $questions   = ceu_register_questions();

    $state = strtoupper(trim($_POST['state'] ?? ''));
    if ($state !== '' && $states && !isset($states[$state])) $fail('required', $keep);

    // Never store the legacy placeholder — the old form's empty option wrote the
    // literal string "Profession" into 281 rows.
    $profession = trim($_POST['profession'] ?? '');
    if ($profession === '' || ($professions && !isset($professions[$profession]))) {
        $fail('required', $keep);
    }

    $question = (int) ($_POST['question'] ?? 0);
    if ($question !== 0 && $questions && !isset($questions[$question])) $fail('required', $keep);

    if (!function_exists('ceu_db_connect')) $fail('insert_failed', $keep);
    $db = ceu_db_connect();
    if (!$db) $fail('insert_failed', $keep);

    // ── Email must be unique ──────────────────────────────────────────────────
    $stmt = $db->prepare('SELECT ID FROM CEU_USER WHERE EMAIL = ? LIMIT 1');
    if (!$stmt) $fail('insert_failed', $keep);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $stmt->store_result();
    $exists = $stmt->num_rows > 0;
    $stmt->close();
    if ($exists) $fail('email_exists', $keep);

    // ── Normalise ─────────────────────────────────────────────────────────────
    $to_datetime = function ($v) {
        $v = trim((string) $v);
        if ($v === '') return null;
        $ts = strtotime($v);
        return $ts ? date('Y-m-d', $ts) . ' 00:00:00' : null;
    };

    $dob = $to_datetime($_POST['dob'] ?? '');
    // "My licence does not expire" wins over whatever is in the date box.
    $lic_exp = !empty($_POST['lc_na']) ? null : $to_datetime($_POST['lic_exp'] ?? '');

    $address_1 = sanitize_text_field($_POST['address_1'] ?? '');
    $address_2 = sanitize_text_field($_POST['address_2'] ?? '');
    $city      = sanitize_text_field($_POST['city'] ?? '');
    $zip       = sanitize_text_field($_POST['zip'] ?? '');
    $phone     = preg_replace('/\D/', '', (string) ($_POST['phone'] ?? ''));
    $lic_num   = sanitize_text_field($_POST['lic_num'] ?? '');
    $security  = sanitize_text_field($_POST['security'] ?? '');

    // Same scheme as ceu-auth.php and the legacy app.
    $pass_hash = hash('sha256', $pass1);
    $now       = current_time('mysql');

    // ── Insert ────────────────────────────────────────────────────────────────
    // Prepared statement — insertUser() concatenated $_POST straight into SQL.
    $sql = 'INSERT INTO CEU_USER
                (FIRST, LAST, EMAIL, ADDRESS_1, ADDRESS_2, CITY, STATE, ZIP, PHONE,
                 PASS, QUESTION, SECURITY_1, PROFESSION, DOB, LIC_EXP, LIC_NUM,
                 DATE_ENTERED, DATE_VISITED)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

    $stmt = $db->prepare($sql);
    if (!$stmt) $fail('insert_failed', $keep);

    // 18 columns: QUESTION is the only int, everything else binds as a string.
    // DATE_ENTERED and DATE_VISITED both take $now.
    $stmt->bind_param(
        'ssssssssssisssssss',
        $first, $last, $email, $address_1, $address_2, $city, $state, $zip, $phone,
        $pass_hash, $question, $security, $profession, $dob, $lic_exp, $lic_num,
        $now, $now
    );

    $ok = $stmt->execute();
    $stmt->close();
    if (!$ok) $fail('insert_failed', $keep);

    // ── Mailing list ──────────────────────────────────────────────────────────
    ceu_register_subscribe($db, $first, $email, $profession);

    // ── Sign in ───────────────────────────────────────────────────────────────
    // ceu-auth.php's `authenticate` filter takes it from here: it finds/creates
    // the subscriber WP user, sets _ceu_id / _ceu_pro / _ceu_row, and the
    // wp_login hook sets $_SESSION['session_data'] and the ceu/ceuSession/pro
    // cookies. Nothing to duplicate.
    $signed_in = wp_signon([
        'user_login'    => $email,
        'user_password' => $pass1,
        'remember'      => true,
    ], is_ssl());

    if (is_wp_error($signed_in)) {
        // The row exists, so send them to the login page rather than back to a
        // form that would now fail the uniqueness check.
        wp_safe_redirect(home_url('/login/'));
        exit;
    }

    wp_set_current_user($signed_in->ID);
    wp_safe_redirect(home_url('/user/'));
    exit;
}

add_action('admin_post_nopriv_ceu_register', 'ceu_do_register');
add_action('admin_post_ceu_register',        'ceu_do_register');

// ─── Styles ───────────────────────────────────────────────────────────────────

add_action('wp_footer', function () {
    if (empty($GLOBALS['ceu_register_rendered'])) return;

    if (CEU_RECAPTCHA_SITE_KEY) {
        printf(
            '<script src="https://www.google.com/recaptcha/api.js?render=%s"></script>' . "\n",
            esc_attr(CEU_RECAPTCHA_SITE_KEY)
        );
    }
    ?>
    <script>
    (function () {
        var SITE_KEY = <?= json_encode(CEU_RECAPTCHA_SITE_KEY) ?>;
        var ACTION   = <?= json_encode(CEU_RECAPTCHA_ACTION) ?>;

        function init() {
            var form = document.querySelector('#ceu-register .ceu-rform');

            // "Does not expire" disables the date box so the two cannot disagree.
            var box = document.querySelector('#ceu-register input[name="lc_na"]');
            var exp = document.querySelector('#ceu-register [data-ceu-licexp]');
            if (box && exp) {
                var sync = function () {
                    exp.disabled = box.checked;
                    if (box.checked) exp.value = '';
                };
                box.addEventListener('change', sync);
                sync();
            }

            if (!form || !SITE_KEY) return;

            // ── reCAPTCHA v3 ──────────────────────────────────────────────────
            // Tokens expire after ~2 minutes, so one is minted at submit time
            // rather than on page load — a slowly filled form would fail.
            var token  = document.getElementById('ceu-recaptcha-token');
            var button = form.querySelector('.ceu-rbtn');
            var passed = false;

            form.addEventListener('submit', function (e) {
                if (passed) return;          // second pass — let it through
                e.preventDefault();

                if (typeof grecaptcha === 'undefined') {
                    alert('Could not load spam protection. Please refresh the page and try again.');
                    return;
                }

                if (button) {
                    button.disabled    = true;
                    button.textContent = 'Creating your account…';
                }

                grecaptcha.ready(function () {
                    grecaptcha.execute(SITE_KEY, { action: ACTION }).then(function (t) {
                        if (token) token.value = t;
                        passed = true;
                        form.submit();
                    }, function () {
                        if (button) {
                            button.disabled    = false;
                            button.textContent = 'Create my account';
                        }
                        alert('Spam protection failed to run. Please refresh the page and try again.');
                    });
                });
            });
        }

        document.readyState === 'loading'
            ? document.addEventListener('DOMContentLoaded', init)
            : init();
    })();
    </script>

    <style>
    #ceu-register {
        --ceu-blue:  #2563eb;
        --ceu-ink:   #0f172a;
        --ceu-muted: #64748b;
        --ceu-line:  #e2e8f0;

        max-width: 780px;
        font-family: inherit;
        color: var(--ceu-ink);
    }

    #ceu-register .ceu-rnote {
        padding: 12px 15px;
        border-radius: 8px;
        margin-bottom: 18px;
        font-size: .92em;
        font-weight: 600;
    }
    #ceu-register .ceu-rnote-bad { background: #fee2e2; color: #b91c1c; }

    #ceu-register .ceu-rlegend {
        margin: 0 0 12px;
        font-size: .76em;
        font-weight: 700;
        letter-spacing: .05em;
        text-transform: uppercase;
        color: var(--ceu-muted);
    }
    #ceu-register .ceu-rgrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 15px;
        margin-bottom: 28px;
    }
    #ceu-register .ceu-rfield { display: flex; flex-direction: column; gap: 5px; }
    #ceu-register .ceu-rwide  { grid-column: 1 / -1; }
    #ceu-register .ceu-rfield > span {
        font-size: .85em;
        font-weight: 600;
    }
    #ceu-register .ceu-rfield > span b { color: #dc2626; font-weight: 600; }
    #ceu-register .ceu-rfield small { font-size: .78em; color: var(--ceu-muted); }

    #ceu-register input[type="text"],
    #ceu-register input[type="email"],
    #ceu-register input[type="tel"],
    #ceu-register input[type="date"],
    #ceu-register input[type="password"],
    #ceu-register select {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid var(--ceu-line);
        border-radius: 8px;
        background: #fff;
        font-size: .93em;
        font-family: inherit;
        color: var(--ceu-ink);
        transition: border-color .15s, box-shadow .15s;
    }
    #ceu-register input:focus,
    #ceu-register select:focus {
        outline: 0;
        border-color: var(--ceu-blue);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, .12);
    }
    #ceu-register input:disabled { background: #f1f5f9; color: var(--ceu-muted); }

    #ceu-register .ceu-rcheck {
        display: flex;
        align-items: center;
        gap: 7px;
        margin-top: 7px;
        font-size: .84em;
        color: var(--ceu-muted);
        font-weight: 500;
    }
    #ceu-register .ceu-rcheck input { width: auto; }

    #ceu-register .ceu-rfoot {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
        padding-top: 4px;
    }
    #ceu-register .ceu-rbtn {
        padding: 12px 26px;
        border: 0;
        border-radius: 8px;
        background: var(--ceu-blue);
        color: #fff;
        font-size: .95em;
        font-weight: 700;
        font-family: inherit;
        cursor: pointer;
        transition: background .15s;
    }
    #ceu-register .ceu-rbtn:hover { background: #1d4ed8; }
    #ceu-register .ceu-rsmall { margin: 0; font-size: .88em; color: var(--ceu-muted); }
    #ceu-register .ceu-rbtn:disabled { background: #93c5fd; cursor: progress; }

    #ceu-register .ceu-rlegal { margin-top: 16px; font-size: .78em; line-height: 1.5; }
    #ceu-register .ceu-rlegal a { color: var(--ceu-muted); text-decoration: underline; }

    /* Google's floating v3 badge — the inline notice above covers attribution,
       which is what Google's terms require if the badge is hidden. */
    .grecaptcha-badge { visibility: hidden; }

    @media (max-width: 560px) {
        #ceu-register .ceu-rgrid { grid-template-columns: minmax(0, 1fr); }
    }
    </style>
    <?php
}, 20);

// ─── SECRET KEY PLACEMENT ─────────────────────────────────────────────────────
// CEU_RECAPTCHA_SECRET is defaulted in this file so registration works without
// further setup, but a reCAPTCHA secret is a credential and this repo is now the
// second place it lives (the first is CEU/process/forms.php). Better:
//
//     define('CEU_RECAPTCHA_SECRET', '…');   // in wp-config.php
//
// The defined() guard above means wp-config.php wins. Once it is set there, the
// literal here can be replaced with ''. If this repo is ever made public, or has
// been shared, rotate the key pair in the Google reCAPTCHA admin console —
// the site key is public by design, the secret is not.

// ─── NOT PORTED FROM THE LEGACY FORM ──────────────────────────────────────────
//
// SSN — insertUser() stored it (conditionally shown for CA + insurance). Left
//   out here, same as ceu-profile.php.
//
// ID_OLD / DATE_JOIN_OLD / UTYPE — leftovers from the original site migration
//   that let an imported account keep its old join date. Not relevant to a new
//   signup; DATE_ENTERED is set to now.
