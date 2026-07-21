import { MotionCard, MotionIcon, StaggerGrid } from '@/components/motion/motion-wrappers';
export function ServicesGrid({
  services
}) {
  return <StaggerGrid className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {services.map(service => {
      const Icon = service.icon;
      return <MotionCard key={service.title} className="group relative bg-card p-8 transition-colors hover:bg-secondary hover:shadow-[0_12px_40px_-12px_oklch(0_0_0_/_0.5)]">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
          background: 'radial-gradient(400px circle at 50% 0%, oklch(0.72 0.15 227 / 0.12), transparent 70%)'
        }} aria-hidden="true" />
            <div className="relative">
              <MotionIcon className="flex size-11 items-center justify-center rounded-lg border border-border bg-background text-primary transition-colors group-hover:border-primary/40">
                <Icon className="size-5" />
              </MotionIcon>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          </MotionCard>;
    })}
    </StaggerGrid>;
}
