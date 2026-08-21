import { Link } from 'react-router-dom';
import { Hammer, ChevronRight } from 'lucide-react';
import { SectionHeader, GlassCard, Badge } from '@/components/ui';
import { BUILD_TIERS } from '@/content/build';

// "Build" — age-tiered projects. Master plan §6.
// Cards link to each tier's real project write-ups (see BuildTier.tsx) —
// metadata comes from the shared content-index module.
export default function Build() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SectionHeader
        icon={Hammer}
        title="Build"
        subtitle="Every path grows with you — start anywhere, learn everywhere. Hands-on projects for every age tier."
      />

      <div className="space-y-4 mt-8">
        {BUILD_TIERS.map(({ slug, icon: Icon, name, ageRange, vibe, accent, badgeVariant }) => (
          <Link key={slug} to={`/build/${slug}`} className="block">
            <GlassCard accent={accent} className="p-6 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Icon size={18} style={{ color: `var(--aarya-${accent}-400)` }} />
                  <p className="font-black text-white text-base">{name}</p>
                  <Badge label={ageRange} variant={badgeVariant} size="xs" />
                  <span className="text-xs text-slate-500">{vibe}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold shrink-0" style={{ color: `var(--aarya-${accent}-400)` }}>
                  2 projects <ChevronRight size={14} />
                </span>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
