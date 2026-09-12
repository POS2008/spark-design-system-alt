import * as React from 'react';
import { cx } from '../../lib/cx';

import ledStageUrl from '../../assets/images/led_stage.jpg';
import interior2Url from '../../assets/images/led_stage.jpg';
import interior3Url from '../../assets/images/event_1.jpg';
import event1Url from '../../assets/images/event_1.jpg';
import venueExteriorUrl from '../../assets/images/mixed_reality_stage.jpg';
import mixedRealityStageUrl from '../../assets/images/mixed_reality_stage.jpg';

/**
 * SPARK — SpaceCard
 * SOURCE: system/space-card.html ("COMPONENTS · 06 — Space card")
 * "The workhorse of the site — one stage, one set of specs, one invitation."
 *
 * Anatomy, verbatim:
 *   .space        bg ink · color paper · radius 4px (--radius-md) · overflow hidden
 *                 transition transform .3s ease · hover translateY(-4px)
 *   .media        aspect-ratio 4/3 · img object-fit cover
 *   .media .floor top 16 left 16 · mono 11px · uppercase · .16em
 *                 bg rgba(10,10,10,.7) · backdrop-filter blur(6px)
 *                 padding 6px 10px · radius 2px (--radius-sm)
 *   .media .spec  bottom 16 right 16 · mono 11px · uppercase · .12em
 *                 bg oak · color ink · padding 6px 10px · radius 999px · weight 600
 *   .body         padding 24px · flex 1
 *   .title        GT Super Display · 32px / 1 · weight 500 · -.01em · margin 0 0 6px
 *   .sqm          oak · mono 12px · .1em · uppercase · margin-bottom 16px
 *   .desc         --ink-300 · 14px / 1.5 · margin 0 0 20px · flex 1
 *   .facts        border-top 1px --ink-700 · padding-top 16px · 3 cols · gap 12px
 *   .fact .k      mono 10px · uppercase · .16em · --ink-400 · margin-bottom 4px
 *   .fact .v      GT Super Display · 20px · weight 500 / 1
 *
 *   .space--light bg --surface-alt · color ink · border 1px --rule
 *                 .sqm → oak-deep · .desc → --text-muted
 *                 .facts border → --rule · .fact .k → --text-muted
 *                 floor badge → rgba(250,250,247,.85) on ink (source inline style)
 *
 * The source authors the title and fact values at font-weight 500 on GT Super
 * Display. Only the Bold (700) file ships, so they render at 700. The declared
 * weight is preserved as authored — see README, weight note.
 *
 * NOT IN SOURCE: focus state, keyboard affordance, responsive collapse
 * (the grid is a fixed `repeat(3, 1fr)`).
 */

export interface SpaceFact {
  /** Short key, e.g. "LED", "Dim.", "Cap." */
  k: string;
  /** Value, e.g. "90 sqm", "30×3 m", "200" */
  v: string;
}

export interface SpaceCardProps {
  /** Top-left badge, e.g. "Floor 4 — Horizon". */
  floor: string;
  /** Bottom-right oak pill, e.g. "Broadcast". Omitted on the light variant in the source. */
  spec?: string;
  title: string;
  /** The oak mono line, e.g. "c. 400 sqm · curved LED". */
  sqm: string;
  description: string;
  /** Exactly three facts in the source — specs are trios. */
  facts: SpaceFact[];
  image: string;
  imageAlt?: string;
  /** `ink` is the default surface; `light` is the documented light variant. */
  variant?: 'ink' | 'light';
  href?: string;
  className?: string;
}

export function SpaceCard({
  floor,
  spec,
  title,
  sqm,
  description,
  facts,
  image,
  imageAlt = '',
  variant = 'ink',
  href,
  className,
}: SpaceCardProps) {
  const light = variant === 'light';

  const wrapperClass = cx(
    'flex flex-col overflow-hidden rounded-md transition-transform duration-card ease-linear hover:-translate-y-[4px]',
    light ? 'border border-solid border-rule bg-surface-alt text-ink' : 'bg-ink text-paper',
    className,
  );

  const inner = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image} alt={imageAlt} className="h-full w-full object-cover" />

        <div
          className={cx(
            'absolute left-[16px] top-[16px] rounded-sm px-[10px] py-[6px] font-mono text-[11px] uppercase tracking-[.16em] backdrop-blur-[6px]',
            light ? 'bg-[rgba(250,250,247,.85)] text-ink' : 'bg-[rgba(10,10,10,.7)] text-paper',
          )}
        >
          {floor}
        </div>

        {spec && (
          <div className="absolute bottom-[16px] right-[16px] rounded-pill bg-oak px-[10px] py-[6px] font-mono text-[11px] font-semibold uppercase tracking-[.12em] text-ink">
            {spec}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-[24px]">
        <h3
          className="m-0 mb-[6px] font-display text-[32px] font-medium leading-none tracking-[-.01em]"
        >
          {title}
        </h3>

        <div
          className={cx(
            'mb-[16px] font-mono text-[12px] uppercase tracking-[.1em]',
            light ? 'text-oak-deep' : 'text-oak',
          )}
        >
          {sqm}
        </div>

        <p
          className={cx(
            'm-0 mb-[20px] flex-1 text-[14px] leading-[1.5]',
            light ? 'text-fg-secondary' : 'text-neutral-300',
          )}
        >
          {description}
        </p>

        <div
          className={cx(
            'grid grid-cols-3 gap-[12px] border-t border-solid pt-[16px]',
            light ? 'border-rule' : 'border-neutral-700',
          )}
        >
          {facts.map((f) => (
            <div key={f.k}>
              <div
                className={cx(
                  'mb-[4px] font-mono text-[10px] uppercase tracking-[.16em]',
                  light ? 'text-fg-secondary' : 'text-neutral-400',
                )}
              >
                {f.k}
              </div>
              <div className="font-display text-[20px] font-medium leading-none">{f.v}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return href ? (
    <a href={href} className={wrapperClass}>
      {inner}
    </a>
  ) : (
    <article className={wrapperClass}>{inner}</article>
  );
}

/** The source grid: `repeat(3, 1fr)`, gap 24px. Not responsive in the source. */
export function SpaceCardGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cx('grid grid-cols-3 gap-[24px]', className)}>{children}</div>;
}

/** The six cards as authored in system/space-card.html. */
export const SPACE_CARDS_INK: SpaceCardProps[] = [
  {
    floor: 'Floor 4 — Horizon',
    spec: 'Broadcast',
    title: 'Horizon Stage',
    sqm: 'c. 400 sqm · curved LED',
    description:
      'Powerful presentations and engaging multimedia / streaming events on a 30-metre curved LED wall.',
    facts: [
      { k: 'LED', v: '90 sqm' },
      { k: 'Dim.', v: '30×3 m' },
      { k: 'Cap.', v: '200' },
    ],
    image: ledStageUrl,
    imageAlt: 'Horizon Stage',
  },
  {
    floor: 'Floor 5 — Liberty',
    spec: 'Conference',
    title: 'Liberty Stage',
    sqm: 'c. 400 sqm · flexible',
    description:
      'Perfect for business presentations, conferences and workshops with a 26 sqm LED backdrop.',
    facts: [
      { k: 'LED', v: '26 sqm' },
      { k: 'Dim.', v: '9.2×2.8' },
      { k: 'Cap.', v: '200' },
    ],
    image: interior2Url,
    imageAlt: 'Liberty Stage',
  },
  {
    floor: 'Floor 6 — Skyline',
    spec: 'Reception',
    title: 'Sky Lounge',
    sqm: '400 sqm · rooftop access',
    description:
      'Roadshows, award ceremonies and receptions — with direct access to the 400 sqm Skyline Terrace.',
    facts: [
      { k: 'LED', v: '30 sqm' },
      { k: 'Dim.', v: '10×3 m' },
      { k: 'Cap.', v: '200' },
    ],
    image: interior3Url,
    imageAlt: 'Sky Lounge',
  },
];

export const SPACE_CARDS_LIGHT: SpaceCardProps[] = [
  {
    floor: 'Add-on — Breakouts',
    title: 'Breakout rooms',
    sqm: '36 – 120 sqm · 2 – 60 PAX',
    description:
      'Back-office, VIP suites and workshop rooms — each with a Samsung Frame, digital flip-chart and meeting owl.',
    facts: [
      { k: 'Tech', v: 'Frame 85"' },
      { k: 'Min', v: '2 PAX' },
      { k: 'Max', v: '60 PAX' },
    ],
    image: event1Url,
    variant: 'light',
  },
  {
    floor: 'Rooftop — Floor 6',
    title: 'Skyline Terrace',
    sqm: '404 sqm · panoramic',
    description:
      'Receptions and networking with panoramic city views and direct lounge access.',
    facts: [
      { k: 'Outdoor', v: '404 sqm' },
      { k: 'Setup', v: 'Flex' },
      { k: 'Cap.', v: '200' },
    ],
    image: venueExteriorUrl,
    variant: 'light',
  },
  {
    floor: 'Platform — Mixed Reality',
    title: 'MR Broadcast',
    sqm: 'Add-on · integrated',
    description:
      'Mixed-reality stage for virtual product launches, streamed townhalls and hybrid capital-markets days.',
    facts: [
      { k: 'Live', v: '4K' },
      { k: 'Feeds', v: '8' },
      { k: 'Stream', v: '∞' },
    ],
    image: mixedRealityStageUrl,
    variant: 'light',
  },
];

export default SpaceCard;
