'use client';

import { m } from 'framer-motion';
import { defaultViewport, fadeInLeft, fadeInRight, fadeInUp, staggerContainerFast } from '@/lib/animations';
import { cn } from '@/lib/utils';
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  direction = 'up'
}) {
  const directionVariant = direction === 'left' ? fadeInLeft : direction === 'right' ? fadeInRight : fadeInUp;
  return <m.div className={cn('flex flex-col gap-4', align === 'center' && 'items-center text-center', className)} initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainerFast}>
      <m.span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary sm:text-xs" variants={directionVariant}>
        <span className="size-1.5 rounded-full bg-primary" />
        {eyebrow}
      </m.span>
      <m.h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl" variants={directionVariant}>
        {title}
      </m.h2>
      {description && <m.p className={cn('max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base', align === 'center' && 'mx-auto')} variants={directionVariant}>
          {description}
        </m.p>}
    </m.div>;
}
