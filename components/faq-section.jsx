'use client';

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { defaultViewport, fadeInUp, staggerContainerFast } from '@/lib/animations';
import { SectionHeading } from '@/components/shared/section-heading';
export function FaqSection({
  eyebrow = 'FAQ',
  title = 'Frequently asked questions',
  description = 'Answers to the questions we hear most from founders, procurement teams, and fellow engineers.',
  items
}) {
  const [openIndex, setOpenIndex] = useState(0);
  return <m.section className="border-t border-border py-20 sm:py-28" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" direction="up" />
        <m.div className="mt-12 divide-y divide-border rounded-xl border border-border bg-card" variants={staggerContainerFast} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          {items.map((item, i) => {
          const open = openIndex === i;
          return <m.div key={item.question} variants={fadeInUp}>
                <button type="button" onClick={() => setOpenIndex(open ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={open}>
                  <span className="font-medium">{item.question}</span>
                  <m.span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border text-primary" animate={{
                rotate: open ? 180 : 0
              }} transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}>
                    {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </m.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && <m.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1]
              }} className="overflow-hidden">
                      <div className="px-6 pb-5">
                        <p className="text-pretty leading-relaxed text-muted-foreground">
                          {item.answer}
                        </p>
                      </div>
                    </m.div>}
                </AnimatePresence>
              </m.div>;
        })}
        </m.div>
      </div>
    </m.section>;
}
