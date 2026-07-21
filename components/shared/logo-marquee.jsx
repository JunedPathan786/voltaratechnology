'use client';

import { m } from 'framer-motion';
import { defaultViewport, fadeInUp } from '@/lib/animations';
export function LogoMarquee({
  items
}) {
  const doubled = [...items, ...items];
  return <m.div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp}>
      <div className="flex w-max animate-marquee items-center gap-12">
        {doubled.map((item, i) => <span key={`${item}-${i}`} className="whitespace-nowrap font-mono text-lg font-medium tracking-tight text-muted-foreground/70">
            {item}
          </span>)}
      </div>
    </m.div>;
}
