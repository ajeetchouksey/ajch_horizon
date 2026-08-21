import { Gamepad2, MessageSquareText, ScanSearch, Boxes, Scale, Fingerprint, Clock } from 'lucide-react';
import { GlassCard, SectionHeader, Badge } from '@/components/ui';

// "Play" — games & interactive practice. Master plan §5.2.
// Real descriptive copy per mission; no interactive game logic yet
// (each is substantial separate engineering scope) — marked as
// coming-soon missions, consistent with this phase's page-shell scope.
const MISSIONS = [
  {
    icon: MessageSquareText,
    title: 'Prompt Playground',
    desc: 'A safe, sandboxed chat where you practice asking AI good questions — and learn what makes a prompt clear vs. confusing.',
    accent: 'blue' as const,
  },
  {
    icon: ScanSearch,
    title: 'Spot the AI',
    desc: 'Real photo or AI-generated? Real news or fake? Sharpen your eye for the tells that give AI-made content away.',
    accent: 'emerald' as const,
  },
  {
    icon: Boxes,
    title: 'Train-a-Bot',
    desc: 'A drag-and-drop mini machine-learning demo — sort fruits and animals, and watch how a model actually learns from examples.',
    accent: 'amber' as const,
  },
  {
    icon: Scale,
    title: 'Bias Detective',
    desc: 'See how biased training data leads straight to biased results — and practice spotting it before it fools you.',
    accent: 'purple' as const,
  },
  {
    icon: Fingerprint,
    title: 'Deepfake Detector',
    desc: 'A game built around spotting the tells in deepfakes — weird hands, blurry backgrounds, lighting that\'s just a little too perfect.',
    accent: 'rose' as const,
  },
];

export default function Play() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionHeader
        icon={Gamepad2}
        title="Play & Practice"
        subtitle="Fun games and mini-missions that turn AI ideas into hands-on practice."
        badge="5 missions"
        badgeVariant="emerald"
      />

      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        {MISSIONS.map(({ icon: Icon, title, desc, accent }) => (
          <GlassCard key={title} accent={accent} className="p-6">
            <div className="flex items-start justify-between gap-3 mb-3">
              <Icon size={24} style={{ color: `var(--aarya-${accent}-400)` }} />
              <Badge label="Coming soon" variant="slate" size="xs" icon={Clock} />
            </div>
            <p className="font-black text-white text-base mb-2">{title}</p>
            <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
