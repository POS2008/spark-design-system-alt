import * as React from 'react';
import { cx } from '../../lib/cx';

/**
 * SPARK — SparkLogo
 * SOURCE: system/logo.html ("BRAND · 01 — Logo system")
 *         asset: assets/logo/spark-logo-official.svg → /logo/spark-logo-official.svg
 *
 * "Horizontal 'SPARK' wordmark with the double-chevron peak glyph — the
 * official mark." The SVG is used as-is. It is never redrawn, never recoloured,
 * and the reverse treatment is `filter: invert(1)` exactly as in the source.
 *
 * The three rules, verbatim from the source:
 *   RULE 01 · Never redraw. Use the supplied SVG only. The geometry of the
 *             chevron peak and the letterforms is fixed.
 *   RULE 02 · Contrast only. Logo is ink on light backgrounds or paper on dark.
 *             No colour fills inside the wordmark.
 *   RULE 03 · Breathe. Give the mark clear space equal to the cap-height of the
 *             S on every side. No captions inside the clear zone.
 *
 * Minimum size, verbatim: "min · 14 px digital · 10 mm print".
 */

export const LOGO_SRC = new URL('../../assets/logo/spark-logo-official.svg', import.meta.url).href;

/** Verbatim from the source. */
export const logoRules = [
  {
    n: 'RULE 01',
    t: 'Never redraw.',
    p: 'Use the supplied SVG only. The geometry of the chevron peak and the letterforms is fixed.',
  },
  {
    n: 'RULE 02',
    t: 'Contrast only.',
    p: 'Logo is ink on light backgrounds or paper on dark. No colour fills inside the wordmark.',
  },
  {
    n: 'RULE 03',
    t: 'Breathe.',
    p: 'Give the mark clear space equal to the cap-height of the S on every side. No captions inside the clear zone.',
  },
] as const;

export const logoMinimums = { digital: '14px', print: '10mm' } as const;

/** The scale steps shown in the source's scale row. */
export const logoScaleSteps = [72, 48, 32, 20, 14] as const;

export interface SparkLogoProps {
  /**
   * `ink` — the mark as supplied, for light backgrounds.
   * `paper` — reverse, for ink and oak surfaces (filter: invert(1)).
   * On oak the source uses the ink mark, not the reverse.
   */
  tone?: 'ink' | 'paper';
  /** Height in px. The source sets height (scale row) or width (tiles). */
  height?: number;
  /** Width in px — the source's primary/reverse/hero/lockup tiles set width. */
  width?: number;
  /**
   * Applies clear space equal to the cap-height of the S on every side
   * (RULE 03). Approximated as a share of the rendered height, since the
   * cap-height is a property of the SVG geometry — see README.
   */
  clearSpace?: boolean;
  className?: string;
  alt?: string;
}

export function SparkLogo({
  tone = 'ink',
  height,
  width,
  clearSpace = false,
  className,
  alt = 'SPARK',
}: SparkLogoProps) {
  const img = (
    <img
      src={LOGO_SRC}
      alt={alt}
      className={cx('block max-w-full', tone === 'paper' && 'spark-logo-invert', className)}
      style={{ height, width }}
    />
  );

  if (!clearSpace) return img;

  // RULE 03 — clear space on every side. Derived from the rendered height.
  const pad = height ? Math.round(height * 0.72) : undefined;
  return <span style={{ display: 'inline-block', padding: pad }}>{img}</span>;
}

/**
 * LocationLockup — the "Location lockup" tile in system/logo.html.
 *   mark at 300px wide, then a rule and the address line:
 *   Söhne 500 · 14px · .24em · uppercase · opacity .75
 *   border-top: 1px solid currentColor; padding-top: 16px; margin-top: 20px
 */
export function LocationLockup({
  location = 'Sample venue · City',
  tone = 'ink',
  width = 300,
}: {
  location?: string;
  tone?: 'ink' | 'paper';
  width?: number;
}) {
  return (
    <div>
      <SparkLogo tone={tone} width={width} />
      <div className="mt-[20px] border-t border-solid border-current pt-[16px] font-body text-[14px] font-medium uppercase tracking-[.24em] opacity-75">
        {location}
      </div>
    </div>
  );
}

export default SparkLogo;
