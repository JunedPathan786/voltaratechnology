'use client';

import { m } from 'framer-motion';
import { defaultViewport, sectionVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';
export function AnimatedSection({
  children,
  className,
  animation = 'fadeUp',
  as = 'section'
}) {
  const MotionTag = m[as];
  return <MotionTag className={cn(className)} initial="hidden" whileInView="visible" viewport={defaultViewport} variants={sectionVariants[animation]}>
      {children}
    </MotionTag>;
}
