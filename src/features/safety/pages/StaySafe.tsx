import { Link } from 'react-router-dom';
import {
  ShieldCheck, EyeOff, Search, Theater, AlertTriangle, Heart,
  Lock, Mail, Fingerprint, Footprints, Smile, ChevronRight,
} from 'lucide-react';
import { GlassCard, SectionHeader, Badge } from '@/components/ui';
import { GoldenRuleRibbon } from '@/components/GoldenRuleRibbon';

// "Stay Safe" — Spark's differentiator pillar. Master plan §7.
// The 5 Golden Safety Rules get full real content (not a teaser) —
// deeper security topics are a "go deeper" list, full depth is later
// Content Calendar work (§10).
const GOLDEN_RULES = [
  {
    emoji: '🙈',
    icon: EyeOff,
    title: 'Keep secrets secret',
    desc: 'Never share your name, address, school, passwords, or photos with an AI.',
  },
  {
    emoji: '🕵️',
    icon: Search,
    title: "Don't trust — verify",
    desc: 'AI can make mistakes; check facts with a trusted adult or real source.',
  },
  {
    emoji: '🎭',
    icon: Theater,
    title: 'Fakes are real',
    desc: 'Deepfakes and AI images/voices can fool you. Pause before you believe or share.',
  },
  {
    emoji: '🚦',
    icon: AlertTriangle,
    title: 'Ask a grown-up',
    desc: 'If anything feels weird, scary, or too good to be true, tell a parent/teacher.',
  },
  {
    emoji: '💛',
    icon: Heart,
    title: 'Be kind & honest',
    desc: "Don't use AI to cheat, bully, or trick others. Your name goes on your work.",
  },
];

const DEEPER_TOPICS = [
  { icon: Lock, title: 'Privacy & data', desc: 'Why does AI want your info? Data is the fuel — guard it.' },
  { icon: Mail, title: 'Scams & phishing', desc: 'AI-written fake messages, prize scams, fake friend requests.' },
  { icon: Fingerprint, title: 'Deepfakes & misinformation', desc: 'Spotting the tells: weird hands, blurry backgrounds, "too perfect."' },
  { icon: Footprints, title: 'Digital footprint', desc: 'What you type may be stored — think before you share.' },
  { icon: Smile, title: 'Healthy habits', desc: 'Screen-time balance; AI is a tool, not a friend replacement.' },
];

export default function StaySafe() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionHeader
        icon={ShieldCheck}
        title="Be a Smart & Safe AI Explorer"
        subtitle="Spark's safety pillar — the part that makes this a place parents can trust as much as kids enjoy."
        badge="5 Golden Rules"
        badgeVariant="amber"
      />

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {GOLDEN_RULES.map(({ emoji, icon: Icon, title, desc }, i) => (
          <GlassCard key={title} accent="amber" className={`p-5 ${i === 4 ? 'sm:col-span-2' : ''}`}>
            <div className="flex items-start gap-3">
              <span className="text-2xl leading-none shrink-0">{emoji}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={15} className="text-[var(--aarya-accent)]" />
                  <p className="font-black text-white text-base">{i + 1}. {title}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-10">
        <GoldenRuleRibbon />
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-black text-white mb-1">Go deeper</h2>
        <p className="text-sm text-slate-400 mb-6">Real security topics, explained at a kid's level.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {DEEPER_TOPICS.map(({ icon: Icon, title, desc }) => (
            <GlassCard key={title} accent="slate" className="p-5 flex items-start gap-3">
              <Icon size={20} className="text-slate-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="font-bold text-white text-sm mb-1">{title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </div>
              <Badge label="Soon" variant="slate" size="xs" />
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/legal/privacy" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-[var(--aarya-accent)] transition-colors">
          Read our full privacy promise <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}
