---
name: spark-design-system-alt
description: >
  Use when creating, editing or reviewing SPARK customer-facing digital
  interfaces. Not for non-SPARK products or unrelated engineering work.
---

# SPARK Design System alt

SPARK is a premium event and broadcast-space company with plug-and-play LED-walled stages, rooftop hospitality, breakout rooms and mixed-reality broadcast. **Every business needs a SPARK.**

---

## 1. This repository is the source of truth

Everything visual in a SPARK interface comes from this repository. It was exported directly from the design system of record, value for value.

- Tokens: `src/styles/tokens.css` (CSS variables) and `src/foundations/*.ts` (typed).
- Components: `src/components/spark/` — `Button`, `Tag`, `SpaceCard`, `SparkLogo`. That is the complete component set.
- Website patterns: `src/website/WebsiteCollection.tsx` — the two real pages of the collection.
- Reference page: `src/pages/DesignSystem.tsx` — renders every token and component.
- Lovable guidance: `.lovable/system.md` — installation, philosophy and source gaps preserved across releases.

Before writing any UI, read `src/foundations/` and the component you are about to reach for. Do not consult other SPARK systems, screenshots or memory. If something is not here, see rule 13.

---

## 2. Always reuse existing tokens

Use a token for every colour, size, space, radius and shadow.

```tsx
// Tailwind classes, generated from the tokens
<div className="bg-ink text-paper border border-rule rounded-md shadow-sm p-s-6" />

// CSS variables, in stylesheets
background: var(--spark-paper);
color: var(--text-muted);

// Typed values, for logic
import { colors, spacing } from '@/lib/design-tokens';
colors.core.oak; // '#C6A87A'
```

If you type a `#` followed by a hex digit anywhere outside `tokens.css`, you are off-system.

---

## 3. Always reuse existing components

| Need | Use |
|---|---|
| Any action | `Button` — `primary` · `outline` · `ghost` · `link` · `invert` |
| Circular action | `IconButton` — 44 × 44, `ghost` for the quiet version |
| A label, category, status or spec chip | `Tag` — `default` · `filled` · `paper`, `dot` modifier |
| A stage, room, terrace or add-on | `SpaceCard` — `ink` default, `light` variant |
| The mark | `SparkLogo` / `LocationLockup` |
| A marketing page | the sections in `WebsiteCollection.tsx` |

Compose from these before building anything new.

---

## 4. Never invent additional SPARK colors

The palette is complete: Ink, Paper, Concrete, Oak (+ Oak deep, Oak soft) and the ten-step warm neutral scale. There is no success green, no warning amber, no info blue, no chart palette. If a state needs signalling, use contrast, weight, a hairline or Oak.

## 5. Never introduce red or orange

Not for errors, not for badges, not for emphasis, not at 10% opacity. The CI has no red and no orange.

## 6. Never introduce a rainbow palette

From the source: *"The brand holds its voice in Ink, Paper and Oak. Colour on the LED walls belongs to the client's content, not to SPARK's identity. Never compose the CI out of multicolour gradients."*

Oak has a budget: **use it on less than 10% of the canvas.** One accent per surface.

---

## 7. Preserve GT Super Display + Söhne

- **GT Super Display Bold (700)** — headlines, stage names, numerals. Nothing else. Set tight: −2% to −3% tracking, 95–105% leading.
- **Söhne Buch (400)** — reading: body, lead paragraphs.
- **Söhne Kräftig (500)** — UI weight: buttons, labels, eyebrows, H3.
- **Mono** — data and specs only, via `--font-mono`.

Do not substitute either face. Do not map them to Inter, Arial, Georgia or a Google font. The only acceptable fallbacks are the ones already declared in `--font-display` and `--font-body`. Never set long copy in the serif; never mix in a second serif.

Two type scales exist in the source and both are exported. Use the fluid `.t-*` classes for new product UI, and the fixed `.spec-*` classes when matching the documented specimen sizes. Do not average them.

---

## 8. Preserve the grid, spacing and shape language

- **8px base.** Spacing steps: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Nothing between them.
- **12-column editorial grid**, 1440px max, 24px gutter. Website pages use their own page gutters (64px on the collection page, 56px on the house page) — keep whichever page you are working in.
- **Radii are minimal**: 0 architectural · 2px structural · 4px default · 8px soft (tags) · 999px pills. Buttons and tags are pills; surfaces are 4–8px. Nothing is more rounded than that.
- **Elevation is flat by default.** `shadow-sm` on cards, `shadow-md` on popovers, `shadow-lg` on modals. Lift is `translateY(-1px)` on buttons, `-3px`/`-4px` on cards.
- **Generous whitespace.** Section rhythm in the source runs 120–160px vertical. Do not compress it to fit more in.

---

## 9. Use gold only where the design system allows

Oak/gold appears in exactly these roles in the source:

- an eyebrow or kicker label,
- the spec pill on a space card,
- a single italic word inside a display headline,
- a hairline rule or a 6px dot,
- the `bronze` CTA on the house page,
- a numeral in a spec row,
- nav hover underline.

Never as a large background fill, never as body text on paper (use `--spark-oak-deep` for accent type on light), never two gold elements competing in one view.

---

## 10. Do not create a generic SaaS aesthetic

The voice is **editorial, confident, unhurried**. Avoid: gradient mesh heroes, cards with a coloured left border, three-up feature grids with icons, blurred glass panels, pill badges scattered as decoration, stat soup, illustration mascots, emoji.

Instead: full-bleed photography with a protection gradient, big serif headlines, hairline rules, mono spec lines, one invitation per surface.

**Copy**
- Specs are trios: LED sqm · dimensions · capacity.
- Stages have names *and* floor numbers: "Horizon Stage · Floor 4".
- One invitation per surface — "Reserve", "Book a walkthrough", "See all stages". Pick one.
- Speak from the venue's perspective.
- Never "unleash", "unlock", "elevate".

**Imagery**
- Lead with a photograph of a stage, or an Oak surface — never a bare white page.
- Photography is real, warm, cinematic: dark interiors, one light source, the Frankfurt skyline as a recurring motif.
- Text over an image always gets a protection gradient (`--spark-scrim-*`), never a capsule behind the words.
- Aspect ratios in use: 4/3 space-card media · 3/4 destination and pillar · 4/5 editorial portrait · 16/10 stage thumbnail.
- Never redraw the logo. Ink on light, paper on dark (`filter: invert(1)`). Clear space equals the cap-height of the S. Minimum 14px digital, 10mm print.
- Supporting icons are 16px line icons, 1.5px stroke, square or 90° corners. Never mix with filled icons. No emoji.

---

## 11. Do not silently introduce new radii, shadows, type sizes or spacing values

Every one of those exists as a finite, enumerated set. Adding a 6px radius, a 20px space, a 19px type size or a new shadow changes the design system. Snap to the nearest existing token, or flag it (rule 13).

---

## 12. If a pattern does not exist, compose it from existing primitives first

The source system has **no** inputs, selects, checkboxes, tabs, modals, toasts, tables, pagination or navigation component. If you need one:

1. Build it from Ink/Paper/Oak, the 8px scale, the existing radii and `shadow-sm`/`md`.
2. Borrow the nearest existing anatomy — a tag for a chip, a space card for a tile, `Button variant="ghost"` for a quiet control.
3. Match the type roles: Kräftig 500 for the label, mono for the value, Buch 400 for help text.
4. Say in your response that the pattern is new and which primitives it was composed from.

---

## 13. If a new design token is genuinely required, flag it — never create one silently

Say so explicitly:

> "This needs a token that does not exist in SPARK Design System alt: a focus ring colour. The source defines no focus state. I have used `--spark-oak` at the 2px pill radius as a placeholder — please confirm or replace."

Known gaps, already documented in `src/lib/design-tokens.ts` under `unknowns`:

- **Breakpoints** — none exist. Both website pages set `min-width: 1280px` and no `@media` rule exists anywhere.
- **Focus states** — no `:focus` or `:focus-visible` rule exists. Anything you add is new. Flag it.
- **Disabled states** — none exist.
- **Active/pressed states** — none exist (hover and transform only).
- **Mono font file** — JetBrains Mono is in the stack but no file ships.
- **Form controls** — none exist.

Accessibility note: because no focus styling exists in the source, keyboard focus is currently the browser default. If you are shipping production UI, raise this with the design owner rather than inventing a ring.

---

## 14. Quick checklist before you finish

- [ ] Every colour is a token; no red, no orange, no new hue.
- [ ] Oak appears once, on under 10% of the canvas.
- [ ] GT Super only on headlines, stage names and numerals; Söhne everywhere else.
- [ ] Every space is on the 8px scale.
- [ ] Radii are 0/2/4/8/999 only.
- [ ] Shadow is `sm`, `md`, `lg` or none.
- [ ] Reused `Button`, `Tag`, `SpaceCard`, `SparkLogo` rather than rebuilding them.
- [ ] One invitation on the surface.
- [ ] Anything new is named and flagged in your response.

---

## 15. Licensing

GT Super Display (Grilli Type) and Söhne (Klim Type Foundry) are commercial licences. Their binaries are intentionally excluded from this public repository. Install the licensed files privately according to `FONT_SETUP.md` and do not silently swap in a free substitute, which would break rule 7.
