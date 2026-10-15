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

- The contact form is intentionally disabled until a delivery service is connected. Direct email and profile links are available above and beside the form.
- Project galleries need screenshots and captions; the hero portrait also needs an image.
- Vehiserive currently has a stack-based summary. Add its purpose, features, and your specific contribution when available.
- Add verified live project URLs where available.
