export function SectionSkeleton({ height = 'h-64' }) {
  return <div className={`w-full ${height} animate-pulse rounded-2xl bg-card/60`} aria-hidden="true" />;
}
