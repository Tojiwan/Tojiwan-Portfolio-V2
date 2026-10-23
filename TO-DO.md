# To Do — Prioritized Work Order

Updated: 2026-10-23. Full completion and verification checklist: `checklist.md`.

## Priority 1 — Projects terminal redesign (approved 2026-10-23)

- Work on `projects-section-slider`; do not push or merge before owner review.
- References: `design-review/projects-terminal/` desktop, mobile, and gallery images. Desktop information left / preview right; mobile stacks content, preview, actions, access details, and technologies.
- [x] Replace the project grid with one large terminal at a time, using Swiper React, named project navigation, previous/next, and a counter. No autoplay or looping.
- [x] Open a separate screenshot slider in a terminal-style modal; static cover inside the project prevents nested swipe interactions.
- [x] Start with explicitly labelled placeholders. Real screenshots, captions, alt text, and verified deliverables remain owner-supplied.
- [x] Verify 44px project controls, keyboard navigation, inactive-slide focus exclusion, modal Escape/focus return, scroll locking, reduced motion, and both themes at 320–1440px (local production, 2026-10-23).
- [x] Run lint/build and browser self-check (`scripts/check-projects.mjs`).
- [ ] Owner visual review, real-device touch test, and performance check with real assets before merge. Preserve unrelated owner requests below.
- [ ] Address existing Next.js 16.4.0 security advisory in a separate dependency update (`npm audit` offers 16.4.2).

## Latest implementation update

- Project gallery implementation is now approved with placeholders; real assets and Vehiserive details remain owner-managed.
- Owner confirmed the current CV. Hero cycles through all five supplied portraits in the left preview panel, starting with pfp-1, on mouse hover or click/tap/keyboard activation.
- Timezone wording is clarified as UTC+8 (Philippine Time).
- Theme palette/focus/shared shadows, header sizing, About tab keyboard support, and mobile-menu Escape behavior are implemented.
- Robot-terminal logo is implemented in the navbar, SVG favicon, and ICO fallback; owner confirmed navbar/browser-tab appearance on 2026-10-18.
- SVG toolbox logos and keyboard-accessible category tabs, personalized About copy, and footer resources/ASCII wordmark are implemented.
- Shop.Co has a demo URL, password reveal, and Figma design credit. Destination checks remain pending.
- Added portrait cycling, Education cap ASCII, card feedback, and theme transitions. The hero name is static; the `<hello_world />` boot line uses the typewriter animation.
- Vercel Speed Insights is integrated; deployed data collection is not verified.
- Contact email/phone/GitHub/LinkedIn are all configured; no placeholder destinations were found. Form now sends via Formspree.
- Lint and production build passed on 2026-10-18. Browser visual/accessibility checks are the immediate next step. Owner confirmed successful Formspree inbox delivery from localhost with screenshots of the 2026-10-16 test.

## Deferred — Project evidence (resume when owner supplies content)

- [ ] Collect project screenshots, short captions, and any verified live URLs. Start with the strongest projects.
- [ ] Replace labelled gallery placeholders with approved screenshots after the redesign above.
- [ ] Keep demo/design links conditional on their corresponding URLs; `liveUrl` is no longer part of the project model.
- [ ] Expand Vehiserive's summary and verify project names, contribution details, and repeated file labels.
- [x] Provide the main hero portrait and confirm the current CV.
- [x] Add Shop.Co demo access, password reveal, and original Figma design credit.

## Priority 2 — Fix theme consistency and usability

- [x] Confirm typography: Courier Prime and IBM Plex Mono only; hero now uses Courier Prime and the Space Grotesk loader/preload is removed.
- [x] Confirm final default theme: light "paper mode" served by default, dark console on toggle (owner decision, 2026-10-20); guides reconciled with approved fonts.
- [x] Refine dark/light surfaces, text, accent, and focus colors; browser contrast review remains.
- [x] Use slate hard-shadow tokens for shared terminals/cards in dark mode.
- [x] Fix theme-toggle dimensions to align with neighboring header controls.
- [x] Complete About tab keyboard behavior and make title/path labels follow the selected tab.
- [x] Replace the T mark with the robot-terminal logo in the navbar, SVG favicon, and ICO fallback; owner confirmed browser appearance. 

## Priority 3 — Finish launch content and contact

- [ ] Verify experience, skills (including Zapier), services, and availability. Owner already confirmed CV accuracy; browser download check remains.
- [x] Rewrite generic About wording with personalized copy and AI-tool usage.
- [x] Clarify timezone wording as UTC+8 (Philippine Time).
- [x] Contact form connected to Formspree (sending/success/error states, spam honeypot, direct-email fallback).
- [x] Test a real form submission and verify delivery (localhost test on 2026-10-16; owner confirmed with screenshots).

## Priority 4 — Verify and deploy

- [ ] Test both themes at 360px, 768px, and 1280px, plus zoom and landscape.
- [ ] Test keyboard navigation (including toolbox tabs and password reveal), focus visibility, reduced motion, links, and CV download. Test gallery controls when implemented.
- [x] Run lint and a production build (2026-10-18).
- [ ] Inspect browser console errors.
- [ ] Configure `SITE_URL`, verify preview hosting, and check deployed social previews/favicon.
- [x] Commit current application changes; latest commit `aed8e69` includes the robot-terminal logo. Working tree was clean during the 2026-10-18 review.
- [ ] Verify push/remote status and complete deployed desktop/mobile checks.
- [ ] Verify deployed Formspree delivery and Speed Insights data collection.
- [ ] Sync design/build documentation with the final design choices.

## Priority 5 — Optional polish after the essentials

- [x] Cycle through all five hero portraits from pfp-1 on mouse hover or click/tap/keyboard activation.
- [x] Display the graduation-cap ASCII for Education; intended reference comparison awaits its location.
- Current hero name is static; the decorative boot line has reduced-motion-aware typewriter animation.
- [x] Refine card hover/focus states; retain existing scroll reveals.
- [x] Animate theme switching with reduced-motion support.
- [x] Refine footer with Resources links, responsive columns, and the ASCII Tojiwan wordmark.

## Already addressed from the original list

- [x] Hide Visit Site when no live URL exists. The image-gallery fallback is still pending above.
- [x] Open current external website links in new tabs; retain in-page anchors and native email/phone behavior.
- [x] Replace most section placeholder descriptions with personalized copy. Final content review remains above.
- [x] Implement baseline scroll reveals and link hover/focus animations. Additional animation is refinement, not missing infrastructure.

## What to supply next

1. Review the site in both themes at mobile/tablet/desktop widths (see README).
2. Confirm portrait selection/crop and footer styling.
3. Supply the Education ASCII reference location if a different design is wanted.
4. Provide project screenshots and Vehiserve details when ready; these are deferred.
