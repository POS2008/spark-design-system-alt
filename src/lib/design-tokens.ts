/**
 * SPARK Design System alt — lib/design-tokens.ts
 * Single import point for every foundation value.
 *
 * SOURCE OF TRUTH: the "SPARK Design System alt" project
 * (assets/tokens.css, system/*.html, index.html, frankfurt.html).
 * Nothing in this codebase may introduce a value that is not traceable there.
 */

import colors from '../foundations/colors';
import typography from '../foundations/typography';
import spacing from '../foundations/spacing';
import grid, { containers, templates, aspectRatios } from '../foundations/grid';
import radii, { radiusRoles, radiusUsage } from '../foundations/radii';
import shadows, { elevationRoles, websiteShadows, motion, blur } from '../foundations/shadows';
import breakpoints, { viewportFacts } from '../foundations/breakpoints';

export const tokens = {
  colors,
  typography,
  spacing,
  grid,
  containers,
  templates,
  aspectRatios,
  radii,
  radiusRoles,
  radiusUsage,
  shadows,
  elevationRoles,
  websiteShadows,
  motion,
  blur,
  breakpoints,
  viewportFacts,
} as const;

/** Reference a CSS custom property from tokens.css. */
export const cssVar = (name: string) => `var(--${name})`;

/**
 * The brand rules stated in the source, encoded so they can be asserted.
 * Sources: README.md + SKILL.md + system/colors.html of the design system.
 */
export const brandRules = {
  palette: 'Ink, Paper and Oak only. Monochrome CI.',
  noRed: true,
  noOrange: true,
  noRainbow: true,
  oakBudget: 'Use < 10% of canvas',
  shape: 'Rounded pill buttons (999px); surfaces use 4–8px corners.',
  elevation: 'Flat by default; subtle shadow only on lifted surfaces.',
  fonts: 'GT Super Display Bold (display), Söhne Buch 400 + Kräftig 500 (text/UI), JetBrains Mono (data).',
  logo: 'Never redraw. Contrast only — ink on light, paper on dark. Clear space = cap-height of the S.',
  invitationsPerSurface: 1,
  voice: ['Editorial', 'confident', 'unhurried'],
  forbiddenWords: ['unleash', 'unlock', 'elevate'],
  specFormat: 'Specs are trios: LED sqm · dimensions · capacity.',
  iconography: '16px line icons, 1.5px stroke, cut square or 90° corners. Never mix with filled icons.',
} as const;

/** Everything the source does not define. Never fill these in silently. */
export const unknowns = {
  breakpoints: 'No @media rule exists in the source system.',
  focusStates: 'No :focus or :focus-visible rule exists in the source system.',
  disabledStates: 'No :disabled or [disabled] rule exists in the source system.',
  activeStates: 'No :active rule exists in the source system.',
  monoFontFile: 'JetBrains Mono is declared in the stack but no font file ships.',
  mobileBehaviour: 'No mobile layout exists; both website pages set min-width: 1280px.',
  formComponents: 'No inputs, selects or form controls exist in the source system.',
} as const;

export { colors, typography, spacing, grid, radii, shadows, breakpoints, motion };
export default tokens;
export type SparkTokens = typeof tokens;
