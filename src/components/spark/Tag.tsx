import * as React from 'react';
import { cx } from '../../lib/cx';

/**
 * SPARK — Tag
 * SOURCE: system/buttons.html ("Tags" section)
 *
 * Anatomy, verbatim:
 *   display: inline-flex; align-items: center; gap: 6px
 *   padding: 6px 12px
 *   font-family: var(--font-mono); font-size: 11px
 *   text-transform: uppercase; letter-spacing: .12em
 *   border: 1px solid var(--ink-300); border-radius: 999px
 *   background: transparent; color: var(--ink-700)
 *
 * Variants are exactly the three in the source:
 *   default            outline, mono, ink-700 label
 *   --filled           ink fill, paper label, no border
 *   --paper            paper fill, ink label, no border
 * plus the `--dot` modifier: a 6px currentColor dot before the label.
 *
 * NOT IN SOURCE: hover, focus, active or disabled states for tags — the
 * source declares none. Tags are labels, not controls.
 */

export type TagVariant = 'default' | 'filled' | 'paper';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  /** `.tag--dot` — 6px leading dot in currentColor. */
  dot?: boolean;
}

const tagBase =
  'inline-flex items-center gap-[6px] px-[12px] py-[6px] font-mono text-[11px] ' +
  'uppercase tracking-[.12em] rounded-pill border border-solid';

const tagVariants: Record<TagVariant, string> = {
  default: 'bg-transparent text-neutral-700 border-neutral-300',
  filled: 'bg-ink text-paper border-transparent',
  paper: 'bg-paper text-ink border-transparent',
};

export function Tag({ variant = 'default', dot = false, className, children, ...rest }: TagProps) {
  return (
    <span className={cx(tagBase, tagVariants[variant], className)} {...rest}>
      {dot && <span aria-hidden="true" className="h-[6px] w-[6px] rounded-full bg-current" />}
      {children}
    </span>
  );
}

export default Tag;
