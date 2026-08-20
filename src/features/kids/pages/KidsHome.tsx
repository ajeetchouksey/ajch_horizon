import { Sparkles, ShieldCheck } from 'lucide-react';
import { GlassCard, SectionHeader, Badge } from '@/components/ui';

// Placeholder — real content is blocked on the child-safety review gate
// (child-safety-reviewer agent) and the COPPA/data-collection decision.
// See the Spark plan, Phase 3.
export default function KidsHome() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="flex justify-center mb-4">
        <Sparkles size={32} className="text-violet-400" />
      </div>
      <SectionHeader
        title="For Kids"
        badge="Coming soon"
        badgeVariant="violet"
        className="items-center [&>div]:justify-center text-center"
      />
      <p className="text-slate-400 max-w-md mx-auto mb-6">
        We're building this the right way first — every lesson gets reviewed
        for age-appropriate language and safety before it's published here.
        No shortcuts.
      </p>
      <GlassCard accent="violet" className="p-4 inline-flex items-center gap-2 text-left" rounded="xl">
        <ShieldCheck size={18} className="text-violet-400 shrink-0" />
        <span className="text-xs text-slate-400">
          <Badge label="No data collected here" variant="violet" size="xs" className="mr-1.5" />
          this page doesn't track you.
        </span>
      </GlassCard>
    </div>
  );
}
