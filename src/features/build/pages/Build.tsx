import { Hammer, Sparkles, Flame, Zap } from 'lucide-react';
import { SectionHeader, GlassCard, Badge } from '@/components/ui';

// "Build" — age-tiered projects. Master plan §6.
// Light stub only this phase: full curriculum/project content is later
// work — this exists so the top nav has no dead link.
const TIERS = [
  { icon: Sparkles, name: 'Sparks', ageRange: '8–10', vibe: 'Curious beginners', sample: 'Talk to an AI storyteller; make an AI coloring buddy.', accent: 'emerald' as const, badgeVariant: 'emerald' as const },
  { icon: Flame, name: 'Flames', ageRange: '11–13', vibe: 'Confident creators', sample: 'Build a simple chatbot; generate art responsibly with Scratch + AI blocks.', accent: 'amber' as const, badgeVariant: 'amber' as const },
  { icon: Zap, name: 'Blaze', ageRange: '14–16', vibe: 'Future builders', sample: 'Intro to Python + a real API; build a quiz bot; an ethics-in-design challenge.', accent: 'purple' as const, badgeVariant: 'purple' as const },
];

export default function Build() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SectionHeader
        icon={Hammer}
        title="Build"
        subtitle="Every path grows with you — start anywhere, learn everywhere. Hands-on projects for every age tier."
      />

      <div className="space-y-4 mt-8">
        {TIERS.map(({ icon: Icon, name, ageRange, vibe, sample, accent, badgeVariant }) => (
          <GlassCard key={name} accent={accent} className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Icon size={18} style={{ color: `var(--aarya-${accent}-400)` }} />
              <p className="font-black text-white text-base">{name}</p>
              <Badge label={ageRange} variant={badgeVariant} size="xs" />
              <span className="text-xs text-slate-500">{vibe}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">{sample}</p>
            <Badge label="Projects for this tier are coming soon" variant="slate" size="xs" />
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
