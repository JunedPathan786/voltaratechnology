'use client';

import { m } from 'framer-motion';
import { cardHover, cardTap, defaultViewport, fadeInUp, scaleIn, staggerContainerFast } from '@/lib/animations';
import { cn } from '@/lib/utils';
export function StaggerGrid({
  children,
  className
}) {
  return <m.div className={className} initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainerFast}>
      {children}
    </m.div>;
}
export function MotionCard({
  children,
  className
}) {
  return <m.div className={className} variants={fadeInUp} whileHover={cardHover} whileTap={cardTap} style={{
    willChange: 'transform'
  }}>
      {children}
    </m.div>;
}
export function MotionIcon({
  children,
  className
}) {
  return <m.span className={className} whileHover={{
    rotate: 8,
    scale: 1.08,
    transition: {
      duration: 0.35
    }
  }}>
      {children}
    </m.span>;
}
export function MotionImageWrap({
  children,
  className
}) {
  return <m.div className={cn(className)} whileHover={{
    scale: 1.05,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }} style={{
    willChange: 'transform'
  }}>
      {children}
    </m.div>;
}
export function MotionTimelineItem({
  children,
  className,
  variant = 'up'
}) {
  const variants = variant === 'scale' ? scaleIn : fadeInUp;
  return <m.li className={className} variants={variants}>
      {children}
    </m.li>;
}
export function MotionTimelineList({
  children,
  className
}) {
  return <m.ol className={className} initial="hidden" whileInView="visible" viewport={defaultViewport} variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  }}>
      {children}
    </m.ol>;
}
