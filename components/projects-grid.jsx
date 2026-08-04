import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { MotionCard, MotionImageWrap, StaggerGrid } from '@/components/motion/motion-wrappers';

export function ProjectsGrid({
  projects
}) {
  return <StaggerGrid className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map(project => {
        const imgSrc = project.image
          ? (project.image.startsWith('http')
              ? project.image
              : project.image.startsWith('/')
                ? project.image
                : `/${project.image}`)
          : '/images/logo.png';

        return <MotionCard key={project.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40 hover:shadow-[0_16px_48px_-12px_oklch(0_0_0_/_0.55)]">
          <div className="relative aspect-[4/3] overflow-hidden">
            <MotionImageWrap className="absolute inset-0">
              <Image src={imgSrc} alt={project.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </MotionImageWrap>
            <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
              {project.industry}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:scale-110 group-hover:text-primary" />
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map(tag => <span key={tag} className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {tag}
                </span>)}
            </div>
          </div>
        </MotionCard>;
      })}
    </StaggerGrid>;
}
