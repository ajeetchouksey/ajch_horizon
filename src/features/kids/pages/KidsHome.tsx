import { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { PulsingDot, Badge } from '@/components/ui';

// Placeholder — real content is blocked on the child-safety review gate
// (child-safety-reviewer agent) and the COPPA/data-collection decision.
// See the Spark plan, Phase 3. Hero pattern faithfully ported from
// ajch_platform's former Pathways.tsx (Discovery) — see docs/design-sync.md.
export default function KidsHome() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setMounted(true)); }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <section className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center justify-center gap-2 mb-4">
          <PulsingDot active color="bg-[var(--aarya-accent)]" size="sm" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: 'var(--aarya-accent)' }}>
            For Kids
          </span>
        </div>
        <div className="flex justify-center mb-4">
          <Sparkles size={32} className="text-[var(--aarya-accent)]" />
        </div>
        <h1 className="text-3xl font-black text-white leading-tight mb-4">Coming soon.</h1>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          We're building this the right way first — every lesson gets reviewed
          for age-appropriate language and safety before it's published here.
          No shortcuts.
        </p>
        <div
          className="inline-flex items-center gap-3 rounded-2xl p-4 text-left"
          style={{ background: 'rgba(8,15,30,0.97)', border: '1px solid rgba(251,191,36,0.22)' }}
        >
          <ShieldCheck size={18} className="text-[var(--aarya-accent)] shrink-0" />
          <span className="text-xs text-slate-400">
            <Badge label="No data collected here" variant="amber" size="xs" className="mr-1.5" />
            this page doesn't track you.
          </span>
        </div>
      </section>
    </div>
  );
}
