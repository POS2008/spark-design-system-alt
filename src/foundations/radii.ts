/**
 * SPARK Design System alt — foundations/radii.ts
 * SOURCE: assets/tokens.css SHAPE block + system/spacing.html
 * "Minimal radii — the architecture is rectilinear."
 */

export const radii = {
  /** 0px — "Architectural". Used literally in system/spacing.html; no token in the stylesheet. */
  none: '0px',
  /** --radius-sm · 2px — "Structural". */
  sm: '2px',
  /** --radius-md · 4px — "Default". */
  md: '4px',
  /** --radius-lg · 8px — "Soft — tags only". */
  lg: '8px',
  /** --radius-pill · 999px. */
  pill: '999px',
} as const;

/** Roles as labelled in system/spacing.html. */
export const radiusRoles = {
  none: 'Architectural',
  sm: 'Structural',
  md: 'Default',
  lg: 'Soft — tags only',
  pill: 'Pill',
} as const;

/**
 * Where each radius actually appears in the source.
 * Note: buttons and tags in system/buttons.html are written as a literal
 * `999px`, matching --radius-pill. Two website-only radii appear that are not
 * in the token set: 2px (matches --radius-sm), 4px (matches --radius-md) and
 * 6px on frankfurt.html .pillar — see README, unlisted-radius note.
 */
export const radiusUsage = {
  none: ['spacing.html radius specimen'],
  sm: ['index.html .dest', 'index.html .space-card', 'index.html .exp-card', 'index.html .post .img', 'index.html .philosophy .img', 'space-card.html .media .floor'],
  md: ['system cards & tiles', 'space-card.html .space', 'frankfurt.html .stage-img', 'frankfurt.html .story .img'],
  lg: ['tags only (per source label)'],
  pill: ['buttons', 'tags', 'icon buttons', 'space-card spec badge', 'soon-tag', 'philosophy stamp', 'stage .go circle'],
  /** frankfurt.html .pillar — the one radius with no matching token. */
  unlisted6px: ['frankfurt.html .pillar'],
} as const;

export default radii;
