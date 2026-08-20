import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Search, BookOpen, Sparkles, ArrowRight, Compass, ExternalLink } from 'lucide-react';

// "Big & Playful" landing page direction — larger scale, journey-style
// steps, chunkier CTA. Chosen from three composition directions explored
// on a design canvas; still built entirely on Spark's existing brand
// system (@aaryaai/brand tokens + amber/emerald accent extension). See
// docs/design-sync.md.
const STEPS = [
  {
    icon: Search,
    accent: 'var(--aarya-accent)',
    bg: 'rgba(251,191,36,0.10)',
    title: '1. Pick a lesson',
    desc: 'Short, simple topics about how AI works in everyday life.',
  },
  {
    icon: BookOpen,
    accent: 'var(--aarya-accent-2)',
    bg: 'rgba(52,211,153,0.10)',
    title: '2. Read & explore',
    desc: 'Clear words, real examples, no grown-up jargon.',
  },
  {
    icon: Sparkles,
    accent: 'var(--aarya-accent)',
    bg: 'rgba(251,191,36,0.10)',
    title: '3. Stay curious',
    desc: 'No account, no tracking — just come back and read more.',
  },
] as const;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setMounted(true)); }, []);

  return (
    <div className="space-y-24 pb-10">

      {/*━━━━ HERO */}
      <section className={`max-w-xl mx-auto px-4 pt-24 text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div
          className="inline-flex items-center gap-2 px-[18px] py-2 rounded-full mb-7"
          style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.25)' }}
        >
          <ShieldCheck size={15} className="text-[var(--aarya-accent)]" />
          <span className="text-xs font-black text-[var(--aarya-accent)]">
            Every lesson is safety-reviewed — no exceptions
          </span>
        </div>

        <h1 className="text-6xl font-black leading-[1.02] tracking-tight text-white mb-6">
          Learn AI.
          <br />
          <span className="heading-gradient">Have fun doing it.</span>
        </h1>

        <p className="text-lg leading-relaxed text-slate-400 max-w-md mx-auto mb-9">
          Free lessons made just for kids — no jargon, no sign-up, nothing tracked.
        </p>

        <Link
          to="/kids"
          className="inline-flex items-center gap-2.5 px-10 py-[18px] rounded-2xl text-[17px] font-black transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02]"
          style={{
            color: '#0e1a2d',
            background: 'linear-gradient(135deg, var(--aarya-accent), var(--aarya-accent-2))',
            boxShadow: '0 12px 32px -8px color-mix(in srgb, var(--aarya-accent) 40%, transparent)',
          }}
        >
          Start exploring
          <ArrowRight size={18} strokeWidth={2.6} />
        </Link>
      </section>

      {/*━━━━ HOW SPARK WORKS */}
      <section className={`max-w-2xl mx-auto px-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: '80ms' }}>
        <p className="text-center text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-12">
          How Spark works
        </p>
        <div className="relative grid grid-cols-3 gap-6">
          <svg className="absolute top-11 left-0 w-full h-0.5 -z-10" preserveAspectRatio="none" viewBox="0 0 700 2">
            <line x1="120" y1="1" x2="580" y2="1" stroke="var(--aarya-accent)" strokeWidth="2" strokeDasharray="2 10" opacity="0.35" />
          </svg>
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center transition-transform duration-200 hover:-translate-y-1">
                <div
                  className="w-[88px] h-[88px] mx-auto mb-5 rounded-full flex items-center justify-center"
                  style={{ background: step.bg, border: `2px solid ${step.accent}`, boxShadow: `0 0 28px -8px ${step.accent}` }}
                >
                  <Icon size={34} style={{ color: step.accent }} />
                </div>
                <p className="text-[15px] font-black text-white mb-2">{step.title}</p>
                <p className="text-[13px] text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/*━━━━ CROSS-LINK TO COMPASS */}
      <section className={`max-w-2xl mx-auto px-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: '160ms' }}>
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
