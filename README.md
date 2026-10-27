# Tojiwan Portfolio

Jake Andrei R. Peralta's portfolio for web development, Shopify, and automation work. Built with Next.js 16, TypeScript, Tailwind CSS, and Motion.

**Live site:** [tojiwan-portfolio-v2.vercel.app](https://tojiwan-portfolio-v2.vercel.app/)

Light-default "paper mode" styling with a persistent dark console toggle, terminal-inspired panels, and a cyan robot-terminal logo. The site uses only self-hosted Courier Prime and IBM Plex Mono, with Courier Prime for headings, including the hero.

## Development

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Checks and production

```bash
npm run lint
npm run build
npm start
```

## Content

- `src/data/projects.ts`: project summaries, stacks, optional `demoUrl`, `demoPassword`, `designUrl`, and `screenshots` fields. Links render only when provided. Shop.Co includes a Shopify demo, a revealable demo password, and Figma design credit. Demo passwords are public visitor-access information, not private credentials.
- `src/data/skills.ts`: skills, services, and experience in newest-first order.
- `src/components/sections/tech-stack-section.tsx`: keyboard-accessible toolbox tabs and skill-to-SVG mappings. Logo assets live in `public/Icons/`; update the mapping when adding a skill.
- `src/components/sections/`: hero, About, projects, and contact content.
- `public/files/Jake-Peralta-Resume.pdf`: the downloadable CV linked from the hero and footer.
- `src/components/layout/site-footer.tsx`: Resources links and the ASCII Tojiwan wordmark.
- `src/app/icon.svg`: robot-terminal logo shared by the navbar and SVG favicon. Keep `src/app/favicon.ico` in sync when changing the mark.

External website links open in a new tab. Section links navigate within the page; email and phone links use the visitor's associated app.

## Site URL

Set `SITE_URL` to the full deployed origin, including `https://`, in your hosting environment before building. Social image URLs use this value. If omitted, the site uses `VERCEL_PROJECT_PRODUCTION_URL` on Vercel or `http://localhost:3000` locally. Rebuild after changing it.

## Features and integrations

- The contact form sends through Formspree with validation, sending/success/error feedback, and a spam honeypot. Direct email and profile links are also available. The owner confirmed a successful localhost submission and inbox delivery from the 2026-10-16 test.
- Hero portraits use all five `public/Profile_Avatar/pfp-*.webp` images in original color, starting with pfp-1. Mouse entry or click/tap/keyboard activation advances the image and wraps after pfp-5; a mouse click within 350ms of hover is ignored to avoid a double advance. Edit `src/components/sections/hero-portrait.tsx` to change them.
- The hero name is static; the `<hello_world />` boot line uses a typewriter animation with a reduced-motion fallback.
- Courier Prime and IBM Plex Mono are self-hosted as preloaded WOFF2 fonts; portrait assets are compressed WebP images.
- Vercel Speed Insights is mounted in `src/app/page.tsx`. Deployed data collection has not been verified.

## Verification and performance

- Lint and production build passed during the 2026-10-21 improvement workflow. Playwright checks covered responsive layouts at 320–1440px, both themes, keyboard navigation, and reduced-motion behavior.
- Production-server checks confirmed light mode on a fresh visit, persisted dark-mode selection, and a `200 application/pdf` response from the renamed CV URL.
- [PageSpeed Insights mobile report — 2026-10-22](https://pagespeed.web.dev/analysis/https-tojiwan-portfolio-v2-vercel-app/ifqd6bdgc0?form_factor=mobile): **92 Performance, 100 Accessibility, 100 Best Practices, 100 SEO**. First Contentful Paint: **1.4s**; Largest Contentful Paint: **2.9s**; Total Blocking Time: **80ms**; Cumulative Layout Shift: **0**; Speed Index: **4.4s**.
- These are single-run lab results using an emulated Moto G Power and slow 4G. The report has insufficient real-user data; automated accessibility scores do not replace manual testing.
- `PRODUCT.md` and `DESIGN.md` document product context and the design system. Local `design-review/` reports and screenshots record the improvement workflow; they are excluded from Git.

## Remaining work

- Projects use one large terminal at a time, information left / preview right on desktop, and a separate screenshot-gallery modal. Swiper React provides manual navigation without autoplay or looping. All seven projects now use 28 supplied screenshots, including the three n8n workflow captures added on 2026-10-28. Physical-device review and deployed performance checks remain pending.
- Vehiserve includes a Motor Pool Management System summary; further details and personal-contribution claims remain owner-managed. Spelling confirmed by the owner on 2026-10-28.
- Add verified live project URLs where available.
- Confirm remaining content claims and review project slugs; project file labels are now distinct.
- Investigate the mobile LCP delay and unused JavaScript reported by PageSpeed Insights; verify whether inactive portraits can be deferred further.
- Repeat the regression checks below after changes. Physical-device, screen-reader, and Safari checks remain pending; verify deployed Formspree delivery and Speed Insights collection, and check Formspree plan usage.
- Confirm production URL configuration resolves to `https://tojiwan-portfolio-v2.vercel.app` and add canonical metadata.

## Project galleries

Current captures live under `public/Dental-Clinic/`, `public/Ramen-Makimura/`, `public/Vehiserve/`, `public/Shop.Co/`, `public/Facebook-RAG-Agent/`, `public/One-Pampanga-RAG-Chatbot/`, and `public/Telegram-Budget-Tracker/`. Add a `screenshots` array to the matching project in `src/data/projects.ts`. Each entry has `src` (public URL), `title` (visible caption), `alt` (descriptive alternative text), `width`, and `height` (actual image dimensions). The first entry becomes the clickable cover. Keep the array absent until real assets are available; three explicitly labelled placeholder slots appear automatically.

The gallery component loads on demand when Preview gallery is opened. It renders the current and adjacent screenshots, uses a native modal dialog, locks background scrolling, and restores focus on close. No new project outcomes or deliverables are invented from the layout references.

Landscape covers retain their natural proportions. Gallery images use contain sizing, with side arrows on desktop, arrows below on mobile, horizontal screenshot selectors, and an Open full-size image link. On 2026-10-24, lint/build and local production browser checks passed for all 25 images and original-file links, including 390×440, 393×852, and 852×393 layouts. Physical Safari/pinch-zoom and deployed performance checks remain pending.

Local production verification on 2026-10-23 passed at 320/390/768/1024/1440px in both themes, including keyboard boundaries, 44px project controls, reduced-motion navigation, modal focus cycling/return, and password reveal. Mouse-drag navigation was also checked. Physical touch devices and performance with real screenshots are still pending.

Reusable browser self-check: start `npm start -- --port 3025`, then run `scripts/check-projects.mjs` through Playwright MCP's `browser_run_code_unsafe` with its `filename` argument. Lint and production build passed; the build also reports the existing Next.js advisory above.

## Browser regression checklist

1. Run `npm run dev`, open `http://localhost:3000`, and open DevTools (F12).
2. Toggle the device toolbar (Ctrl+Shift+M). Test widths 360, 768, and 1280, plus landscape and 200% browser zoom. Check for clipped text and sideways scrolling.
3. Switch between light/dark themes and reload to verify persistence. Review text, terminal borders/shadows, and focus contrast.
4. Use Tab/Shift+Tab, Enter, and Space. In About, test arrow keys and Home/End; in the toolbox, test Up/Down and Home/End. Test the Shop.Co password reveal. Open the mobile menu and close it with Escape. Check that focus stays visible.
5. Confirm pfp-1 is shown initially. Move the pointer off/on the portrait repeatedly, then test click, tap, and Enter/Space: all five photos should appear in order and wrap to pfp-1. Check image crops and reduced-motion switching.
6. In DevTools > More tools > Rendering, emulate `prefers-reduced-motion: reduce`. Reload: scroll reveals, hover lift, and transitions should be static/immediate.
7. Click email/phone/profile links, Shop.Co demo/design links, and both CV download links. Confirm destinations and the current PDF. Contact-form delivery has been verified locally; repeat the submission check on the deployed site.
8. Inspect Console for errors and Network for failed requests. Run `npm run lint` and `npm run build`, then `npm start` to repeat against production output (stop the dev server first).
9. Repeat the key checks on the deployed URL and a real phone; verify favicon and social-sharing preview.
10. In Projects, test named navigation, previous/next boundaries, and ArrowLeft/ArrowRight/Home/End while the project carousel is focused. Open gallery, check screenshot navigation and Tab/Shift+Tab containment, then close with Escape and verify focus returns to Preview. Check each project after replacing placeholders with real screenshots.
