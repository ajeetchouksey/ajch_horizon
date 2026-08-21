import { Compass, Brain, GitBranch, Smartphone, Users, Layers, ArrowRight } from 'lucide-react';
import { GlassCard, SectionHeader, Badge } from '@/components/ui';

// "Discover" — What is AI? explainers. Master plan §5.1.
// First-pass teaser content: real framing copy per topic, full lesson
// depth is later Content Calendar work (§10), not this phase.
const TOPICS = [
  {
    icon: Brain,
    title: 'What is AI, really?',
    desc: 'AI is a super-fast pattern-guesser, not a magic brain. It learns from examples instead of being told exact rules — and that\'s the key to understanding everything else about it.',
    accent: 'blue' as const,
  },
  {
    icon: GitBranch,
    title: 'How machines learn',
    desc: 'Imagine showing a computer 1,000 photos of cats until it starts noticing the patterns itself — pointy ears, whiskers, fur. That\'s the "show it lots of examples" story behind most AI.',
    accent: 'emerald' as const,
  },
  {
    icon: Smartphone,
    title: 'AI in your day',
    desc: 'Video recommendations, voice assistants, game bots, autocorrect — AI is already quietly working behind a lot of the apps and games you use every day.',
    accent: 'amber' as const,
  },
  {
    icon: Users,
    title: 'AI vs. Human',
    desc: 'AI is great at spotting patterns in huge piles of data, fast. Only humans can truly feel, care, and make ethical judgment calls — that difference matters more than it sounds.',
    accent: 'purple' as const,
  },
  {
    icon: Layers,
    title: 'Types of AI',
    desc: 'Chatbots that talk, image makers that draw, recommenders that suggest, and robots that move — AI shows up in a few different shapes. Here\'s how to tell them apart.',
    accent: 'rose' as const,
  },
];

export default function Discover() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionHeader
        icon={Compass}
        title="Discover — What is AI?"
        subtitle="Short, illustrated explainers that make AI make sense — no jargon, no sign-up."
        badge="5 topics"
        badgeVariant="blue"
      />

      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        {TOPICS.map(({ icon: Icon, title, desc, accent }) => (
          <GlassCard key={title} accent={accent} className="p-6">
            <Icon size={24} style={{ color: `var(--aarya-${accent}-400)` }} className="mb-3" />
            <p className="font-black text-white text-base mb-2">{title}</p>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>
            <Badge label="Full lesson coming soon" variant="slate" size="xs" icon={ArrowRight} />
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
