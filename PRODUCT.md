# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Recruiters (primary): evaluating Jake for full-time and freelance web/Shopify/automation work; need to judge skill quickly from real evidence and reach him directly.
- Potential clients: small businesses needing websites, Shopify storefront customization, or workflow/chatbot automation (n8n).
- Fellow developers and collaborators: browsing code (GitHub link) and project approaches.

## Product Purpose

A single-page portfolio that showcases Jake Andrei R. Peralta's responsive websites, Shopify storefronts, and AI/workflow automation projects. Success: a recruiter or client understands his three specializations, sees concrete project evidence, and contacts him or downloads his CV.

## Positioning

One developer covering all three of web development, Shopify development, and automation — presented as equals, not a headline specialism plus sidelines. Real, inspectable work backs the claim (a live Shopify demo, n8n RAG chatbots, client and capstone projects) instead of adjectives. The "Tojiwan" developer persona gives it a distinct, memorable identity.

## Operating Context

- Recruiter evaluation happens fast on a single scrolling page: specialization clarity, project evidence, CV download, and contact paths must be reachable quickly.
- The three specialization pillars: web development, Shopify development, and automation. Two visitors matter most for contact: recruiters (full-time or freelance) and clients with a concrete project in mind.
- Jake operates from Pampanga, Philippines (UTC+8, Philippine Time). Native languages: Tagalog, Kapampangan, English.
- Deployment: Vercel. `SITE_URL` is unset in the repo; the production URL must be set per the README before social/canonical metadata resolves to the live origin.
- The contact form sends through Formspree (spam honeypot included). Formspree plan usage limits remain unverified.
- Demo passwords (e.g. Shop.Co's) are public visitor-access information, not private credentials.
- CV is a downloadable PDF asset in `public/files/`; the GitHub profile doubles as the code-evidence surface.

## Capabilities and Constraints

Confirmed functionality:

- Single page (Next.js 16, TypeScript, Tailwind CSS v4, Motion): hero, about, projects, tech stack/skills, experience, services, contact, footer.
- Persistent light/dark theme (light "paper mode" served by default; dark console on toggle) with a theme toggle.
- Reduced-motion support, keyboard accessibility commitments, and a skip-to-content link (README defines the pre-deployment browser checklist).
- Contact form via Formspree with sending/success/error states; locally verified delivery on 2026-10-16.
- Downloadable CV linked from hero and footer.

Constraints and explicitly undecided facts:

- Real project screenshots await owner input; the Projects branch includes an accessible gallery with explicitly labelled placeholder slots.
- Vehiserve details are owner-managed and deferred (spelling confirmed by the owner on 2026-10-28).
- Live URLs beyond the Shop.Co demo are unverified; add only verified links.
- Production `SITE_URL` value is not yet recorded.
- Vercel Speed Insights is mounted but data collection has not been verified in production.
- `src/data/*.ts` is the single content source for projects and skills/experience (newest-first order).

## Brand Commitments

Binding by owner decision (preserved verbatim, not expanded):

- The "Tojiwan" developer persona/wordmark, including the ASCII wordmark in the footer.
- The cyan robot-terminal logo (`src/app/icon.svg`), kept in sync with `favicon.ico`.
- CLI/terminal-inspired voice and labels.
- Neo-brutalist terminal aesthetic with square geometry, 2px borders, hard offset shadows, light-default "paper mode" themes with a persistent dark console (owner decision, 2026-10-20), graph-paper backgrounds, cyan #0ea5e9 accent, Courier Prime and IBM Plex Mono (self-hosted).
- "Preserve current branding — no redesign" is a standing instruction for all future work acting on this record.
- Owner-approved exception (2026-10-23): recreate Projects & Contributions following `design-review/projects-terminal/`. One project terminal at a time; desktop text left / preview right; separate modal screenshot slider. Swiper React, no autoplay or loop; labelled placeholders until screenshots arrive. Preserve the existing typography, palette, and terminal identity. Work stays on `projects-section-slider` pending owner review; do not push or merge yet.

## Evidence on Hand

- Seven real projects in `src/data/projects.ts`: Shop.Co (live Shopify demo + public demo password + Figma design credit), Facebook RAG Chatbot and One Pampanga RAG Chatbot, Telegram Budget Tracker, Ramen Makimura Website (internship contribution), Vehiserve (DHVSU capstone), and Dental Clinic Management System.
- Real experience records in `src/data/skills.ts`: Freelance Shopify Developer (Jan–Apr 2026); Tigernethost OPC (Web Developer & AI Automation Specialist, Jun–Dec 2025); Tigernethost OPC internship (Feb–May 2025).
- CV PDF: `public/files/Peralta, Jake Andrei R. (RESUME).pdf`.
- Five real portraits: `public/Profile_Avatar/pfp-*_result.webp`.
- Self-hosted fonts with OFL licenses in `public/fonts/`.
- Education: BS Information Technology, Don Honorio Ventura State University (2021–2025).
- Absences that future work must not fabricate: no testimonials, no performance benchmarks, no verified client list, no deployment analytics yet.

## Product Principles

1. Evidence beats claims: every specialization is proven by real, inspectable work — demos, code, and case facts, never invented proof.
2. Trio as equals: web development, Shopify development, and automation always appear with equal weight; no single pillar outranks the others in positioning.
3. Recruiter-first legibility: specializations, project evidence, CV, and contact paths are reachable with minimal scrolling or hunting.
4. Honest status labels: on-hold, deferred, and unanswered items stay labeled as such.
5. Persona supports, never obscures: the Tojiwan terminal persona adds character but clarity and usability always win over novelty.

## Accessibility & Inclusion

- Keyboard operability for all interactive widgets (tabs with arrow keys, mobile menu Escape-close, password reveal, portrait cycler) is a product standard, not an afterthought.
- Visible focus states in both themes.
- `prefers-reduced-motion` switches animations off gracefully.
- Text and border contrast must hold across persistent dark and light themes.
- External links open in new tabs; in-page links navigate in place; email/phone links open the visitor's own apps.
