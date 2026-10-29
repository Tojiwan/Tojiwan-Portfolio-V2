---
name: Tojiwan Portfolio
description: Neo-brutalist terminal aesthetic for a web developer, Shopify developer, and automation specialist
colors:
  signal-cyan: "#0ea5e9"
  sky-flash: "#38bdf8"
  pressed-blue: "#1d4ed8"
  online-bright: "#67d5f0"
  focus-anchor: "#0051b8"
  focus-halo: "#7dd3fc"
  memo-yellow: "#f9df65"
  hero-accent: "#16b5ed"
  hero-soft: "#65d5fa"
  ascii-teal: "#2dd4bf"
  ascii-glyph: "#dfe9f2"
  ascii-field: "#59616b"
  paper-white: "#f9f9f9"
  window-white: "#ffffff"
  mist-grey: "#f3f3f3"
  chrome-grey: "#dadbdd"
  ink-black: "#000000"
  body-ink: "#1b1b1b"
  slate-note: "#3e4850"
  hairline-grey: "#e5e7eb"
  console-navy: "#1b202b"
  console-card: "#131a24"
  console-recess: "#1a2230"
  console-panel: "#1e2634"
  terminal-black: "#0b0f14"
  console-text: "#e8edf3"
  console-muted: "#b3bdcb"
  window-line: "#2a3340"
  slate-slab: "#53677e"
  hero-card-dark: "#111821"
  hero-canvas-dark: "#191e28"
  hero-line-dark: "#8996a7"
typography:
  display:
    fontFamily: '"Courier Prime", "IBM Plex Mono", ui-monospace, monospace'
    fontSize: "clamp(1.5rem, 10.5cqi, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.065em"
  headline:
    fontFamily: '"Courier Prime", "IBM Plex Mono", ui-monospace, monospace'
    fontSize: "clamp(1.875rem, 1.5rem + 1vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Courier Prime", "IBM Plex Mono", ui-monospace, monospace'
    fontSize: "clamp(1.25rem, 1.05rem + 0.65vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Courier Prime", "IBM Plex Mono", ui-monospace, monospace'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  fact:
    fontFamily: '"Courier Prime", "IBM Plex Mono", ui-monospace, monospace'
    fontSize: "0.875rem"
    fontWeight: 700
  label:
    fontFamily: '"IBM Plex Mono", "Courier Prime", ui-monospace, monospace'
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "#000000"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  button-primary-hover:
    backgroundColor: "{colors.sky-flash}"
    textColor: "#000000"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  button-secondary:
    backgroundColor: "{colors.window-white}"
    textColor: "#000000"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  button-dark:
    backgroundColor: "#000000"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  chip:
    backgroundColor: "{colors.chrome-grey}"
    textColor: "#000000"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  chip-accent:
    backgroundColor: "{colors.signal-cyan}"
    textColor: "#000000"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  terminal-titlebar:
    backgroundColor: "{colors.chrome-grey}"
    textColor: "#000000"
    rounded: "{rounded.none}"
    padding: "8px 12px"
---

# Design System: Tojiwan Portfolio

## Overview

**Creative North Star: "The Operator's Console"**

The entire site reads as one thick-client terminal session: every panel is a window of a running system, every label is either a filename, a status readout, or a code comment. Nothing floats; every block is a hard-edged slab stamped onto 20px graph paper with an offset shadow so literal it reads as a drop-print. Depth is movement, not blur — hover lifts a slab off its paper, click presses it flat against the sheet. The user pinned this world: neo-brutalist terminal aesthetic, square geometry, 2px borders, hard 4px offset shadows, graph-paper backgrounds, light-first with a persistent dark console toggle, and cyan as the single accent voice.

Two themes, one material. Light is the served default ("paper mode"); the dark console is the toggle state — but both use the same utility aliases, because `bg-white`, `border-black` and `text-black` are tokens (`--color-white`, `--color-black`) that flip per theme. New work must use the token vars, not literal hexes, or themes drift apart. Default flipped light per owner decision on 2026-10-20.

**Key Characteristics:**
- Everything is a window: mac traffic lights, uppercase filename titlebars, status badges, `// code comment` labels.
- Zero radius, 2px solid borders, hard 3/4/6px offset shadows with 0 blur.
- One monospace voice end to end; hierarchy comes from size, weight, case, and tracking.
- Press-down interplay: hover lifts, active presses, reduced-motion freezes all of it.
- Cyan appears only where the console is "live": status, focus, the name tag, primary actions.

## Colors

The palette is a graphite paper-and-console set with exactly one accent family ("Signal Cyan") plus one functional yellow note. Dark and light swap register via token aliases — see the two Neutral groups.

### Primary
- **Signal Cyan** (#0ea5e9, `--accent` / `--accent-cyan`): the one accent voice. Marks live things: hero name tag, primary action buttons and their header CTA, active skill highlight, status badges, text selection, focus shadow on form fields.
- **Sky Flash** (#38bdf8, `--accent-soft`): hover tint of every cyan surface; also the cursorcaret bars in panel headings.
- **Pressed Blue** (#1d4ed8, light `--accent-strong` / `--accent-blue`): accent-strength text and icons in light mode — `$` form prompt prefixes, error text, status dot; also the shadow color of the "dark" button variant. Darkened one step from #2563eb so 10–11px status text passes 4.5:1 on the chrome-grey titlebars (3.73:1 before), not just on white.
- **Online Bright** (#67d5f0, dark `--accent-strong`): the same roles as Pressed Blue while in dark theme.
- **Memo Yellow** (#f9df65, `--hero-yellow`): the rotated "availability" sticker and the square status LED in the hero. Hero-scoped; never leaks into other sections.

### Tertiary (scoped micro-registers)
- **Hero Accent** (#16b5ed) and **Hero Soft** (#65d5fa): the hero defines its own slightly hotter cyan pair; treat the hero column as a franchised copy of the palette, not a place to introduce new hues.
- **Matrix Teal** (#2dd4bf, glyph #dfe9f2 / field #59616b): the `AsciiPortrait` panel runs its own grandfathered "Matrix green" register — teal corner brackets, sparse teal glyphs, and a 9%-alpha teal code rain (`rgba(52, 211, 153, 0.09)`) over a black body. Panel-scoped; nowhere else.

### Neutral (light — "paper mode")
- **Paper White** (#f9f9f9), `--canvas`: page background with graph-paper grid printed on it.
- **Window White** (#ffffff), `--surface`: window and card bodies; the canonical `bg-white`.
- **Mist Grey** (#f3f3f3), `--surface-muted`: pressed/hover surfaces, error panels, list rows.
- **Chrome Grey** (#dadbdd), `--panel`: sticky header strip and terminal titlebars.
- **Ink Black** (#000000): borders and slab shadows (light `--shadow-color`).
- **Body Ink** (#1b1b1b), `--text`: paragraphs on white.
- **Slate Note** (#3e4850), `--text-muted`: secondary text, code-comment labels.
- **Hairline Grey** (#e5e7eb), `--line-muted`: internal dividers; console mode remaps the token to **Window Line** (#2a3340) so hairlines never print near-white on dark panels.
- **Focus Anchor** (#0051b8), `--focus`: light-theme focus outline.

### Neutral (dark — "console mode")
- **Console Navy** (#1b202b), `--canvas` in dark: page background.
- **Console Card** (#131a24), `--surface` and what `bg-white` resolves to in dark.
- **Console Recess** (#1a2230), `--surface-muted`: pressed/hover surfaces in dark.
- **Console Panel** (#1e2634), `--panel`: header and titlebar strips in dark.
- **Terminal Black** (#0b0f14): forced-dark terminal bodies (`TerminalWindow dark`), plus `#111821`/#`#191e28` inside the hero.
- **Console Text** (#e8edf3) / **Console Muted** (#b3bdcb): body and secondary text in dark.
- **Window Line** (#2a3340): internal hairlines inside forced-dark windows.
- **Slate Slab** (#53677e), dark `--shadow-color`: slab shadows in dark mode — shadows are never black on dark.
- **Focus Halo** (#7dd3fc), dark `--focus`: dark-theme focus outline.

### Named Rules
**The Online-Indicator Rule.** Signal Cyan marks what is live — activity, status, focus, selection, the primary CTA, and the name tag. It is never ambient decoration, never a background field beyond the hero name tag and primary buttons, and no second accent hue exists for general use — the traffic-light dots, Memo Yellow, and the AsciiPortrait panel's Matrix Teal (#2dd4bf) are the only non-conforming marks, all structural or panel-scoped.

## Typography

**Display Font:** Courier Prime (fallback IBM Plex Mono, then ui-monospace) — typewriter face, ships self-hosted at 400 and 700 only.
**Body Font:** the same Courier Prime stack (`--font-mono`); IBM Plex Mono is the fallback voice and takes over as the label face inside the hero.
**Label/Mono Font:** IBM Plex Mono (400/600 self-hosted) for hero details and shared section labels, terminal titlebars, statuses, and technology metadata.

**Character:** Two typewriter monos in one voice. Hierarchy is produced by size, weight, case, and letter-spacing — never by introducing a second genre. The voice split that produces the metadata/content contrast: Courier Prime types the register's content — display, headings, prose, facts and values, buttons, typed terminal output (`$ prompts`, path bars). IBM Plex Mono sims the machine around it — section labels, filename titlebars, statuses, category eyebrows, chips, and metadata keys.

### Hierarchy
- **Display** (700, clamp(1.5rem, 10.5cqi, 4.5rem), 1.04, −0.065em): hero greeting/name; mobile uses clamp(1.5rem, 9.5cqi, 3.625rem). The cyan tag keeps its border and slab; wrapping is allowed for text enlargement. The hero runs its own franchised register: identity line 0.9375rem IBM Plex Mono 600, description fluid 1–1.125rem, and the decorative ↗ / `</>` rail glyphs scale independently (23px/18px).
- **Headline** (`.type-headline`, 700, fluid 1.875–2.25rem, 1.2, −0.025em): section titles, balanced and allowed to wrap.
- **Title** (`.type-title`, 700, fluid 1.25–1.5rem, 1.25, −0.02em): project, panel, experience, and service headings.
- **Body** (`.type-body`, 400, 1rem, 1.65, normal tracking, max 65ch, `text-wrap: pretty`): decision-making prose. Hero description is fluid 1–1.125rem, 1.65, max 60ch. Facts (`fact` role) are 0.875rem Courier bold — dossier values, education entries, direct-contact handles — while form inputs use 1rem.
- **Label** (`.type-label`, IBM Plex Mono 600, 0.75rem, 1.5, +0.06em): shared section labels, filename titlebars and kicker capsules, statuses, category eyebrows, tech chips, metadata keys (the dossier label column), and date ranges set in this role. Uppercase is reserved for short machine labels; technology names and service deliverables retain natural case. The header identity sub-line may drop to 11px; the reserved hero sticker keeps 11px; decorative ASCII retains its own scale.

### Named Rules
**The Courier-Only Rule.** Every character on the page is typewriter mono. No serif, no sans, no display face. If it isn't mono, it isn't on the console.

## Layout

**Heading animation update (2026-10-29):** requested section headings, project titles, skill-group titles, and About/Education panel headings use the hero's 80ms-per-character TextType fade and accent bar cursor, once on first visibility. Fonts and text colors are inherited; final heading space is reserved. About panels stay mounted to avoid replay on tab switches. Reduced motion skips typing. The About Me section label remains static.

**Background update (2026-10-28):** the owner approved replacing the static page grid with React Bits CursorGrid: 34px cells, cyan highlights, 90px cursor radius, click pulses, theme-aware neutral grid lines at 0.29 opacity, and a fixed viewport-sized canvas behind all content. Static 34px CSS grid is retained for reduced motion and unavailable/lost WebGL. No intro or ambient animation; idle/hidden rendering pauses. This supersedes the older 20px background specification below.

A single-page vertical console scroll. Content runs in a `max-w-7xl` (1280px) container with 16px side padding (24px at sm+), sections separated by generous vertical rhythm and `scroll-mt-20` so they land under the sticky 64px header strip. The body prints a 20px × 20px graph-paper grid behind everything: 1px lines at ~4.5% black (light) or ~5% white (dark), visible through every transparent gap. Container queries drive dispositioning: `.hero-intro` is a size container and the display scales at 10.5cqi (9.5cqi under 640px); the footer ASCII wordmark scales on its own container at `clamp(6px, 2.8cqi, 12px)`.

- **Hero:** two-column grid — portrait window (0.8fr) beside intro window (1.2fr) at lg+, 28px gap, both full-height slabs; stacks on mobile, splits portrait/intro side-by-side on md–lg with the availability rail relocating.
- **Content sections:** window-and-grid pattern; heading row (kicker capsule between full-width 2px ink rules) then terminal windows in 2-col (lg `1.2fr/0.8fr` for contact, similar pairs elsewhere) collapsing to single column.
- **Header:** 64px sticky bar, chrome strip, logo block left, rolling nav links shown at xl (1280px), CTA + theme toggle right; below xl the nav collapses into an Escape-closable panel.
- **Breakpoints:** Tailwind defaults — sm 640px, md 768px, lg 1024px, xl 1280px. The designer's line is xl for nav; lg is the desktop grid switch.

Density is high: lots of 10–13px text, tight chip rows, labels hugged to their edges — restraint shows as whitespace around windows, not inside them.

## Elevation & Depth

Depth is structural print, not atmosphere: slabs of paper with hard-offset shadows in pure black (light) or slate blue (#53677e, dark), zero blur, always at a 45° downward-right offset. Nothing ever casts a soft shadow.

### Shadow Vocabulary
- **Slab-SM** (`3px 3px 0 var(--shadow-color)`): small leaves — kicker capsules, chip buttons, icon buttons, list links.
- **Slab-MD** (`4px 4px 0 var(--shadow-color)`): rest state of windows, cards, primary actions, the hero name tag.
- **Slab-LG** (`6px 6px 0 var(--shadow-color)`): the hover-lifted state of a slab (paired with `translate: -2px -2px`).
- **Press-down** (`translate(2px, 2px)` + shadow removed): the active/contact state — the slab meets the paper.
- **Focus shadow** (`3px 3px 0 var(--accent)`): form fields gain a cyan slab while focused, on top of the global focus outline.

### Named Rules
**The Stamped Slab Rule.** Panels are physical slabs stamped onto graph paper. Rest uses Slab-MD (or SM for small parts); hover lifts a slab thicker and back-towards its origin; press flattens it into the paper. Shadow size maps to state, never to importance. New code uses `var(--shadow-color)` — hardcoded `#000` survives only in older section internals.

## Shapes

Square geometry with zero border radius — every corner is a right angle (`rounded: 0px`). Edges are solid 2px lines in the ink token; internal dividers drop to 1px hairlines. Recurring silhouettes:

- **Window stamp:** 2px-bordered panel + 2px-divided titlebar with three traffic-light dots (10px circles, #ff5f57 / #febc2e / #28c840, ringed in black) — by rule the only rounded glyphs on the site; the last 8px `rounded-full` status dots (About/Contact status rows) were squared in the 12-final-polish pass, so every status LED is now the 8px square.
- **Corner brackets:** 12px L-marks (2px arms) floating just outside the portrait frame corners.
- **Square LEDs:** 8px squares (never dots) for status markers and kicker chips.
- **Sticker:** a rotated (5deg) yellow memo tag reserved for the hero (9px/12px padding, 2px ink border, 3px shadow); its markup is currently commented out of the hero, so no rotation renders today — rotation stays reserved for that slot.

### Named Rules
**The Two-Pixel Edge Rule.** Outer borders are 2px solid, internal logic 1px. Radius is zero except the three traffic lights. A rounded anything else is a bug in the world.

## Components

### Buttons (slabs with press language)
- **Shape:** zero radius, 2px solid `--color-black` border, uppercase 13–14px mono bold, wide tracking; padding 10px 16px (full-width submit: 16px).
- **Primary:** Signal Cyan fill, black text, Slab-MD; hover → Sky Flash fill; active → pressed.
- **Secondary:** Window White fill, black text, Slab-SM (3px); hover → Chrome Grey.
- **Dark:** Ink Black fill, white text, shadow cast in Pressed Blue (dark-variant); hover → Mist Grey.
- **Press/Focus:** primary and secondary slabs press *toward* the paper on hover (shadow shrinks to 2px + `translate(2px,2px)` — the hero, header, toolbox and all content primaries share this approach language); active translates +2px/+2px and drops the shadow fully; focus-visible carries the global 2px outline (`--focus`).

### Inputs / Fields
- **Style:** 2px solid border, Window White fill, 14px mono, 10px/12px padding, muted placeholder.
- **Prompt idiom:** labels read as shell prompts — `$ Name *` with the `$` and errors in accent-strength blue.
- **Focus:** field gains a 3px cyan slab shadow (outline stays).
- **Error / Disabled:** errors show as bold accent-strength text in alert roles; submit disables to 60% opacity with not-allowed cursor.

### Chips
- **Tech badge:** 11px mono bold uppercase, +0.1em tracking, Chrome Grey panel, 1px border (deliberately lighter than window borders); **accent variant** flips to Signal Cyan with a 2px border and black text.

### Cards /Containers — TerminalWindow (signature component)
- **Anatomy:** 2px ink border + Slab-MD shadow; titlebar strip (Chrome Grey / Console Panel) with traffic lights, uppercase truncated filename (`Contact_Info.exe`), optional right-aligned status badge (10px bold uppercase, accent-strength); body 16px padding.
- **Variants:** standard (theme-aware via `bg-white` alias) and forced-dark (`#0b0f14` body, `#e6edf3` text, `#2a3340` hairlines) for terminal-true content.
- **Hero windows** run their own franchised tokens (darker cards, hotter cyan, IBM Plex labels) — keep changes inside that franchise.

### Project terminals (2026-10-23 branch redesign)
- One full-width project terminal is visible at a time. At 1024px+, information occupies the left 7/12 and preview the right 5/12; smaller screens follow title/description/focus, preview, actions/access, then technologies.
- Project titles use Courier Prime 700 at `clamp(1.875rem, 3.5vw, 3rem)` (30–48px), a section-specific display role for the larger reference layout.
- Named project buttons, previous/next controls, and a counter drive Swiper React without autoplay or looping. Inactive project slides are inert. Arrow/Home/End navigation is scoped to the focused carousel.
- Preview opens a separate native dialog with manual screenshot navigation, focus cycling/return, Escape close, and scroll locking. Static cover previews avoid nested swipe areas. Placeholder slots are explicitly labelled, never presented as real work.
- Traffic-light colors retain the documented TerminalWindow exception. Styles are scoped with the `projects-` prefix in `src/components/sections/projects.css`.

### Site navigation
- **Header:** 64px sticky chrome strip, 2px ink bottom border. Logo = 40px robot-terminal mark + "Tojiwan" wordmark + 10px uppercase sub-line.
- **Links:** RollingLink — label copies roll vertically (out rises 100%, incoming drops from −100%), 0.3s `cubic-bezier(0.338, 0.015, 0.395, 0.959)`, suspended entirely under reduced motion; external links always `_blank` + `noopener noreferrer`.
- **Actions:** "Get in touch" primary slab; 44×44 square theme toggle (cross-rotating Sun/Moon icons, 16px, aria-pressed, persists via `localStorage["tojiwan-theme"]` + pre-paint script).
- **Mobile:** menu expands as a bordered panel by height+opacity (0.22s expo-out, instant under reduced motion); items gain 2px outlines on hover; Escape closes and refocuses the trigger.

### About profile card (owner-approved, 2026-10-28)
- Hanging-ID-inspired, theme-aware card shared across Bio and Education: cyan stitched-style lanyard anchored to the top of the terminal body, rectangular slot and metal-style clip, large graduation portrait, bold uppercase name, Tojiwan alias, and compact role/location details. Contact buttons are removed. Square 2px edges and hard token-based shadows preserve the terminal identity; the card remains stationary (2026-10-28).
- The card stays mounted across tab changes. Education introduces the TVL-ICT and BS Information Technology progression before the individual school records. The previous ASCII preview is no longer used in About.

### Footer
Panel strip with 2px ink top border; four columns at lg (identity + `Status: Open to work` accent line, section links, Resources/résumé + back-to-top, and the Tojiwan ASCII block wordmark in `--text` scaled by content query), then a second 2px-divided legal bar. Everything is plain mono text — no windows, no slabs — with underline-on-hover as the only link affordance.

### Section Heading
Kicker capsule (Window White, 2px border, Slab-SM, 8px square cyan LED + 11px uppercase label) sitting on full-width 2px ink rules; below it a 30–36px Courier headline and a muted mono description.

### Motion primitives
- **Reveal:** sections rise 16px into view, 0.45s expo-out (`cubic-bezier(0.16, 1, 0.3, 1)`), once, −80px margin, per-item stagger delays capped at 0.2s; section headings ride the same reveal.
- **Console boot:** the hero's decorative `<hello_world />` types in once — clip-path steps(15), 0.9s. The greeting heading itself uses React Bits TextType (2026-10-28): it types "Hi, I'm Tojiwan." once with fade-in characters and an accent bar cursor, name color unchanged (`--accent-strong` from "Tojiwan" onward); reduced motion types instantly and the hidden measure line reserves the heading's final width so nothing shifts.
- **Press feedback:** ambient 180ms transitions govern slabs, buttons, links, inputs and textareas — hover fills, focus slabs, press translations all glide inside that budget.
- **Theme swap:** the toggle opens a 180ms fade window (`html.theme-switching`) for background, text, and border colors; sun/moon icons fade and rotate 30 degrees over the same 180ms. The button stays in place, and reduced-motion preferences make transitions effectively immediate (2026-10-28).
- **Panel language:** the mobile menu expands by height+opacity (0.22s expo-out) so its push is part of the gesture; tab panels quick-fade 160ms when a swap brings them back.
- **Caret:** About heading carets blink stepped on/off (1.06s), like a real cursor — never a fade.
- **Reduced motion:** the kill-switch — animations clamp to 0.01ms, reveals/rolls/menus render final state instantly, hover lifts disabled, carets and the typewriter render static.

## Do's and Don'ts

### Do:
- **Do** use the token aliases (`--color-black`, `--color-white`, `--shadow-color`, `--accent*`) so both themes stay coherent — `bg-white`/`border-black` classes are theme-aware by design.
- **Do** keep the CLI voice: filenames as titlebars (`Contact_Info.exe`), `// code comment` labels, `$`-prompt form labels, uppercase 11px bold +0.08–0.12em machine labels.
- **Do** finish every slab interaction: rest Slab-MD, hover Slab-LG + lift, active press flat; guard hover behind `(hover: hover)` and reduced-motion.
- **Do** keep keyboard parity: rolling links animate on focus too, menus close on Escape, chips/tabs support arrow keys, focus outlines (2px `--focus`) always remain visible.
- **Do** reserve Signal Cyan for live things (status, focus, selection, primary CTA, name tag) — rarity is what makes it read as an indicator.
- **Do** keep 20px graph paper behind all transparent gaps in both themes.

### Don't:
- **Don't** blur a shadow, round an edge (beyond traffic lights), or rotate anything — the hero sticker slot holds the site's only reserved rotation and is currently disabled in markup.
- **Don't** introduce a second accent or new status color; the traffic lights, Memo Yellow, and the AsciiPortrait's Matrix Teal already exceed the one-voice budget — the teal is a grandfathered panel exception, don't extend it beyond that figure.
- **Don't** use a non-mono typeface or faux-italic stretch; weights live within 400/600/700 of the two self-hosted families (several current marks request `font-extrabold`/800 and resolve to 700 — harmless but keep new usage inside the shipped set).
- **Don't** hide content behind hover on touch: every hover affordance has a press/tap equivalent (portrait cycler, password reveal).
- **Don't** write new code with literal `#000` slab shadows that should track the theme (`var(--shadow-color)` is canonical); `#000` literals age badly in dark mode, and as of this baseline six component spots still hardcode it (see `design-review/00-baseline.md`).
- **Don't** create long cyan or yellow background fields (banners, section washes) — they break the Online-Indicator Rule and the print-on-paper register.
