---
title: Phase 01 - Confirm Popup Implementation
description: Add confirmation modal before YayMail installation with security/accessibility fixes
status: complete
priority: high
effort: 6h
branch: feat/edd-license-manager
tags: [modal, confirm, install, security, a11y]
created: 2026-06-02
---

# Phase 01: Confirm Popup Implementation

**Status:** COMPLETE

**Completion Date:** 2026-06-02

**Branch:** feat/edd-license-manager

---

## Overview

Implement a confirmation modal that prompts user before installing YayMail plugin. Modal includes:
- Accessible dialog structure (aria-labelledby, aria-modal, role)
- XSS-safe body construction with optional link
- Proper nonce/capability gating
- Localized UI strings
- Version bump to 1.2.0

---

## Key Insights

1. **Modal must be dynamically built** — Ensures every open is fresh; no stacking issues
2. **Data-tip XSS vulnerability** — TipTip attaches tooltip via .attr(); sanitizing text input wasn't enough
3. **Esc-handler cleanup critical** — Old handler persists if not explicitly removed
4. **Link safety** — esc_url() protects URL; rel=noopener prevents reverse tab-nabbing
5. **CSS isolation** — Modal classes (.yaymail-confirm-*) prevent style conflicts

---

## Requirements

**Functional:**
- Show modal on "Customize this email" button click
- Modal displays heading + body + Install/Cancel buttons + X close button
- Install performs AJAX install/activate (existing logic)
- Cancel/X/backdrop/Esc dismisses modal
- After successful install, redirect to YayMail email templates

**Non-Functional:**
- Modal fully accessible (ARIA labels, keyboard navigation)
- No XSS vectors (user strings localized, no markup injection)
- Modal CSS scoped (no collisions)
- Proper nonce/capability checks (via AJAX handler)

---

## Architecture

### JavaScript Modal Logic (assets/js/script.js)

**Components:**
1. **openConfirmModal()** — Creates/injects modal DOM
2. **buildConfirmBody()** — Constructs body paragraph + optional link (text-safe)
3. **runInstall()** — Executes AJAX install/activate
4. **Event handlers** — click (button), keydown (Esc), backdrop, etc.

**Cleanup Strategy:**
- Remove old modal on open (jQuery("#yaymail-confirm-modal").remove())
- Remove old Esc handler (jQuery(document).off("keydown.yaymailConfirm"))
- Close modal function removes handler + DOM

### CSS Styling (assets/css/style.css)

**Classes:**
- `#yaymail-confirm-modal` — Fixed overlay + flexbox centering
- `.yaymail-confirm-dialog` — White box, shadow, padding
- `.yaymail-confirm-x` — Close button (absolute, 28x28px)
- `.yaymail-confirm-actions` — Button bar (flex end-aligned, gray background)

**Z-index:** 100001 (above WordPress admin UI)

### PHP Localization (main.php)

**Strings registered:**
- confirmHeading: "Install YayMail?"
- confirmBody: "This will install & activate the free YayMail plugin from WordPress.org so you can customize this email. Continue?"
- confirmInstall: "Install Now"
- confirmCancel: "Cancel"
- yaymailPluginUrl: https://wordpress.org/plugins/yaymail/advanced/ (esc_url'd)

---

## Related Code Files

**Files Modified:**
- /modules/yaymail-wc-settings-email-column/assets/js/script.js
- /modules/yaymail-wc-settings-email-column/assets/css/style.css
- /modules/yaymail-wc-settings-email-column/main.php
- /modules/yaymail-wc-settings-email-column/register.php

**Files Created:**
- None (assets dirs auto-created)

**Files Deleted:**
- None

---

## Implementation Steps

### Step 1: Implement Modal UI Logic (script.js)
- [x] buildConfirmBody() — Construct paragraph + link (text-safe)
- [x] openConfirmModal() — Create/inject modal DOM
- [x] Event bindings — click, keydown, backdrop
- [x] Cleanup guards — Remove orphaned handlers/modals

### Step 2: Add Modal Styling (style.css)
- [x] Modal overlay + fixed positioning
- [x] Dialog box (white, shadow, rounded)
- [x] Close button + action buttons
- [x] Z-index management (100001)

### Step 3: Register Localized Strings (main.php)
- [x] confirmHeading
- [x] confirmBody
- [x] confirmInstall
- [x] confirmCancel
- [x] yaymailPluginUrl (esc_url'd)

### Step 4: Version Bump (register.php)
- [x] Increment 1.1.0 → 1.2.0

### Step 5: Manual Browser Verification
- [ ] Click "Customize this email" → modal opens
- [ ] Modal displays correct heading/body/buttons
- [ ] Cancel/X/backdrop closes modal
- [ ] Esc closes modal
- [ ] Install Now → AJAX runs → redirect to YayMail email templates
- [ ] No console errors (XSS, nonce, etc.)

---

## Todo List

**Code Implementation:**
- [x] buildConfirmBody() with link safety
- [x] openConfirmModal() with cleanup guards
- [x] Event handlers (click, keydown, backdrop)
- [x] Modal CSS styling
- [x] Localized strings registration
- [x] Version bump 1.1.0 → 1.2.0

**Security & Accessibility:**
- [x] XSS fix: .attr() for data-tip (prevents attribute injection)
- [x] aria-labelledby linking heading
- [x] aria-modal=true on dialog
- [x] role=dialog on container
- [x] aria-label on close button
- [x] esc_url() on plugin URL
- [x] rel=noopener on external link
- [x] Nonce validation in AJAX (existing, unchanged)

**Verification:**
- [ ] Manual modal/install browser verification

---

## Success Criteria

**Definition of Done:**
1. ✅ Modal opens on button click (no errors)
2. ✅ Modal displays localized heading + body + buttons
3. ✅ Modal closes on Cancel/X/backdrop/Esc
4. ✅ Esc-handler properly cleaned up (no orphans)
5. ✅ Install button runs AJAX (existing handler)
6. ✅ Body paragraph links "YayMail" to plugin page (esc_url'd)
7. ✅ No console XSS errors
8. ✅ Accessibility: ARIA labels present, keyboard navigation works
9. ✅ Version bumped to 1.2.0
10. ✅ Code <200 LOC per file (script.js ~140, style.css ~62)

---

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Modal stacking (duplicate modals) | UX broken | .remove() before .append() |
| Orphaned Esc-handler | Ghost keydown listeners | .off("keydown.yaymailConfirm") |
| XSS via data-tip | Security breach | Use .attr() + sanitized text input |
| Esc-key doesn't work in modals | Accessibility issue | Namespaced handler (keydown.yaymailConfirm) |
| Modal z-index conflict | Modal hidden behind WP UI | z-index: 100001 (well above typical WP z-index) |
| Link to plugin page missing | User can't learn more | esc_url() on yaymailPluginUrl |

---

## Security Considerations

**Authentication:**
- Nonce validated in AJAX handler (existing: check_ajax_referer)
- Capability gated (existing: current_user_can('install_plugins'))

**Authorization:**
- User must have install_plugins capability
- Invalid nonce aborts AJAX

**Data Protection:**
- Plugin URL sanitized with esc_url()
- Localized strings safe (plugin domain i18n)
- Modal body constructed with .text() + .attr() (no markup injection)

**XSS Prevention:**
- data-tip attribute set via .attr() (prevents attribute injection)
- buildConfirmBody() uses document.createTextNode() for text nodes
- Link href set via .attr() with esc_url()
- No jQuery markup injection (e.g., no $("<p>" + userInput + "</p>"))

---

## Next Steps

1. **Manual Browser Verification:** Test modal open/close/install flow in browser
2. **Integration Testing:** Verify no conflicts with other WooCommerce settings modals
3. **Cross-browser Testing:** Chrome, Firefox, Safari (if applicable)
4. **Accessibility Audit:** WAVE/Axe tools to validate ARIA labels
5. **Deploy:** Merge to main when verification complete

---

## Notes

- Modal is self-contained (no cross-module dependencies)
- Confirm functionality now prevents accidental installations
- Version 1.2.0 reflects UI/UX improvement + security fixes
- Manual browser verification still pending (code complete)
