import { MotionCard, MotionIcon, StaggerGrid } from '@/components/motion/motion-wrappers';
export function FeaturesList({
  features
}) {
  return <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {features.map(feature => {
      const Icon = feature.icon;
      return <MotionCard key={feature.title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-[0_8px_30px_-8px_oklch(0_0_0_/_0.4)]">
            <MotionIcon className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
              <Icon className="size-5" />
            </MotionIcon>
            <div>
              <h3 className="font-medium">{feature.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </MotionCard>;
    })}
    </StaggerGrid>;
}
