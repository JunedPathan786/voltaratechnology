'use client';

import { m } from 'framer-motion';
import { glowPulse, heroBadge, heroHeadingWord, heroSubheading } from '@/lib/animations';
export function PageHeader({
  eyebrow,
  title,
  description
}) {
  const titleWords = title.split(' ');
  return <section className="relative overflow-hidden border-b border-border">
      <div className="grid-bg grid-bg-fade absolute inset-0" aria-hidden="true" />
      <m.div className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-60" style={{
      background: 'radial-gradient(600px circle at 50% 0%, oklch(0.72 0.15 227 / 0.14), transparent 70%)'
    }} aria-hidden="true" animate={glowPulse} />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-16">
        <m.span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs" variants={heroBadge} initial="hidden" animate="visible">
          <span className="size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </m.span>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:mt-5 sm:text-5xl lg:text-6xl">
          {titleWords.map((word, i) => <m.span key={`${word}-${i}`} className="inline-block mr-[0.25em]" custom={i} variants={heroHeadingWord} initial="hidden" animate="visible">
              {word}
            </m.span>)}
        </h1>
        <m.p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg" variants={heroSubheading} initial="hidden" animate="visible">
          {description}
        </m.p>
      </div>
    </section>;
}
