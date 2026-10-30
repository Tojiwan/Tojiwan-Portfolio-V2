# Portfolio Checklist — Priorities, Done + Remaining

Updated: 2026-10-29. Historical verification dates are retained below.
Implementation status is based on source review. Content accuracy, browser behavior,
and deployment are not verified unless explicitly noted. This is the single tracker,
consolidated from the former to-do list and checklist. Historical checks do not imply
that later changes or the live deployment have been verified.

## Next actions — in priority order

1. Review the shared About profile card, portrait crop, Education summary, theme transition, and footer styling.
2. Review screenshots and captions in all seven galleries; test physical iPhone/Safari swiping, closing, scrolling, and full-size zoom.
3. Confirm final content: Vehiserve contributions, project labels, skills, experience, services, availability, and any additional demo URLs.
4. Complete the full-site accessibility, responsive, link, contrast, and console checks below.
5. Verify deployment configuration, contact delivery, Speed Insights, and performance with real assets.
6. Reconcile design/build documentation with final choices. Commit or push only when requested by the owner.

## Projects, About, and theme updates

- [x] Refine the About Profile File into a developer identity card (2026-10-30): `ID/001` header, framed portrait, blue identity accent, secondary role line, location/status row, file-path footer, and restrained hover lift. Lint/build pass; desktop, light/dark, 390px, and 320px checks confirm square crop, top alignment, and no horizontal overflow. Owner visual review remains pending.

- [x] Apply code-review fixes 1–8 (2026-10-30). Hide the intro before paint on repeat loads (`.intro-seen`) and from first paint under reduced motion; release the page if readiness throws; swallow skipped view-transition `AbortError`s; catch clipboard failures and reveal the demo password for manual copy; restore 24px demo-password targets and hover; ignore touch `pointermove` in ScrambledText. #7 was resolved by removing Zapier from the toolbox and deleting its unused icon. `check-page-intro` now verifies the pre-paint class/display, `check-intro-progress` adds an API-error release case, `check-theme-switch` adds rapid toggles with no `unhandledrejection`, and `check-scrambled-text` verifies touch does not scramble. Lint/build pass. The three check scripts are no longer ignored; include them in the commit.

- [x] Fix theme-switch lag from per-character color transitions (2026-10-30). Exclude TextType/ScrambledText descendants from the global transition window; glyphs inherit container colors. Local production measurements: baseline ~11,400 animations and 1353–1632ms on slow toggles; updated 1554 animations and 175–229ms across three toggles. `scripts/check-theme-switch.mjs` guards against glyph transitions and checks persistence. Measurements are local synthetic timings, not field INP; physical-device performance remains pending.
- [x] Make the theme swap instant for faster feedback (2026-10-30). A two-frame `.theme-switching` window disables all element transitions (icons exempt), leaving only four sun/moon animations and 74–93ms to first frame in local runs. Earlier toggles are instantly colored; icon fade/rotate shortened to 100ms. Persistence and reduced motion re-verified with `scripts/check-theme-switch.mjs`.
- [x] Smooth the swap without per-element work (2026-10-30): wrap the instant recolor in `document.startViewTransition` (220ms root crossfade) with reduced-motion and unsupported-browser fallbacks. Local check confirms three crossfades (290–490ms to first crossfade frame including Playwright polling), icon transitions, persistence, and no crossfade under reduced motion. Snapshot capture is the main cost; real-device timing remains unverified.

- [x] Refine TOJIWAN intro with a top-down scan, subtle pixel flicker, and scattered dissolve inspired by HAVU (2026-10-30). Retain real success-only asset progress. Minimum hold is now 1100ms, followed by 450ms dissolve and 240ms fade; typing stays gated throughout. Production browser checks cover dissolve gating, session persistence, reduced motion, and mobile layout.

- [x] Make intro progress success-only (2026-10-30): explicitly load/verify all four required font faces and verify decoded hero image dimensions. Failures settle without advancing the bar; timeout freezes progress before exit. `scripts/check-intro-progress.mjs` passes success, rejected fonts, missing font faces, image failure, combined failure, and timeout cases; all release the page.

- [x] Add a theme-aware pixel TOJIWAN intro with segmented asset-readiness bar (2026-10-30). Shows once per tab session, waits at least 900ms and at most 4s for fonts/hero image before a 240ms exit, then releases typing, scramble, and reveal animations. Reduced motion skips the intro; no-JS hides it; blocked storage and stalled image decoding cannot trap visitors. Production build and browser fallback checks pass; physical-device review pending. Repeatable check: `scripts/check-page-intro.mjs`.

- [x] Apply ScrambledText consistently to all section introductions, including Projects, Experience, Services, and a new short Tools I Work With description (2026-10-29). Lint/build pass.

- [x] Extend ScrambledText to the four service descriptions, contact introduction, and footer bio marked by the owner (2026-10-29). Lint/build pass; browser check confirms all six additions and no 390px horizontal overflow.

- [x] Add scramble intro, hover, and click to long descriptions (hero, About/Education, projects, experience), reusing installed GSAP (2026-10-29). Production browser check passes for hover/click restoration, Education, mobile overflow, and live reduced motion; repeatable check in `scripts/check-scrambled-text.mjs`. Physical-device visual review remains pending.

- [x] Fix visible duplicate heading sizing copies caused by missing/stale global layout CSS; colocate critical hiding/overlap styles with both heading components and include About Me in the one-time animation (2026-10-29). Browser inspection confirms all 21 heading instances hide sizing and screen-reader copies correctly.

- [x] Apply one-shot, first-visible TextType to About/Education panel headings, Projects & Contributions and project titles, Tools I Work With and skill-group titles, Experience, Services, and Let's Work Together (2026-10-29). Preserve typography/colors and heading space; retain About panels so switching tabs does not restart typing. Lint/build and production browser checks pass for visibility, completion, no looping, tab persistence, reduced motion, and 390px overflow. Repeatable focused check: `scripts/check-typed-headings.mjs`.

- [x] Integrate React Bits CursorGrid as a fixed whole-page background, with 34px cells, cyan highlights, click pulses, and theme-aware grid colors. No added dependencies; source and license are local (2026-10-28).
- [x] Preserve the static grid for reduced motion and unavailable/lost WebGL; use a viewport-sized canvas, cap pixel ratio at 1.5, disable intro/ambient effects, and pause idle/hidden rendering. `scripts/check-background.mjs` verifies viewport sizing, idle pause, pointer/click wake, controls, live reduced-motion changes, and context-loss fallback.
- [ ] Owner review and physical-device/deployed performance checks for the interactive background.
- [x] CursorGrid lint/build and local production browser checks pass (2026-10-28): both themes, 390/1440px viewport sizing, idle rendering pause, pointer/click wake, usable controls, live reduced-motion fallback, and unavailable/lost WebGL fallback. Port 3000 had stale CSS during the dev check; restart that server before reviewing there.
- [x] Replace the hero heading reveal with React Bits TextType (vendored in `src/components/react-bits/`, gsap installed): "Hi, I'm" types once in Courier Prime with fade-in characters and an accent bar cursor; "Tojiwan." keeps the same `--accent-strong` name color (char 9 onward). Reduced motion renders the full line instantly; layout is reserved by a hidden measure line. Local prod check on port 3030: typing, final text, both-theme colors, bar cursor, tab interplay, 390/1440px, no overflow (2026-10-28).

- [x] Replace the bracketed profile card with the owner-approved hanging-ID layout: cyan stitched-style lanyard, slot and metal-style clip, larger portrait, bold name, and compact role/location details. Shared across both tabs and stationary. Lint/build and local production checks pass at 320/390/1440px in both themes (2026-10-28).

- [x] Refine the shared profile card with a double-edge frame, portrait corner brackets, subtle static scanlines, centered identity, and location strip. Remove the contact-button row. Targeted lint and 390/1440px browser checks pass in both themes (2026-10-28); owner review pending.

- [x] Lint, production build, and expanded browser self-check pass for all 28 screenshots and original-file links (2026-10-28).

- [x] Connect the Facebook RAG Chatbot, Telegram Budget Tracker, and One Pampanga RAG Chatbot workflow screenshots with captions, alt text, and measured dimensions (2026-10-28). All seven projects now have real covers and galleries: 28 screenshots total.

- [x] Owner approved the `projects-terminal/` reference layouts: information left, preview right on desktop; stacked mobile layout.
- [x] Owner approved one project at a time plus a separate gallery modal, Swiper React, no autoplay/loop, and initially labelled placeholders. All supplied assets are now connected.
- [x] Implement project navigation, large terminal layout, and real screenshot covers for all seven projects.
- [x] Implement modal screenshot navigation, Escape/close, focus trapping/return, and background scroll locking (gallery now also stays open through dev StrictMode effect replay; Escape still closes, 2026-10-24).
- [x] Verify keyboard navigation, mouse drag, 44px project targets, inactive slides, reduced motion, both themes, and 320–1440px layouts (2026-10-23).
- [x] Run lint/build and local production browser checks; reusable self-check at `scripts/check-projects.mjs`.
- [x] Check physical-device swiping and performance after adding real screenshots.
- [x] Connect the initial 25 supplied screenshots for Dental Clinic (7), Ramen Makimura (9), Vehiserve (4), and Shop.Co (5), with captions, alt text, measured dimensions, and cover ordering. The three workflow screenshots above bring the total to 28; all projects now have real images.
- [x] Match gallery reference with desktop side arrows, mobile horizontal selectors, uncropped images, clickable covers, and full-size links.
- [x] Preserve natural landscape cover proportions and contain gallery images without cropping. Static covers avoid nested swipe interactions.
- Reference layouts: `design-review/projects-terminal/`; desktop information left / preview right, mobile content followed by preview, actions, access details, and technologies.
- [x] Local production checks on 2026-10-24: all 25 optimized images load; original-file links return images; keyboard navigation, focus cycling/return, and scroll locking pass. Both themes checked at 320–1440px and short/landscape 390×440, 393×852, 852×393 viewports. Lint/build pass.
- [x] Owner review of captions/screenshots and real-device Safari/full-size zoom testing before publishing.
- [x] Owner marked the original `projects-section-slider` review complete; that redesign is merged. Subsequent About/theme review remains pending below.
- [x] Replace About's avatar preview with a school-ID-inspired profile card using the graduation portrait, name, role, location, and contact links (2026-10-28).
- [x] Add an Education summary covering TVL-ICT Grades 11–12 at Mary the Queen College and BS Information Technology at DHVSU; reuse the same profile card across both tabs (2026-10-28).
- [x] Synchronize theme colors and sun/moon fade with a subtle 30-degree rotation at 180ms; keep toggle geometry stable and respect reduced motion (2026-10-28).
- [x] Verify About at 320/768/1024/1440px in both themes, portrait loading, keyboard tabs, theme keyboard activation/persistence, and reduced motion. Lint and production build pass (2026-10-28).
- [x] Owner visual review of the profile card, Education summary, and theme transition on a physical device.
- [x] Simplify the hero name to plain accent-colored text (`.hero-name`), without the previous badge treatment.

## Existing implementation

- [x] Next.js 16, TypeScript, Tailwind v4, ESLint, Motion, and Lucide.
- [x] Owner upgraded Next.js to ^16.4.2; this records the version update, not a fresh security audit.
- [x] Graph-paper background, square panels, borders, and hard shadows.
- [x] Owner confirmed Courier Prime and IBM Plex Mono only; all headings, including the hero, use Courier Prime. Removed the Space Grotesk loader and its automatic preload.
- [x] Sticky header, mobile menu with expanded state, footer, skip link, and matching section anchors.
- [x] Hero, About/Education tabs, projects, skills, experience, services, and contact sections.
- [x] Shared cards, terminals, badges, action links, rolling links, and scroll reveals.
- [x] Tojiwan/Jake identity, hero introduction, contact details, and footer copy.
- [x] Seven named projects, including Dental Clinic Management System, with descriptions, stacks, and at most three visible key deliverables.
- [x] Personalized skills, newest-first experience, and services in `src/data/skills.ts`.
- [x] SVG toolbox logos with keyboard-accessible category tabs; Docker, ChatGPT, and OpenCode included in tools.
- [x] Shop.Co demo URL, password reveal, and original Figma design credit; destination checks remain pending.
- [x] Render demo/design links only when their URLs exist; the unused `liveUrl` field was removed.
- [x] Current external website links use new tabs with `noopener noreferrer`; section anchors stay in-page.
- [x] CV link points to `public/files/Jake-Peralta-Resume.pdf`; locally verified production response was 200 PDF on 2026-10-21.
- [x] Personalized title, description, and Open Graph image; metadata origin supports `SITE_URL` and Vercel fallback.
- [x] Persistent theme toggle; light "paper mode" is the served default, dark console restored on toggle (owner decision, 2026-10-20).
- [x] Scroll reveals, link hover/focus animation, and reduced-motion handling are implemented.
- [x] Direct email, phone, GitHub, and LinkedIn links; contact form sends via Formspree with sending/success/error states.
- [x] README describes setup, content, URL configuration, and outstanding integrations.
- [x] Vercel Speed Insights integrated; deployed collection remains unverified.

## Remaining — Launch priorities

### 1. Project evidence and final content
- [x] Revise Dental Clinic and Facebook RAG Chatbot descriptions to emphasize contributions and helping build the projects; omit discontinued-status wording from public copy per owner preference (2026-10-28).
- Owner confirmed both projects are discontinued; public copy focuses on contributions rather than current availability.
Real screenshots for all seven projects are connected; further Vehiserve details await owner input.
- [x] Use owner-supplied assets in `public/Dental-Clinic/`, `public/Ramen-Makimura/`, `public/Vehiserve/`, and `public/Shop.Co/`, with captions and descriptive alt text.
- [x] Replace gallery placeholders for the four supplied project sets.
- [x] Supply and connect assets for all three automation/chatbot projects (2026-10-28).
- [ ] Add verified live URLs where available; source links are optional and should appear only when provided.
- [x] Correct project name and slug to Vehiserve (owner confirmed, 2026-10-28).
- [x] Vehiserve includes its Motor Pool Management System purpose and core features.
- [ ] Confirm and expand personal-contribution details for Vehiserve.
- [x] Project file labels are distinct.
- [ ] Review placeholder-like project slug names.
- [x] Confirm skills, role titles, dates, company/project descriptions, availability, and service scope with the owner.
- [x] Replace generic About copy with personalized introduction and AI-tool usage.
- [x] Zapier was removed from the toolbox and its unused icon deleted (2026-10-30); Judge.me, Xendit, PayMongo, Klaviyo, and n8n are the current Shopify/automation tools.
- [x] About dossier trimmed to professional facts per owner decision (2026-10-20): keeps languages, base, timezone, status; DOB, birthplace, age, sex, civil status, religion, and nationality stay out of the page (CV territory).
- [x] Clarify timezone wording as UTC+8 (Philippine Time).
- [x] Owner confirmed the linked CV is current.
- [x] Test the CV download in the browser.

### 2. Assets and design consistency
- [x] Add the real hero portraits on the left, cycling through all five photos from pfp-1 on mouse hover or click/tap/keyboard activation.
- [x] Replace the T mark with a cyan robot-terminal logo in the navbar, SVG favicon, and ICO fallback.
- [x] Owner confirmed navbar logo and browser-tab favicon appearance with a screenshot on 2026-10-18; cross-browser/deployed verification remains pending.
- [x] Confirm typography: Courier Prime and IBM Plex Mono only.
- [x] Confirm the intended default theme: light "paper mode" served by default with a persistent dark console (owner decision, 2026-10-20); documents reconciled.
- [x] Refine theme surfaces, muted text, cyan accents, focus color, and shared terminal/card hard shadows.
- [ ] Finish replacing remaining legacy literal shadow colors if visual review shows inconsistencies.
- [ ] Check contrast in both themes, especially terminals, accent labels, buttons, and focus outlines.
- [x] Normalize theme-toggle dimensions with other header controls.


### 3. Accessibility and contact
- [x] Add About arrow/Home/End keyboard handling, managed tab stops, and tab/panel associations.
- [x] Add toolbox ArrowUp/ArrowDown/Home/End handling, managed tab stops, and tab/panel associations.
- [x] Make About title/path labels reflect the selected file.
- [x] Add Escape handling to the mobile menu, restoring focus when dismissed from navigation.
- [x] Contact form connected to Formspree with validation, sending/success/error feedback, spam honeypot, and direct-email fallback.
- [x] Test a real submission and verify inbox delivery (localhost test on 2026-10-16; owner confirmed with screenshots).
- [ ] Check the free-plan submission usage.

### 4. Release checks
- [x] Lint and production build pass, including TypeScript and static generation (latest recorded check: 2026-10-28).
- Gallery browser checks observed no JavaScript runtime errors; local Speed Insights 404 is expected. The remaining console check below is a full-site/deployed pass.
- [ ] Check browser console errors separately from build output.
- [ ] Test 360px / 768px / 1280px, zoomed text, and landscape without clipping or horizontal overflow.
- [ ] Check long contact links, terminal headers, education cards, and desktop navigation at intermediate widths.
- [ ] Full-site keyboard-only pass: skip link, navigation, About/toolbox tabs, theme toggle, password reveal, contact actions, and gallery controls.
- [ ] Verify visible focus and reduced-motion behavior in both themes; no essential hover-only content.
- [ ] Complete physical-device Safari and screen-reader checks.
- [ ] Verify image paths, CV, external destinations, and any live project URLs.
- [ ] Final content review: no accidental placeholders, unsupported claims, or broken actions.
- [ ] Recheck deployed performance with all 28 screenshots; investigate mobile LCP and unused JavaScript, including whether inactive portraits can be deferred further. Historical PageSpeed mobile result (2026-10-22): 92 Performance / 100 Accessibility / 100 Best Practices / 100 SEO, LCP 2.9s; this predates the latest changes.

### 5. Deployment
- [ ] Set production `SITE_URL`; add canonical URL when known.
- [x] Projects redesign merged into main through PR #1 (`e95a6a4`). This historical milestone does not mark subsequent working-tree edits as committed.
- Latest local commit at this review: `2e04984`; workflow screenshots and project copy were committed in `1d07dd7`. About/theme edits and tracker consolidation are still uncommitted (2026-10-28).
- [ ] Verify push/remote status.
- [ ] Verify hosting/preview deployment status and test desktop/mobile on the deployed URL.
- [ ] Verify deployed metadata, social image, favicon, and CV.
- [ ] Verify deployed contact-form delivery and Speed Insights data collection.
- [ ] Add custom domain if wanted; update `SITE_URL` and redeploy.

## Optional visual polish
- [x] Hero portrait cycling supports mouse hover, click/tap, and keyboard activation; transitions respect reduced motion.
- [x] Education now shares Bio's portrait profile card, replacing the graduation-cap ASCII variant (2026-10-28).
- Current hero name is static; `<hello_world />` uses the typewriter animation with reduced-motion support.
- [x] Shared cards/terminals have restrained hover lift and focus-within feedback; existing scroll reveals retained.
- [x] Add short theme-color transitions with reduced-motion support.
- [x] Refine footer with a theme-aware panel, responsive columns, Resources links, and ASCII Tojiwan wordmark.
