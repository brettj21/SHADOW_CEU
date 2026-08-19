<?php
/**
 * Plugin Name: CEU Page Tweaks
 * Description: Small CSS corrections to Elementor-authored sections, kept in
 *              version control rather than in the page database.
 *
 * WHY THIS FILE EXISTS
 * ────────────────────
 * Everything in here could equally be set in Elementor's own controls. It lives
 * in code because the Elementor values sit in the database, which is not in this
 * repo — so a change made in the editor is invisible to code review, invisible to
 * git blame, and lost if a page is ever rebuilt from a backup of a different age.
 *
 * THE TRADE-OFF — READ BEFORE ADDING TO THIS FILE
 * ───────────────────────────────────────────────
 * Elementor writes per-element CSS at high specificity:
 *
 *     .elementor-4291 .elementor-element.elementor-element-85de88e { padding: … }
 *
 * Overriding that needs !important, and !important means THE ELEMENTOR CONTROL
 * FOR THAT PROPERTY STOPS WORKING. Someone editing the section's padding in the
 * editor will watch the number change and the page not move, with nothing on
 * screen explaining why. That is a genuinely nasty half hour for whoever hits it.
 *
 * So: only put something here when it needs to be versioned. Anything else
 * belongs in Elementor, where the next person will look for it first.
 *
 * Each rule below names the page and element it targets, so an orphaned rule can
 * be recognised and deleted once its section is gone.
 */

// /user/ — the top section (class row-top, element 85de88e), which opens the page
// above the profile card and the coursework block. Its authored padding left a
// large empty band under the site header.
if (!defined('CEU_USER_TOP_PADDING')) {
    define('CEU_USER_TOP_PADDING', '50px');
}

add_action('wp_head', function () {
    // Late priority so this prints after Elementor's enqueued page stylesheet.
    ?>
    <style>
    /* /user/ top section — see CEU_USER_TOP_PADDING in ceu-page-tweaks.php.
       !important is required to beat Elementor's own per-element rule, which
       also means the padding control for this section no longer has any effect
       in the editor. Change the value here, not there. */
    .elementor-element.elementor-element-85de88e {
        padding-top: <?= esc_html(CEU_USER_TOP_PADDING) ?> !important;
    }
    </style>
    <?php
}, 99);
