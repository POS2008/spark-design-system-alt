/**
 * SPARK Design System alt — foundations/colors.ts
 * SOURCE: assets/tokens.css (implementation) + system/colors.html (documentation)
 *
 * Every hex below is copied from the source. Where the stylesheet and the
 * documentation page disagree, BOTH are recorded and the stylesheet value is
 * the exported one — it is what actually renders everywhere in the system.
 */

/** Core brand — the values declared in assets/tokens.css. */
export const core = {
  /** #0B0B0C — cinematic ink. */
  ink: '#0B0B0C',
  /** #F6F3EE — warm editorial paper. */
  paper: '#F6F3EE',
  /** #E8E4DC — soft architectural grey. */
  concrete: '#E8E4DC',
  /** #C6A87A — champagne bronze (material, not digital). */
  oak: '#C6A87A',
  /** #A88B5C — dark bronze, hover state. */
  oakDeep: '#A88B5C',
  /** #E8D8B8 — light bronze tint, surfaces. */
  oakSoft: '#E8D8B8',
} as const;

/**
 * Documented core values from system/colors.html.
 * These are the labels printed on the swatches; the swatch backgrounds
 * themselves render the `core` values above via var(). Kept for the record.
 */
export const coreDocumented = {
  ink: '#0A0A0A',
  paper: '#FAFAF7',
  concrete: '#E8E6E0',
  oak: '#C9A576',
} as const;

/** Warm-biased neutral scale — verbatim, and identical in both source files. */
export const neutrals = {
  900: '#0A0A0A',
  800: '#171717',
  700: '#2A2926',
  600: '#44423D',
  500: '#6E6B63',
  400: '#9A968B',
  300: '#C3BFB3',
  200: '#DFDCD1',
  100: '#EFEDE4',
  '050': '#F7F5EE',
} as const;

/** Semantic map — verbatim from the tokens.css SEMANTIC block. */
export const semantic = {
  surface: core.paper,
  surfaceAlt: neutrals['050'],
  surfaceInvert: core.ink,
  text: neutrals[900],
  textMuted: neutrals[500],
  rule: neutrals[200],
  accent: core.oak,
} as const;

/** Alias layer used by the components in this export. No new values. */
export const tokens = {
  fgPrimary: semantic.text,
  fgSecondary: semantic.textMuted,
  fgTertiary: neutrals[400],
  fgInvert: core.paper,
  fgAccent: core.oak,
  /** Oak reads too light on paper; the source uses oak-deep for accent type on light. */
  fgAccentOnPaper: core.oakDeep,

  bgPrimary: semantic.surface,
  bgSecondary: semantic.surfaceAlt,
  bgInvert: semantic.surfaceInvert,
  bgConcrete: core.concrete,
  bgAccent: core.oak,

  border: semantic.rule,
  borderStrong: core.ink,
  /** Button ghost border. */
  borderQuiet: neutrals[300],
  /** Hairline on ink surfaces (space-card facts divider). */
  borderInvert: neutrals[700],
} as const;

/**
 * Contrast pairings, verbatim from system/colors.html.
 * Ink-on-paper is documented as AAA · 18.6 : 1.
 * Oak is documented as a hero accent: "Use < 10% of canvas".
 */
export const pairings = [
  { label: 'Editorial · default', bg: core.paper, fg: core.ink, note: 'AAA · 18.6 : 1' },
  { label: 'Broadcast · after dark', bg: core.ink, fg: core.paper, note: 'Accent · oak' },
  { label: 'Warm · hero accent', bg: core.oak, fg: core.ink, note: 'Use < 10% of canvas' },
] as const;

/**
 * Translucent values that appear as literal rgba() in the source pages.
 * Named, not invented — each one is lifted from a specific rule.
 */
export const veils = {
  navCollection: 'rgba(246, 243, 238, .94)',
  navHouse: 'rgba(246, 243, 238, .88)',
  navBorder: 'rgba(11, 11, 12, .06)',
  paper82: 'rgba(246,243,238,.82)',
  paper78: 'rgba(246,243,238,.78)',
  paper72: 'rgba(246,243,238,.72)',
  paper60: 'rgba(246,243,238,.6)',
  paper55: 'rgba(246,243,238,.55)',
  paper45: 'rgba(246,243,238,.45)',
  paper35: 'rgba(246,243,238,.35)',
  paper28: 'rgba(246,243,238,.28)',
  paper18: 'rgba(246,243,238,.18)',
  paper14: 'rgba(246,243,238,.14)',
  paper10: 'rgba(246,243,238,.1)',
  paper08: 'rgba(246,243,238,.08)',
  paper05: 'rgba(246,243,238,.05)',
  oak50: 'rgba(198, 168, 122, .5)',
  oak35: 'rgba(198, 168, 122, .35)',
  oak22: 'rgba(198, 168, 122, .22)',
  badgeInk: 'rgba(10,10,10,.7)',
  badgePaper: 'rgba(250,250,247,.85)',
} as const;

/** Image protection scrims — verbatim gradients. */
export const scrims = {
  heroCollection:
    'linear-gradient(180deg, rgba(11,11,12,.45) 0%, rgba(11,11,12,.05) 35%, rgba(11,11,12,.25) 70%, rgba(11,11,12,.88) 100%)',
  heroHouse:
    'linear-gradient(180deg, rgba(11,11,12,.35) 0%, rgba(11,11,12,.1) 30%, rgba(11,11,12,.25) 65%, rgba(11,11,12,.9) 100%)',
  destination:
    'linear-gradient(180deg, rgba(11,11,12,.15) 0%, rgba(11,11,12,.05) 40%, rgba(11,11,12,.82) 100%)',
  pillar:
    'linear-gradient(180deg, rgba(11,11,12,.25) 0%, rgba(11,11,12,.1) 40%, rgba(11,11,12,.85) 100%)',
  experience: 'linear-gradient(180deg, rgba(11,11,12,0) 30%, rgba(11,11,12,.8) 100%)',
  ctaHouse:
    'radial-gradient(70% 50% at 50% 100%, rgba(198, 168, 122, .22) 0%, transparent 60%)',
} as const;

/**
 * Brand rule, verbatim from system/colors.html:
 * "No rainbow in the CI." Ink, Paper and Oak only. No red, no orange.
 */
export const paletteRules = {
  allowed: ['ink', 'paper', 'concrete', 'oak', 'oak-deep', 'oak-soft', 'neutrals 050–900'],
  forbidden: ['red', 'orange', 'rainbow palettes', 'multicolour gradients in the CI'],
  oakBudget: 'Use < 10% of canvas',
} as const;

export const colors = {
  core,
  coreDocumented,
  neutrals,
  semantic,
  tokens,
  pairings,
  veils,
  scrims,
  paletteRules,
} as const;
export default colors;
