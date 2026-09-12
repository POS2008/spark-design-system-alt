/**
 * SPARK Design System alt — foundations/spacing.ts
 * SOURCE: assets/tokens.css SPACING block + system/spacing.html
 * "8px base." Scale documented as 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128.
 */

export const scale = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '24px',
  6: '32px',
  7: '48px',
  8: '64px',
  9: '96px',
  10: '128px',
} as const;

/** Baseline — verbatim from system/spacing.html ("Baseline — 8 px"). */
export const baseline = 8;

/**
 * Section padding values used in the Website — Group (Collection) pages.
 * Literal px in the page CSS; recorded for parity, not generalised into a rule.
 */
export const sectionPadding = {
  collection: {
    manifesto: '160px 0 140px',
    collectionSection: '0 0 160px',
    spaces: '160px 0',
    experiences: '160px 0',
    philosophy: '160px 0',
    journal: '160px 0',
    footer: '96px 0 40px',
    navInner: '26px 64px',
    topbar: '11px 0',
    appointmentContent: '120px 80px',
    appointmentMinHeight: '680px',
  },
  house: {
    intro: '120px 0 100px',
    pillars: '0 0 120px',
    stages: '120px 0',
    stories: '120px 0',
    cta: '120px 0',
    footer: '64px 0 36px',
    navInner: '18px 56px',
    proof: '28px 0',
  },
  system: {
    /** Every system/*.html page uses a 48px body padding. */
    page: '48px',
  },
} as const;

/** Gap values observed in the source grids. */
export const gaps = {
  destGrid: '20px',
  spaceGrid: '24px',
  expGrid: '20px',
  journalGrid: '24px',
  storiesGrid: '24px',
  pillars: '24px',
  footCols: '48px',
  footColsHouse: '56px',
  philosophyGrid: '96px',
  spacesHead: '80px',
  introGrid: '80px',
  buttonRow: '12px',
  buttonIconGap: '10px',
  tagRow: '10px',
} as const;

export const spacing = { scale, baseline, sectionPadding, gaps } as const;
export default spacing;
