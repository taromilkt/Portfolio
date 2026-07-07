# Portfolio Website — Build Spec

A one-page designer portfolio plus a set of linked project case-study pages. Editorial, calm, and typography-led. Build it as static HTML/CSS (vanilla, no framework needed). Everything below is the source of truth — match it closely.

---

## 1. Design System (use everywhere)

**Voice & feel:** Editorial, understated, confident. A warm near-white canvas with near-black ink. The page itself is monochrome and quiet — *all* color comes from the project cards and from one accent per case study. No gradients on the page background, no drop shadows except subtle ones on cards/devices, no emoji.

**Color tokens**
- Background: `#FBFBFA` (warm near-white)
- Ink (text): `#1B1A18` (near-black)
- Muted text: `#6F6C66`
- Faint text / captions: `#9A968F`
- Hairline border: `#E7E4DE`
- Stronger border: `#D8D4CC`
- Card skins (work grid only): tan `#C3A88C`, soft grey `#E9E7E2`, deep green `#2B2F26`, electric blue `#1C8CFF`

**Typography**
- Display serif: **Newsreader** (Google Fonts), weights 400/500/600 + italics. Used ONLY for the big hero line, section/case-study headlines, and the contact call-to-action. Lean on the *italic* for accent words.
- Everything else (nav, body, project titles, labels, captions): a clean neutral sans — **Helvetica Neue / Helvetica / Arial / system-ui**.
- The serif↔sans contrast is the entire personality of the site. Keep body text in the sans; reserve the serif for moments.
- Eyebrow labels: 11px, uppercase, letter-spacing ~0.16em, faint color.
- Monospace (captions inside placeholders): `ui-monospace, Menlo, monospace`, ~11px, uppercase.

**Layout**
- Max content width ~1180px, centered, with responsive side padding `clamp(20px, 5vw, 56px)`.
- Generous vertical rhythm between sections.
- `text-wrap: balance` on headlines, `pretty` on body.

**Motion:** Minimal. Subtle hover lifts on cards (translateY -4px + soft shadow), a nav mark that rotates 90° on hover, links that nudge right on hover. No scroll-triggered fade-ins (content must always be visible). Respect `prefers-reduced-motion`.

---

## 2. Page A — Landing (one page, `index.html`)

Order of sections, top to bottom:

**Nav (sticky, translucent, hairline bottom border)**
- Left: square monogram (serif italic initial, e.g. "a", in a rounded 1px box).
- Center: text links — `work`, `play`, `about`. Active link gets a tiny filled square bullet before it.
- Right: a small decorative mark (✣) that rotates on hover, linking to contact.

**Hero (two columns)**
- Left: a large Newsreader headline with an italic accent phrase, e.g. *"I'm Lindsey, a product designer who **designs with AI.**"* Below it, a sub-paragraph in muted sans introducing the person, with small inline "chips" (a tiny rounded color swatch + a bolded company name). Bio reference: *"Howdy — a UX designer based in Texas, previously shaping real products at Emerson. Master's student in Information Studies at UT Austin, exploring how AI reshapes the way we design."*
- Right: a bordered, rounded rectangle that is a **static placeholder for an interactive preview** (hairline diagonal-stripe fill, a small mono label like `preview / 01` top-left, centered text "interactive preview — coming soon", and a serif italic "hover to explore" bottom-right). This will become interactive later.

**Selected Work (2×2 grid)**
- Section header row: eyebrow "SELECTED WORK" on the left, a muted note like "2023 — 2026" on the right, hairline divider beneath.
- Four cards, each: a color-blocked thumbnail (one of the four card skins) containing a device placeholder (laptop or row of three phones, drawn as simple bordered shapes with hairline-stripe "screens"), then below the thumbnail a caption row with the project title (sans, medium) on the left and an uppercase role label on the right. One card carries a small "★ Most Impact" award badge.
- Cards lift slightly on hover. Each card links to its case-study page.
- Suggested cards: "Rebuilding an Approval Flow" (tan, laptop), "A Bio-Smart Wearable Concept" (soft grey, phone, award badge), "AI Pain Detection for Pet Owners" (deep green, phones), "Redesigning Privacy Controls" (electric blue, phones).

**About (two columns)**
- Left: eyebrow "ABOUT", a Newsreader headline with an italic accent, two muted body paragraphs. Reference content: designs calm/human interfaces, research-backed decisions, learning to design *with AI*, previously at Emerson, master's at UT Austin.
- Right: a 4:5 portrait placeholder (hairline-stripe fill, mono caption "portrait").

**Contact footer (dark panel)**
- Background flips to ink (`#1B1A18`), text to `#F4F2ED`.
- Eyebrow "GET IN TOUCH", a huge Newsreader headline with italic accent (e.g. *"Let's build **something good.**"*), an email link styled in serif italic with an underline, then a bottom row: copyright on the left, social links (LinkedIn, Read.cv, GitHub, Email) on the right, separated by a faint top border.

---

## 3. Page B — Project Case Study (one per project)

Same design system. Layout echoes a classic case-study page: a sticky section rail on the left and the article on the right. Each project gets **one accent color** (low-chroma, derived from its card) applied to the rail's active state, section eyebrows, and the "skip to solution" pill.

**Structure**
- Same sticky nav as the landing page (monogram links home; links return to landing sections).
- Two-column shell: **left rail** + **main article**.

**Left rail (sticky)**
- "← All work" back link (returns to landing `#work`), hairline divider.
- A vertical list of section links: Context · Where we began · What we found · Solution · Next steps · Takeaways · Learn more · See next.
- **Scroll-spy:** the link for the section currently in view is highlighted in the page's accent color (small filled square bullet). On mobile the rail collapses to a horizontal wrapping row.

**Main article, top to bottom**
1. **Hero banner** — a soft full-width banner (a gentle multi-stop gradient unique to the project) holding a serif wordmark + tagline on the left and a device placeholder (laptop or phone) on the right. Dark-themed banners (green/blue projects) use light text. Small mono "hero image" label bottom-right.
2. **Title block (two columns)** — left: an italic serif "award/credit" eyebrow + the big Newsreader title; right: a one-line summary, a row of pill tags (e.g. Mobile / Wearable / Health), and a **"Skip to solution" pill** (accent-tinted, dotted texture, circular arrow button) that jumps to the Solution section.
3. **Meta row** — three labeled items: Role · Duration · Tools (e.g. "Figma, Figma Make, Claude"), above a hairline divider.
4. **Body sections** (each with an accent eyebrow + serif headline with an italic accent word + muted body copy):
   - *Context* — short framing paragraph.
   - *Where we began* — problem framing + a wide image placeholder.
   - *What we found* — insight, plus a **serif italic pull-quote** with a left accent border.
   - *Solution* — the core solution, a two-up image pair + a wide walkthrough placeholder.
   - *Next steps* — what's next.
   - *Takeaways* — a row of 2–3 big serif stats (number + small caption) and a closing reflection.
   - *Learn more* — a list of underlined links (write-up, prototype, Figma file) that nudge right on hover.
5. **See next** — a card (same style as the work cards) linking to the next project, chaining the set in a loop.
- Same dark contact footer as the landing page.

**Image placeholders everywhere:** rounded rectangles with a hairline diagonal-stripe fill and a small uppercase monospace caption (e.g. "service blueprint", "home / daily read"). Device mockups are drawn with plain bordered shapes — a laptop is a bordered lid + a grey base bar; phones are tall rounded-border rectangles with a notch. No real images required.

---

## 4. Implementation notes
- Plain HTML + CSS. One shared stylesheet for the case-study pages; the landing page can be self-contained.
- Use CSS custom properties for the tokens above; each case study just overrides the accent variables and banner gradient.
- Use CSS grid/flex with `gap` for all layout — no float/inline-block spacing.
- Mobile: hero, about, title block, and work grid all collapse to single column; the rail goes horizontal.
- Accessibility: real heading hierarchy, focusable links, sufficient contrast, reduced-motion respected.

---

## 5. Content to use (replace as needed)
- **Name:** Lindsey Nguyen — Product Designer (UX), based in Texas.
- **Bio:** "Howdy — a UX designer based in Texas, previously shaping real products at Emerson. Master's student in Information Studies at UT Austin, exploring how AI reshapes the way we design."
- **Positioning:** designs *with AI*; research-backed, calm, human interfaces.
- **Projects:** Rebuilding an Approval Flow; A Bio-Smart Wearable Concept (Most Impact award); AI Pain Detection for Pet Owners; Redesigning Privacy Controls.
- Email and social links are placeholders — fill in real ones.
