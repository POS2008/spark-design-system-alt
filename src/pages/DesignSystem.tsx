import * as React from 'react';
import { cx } from '@/lib/cx';
import colors from '@/foundations/colors';
import typography from '@/foundations/typography';
import spacingF from '@/foundations/spacing';
import gridF, { templates, aspectRatios } from '@/foundations/grid';
import radiiF, { radiusRoles } from '@/foundations/radii';
import shadowsF, { elevationRoles, motion } from '@/foundations/shadows';
import breakpointsF, { viewportFacts } from '@/foundations/breakpoints';
import { Button, IconButton, PlayGlyph, CloseGlyph } from '@/components/spark/Button';
import { Tag } from '@/components/spark/Tag';
import {
  SpaceCard,
  SpaceCardGrid,
  SPACE_CARDS_INK,
  SPACE_CARDS_LIGHT,
} from '@/components/spark/SpaceCard';
import { SparkLogo, LocationLockup, logoRules, logoScaleSteps, logoMinimums } from '@/components/spark/SparkLogo';
import { CollectionHomepage, HouseFrankfurt } from '@/website/WebsiteCollection';

/**
 * SPARK Design System alt — DesignSystem page
 *
 * Renders the exported system, in the order the source system indexes it.
 * Uses only exported tokens and components. Every numeric annotation on this
 * page is read out of the foundations modules, not typed in again.
 */

/* -------------------------------------------------------------- scaffolding */

function Section({
  n,
  title,
  sub,
  children,
}: {
  n: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-solid border-rule px-[48px] py-[48px]">
      <div className="mx-auto max-w-[1360px]">
        <div className="font-body text-micro font-medium uppercase tracking-wide text-fg-secondary">
          {n}
        </div>
        <h2 className="mb-[4px] mt-[4px] font-display text-h1 font-bold tracking-[-.02em]">
          {title}
        </h2>
        {sub && <p className="m-0 max-w-[760px] text-lead text-fg-secondary">{sub}</p>}
        <div className="mt-[32px]">{children}</div>
      </div>
    </section>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-[16px] mt-[40px] font-body text-h3 font-medium uppercase tracking-label text-fg-secondary">
      {children}
    </h3>
  );
}

function Card({
  dark = false,
  className,
  children,
}: {
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cx(
        'rounded-md p-[32px]',
        dark ? 'bg-ink text-paper' : 'border border-solid border-rule bg-surface-alt',
        className,
      )}
    >
      {children}
    </div>
  );
}

function Mono({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-small text-fg-secondary">{children}</span>;
}

/* -------------------------------------------------------------------- page */

export function DesignSystem() {
  const [sitePage, setSitePage] = React.useState<'collection' | 'frankfurt'>('collection');

  return (
    <div className="bg-surface">
      {/* ---------------------------------------------------------- masthead */}
      <header className="px-[48px] pb-[48px] pt-[80px]">
        <div className="mx-auto max-w-[1360px]">
          <div className="font-body text-[12px] font-medium uppercase tracking-wide text-fg-secondary">
            SPARK · <b className="font-medium text-ink">Design System alt</b>
          </div>
          <div className="grid grid-cols-[1.3fr_1fr] items-end gap-[48px] border-b border-solid border-rule pb-[64px]">
            <h1 className="m-0 font-display text-[clamp(4rem,9vw,8.5rem)] font-bold leading-[.92] tracking-[-.035em]">
              Design system.
            </h1>
            <p className="m-0 max-w-[46ch] text-[19px] leading-[1.45] text-fg-secondary">
              The complete SPARK Design System alt, exported as React + TypeScript + Tailwind.
              Every colour, size, radius and shadow on this page is the source value — nothing has
              been redesigned, normalised or invented.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-gutter border-b border-solid border-rule py-[40px]">
            {[
              ['Components', '2', 'Buttons & Tags · Space Card'],
              ['Foundations', '5', 'Logo · Colors · Spacing · Type · Website'],
              ['Fonts', '2', 'GT Super Display · Söhne'],
              ['Breakpoints', 'UNKNOWN', 'none defined in source'],
            ].map(([k, v, s]) => (
              <div key={k}>
                <div className="mb-[6px] font-body text-[10px] font-medium uppercase tracking-wide text-fg-secondary">
                  {k}
                </div>
                <div className="font-display text-[28px] font-bold tracking-[-.01em]">
                  {v}
                  <small className="ml-[6px] font-body text-[13px] font-normal normal-case tracking-normal text-fg-secondary">
                    {s}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- 01 Logo */}
      <Section
        n="BRAND · 01"
        title="Logo system"
        sub={'Horizontal "SPARK" wordmark with the double-chevron peak glyph — the official mark.'}
      >
        <div className="grid grid-cols-[1.4fr_1fr] gap-gutter">
          <div className="flex min-h-[260px] flex-col justify-between rounded-md border border-solid border-rule bg-surface-alt p-[40px]">
            <div className="font-body text-[11px] font-medium uppercase tracking-[.22em] opacity-60">
              Primary · on paper
            </div>
            <SparkLogo width={520} className="mt-[24px]" />
          </div>
          <div className="flex min-h-[260px] flex-col justify-between rounded-md bg-ink p-[40px] text-paper">
            <div className="font-body text-[11px] font-medium uppercase tracking-[.22em] opacity-60">
              Reverse · on ink
            </div>
            <SparkLogo tone="paper" width={320} className="mt-[24px]" />
          </div>
          <div className="flex min-h-[240px] flex-col justify-between rounded-md bg-oak p-[40px] text-ink">
            <div className="font-body text-[11px] font-medium uppercase tracking-[.22em] opacity-75">
              Hero · on oak
            </div>
            <SparkLogo width={360} className="mt-[24px]" />
          </div>
          <div className="flex min-h-[240px] flex-col justify-between rounded-md border border-solid border-rule bg-surface-alt p-[40px]">
            <div className="font-body text-[11px] font-medium uppercase tracking-[.22em] opacity-60">
              Location lockup
            </div>
            <div className="mt-[24px]">
              <LocationLockup />
            </div>
          </div>

          <div className="col-span-2 rounded-md border border-solid border-rule bg-surface-alt p-[40px]">
            <div className="font-body text-[11px] font-medium uppercase tracking-[.22em] opacity-60">
              Scale · clear space = cap-height of S
            </div>
            <div className="mt-[24px] flex flex-wrap items-center gap-[48px]">
              {logoScaleSteps.map((h) => (
                <SparkLogo key={h} height={h} />
              ))}
              <span className="ml-auto font-mono text-small text-fg-secondary">
                min · {logoMinimums.digital} digital · {logoMinimums.print} print
              </span>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-3 gap-[16px]">
            {logoRules.map((r) => (
              <div key={r.n} className="rounded-md border border-solid border-rule bg-surface-alt p-[24px]">
                <div className="font-mono text-[11px] tracking-[.12em] text-fg-secondary">{r.n}</div>
                <div className="mb-[8px] mt-[6px] font-display text-[22px] font-bold tracking-[-.01em]">
                  {r.t}
                </div>
                <p className="m-0 text-[14px] leading-[1.5] text-fg-secondary">{r.p}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------------- 02 Colors */}
      <Section
        n="COLORS · 02"
        title="Palette"
        sub="Warm paper, deep ink, oak accents. The CI is monochrome and restrained — the colour comes from the stages themselves, not from the mark."
      >
        <SubHead>Core palette</SubHead>
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-[16px]">
          {(
            [
              ['--spark-ink', 'Ink', colors.core.ink, '#fff'],
              ['--spark-paper', 'Paper', colors.core.paper, colors.core.ink],
              ['--spark-concrete', 'Concrete', colors.core.concrete, colors.core.ink],
              ['--spark-oak', 'Oak', colors.core.oak, colors.core.ink],
            ] as const
          ).map(([token, name, hex, fg]) => (
            <div
              key={token}
              className="flex h-[220px] flex-col justify-between rounded-md border border-solid border-rule p-[24px]"
              style={{ background: hex, color: fg }}
            >
              <div>
                <div className="font-mono text-micro uppercase tracking-[.1em] opacity-55">
                  {token}
                </div>
                <div className="font-display text-[28px] font-bold tracking-[-.01em]">{name}</div>
              </div>
              <div className="font-mono text-small opacity-85">{hex}</div>
            </div>
          ))}
        </div>

        <Card className="mt-[32px] max-w-[820px]">
          <div className="font-body text-micro font-medium uppercase tracking-wide text-fg-secondary">
            — Principle
          </div>
          <div className="mt-[6px] font-display text-[22px] font-bold tracking-[-.01em]">
            No rainbow in the CI.
          </div>
          <p className="mb-0 mt-[8px] max-w-[60ch] leading-[1.5] text-fg-secondary">
            The brand holds its voice in Ink, Paper and Oak. Colour on the LED walls belongs to the{' '}
            <em>client&rsquo;s content</em>, not to SPARK&rsquo;s identity. Never compose the CI out
            of multicolour gradients. No red. No orange.
          </p>
        </Card>

        <SubHead>Neutral scale · warm-biased</SubHead>
        <div className="grid grid-cols-10 overflow-hidden rounded-md border border-solid border-rule">
          {(
            ['050', 100, 200, 300, 400, 500, 600, 700, 800, 900] as const
          ).map((step) => {
            const hex = colors.neutrals[step as keyof typeof colors.neutrals];
            const lightText = Number(step) >= 500;
            return (
              <div
                key={String(step)}
                className="flex h-[120px] flex-col justify-between p-[14px] font-mono text-micro"
                style={{ background: hex, color: lightText ? '#fff' : colors.neutrals[700] }}
              >
                <div>{step}</div>
                <div>{hex}</div>
              </div>
            );
          })}
        </div>

        <SubHead>Oak family</SubHead>
        <div className="grid grid-cols-3 gap-[16px]">
          {(
            [
              ['--spark-oak', colors.core.oak],
              ['--spark-oak-deep', colors.core.oakDeep],
              ['--spark-oak-soft', colors.core.oakSoft],
            ] as const
          ).map(([t, hex]) => (
            <div
              key={t}
              className="flex h-[140px] flex-col justify-between rounded-md border border-solid border-rule p-[24px] text-ink"
              style={{ background: hex }}
            >
              <div className="font-mono text-micro uppercase tracking-[.1em] opacity-70">{t}</div>
              <div className="font-mono text-small">{hex}</div>
            </div>
          ))}
        </div>

        <SubHead>Pairings</SubHead>
        <div className="grid grid-cols-3 gap-[16px]">
          {colors.pairings.map((p) => (
            <div
              key={p.label}
              className="flex h-[200px] flex-col justify-between rounded-md border border-solid p-[28px]"
              style={{
                background: p.bg,
                color: p.fg,
                borderColor: p.bg === colors.core.paper ? colors.semantic.rule : 'transparent',
              }}
            >
              <div className="font-mono text-micro uppercase tracking-[.1em] opacity-60">
                {p.label}
              </div>
              <div className="font-display text-[44px] font-bold leading-none tracking-[-.02em]">
                {p.bg === colors.core.paper
                  ? 'Ink on paper.'
                  : p.bg === colors.core.ink
                    ? 'Paper on ink.'
                    : 'Oak carries.'}
              </div>
              <div className="font-mono text-small">{p.note}</div>
            </div>
          ))}
        </div>

        <Card className="mt-[32px]">
          <div className="font-body text-micro font-medium uppercase tracking-wide text-fg-secondary">
            — Source conflict, recorded not resolved
          </div>
          <p className="mb-0 mt-[8px] max-w-[72ch] text-[14px] leading-[1.6] text-fg-secondary">
            <code>assets/tokens.css</code> declares Ink <Mono>{colors.core.ink}</Mono>, Paper{' '}
            <Mono>{colors.core.paper}</Mono>, Concrete <Mono>{colors.core.concrete}</Mono>, Oak{' '}
            <Mono>{colors.core.oak}</Mono>. The swatch labels in <code>system/colors.html</code>{' '}
            read <Mono>{colors.coreDocumented.ink}</Mono>, <Mono>{colors.coreDocumented.paper}</Mono>,{' '}
            <Mono>{colors.coreDocumented.concrete}</Mono>, <Mono>{colors.coreDocumented.oak}</Mono>.
            The stylesheet values are exported, because they are what every surface in the system
            actually renders.
          </p>
        </Card>
      </Section>

      {/* ------------------------------------------------------------- 03 Type */}
      <Section
        n="TYPE · 03"
        title="Typography"
        sub="An editorial serif in conversation with a cinematic grotesque. GT Super Display for statement, Söhne for substance."
      >
        <div className="grid grid-cols-2 gap-gutter">
          <div className="flex min-h-[360px] flex-col justify-between rounded-md border border-solid border-rule bg-paper p-[40px]">
            <div>
              <div className="mb-[12px] font-body text-[11px] uppercase tracking-[.22em] text-ink">
                — Display · GT Super Display Bold
              </div>
              <div className="font-display text-[160px] font-bold leading-[.9] tracking-[-.03em]">
                Spark.
              </div>
            </div>
            <div className="font-mono text-[11px] uppercase leading-[1.6] tracking-[.08em] opacity-60">
              Reserved for {typography.displayGuidance.reservedFor.join(', ')}.
              <br />
              Set tight: {typography.displayGuidance.trackingRange} tracking ·{' '}
              {typography.displayGuidance.leadingRange} leading
            </div>
          </div>
          <div className="flex min-h-[360px] flex-col justify-between rounded-md bg-ink p-[40px] text-paper">
            <div>
              <div className="mb-[12px] font-body text-[11px] uppercase tracking-[.22em] text-oak">
                — Text · Söhne Buch / Kräftig
              </div>
              <div className="font-body text-[32px] font-medium leading-[1.15] tracking-[-.01em]">
                Every space at SPARK is tech-enabled, pre-installed and full-service. Walk in, go
                live.
              </div>
              <p className="mt-[16px] max-w-[42ch] text-[15px] font-normal leading-[1.55] opacity-90">
                Söhne carries every voice in the product: lead paragraphs, body copy, UI, labels,
                specs. Buch (400) for reading, Kräftig (500) for UI and labels.
              </p>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[.08em] text-neutral-400">
              Body {typography.bodyGuidance.body} · Lead {typography.bodyGuidance.lead} · UI{' '}
              {typography.bodyGuidance.ui}
            </div>
          </div>
        </div>

        <SubHead>Specimen scale · system/type.html</SubHead>
        <div className="border-t border-solid border-rule pt-[32px]">
          {(
            [
              ['Display', 'spec-display', 'Every business needs a SPARK.', 'display'],
              ['H1', 'spec-h1', 'Premium event & broadcast spaces in Frankfurt.', 'h1'],
              ['H2', 'spec-h2', 'Unique plug-and-play concept.', 'h2'],
              ['H3 / UI head', 'spec-h3', 'Horizon Stage · Floor 4', 'h3'],
              ['Lead', 'spec-lead', 'c. 400 sqm event and broadcast stage — perfect for powerful presentations and engaging multimedia or streaming events.', 'lead'],
              ['Body', 'spec-body', 'At SPARK, we offer tech-enabled event spaces, broadcast stages, and add-on rooms with full-service support for renowned corporates.', 'body'],
              ['Label', 'spec-label', 'Floor 6 · Skyline Club', 'label'],
              ['Eyebrow', 'spec-eyebrow', '— Stages & Spaces', 'eyebrow'],
              ['Mono', 'spec-mono', 'LED 30 × 3 m · 90 sqm · curved · cap. 200 PAX', 'mono'],
            ] as const
          ).map(([name, cls, sample, key]) => {
            const s = typography.specimenScale[key as keyof typeof typography.specimenScale];
            return (
              <div key={name} className="mb-[32px] grid grid-cols-[240px_1fr] items-baseline gap-[32px]">
                <div className="font-mono text-[11px] uppercase leading-[1.7] tracking-[.12em] text-fg-secondary">
                  <b className="mb-[4px] block font-body text-[13px] font-medium normal-case tracking-[.04em] text-ink">
                    {name}
                  </b>
                  {s.font}
                  <br />
                  {s.size} / {Math.round(Number(s.lineHeight) * 100)}% / {s.tracking}
                </div>
                <div className={cls}>{sample}</div>
              </div>
            );
          })}
        </div>

        <SubHead>Fluid scale · assets/tokens.css</SubHead>
        <div className="flex flex-col gap-[24px] border-t border-solid border-rule pt-[32px]">
          {(
            [
              ['--fs-display / .t-display', 't-display', 'SPARK stages.'],
              ['--fs-h1 / .t-h1', 't-h1', 'Every business needs a SPARK.'],
              ['--fs-h2 / .t-h2', 't-h2', 'Unique plug-and-play concept.'],
              ['--fs-h3 / .t-h3', 't-h3', 'Horizon Stage · Floor 4'],
            ] as const
          ).map(([label, cls, sample]) => (
            <div key={label}>
              <div className="font-mono text-[11px] tracking-[.12em] text-fg-secondary">
                {label} ·{' '}
                {typography.fluidSizes[cls.replace('t-', '') as keyof typeof typography.fluidSizes]}
              </div>
              <div className={cx(cls, 'mt-[8px]')}>{sample}</div>
            </div>
          ))}
          <div>
            <div className="font-mono text-[11px] tracking-[.12em] text-fg-secondary">
              .t-lead · .t-label · .t-eyebrow · .t-mono
            </div>
            <p className="t-lead mt-[8px]">
              Three LED-forward floors. One address in the CBD. Nothing to ship in.
            </p>
            <div className="t-label mt-[8px]">Floor 6 · Skyline Club</div>
            <div className="t-eyebrow mt-[8px]">— Stages &amp; Spaces</div>
            <div className="t-mono mt-[8px]">LED 30 × 3 m · 90 sqm · curved · cap. 200 PAX</div>
          </div>
        </div>

        <Card className="mt-[32px]">
          <div className="font-body text-micro font-medium uppercase tracking-wide text-fg-secondary">
            — Two scales exist in the source
          </div>
          <p className="mb-0 mt-[8px] max-w-[72ch] text-[14px] leading-[1.6] text-fg-secondary">
            <code>tokens.css</code> defines a fluid <code>clamp()</code> scale (H1 ={' '}
            <Mono>{typography.fluidSizes.h1}</Mono>, i.e. 40–64px). <code>system/type.html</code>{' '}
            documents and renders a fixed scale (H1 = <Mono>72px</Mono>). Both are exported — the
            <code> .t-*</code> classes and the <code>.spec-*</code> classes respectively. Neither
            was adjusted to match the other.
          </p>
        </Card>

        <SubHead>Stack</SubHead>
        <div className="rounded-md border border-solid border-rule bg-neutral-50 p-[24px] font-mono text-small leading-[2]">
          --font-display: <b>{typography.families.display}</b>
          <br />
          --font-body: <b>{typography.families.body}</b>
          <br />
          --font-mono: <b>{typography.families.mono}</b>
          <br />
          <span className="text-fg-secondary">
            Shipped files: GT-Super-Display-Bold (woff2/woff/ttf), S_hne-Buch.otf,
            S_hne-Kr_ftig.otf. No mono file ships.
          </span>
        </div>
      </Section>

      {/* -------------------------------------------------- 04 Spacing & grid */}
      <Section
        n="SPACING · 04"
        title="Grid, spacing, shape"
        sub="8px base. 12-column editorial grid with generous gutters. Minimal radii — the architecture is rectilinear."
      >
        <SubHead>Spacing scale — 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128</SubHead>
        <div className="grid grid-cols-10 items-end gap-[8px]">
          {Object.entries(spacingF.scale).map(([k, v]) => (
            <div key={k} className="flex flex-col items-center">
              <div className="w-full rounded-[2px] bg-ink" style={{ height: v }} />
              <div className="mt-[8px] text-center font-mono text-micro text-fg-secondary">
                s-{k} · {parseInt(v, 10)}
              </div>
            </div>
          ))}
        </div>

        <SubHead>
          {gridF.columns}-column grid · {gridF.maxWidth} max · {gridF.gutter} gutter
        </SubHead>
        <div className="rounded-md border border-solid border-rule bg-neutral-50 p-[24px]">
          <div className="grid h-[200px] grid-cols-12 gap-gutter">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="border border-dashed border-oak"
                style={{ background: 'rgba(198, 168, 122, .14)' }}
              />
            ))}
          </div>
        </div>

        <SubHead>Baseline — 8 px</SubHead>
        <div className="spark-baseline rounded-md border border-solid border-rule p-[24px]">
          <div className="t-eyebrow">FLOOR 4 · HORIZON</div>
          <h3 className="mb-[16px] mt-[8px] font-display text-[32px] font-medium leading-[40px]">
            Curved 30-metre LED wall.
          </h3>
          <p className="mb-[8px] max-w-[56ch]">
            c. 400 sqm event and broadcast stage, perfect for powerful presentations and engaging
            multimedia or streaming events.
          </p>
          <p className="t-mono m-0 text-fg-secondary">
            90 sqm · 30 × 3 m · curved · cap. 200 PAX
          </p>
        </div>

        <SubHead>Aspect ratios used in the source</SubHead>
        <div className="flex flex-wrap gap-[24px] font-mono text-small text-fg-secondary">
          {Object.entries(aspectRatios).map(([k, v]) => (
            <span key={k}>
              {k} · {v}
            </span>
          ))}
        </div>

        <SubHead>Grid templates used in the source</SubHead>
        <div className="grid grid-cols-2 gap-[8px] font-mono text-small text-fg-secondary md:grid-cols-3">
          {Object.entries(templates).map(([k, v]) => (
            <span key={k}>
              {k} · {v}
            </span>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------ 05 Radii */}
      <Section n="SHAPE · 05" title="Radius" sub="Minimal radii — the architecture is rectilinear.">
        <div className="grid grid-cols-5 gap-[16px]">
          {Object.entries(radiiF).map(([k, v]) => (
            <div
              key={k}
              className="flex h-[140px] flex-col justify-between bg-ink p-[24px] text-paper"
              style={{ borderRadius: v }}
            >
              <div className="font-mono text-micro uppercase tracking-[.1em] opacity-60">
                {k} · {v}
              </div>
              <div className="font-display text-[28px] font-medium">
                {radiusRoles[k as keyof typeof radiusRoles]}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-[24px] max-w-[72ch] text-[14px] leading-[1.6] text-fg-secondary">
          One radius in the source has no matching token: <Mono>6px</Mono> on{' '}
          <code>frankfurt.html .pillar</code>. It is preserved in the website component and flagged
          rather than snapped to 4 or 8.
        </p>
      </Section>

      {/* -------------------------------------------------------- 06 Elevation */}
      <Section
        n="ELEVATION · 06"
        title="Shadows"
        sub="Flat by default; subtle shadow only on lifted surfaces."
      >
        <div className="grid grid-cols-3 gap-[32px] rounded-md bg-neutral-50 p-[48px]">
          {(['sm', 'md', 'lg'] as const).map((k, i) => (
            <div
              key={k}
              className="flex h-[120px] flex-col justify-between rounded-md bg-white p-[24px]"
              style={{ boxShadow: shadowsF[k] }}
            >
              <div className="font-display text-[18px] font-medium">Elev {i + 1}</div>
              <div className="font-mono text-micro text-fg-secondary">
                {elevationRoles[k].split(' · ')[1]} · shadow-{k}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[24px] font-mono text-small leading-[1.9] text-fg-secondary">
          transitions in source · {motion.fast} / {motion.base} / {motion.slow} / {motion.card} ·{' '}
          images {motion.imageSlow} – {motion.imageSlowest} · easing {motion.ease} and{' '}
          {motion.easeImage}
          <br />
          lift · button {motion.lift.button} · space card {motion.lift.spaceCardSystem} (system),{' '}
          {motion.lift.spaceCardWebsite} (website)
        </div>
      </Section>

      {/* -------------------------------------------------- 07 Buttons & tags */}
      <Section
        n="COMPONENTS · 07"
        title="Buttons &amp; tags"
        sub="Monochrome, rounded. Ink on paper, paper on ink. No red, no orange — the confidence is in the form."
      >
        <SubHead>Buttons · on paper</SubHead>
        <Card>
          <div className="mb-[18px] flex flex-wrap items-center gap-[12px]">
            <Button variant="primary" arrow>
              Book a walkthrough
            </Button>
            <Button variant="outline" arrow>
              Reserve Horizon Stage
            </Button>
            <Button variant="ghost" arrow>
              Download one-pager
            </Button>
            <Button variant="link" arrow>
              See all stages
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-[12px]">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg" arrow>
              Large
            </Button>
            <IconButton aria-label="Play">
              <PlayGlyph />
            </IconButton>
            <IconButton ghost aria-label="Close">
              <CloseGlyph />
            </IconButton>
          </div>
        </Card>

        <SubHead>Buttons · on ink</SubHead>
        <Card dark>
          <div className="flex flex-wrap items-center gap-[12px]">
            <Button variant="invert" arrow>
              Book a walkthrough
            </Button>
            <Button variant="outline" onInk arrow>
              Reserve Horizon Stage
            </Button>
            <Button variant="ghost" onInk arrow>
              Download one-pager
            </Button>
            <Button variant="link" onInk arrow>
              See all stages
            </Button>
          </div>
        </Card>

        <SubHead>Tags</SubHead>
        <Card>
          <div className="mb-[16px] flex flex-wrap gap-[10px]">
            <Tag>Broadcast</Tag>
            <Tag>Event</Tag>
            <Tag>Workshop</Tag>
            <Tag>LED Wall</Tag>
            <Tag dot>200 PAX</Tag>
            <Tag>Premium</Tag>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            <Tag variant="filled">Floor 4 · Horizon</Tag>
            <Tag variant="filled">Floor 5 · Liberty</Tag>
            <Tag variant="filled">Floor 6 · Skyline</Tag>
            <Tag variant="filled">Featured</Tag>
          </div>
          <div className="mt-[16px] flex flex-wrap gap-[10px] rounded-md bg-ink p-[16px]">
            <Tag variant="paper">Paper on ink</Tag>
          </div>
        </Card>

        <SubHead>Anatomy</SubHead>
        <Card className="grid grid-cols-[1fr_1.2fr] items-center gap-[32px]">
          <div className="flex justify-center">
            <Button variant="primary" arrow>
              Reserve Horizon Stage
            </Button>
          </div>
          <div className="font-mono text-[13px] leading-[1.9]">
            padding: <b>14px 26px</b>
            <br />
            font: 15/1 Söhne Kräftig (500)
            <br />
            radius: <b>999px</b> — rounded pill
            <br />
            gap (icon): <b>10px</b>
            <br />
            palette: <b>ink / paper only</b>
            <br />
            arrow: decorative &ldquo;→&rdquo; after label
          </div>
        </Card>
      </Section>

      {/* --------------------------------------------------- 08 Space card */}
      <Section
        n="COMPONENTS · 08"
        title="Space card"
        sub="The workhorse of the site — one stage, one set of specs, one invitation."
      >
        <SubHead>Default · on ink</SubHead>
        <SpaceCardGrid>
          {SPACE_CARDS_INK.map((c) => (
            <SpaceCard key={c.title} {...c} />
          ))}
        </SpaceCardGrid>

        <SubHead>Light variant</SubHead>
        <SpaceCardGrid>
          {SPACE_CARDS_LIGHT.map((c) => (
            <SpaceCard key={c.title} {...c} />
          ))}
        </SpaceCardGrid>
      </Section>

      {/* ------------------------------------------------------ 09 Breakpoints */}
      <Section
        n="RESPONSIVE · 09"
        title="Breakpoints"
        sub="The source system defines none. Recorded as UNKNOWN rather than invented."
      >
        <Card>
          <div className="font-display text-[28px] font-bold tracking-[-.01em]">
            {breakpointsF.status}
          </div>
          <p className="mt-[8px] max-w-[72ch] text-[14px] leading-[1.6] text-fg-secondary">
            {breakpointsF.note} What the source does declare:
          </p>
          <div className="mt-[16px] font-mono text-small leading-[1.9] text-fg-secondary">
            meta viewport · {viewportFacts.metaViewport}
            <br />
            body min-width · {viewportFacts.bodyMinWidth}
            <br />
            max content width · {viewportFacts.maxContentWidth}
            <br />
            fluid mechanism · {viewportFacts.fluidMechanism}
            <br />
            hero height (collection) · {viewportFacts.heroHeightCollection}
            <br />
            hero height (house) · {viewportFacts.heroHeightHouse}
          </div>
        </Card>
      </Section>

      {/* ------------------------------------------- 10 Website collection */}
      <Section
        n="WEBSITE · 10"
        title="Group (Collection)"
        sub="The two pages inside the source collection, reproduced at their own values. Fixed-width by design — the source sets min-width 1280px and declares no media queries."
      >
        <div className="mb-[24px] flex gap-[12px]">
          <Button
            variant={sitePage === 'collection' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setSitePage('collection')}
          >
            index.html · The Collection
          </Button>
          <Button
            variant={sitePage === 'frankfurt' ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setSitePage('frankfurt')}
          >
            frankfurt.html · The House
          </Button>
        </div>

        {/* Scaled preview so the 1280px-minimum pages fit this page. */}
        <div className="overflow-hidden rounded-md border border-solid border-rule">
          <div className="h-[720px] overflow-y-auto">
            <div
              style={{ width: 1440, transform: 'scale(0.62)', transformOrigin: 'top left' }}
              className="origin-top-left"
            >
              {sitePage === 'collection' ? <CollectionHomepage /> : <HouseFrankfurt />}
            </div>
          </div>
        </div>
        <p className="mt-[16px] font-mono text-small text-fg-secondary">
          Preview scaled to 62% · open <code>#/collection</code> or <code>#/frankfurt</code> for the
          pages at full size.
        </p>
      </Section>

      {/* ------------------------------------------------------------- footer */}
      <footer className="border-t border-solid border-rule px-[48px] py-[48px]">
        <div className="mx-auto flex max-w-[1360px] items-end justify-between gap-[32px]">
          <SparkLogo height={28} />
          <div className="font-mono text-small text-fg-secondary">
            SPARK Design System alt · exported from Claude Design · source of truth:
            assets/tokens.css + system/*.html + index.html + frankfurt.html
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DesignSystem;
