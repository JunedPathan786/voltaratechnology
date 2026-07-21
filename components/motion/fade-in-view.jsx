'use client';

import { m } from 'framer-motion';
import { defaultViewport, sectionVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';
export function FadeInView({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  as: Component = 'div',
  viewport = defaultViewport
}) {
  const MotionTag = m[Component];
  return <MotionTag className={cn(className)} initial="hidden" whileInView="visible" viewport={viewport} variants={sectionVariants[animation]} transition={{
    delay
  }}>
      {children}
    </MotionTag>;
}
export function StaggerInView({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.1
}) {
  return <m.div className={className} initial="hidden" whileInView="visible" viewport={defaultViewport} variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren
      }
    }
  }}>
      {children}
    </m.div>;
}
