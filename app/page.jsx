import dynamic from 'next/dynamic';
import { Cpu, ShieldCheck, Layers } from 'lucide-react';
import { Hero } from '@/components/home/hero';
import { SectionHeading } from '@/components/shared/section-heading';
import { AnimatedSection } from '@/components/motion/animated-section';
import { SectionSkeleton } from '@/components/shared/section-skeleton';
import { homeServices, industries, timeline, technologies, testimonials, homeFaqs, quality } from '@/data/home.data';
import { featuredProjects } from '@/data/projects.data';

// Below-the-fold sections are code-split so they aren't in the initial JS bundle —
// the hero and nav stay eager since they're above the fold.
const ServicesGrid = dynamic(() => import('@/components/services-grid').then((m) => m.ServicesGrid), {
  loading: () => <SectionSkeleton />,
});
const FeaturesList = dynamic(() => import('@/components/features-list').then((m) => m.FeaturesList), {
  loading: () => <SectionSkeleton />,
});
const ProjectsGrid = dynamic(() => import('@/components/projects-grid').then((m) => m.ProjectsGrid), {
  loading: () => <SectionSkeleton />,
});
const Timeline = dynamic(() => import('@/components/timeline').then((m) => m.Timeline), {
  loading: () => <SectionSkeleton />,
});
const LogoMarquee = dynamic(() => import('@/components/shared/logo-marquee').then((m) => m.LogoMarquee), {
  loading: () => <SectionSkeleton height="h-10" />,
});
const Testimonials = dynamic(() => import('@/components/testimonials').then((m) => m.Testimonials), {
  loading: () => <SectionSkeleton />,
});
const FaqSection = dynamic(() => import('@/components/faq-section').then((m) => m.FaqSection), {
  loading: () => <SectionSkeleton />,
});
const CtaSection = dynamic(() => import('@/components/shared/cta-section').then((m) => m.CtaSection), {
  loading: () => <SectionSkeleton />,
});
export default function HomePage() {
  return <main className="overflow-hidden">
      <Hero />

      <AnimatedSection animation="fadeLeft" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeading eyebrow="About" title="Turning ideas into dependable engineering solutions" description="Voltara Technology provides end-to-end embedded systems, IoT, automation, robotics, and custom electronics development services. We help engineering students, startups, and industrial clients transform ideas into reliable hardware and software solutions with complete technical support." direction="left" />
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_20px_60px_-28px_oklch(0_0_0/0.35)] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Cpu className="size-5" />
                  </div>
                  <h3 className="mt-4 font-medium">Embedded systems</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Firmware, electronics, and prototyping support for real-world products.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <ShieldCheck className="size-5" />
                  </div>
                  <h3 className="mt-4 font-medium">Reliable delivery</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    From concept validation to deployment support, every stage is covered.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/70 bg-background/70 p-4 sm:col-span-2">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Layers className="size-5" />
                  </div>
                  <h3 className="mt-4 font-medium">Built for diverse teams</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We support engineering students, founders, researchers, and industrial teams with practical technical guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection animation="fadeLeft" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title="Full-stack engineering, from silicon to cloud" description="We cover the entire hardware lifecycle so you can ship dependable products without stitching together a dozen vendors." direction="left" />
          <div className="mt-12">
            <ServicesGrid services={homeServices} />
          </div>
        </div>
      </AnimatedSection>

      {/* Industries */}
      <AnimatedSection animation="fadeRight" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Industries" title="Built for demanding environments" description="Our work runs in factories, vehicles, hospitals, and the grid — places where failure is not an option." direction="right" />
          <div className="mt-12">
            <FeaturesList features={industries} />
          </div>
        </div>
      </AnimatedSection>

      {/* Featured projects */}
      <AnimatedSection animation="fadeRight" className="border-t border-border py-20 sm:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading eyebrow="Featured work" title="Engineering with measurable impact" description="A selection of recent hardware, firmware, and IoT projects delivered into production." direction="right" />
          <div className="mt-12">
            <ProjectsGrid projects={featuredProjects} />
          </div>  
        </div>
      </AnimatedSection>

      {/* Timeline */}
      <AnimatedSection animation="fadeUp" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Process" title="A disciplined path to production" description="Every project follows a transparent, milestone-driven workflow — no surprises, no black boxes." direction="right" />
          <div className="mt-14">
            <Timeline steps={timeline} />
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies marquee */}
      <AnimatedSection animation="scale" className="border-t border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Platforms & tooling we build on
          </p>
          <LogoMarquee items={technologies} />
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection animation="blur" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="Trusted by the people who ship" description="Engineering leaders, CTOs, and research partners on what it's like to build with us." align="center" className="mb-14" />
          <Testimonials items={testimonials} />
        </div>
      </AnimatedSection>

      {/* Quality / trust */}
      <AnimatedSection animation="fadeRight" className="border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Quality assurance" title="Engineering excellence, certified" description="Rigorous processes and independent certifications back every board we ship." direction="left" />
          <div className="mt-12">
            <FeaturesList features={quality} />
          </div>
        </div>
      </AnimatedSection>

      <FaqSection items={homeFaqs} />

      <CtaSection />
    </main>;
}
