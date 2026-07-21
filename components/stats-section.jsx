'use client';

import { useEffect, useRef, useState } from 'react';
import { m } from 'framer-motion';
import { defaultViewport, fadeInUp, staggerContainerFast } from '@/lib/animations';
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.3
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return {
    ref,
    inView
  };
}
function Counter({
  value,
  suffix
}) {
  const {
    ref,
    inView
  } = useInView();
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame;
    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);
  return <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>;
}
export function StatsSection({
  stats
}) {
  return <m.section className="border-y border-border bg-card" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainerFast}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map(stat => <m.div key={stat.label} className="px-2 py-12 text-center sm:px-6" variants={fadeInUp}>
            <div className="font-mono text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
          </m.div>)}
      </div>
    </m.section>;
}
