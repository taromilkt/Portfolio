# Handoff: Lindsey Nguyen — Design Portfolio

## Overview
A personal UX design portfolio for Lindsey Nguyen. Includes a main landing page and four case study pages (Yes Chef, Emerson, Figmathon, Nexus). Features a dual-theme system (classic B&W + warm palette), a magnetic steel board in the About section, and a hero with interactive hover photo chips.

## About the Design Files
The HTML files in this bundle are **design references created as prototypes** — they show intended look, layout, and behavior. The task is to **recreate these designs in a real production codebase** (Next.js, React, etc.) using established patterns and component libraries. Do not ship the prototype HTML directly.

## Fidelity
**High-fidelity.** Pixel-perfect mockups with final colors, typography, spacing, and micro-interactions. Recreate the UI pixel-accurately using your target framework and styling system.

---

## Design Tokens

### Classic Theme (default)
| Token | Value | Role |
|---|---|---|
| `--bg` | `#FBFBFA` | Page background |
| `--ink` | `#1B1A18` | Primary text |
| `--muted` | `#525252` | Secondary text, body copy |
| `--faint` | `#9A968F` | Captions, placeholders |
| `--line` | `#E7E4DE` | Borders |
| `--line-strong` | `#D8D4CC` | Stronger borders |
| `--card-tan` | `#C3A88C` | Card skin (tan) |
| `--card-grey` | `#E9E7E2` | Card skin (grey) |
| `--card-green` | `#2B2F26` | Card skin (dark green) |
| `--card-blue` | `#1C8CFF` | Card skin (blue) |

### Warm Theme (`[data-theme="warm"]`)
| Token | Value | Role |
|---|---|---|
| `--bg` | `#EDE7DB` | Egg Shell — main bg |
| `--ink` | `#4D342D` | Mahogany — primary text |
| `--muted` | `#9B9879` | Olive — accents, secondary text |
| `--faint` | `#C8B89E` | Light Linen — very faint |
| `--line` | `#DDCCB7` | Linen — borders |
| Eyebrows / section numbers | `#9B9879` | Olive |
| Hero italic accent | `#6A6A53` | Moss — CTA color |
| Nav hover / active | `#6A6A53` | Moss |

Theme is toggled by a light-switch SVG button in the nav. Persisted in `localStorage` under the key `ln-theme`. Value is `"warm"` or `""` (classic). Apply `data-theme="warm"` on `<html>` immediately on page load to avoid flash.

### Typography
| Variable | Value | Use |
|---|---|---|
| `--serif` | `"Newsreader", Georgia, serif` | Headlines, hero, pull quotes |
| `--sans` | `"Helvetica Neue", Helvetica, Arial, system-ui` | Body, nav, labels |
| `--mono` | `ui-monospace, "SFMono-Regular", Menlo` | Eyebrows, captions, tags |

Google Fonts loaded: `Newsreader` (ital, opsz 6–72, wght 400–600), `Cormorant Garamond`, `Inter`, `IBM Plex Mono`, `Pinyon Script`.

### Spacing
- Max content width: `1180px`
- Inline padding: `clamp(20px, 5vw, 56px)`
- Nav height: `60px` (portfolio) / `60px` (case studies via `--nav-h`)

---

## Pages / Views

### 1. Portfolio — `Portfolio.html`

#### Nav
- Sticky, `height: 60px`, frosted glass background (`color-mix` + `backdrop-filter: blur(10px)`)
- Left: brand mark `ln` — italic serif, `21px`, `34×34px` box with `1px` border, `border-radius: 7px`
- Center-right: nav links `work · about · resume` — `15px`, muted color, `gap: 56px` (inline style), active link has `■` prefix at `8px`
- Far right: light-switch SVG toggle button (see Interactions below)

#### Hero
- Two-column grid: left = text, right = interactive preview box
- Left column:
  - Eyebrow label in monospace, `11px`, `letter-spacing: 0.16em`, uppercase
  - `h1`: Newsreader serif, `clamp(3.2rem, 6vw, 5.8rem)`, weight 500, `line-height: 1.06`, with `.hl` highlight spans (inline `background-image` gradient underline) and `<em>` italic accents in accent color
  - Sub-paragraph: italic Newsreader, `clamp(1.05rem, 1.5vw, 1.35rem)`, muted
  - Body paragraph: `clamp(14px, 1vw, 15px)`, muted, `max-width: 46ch`
  - Interactive name/chips built in React: hovering `.chip` elements (PhotoChip components) reveals photos in the preview box
- Right column: `preview` box — aspect ratio `16/9`, bordered, hatched background pattern when idle; shows photos on hover

#### Work Grid
- `display: grid`, `grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))`, `gap: 28px`
- Each card: `.card` — border, `border-radius: 12px`, overflow hidden
- Card thumbnail `.thumb`: aspect ratio `16/10`, skin color background, `border-radius: 8px`, hover `translateY(-4px)` + deeper shadow
- Badge `.badge`: absolute positioned pill, `font-size: 11px`, monospace, `border-radius: 20px`
- Card caption `.cap`: flex row, project name in serif italic + role label in monospace uppercase + arrow `→`

#### About Section
- Two-column grid: left = text, right = magnetic steel board
- Left: eyebrow "A LITTLE ABOUT", `h2` "Lindsey Nguyen" in serif, body paragraphs in `#525252`, first sentence bolded
- Right: `.mag-board` — brushed steel `background` with radial highlight gradient, `border-radius: 10px`, `border: 2px solid #909599`, `overflow: hidden`, `aspect-ratio: 2/3`
  - Corner screws: `11×11px` radial-gradient circles
  - Photos: `.mag-photo` — absolutely positioned, `transform: rotate(var(--rot))`, hover lifts; bubble tooltip appears on hover (white pill, `border-radius: 20px`)
  - Scrabble tiles: `28×28px` squares, cream gradient background, serif bold letter + subscript score
  - Clay magnets: SVG illustrations (cherry, flower, lemon, button, strawberry, daisy)
  - Photos: Japan/Kyoto, Ark Nova board game, Whiplash poster, Taro the dog, Pickleball
  - One `<image-slot>` drop zone for user portrait

#### Contact Footer
- Dark background (`--ink`), off-white text (`#F4F2ED`)
- Eyebrow "Get in touch", `h2` "Let's design with *intention*." in Newsreader italic
- `mailto:` link in large serif italic
- Footer row: name + tagline left, socials nav right (LinkedIn, Resume, Email)
- Padding: `clamp(36px, 5vh, 56px)`

---

### 2. Case Study Pages (`yes-chef.html`, `emerson.html`, `figmathon.html`, `nexus.html`)

All share `assets/case-study.css` and `assets/case-study-fx.js`.

#### Layout
- `display: grid`, `grid-template-columns: 190px minmax(0, 1fr)`, `gap: clamp(28px, 4vw, 64px)`
- Left: sticky section rail (numbered nav dots, back link)
- Right: editorial body content

#### Nav
- Same sticky frosted glass nav
- Brand: `ln` italic serif box (same as portfolio)
- Links: `work · about · resume` — all link back to `Portfolio.html`
- No light-switch toggle on case study pages

#### Hero Banner
- `aspect-ratio: 16/8.4`, `border-radius: 9px`, gradient background
- Left: wordmark with project name in Newsreader, `font-size: clamp(30px, 4.6vw, 58px)`
- Right: device mockup (phone or laptop) with hatched screen placeholder

#### Section System
- `counter-reset: sec` on `.body`
- Each `.sec` has `padding-left: clamp(56px, 10vw, 132px)` for number gutter
- `::before` pseudo-element: counter `"0" counter(sec)`, Newsreader italic, accent color — animates in on scroll (`opacity: 0 → 1`, `translateX(-10px → 0`)
- Section number reveals triggered by first `.data-reveal` element in each section becoming visible (IntersectionObserver)

#### Scroll Reveal
- Elements with `[data-reveal]` start `opacity: 0; transform: translateY(22px)` and transition to visible on intersection
- Observer threshold `0.08`, rootMargin `0px 0px -60px 0px`
- Section numbers (`::before`) reveal simultaneously with first element in their section

---

## Interactions & Behavior

### Light Switch Theme Toggle
- SVG button in nav: plate outline + angled rocker paddle with I (line) and O (dash) marks
- Click toggles `data-theme="warm"` on `<html>`
- Rocker `<g>` rotates `180deg` in warm mode via CSS `transform-origin`
- Transition: `cubic-bezier(.4, 1.3, .6, 1)`, `0.3s`
- State persisted in `localStorage` key `ln-theme`
- Applied on page load before paint (inline `<script>` in `<head>`) to avoid flash of wrong theme

### Hero Photo Chips (Portfolio only)
- Built in React (Babel inline)
- `PhotoChip` component: hovering triggers `setHoveredPhoto(key)`
- `InteractivePreview` component: shows photo matching `hoveredPhoto` key, or bead-text when idle
- Photo keys: `lindsey`, `emerson`, `utaustin`, `masters`
- Photos stored in `uploadedPhotos` map with `src` and `pos` (object-position)

### Bead Text (Preview idle state)
- Text "HOVER TO EXPLORE" rendered as letter beads
- Each character: `21×21px` circle, white gradient background, `box-shadow` for 3D depth
- Colorful scatter beads between words (10-color palette)

### Nav Active Highlight
- JS scroll listener updates `.active` class on nav links based on `IntersectionObserver` of section `id` elements
- Case study rail: active dot animates with `box-shadow` pulse

### Magnetic Board Hover
- `.mag-photo:hover`: `translateY(-5px)`, `z-index: 20`
- `.bubble` pill tooltip: `opacity: 0 → 1` on hover, positioned `bottom: 8px` inside photo

### Scroll Reveals (case studies)
- `IntersectionObserver` adds `.revealed` class to `[data-reveal]` elements
- CSS: `opacity: 0; transform: translateY(22px)` → `opacity: 1; transform: none`
- Staggered via `transition-delay` on child elements

---

## Assets
All in `uploads/`:
- `6-efca6e85.jpg` — Kyoto travel photo
- `pic6293412.webp` — Ark Nova board game
- `c297506fa1bce64f87e03814972b306a.jpg` — Whiplash movie poster
- `8aa9f646c7f2b928379a2d6068abc74f.jpg` — Pickleball photo
- `D9878EE9-34A6-43D4-A015-3AB7DE109D6B_1_105_c.jpeg` — Taro (dog)
- `Nguyen_Lindsey_224-0062 (3).jpg` — Portrait (Lindsey)
- `Lindsey Nguyen Resume.docx` — Resume file
- `c2af62f3-b1a9-4e89-9262-87bfaf9a2200.png` — Light switch icon reference
- `device-mockup_1x_postspark_2026-07-01_14-24-28.gif` — Figmathon project GIF

---

## Files
| File | Description |
|---|---|
| `Portfolio.html` | Main landing page (React + plain HTML) |
| `yes-chef.html` | Yes, Chef case study |
| `emerson.html` | Emerson case study |
| `figmathon.html` | Figmathon case study |
| `nexus.html` | Nexus case study |
| `assets/case-study.css` | Shared CSS for all case study pages |
| `assets/case-study-fx.js` | Shared JS (scroll reveals, nav, section number reveals) |
| `image-slot.js` | Web component for drag-and-drop image placeholder |

---

## Implementation Notes
- Portfolio landing page uses React 18 + Babel (inline JSX). For production, migrate to a proper build pipeline (Next.js recommended).
- Theme toggle requires an inline `<script>` before `<body>` renders to avoid FOUC — in Next.js, put it in `_document.js` or use `next-themes`.
- `image-slot.js` is a custom web component for the magnetic board portrait slot — re-implement as a React drop-zone component.
- The magnetic board uses absolute positioning with percentage-based `left/top` — works best as a CSS grid or positioned container at a fixed aspect ratio.
- All case study page scroll behaviors use vanilla `IntersectionObserver` — can be replaced with `react-intersection-observer` or Framer Motion in a React build.
