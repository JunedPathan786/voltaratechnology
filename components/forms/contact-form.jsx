'use client';

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeInUp, scaleIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projectTypes = [
  'Embedded systems',
  'PCB design',
  'IoT solution',
  'Industrial automation',
  'Robotics',
  'Academic / final-year project',
  'Other',
];

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  'w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: form.elements.namedItem('name').value,
      email: form.elements.namedItem('email').value,
      company: form.elements.namedItem('company').value,
      projectType: form.elements.namedItem('projectType').value,
      requirements: form.elements.namedItem('requirements').value,
      nda: form.elements.namedItem('nda').checked,
    };

    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const firstFieldError = result.errors && Object.values(result.errors)[0];
        setError(firstFieldError || result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again shortly.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <m.div
          key="success"
          className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <CheckCircle2 className="size-6" />
          </span>
          <h3 className="text-xl font-semibold">Message received</h3>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Thanks for reaching out. One of our engineers will get back to you within one business day to schedule a technical call.
          </p>
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            Send another message
          </Button>
        </m.div>
      ) : (
        <m.form
          key="form"
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur sm:p-8"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -12 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <m.div variants={fadeInUp}>
              <Field label="Name">
                <input required name="name" type="text" placeholder="Ada Lovelace" className={inputClass} />
              </Field>
            </m.div>
            <m.div variants={fadeInUp}>
              <Field label="Email">
                <input required name="email" type="email" placeholder="ada@company.com" className={inputClass} />
              </Field>
            </m.div>
            <m.div variants={fadeInUp}>
              <Field label="Company (optional for students)">
                <input name="company" type="text" placeholder="Acme Robotics" className={inputClass} />
              </Field>
            </m.div>
            <m.div variants={fadeInUp}>
              <Field label="Project type">
                <select name="projectType" defaultValue="" className={cn(inputClass, 'appearance-none')}>
                  <option value="" disabled>
                    Select a type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>
            </m.div>
          </div>

          <m.div className="mt-5" variants={fadeInUp}>
            <Field label="Technical requirements">
              <textarea
                required
                name="requirements"
                rows={5}
                placeholder="Tell us about your product, constraints, target volumes, and timeline…"
                className={cn(inputClass, 'resize-y')}
              />
            </Field>
          </m.div>

          <m.label className="mt-5 flex items-start gap-3" variants={fadeInUp}>
            <input
              name="nda"
              type="checkbox"
              className="mt-0.5 size-4 rounded border-input bg-card accent-primary"
            />
            <span className="text-sm leading-relaxed text-muted-foreground">
              I&apos;d like to sign a mutual NDA before we discuss technical details.
            </span>
          </m.label>

          {error && (
            <m.p variants={fadeInUp} className="mt-4 text-sm text-destructive">
              {error}
            </m.p>
          )}

          <m.div variants={scaleIn}>
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="mt-6 h-11 w-full px-6 [&_svg]:size-4 sm:w-auto"
            >
              {submitting ? 'Sending…' : 'Send message'}
              {!submitting && <ArrowRight />}
            </Button>
          </m.div>
        </m.form>
      )}
    </AnimatePresence>
  );
}
