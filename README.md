# Tojiwan Portfolio

Jake Andrei R. Peralta's portfolio for web development, Shopify, and automation work. Built with Next.js 16, TypeScript, Tailwind CSS, and Motion.

Dark-first neo-brutalist styling with a persistent theme toggle, terminal-inspired panels, and a cyan robot-terminal logo. The hero heading uses self-hosted Space Grotesk; the site also uses Courier Prime and IBM Plex Mono.

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

- `src/data/projects.ts`: project summaries, stacks, and optional `liveUrl`, `demoUrl`, `demoPassword`, and `designUrl` fields. Links render only when provided. Shop.Co includes a Shopify demo, a revealable demo password, and Figma design credit. Demo passwords are public visitor-access information, not private credentials.
- `src/data/skills.ts`: skills, services, and experience in newest-first order.
- `src/components/sections/tech-stack-section.tsx`: keyboard-accessible toolbox tabs and skill-to-SVG mappings. Logo assets live in `public/Icons/`; update the mapping when adding a skill.
- `src/components/sections/`: hero, About, projects, and contact content.
- `public/files/`: the downloadable CV linked from the hero and footer.
- `src/components/layout/site-footer.tsx`: Resources links and the ASCII Tojiwan wordmark.
- `src/app/icon.svg`: robot-terminal logo shared by the navbar and SVG favicon. Keep `src/app/favicon.ico` in sync when changing the mark.

External website links open in a new tab. Section links navigate within the page; email and phone links use the visitor's associated app.

## Site URL

Set `SITE_URL` to the full deployed origin, including `https://`, in your hosting environment before building. Social image URLs use this value. If omitted, the site uses `VERCEL_PROJECT_PRODUCTION_URL` on Vercel or `http://localhost:3000` locally. Rebuild after changing it.

## Features and integrations

- The contact form sends through Formspree with validation, sending/success/error feedback, and a spam honeypot. Direct email and profile links are also available. The owner confirmed a successful localhost submission and inbox delivery from the 2026-10-16 test.
- Hero portraits use all five `public/Profile_Avatar/pfp-*_result.webp` images in original color, starting with pfp-1. Mouse entry or click/tap/keyboard activation advances the image and wraps after pfp-5; a mouse click within 350ms of hover is ignored to avoid a double advance. Edit `src/components/sections/hero-portrait.tsx` to change them.
- The hero name is static; legacy typewriter CSS is currently unused.
- Vercel Speed Insights is mounted in `src/app/page.tsx`. Deployed data collection has not been verified.
- Lint and production build passed on 2026-10-18. The owner confirmed navbar logo and browser-tab favicon appearance that day; broader browser and deployment checks remain pending.

## Remaining work

- Project screenshots, captions, and accessible galleries are deferred.
- Vehiserive details remain owner-managed and deferred: expand its purpose, features, and personal contribution, and confirm its spelling.
- Add verified live project URLs where available.
- Confirm remaining content claims, review project slugs/file labels, and reconcile design documentation with the current styling.
- Complete the browser checks below, verify deployed Formspree delivery and Speed Insights collection, and check Formspree plan usage.
- Set the production site URL and add canonical metadata when the final URL is known.

## Browser checks before deployment

1. Run `npm run dev`, open `http://localhost:3000`, and open DevTools (F12).
2. Toggle the device toolbar (Ctrl+Shift+M). Test widths 360, 768, and 1280, plus landscape and 200% browser zoom. Check for clipped text and sideways scrolling.
3. Switch between light/dark themes and reload to verify persistence. Review text, terminal borders/shadows, and focus contrast.
4. Use Tab/Shift+Tab, Enter, and Space. In About, test arrow keys and Home/End; in the toolbox, test Up/Down and Home/End. Test the Shop.Co password reveal. Open the mobile menu and close it with Escape. Check that focus stays visible.
5. Confirm pfp-1 is shown initially. Move the pointer off/on the portrait repeatedly, then test click, tap, and Enter/Space: all five photos should appear in order and wrap to pfp-1. Check image crops and reduced-motion switching.
6. In DevTools > More tools > Rendering, emulate `prefers-reduced-motion: reduce`. Reload: scroll reveals, hover lift, and transitions should be static/immediate.
7. Click email/phone/profile links, Shop.Co demo/design links, and both CV download links. Confirm destinations and the current PDF. Contact-form delivery has been verified locally; repeat the submission check on the deployed site.
8. Inspect Console for errors and Network for failed requests. Run `npm run lint` and `npm run build`, then `npm start` to repeat against production output (stop the dev server first).
9. Repeat the key checks on the deployed URL and a real phone; verify favicon and social-sharing preview.

```text
/$$$$$$$$            /$$
|__  $$__/           |__/
   | $$  /$$$$$$  /$$ /$$ /$$  /$$  /$$  /$$$$$$  /$$$$$$$
   | $$ /$$__  $$|__/| $$| $$ | $$ | $$ |____  $$| $$__  $$
   | $$| $$  \ $$ /$$| $$| $$ | $$ | $$  /$$$$$$$| $$  \ $$
   | $$| $$  | $$| $$| $$| $$ | $$ | $$ /$$__  $$| $$  | $$
   | $$|  $$$$$$/| $$| $$|  $$$$$/$$$$/|  $$$$$$$| $$  | $$
   |__/ \______/ | $$|__/ \_____/\___/  \_______/|__/  |__/
            /$$  | $$
           |  $$$$$$/
            \______/
```
