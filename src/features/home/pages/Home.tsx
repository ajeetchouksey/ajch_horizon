import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Rocket, Brain, Gamepad2, ShieldCheck, ChevronRight,
  Sparkles, Flame, Zap, Lock, Award, Compass, ExternalLink,
} from 'lucide-react';
import { GlassCard, Badge } from '@/components/ui';
import { GoldenRuleRibbon } from '@/components/GoldenRuleRibbon';
import { AgeTierCard } from '@/components/AgeTierCard';

// Full homepage per the Spark master plan §4. Built on Spark's existing
// dark/amber brand system (@aaryaai/brand tokens) — see docs/design-sync.md.
// Mascot is an icon placeholder for now; the illustrated vector firefly is
// deferred (see master plan §13/§14 — a real owned asset, not a code task).

const WHAT_IS_SPARK = [
  { icon: Brain, title: 'Understand AI', desc: 'Discover what AI really is, in words that actually make sense.', to: '/discover', cta: 'Explore', accent: 'blue' as const },
  { icon: Gamepad2, title: 'Play & Build', desc: 'Fun games, cool projects, and mini-missions you get to create.', to: '/play', cta: "Let's Play", accent: 'emerald' as const },
  { icon: ShieldCheck, title: 'Stay Safe', desc: 'Become a smart, kind, and safe AI explorer.', to: '/stay-safe', cta: 'Learn How', accent: 'purple' as const },
];

const AGE_TIERS = [
  { icon: Sparkles, name: 'Sparks', ageRange: '8–10', vibe: 'Curious beginners', accent: 'emerald' as const, badgeVariant: 'emerald' as const },
  { icon: Flame, name: 'Flames', ageRange: '11–13', vibe: 'Confident creators', accent: 'amber' as const, badgeVariant: 'amber' as const },
  { icon: Zap, name: 'Blaze', ageRange: '14–16', vibe: 'Future builders', accent: 'purple' as const, badgeVariant: 'purple' as const },
];

const SUPERPOWERS = [
  'Helps you learn faster',
  'Sparks your creativity',
  'Does boring tasks for you',
];

const WATCH_OUTS = [
  'Can be confidently wrong',
  'Sometimes unfair or biased',
  "Can't feel or truly understand",
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setMounted(true)); }, []);

  return (
    <div className={`space-y-20 pb-16 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>

      {/*━━━━ 4.1 HERO */}
      <section className="max-w-5xl mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)' }}
            >
              <ShieldCheck size={14} className="text-[var(--aarya-accent)]" />
              <span className="text-xs font-bold text-[var(--aarya-accent)]">Every lesson is safety-reviewed — no exceptions</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-black leading-[1.08] tracking-tight text-white mb-5"
              style={{ fontFamily: 'var(--font-heading-accent)' }}
            >
              Spark — where young minds meet smart machines.
            </h1>

            <p className="text-lg text-slate-400 max-w-md mb-8 leading-relaxed">
              Learn AI. Think smart. Stay safe. A fun, friendly place for curious kids to explore Artificial Intelligence — one spark at a time.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                to="/discover"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-base font-black transition-transform duration-200 hover:-translate-y-1"
                style={{
                  color: '#0e1a2d',
                  background: 'linear-gradient(135deg, var(--aarya-accent), var(--aarya-accent-2))',
                  boxShadow: '0 12px 32px -8px color-mix(in srgb, var(--aarya-accent) 40%, transparent)',
                }}
              >
                <Rocket size={18} strokeWidth={2.6} />
                Start Your First Mission
              </Link>
              <Link
                to="/grown-ups"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-[var(--aarya-accent)] transition-colors"
              >
                I'm a parent / teacher <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* Mascot card — icon placeholder, illustrated vector firefly deferred */}
          <GlassCard accent="amber" className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ background: 'rgba(251,191,36,0.12)', border: '1px solid rgba(251,191,36,0.3)' }}>
                <Zap size={26} className="text-[var(--aarya-accent)]" />
              </div>
              <div>
                <p className="font-black text-white">Spark Firefly</p>
                <p className="text-xs text-slate-500">Your AI learning guide</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-mono-accent)', color: 'var(--aarya-accent-2)' }}>
              // Spark Firefly
              <br />
              Curious. Smart.
              <br />
              Responsible. Future-Ready.
            </p>
          </GlassCard>
        </div>
      </section>

      {/*━━━━ 4.2 GOLDEN RULE RIBBON */}
      <section className="max-w-3xl mx-auto px-4">
        <GoldenRuleRibbon />
      </section>

      {/*━━━━ 4.3 WHAT IS SPARK? */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-black text-white text-center mb-8">Your AI adventure starts here 🔥</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {WHAT_IS_SPARK.map(({ icon: Icon, title, desc, to, cta, accent }) => (
            <Link key={title} to={to} className="block h-full">
              <GlassCard accent={accent} className="p-6 h-full transition-transform duration-200 hover:-translate-y-1">
                <Icon size={28} style={{ color: `var(--aarya-${accent}-400)` }} className="mb-4" />
                <p className="font-black text-white text-lg mb-2">{title}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: `var(--aarya-${accent}-400)` }}>
                  {cta} <ChevronRight size={14} />
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      {/*━━━━ 4.4 PICK YOUR PATH */}
      <section className="max-w-5xl mx-auto px-4">
        <p className="text-center text-sm text-slate-400 mb-6">
          <span className="text-[var(--aarya-accent)] font-mono mr-1.5">&gt;</span>
          Choose your path. Learn at your level. Grow at your pace.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {AGE_TIERS.map((tier) => <AgeTierCard key={tier.name} {...tier} />)}
        </div>
      </section>

      {/*━━━━ 4.5 SUPERPOWERS VS WATCH-OUTS */}
      <section className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-black text-white text-center mb-2">AI is amazing… and you should be smart about it.</h2>
        <p className="text-sm text-slate-400 text-center mb-7">A quick peek — the full picture lives on Stay Safe.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <GlassCard accent="emerald" className="p-5">
            <p className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-3">💚 AI Superpowers</p>
            <ul className="space-y-2.5">
              {SUPERPOWERS.map((s) => (
                <li key={s} className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">✓</span> {s}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard accent="amber" className="p-5">
            <p className="text-xs font-black uppercase tracking-wider text-amber-400 mb-3">⚠️ AI Watch-Outs</p>
            <ul className="space-y-2.5">
              {WATCH_OUTS.map((s) => (
                <li key={s} className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">!</span> {s}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
        <p className="text-center text-xs text-slate-500 mt-5">
          At Spark, we teach the <span className="text-slate-300 font-semibold">full</span> picture — so you use AI wisely, not blindly.
        </p>
      </section>

      {/*━━━━ 4.6 SAFETY PROMISE */}
      <section className="max-w-3xl mx-auto px-4">
        <GlassCard accent="amber" className="p-8 text-center">
          <Lock size={26} className="mx-auto mb-3 text-[var(--aarya-accent)]" />
          <h2 className="text-xl font-black text-white mb-3">🔒 Safe by design. Built for young minds.</h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-5 leading-relaxed">
            Spark is a protected sandbox — no data collected from kids, no unsafe chats, and every lesson teaches responsible AI use.
            Parents and teachers can explore right alongside their young learners.
          </p>
          <Link to="/grown-ups" className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--aarya-accent)] hover:opacity-80">
            See our safety principles <ChevronRight size={14} />
          </Link>
        </GlassCard>
      </section>

      {/*━━━━ 4.7 FUN PREVIEW */}
      <section className="max-w-3xl mx-auto px-4">
        <GlassCard accent="emerald" className="p-8 text-center">
          <Award size={26} className="mx-auto mb-3 text-emerald-400" />
          <h2 className="text-xl font-black text-white mb-3">Learn it. Build it. Earn it. 🏅</h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-5 leading-relaxed">
            Peek inside: talk to a friendly AI storyteller, train your first mini-bot, spot a deepfake, and collect badges like
            {' '}<Badge label="AI Explorer" variant="blue" size="xs" className="mx-0.5" />
            <Badge label="Safety Sheriff" variant="amber" size="xs" className="mx-0.5" />
            <Badge label="Bias Buster" variant="purple" size="xs" className="mx-0.5" />.
          </p>
          <Link to="/play" className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-400 hover:opacity-80">
            Explore the missions <ChevronRight size={14} />
          </Link>
        </GlassCard>
      </section>

      {/*━━━━ 4.8 FINAL CTA */}
      <section className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-black text-white mb-3">Ready to light your spark? 🔥</h2>
        <p className="text-sm text-slate-400 mb-7">Join young explorers learning to think smart and stay safe in the age of AI.</p>
        <Link
          to="/discover"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-base font-black transition-transform duration-200 hover:-translate-y-1"
          style={{
            color: '#0e1a2d',
            background: 'linear-gradient(135deg, var(--aarya-accent), var(--aarya-accent-2))',
            boxShadow: '0 12px 32px -8px color-mix(in srgb, var(--aarya-accent) 40%, transparent)',
          }}
        >
          <Rocket size={18} strokeWidth={2.6} />
          Begin Free
        </Link>
      </section>

      {/*━━━━ CROSS-LINK TO COMPASS (career-skills grown-up, distinct persona from the safety-focused Grown-Ups hub) */}
      <section className="max-w-2xl mx-auto px-4">
        <div
          className="rounded-[22px] p-8 text-center"
          style={{ background: 'rgba(29,78,216,0.06)', border: '1px solid rgba(56,189,248,0.18)' }}
        >
          <h3 className="text-lg font-black text-white mb-2">Grown-up looking for work skills instead?</h3>
          <p className="text-sm text-slate-400 mb-5">Compass teaches practical AI for non-technical professionals.</p>
          <a
            href="https://compass.aaryaai.dev"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black text-white transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#1d4ed8,#1e40af)', border: '1px solid rgba(56,189,248,0.45)' }}
          >
            <Compass size={14} /> Visit Compass <ExternalLink size={14} />
          </a>
        </div>
      </section>

    </div>
  );
}
