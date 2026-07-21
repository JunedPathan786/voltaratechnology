import { MotionTimelineItem, MotionTimelineList } from '@/components/motion/motion-wrappers';
export function Timeline({
  steps
}) {
  return <MotionTimelineList className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
      {steps.map((step, i) => <MotionTimelineItem key={step.title} className="relative flex flex-col gap-4" variant={i % 2 === 0 ? 'up' : 'scale'}>
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-card font-mono text-sm text-primary transition-transform duration-300 motion-safe:hover:scale-[1.08]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-primary/50 to-border lg:block" aria-hidden="true" />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {step.phase}
            </span>
            <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </MotionTimelineItem>)}
    </MotionTimelineList>;
}
