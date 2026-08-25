import dynamic from 'next/dynamic';
import { PageHeader } from '@/components/shared/page-header';
import { SectionHeading } from '@/components/shared/section-heading';
import { AnimatedSection } from '@/components/motion/animated-section';
import { services, expertise, engagementModels, servicesProcess, servicesStats, techPartners, servicesFaqs } from '@/data/services.data';
import { SectionSkeleton } from '@/components/shared/section-skeleton';
const ServicesGrid = dynamic(() => import('@/components/services-grid').then((m) => m.ServicesGrid), { loading: () => <SectionSkeleton /> });
const Timeline = dynamic(() => import('@/components/timeline').then((m) => m.Timeline), { loading: () => <SectionSkeleton /> });
const FeaturesList = dynamic(() => import('@/components/features-list').then((m) => m.FeaturesList), { loading: () => <SectionSkeleton /> });
const StatsSection = dynamic(() => import('@/components/stats-section').then((m) => m.StatsSection), { loading: () => <SectionSkeleton /> });
const LogoMarquee = dynamic(() => import('@/components/shared/logo-marquee').then((m) => m.LogoMarquee), { loading: () => <SectionSkeleton height="h-10" /> });
const FaqSection = dynamic(() => import('@/components/faq-section').then((m) => m.FaqSection), { loading: () => <SectionSkeleton /> });
const CtaSection = dynamic(() => import('@/components/shared/cta-section').then((m) => m.CtaSection), { loading: () => <SectionSkeleton /> });
export const metadata = {
  title: 'Engineering Services — Voltara Technologies',
  description: 'Embedded systems, automation, IoT, PCB design, firmware and industrial control services for students, startups and industry.'
};
export default function ServicesPage() {
  return <main className='overflow-hidden'>
      <PageHeader eyebrow="Services" title="Engineering services, end to end" description="Comprehensive hardware and software capabilities that take your product from first sketch to certified, scalable production." />

      <AnimatedSection animation="fadeLeft" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Capabilities" title="Core offerings" description="Eight disciplines under one roof, so your product never falls between vendors." direction="left" />
          <div className="mt-12">
            <ServicesGrid services={services} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fadeRight" className="border-t border-border py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Methodology" title="A rigorous engineering approach" description="Requirements analysis, system architecture, iterative prototyping, validation testing, and production support — applied to every build." direction="right" />
          <div className="mt-14">
            <Timeline steps={servicesProcess} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="slideUpScale" className="border-t border-border py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Expertise" title="Specialized technology domains" description="Deep experience across the disciplines that make embedded products hard to get right." direction="left" />
          <div className="mt-12">
            <FeaturesList features={expertise} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="blur" className="border-t border-border py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Engagement models" title="Flexible ways to work together" description="Choose the collaboration model that fits your team, timeline, and budget." direction="right" />
          <div className="mt-14">
            <Timeline steps={engagementModels} />
          </div>
        </div>
      </AnimatedSection>

      <StatsSection stats={servicesStats} />

      <AnimatedSection animation="scale" className="border-t border-border py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Technology partners & tooling
          </p>
          <LogoMarquee items={techPartners} />
        </div>
      </AnimatedSection>

      <FaqSection eyebrow="Service FAQ" title="Questions about working with us" description="Common questions about engagement models, pricing, IP, and capabilities." items={servicesFaqs} />

      <CtaSection title="Ready to scope your build?" description="Schedule a technical consultation or request our capabilities deck, and we'll map a path from idea to production." primary={{
      label: 'Schedule a consultation',
      href: '/contact'
    }} secondary={{
      label: 'See our projects',
      href: '/projects'
    }} />
    </main>;
}
