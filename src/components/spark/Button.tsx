import * as React from 'react';
import { cx } from '../../lib/cx';

/**
 * SPARK — Button
 * SOURCE: system/buttons.html ("COMPONENTS · 05 — Buttons & tags")
 *
 * Anatomy, verbatim from the source's own annotation:
 *   padding: 14px 26px
 *   font:    15/1 Söhne Kräftig (500)
 *   radius:  999px — rounded pill
 *   gap (icon): 10px
 *   palette: ink / paper only
 *   arrow:   decorative "→" after label
 *   letter-spacing: .005em
 *   transition: background .2s, color .2s, border-color .2s, transform .15s
 *   hover: translateY(-1px)
 *
 * Variants are exactly the five in the source plus the two documented
 * on-ink overrides. No variant has been added.
 *
 * NOT IN SOURCE — and therefore not implemented: focus, active and disabled
 * states. The source declares none. See README → VALUES THAT COULD NOT BE
 * EXTRACTED. `disabled` is passed through to the DOM element only.
 */

export type ButtonVariant =
  /** Ink fill, paper label. "This is the workhorse." Hover → --ink-700. */
  | 'primary'
  /** Transparent, ink label, ink border. Hover → ink fill, paper label. */
  | 'outline'
  /** Transparent, ink label, --ink-300 border. Hover → ink border. */
  | 'ghost'
  /** Transparent, no radius, 4px 0 padding, 1px currentColor underline. Hover → opacity .7, no lift. */
  | 'link'
  /** Paper fill, ink label — for dark surfaces. Hover → #fff. */
  | 'invert';

/** The three size steps in the source: sm, default, lg. */
export type ButtonSize = 'sm' | 'default' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Appends the decorative "→" after the label (source: `.arrow`). */
  arrow?: boolean;
  /**
   * Renders the documented on-ink overrides for `outline`, `ghost` and `link`
   * (source: the "Buttons · on ink" card in system/buttons.html).
   */
  onInk?: boolean;
  href?: string;
}

const base =
  'inline-flex items-center gap-[10px] font-body font-medium leading-none ' +
  'cursor-pointer no-underline border border-solid border-transparent rounded-pill ' +
  'tracking-[.005em] transition-[background-color,color,border-color,transform] ' +
  'duration-base ease-linear hover:-translate-y-px';

const sizes: Record<ButtonSize, string> = {
  /** .btn--sm: padding 10px 20px; font-size 13px */
  sm: 'px-[20px] py-[10px] text-[13px]',
  /** .btn: padding 14px 26px; font-size 15px */
  default: 'px-[26px] py-[14px] text-[15px]',
  /** .btn--lg: padding 18px 32px; font-size 17px */
  lg: 'px-[32px] py-[18px] text-[17px]',
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-ink text-paper hover:bg-neutral-700',
  outline: 'bg-transparent text-ink border-ink hover:bg-ink hover:text-paper',
  ghost: 'bg-transparent text-ink border-neutral-300 hover:border-ink',
  link: 'bg-transparent text-ink border-none rounded-none border-b border-b-current hover:opacity-70 hover:translate-y-0',
  invert: 'bg-paper text-ink hover:bg-white',
};

/** On-ink overrides, verbatim from the "Buttons · on ink" card. */
const onInkVariants: Partial<Record<ButtonVariant, string>> = {
  outline: 'text-paper border-paper hover:bg-paper hover:text-ink',
  ghost: 'text-paper border-neutral-500 hover:border-paper',
  link: 'text-paper',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'default', arrow = false, onInk = false, href, className, children, ...rest },
  ref,
) {
  const classes = cx(
    base,
    sizes[size],
    variants[variant],
    onInk ? onInkVariants[variant] : undefined,
    // .btn--link overrides the pill padding in the source
    variant === 'link' && 'px-0 py-[4px]',
    className,
  );

  const content = (
    <>
      {children}
      {arrow && (
        <span aria-hidden="true" className="text-[1.1em] leading-none">
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a ref={ref as never} href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} {...rest}>
      {content}
    </button>
  );
});

/**
 * IconButton — the circular variant in system/buttons.html (`.iconbtn`).
 *   44 × 44, radius 999px, ink fill / paper glyph, hover → --ink-700
 *   .ghost: transparent, ink glyph, --ink-300 border, hover → ink border
 *   SVG glyphs in the source are 16px viewBox at 1.5px stroke (close) or
 *   a solid path (play), matching the brand's 16px line-icon rule.
 */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ghost?: boolean;
  'aria-label': string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ ghost = false, className, children, ...rest }, ref) {
    return (
      <button
        ref={ref}
        className={cx(
          'inline-flex h-[44px] w-[44px] items-center justify-center rounded-pill border-none cursor-pointer',
          'transition-[background-color] duration-base ease-linear',
          ghost
            ? 'bg-transparent text-ink border border-solid border-neutral-300 hover:border-ink hover:bg-transparent'
            : 'bg-ink text-paper hover:bg-neutral-700',
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

/** The two glyphs that exist in the source, at their source geometry. */
export const PlayGlyph = () => (
  <svg viewBox="0 0 16 16" className="h-[14px] w-[14px]" aria-hidden="true">
    <path fill="currentColor" d="M4 2l10 6-10 6z" />
  </svg>
);

export const CloseGlyph = () => (
  <svg viewBox="0 0 16 16" className="h-[14px] w-[14px]" aria-hidden="true">
    <path stroke="currentColor" strokeWidth={1.5} d="M3 3l10 10M13 3L3 13" fill="none" />
  </svg>
);

export default Button;
