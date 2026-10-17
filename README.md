# Tojiwan Portfolio

Jake Andrei R. Peralta's portfolio for web development, Shopify, and automation work. Built with Next.js 16, TypeScript, Tailwind CSS, and Motion.

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

- `src/data/projects.ts`: project summaries, stacks, and optional `liveUrl` values. Add a real, absolute HTTP(S) URL to show a Visit Site link; omit it when no public demo exists.
- `src/data/skills.ts`: skills, services, and experience in newest-first order.
- `src/components/sections/`: hero, About, projects, and contact content.
- `public/files/`: the downloadable CV linked from the hero.

External website links open in a new tab. Section links navigate within the page; email and phone links use the visitor's associated app.

## Site URL

Set `SITE_URL` to the full deployed origin, including `https://`, in your hosting environment before building. Social image URLs use this value. If omitted, the site uses `VERCEL_PROJECT_PRODUCTION_URL` on Vercel or `http://localhost:3000` locally. Rebuild after changing it.

## Remaining content and integrations

- The contact form sends through Formspree with validation, sending/success/error feedback, and a spam honeypot. Direct email and profile links are also available. The owner confirmed a successful localhost submission and inbox delivery from the 2026-10-16 test.
- Project galleries need screenshots and captions (currently deferred).
- Hero portraits use all five `public/Profile_Avatar/pfp-*_result.webp` images in original color, starting with pfp-1. Each mouse hover or click/tap/keyboard activation advances to the next image and wraps after pfp-5. Edit `src/components/sections/hero-portrait.tsx` to change them.
- Vehiserive currently has a stack-based summary. Add its purpose, features, and your specific contribution when available.
- Add verified live project URLs where available.

## Browser checks before deployment

1. Run `npm run dev`, open `http://localhost:3000`, and open DevTools (F12).
2. Toggle the device toolbar (Ctrl+Shift+M). Test widths 360, 768, and 1280, plus landscape and 200% browser zoom. Check for clipped text and sideways scrolling.
3. Switch between light/dark themes and reload to verify persistence. Review text, terminal borders/shadows, and focus contrast.
4. Use Tab/Shift+Tab, Enter, and Space. In About, test arrow keys and Home/End. Open the mobile menu and close it with Escape. Check that focus stays visible.
5. Confirm pfp-1 is shown initially. Move the pointer off/on the portrait repeatedly, then test click, tap, and Enter/Space: all five photos should appear in order and wrap to pfp-1. Check image crops and reduced-motion switching.
6. In DevTools > More tools > Rendering, emulate `prefers-reduced-motion: reduce`. Reload: typing, hover lift, and transitions should be static/immediate.
7. Click email/phone/profile links and Download CV. Confirm destinations and the current PDF. Contact-form delivery has been verified locally; repeat the submission check on the deployed site.
8. Inspect Console for errors and Network for failed requests. Run `npm run lint` and `npm run build`, then `npm start` to repeat against production output (stop the dev server first).
9. Repeat the key checks on the deployed URL and a real phone; verify favicon and social-sharing preview.
