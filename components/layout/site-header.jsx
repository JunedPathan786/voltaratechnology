'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, m, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { mobileMenu, mobileMenuItem } from '@/lib/animations';
import { basePath, cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { mainNav } from '@/data/navigation.data';
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const {
    scrollY
  } = useScroll();
  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  return <m.header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md" initial={{
    y: -16,
    opacity: 0
  }} animate={hidden ? {
    y: -64,
    opacity: 0
  } : {
    y: 0,
    opacity: 1
  }} transition={{
    duration: hidden ? 0.35 : 0.55,
    ease: [0.22, 1, 0.36, 1]
  }} style={{
    willChange: 'transform'
  }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={`${basePath}/images/logo.png`} alt="Voltara Technologies" className="size-14 object-contain rounded-xl" style={{
          // filter: 'brightness(0) saturate(100%) invert(24%) sepia(62%) saturate(2285%) hue-rotate(6deg) brightness(99%) contrast(96%)'
        }} />
          <span className="text-lg font-semibold tracking-tight">VOLTARA</span>
          <span className="font-mono text-xs text-muted-foreground">TECHNOLOGIES</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((item, i) => {
          const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return <m.div key={item.href} initial={{
            opacity: 0,
            y: -8
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.1 + i * 0.05,
            ease: [0.22, 1, 0.36, 1]
          }}>
                <Link href={item.href} className={cn('rounded-md px-3 py-2 font-mono text-xs uppercase tracking-widest transition-colors', active ? 'text-primary' : 'text-muted-foreground hover:text-foreground')}>
                  {item.label}
                </Link>
              </m.div>;
        })}
        </nav>

        <m.div className="hidden md:block" initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.45,
        delay: 0.35,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <Button nativeButton={false} render={<Link href="/contact">Start a project</Link>} />
        </m.div>

        <button type="button" className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          <AnimatePresence mode="wait" initial={false}>
            {open ? <m.span key="close" initial={{
            opacity: 0,
            rotate: -90
          }} animate={{
            opacity: 1,
            rotate: 0
          }} exit={{
            opacity: 0,
            rotate: 90
          }} transition={{
            duration: 0.2
          }}>
                <X className="size-5" />
              </m.span> : <m.span key="menu" initial={{
            opacity: 0,
            rotate: 90
          }} animate={{
            opacity: 1,
            rotate: 0
          }} exit={{
            opacity: 0,
            rotate: -90
          }} transition={{
            duration: 0.2
          }}>
                <Menu className="size-5" />
              </m.span>}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && <m.div className="overflow-hidden border-t border-border bg-background md:hidden" variants={mobileMenu} initial="hidden" animate="visible" exit="exit">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {mainNav.map((item, i) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return <m.div key={item.href} custom={i} variants={mobileMenuItem}>
                    <Link href={item.href} onClick={() => setOpen(false)} className={cn('block rounded-md px-3 py-2 font-mono text-sm uppercase tracking-widest transition-colors', active ? 'text-primary' : 'text-muted-foreground hover:text-foreground')}>
                      {item.label}
                    </Link>
                  </m.div>;
          })}
              <m.div custom={mainNav.length} variants={mobileMenuItem}>
                <Button className="mt-2" nativeButton={false} render={<Link href="/contact" onClick={() => setOpen(false)}>
                      Start a project
                    </Link>} />
              </m.div>
            </nav>
          </m.div>}
      </AnimatePresence>
    </m.header>;
}
