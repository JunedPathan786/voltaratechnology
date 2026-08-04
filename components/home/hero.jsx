'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m } from 'framer-motion';
import { ArrowRight, Cpu } from 'lucide-react';
import { floatAnimation, floatSlowAnimation, glowPulse, heroBadge, heroCta, heroHeadingWord, heroStatItem, heroStats, heroSubheading, staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';

const headingWords = 'Your Trusted Embedded & IoT Development Partner'.split(' ');
export function Hero() {
  return <section className="relative overflow-hidden border-b border-border">
      <div className="grid-bg grid-bg-fade absolute inset-0" aria-hidden="true" />
      <m.div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-60" style={{
      background: 'radial-gradient(400px circle at 70% 20%, oklch(0.72 0.15 227 / 0.18), transparent 70%)'
    }} aria-hidden="true" animate={glowPulse} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-7 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-20 lg:pt-16">
        <m.div className="mt-0 flex flex-col items-start gap-4 sm:mt-[-60px] sm:gap-6" initial="hidden" animate="visible" variants={staggerContainer(0.05, 0)}>
          <m.span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary sm:px-3 sm:text-xs" variants={heroBadge}>
            <Cpu className="size-3.5" />
            Embedded & Hardware Engineering
          </m.span>

          <h1 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {headingWords.map((word, i) => <m.span key={`${word}-${i}`} className="inline-block mr-[0.25em]" custom={i} variants={heroHeadingWord} initial="hidden" animate="visible">
                {word}
              </m.span>)}
          </h1>

          <m.p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg" variants={heroSubheading} initial="hidden" animate="visible">
            We design embedded hardware, firmware, automation systems, IoT solutions,
            web dashboards and academic/industrial projects using STM32, ESP32, PIC,
            SCADA, E-PLAIN, HMI, Arduino and modern communication protocols.
          </m.p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <m.div custom={0} variants={heroCta} initial="hidden" animate="visible">
              <Button size="lg" nativeButton={false} className="h-11 w-full px-6 sm:w-auto [&_svg]:size-4" render={<Link href="/contact">
                    Start a project
                    <ArrowRight />
                  </Link>} />
            </m.div>
            <m.div custom={1} variants={heroCta} initial="hidden" animate="visible">
              <Button size="lg" variant="outline" nativeButton={false} className="h-11 w-full px-6 sm:w-auto" render={<Link href="/services">Explore services</Link>} />
            </m.div>
          </div>

          <m.dl className="mt-1 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:mt-4 sm:gap-x-10 sm:text-xs" variants={heroStats} initial="hidden" animate="visible">
            <m.div variants={heroStatItem}>
              <dt className="text-primary">1+ yrs</dt>
              <dd>In production</dd>
            </m.div>
            <m.div variants={heroStatItem}>
              <dt className="text-primary">5+</dt>
              <dd>Boards designed</dd>
            </m.div>
            <m.div variants={heroStatItem}>
              <dt className="text-primary">99.2%</dt>
              <dd>Yield rate</dd>
            </m.div>
          </m.dl>
        </m.div>

        <m.div className="relative" initial={{
        opacity: 0,
        x: 32
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.7,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <m.div className="relative aspect-square overflow-hidden rounded-2xl border border-border" animate={floatAnimation} style={{
          willChange: 'transform'
        }}>
            <Image src="/images/hero-pcb.png" alt="Custom PCB with an ESP32 microcontroller module and gold traces" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </m.div>
          <m.div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-card/90 px-4 py-3 backdrop-blur sm:block" animate={floatSlowAnimation} style={{
          willChange: 'transform'
        }}>
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">STATUS</span> — Firmware flashed · v2.4.1
            </p>
          </m.div>
        </m.div>
      </div>
    </section>;
}
