'use client';

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { defaultViewport, fadeInUp, testimonialSlide } from '@/lib/animations';
import { Button } from '@/components/ui/button';
export function Testimonials({
  items
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const active = items[index];
  const go = dir => {
    setDirection(dir);
    setIndex(prev => (prev + dir + items.length) % items.length);
  };
  return <m.div className="mx-auto max-w-3xl" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp}>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-md sm:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{
        background: 'radial-gradient(500px circle at 20% 0%, oklch(0.72 0.15 227 / 0.1), transparent 70%)'
      }} aria-hidden="true" />
        <div className="relative">
          <Quote className="size-8 text-primary" aria-hidden="true" />
          <AnimatePresence mode="wait" custom={direction}>
            <m.blockquote key={index} custom={direction} variants={testimonialSlide} initial="enter" animate="center" exit="exit" className="mt-6 text-balance text-xl font-medium leading-relaxed sm:text-2xl">
              {active.quote}
            </m.blockquote>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <m.div key={`author-${index}`} initial={{
            opacity: 0,
            y: 8
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -8
          }} transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1]
          }} className="mt-8 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">{active.name}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {active.role} · {active.company}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="outline" aria-label="Previous testimonial" onClick={() => go(-1)}>
                  <ArrowLeft />
                </Button>
                <Button size="icon" variant="outline" aria-label="Next testimonial" onClick={() => go(1)}>
                  <ArrowRight />
                </Button>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        {items.map((item, i) => <button key={item.name} type="button" aria-label={`Show testimonial ${i + 1}`} onClick={() => {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
      }} className={'h-1.5 rounded-full transition-all ' + (i === index ? 'w-8 bg-primary' : 'w-1.5 bg-border hover:bg-muted-foreground')} />)}
      </div>
    </m.div>;
}
