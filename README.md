# Alex Vance — Neo-Brutalist Portfolio (Placeholder)

Single-page developer portfolio. Light neo-brutalism: graph-paper canvas, 2px black borders, hard offset shadows, cyan/blue accents, Plus Jakarta Sans + Courier Prime.

Stack: React + Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Motion (`motion/react`) + Lucide + Vercel.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
```

## Replace before launch

- Copy in `Neo-Brutalist-Portfolio-Design-Guide.md` / `Portfolio-Website-Build-Instructions.md` is the source of truth; `Sample-Website-Outcome.png` is the visual reference.
- `src/data/projects.ts`, `src/data/skills.ts` — simplified placeholders (Alex Vance / Dev404). Swap in real projects, roles, dates, skills, services. No fake metrics or production claims.
- `public/files/resume.pdf` — placeholder PDF. Replace with a real, current CV.
- `src/app/icon.svg`, `src/app/opengraph-image.tsx` — placeholders. Replace with final branding.
- `src/components/sections/contact-section.tsx` — form is UI-only demo. Connect to Formspree/Resend (or similar) before calling it functional. Never expose API keys client-side.
- Contact channels (`hello@example.com`, handles) are placeholders.

## Deploy

1. Push to GitHub (`.env*`, `node_modules`, `.next` are ignored).
2. Import the repo in Vercel with the Next.js preset.
3. Test preview on desktop + mobile, then add a custom domain if needed.
