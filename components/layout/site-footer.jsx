'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { defaultViewport, fadeInUp, footerEntrance, staggerContainerFast } from '@/lib/animations';
import { footerNavGroups } from '@/data/navigation.data';
import { SITE } from '@/constants/site';
import { basePath } from '@/lib/utils';
export function SiteFooter() {
  return <m.footer className="border-t border-border bg-card" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={footerEntrance}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <m.div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainerFast} initial="hidden" whileInView="visible" viewport={defaultViewport}>
          <m.div className="space-y-4" variants={fadeInUp}>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex  size-8 items-center justify-center bg-primary text-primary-foreground rounded">
                <img src={`${basePath}/images/logo.png`} alt="Logo" className="h-full w-full rounded" />
              </span>
              <span className="text-lg font-semibold tracking-tight">{SITE.shortName}</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.name} delivers embedded, IoT and automation solutions for
              students, startups and industries.
            </p>
          </m.div>

          {footerNavGroups.map(group => <m.div key={group.title} variants={fadeInUp}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map(link => <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>)}
              </ul>
            </m.div>)}

          <m.div variants={fadeInUp}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{SITE.email}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{SITE.phone}</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{SITE.address}</Link></li>
            </ul>
          </m.div>
        </m.div>

        <m.div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center" initial={{
        opacity: 0,
        y: 16
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={defaultViewport} transition={{
        duration: 0.5,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <p className="text-sm text-muted-foreground">
            Built for practical engineering delivery.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="font-mono text-xs text-muted-foreground">
              Develop with <span className="text-primary">Junaid</span>
            </p>
            <Link href="https://wa.me/918830026164" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
              <MessageCircle className="size-4" />
              <whatsapp />
            </Link>
          </div>
        </m.div>
      </div>
    </m.footer>;
}
