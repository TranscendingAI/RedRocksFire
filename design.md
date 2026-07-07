# Red Rocks Fire Protection — Design System

A reusable set of design elements and component patterns for building the RRFP site. This
captures the *visual language* — pill nav, rounded-top section bands, large uppercase titles,
off-screen sliding card carousels, card styles, alternating light/black bands — not a fixed page
clone. Compose the page from these patterns. **No 3D renders or decorative 3D objects anywhere.**
Imagery is photography or flat color only.

---

## 1. Brand tokens

### Core palette

```css
:root {
  --rr-red:   #D31428;  /* primary accent */
  --rr-black: #000000;  /* black bands, primary text on light */
  --rr-grey:  #AE9E9A;  /* muted/secondary text, borders */
  --rr-white: #FFFFFF;
}
```

### Derived neutrals (tints of --rr-grey; use these exact values)

```css
:root {
  --rr-bg-light:  #F4F2F1;  /* near-white warm — default light band */
  --rr-bg-panel:  #E7E2E1;  /* light grey — panels, hero fallback, cards */
  --rr-pill:      #EAE6E5;  /* nav pill fill */
  --rr-grey-soft: #CFC6C3;  /* secondary text ON black bands */
  --rr-red-hover: #B01021;
  --rr-border-lt: rgba(0,0,0,0.10);
  --rr-border-dk: rgba(255,255,255,0.12);
  --rr-overlay:   rgba(0,0,0,0.55); /* hero image darkening */
}
```

### Usage rules

- The page alternates full-bleed **bands**: light grey → black → white → light grey. Black bands
  are the dramatic beats.
- Text: black on light, white on black. Muted body is `--rr-grey` on light, `--rr-grey-soft` on
  black.
- **Red is the only accent.** Use it for: the CTA button when it sits over a black band, text
  links, the footer email, the active carousel indicator, and optionally one emphasized word in
  a title. Keep it to a small fraction of any screen.
- Primary button is **black** on light bands, **red** on black bands.

---

## 2. Typography

The signature of the whole site is the **oversized, heavy, uppercase grotesque title.**

```css
:root {
  --rr-font-display: "Archivo", "Helvetica Neue", Arial, sans-serif; /* headings — weight 800–900 */
  --rr-font-body:    "Inter", "Helvetica Neue", Arial, sans-serif;   /* body */
}
```

- **Display / titles:** weight **800–900**, **UPPERCASE**, tracking **-0.02em**, line-height
  **0.95–1.0** so stacked lines nearly touch. Used very large.
- **Body:** 400 (500 emphasis), sentence case, line-height 1.55.
- Self-host both fonts.

### Type scale (fluid)

| Role | Family | Size `clamp()` | Weight | Case |
|------|--------|----------------|--------|------|
| Hero title | display | `clamp(3rem, 8vw, 8rem)` | 900 | UPPER |
| Section title | display | `clamp(2.25rem, 5vw, 5rem)` | 800 | UPPER |
| Big statement word | display | `clamp(2.5rem, 4vw, 4rem)` | 800 | UPPER |
| Card / item title | display | `clamp(1.25rem, 2vw, 1.75rem)` | 700 | Title or UPPER |
| Lead paragraph | body | `clamp(1.125rem, 1.6vw, 1.5rem)` | 400 | Sentence |
| Body | body | `1rem` | 400 | Sentence |
| Eyebrow / label | body | `0.8125rem` | 600 | UPPER, tracking 0.12em |
| Nav link | body | `0.95rem` | 500 | Title |

---

## 3. Spacing, radius, grid

```css
:root {
  --rr-space-4:1rem; --rr-space-6:1.5rem; --rr-space-8:2rem;
  --rr-space-12:3rem; --rr-space-16:4rem; --rr-space-24:6rem; --rr-space-32:8rem;

  --rr-radius-card:    24px;  /* cards, panels, image blocks */
  --rr-radius-section: 40px;  /* rounded TOP corners on bands (see §5) */
  --rr-radius-pill:    999px; /* buttons, nav pill, tags */

  --rr-container: 1280px;
  --rr-gutter-mobile: 1.25rem;
  --rr-gutter-desktop: 2.5rem;
}
```

- 12-column grid inside `--rr-container`, centered.
- Band vertical padding: `--rr-space-24` mobile → `--rr-space-32` desktop.

---

## 4. Core design elements

### 4.1 Navigation — logo outside a pill menu

Three separate zones on one row. **The logo sits on its own, outside the pill.** The nav links
live inside a **pill-shaped container.** The CTA is a separate button on the right.

```
[◇ logo + wordmark]        ( Home   About   Services   Contact Us )        [ Schedule Our Services ]
     ^ outside pill                ^ pill container, --rr-pill fill                ^ separate button
```

- Fixed to top. Pill fill `--rr-pill`, `--rr-radius-pill`, links centered inside.
- **Color swap by band underneath:** over light bands → links black, CTA black (white text);
  over black bands → links white, pill goes transparent/dark, CTA **red** (white text).
- Mobile: collapse links to a hamburger overlay; keep logo + CTA visible.

### 4.2 Buttons

```
Primary on light:  bg #000, text #fff, pill radius, padding .85rem 1.6rem, weight 600.
Primary on black:  bg --rr-red, text #fff; hover --rr-red-hover.
Secondary:         transparent, 1px border, current text color.
Arrow variant:     label + "→"  (e.g. "More details →").
```
Visible `:focus-visible` ring in `--rr-red`.

### 4.3 Rounded-top band reveal

Full-bleed color bands stack, and each band that follows another gets **large rounded top
corners** (`--rr-radius-section`) so it appears to slide up and over the band above as you
scroll. Apply to black bands and to any white band emerging from a black one. This overlap is a
core visual motif — use a sticky/overlapping layout to sell the reveal.

```
   ░░░░ light band ░░░░
  ╭────────────────────╮   ← rounded top corners
  █  black band        █
  ╰────────────────────╯
 ╭──────────────────────╮  ← next band slides over
 │  white band          │
```

### 4.4 Hero — full-bleed background image

No 3D object. The hero is a **full-viewport background photograph** (fire-safety imagery)
darkened with `--rr-overlay`, with an oversized uppercase title and short subcopy overlaid, plus
the primary CTA. Title dominates.

```
┌───────────────────────────────────────────────┐
│  [ full-bleed background photo + dark overlay ] │
│                                                 │
│   RAISING THE STANDARD                          │
│   IN FIRE SAFETY.                               │
│                                                 │
│   Our team delivers fire inspections and        │
│   actionable insights to protect what           │
│   matters most.   [ Schedule Our Services ]     │
└───────────────────────────────────────────────┘
```
- `min-height: 100svh`. Text left- or center-aligned; white text on the overlay.
- Fallback background `--rr-bg-panel` if image missing.

### 4.5 Card styles

**Standard content card** — image top, white body below.
```
┌─────────────┐
│    image    │   image fills top, --rr-radius-card on the card
│─────────────│
│ Title        │  display 700
│ Body copy    │  --rr-grey
│ [More →]     │  pill button
└─────────────┘
```
- Fill `--rr-white`, `--rr-radius-card`, subtle border `--rr-border-lt`.
- Hover: lift `translateY(-4px)` + soft shadow.

**Split feature panel** — 50/50, used as a large single-slide spotlight.
```
┌───────────────────┬───────────────────┐
│ TITLE.            │                    │
│ Body copy         │      image         │
│ [ More details ]  │                    │
└───────────────────┴───────────────────┘
```
- Fill `--rr-bg-panel`, `--rr-radius-card`. Left = text, right = image (or reverse).

**Credential / logo tile** — black tile, single centered white mark.
```
┌────────┐
│  MARK  │   bg #000, --rr-radius-card, white logo centered
└────────┘
```

### 4.6 Large 3-item off-screen sliding carousel

The key carousel pattern: a row of large cards where **~3 are visible and the next card bleeds
off the right edge of the screen**, signaling more. Horizontal scroll-snap; cards are wide.

```
 container ─────────────────────────────────────────────┆ viewport edge
 ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────       ┆
 │  card 1  │ │  card 2  │ │  card 3  │ │  card 4 →      ┆  ← 4th bleeds off-screen
 └──────────┘ └──────────┘ └──────────┘ └────────       ┆
                    ( ← )  ( → )                          ← circular arrow controls, centered below
```
- Cards use the standard card style (§4.5). Gap `--rr-space-6`.
- Controls: circular icon buttons with `--rr-border-lt`; advance by one card.
- Mobile: one card per view, still snap-scrolling, next card peeking.

**Autoplay variant** (for a spotlight split-panel slider): same off-screen bleed, but autoplays
(~6s/slide) and shows a **pause toggle + dashed/dot progress indicator** below; active indicator
in `--rr-red`.
```
        ( ⏸ )   ▬ • • •
```

### 4.7 Large statement blocks

- **Big title + lead:** an oversized uppercase title with a short grey lead beneath, left-
  aligned, lots of whitespace. Used to open a band.
- **Three-beat word row:** three large uppercase words across the top of a black band, each with
  a short line of body copy beneath — a punchy way to state three points.
```
  WORD ONE.        WORD TWO.        WORD THREE.
  short support    short support    short support
  line.            line.            line.
```

### 4.8 Dual CTA split with corner arrows

Two large uppercase titles side by side, divided by a vertical rule, each with a small
descriptor and an **outbound corner arrow (↗)** in the top corner.
```
  TITLE ONE.        ↗ │  TITLE TWO.        ↗
  descriptor line     │  descriptor line
```

### 4.9 Footer (black band)

Left: large white wordmark, "Have questions? → email" with the **email in `--rr-red`**, phone,
address. Right: link columns. Bottom bar: © line + socials + legal.

---

## 5. Motion

- **Band reveal:** rounded-top overlap via sticky/overlapping layout as bands scroll.
- **Fade-up on enter:** titles/body `opacity 0→1`, `y 24px→0`, 500ms, stagger 80ms
  (IntersectionObserver).
- **Three-beat words:** reveal one at a time on scroll.
- **Carousels:** smooth scroll-snap; autoplay variant ~6s/slide with pause.
- **Buttons/cards:** color + slight lift on hover, 150ms.
- Respect `@media (prefers-reduced-motion: reduce)`: disable autoplay, reveals, and overlap
  transforms; show final states.

---

## 6. Responsive & quality floor

- Breakpoints 640 / 768 / 1024 / 1280; mobile-first.
- Multi-column patterns (three-beat, tile grid, dual split) stack on `< 768px`.
- Carousels: 3-up desktop → 1-up with peek on mobile.
- Hero title scales via `clamp()` but stays dominant.
- Nav → hamburger overlay < 768px.
- No overflow to 360px; visible keyboard focus; body contrast ≥ 4.5:1; semantic landmarks; alt
  text on all images.

---

## 7. Suggested page composition

Compose the homepage from the elements above, alternating band colors. A workable order (adjust
freely):

1. **Hero** — full-bleed background image (§4.4) + primary CTA.
2. **Three-beat word row** on a black band (§4.7) — Experience / Compliance / Response.
3. **Big title + lead** intro on a light band, with a supporting photo (§4.5 split panel).
4. **3-item off-screen carousel** of service cards (§4.6).
5. **Autoplay split-panel spotlight** for featured services (§4.6 variant).
6. **Credential tile grid** on a white band (§4.5 tiles) — NICET, CSA, Colorado, NFPA.
7. **Dual CTA split** (§4.8) — Schedule / About.
8. **Footer** (§4.9).

---

## 8. Assets & content reference

**Asset policy:** photography only (no 3D/illustration). Where a final image isn't available,
use a solid `--rr-bg-panel` block at the target aspect ratio as a placeholder — do not generate
decorative art. Hero needs one wide background photo; cards/panels need service or jobsite
photos; credential tiles need white-on-transparent logo marks.

**Company:** Red Rocks Fire Protection. Founded 2010. 200+ years combined experience. Led by
Brian Kakac. NICET certified, CSA certified, Colorado licensed. NFPA inspections with written
reports. 24/7 monitoring; 24-hour emergency service, 1-hour metro response.

**Contact:** (720) 733-8050 · info@rrfps.com · 7076 S. Alton Way, Suite G2, Centennial, CO 80112.
**Nav:** Home · About · Services · Contact Us. **Primary CTA:** Schedule Our Services.

**Hero copy:** "Raising the Standard in Fire Safety" / "Our team of professionals delivers fire
inspections and actionable insights to protect what matters most."

**Three beats:** Experience (100+ yrs combined; NICET/CSA/CO licensed) · Compliance (standards-
driven NFPA inspections) · Response (24-hr emergency, 1-hr metro response).

**Services (for cards/carousels):** Wet Sprinkler Systems · Dry Sprinkler Systems · Antifreeze
Sprinkler Systems · Preaction & Deluge Systems · Fire Pumps · Kitchen Suppression Systems ·
Standpipe Systems · Portable Fire Extinguishers · Backflow Prevention Assemblies · 24/7
Monitoring · Inspections. Also: Mass Voice Evacuation, Smoke Control, retrofits & modifications.

---

## 9. Build target

Astro + TypeScript, deployed on Vercel. Put all tokens from §1–§3 in a single `tokens.css` (or a
Tailwind theme extension) and build each element in §4 as its own component. Fonts (Archivo,
Inter) self-hosted.
