/**
 * SPARK Design System alt — foundations/shadows.ts
 * SOURCE: assets/tokens.css SHADOW/ELEV block + system/spacing.html
 * "Elevation: flat by default; subtle shadow only on lifted surfaces."
 */

export const shadows = {
  /** --shadow-sm · Elev 1 — "cards, inputs" */
  sm: '0 1px 2px rgba(10,10,10,.06), 0 1px 1px rgba(10,10,10,.04)',
  /** --shadow-md · Elev 2 — "popovers, menus" */
  md: '0 6px 18px rgba(10,10,10,.08), 0 2px 4px rgba(10,10,10,.04)',
  /** --shadow-lg · Elev 3 — "modal, lightbox" */
  lg: '0 24px 60px rgba(10,10,10,.18), 0 6px 12px rgba(10,10,10,.06)',
  none: 'none',
} as const;

/** Roles as labelled in system/spacing.html. */
export const elevationRoles = {
  sm: 'Elev 1 · cards, inputs',
  md: 'Elev 2 · popovers, menus',
  lg: 'Elev 3 · modal, lightbox',
} as const;

/**
 * One shadow appears in the website source that is not a token:
 * index.html `.space-card:hover { box-shadow: 0 24px 60px rgba(10,10,10,.08) }`.
 * It is the --shadow-lg first layer at a lower alpha. Recorded as-is.
 */
export const websiteShadows = {
  spaceCardHover: '0 24px 60px rgba(10,10,10,.08)',
} as const;

/**
 * Motion — the complete set of transitions present in the source.
 * There is no named easing token in the system; `ease` and one
 * cubic-bezier for image scaling are all that exist.
 */
export const motion = {
  /** buttons.html .btn transform */
  fast: '.15s',
  /** buttons.html .btn colour transitions, frankfurt .btn */
  base: '.2s',
  /** index.html .btn transitions, space-card hover */
  slow: '.25s',
  /** space-card.html .space transform, index.html .space-card */
  card: '.3s',
  /** frankfurt.html .pillar img */
  image: '.8s',
  /** index.html .space-card img */
  imageSlow: '1.2s',
  /** index.html .dest img */
  imageSlowest: '1.4s',
  ease: 'ease',
  /** index.html image scale easing */
  easeImage: 'cubic-bezier(.2,.6,.2,1)',
  /** The hero zoom keyframe on index.html */
  heroZoom: { duration: '20s', easing: 'ease-out', from: 'scale(1)', to: 'scale(1.07)' },
  /** Lift amounts, verbatim */
  lift: {
    button: 'translateY(-1px)',
    spaceCardSystem: 'translateY(-4px)',
    spaceCardWebsite: 'translateY(-3px)',
    systemIndexCard: 'translateY(-3px)',
  },
  /** Image scale on hover, verbatim */
  imageScale: {
    dest: 'scale(1.05)',
    spaceCard: 'scale(1.04)',
    expCard: 'scale(1.05)',
    post: 'scale(1.04)',
    pillar: 'scale(1.04)',
    stage: 'scale(1.04)',
    story: 'scale(1.03)',
  },
} as const;

/** Backdrop blur values, verbatim. */
export const blur = {
  /** space-card.html .floor badge */
  badge: 'blur(6px)',
  /** frankfurt.html .nav */
  navHouse: 'saturate(1.2) blur(16px)',
  /** index.html .nav */
  navCollection: 'saturate(1.2) blur(18px)',
} as const;

export default shadows;
