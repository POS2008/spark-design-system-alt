---
name: spark-design-system-alt
description: Use when creating, editing or reviewing SPARK customer-facing digital interfaces. Not for non-SPARK products or unrelated engineering work.
---

# SPARK Design System alt

Apply the connected **SPARK Design System alt** as the sole visual source of truth. Never merge or inherit from SPARK Design System GT or another SPARK system.

## Start with the library

1. Confirm the SPARK design system is attached to the project.
2. Read its namespaced `.lovable` guidance and component schema.
3. Reuse the attached components and tokens before writing local UI.
4. Import from the attached `src/design-system/<slug>/` path. Do not copy or customise managed source locally.

Available primitives are Button, IconButton, Tag, SpaceCard, SpaceCardGrid, SparkLogo and LocationLockup. Available page patterns are CollectionHomepage, HouseFrankfurt and WebsiteCollection.

## Brand rules

- Use only Ink, Paper, Concrete and Oak plus the defined warm neutral scale.
- Never introduce red, orange, rainbow palettes or multicolour SPARK gradients.
- Oak is an accent: below 10% of the canvas and one dominant Oak emphasis per surface.
- Use GT Super Display Bold for display headlines, stage names and numerals.
- Use Söhne Buch for reading copy and Söhne Kräftig for UI labels/emphasis.
- Use mono only for data and specifications.
- Use the defined spacing scale only: 4, 8, 12, 16, 24, 32, 48, 64, 96 and 128px.
- Use radii 0, 2, 4, 8 or 999px only. Pills belong to buttons and tags; surfaces remain architectural.
- Use only the existing shadow levels. Default surfaces are flat.
- Prefer hierarchy through typography, whitespace, photography and scale before boxes.
- Use warm cinematic, full-bleed photography and the supplied scrims for overlaid text.

## Composition and copy

- Editorial, specific, confident and unhurried; avoid generic SaaS language.
- One invitation per surface.
- Use stage names with floor/location context.
- Present specifications as trios.
- Avoid gradient-mesh heroes, glassmorphism, decorative badges, icon feature grids, emoji and card-heavy layouts.
- Do not use “unleash”, “unlock” or “elevate”.

## Missing patterns

The source defines no responsive breakpoints, mobile/tablet layouts, form controls, focus styles, disabled states or active states. Never make a silent design-system addition.

If a task requires one of these:

1. Compose the minimum solution from existing primitives.
2. Label it as a proposed extension, not a canonical SPARK rule.
3. Identify every new token or state.
4. Request design-owner approval before adding it to the design system.

Until a separate responsive extension is approved, preserve the source website behavior: fixed desktop layout with a 1280px minimum width.

## Final check

- No raw or new colours.
- No off-scale spacing, radius, shadow or type size.
- No locally rebuilt version of an attached component.
- Oak remains restrained.
- Fonts and image assets resolve.
- Any new pattern is explicitly disclosed.

In the response, briefly name the reused components and flag proposed extensions or unresolved source gaps.

