'use client';

import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
export function MotionProvider({
  children
}) {
  const prefersReducedMotion = useReducedMotion();
  return <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion={prefersReducedMotion ? 'always' : 'user'}>
        {children}
      </MotionConfig>
    </LazyMotion>;
}
