import * as React from 'react';
import { cx } from '../lib/cx';
import { SparkLogo } from '../components/spark/SparkLogo';

import stageAsteriskUrl from '../assets/images/led_stage.jpg';
import upPropertyPanelUrl from '../assets/images/event_1.jpg';
import upTerraceDuskUrl from '../assets/images/led_stage.jpg';
import upTerraceDayUrl from '../assets/images/event_1.jpg';
import upLedCurvedUrl from '../assets/images/led_stage.jpg';
import upTieredRoomUrl from '../assets/images/mixed_reality_stage.jpg';
import upPropertyLoungeUrl from '../assets/images/mixed_reality_stage.jpg';
import upLedDwsUrl from '../assets/images/led_stage.jpg';
import upEsgPanelUrl from '../assets/images/event_1.jpg';
import upLedImpulseUrl from '../assets/images/mixed_reality_stage.jpg';
import upTraderStageUrl from '../assets/images/event_1.jpg';
import upLedGreenfinanceUrl from '../assets/images/led_stage.jpg';
import upLedBroadcastUrl from '../assets/images/mixed_reality_stage.jpg';
import evAiwHorizonUrl from '../assets/images/led_stage.jpg';
import evOrtLoungeUrl from '../assets/images/led_stage.jpg';
import evOrtSkylineUrl from '../assets/images/event_1.jpg';
import evAiwPanelUrl from '../assets/images/mixed_reality_stage.jpg';
import evRedGalaUrl from '../assets/images/event_1.jpg';
import evAiwSpeakerUrl from '../assets/images/event_1.jpg';
import genericStoryImageUrl from '../assets/images/mixed_reality_stage.jpg';

/**
 * SPARK — Website · Group (Collection)
 * SOURCE: the two pages inside "Website — Group (Collection)":
 *   index.html      → <CollectionHomepage />   (data-screen-label "Group Homepage")
 *   frankfurt.html  → <HouseFrankfurt />       (data-screen-label "Homepage")
 * (index-print.html is a print copy of index.html and adds no new design.)
 *
 * Both pages are reproduced section by section at their source values.
 * Where the two pages disagree — page gutter (64 vs 56), button padding
 * (15×26 vs 14×24), nav logo height (48 vs 34), section rhythm (160 vs 120) —
 * BOTH are preserved. Nothing has been unified.
 *
 * Each page also ships its OWN button CSS, distinct from the
 * system/buttons.html component. Those local button sets are implemented here
 * as CollectionButton and HouseButton so that neither the pages nor the
 * design-system Button component has to be normalised. See README → parity.
 *
 * FIXED-WIDTH BY DESIGN: the source sets `min-width: 1280px` and
 * `<meta viewport content="width=1440">` on both pages, and declares no
 * @media rule anywhere. These components therefore reproduce a fixed desktop
 * layout. Responsive behaviour would be a new design decision.
 */

/* ==========================================================================
   Shared source primitives
   ========================================================================== */

/** index.html `.label` — Söhne 500 · 11px · .24em · uppercase · --ink-600 */
export function Label({
  tone = 'default',
  rule = false,
  ruleAfter = false,
  className,
  children,
}: {
  tone?: 'default' | 'gold' | 'paper' | 'oak' | 'muted';
  /** `.label--with-rule` — 28×1 currentColor rule before the label, opacity .6 */
  rule?: boolean;
  /** The centred variants in the source add a matching rule after. */
  ruleAfter?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const tones = {
    default: 'text-neutral-600',
    gold: 'text-oak-deep',
    oak: 'text-oak',
    paper: 'text-[rgba(246,243,238,.72)]',
    muted: 'text-neutral-500',
  } as const;

  return (
    <div
      className={cx(
        'font-body text-[11px] font-medium uppercase tracking-[.24em]',
        rule || ruleAfter ? 'inline-flex items-center gap-[14px]' : undefined,
        tones[tone],
        className,
      )}
    >
      {rule && <span aria-hidden="true" className="h-px w-[28px] bg-current opacity-60" />}
      {children}
      {ruleAfter && <span aria-hidden="true" className="h-px w-[28px] bg-current opacity-60" />}
    </div>
  );
}

/** frankfurt.html `.eye` — 11px · .24em · uppercase · 500 · 32×1 rule before */
export function Eye({
  className,
  ruleAfter = false,
  children,
}: {
  className?: string;
  ruleAfter?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        'inline-flex items-center gap-[12px] font-body text-[11px] font-medium uppercase tracking-[.24em]',
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-[32px] bg-current opacity-70" />
      {children}
      {ruleAfter && <span aria-hidden="true" className="h-px w-[32px] bg-current opacity-70" />}
    </div>
  );
}

/* --------------------------------------------------------------------------
   index.html `.btn` — 15px 26px · 13px · .02em · 999px · .25s
   -------------------------------------------------------------------------- */
export type CollectionButtonVariant = 'ink' | 'paper' | 'outline-ink' | 'outline-paper';

export function CollectionButton({
  variant = 'ink',
  href,
  arrow = true,
  className,
  children,
}: {
  variant?: CollectionButtonVariant;
  href?: string;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const variants: Record<CollectionButtonVariant, string> = {
    ink: 'bg-neutral-900 text-paper hover:bg-black',
    paper: 'bg-paper text-neutral-900 hover:bg-white',
    'outline-ink': 'bg-transparent text-neutral-900 border-neutral-900 hover:bg-neutral-900 hover:text-paper',
    'outline-paper':
      'bg-transparent text-paper border-[rgba(246,243,238,.6)] hover:border-paper hover:bg-[rgba(246,243,238,.05)]',
  };

  const Comp = href ? 'a' : 'button';
  const classes = cx(
    'group/btn inline-flex cursor-pointer items-center gap-[10px] rounded-pill border border-solid border-transparent',
    'px-[26px] py-[15px] font-body text-[13px] font-medium leading-none tracking-[.02em]',
    'transition-[background-color,color,border-color,transform] duration-slow ease-linear hover:-translate-y-px',
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-card ease-linear group-hover/btn:translate-x-[4px]"
        >
          →
        </span>
      )}
    </>
  );

  return Comp === 'a' ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <button type="button" className={classes}>
      {inner}
    </button>
  );
}

/* --------------------------------------------------------------------------
   frankfurt.html `.btn` — 14px 24px · 14px · .01em · 999px · .2s
   -------------------------------------------------------------------------- */
export type HouseButtonVariant = 'bronze' | 'ink' | 'invert' | 'ghost';

export function HouseButton({
  variant = 'bronze',
  href,
  arrow = true,
  className,
  children,
}: {
  variant?: HouseButtonVariant;
  href?: string;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const variants: Record<HouseButtonVariant, string> = {
    bronze: 'bg-oak text-ink hover:bg-oak-deep hover:text-paper',
    ink: 'bg-ink text-paper',
    invert: 'bg-paper text-ink',
    ghost: 'bg-transparent border-current opacity-85 hover:opacity-100',
  };

  const classes = cx(
    'inline-flex cursor-pointer items-center gap-[10px] rounded-pill border border-solid border-transparent',
    'px-[24px] py-[14px] font-body text-[14px] font-medium leading-none tracking-[.01em]',
    'transition-[transform,background-color,color,border-color] duration-base ease-linear hover:-translate-y-px',
    variants[variant],
    className,
  );
  const inner = (
    <>
      {children}
      {arrow && (
        <span aria-hidden="true" className="text-[1.05em]">
          →
        </span>
      )}
    </>
  );

  return href ? (
    <a href={href} className={classes}>
      {inner}
    </a>
  ) : (
    <button type="button" className={classes}>
      {inner}
    </button>
  );
}

/* ==========================================================================
   PAGE 1 — index.html · "SPARK — The Collection"
   ========================================================================== */

const NAV_LEFT = [
  { label: 'The Collection', href: '#collection' },
  { label: 'The House', href: '#philosophy' },
  { label: 'Journal', href: '#journal' },
];
const NAV_RIGHT = [
  { label: 'Locations', href: '#frankfurt' },
  { label: 'Spaces', href: '#spaces' },
  { label: 'Contact', href: '#appointment' },
];

const DESTINATIONS = [
  {
    country: 'Germany · Open',
    name: 'Location One',
    copy: 'Three LED stages, a rooftop club and a generous terrace in a central business district.',
    metaLeft: 'Flagship venue · Multiple floors',
    metaRight: 'Discover →',
    img: upPropertyPanelUrl,
    wide: true,
    soon: false as const,
    tag: undefined,
    href: '#frankfurt',
  },
  {
    country: 'Germany · Coming soon',
    name: 'Location Two',
    copy: 'A new broadcast house is taking shape. Registration is open.',
    metaLeft: 'City district',
    metaRight: 'Register →',
    img: upTerraceDuskUrl,
    wide: false,
    soon: true as const,
    tag: 'Opening soon',
    href: '#',
  },
  {
    country: 'Germany · In preparation',
    name: 'Location Three',
    copy: 'A premium stage for capital-markets days, product launches and state-of-the-house broadcasts.',
    metaLeft: 'Central district',
    metaRight: 'Register →',
    img: upTerraceDayUrl,
    wide: false,
    soon: true as const,
    tag: 'In preparation',
    href: '#',
  },
];

/**
 * The website's own space card — index.html `.space-card`.
 * Distinct from the design-system SpaceCard component: paper surface,
 * 2px radius, ink-200 hairline, 3-up spec row with unit suffixes, and a
 * price/CTA foot. Preserved as authored.
 */
const SITE_SPACES = [
  {
    tag: 'Broadcast',
    loc: 'Flagship venue · Floor 4',
    name: 'Horizon Stage',
    sub: 'A curved 30-metre LED wall for cinematic product launches, keynotes and streamed capital-markets days.',
    img: upLedCurvedUrl,
    specs: [
      { k: 'Surface', v: '90', unit: 'sqm' },
      { k: 'Capacity', v: '200', unit: 'guests' },
      { k: 'LED wall', v: '30×3', unit: 'm' },
    ],
    price: '€ 14,500',
  },
  {
    tag: 'Conference',
    loc: 'Flagship venue · Floor 5',
    name: 'Liberty Stage',
    sub: 'A flexible 400 sqm room with a 26 sqm LED backdrop — for townhalls, partner summits and multi-day conferences.',
    img: upTieredRoomUrl,
    specs: [
      { k: 'Surface', v: '400', unit: 'sqm' },
      { k: 'Capacity', v: '200', unit: 'guests' },
      { k: 'LED wall', v: '9.2×2.8', unit: 'm' },
    ],
    price: '€ 9,800',
  },
  {
    tag: 'Reception',
    loc: 'Flagship venue · Floor 6',
    name: 'Skyline Club',
    sub: 'Award ceremonies, roadshows and after-work receptions. Direct access to the 404 sqm panoramic terrace.',
    img: upPropertyLoungeUrl,
    specs: [
      { k: 'Terrace', v: '404', unit: 'sqm' },
      { k: 'Capacity', v: '200', unit: 'guests' },
      { k: 'LED wall', v: '30', unit: 'sqm' },
    ],
    price: '€ 11,200',
  },
];

const EXPERIENCES = [
  { n: '— 01 Broadcast', title: 'Keynotes & livestreams', img: upLedDwsUrl },
  { n: '— 02 Conference', title: 'Summits & townhalls', img: upEsgPanelUrl },
  { n: '— 03 Launch', title: 'Products & stories', img: upLedImpulseUrl },
  { n: '— 04 Reception', title: 'Galas & after-work', img: upTraderStageUrl },
];

const JOURNAL = [
  { tag: 'Case · Industry Forum', title: 'A week of ideas, staged on Floor 4.', date: '04 April 2026', img: upLedGreenfinanceUrl },
  { tag: 'Case · Brand Summit', title: 'A brand brought to life.', date: '18 February 2026', img: upPropertyPanelUrl },
  { tag: 'Case · Award Gala', title: 'A gala, without the ballroom.', date: '22 November 2025', img: upLedImpulseUrl },
  { tag: 'Essay · The House', title: 'Why we built a hotel for broadcasts.', date: '01 September 2025', img: upTerraceDuskUrl },
];

const FOOTER_COLLECTION: Array<[string, string[]]> = [
  ['The Collection', ['Location One', 'Location Two', 'Location Three', 'Register interest']],
  ['The House', ['Philosophy', 'Founders', 'Press', 'Careers']],
  ['Experiences', ['Broadcast', 'Conference', 'Launch', 'Reception']],
  ['Journal', ['Case studies', 'Essays', 'Newsletter']],
  ['Contact', ['Contact form', 'General enquiries', 'Sample address', 'Sample city']],
];

export function CollectionHomepage() {
  return (
    <div
      data-screen-label="Group Homepage"
      className="min-w-[1280px] bg-paper font-body text-[15px] leading-[1.55] text-neutral-900 antialiased"
    >
      {/* ---------- Topbar ---------- */}
      <div className="bg-neutral-900 py-[11px] text-[11px] font-medium uppercase tracking-[.14em] text-[rgba(246,243,238,.7)]">
        <div className="mx-auto flex max-w-wrap items-center justify-between px-[64px]">
          <div>A collection of premium event &amp; broadcast addresses</div>
          <div className="flex gap-[28px]">
            <a href="#appointment" className="transition-colors duration-base hover:text-oak">
              Private appointment
            </a>
            <a href="#" className="transition-colors duration-base hover:text-oak">
              EN · DE
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Nav — centred wordmark ---------- */}
      <nav
        className="sticky top-0 z-50 border-b border-solid backdrop-blur-[18px] backdrop-saturate-[1.2]"
        style={{
          background: 'var(--spark-veil-nav-collection)',
          borderBottomColor: 'var(--spark-veil-nav-border)',
        }}
      >
        <div className="mx-auto grid max-w-wrap grid-cols-[1fr_auto_1fr] items-center gap-[32px] px-[64px] py-[26px]">
          <div className="flex justify-start gap-[36px] text-[12px] font-medium uppercase tracking-[.1em]">
            {NAV_LEFT.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="border-b border-solid border-transparent pb-[2px] text-neutral-700 transition-colors duration-base hover:border-b-oak hover:text-neutral-900"
              >
                {i.label}
              </a>
            ))}
          </div>
          <a href="#" className="justify-self-center">
            <SparkLogo height={48} />
          </a>
          <div className="flex justify-end gap-[36px] text-[12px] font-medium uppercase tracking-[.1em]">
            {NAV_RIGHT.map((i) => (
              <a
                key={i.label}
                href={i.href}
                className="border-b border-solid border-transparent pb-[2px] text-neutral-700 transition-colors duration-base hover:border-b-oak hover:text-neutral-900"
              >
                {i.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <section
        data-screen-label="01 Hero"
        className="relative h-[calc(100vh-110px)] max-h-[900px] min-h-[720px] overflow-hidden bg-neutral-900 text-paper"
      >
        <div className="absolute inset-0">
          <img
            src={stageAsteriskUrl}
            alt=""
            className="h-full w-full object-cover"
            style={{ animation: 'sparkHeroZoom 20s ease-out forwards' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'var(--spark-scrim-hero-collection)' }}
          />
        </div>

        <div className="relative z-[2] mx-auto flex h-full max-w-[1240px] flex-col items-center justify-end px-[64px] pb-[96px] text-center">
          <Label rule tone="oak" className="mb-[36px]">
            SPARK · Est. 2024
          </Label>
          <h1 className="m-0 mb-[32px] max-w-[14ch] font-display text-[132px] font-bold leading-[.9] tracking-[-.032em]">
            Every business
            <br />
            needs a <em className="italic text-oak">SPARK.</em>
          </h1>
          <p className="m-0 mb-[44px] max-w-[52ch] text-[18px] font-normal leading-[1.55] text-[rgba(246,243,238,.82)]">
            A small collection of premium event and broadcast houses. Three LED stages, a rooftop
            club, the service of a grand hotel — all pre-installed, all ready to stage a cinematic
            corporate moment.
          </p>
          <div className="flex gap-[12px]">
            <CollectionButton variant="paper" href="#frankfurt">
              Discover Frankfurt
            </CollectionButton>
            <CollectionButton variant="outline-paper" href="#collection">
              The Collection
            </CollectionButton>
          </div>
        </div>

        <div className="absolute bottom-[36px] left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-[10px] text-[10px] font-medium uppercase tracking-[.24em] text-[rgba(246,243,238,.55)]">
          Scroll
          <span className="h-[40px] w-px bg-[rgba(246,243,238,.35)]" />
        </div>
      </section>

      {/* ---------- Manifesto ---------- */}
      <section className="mx-auto max-w-wrap px-[64px] pb-[140px] pt-[160px] text-center">
        <Label rule ruleAfter tone="muted" className="mb-[48px]">
          The house
        </Label>
        <h2 className="mx-auto mb-[40px] max-w-[20ch] font-display text-[84px] font-bold leading-[.98] tracking-[-.025em]">
          Not a venue.
          <br />A <em className="italic text-oak-deep">stage,</em> already lit.
        </h2>
        <div className="mx-auto max-w-[58ch]">
          <p className="m-0 mb-[20px] text-[18px] leading-[1.6] text-neutral-700">
            Every SPARK house is a fully installed instrument — cinematic LED walls,
            broadcast-grade infrastructure, and the quiet service of a grand hotel. Nothing to
            ship, nothing to build. Only to arrive.
          </p>
          <p className="m-0 mb-[20px] text-[18px] leading-[1.6] text-neutral-700">
            We curate each address for its city, its corporate gravity, and the calibre of moments
            it will hold. Discreet, exacting, and always within reach.
          </p>
        </div>
        <div className="mt-[64px] font-display text-[26px] font-bold italic tracking-[-.01em] text-oak-deep">
          — Peter Walther &amp; Jonas Löbbers
        </div>
        <div className="mt-[10px] font-body text-[11px] font-medium uppercase not-italic tracking-[.24em] text-neutral-500">
          Founders · SPARK Places
        </div>
      </section>

      {/* ---------- The Collection ---------- */}
      <section id="collection" className="mx-auto max-w-wrap px-[64px] pb-[160px]">
        <div className="mb-[80px] text-center">
          <Label rule ruleAfter tone="gold" className="mb-[28px]">
            The Collection
          </Label>
          <h2 className="mx-auto mb-[24px] max-w-[20ch] font-display text-[68px] font-bold leading-[.98] tracking-[-.025em]">
            Three addresses.
            <br />
            <em className="italic text-oak-deep">One way of working.</em>
          </h2>
          <p className="mx-auto max-w-[56ch] text-[17px] leading-[1.6] text-neutral-600">
            One house open today. Two in preparation. Each hand-picked for its architecture, its
            view and its place in the city.
          </p>
        </div>

        <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-[20px]">
          {DESTINATIONS.map((d) => (
            <a
              key={d.name}
              href={d.href}
              data-screen-label={`Dest · ${d.name}`}
              className={cx(
                'group relative block aspect-[3/4] overflow-hidden rounded-sm text-paper',
                d.soon ? 'bg-neutral-900' : 'bg-neutral-200',
              )}
            >
              <img
                src={d.img}
                alt={d.soon ? '' : `SPARK ${d.name}`}
                className={cx(
                  'h-full w-full object-cover transition-transform duration-[1400ms] ease-image group-hover:scale-[1.05]',
                  d.soon && 'opacity-[.32] grayscale-[.6]',
                )}
              />
              {!d.soon && (
                <div className="absolute inset-0" style={{ background: 'var(--spark-scrim-dest)' }} />
              )}

              <div className="absolute inset-0 z-[2] flex flex-col justify-end p-[44px]">
                <div className="mb-[16px] font-body text-[11px] font-medium uppercase tracking-[.24em] text-oak">
                  {d.country}
                </div>
                <div>
                  {d.tag && (
                    <div className="mb-[20px] inline-block rounded-pill border border-solid border-[rgba(198,168,122,.5)] px-[14px] py-[7px] font-body text-[10px] font-medium uppercase tracking-[.22em] text-oak">
                      {d.tag}
                    </div>
                  )}
                  <h3
                    className={cx(
                      'm-0 mb-[14px] font-display font-bold leading-[.98] tracking-[-.025em]',
                      d.wide ? 'text-[76px]' : 'text-[56px]',
                    )}
                  >
                    {d.name}
                  </h3>
                  <p
                    className={cx(
                      'm-0 mb-[28px] max-w-[38ch] text-[14px] leading-[1.6]',
                      d.soon ? 'text-[rgba(246,243,238,.55)]' : 'text-[rgba(246,243,238,.82)]',
                    )}
                  >
                    {d.copy}
                  </p>
                  <div className="flex items-center justify-between border-t border-solid border-[rgba(246,243,238,.28)] pt-[18px] font-body text-[11px] font-medium uppercase tracking-[.18em] text-[rgba(246,243,238,.82)]">
                    <span>{d.metaLeft}</span>
                    <span>{d.metaRight}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- Spaces — the website's space card ---------- */}
      <section
        id="spaces"
        className="border-y border-solid border-neutral-200 bg-neutral-50 py-[160px]"
      >
        <div className="mx-auto max-w-wrap px-[64px]">
          <div className="mb-[72px] grid grid-cols-[1fr_1.3fr] items-end gap-[80px]">
            <div>
              <Label rule tone="muted" className="mb-[20px]">
                Signature spaces
              </Label>
              <h2 className="m-0 font-display text-[68px] font-bold leading-[.98] tracking-[-.025em]">
                Four stages,
                <br />
                one <em className="italic text-oak-deep">house.</em>
              </h2>
            </div>
            <p className="m-0 max-w-[46ch] text-[17px] leading-[1.6] text-neutral-600">
              Every SPARK space is a pre-installed instrument — engineered for a specific register
              of moment. Walk in, go live, close the evening on the terrace.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[24px]">
            {SITE_SPACES.map((s) => (
              <a
                key={s.name}
                href="#frankfurt"
                className="group flex cursor-pointer flex-col overflow-hidden rounded-sm border border-solid border-neutral-200 bg-paper transition-[border-color,transform,box-shadow] duration-card ease-linear hover:-translate-y-[3px] hover:border-neutral-400 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-image ease-image group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute left-[20px] top-[20px] z-[2] rounded-pill px-[12px] py-[7px] text-[10px] font-medium uppercase tracking-[.22em] text-neutral-800"
                    style={{ background: 'var(--spark-veil-nav-collection)' }}
                  >
                    {s.tag}
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-[16px] px-[28px] pb-[32px] pt-[28px]">
                  <div className="text-[11px] font-medium uppercase tracking-[.24em] text-neutral-500">
                    {s.loc}
                  </div>
                  <h3 className="m-0 font-display text-[32px] font-bold leading-none tracking-[-.02em] text-neutral-900">
                    {s.name}
                  </h3>
                  <p className="m-0 text-[14px] leading-[1.55] text-neutral-600">{s.sub}</p>

                  <div className="mt-auto grid grid-cols-3 gap-[12px] border-t border-solid border-neutral-200 pt-[20px]">
                    {s.specs.map((sp) => (
                      <div key={sp.k} className="flex flex-col gap-[4px]">
                        <div className="text-[10px] font-medium uppercase tracking-[.2em] text-neutral-500">
                          {sp.k}
                        </div>
                        <div className="font-display text-[22px] font-bold leading-none tracking-[-.01em] text-neutral-900">
                          {sp.v}
                          <span className="ml-[3px] font-body text-[11px] font-normal normal-case tracking-normal text-neutral-500">
                            {sp.unit}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between px-[28px] pb-[28px]">
                  <div className="text-[12px] text-neutral-600">
                    From{' '}
                    <b className="font-display text-[16px] font-bold text-neutral-900">{s.price}</b>
                    <span className="text-neutral-500">/day</span>
                  </div>
                  <div className="inline-flex items-center gap-[8px] text-[13px] font-medium tracking-[.02em] text-oak-deep transition-colors duration-card group-hover:text-neutral-900">
                    Discover →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Experiences ---------- */}
      <section className="mx-auto max-w-wrap px-[64px] py-[160px]">
        <div className="mb-[72px] text-center">
          <Label rule ruleAfter tone="muted" className="mb-[24px]">
            Experiences
          </Label>
          <h2 className="mx-auto max-w-[18ch] font-display text-[64px] font-bold leading-[.98] tracking-[-.025em]">
            For every
            <br />
            <em className="italic text-oak-deep">corporate</em> register.
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-[20px]">
          {EXPERIENCES.map((e) => (
            <a
              key={e.title}
              href="#"
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-sm text-paper"
            >
              <img
                src={e.img}
                alt=""
                className="h-full w-full object-cover transition-transform duration-image ease-linear group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0" style={{ background: 'var(--spark-scrim-exp)' }} />
              <div className="absolute inset-0 z-[2] flex flex-col justify-end p-[28px]">
                <div className="mb-[10px] text-[10px] font-medium uppercase tracking-[.24em] text-oak">
                  {e.n}
                </div>
                <h3 className="m-0 font-display text-[30px] font-bold leading-none tracking-[-.02em]">
                  {e.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- Philosophy ---------- */}
      <section id="philosophy" className="bg-neutral-900 py-[160px] text-paper">
        <div className="mx-auto max-w-wrap px-[64px]">
          <div className="grid grid-cols-2 items-center gap-[96px]">
            <div>
              <Label rule tone="oak" className="mb-[32px]">
                Philosophy
              </Label>
              <h2 className="m-0 mb-[32px] font-display text-[72px] font-bold leading-[.98] tracking-[-.025em]">
                Engineered for the way <em className="italic text-oak">modern</em> corporations
                present.
              </h2>
              <p className="m-0 mb-[24px] max-w-[48ch] text-[18px] leading-[1.6] text-[rgba(246,243,238,.78)]">
                A SPARK house is not a ballroom rented by the day. It is a permanent, pre-installed
                instrument — lit, tuned and crewed — waiting for your story.
              </p>
              <p className="m-0 mb-[24px] max-w-[48ch] text-[18px] leading-[1.6] text-[rgba(246,243,238,.78)]">
                Every surface is considered. Every camera angle pre-planned. Every second you save
                is engineered into the building.
              </p>
              <div className="mt-[24px] inline-flex items-center gap-[12px] rounded-pill border border-solid border-[rgba(198,168,122,.35)] px-[18px] py-[10px] text-[11px] font-medium uppercase tracking-[.22em] text-oak">
                <span aria-hidden="true" className="h-[6px] w-[6px] rounded-full bg-oak" />
                A SPARK house · founded 2024
              </div>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={upLedBroadcastUrl} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Journal ---------- */}
      <section id="journal" className="bg-paper py-[160px]">
        <div className="mx-auto max-w-wrap px-[64px]">
          <div className="mb-[64px] flex items-end justify-between gap-[40px]">
            <div>
              <Label rule tone="muted">
                Journal
              </Label>
              <h2 className="mb-0 mt-[20px] font-display text-[64px] font-bold leading-[.98] tracking-[-.025em]">
                From the <em className="italic text-oak-deep">house.</em>
              </h2>
            </div>
            <CollectionButton variant="outline-ink" href="#">
              All stories
            </CollectionButton>
          </div>
          <div className="grid grid-cols-4 gap-[24px]">
            {JOURNAL.map((p) => (
              <article key={p.title} className="group cursor-pointer">
                <div className="mb-[20px] aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={p.img}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-[1000ms] ease-linear group-hover:scale-[1.04]"
                  />
                </div>
                <div className="text-[10px] font-medium uppercase tracking-[.24em] text-oak-deep">
                  {p.tag}
                </div>
                <h4 className="mb-[8px] mt-[12px] font-display text-[22px] font-bold leading-[1.1] tracking-[-.015em]">
                  {p.title}
                </h4>
                <div className="text-[10px] font-medium uppercase tracking-[.2em] text-neutral-500">
                  {p.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Appointment ---------- */}
      <section id="appointment" className="bg-neutral-900 text-paper">
        <div className="grid min-h-[680px] grid-cols-2 items-stretch">
          <div className="relative overflow-hidden">
            <img
              src={upPropertyLoungeUrl}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-[80px] py-[120px]">
            <Label rule tone="oak" className="mb-[32px]">
              Private appointment
            </Label>
            <h2 className="m-0 mb-[32px] font-display text-[76px] font-bold leading-[.98] tracking-[-.028em]">
              Walk in.
              <br />
              <em className="italic text-oak">Go live.</em>
            </h2>
            <p className="m-0 mb-[40px] max-w-[50ch] text-[17px] leading-[1.6] text-[rgba(246,243,238,.78)]">
              Spend an hour at a SPARK house. See the stages lit for your use case, review
              available dates, and leave with a tailored proposal.
            </p>
            <div className="flex flex-wrap gap-[12px]">
              <CollectionButton variant="paper" href="#frankfurt">
                Request a proposal
              </CollectionButton>
              <CollectionButton variant="outline-paper" href="#frankfurt">
                Visit Frankfurt
              </CollectionButton>
            </div>
            <div className="mt-[48px] border-t border-solid border-[rgba(246,243,238,.14)] pt-[36px]">
              <div className="mb-[8px] text-[11px] font-medium uppercase tracking-[.22em] text-[rgba(246,243,238,.55)]">
                Reservations
              </div>
              <div className="font-display text-[28px] font-bold tracking-[-.01em] text-oak">
                Contact reservations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-neutral-900 pb-[40px] pt-[96px] text-paper">
        <div className="pb-[72px] text-center">
          <SparkLogo tone="paper" height={72} className="mx-auto opacity-95" />
        </div>
        <div className="mx-auto grid max-w-wrap grid-cols-5 gap-[48px] border-y border-solid border-[rgba(246,243,238,.1)] px-[64px] py-[56px]">
          {FOOTER_COLLECTION.map(([head, items]) => (
            <div key={head}>
              <h4 className="m-0 mb-[22px] font-body text-[11px] font-medium uppercase tracking-[.24em] text-oak">
                {head}
              </h4>
              <ul className="m-0 flex list-none flex-col gap-[12px] p-0 text-[13px] text-[rgba(246,243,238,.72)]">
                {items.map((i) => (
                  <li key={i}>
                    <a href="#" className="transition-colors duration-base hover:text-paper">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-[28px] flex max-w-wrap justify-between px-[64px] text-[11px] font-medium uppercase tracking-[.2em] text-[rgba(246,243,238,.45)]">
          <span>SPARK Places · The Collection</span>
          <span>© 2026 · Impressum · Datenschutz · AGB</span>
        </div>
      </footer>
    </div>
  );
}

/* ==========================================================================
   PAGE 2 — frankfurt.html · the house page
   ========================================================================== */

const HOUSE_NAV = [
  { label: '← The Collection', href: '#collection' },
  { label: 'Stages', href: '#stages' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Journal', href: '#stories' },
  { label: 'Offer', href: '#offer' },
];

const PROOF = ['Client 01', 'Client 02', 'Client 03', 'Client 04', 'Client 05', 'Client 06'];

const PILLARS = [
  {
    eye: '— 01 / Pillar',
    titleTop: 'Broadcast',
    titleEm: 'Event.',
    copy: 'Three pre-installed LED stages. Keynotes, launches, streamed capital-markets days — cinematic by default.',
    foot: 'Horizon · Liberty · Skyline',
    img: evAiwHorizonUrl,
    alt: 'Broadcast & Event',
  },
  {
    eye: '— 02 / Pillar',
    titleTop: 'Workshop',
    titleEm: 'Gathering.',
    copy: 'Six breakout rooms, a rooftop lounge and a 404 sqm terrace for strategy days, receptions and after-work.',
    foot: 'Club · Breakouts · Terrace',
    img: evOrtLoungeUrl,
    alt: 'Workshop & Gathering',
  },
];

const HOUSE_STAGES = [
  {
    idx: '01 / HORIZON',
    floor: 'Floor 4 · Broadcast',
    name: 'Horizon Stage',
    copy: 'Curved 30-metre LED wall for cinematic product launches, keynotes and streamed capital-markets days.',
    specs: [
      { b: '90', k: 'sqm LED' },
      { b: '30×3', k: 'curved m' },
      { b: '200', k: 'capacity' },
    ],
    img: evOrtSkylineUrl,
  },
  {
    idx: '02 / LIBERTY',
    floor: 'Floor 5 · Conference',
    name: 'Liberty Stage',
    copy: 'Flexible 400 sqm room with a 26 sqm LED backdrop — for townhalls, partner summits and multi-day conferences.',
    specs: [
      { b: '26', k: 'sqm LED' },
      { b: '9.2×2.8', k: 'flat m' },
      { b: '200', k: 'capacity' },
    ],
    img: evAiwPanelUrl,
  },
  {
    idx: '03 / SKYLINE',
    floor: 'Floor 6 · Reception',
    name: 'Skyline Club',
    copy: 'Award ceremonies, roadshows and after-work receptions. Direct access to the 404 sqm panoramic terrace.',
    specs: [
      { b: '30', k: 'sqm LED' },
      { b: '404', k: 'sqm terrace' },
      { b: '200', k: 'capacity' },
    ],
    img: evRedGalaUrl,
  },
];

const HOUSE_STORIES = [
  {
    wide: true,
    tag: 'CASE · INDUSTRY FORUM',
    title: 'A week of ideas, staged on Floor 4.',
    copy: 'How a professional community turned the stage into a multi-day keynote theatre with live streams and a full programme.',
    img: evAiwSpeakerUrl,
  },
  {
    wide: false,
    tag: 'CASE · BRAND SUMMIT',
    title: 'A brand brought to life.',
    copy: 'Brand leaders, a curated stage and a full LED backdrop for an immersive summit.',
    img: genericStoryImageUrl,
  },
  {
    wide: false,
    tag: 'CASE · AWARD GALA',
    title: 'A gala, without the ballroom.',
    copy: 'Cocktails on the Skyline Terrace, awards in the Club, encore with the city at your back.',
    img: evRedGalaUrl,
  },
];

const FOOTER_HOUSE: Array<[string, string[]]> = [
  ['Stages', ['Horizon', 'Liberty', 'Skyline', 'Breakouts']],
  ['Experiences', ['Broadcast', 'Conference', 'Launch', 'Reception']],
  ['House', ['Request a proposal', 'Press', 'Careers', 'Impressum']],
];

export function HouseFrankfurt() {
  return (
    <div
      data-screen-label="Homepage"
      className="min-w-[1280px] bg-paper font-body text-ink"
    >
      {/* ---------- Nav ---------- */}
      <nav
        className="sticky top-0 z-50 border-b border-solid backdrop-blur-[16px] backdrop-saturate-[1.2]"
        style={{
          background: 'var(--spark-veil-nav-house)',
          borderBottomColor: 'var(--spark-veil-nav-border)',
        }}
      >
        <div className="mx-auto flex max-w-wrap items-center gap-[32px] px-[56px] py-[18px]">
          <a href="#collection">
            <SparkLogo height={34} />
          </a>
          <ul className="m-0 ml-[32px] flex list-none gap-[28px] p-0 text-[13px] font-medium">
            {HOUSE_NAV.map((i) => (
              <li key={i.label}>
                <a href={i.href} className="text-neutral-700 hover:text-ink">
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex-1" />
          <div className="font-mono text-[11px] uppercase tracking-[.14em] text-neutral-500">
            Flagship venue · Germany
          </div>
          <HouseButton variant="bronze" href="#offer">
            Book a walkthrough
          </HouseButton>
        </div>
      </nav>

      {/* ---------- Hero ---------- */}
      <section
        data-screen-label="01 Hero"
        className="relative flex h-[760px] items-end overflow-hidden bg-ink text-paper"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${evOrtSkylineUrl})` }}
        >
          <div className="absolute inset-0" style={{ background: 'var(--spark-scrim-hero-house)' }} />
        </div>

        <div className="relative z-[2] mx-auto grid w-full max-w-wrap grid-cols-[1.5fr_1fr] items-end gap-[56px] px-[56px] pb-[64px]">
          <div>
            <Eye className="mb-[32px] text-oak">SPARK · Frankfurt CBD · Est. 2024</Eye>
            <h1 className="m-0 mb-[28px] font-display text-[128px] font-bold leading-[.9] tracking-[-.035em]">
              Every business
              <br />
              needs a <em className="italic text-oak">SPARK.</em>
            </h1>
            <p className="m-0 mb-[32px] max-w-[50ch] text-[18px] leading-[1.5] text-neutral-200">
              Three pre-installed LED stages, a rooftop lounge and a terrace in the tower at
              A flagship venue. Plug-and-play, full-service, walk in and go live.
            </p>
            <div className="flex flex-wrap gap-[10px]">
              <HouseButton variant="bronze" href="#stages">
                Reserve a stage
              </HouseButton>
              <HouseButton variant="ghost" href="#pillars" className="text-paper">
                Discover SPARK
              </HouseButton>
            </div>
          </div>

          <div className="border-t border-solid border-[rgba(246,243,238,.18)] pt-[20px]">
            <div className="mb-[8px] font-mono text-[10px] uppercase tracking-[.22em] text-[rgba(246,243,238,.55)]">
              — Pre-installed on site
            </div>
            <div className="mb-[10px] font-display text-[44px] font-bold leading-none tracking-[-.02em]">
              150 sqm
            </div>
            <div className="max-w-[26ch] text-[13px] leading-[1.5] text-neutral-300">
              of LED wall surface across three stages. Nothing to ship. Nothing to build.
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Proof ---------- */}
      <section className="border-t border-solid border-[rgba(246,243,238,.08)] bg-ink py-[28px] text-neutral-300">
        <div className="mx-auto flex max-w-wrap items-center gap-[56px] px-[56px]">
          <div className="shrink-0 font-mono text-[11px] uppercase tracking-[.22em] text-oak">
            — Trusted by
          </div>
          <div className="flex flex-1 gap-[44px] font-display text-[18px] font-bold tracking-[.005em] opacity-75">
            {PROOF.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="mx-auto max-w-wrap px-[56px] pb-[100px] pt-[120px]">
        <div className="grid grid-cols-[1fr_1.6fr] items-start gap-[80px]">
          <div>
            <Eye className="text-neutral-500">— The idea</Eye>
          </div>
          <div>
            <div className="mb-[20px] h-px w-[56px] bg-oak" />
            <h2 className="mt-[28px] font-display text-[72px] font-bold leading-[.96] tracking-[-.028em]">
              A premium address for <em className="italic text-oak-deep">cinematic</em> corporate
              moments.
            </h2>
            <p className="mt-[24px] max-w-[56ch] text-[21px] leading-[1.5] text-neutral-700">
              SPARK is not a rental hall. It is a system of curated stages inside one of
              Frankfurt&rsquo;s most distinguished addresses — engineered for the way modern
              corporations present, broadcast and gather.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Two pillars ---------- */}
      <section id="pillars" className="mx-auto max-w-wrap px-[56px]">
        <div className="grid grid-cols-2 gap-[24px] pb-[120px]">
          {PILLARS.map((p) => (
            <a
              key={p.titleTop}
              href="#stages"
              className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-[6px] bg-ink text-paper"
            >
              <img
                src={p.img}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-[800ms] ease-linear group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0" style={{ background: 'var(--spark-scrim-pillar)' }} />
              <div className="absolute inset-0 z-[2] flex flex-col justify-between p-[48px]">
                <Eye className="text-oak">{p.eye}</Eye>
                <div>
                  <h3 className="m-0 mb-[16px] font-display text-[72px] font-bold leading-[.95] tracking-[-.03em]">
                    {p.titleTop}
                    <br />
                    &amp; <em className="italic text-oak">{p.titleEm}</em>
                  </h3>
                  <p className="m-0 mb-[28px] max-w-[42ch] text-[15px] leading-[1.5] text-neutral-200">
                    {p.copy}
                  </p>
                  <div className="flex items-center justify-between border-t border-solid border-[rgba(246,243,238,.2)] pt-[20px] font-mono text-[11px] uppercase tracking-[.16em] text-[rgba(246,243,238,.7)]">
                    <span>{p.foot}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- Stages ---------- */}
      <section id="stages" className="bg-ink py-[120px] text-paper">
        <div className="mx-auto max-w-wrap px-[56px]">
          <div className="mb-[56px] grid grid-cols-[1fr_1.2fr] items-end gap-[80px]">
            <Eye className="mb-[16px] text-oak">— 03 / Stages</Eye>
            <div>
              <h2 className="font-display text-[72px] font-bold leading-[.96] tracking-[-.028em]">
                Three <em className="italic text-oak">stages.</em>
                <br />
                One address.
              </h2>
              <p className="mt-[24px] max-w-[50ch] text-[17px] leading-[1.55] text-neutral-300">
                Each stage is a pre-installed LED instrument. Choose the light, the scale, and the
                story — we handle the rest.
              </p>
            </div>
          </div>

          {HOUSE_STAGES.map((s, i) => (
            <a
              key={s.idx}
              href="#offer"
              className={cx(
                'group grid cursor-pointer grid-cols-[120px_1.3fr_1.5fr] items-center gap-[40px]',
                'border-t border-solid border-[rgba(246,243,238,.12)] py-[40px] transition-colors duration-card',
                i === HOUSE_STAGES.length - 1 && 'border-b',
              )}
            >
              <div className="font-mono text-[11px] tracking-[.22em] text-oak">{s.idx}</div>

              <div>
                <div className="mb-[10px] font-mono text-[11px] uppercase tracking-[.16em] text-[rgba(246,243,238,.55)]">
                  {s.floor}
                </div>
                <h3 className="m-0 mb-[14px] font-display text-[52px] font-bold leading-[.95] tracking-[-.025em]">
                  {s.name}
                </h3>
                <p className="m-0 mb-[18px] max-w-[40ch] text-[14px] leading-[1.55] text-neutral-300">
                  {s.copy}
                </p>
                <div className="flex gap-[32px]">
                  {s.specs.map((sp) => (
                    <div
                      key={sp.k}
                      className="font-mono text-[10px] uppercase tracking-[.1em] text-[rgba(246,243,238,.7)]"
                    >
                      <b className="mb-[2px] block font-display text-[22px] font-bold normal-case tracking-[-.01em] text-oak">
                        {sp.b}
                      </b>
                      {sp.k}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-full w-full object-cover transition-transform duration-[600ms] ease-linear group-hover:scale-[1.04]"
                />
                <div className="absolute bottom-[14px] right-[14px] flex h-[48px] w-[48px] items-center justify-center rounded-pill bg-oak text-[16px] text-ink">
                  →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- Stories ---------- */}
      <section id="stories" className="mx-auto max-w-wrap px-[56px] py-[120px]">
        <div className="mb-[48px] flex items-end justify-between gap-[40px]">
          <div>
            <Eye className="text-neutral-500">— 04 / Stories</Eye>
            <h2 className="mt-[20px] font-display text-[72px] font-bold leading-[.96] tracking-[-.028em]">
              From the <em className="italic text-oak">house.</em>
            </h2>
          </div>
          <HouseButton variant="ghost" href="#" className="border-ink text-ink">
            All stories
          </HouseButton>
        </div>

        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-[24px]">
          {HOUSE_STORIES.map((s) => (
            <article key={s.title} className="group cursor-pointer">
              <div className="mb-[20px] aspect-[4/5] overflow-hidden rounded-md">
                <img
                  src={s.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[600ms] ease-linear group-hover:scale-[1.03]"
                />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[.22em] text-oak-deep">
                {s.tag}
              </div>
              <h3
                className={cx(
                  'mb-[8px] mt-[12px] font-display font-bold leading-none tracking-[-.02em]',
                  s.wide ? 'text-[40px]' : 'text-[30px]',
                )}
              >
                {s.title}
              </h3>
              <p className="m-0 max-w-[36ch] text-[14px] leading-[1.55] text-neutral-600">
                {s.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section id="offer" className="relative overflow-hidden bg-ink py-[120px] text-paper">
        <div className="absolute inset-0" style={{ background: 'var(--spark-scrim-cta-house)' }} />
        <div className="relative mx-auto max-w-[900px] px-[56px] text-center">
          <Eye ruleAfter className="mb-[28px] justify-center text-oak">
            Private walkthrough
          </Eye>
          <h2 className="m-0 mb-[24px] font-display text-[88px] font-bold leading-[.95] tracking-[-.03em]">
            Walk in. <em className="italic text-oak">Go live.</em>
          </h2>
          <p className="mx-auto mb-[36px] max-w-[52ch] text-[18px] leading-[1.55] text-neutral-300">
            Spend an hour with our director of venues. See the stages lit for your use case, review
            available dates, and leave with a tailored proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-[10px]">
            <HouseButton variant="bronze" href="#offer">
              Request a private proposal
            </HouseButton>
            <HouseButton variant="ghost" href="#" className="border-paper text-paper">
              Contact reservations
            </HouseButton>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-solid border-[rgba(246,243,238,.08)] bg-ink pb-[36px] pt-[64px] text-paper">
        <div className="mx-auto grid max-w-wrap grid-cols-[1.5fr_1fr_1fr_1fr] gap-[56px] border-b border-solid border-[rgba(246,243,238,.1)] px-[56px] pb-[40px]">
          <div>
            <SparkLogo tone="paper" height={22} className="mb-[20px]" />
            <p className="m-0 max-w-[30ch] text-[13px] leading-[1.55] text-neutral-300">
              Premium event &amp; broadcast spaces in a central European location.
            </p>
          </div>
          {FOOTER_HOUSE.map(([head, items]) => (
            <div key={head}>
              <h4 className="m-0 mb-[16px] font-body text-[11px] font-medium uppercase tracking-[.2em] text-oak">
                {head}
              </h4>
              <ul className="m-0 flex list-none flex-col gap-[10px] p-0 text-[13px] text-neutral-300">
                {items.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-paper">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-[24px] flex max-w-wrap justify-between px-[56px] font-mono text-[10px] uppercase tracking-[.14em] text-neutral-500">
          <span>SPARK · FLAGSHIP VENUE · GERMANY</span>
          <span>© 2026 · Sample address · 00000 Sample City</span>
        </div>
      </footer>
    </div>
  );
}

/* ==========================================================================
   The collection, switchable
   ========================================================================== */

export type WebsitePage = 'collection' | 'frankfurt';

export function WebsiteCollection({ page = 'collection' }: { page?: WebsitePage }) {
  return page === 'frankfurt' ? <HouseFrankfurt /> : <CollectionHomepage />;
}

/** The hero zoom keyframe from index.html. Mounted once by the page shell. */
export const heroZoomKeyframes = `
@keyframes sparkHeroZoom {
  from { transform: scale(1); }
  to   { transform: scale(1.07); }
}`;

export default WebsiteCollection;
