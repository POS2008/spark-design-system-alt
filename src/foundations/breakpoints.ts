/**
 * SPARK Design System alt — foundations/breakpoints.ts
 *
 * ⚠ UNKNOWN — the source system defines NO breakpoints.
 *
 * There is not a single @media rule in assets/tokens.css, in any of the six
 * system/*.html pages, or in the Website — Group (Collection) pages. What the
 * source does declare about viewport behaviour is recorded below verbatim.
 * Nothing has been invented to fill the gap.
 *
 * Consequence for consumers: the exported website components reproduce the
 * source's fixed desktop layout. If responsive behaviour is required, it is a
 * NEW design decision and must be agreed with the design owner — see SKILL.md
 * rule 13 (flag, don't invent).
 */

export const breakpoints = {
  status: 'UNKNOWN',
  note: 'No @media rule exists anywhere in the source system.',
} as const;

/** Viewport facts that DO exist in the source. */
export const viewportFacts = {
  /** index.html and frankfurt.html: <meta name="viewport" content="width=1440"> */
  metaViewport: 'width=1440',
  /** index.html and frankfurt.html: body { min-width: 1280px } */
  bodyMinWidth: '1280px',
  /** --grid-max */
  maxContentWidth: '1440px',
  /** The only fluid sizing in the system: the clamp() type scale in tokens.css. */
  fluidMechanism: 'clamp() type scale only (--fs-display, --fs-h1, --fs-h2, --fs-h3)',
  /** system-index.html hero h1 also uses a clamp: clamp(4rem, 9vw, 8.5rem) */
  systemIndexHeroClamp: 'clamp(4rem, 9vw, 8.5rem)',
  /** index.html .hero height */
  heroHeightCollection: 'calc(100vh - 110px) · min 720px · max 900px',
  /** frankfurt.html .hero height */
  heroHeightHouse: '760px',
} as const;

export default breakpoints;
