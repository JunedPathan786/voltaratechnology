import { PageHeader } from '@/components/shared/page-header';
import { ContactForm } from '@/components/forms/contact-form';
import { FaqSection } from '@/components/faq-section';
import { AnimatedSection } from '@/components/motion/animated-section';
import { FadeInView } from '@/components/motion/fade-in-view';
import { contactDetails, locations, contactFaqs } from '@/data/contact.data';

export const metadata = {
  title: 'Contact — VOLTARA TECHNOLOGIES',
  description:
    'Start a technical conversation with VOLTARA TECHNOLOGIES about your embedded, IoT, automation or robotics project.',
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <PageHeader
        eyebrow="Contact"
        title="Let's build something together"
        description="Whether you're an engineer, founder, or procurement lead, tell us about your project and we'll start a technical conversation."
      />

      <AnimatedSection animation="fadeUp" className="pt-6 sm:pt-8 pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[3fr_2fr] lg:gap-16 lg:px-8">
          <FadeInView animation="fadeRight" delay={0.1} viewport={{ once: true, amount: 0.02 }}>
            <ContactForm />
          </FadeInView>

          <FadeInView animation="fadeRight" delay={0.2}>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Direct contact</h3>
                <ul className="mt-6 space-y-5">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label} className="flex items-start gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                          <Icon className="size-4" />
                        </span>
                        <div>
                          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{item.label}</p>
                          <p className="mt-0.5 font-mono text-sm text-foreground">{item.value}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Offices & labs</h3>
                <ul className="mt-6 space-y-5">
                  {locations.map((loc) => (
                    <li key={loc.city} className="border-l-2 border-border pl-4">
                      <p className="font-medium">{loc.city}</p>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{loc.timezone}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{loc.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInView>
        </div>
      </AnimatedSection>

      <FaqSection
        eyebrow="Inquiry FAQ"
        title="Before you reach out"
        description="Response times, process, NDAs, scope, and academic collaboration."
        items={contactFaqs}
      />
    </main>
  );
}
