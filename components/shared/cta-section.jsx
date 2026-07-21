'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { defaultViewport, glowPulse, scaleIn, staggerContainerFast, fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
export function CtaSection({
  title = 'Have a hardware problem worth solving?',
  description = "Book a technical consultation and we'll help scope your project, de-risk the hardware, and map a path to production.",
  primary = {
    label: 'Start a project',
    href: '/contact'
  },
  secondary = {
    label: 'View our work',
    href: '/projects'
  }
}) {
  return <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <m.div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-16" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={scaleIn}>
          <div className="grid-bg grid-bg-fade absolute inset-0" aria-hidden="true" />
          <m.div className="pointer-events-none absolute inset-0 opacity-40" style={{
          background: 'radial-gradient(500px circle at 50% 50%, oklch(0.72 0.15 227 / 0.12), transparent 70%)'
        }} aria-hidden="true" animate={glowPulse} />
          <m.div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6" variants={staggerContainerFast} initial="hidden" whileInView="visible" viewport={defaultViewport}>
            <m.h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl" variants={fadeInUp}>
              {title}
            </m.h2>
            <m.p className="text-pretty leading-relaxed text-muted-foreground" variants={fadeInUp}>
              {description}
            </m.p>
            <m.div className="flex flex-col gap-3 sm:flex-row" variants={fadeInUp}>
              <Button size="lg" nativeButton={false} className="h-11 px-6 [&_svg]:size-4" render={<Link href={primary.href}>
                    {primary.label}
                    <ArrowRight />
                  </Link>} />
              <Button size="lg" variant="outline" nativeButton={false} className="h-11 px-6" render={<Link href={secondary.href}>{secondary.label}</Link>} />
            </m.div>
          </m.div>
        </m.div>
      </div>
    </section>;
}
