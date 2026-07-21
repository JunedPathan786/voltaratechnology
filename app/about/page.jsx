import dynamic from 'next/dynamic';
import { Rocket, BadgeCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/page-header';
import { SectionHeading } from '@/components/shared/section-heading';
import { AnimatedSection } from '@/components/motion/animated-section';
import { values, capabilities, aboutProcess, aboutStats } from '@/data/about.data';
import { SectionSkeleton } from '@/components/shared/section-skeleton';
const FeaturesList = dynamic(() => import('@/components/features-list').then((m) => m.FeaturesList), { loading: () => <SectionSkeleton /> });
const StatsSection = dynamic(() => import('@/components/stats-section').then((m) => m.StatsSection), { loading: () => <SectionSkeleton /> });
const CtaSection = dynamic(() => import('@/components/shared/cta-section').then((m) => m.CtaSection), { loading: () => <SectionSkeleton /> });
const Timeline = dynamic(() => import('@/components/timeline').then((m) => m.Timeline), { loading: () => <SectionSkeleton /> });
export const metadata = {
  title: 'About Voltara Technologies',
  description: 'VOLTARA TECHNOLOGIES builds embedded systems, IoT products, automation platforms and robotics solutions for students, startups and industrial teams.'
};
export default function AboutPage() {
  return <main className='overflow-hidden'>
      <PageHeader eyebrow="About" title="Engineering depth with a product mindset" description="We build intelligent hardware and embedded software that helps ambitious teams move from concept to reliable deployment without losing momentum." />

      <AnimatedSection animation="fadeLeft" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <SectionHeading eyebrow="Who we are" title="A multidisciplinary engineering partner" description="Voltara Technology is a product-focused engineering studio that blends embedded firmware, electronics design, automation logic, and connected software into one delivery model. We work across education, startups, and industrial environments where the fastest route to results still requires solid engineering." direction="left" />
              <div className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <BadgeCheck className="size-5" />
                  </div>
                  <h3 className="text-xl font-semibold">Why teams choose us</h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  We help clients bridge the gap between bright ideas and dependable execution. Whether it is a student prototype, a startup MVP, or an industrial process upgrade, our work is grounded in engineering discipline and clear communication.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_24px_70px_-28px_oklch(0_0_0/0.35)] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Rocket className="size-5" />
                </div>
                <h3 className="text-xl font-semibold">What we build</h3>
              </div>
              <div className="mt-6 space-y-4">
                {capabilities.map(item => {
                const Icon = item.icon;
                return <div key={item.title} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>;
              })}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeRight" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Values" title="Built around clarity, rigor, and momentum" description="We focus on practical engineering decisions that make your product easier to build, easier to test, and easier to scale." direction="right" />
          <div className="mt-12">
            <FeaturesList features={values} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slideUpScale" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Approach" title="A path from idea to dependable result" description="Our process is simple: understand the problem, design the system, build it carefully, and support it through launch and iteration." direction="left" />
          <div className="mt-14">
            <Timeline steps={aboutProcess} />
          </div>
        </div>
      </AnimatedSection>

      <StatsSection stats={aboutStats} />

      <AnimatedSection animation="blur" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">What’s next</p>
                <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready to turn your next product idea into something real?
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  We bring the engineering depth to shape concepts, de-risk development, and deliver working systems with confidence.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
                Start a conversation
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CtaSection title="Let’s build something dependable" description="Whether you are validating a student concept or scaling an industrial solution, we can help you move from idea to implementation with a stronger technical foundation." primary={{
      label: 'Book a consultation',
      href: '/contact'
    }} secondary={{
      label: 'View services',
      href: '/services'
    }} />
    </main>;
}
