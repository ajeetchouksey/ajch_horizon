import { ShieldCheck, TrendingUp, Brain, Zap } from 'lucide-react';
import { GlassCard, SectionHeader, Badge } from '@/components/ui';

// Placeholder track grid — real content (extracted from ajch_platform's
// former Discovery/Pathways TRACKS + MOCK_ARTICLES) lands in Phase 2.
const TRACKS_PREVIEW = [
  { label: 'AI Safety & Responsibility', icon: ShieldCheck, color: 'text-sky-400' },
  { label: 'Applied AI for Practitioners', icon: TrendingUp, color: 'text-amber-400' },
  { label: 'AI Ethics & Bias', icon: Brain, color: 'text-violet-400' },
  { label: 'AI Productivity', icon: Zap, color: 'text-emerald-400' },
] as const;

export default function GrownupsHome() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <SectionHeader
          title="For Grown-ups"
          badge="Migrating content"
          badgeVariant="blue"
          className="items-center [&>div]:justify-center text-center"
        />
        <p className="text-slate-400 max-w-md mx-auto">
          Practical AI skills for non-technical professionals. These tracks
          are moving over from Aarya's main site — full articles land soon.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {TRACKS_PREVIEW.map(({ label, icon: Icon, color }) => (
          <GlassCard key={label} className="p-4 flex items-center gap-3" rounded="xl">
            <Icon size={18} className={`shrink-0 ${color}`} />
            <span className="text-sm text-slate-200">{label}</span>
            <Badge label="Soon" variant="slate" size="xs" className="ml-auto" />
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
