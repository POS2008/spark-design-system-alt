import type { Config } from 'tailwindcss';

/**
 * SPARK Design System alt — portable Tailwind preset.
 *
 * Every entry points at a CSS custom property declared in
 * `src/styles/tokens.css`, which holds the values copied verbatim from the
 * source system. No value is defined twice and none is invented here.
 *
 * NOTE ON `screens`: the source system defines no breakpoints (see
 * foundations/breakpoints.ts). Tailwind's defaults are left untouched so that
 * nothing implies a SPARK-sanctioned responsive scale. Use them only for new
 * work that has been agreed with the design owner.
 */
const sparkPreset: Config = {
  content: [],
  theme: {
    extend: {
      colors: {
        /* Core brand — assets/tokens.css */
        ink: 'var(--spark-ink)',
        paper: 'var(--spark-paper)',
        concrete: 'var(--spark-concrete)',
        oak: {
          DEFAULT: 'var(--spark-oak)',
          deep: 'var(--spark-oak-deep)',
          soft: 'var(--spark-oak-soft)',
        },

        /* Warm neutral scale */
        neutral: {
          900: 'var(--ink-900)',
          800: 'var(--ink-800)',
          700: 'var(--ink-700)',
          600: 'var(--ink-600)',
          500: 'var(--ink-500)',
          400: 'var(--ink-400)',
          300: 'var(--ink-300)',
          200: 'var(--ink-200)',
          100: 'var(--ink-100)',
          50: 'var(--ink-050)',
        },

        /* Semantic */
        surface: {
          DEFAULT: 'var(--surface)',
          alt: 'var(--surface-alt)',
          invert: 'var(--surface-invert)',
          concrete: 'var(--spark-bg-concrete)',
        },
        fg: {
          DEFAULT: 'var(--spark-fg-primary)',
          primary: 'var(--spark-fg-primary)',
          secondary: 'var(--spark-fg-secondary)',
          tertiary: 'var(--spark-fg-tertiary)',
          invert: 'var(--spark-fg-invert)',
          accent: 'var(--spark-fg-accent)',
          'accent-paper': 'var(--spark-fg-accent-on-paper)',
        },
        /* Named `line` rather than `border` so the DEFAULT key cannot collide
           with Tailwind's border-width utility. */
        line: {
          DEFAULT: 'var(--spark-border)',
          strong: 'var(--spark-border-strong)',
          quiet: 'var(--spark-border-quiet)',
          invert: 'var(--spark-border-invert)',
        },
        rule: 'var(--rule)',
        accent: 'var(--accent)',
      },

      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },

      /* Fluid scale from tokens.css */
      fontSize: {
        display: ['var(--fs-display)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
        h1: ['var(--fs-h1)', { lineHeight: 'var(--lh-snug)' }],
        h2: ['var(--fs-h2)', { lineHeight: 'var(--lh-snug)' }],
        h3: ['var(--fs-h3)', { lineHeight: 'var(--lh-snug)' }],
        lead: ['var(--fs-lead)', { lineHeight: '1.35' }],
        body: ['var(--fs-body)', { lineHeight: 'var(--lh-base)' }],
        small: ['var(--fs-small)', { lineHeight: 'var(--lh-base)' }],
        micro: ['var(--fs-micro)', { lineHeight: '1' }],
      },

      lineHeight: {
        tight: 'var(--lh-tight)',
        snug: 'var(--lh-snug)',
        base: 'var(--lh-base)',
      },

      letterSpacing: {
        label: 'var(--tracking-label)',
        wide: 'var(--tracking-wide)',
      },

      /* 8px base scale — s-1 … s-10 */
      spacing: {
        's-1': 'var(--s-1)',
        's-2': 'var(--s-2)',
        's-3': 'var(--s-3)',
        's-4': 'var(--s-4)',
        's-5': 'var(--s-5)',
        's-6': 'var(--s-6)',
        's-7': 'var(--s-7)',
        's-8': 'var(--s-8)',
        's-9': 'var(--s-9)',
        's-10': 'var(--s-10)',
        gutter: 'var(--grid-gutter)',
      },

      borderRadius: {
        none: 'var(--spark-radius-0)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
      },

      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        'card-hover': 'var(--spark-shadow-card-hover)',
      },

      maxWidth: {
        grid: 'var(--grid-max)',
        wrap: 'var(--spark-site-wrap-max)',
      },

      backgroundImage: {
        'scrim-hero-collection': 'var(--spark-scrim-hero-collection)',
        'scrim-hero-house': 'var(--spark-scrim-hero-house)',
        'scrim-dest': 'var(--spark-scrim-dest)',
        'scrim-pillar': 'var(--spark-scrim-pillar)',
        'scrim-exp': 'var(--spark-scrim-exp)',
        'scrim-cta-house': 'var(--spark-scrim-cta-house)',
      },

      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '250ms',
        card: '300ms',
        image: '1200ms',
      },

      transitionTimingFunction: {
        image: 'cubic-bezier(.2,.6,.2,1)',
      },
    },
  },
  plugins: [],
};

export default sparkPreset;
