/**
 * SPARK Design System alt — foundations/typography.ts
 * SOURCE: assets/tokens.css (fluid scale + font stacks)
 *         system/type.html (specimen scale, weights, tracking guidance)
 *
 * Two scales exist in the source and they do not agree. Both are exported.
 * Nothing is averaged or reconciled.
 */

/** Font stacks — verbatim from tokens.css. Do not substitute. */
export const families = {
  display: "'GT Super Display', 'Canela', 'Tiempos Headline', Georgia, serif",
  body: "'Söhne', 'Inter', 'Helvetica Neue', Arial, sans-serif",
  mono: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace",
} as const;

/**
 * Shipped font files. GT Super Display ships Bold (700) only; Söhne ships
 * Buch (400) and Kräftig (500). No mono file ships — the mono stack resolves
 * to a system face.
 */
export const files = {
  'GT Super Display Bold': ['/fonts/GT-Super-Display-Bold.woff2', '/fonts/GT-Super-Display-Bold.woff', '/fonts/GT-Super-Display-Bold.ttf'],
  'Söhne Buch': ['/fonts/S_hne-Buch.otf'],
  'Söhne Kräftig': ['/fonts/S_hne-Kr_ftig.otf'],
  'JetBrains Mono': [],
} as const;

/** The only weights the system declares. */
export const weights = {
  /** Söhne Buch — reading. */
  buch: 400,
  /** Söhne Kräftig — UI, labels, buttons. */
  kraftig: 500,
  /** GT Super Display Bold — the only display weight shipped. */
  display: 700,
} as const;

/** Fluid scale — verbatim clamp() definitions from tokens.css. */
export const fluidSizes = {
  display: 'clamp(3.5rem, 7vw, 7rem)',
  h1: 'clamp(2.5rem, 4.5vw, 4rem)',
  h2: 'clamp(1.75rem, 2.8vw, 2.5rem)',
  h3: 'clamp(1.25rem, 1.6vw, 1.5rem)',
  lead: '1.25rem',
  body: '1rem',
  small: '0.8125rem',
  micro: '0.6875rem',
} as const;

/** Line heights — verbatim from tokens.css. */
export const lineHeights = {
  tight: 0.95,
  snug: 1.1,
  base: 1.45,
} as const;

/** Tracking — verbatim from tokens.css. */
export const tracking = {
  wide: '0.22em',
  label: '0.16em',
} as const;

/**
 * Specimen scale — the fixed-px scale set and documented in system/type.html.
 * Format: size / line-height / tracking, exactly as annotated in the source.
 */
export const specimenScale = {
  display: { font: 'GT Super Display Bold', size: 120, lineHeight: 0.95, tracking: '-0.03em' },
  h1: { font: 'GT Super Display Bold', size: 72, lineHeight: 1, tracking: '-0.025em' },
  h2: { font: 'GT Super Display Bold', size: 44, lineHeight: 1.1, tracking: '-0.015em' },
  h3: { font: 'Söhne Kräftig 500', size: 22, lineHeight: 1.25, tracking: '-0.005em' },
  lead: { font: 'Söhne Buch 400', size: 20, lineHeight: 1.4, tracking: '0', note: 'muted' },
  body: { font: 'Söhne Buch 400', size: 16, lineHeight: 1.55, tracking: '0' },
  label: { font: 'Söhne Kräftig 500', size: 12, lineHeight: 1, tracking: '0.16em', note: 'uppercase' },
  eyebrow: { font: 'Söhne Kräftig 500', size: 11, lineHeight: 1, tracking: '0.22em', note: 'muted' },
  mono: { font: 'JetBrains Mono 400', size: 13, lineHeight: 1.45, tracking: '0.02em', note: 'data & specs' },
} as const;

/**
 * Display-face setting guidance, verbatim from system/type.html:
 * "Set tight: −2% to −3% tracking · 95–105% leading"
 * and the roles line: "Reserved for headlines, stage names, numerals."
 */
export const displayGuidance = {
  trackingRange: '-2% to -3%',
  leadingRange: '95%–105%',
  reservedFor: ['headlines', 'stage names', 'numerals'],
} as const;

/** Body-face guidance, verbatim: "Body 16/155 · Lead 20/140 · UI 15/1". */
export const bodyGuidance = {
  body: '16 / 155%',
  lead: '20 / 140%',
  ui: '15 / 1',
  buch: 'Buch (400) for reading',
  kraftig: 'Kräftig (500) for UI and labels',
} as const;

/**
 * Display sizes used across the Website — Group (Collection) pages.
 * These are literal px values in the page CSS, recorded for parity.
 */
export const websiteDisplaySizes = {
  collection: {
    heroH1: { size: 132, lineHeight: 0.9, tracking: '-0.032em' },
    manifestoH2: { size: 84, lineHeight: 0.98, tracking: '-0.025em' },
    collectionHeadH2: { size: 68, lineHeight: 0.98, tracking: '-0.025em' },
    destH3: { size: 56, lineHeight: 0.98, tracking: '-0.025em' },
    destWideH3: { size: 76, lineHeight: 0.98, tracking: '-0.025em' },
    spacesHeadH2: { size: 68, lineHeight: 0.98, tracking: '-0.025em' },
    spaceCardH3: { size: 32, lineHeight: 1, tracking: '-0.02em' },
    spaceCardSpecValue: { size: 22, lineHeight: 1, tracking: '-0.01em' },
    expHeadH2: { size: 64, lineHeight: 0.98, tracking: '-0.025em' },
    expCardH3: { size: 30, lineHeight: 1, tracking: '-0.02em' },
    philosophyH2: { size: 72, lineHeight: 0.98, tracking: '-0.025em' },
    journalHeadH2: { size: 64, lineHeight: 0.98, tracking: '-0.025em' },
    postH4: { size: 22, lineHeight: 1.1, tracking: '-0.015em' },
    appointmentH2: { size: 76, lineHeight: 0.98, tracking: '-0.028em' },
    appointmentPhone: { size: 28, lineHeight: 1, tracking: '-0.01em' },
    signature: { size: 26, tracking: '-0.01em', note: 'italic' },
    /** .display role default, applied to any .display element. */
    roleDefault: { lineHeight: 0.98, tracking: '-0.022em' },
  },
  house: {
    heroH1: { size: 128, lineHeight: 0.9, tracking: '-0.035em' },
    h1: 104,
    h2: 72,
    h3: 44,
    h4: 28,
    /** .h-display role default. */
    roleDefault: { lineHeight: 0.96, tracking: '-0.028em' },
    heroMetaValue: { size: 44, lineHeight: 1, tracking: '-0.02em' },
    pillarH3: { size: 72, lineHeight: 0.95, tracking: '-0.03em' },
    stageH3: { size: 52, lineHeight: 0.95, tracking: '-0.025em' },
    stageSpecValue: { size: 22, tracking: '-0.01em' },
    storyH3: { size: 30, lineHeight: 1, tracking: '-0.02em' },
    storyWideH3: { size: 40, lineHeight: 1, tracking: '-0.02em' },
    ctaH2: { size: 88, lineHeight: 0.95, tracking: '-0.03em' },
    proofLogo: { size: 18, tracking: '0.005em' },
  },
} as const;

export const typography = {
  families,
  files,
  weights,
  fluidSizes,
  lineHeights,
  tracking,
  specimenScale,
  displayGuidance,
  bodyGuidance,
  websiteDisplaySizes,
} as const;
export default typography;
