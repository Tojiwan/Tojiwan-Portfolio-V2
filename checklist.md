# Portfolio Checklist — Done + Remaining

Updated: 2026-10-24. Historical verification dates are retained below.
Implementation status is based on source review. Content accuracy, browser behavior,
and deployment are not verified unless explicitly noted. See `TO-DO.md` for work order.

## Active — Projects & Contributions redesign

- [x] Owner approved the `projects-terminal/` reference layouts: information left, preview right on desktop; stacked mobile layout.
- [x] Owner approved one project at a time plus a separate gallery modal, Swiper React, no autoplay/loop, and labelled placeholders pending assets.
- [x] Implement project navigation, large terminal layout, and placeholder covers.
- [x] Implement modal screenshot navigation, Escape/close, focus trapping/return, and background scroll locking (gallery now also stays open through dev StrictMode effect replay; Escape still closes, 2026-10-24).
- [x] Verify keyboard navigation, mouse drag, 44px project targets, inactive slides, reduced motion, both themes, and 320–1440px layouts (2026-10-23).
- [x] Run lint/build and local production browser checks; reusable self-check at `scripts/check-projects.mjs`.
- [ ] Check physical-device swiping and performance after adding real screenshots.
- [x] Connect the 25 supplied screenshots for Dental Clinic (7), Ramen Makimura (9), Vehiserve (4), and Shop.Co (5), with captions, alt text, and measured dimensions. Other projects retain labelled placeholders.
- [x] Match gallery reference with desktop side arrows, mobile horizontal selectors, uncropped images, clickable covers, and full-size links.
- [x] Local production checks on 2026-10-24: all 25 optimized images load; original-file links return images; keyboard navigation, focus cycling/return, and scroll locking pass. Both themes checked at 320–1440px and short/landscape 390×440, 393×852, 852×393 viewports. Lint/build pass.
- [ ] Owner review of captions/screenshots and real-device Safari/full-size zoom testing before publishing.
- [ ] Owner review on `projects-section-slider` before any push or merge.

## Existing implementation

- [x] Next.js 16, TypeScript, Tailwind v4, ESLint, Motion, and Lucide.
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
- [x] `npm run lint` passed on 2026-10-18.

## Remaining — Launch priorities

### 1. Project evidence and final content
Real screenshots for four projects are connected; remaining automation/chatbot captures and further Vehiserive details await owner input.
- [x] Use owner-supplied assets in `public/Dental-Clinic/`, `public/Ramen-Makimura/`, `public/Vehiserve/`, and `public/Shop.Co/`, with captions and descriptive alt text.
- [x] Replace gallery placeholders for the four supplied project sets.
- [ ] Supply assets for the three remaining automation/chatbot projects.
- [ ] Add verified live URLs where available; source links are optional and should appear only when provided.
- [ ] Expand Vehiserive with its purpose, features, and personal contribution; confirm its spelling.
- [ ] Review repeated project filenames and placeholder-like slug names.
- [ ] Confirm skills, role titles, dates, company/project descriptions, availability, and service scope with the owner.
- [x] Replace generic About copy with personalized introduction and AI-tool usage.
- [ ] Confirm Zapier skill accuracy; it remains in the toolbox but is no longer claimed in About copy.
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
- [ ] Check toggle animation when pressed, it should be smooth transition
- [ ] Check about me, terminal design i wanted the older design since its better.
- [ ] Check "Hi, I'm Tojiwan", maybe remove the design on the "tojiwan part" just make the txt blue/cyan?
- [ ] Remove Icon, on header the one on the left side. Also, on header remove the right up button icons 


### 3. Accessibility and contact
- [x] Add About arrow/Home/End keyboard handling, managed tab stops, and tab/panel associations.
- [x] Add toolbox ArrowUp/ArrowDown/Home/End handling, managed tab stops, and tab/panel associations.
- [x] Make About title/path labels reflect the selected file.
- [x] Add Escape handling to the mobile menu, restoring focus when dismissed from navigation.
- [x] Contact form connected to Formspree with validation, sending/success/error feedback, spam honeypot, and direct-email fallback.
- [x] Test a real submission and verify inbox delivery (localhost test on 2026-10-16; owner confirmed with screenshots).
- [ ] Check the free-plan submission usage.

### 4. Release checks
- [x] Lint passes after the robot-terminal logo/navbar changes (2026-10-18).
- [x] Fresh production build passes, including TypeScript and 6/6 static pages (2026-10-18).
- [ ] Check browser console errors separately from build output.
- [ ] Test 360px / 768px / 1280px, zoomed text, and landscape without clipping or horizontal overflow.
- [ ] Check long contact links, terminal headers, education cards, and desktop navigation at intermediate widths.
- [ ] Keyboard-only pass: skip link, navigation, About/toolbox tabs, theme toggle, password reveal, and contact actions; gallery controls when implemented.
- [ ] Verify visible focus and reduced-motion behavior in both themes; no essential hover-only content.
- [ ] Verify image paths, CV, external destinations, and any live project URLs.
- [ ] Final content review: no accidental placeholders, unsupported claims, or broken actions.

### 5. Deployment
- [ ] Set production `SITE_URL`; add canonical URL when known.
- [x] Commit current application changes; latest commit `aed8e69` contains the robot-terminal logo. Working tree was clean during this review.
- [ ] Verify push/remote status.
- [ ] Verify hosting/preview deployment status and test desktop/mobile on the deployed URL.
- [ ] Verify deployed metadata, social image, favicon, and CV.
- [ ] Verify deployed contact-form delivery and Speed Insights data collection.
- [ ] Add custom domain if wanted; update `SITE_URL` and redeploy.

## Optional visual polish
- [x] Hero portrait cycling supports mouse hover, click/tap, and keyboard activation; transitions respect reduced motion.
- [x] Education now displays the existing graduation-cap ASCII variant.
- [ ] Compare Education ASCII against the owner's intended reference when supplied.
- Current hero name is static; `<hello_world />` uses the typewriter animation with reduced-motion support.
- [x] Shared cards/terminals have restrained hover lift and focus-within feedback; existing scroll reveals retained.
- [x] Add short theme-color transitions with reduced-motion support.
- [x] Refine footer with a theme-aware panel, responsive columns, Resources links, and ASCII Tojiwan wordmark.

## Documentation notes
- These planning documents are currently untracked; decide whether they should be version-controlled before committing.
- Build instructions reference absent `Light-Mode-StyleGuide.md` and `Dark-Mode-StyleGuide.md`; reconcile references with `Neo-Brutalist-Portfolio-Design-Guide.md`.
- Preserve square geometry and hard shadows when refining dark mode.
