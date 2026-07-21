'use client';

import { m } from 'framer-motion';
import { pageChild, pageEntrance } from '@/lib/animations';
export function PageEntrance({
  children
}) {
  return <m.div initial="hidden" animate="visible" variants={pageEntrance}>
      <m.div variants={pageChild}>{children}</m.div>
    </m.div>;
}
