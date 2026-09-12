# SPARK Design System alt

This is the official source of truth for SPARK customer-facing digital interfaces. It is the exact React/TypeScript/Tailwind export of **SPARK Design System alt** (Patrick, 23.05.2026). Do not merge it with SPARK Design System GT or another SPARK system.

## Installation

The source is local and React-based. Lovable should discover the public API from `src/index.ts` and the tokens from `src/styles/tokens.css`.

When this system is attached to a project:

1. Keep React 18 compatibility unless the consuming project has explicitly approved a React upgrade.
2. Import these styles once at the application root, in this order:
   - `styles/tokens.css`
   - `styles/typography.css`
   - `styles/globals.css`
3. Merge `src/tailwind-preset.ts` into the consuming Tailwind configuration and ensure the content scan includes the attached design-system source.
4. Do not replace GT Super Display or Söhne. Their licensed font files are intentionally excluded from the public repository. Install them privately at `/public/fonts/` using the filenames documented in `FONT_SETUP.md`.
5. Keep the relative image and logo imports. Images and the official SVG live under `src/assets/` so they remain available after Lovable copies the design system into a connected project.
6. If the consumer uses Tailwind 4, preserve the exact theme values while adapting only the configuration wiring. Do not reinterpret tokens during migration.

## Public component API

- `Button`: `primary`, `outline`, `ghost`, `link`, `invert`; sizes `sm`, `default`, `lg`; optional `arrow` and `onInk`.
- `IconButton`: default or `ghost`; use the existing `PlayGlyph` and `CloseGlyph` where applicable.
- `Tag`: `default`, `filled`, `paper`; optional `dot`.
- `SpaceCard`: `ink` or `light`; media, location/floor, optional specification pill, title, description and exactly three facts.
- `SpaceCardGrid`: the source 3-column/24px grid. It is intentionally desktop-only.
- `SparkLogo`: `ink` or `paper`; use the supplied SVG only.
- `LocationLockup`: official logo plus location line.
- `CollectionHomepage`, `HouseFrankfurt`, `WebsiteCollection`: exact page patterns from the source collection.

Prefer imports from the package barrel. In an attached project, use the Lovable-generated namespaced source path rather than recreating a component locally.

## Visual system

- Core palette: Ink `#0B0B0C`, Paper `#F6F3EE`, Concrete `#E8E4DC`, Oak `#C6A87A`, Oak Deep `#A88B5C`, Oak Soft `#E8D8B8`.
- Oak is an accent, not a large surface. Keep it below 10% of the canvas and allow one dominant Oak emphasis per surface.
- Never add red, orange, rainbow palettes or multicolour SPARK gradients.
- GT Super Display Bold is for display headlines, stage names and numerals. Söhne Buch is for reading copy. Söhne Kräftig is for UI labels and emphasis. Mono is for data/specifications only.
- Use the finite 8px-derived spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- Use only radii 0, 2, 4, 8 or 999px. Pills belong to buttons and tags; surfaces stay architectural.
- Use only the supplied small, medium or large shadows. Default surfaces remain flat.
- Use full-bleed, warm cinematic photography with a supplied protection scrim when text overlays an image.
- Keep the editorial hierarchy: typography, whitespace, photography and scale before boxes or decoration.

## Source conflicts that must remain visible

- The rendered CSS palette wins over conflicting specimen labels.
- The fluid `.t-*` type scale and fixed `.spec-*` specimen scale are both intentional; never average or merge them.
- The component buttons and the two website-specific button families are separate source implementations.
- The reusable `SpaceCard` and the collection-page space card are separate source implementations.
- The two website pages keep their different gutters, nav sizes and vertical rhythms.
- A 6px pillar radius and one page-specific hover shadow are documented source exceptions, not new general-purpose tokens.

## Missing source decisions

The original system defines no breakpoints, responsive layouts, form controls, focus styles, disabled states or active/pressed states. Do not silently make these official SPARK rules.

When production work requires one of them:

1. Compose the minimum solution from current Ink/Paper/Oak, typography, spacing, radius and shadow primitives.
2. Mark it explicitly as a proposed extension.
3. Ask for design-owner approval before adding it to the canonical token or component set.

The source website layouts intentionally use `min-width: 1280px`; preserve that behavior until a separate responsive extension is approved.

## Copy and composition

- Editorial, confident, specific and unhurried; never generic SaaS language.
- One invitation per surface.
- Stage names include the floor/location context.
- Specification groups are trios.
- Avoid decorative badges, gradient-mesh heroes, icon feature grids, glassmorphism, emoji and card-heavy layouts.
- Do not use “unleash”, “unlock” or “elevate”.

## Enforcement

Before completing a generation, verify:

- no raw colours outside the token source;
- no off-scale spacing, radius, shadow or type size;
- no locally rebuilt version of an exported component;
- Oak remains restrained;
- fonts and asset paths remain connected;
- any new pattern or unresolved source gap is disclosed.
