import { SectionHeader, Badge, GlassCard, VersionTag } from '@/components/ui';
import { Compass } from 'lucide-react';

// Placeholder shell for Phase 0 — proves the deploy pipeline works end to end.
// Phase 1 replaces this with the real router/layout (kids track + non-technical track).
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <GlassCard className="max-w-lg p-8 text-center" accent="violet">
        <div className="flex justify-center mb-4">
          <Compass size={32} className="text-violet-400" />
        </div>
        <SectionHeader
          title="Horizon"
          subtitle="AI learning for kids and non-technical learners — coming soon."
          badge="Building"
          badgeVariant="violet"
          className="items-center [&>div]:justify-center text-center"
        />
        <div className="flex justify-center gap-2 mt-4">
          <Badge label="Part of Aarya — My AI Learning Hub" variant="slate" />
          <VersionTag version={`v${__APP_VERSION__}`} />
        </div>
      </GlassCard>
    </div>
  );
}
