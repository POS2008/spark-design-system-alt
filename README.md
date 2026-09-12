# SPARK Design System alt → React · TypeScript · Tailwind

A production export of **"SPARK Design System alt"** (Patrick · updated 23.5.2026 · org default) for Lovable.

Every design value in this repository was read out of that system's own source files and copied. Nothing in the component anatomy, tokens, layout or styling was redesigned, reinterpreted, simplified, normalised or invented. Where the source contradicts itself, both readings are recorded and the one that actually renders is the one exported — see [Source conflicts](#source-conflicts).

**Public-release note:** commercial font binaries are excluded; real contact details, client names and venue addresses in the website examples are replaced with neutral demonstration copy; three non-client-specific photographs are included as web-optimised derivatives. These privacy and licensing changes do not alter the component interfaces or design values.

**No part of this export comes from "SPARK Design System GT" or any other SPARK system.**

---

## Quick start

```bash
npm install
npm run dev
```

| Route | Renders |
|---|---|
| `#/` | `DesignSystem.tsx` — logo, colours, type, spacing, grid, radii, shadows, buttons, tags, space card, breakpoint status, website collection |
| `#/collection` | `index.html` — SPARK · The Collection, at full size |
| `#/frankfurt` | `frankfurt.html` — the Frankfurt house page, at full size |

In an existing app, import the three stylesheets once at the root, in this order:

```tsx
import '@/styles/tokens.css';      // the values
import '@/styles/typography.css';  // @font-face + type utilities
import '@/styles/globals.css';     // base layer + Tailwind
```

`@/*` maps to `src/*` (`tsconfig.json`, `vite.config.ts`).

---

## Source of truth

```
SPARK Design System alt/
  assets/tokens.css            → src/styles/tokens.css · src/foundations/*
  assets/fonts/                → private install; see FONT_SETUP.md
  assets/logo/                 → src/assets/logo/
  approved image derivatives  → src/assets/images/ (public-safe subset)
  system/logo.html             → src/components/spark/SparkLogo.tsx
  system/colors.html           → src/foundations/colors.ts
  system/type.html             → src/foundations/typography.ts · styles/typography.css
  system/spacing.html          → src/foundations/{spacing,grid,radii,shadows}.ts
  system/buttons.html          → src/components/spark/{Button,Tag}.tsx
  system/space-card.html       → src/components/spark/SpaceCard.tsx
  index.html + frankfurt.html  → src/website/WebsiteCollection.tsx
```

The rule that governs this codebase: **a value may exist here only if it is traceable to one of those files.** Every module carries a `SOURCE:` header naming the file and, where useful, the exact rule it came from.

---

## Architecture

### Token architecture

Three representations of one set of values. They cannot drift, because the TypeScript modules and the Tailwind theme both resolve to the CSS variables in `tokens.css`.

1. **`src/styles/tokens.css`** — the source `:root` block, copied verbatim, then a semantic alias layer on top (`--spark-fg-primary`, `--spark-bg-invert`, `--spark-border`, `--spark-space-*`, `--spark-radius-*`, `--spark-shadow-*`). Every alias points at a source token; none introduces a value. Below that, a named block for the literal `rgba()`/gradient values that appear inside the website pages, so components never hard-code them.
2. **`src/foundations/*.ts`** — typed, documented values for logic and for the reference page.
3. **`tailwind.config.ts`** — theme keys mapped onto the same variables: `bg-ink`, `text-paper`, `border-rule`, `text-oak-deep`, `rounded-md`, `shadow-sm`, `p-s-6`, `max-w-grid`.

Naming follows the semantic pattern requested, with source values underneath:

```
--spark-ink            #0B0B0C        --spark-fg-primary      → --text        (#0A0A0A)
--spark-paper          #F6F3EE        --spark-fg-secondary    → --text-muted  (#6E6B63)
--spark-concrete       #E8E4DC        --spark-bg-primary      → --surface     (#F6F3EE)
--spark-oak            #C6A87A        --spark-bg-invert       → --spark-ink   (#0B0B0C)
--spark-oak-deep       #A88B5C        --spark-border          → --rule        (#DFDCD1)
--spark-oak-soft       #E8D8B8        --spark-accent          → --accent      (#C6A87A)
--ink-900 … --ink-050  10 warm steps  --spark-space-1 … -10   → --s-1 … --s-10
```

### Component architecture

Four components, because the source system contains four. `Buttons & Tags` and `Space Card` are its two Components entries; the logo is its Brand · 01 entry.

```
src/components/spark/
  Button.tsx      Button (5 variants × 3 sizes, arrow, on-ink overrides)
                  IconButton (+ PlayGlyph, CloseGlyph — the two glyphs in the source)
  Tag.tsx         Tag (3 variants + dot modifier)
  SpaceCard.tsx   SpaceCard (ink + light), SpaceCardGrid, and the six cards as authored
  SparkLogo.tsx   SparkLogo, LocationLockup, logoRules, logoMinimums, logoScaleSteps
```

No configurator, form, navigation, dashboard, marketing template or slide template has been created — none exists in this source system.

Each component's doc comment reproduces the source anatomy, and names the states the source does **not** define rather than filling them in.

### Website architecture

`src/website/WebsiteCollection.tsx` holds the whole of *Website — Group (Collection)*:

- `<CollectionHomepage />` — the source's 11-section structure: topbar, centred-wordmark nav, cinematic hero with the 20s zoom keyframe, manifesto, three-address collection grid (incl. two `soon` states), spaces, experiences, philosophy, journal, appointment and five-column footer. Public example content is anonymised.
- `<HouseFrankfurt />` — the source's 9-section structure: nav with bronze CTA, 760px hero with the spec rail, proof strip, intro, two pillars, three-stage editorial list, stories, radial-gradient CTA and four-column footer. Public example content is anonymised.
- `<WebsiteCollection page="collection" | "frankfurt" />` — switcher.
- `Label`, `Eye`, `CollectionButton`, `HouseButton` — the pages' own primitives.

`index-print.html` is a print copy of `index.html` and introduces no new design, so it has no separate component.

---

## How Lovable should consume it

1. Create a dedicated Lovable design-system project from the dashboard prompt: **+ → Design → Use a design system → Create design system**.
2. In that new project chat, import this public repository as local source:

   `https://github.com/POS2008/spark-design-system-alt`

   Do not use the normal Git sync screen for this initial import; give the public repository URL directly to the design-system project.
3. Lovable discovers the public component API from `src/index.ts` and the tokens from `src/styles/tokens.css`.
4. Keep `.lovable/system.md`; Lovable preserves it when releasing. Lovable generates `.lovable/design-system.json` and the rendered rule files on release.
5. Import the three stylesheets at the app root, in order, and merge `src/tailwind-preset.ts` into the consuming Tailwind configuration.
6. Reach for `src/components/spark/` before writing markup. All internal source imports are relative so they remain valid after Lovable namespaces the copied source.
7. Images and the logo live in `src/assets/`. Licensed fonts are excluded from this public repository and must be installed privately as described in `FONT_SETUP.md`.
8. Use Tailwind classes generated from the tokens, or `var(--spark-*)`. Never a literal hex, px radius or shadow.
9. For a marketing surface, start from a section in `WebsiteCollection.tsx` rather than a new layout.
10. When something is missing, compose it from primitives and **say so**. When a token is genuinely missing, flag it — never create one silently (SKILL.md rules 12 and 13).
11. When the reference page and component catalog are correct, choose **Release version**. Only released design systems can be attached to other Lovable projects.

---

## How to add a component safely

1. Confirm it does not exist. Four components and two page patterns is the whole system.
2. Write it in `src/components/spark/`, one file, named export plus default.
3. Head the file with a `SOURCE:` comment. If there is no source, write `SOURCE: none — composed from <primitives>` and list them.
4. Use only tokens. If you reach for a value that has no token, stop and flag it.
5. Match the type roles: Kräftig 500 labels, Buch 400 copy, mono for data, GT Super for display only.
6. Add it to `src/components/spark/index.ts` and render it on `DesignSystem.tsx` — the reference page is the regression test.
7. State in your PR/response which states are undefined (focus, disabled, active) so the gap stays visible.

## How to update tokens

1. Change the value in **`src/styles/tokens.css`** only.
2. Mirror it in the matching `src/foundations/*.ts` entry so the typed layer and the reference page stay honest.
3. Never change a value in `tailwind.config.ts` — it holds no values, only variable references.
4. Never override a token inside a component.
5. If the change originates upstream in Claude Design, note it under *Source conflicts* below so the divergence is recorded rather than lost.

---

## Which parts originate directly from Claude Design

Everything, except the items in this list:

| Added by this export | Why |
|---|---|
| The semantic alias layer in `tokens.css` (`--spark-fg-*`, `--spark-bg-*`, `--spark-border*`, `--spark-space-*`, `--spark-radius-*`, `--spark-shadow-*`) | Requested naming structure. Each alias points at a source token; no new values. |
| Named website literals in `tokens.css` (`--spark-veil-*`, `--spark-scrim-*`, `--spark-site-*`) | The source writes these as inline `rgba()`/gradients. Naming them keeps components free of hard-coded values. The values are unchanged. |
| `--spark-radius-0: 0px` | `system/spacing.html` renders a "radius-0 · 0px" specimen but the stylesheet has no token for it. |
| `src/foundations/breakpoints.ts` | Records that breakpoints are **UNKNOWN** and lists the viewport facts that do exist. It defines no breakpoints. |
| `src/lib/cx.ts`, `App.tsx`, `main.tsx`, `index.html`, `package.json`, `tsconfig.json`, `vite.config.ts`, `postcss.config.js` | Build scaffolding, no design content. |
| React/TS structure of the components | The source is CSS + HTML; turning it into components is the export itself. All values are the source's. |
| `SpaceCard` props API, `SparkLogo` `clearSpace` prop | A component needs an interface. `clearSpace` approximates RULE 03 as 0.72 × rendered height, because the cap-height of the S is a property of the SVG geometry and is not stated numerically in the source — **flagged, not authoritative.** |
| `DesignSystem.tsx` | A reference page. The source's own index pages (`system-index.html`, the six `system/*.html`) were the model for its order and copy. |
| The 62% scale on the website preview inside `DesignSystem.tsx` | Presentation only, so the 1280px-minimum pages fit in the reference page. The pages themselves are unscaled at their own routes. |

---

## Source conflicts

Recorded, not resolved. In each case the exported value is the one that actually renders.

**1 · Core palette hexes.** `assets/tokens.css` declares Ink `#0B0B0C`, Paper `#F6F3EE`, Concrete `#E8E4DC`, Oak `#C6A87A`. The swatch **labels** in `system/colors.html` read `#0A0A0A`, `#FAFAF7`, `#E8E6E0`, `#C9A576` — but those swatches are painted with `var(--spark-ink)` etc., so they render the stylesheet values. Exported: the stylesheet values. Documented values are kept in `colors.coreDocumented`. (Note `#0A0A0A` is also the real value of `--ink-900`, and `system/spacing.html` uses `rgba(201,165,118,.14)` = `#C9A576` for its grid overlay while `index.html` uses `rgba(198,168,122,…)` = `#C6A87A`.)

**2 · Two type scales.** `tokens.css` defines a fluid `clamp()` scale (`--fs-h1: clamp(2.5rem, 4.5vw, 4rem)` → 40–64px). `system/type.html` documents and renders a fixed scale (H1 = 72px, Display = 120px, H2 = 44px). Both are exported: `.t-*` / `typography.fluidSizes` and `.spec-*` / `typography.specimenScale`. Neither was adjusted toward the other.

**3 · Three button implementations.** `system/buttons.html` (the component: 14×26, 15px, .005em, .2s/.15s), `index.html` (15×26, 13px, .02em, .25s, animated arrow), `frankfurt.html` (14×24, 14px, .01em, .2s, bronze variant). All three are preserved: `Button` is the component; `CollectionButton` and `HouseButton` live with their pages.

**4 · Two space-card implementations.** `system/space-card.html` is the ink-surface component with an oak spec pill, an oak sqm line and a 3-up facts row on a 4px radius. `index.html` has its own `.space-card`: paper surface, 2px radius, `--ink-200` hairline, tag on the image, spec values with unit suffixes, and a price/CTA foot. Both are preserved — the component in `SpaceCard.tsx`, the site version inside `WebsiteCollection.tsx`.

**5 · Display face weight 500.** `space-card.html` sets the card title and fact values to `font-weight: 500` on GT Super Display, which ships Bold (700) only; they render at 700. The authored weight is preserved rather than "corrected".

**6 · Two page gutters and rhythms.** Collection page: 64px gutter, 160px section rhythm, 48px nav logo. House page: 56px gutter, 120px rhythm, 34px nav logo. Both kept.

**7 · One unlisted radius.** `frankfurt.html .pillar` uses `6px`, which matches no token (2/4/8/999). Preserved as `6px` and flagged.

**8 · One unlisted shadow.** `index.html .space-card:hover` uses `0 24px 60px rgba(10,10,10,.08)` — the `--shadow-lg` first layer at a lower alpha. Preserved as `--spark-shadow-card-hover`.

---

## Source parity audit

| Source item | Exported file | Parity | Notes |
|---|---|---|---|
| `assets/tokens.css` — colours | `styles/tokens.css`, `foundations/colors.ts` | **EXACT** | All 6 core + 10 neutral + 7 semantic tokens copied verbatim. Documented-vs-implemented conflict recorded (conflict 1). |
| `assets/tokens.css` — type stacks | `styles/tokens.css`, `foundations/typography.ts` | **EXACT** | All three stacks verbatim. |
| `assets/tokens.css` — fluid type scale | `styles/tokens.css`, `styles/typography.css` | **EXACT** | All 8 sizes, 3 line heights, 2 tracking values verbatim, incl. all 4 `clamp()` definitions. |
| `assets/tokens.css` — spacing | `foundations/spacing.ts` | **EXACT** | `--s-1` … `--s-10`. |
| `assets/tokens.css` — radii | `foundations/radii.ts` | **EXACT** | sm/md/lg/pill; `radius-0` added from the spacing.html specimen. |
| `assets/tokens.css` — shadows | `foundations/shadows.ts` | **EXACT** | sm/md/lg verbatim. |
| `assets/tokens.css` — layout | `foundations/grid.ts` | **EXACT** | `--grid-max`, `--grid-gutter`. |
| `assets/tokens.css` — `.t-*` utilities | `styles/typography.css` | **EXACT** | All 8 utilities verbatim. |
| `assets/tokens.css` — `.bronze-material`, `.ink-cinematic` | `styles/globals.css` | **EXACT** | Both gradients verbatim. |
| `assets/tokens.css` — base element rules | `styles/globals.css` | **EXACT** | html/body/h1–h5/hr. |
| `assets/fonts/*` (5 files) | private install; see `FONT_SETUP.md` | **PARTIAL** | Font-family declarations and filenames are exact; licensed binaries are excluded from the public repository. |
| `assets/logo/spark-logo-official.svg` | `src/assets/logo/` | **EXACT** | Copied as-is, never redrawn. |
| `assets/images/*` | `src/assets/images/` (3 files) | **PARTIAL** | Public-safe, web-optimised derivatives only. Client-specific photography and unused source imagery are excluded. |
| **Brand — Logo** (`system/logo.html`) | `components/spark/SparkLogo.tsx` | **PARTIAL** | Mark, primary/reverse/oak/lockup treatments, 5 scale steps, minimums and all 3 rules are exact. The `clearSpace` implementation is an approximation (0.72 × height) because the cap-height of the S is not stated numerically — flagged. |
| **Colors — Palette** (`system/colors.html`) | `foundations/colors.ts`, `pages/DesignSystem.tsx` | **EXACT** | Core, neutral scale, the "No rainbow" principle, all 3 pairings incl. the 18.6:1 and "< 10% of canvas" notes. |
| **Type — Typography** (`system/type.html`) | `foundations/typography.ts`, `styles/typography.css` | **EXACT** | All 9 specimen roles with size/leading/tracking, both family intros, the setting guidance and the stack block. |
| **Spacing — Grid & Shape** (`system/spacing.html`) | `foundations/{spacing,grid,radii,shadows}.ts` | **EXACT** | 10-step scale, 12-col/1440/24 grid, all 4 radius specimens with role labels, all 3 elevations with role labels, the 8px baseline. |
| **Components — Buttons & Tags** (`system/buttons.html`) | `components/spark/{Button,Tag}.tsx` | **EXACT** | 5 button variants, 3 sizes, the on-ink override set, the arrow modifier, the anatomy block, `.iconbtn` + `.iconbtn.ghost` with both glyphs, 3 tag variants + dot. No variant added. Focus/active/disabled are absent from the source and therefore absent here. |
| **Components — Space Card** (`system/space-card.html`) | `components/spark/SpaceCard.tsx` | **EXACT** | Ink + light variants, 4/3 media, floor badge (incl. the light-variant inline override), oak spec pill, title/sqm/desc, 3-up facts, hover lift, the `repeat(3,1fr)`/24px grid, and all six authored cards. Authored `font-weight: 500` on the display face preserved (conflict 5). |
| **Website — Group (Collection)** → `index.html` | `website/WebsiteCollection.tsx` → `CollectionHomepage` | **PARTIAL** | All 11 sections, button sets, motion, scrims and states are preserved. Public example copy, contacts, client names and imagery are anonymised. |
| **Website — Group (Collection)** → `frankfurt.html` | `website/WebsiteCollection.tsx` → `HouseFrankfurt` | **PARTIAL** | All 9 sections, button variants, spec rail, stage list and CTA treatment are preserved. Public example copy, contacts, client names and imagery are anonymised. |
| `index-print.html` | — | **EXACT** (no export needed) | Print copy of `index.html`; no new design values. |
| `system-index.html` | `pages/DesignSystem.tsx` | **PARTIAL** | Its hero clamp, meta row and card grid informed the reference page's structure. It is an index, not a design artefact, so it is not reproduced verbatim. |
| Breakpoints / responsive rules | `foundations/breakpoints.ts` | **UNKNOWN** | None exist in the source. Recorded, not invented. |
| Focus / active / disabled states | — | **UNKNOWN** | None exist in the source. Not invented. |
| Form components | — | **UNKNOWN** | None exist in the source. |

---

## VALUES THAT COULD NOT BE EXTRACTED

1. **Breakpoints.** No `@media` rule exists anywhere in the source system — not in `tokens.css`, not in the six `system/*.html` pages, not in either website page. Both website pages instead declare `body { min-width: 1280px }` and `<meta name="viewport" content="width=1440">`. Recorded as `UNKNOWN` in `src/foundations/breakpoints.ts`; the exported website components reproduce the fixed desktop layout. Tailwind's default `screens` are left untouched so nothing implies a SPARK-sanctioned responsive scale.

2. **Focus states.** No `:focus`, `:focus-visible` or `:focus-within` rule exists in the source. No focus ring colour, width, offset or radius could be extracted. Not invented — keyboard focus currently falls back to the browser default. This is an accessibility gap that needs a design decision.

3. **Active / pressed states.** No `:active` rule exists. The only press-adjacent treatments in the source are hover transforms (`translateY(-1px)` on buttons, `-3px`/`-4px` on cards).

4. **Disabled states.** No `:disabled`, `[disabled]` or `[aria-disabled]` rule exists. `Button` passes `disabled` through to the DOM but applies no styling of its own.

5. **Logo clear space, as a number.** `system/logo.html` RULE 03 specifies clear space equal to the cap-height of the S, and the scale row gives minimum sizes (14px digital, 10mm print), but no numeric ratio is stated. The `clearSpace` prop approximates it at 0.72 × rendered height and is flagged in-file as an approximation, not a source value.

6. **Mono font file.** `--font-mono` declares `'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace`, but no mono font file ships with the source system. Mono text resolves through the fallback stack.

7. **Form controls.** No input, select, textarea, checkbox, radio, switch or field-label styling exists anywhere in the source.

8. **Icon set.** The source states the icon rule — 16px line icons, 1.5px stroke, square or 90° corners, never mixed with filled icons — but ships no icon files. Only the two inline SVG glyphs inside `system/buttons.html` (play, close) exist, and both are exported with `Button`.

9. **Motion tokens.** Durations and easings appear as literal values on individual rules (`.15s`, `.2s`, `.25s`, `.3s`, `.6s`, `.8s`, `1.2s`, `1.4s`, `ease`, `cubic-bezier(.2,.6,.2,1)`), never as named tokens. They are catalogued in `foundations/shadows.ts → motion` at their literal values; no canonical motion scale could be extracted.

10. **Dark scheme.** There is no dark-mode toggle or `prefers-color-scheme` rule. Ink surfaces are compositional choices per section, not a theme.
