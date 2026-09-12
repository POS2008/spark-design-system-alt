/**
 * SPARK Design System alt — foundations/grid.ts
 * SOURCE: assets/tokens.css LAYOUT block + system/spacing.html
 * "12-column editorial grid with generous gutters." · "1440 max · 24 gutter"
 */

export const grid = {
  /** --grid-max */
  maxWidth: '1440px',
  /** --grid-gutter */
  gutter: '24px',
  /** system/spacing.html — "12-column grid · 1440 max · 24 gutter" */
  columns: 12,
} as const;

/**
 * Container padding in the source pages. The two website pages use different
 * page gutters; both are recorded rather than unified.
 */
export const containers = {
  /** index.html .wrap */
  collection: { maxWidth: '1440px', paddingInline: '64px' },
  /** frankfurt.html .wrap */
  house: { maxWidth: '1440px', paddingInline: '56px' },
  /** index.html .hero-inner */
  collectionHero: { maxWidth: '1240px', paddingInline: '64px', paddingBottom: '96px' },
  /** frankfurt.html .cta-inner */
  houseCta: { maxWidth: '900px', paddingInline: '56px' },
  /** system-index.html .wrap */
  systemIndex: { maxWidth: '1360px', padding: '80px 48px 120px' },
  /** system/logo.html .grid */
  systemLogo: { maxWidth: '1360px' },
} as const;

/** Grid templates used verbatim in the source. */
export const templates = {
  /** system/space-card.html and index.html space grid */
  spaceGrid: 'repeat(3, 1fr)',
  /** index.html destination grid — asymmetric, wide card first */
  destGrid: '1.5fr 1fr 1fr',
  /** index.html experiences */
  expGrid: 'repeat(4, 1fr)',
  /** index.html journal */
  journalGrid: 'repeat(4, 1fr)',
  /** index.html footer */
  footerGrid: 'repeat(5, 1fr)',
  /** index.html nav — centred wordmark */
  navCollection: '1fr auto 1fr',
  /** index.html spaces head */
  spacesHead: '1fr 1.3fr',
  /** index.html philosophy / appointment */
  split: '1fr 1fr',
  /** frankfurt.html intro */
  introHouse: '1fr 1.6fr',
  /** frankfurt.html stages head */
  stagesHead: '1fr 1.2fr',
  /** frankfurt.html stage row */
  stageRow: '120px 1.3fr 1.5fr',
  /** frankfurt.html stories */
  storiesGrid: '1.4fr 1fr 1fr',
  /** frankfurt.html hero */
  heroHouse: '1.5fr 1fr',
  /** frankfurt.html footer */
  footerHouse: '1.5fr 1fr 1fr 1fr',
  /** space-card facts + index.html space-card specs */
  specTrio: 'repeat(3, 1fr)',
} as const;

/** Image aspect ratios used in the source. */
export const aspectRatios = {
  /** space-card.html .media and index.html .space-card .media */
  spaceCardMedia: '4 / 3',
  /** index.html .dest and frankfurt.html .pillar */
  destination: '3 / 4',
  pillar: '3 / 4',
  /** index.html .exp-card, .post .img, .philosophy .img; frankfurt .story .img */
  portrait: '4 / 5',
  /** frankfurt.html .stage-img */
  stageThumb: '16 / 10',
} as const;

export default grid;
