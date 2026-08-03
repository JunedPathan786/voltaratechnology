import dynamic from 'next/dynamic';
import { PageHeader } from '@/components/shared/page-header';
import { AnimatedSection } from '@/components/motion/animated-section';
import { allProjects, projectsFaqs } from '@/data/projects.data';
import { SectionSkeleton } from '@/components/shared/section-skeleton';
const ProjectsGrid = dynamic(() => import('@/components/projects-grid').then((m) => m.ProjectsGrid), { loading: () => <SectionSkeleton /> });
const FaqSection = dynamic(() => import('@/components/faq-section').then((m) => m.FaqSection), { loading: () => <SectionSkeleton /> });
const CtaSection = dynamic(() => import('@/components/shared/cta-section').then((m) => m.CtaSection), { loading: () => <SectionSkeleton /> });
export const metadata = {
  title: 'Engineering Projects — VOLTARA TECHNOLOGIES',
  description: 'A portfolio of embedded, IoT, automation and robotics solutions delivered for students, startups and industrial teams.'
};
export default function ProjectsPage() {
  return <main className='overflow-hidden'>
      <PageHeader eyebrow="Projects" title="Engineering projects that shipped" description="A portfolio of delivered hardware, firmware, and IoT solutions — the engineering challenge, and the solution we built." />

      <AnimatedSection animation="fadeUp" className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsGrid projects={allProjects} />
        </div>
      </AnimatedSection>

      <FaqSection eyebrow="Project FAQ" title="What clients ask before we start" description="Common questions about timelines, IP, iterations, testing, and support." items={projectsFaqs} />

      <CtaSection title="Have a project like these in mind?" description="Tell us about your custom engineering requirements and we'll help you scope a path to production." primary={{
      label: 'Discuss your project',
      href: '/contact'
    }} secondary={{
      label: 'Explore services',
      href: '/services'
    }} />
    </main>;
}
