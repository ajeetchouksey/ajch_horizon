import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, BookOpen, Heart, ArrowRight, Compass, ExternalLink } from 'lucide-react';
import { PulsingDot } from '@/components/ui';

// Faithful port of ajch_platform's former Pathways.tsx (Discovery) hero
// pattern, re-themed to Spark's amber/emerald kids accent. See
// docs/design-sync.md.
export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setMounted(true)); }, []);

  return (
    <div className="space-y-16 max-w-3xl mx-auto px-4 py-10">

      {/*━━━━ HERO */}
      <section className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-2 mb-4">
          <PulsingDot active color="bg-[var(--aarya-accent)]" size="sm" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: 'var(--aarya-accent)' }}>
            Spark
          </span>
        </div>
        <h1 className="text-4xl font-black text-white leading-tight mb-3">
          AI lessons for{' '}
          <span className="heading-gradient">curious kids.</span>
        </h1>
        <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
          Free, safe AI lessons for kids — no jargon, no shortcuts on safety,
          nothing to sign up for. Every lesson gets reviewed before it's
          published here. No exceptions.
        </p>
      </section>

      {/*━━━━ WHAT IS SPARK? */}
      <section className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: '60ms' }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: ShieldCheck, label: 'Safety-reviewed', desc: 'Every lesson passes a dedicated child-safety review before it publishes.' },
            { icon: BookOpen, label: 'No jargon', desc: 'Written for kids, not adults — clear language, real examples.' },
            { icon: Heart, label: 'No data collected', desc: 'Nothing to sign up for, nothing tracked. This site does not need your data.' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl p-5"
                style={{ background: 'rgba(8,15,30,0.97)', border: '1px solid rgba(71,85,105,0.18)' }}>
                <Icon size={18} className="text-slate-400 mb-3" />
                <p className="text-sm font-black text-white mb-1">{item.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/*━━━━ FOR KIDS CARD */}
      <section className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: '120ms' }}>
        <div
          className="group relative rounded-2xl overflow-hidden transition-all duration-500"
          style={{ background: 'rgba(8,15,30,0.97)', border: '1px solid rgba(251,191,36,0.22)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] opacity-70"
            style={{ background: 'linear-gradient(90deg, #fbbf24, transparent 70%)' }} />
          <div className="relative p-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(251,191,36,0.08)', border: '2px solid #fbbf24', boxShadow: '0 0 20px -6px #fbbf2440' }}>
                <Sparkles size={22} style={{ color: '#fbbf24' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-black text-white mb-1 tracking-tight">For Kids</h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  Safe, simple lessons on how AI works and how to use it
                  responsibly — built for kids, checked by grown-ups.
                </p>
                <Link
                  to="/kids"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #fbbf24, #fbbf24cc)', border: '1px solid rgba(251,191,36,0.22)' }}
                >
                  <BookOpen size={13} /> Explore <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*━━━━ CROSS-LINK TO COMPASS */}
      <section className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: '200ms' }}>
        <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{ background: 'rgba(29,78,216,0.06)', border: '1px solid rgba(56,189,248,0.18)' }}>
          <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: '#38bdf8' }}>
              Looking for AI skills for work, not for kids?
            </p>
            <h3 className="text-base font-black text-white mb-1">This isn't your section — Compass is.</h3>
            <p className="text-sm text-slate-400">
              Practical AI for non-technical professionals — finance, ops,
              anyone with a job to do. Same Aarya family, different audience.
            </p>
          </div>
          <a
            href="https://compass.aaryaai.dev"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-black rounded-xl text-white transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg,#1d4ed8,#1e40af)', border: '1px solid rgba(56,189,248,0.45)' }}
          >
            <Compass size={14} /> Visit Compass <ExternalLink size={14} />
          </a>
        </div>
      </section>

    </div>
  );
}
