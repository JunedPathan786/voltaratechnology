'use client';

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';

export function NewsletterForm() {
  const [status, setStatus] = useState('idle'); // idle | loading | done | error
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email');

    setStatus('loading');
    setError('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('done');
    } catch {
      setError('Network error — please try again.');
      setStatus('error');
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === 'done' ? (
        <m.div
          key="done"
          className="flex items-center gap-3 rounded-xl border border-primary/40 bg-primary/5 px-4 py-3.5"
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Check className="size-4" />
          </span>
          <p className="text-sm text-foreground">You&apos;re subscribed. Watch your inbox.</p>
        </m.div>
      ) : (
        <m.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <m.div className="w-full" variants={fadeInUp}>
            <input
              required
              type="email"
              name="email"
              placeholder="you@company.com"
              aria-label="Email address"
              disabled={status === 'loading'}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
            {status === 'error' && <p className="mt-2 text-xs text-destructive">{error}</p>}
          </m.div>
          <m.div variants={fadeInUp}>
            <Button type="submit" size="lg" disabled={status === 'loading'} className="h-11 shrink-0 px-6 [&_svg]:size-4">
              {status === 'loading' ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Subscribe
                  <ArrowRight />
                </>
              )}
            </Button>
          </m.div>
        </m.form>
      )}
    </AnimatePresence>
  );
}
