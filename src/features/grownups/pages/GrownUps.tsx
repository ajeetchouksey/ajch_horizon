import { Link } from 'react-router-dom';
import {
  Users, Lock, ShieldCheck, MessageCircle, GraduationCap, HelpCircle,
  ChevronRight, Compass, ExternalLink,
} from 'lucide-react';
import { GlassCard, Badge } from '@/components/ui';

// "Grown-Ups" — parent & teacher trust hub. Master plan §5.5 (subset).
// Full parent guide, teacher lesson packs, and FAQ are later content-
// calendar work; this phase covers the safety promise + a real link to
// the drafted Privacy Policy. The Compass cross-link lives here, not on
// the homepage — a different persona (career AI skills) from the parent
// checking on their kid's safety.
export default function GrownUps() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 mb-2">
        <Users size={20} className="text-[var(--aarya-accent)]" />
        <h1 className="text-xl font-bold text-white">For Parents & Teachers</h1>
      </div>
      <p className="text-sm text-slate-400 max-w-xl mb-8">
        Spark is built so grown-ups can trust it as much as kids enjoy it. Here's exactly what that means.
      </p>

      <GlassCard accent="amber" className="p-7 mb-6">
        <div className="flex items-start gap-3 mb-4">
          <Lock size={22} className="text-[var(--aarya-accent)] shrink-0 mt-0.5" />
          <div>
            <p className="font-black text-white text-base mb-1">Our safety promise</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Spark is a protected sandbox: <span className="text-slate-200 font-semibold">no personal data collected from children</span>,
              no unsafe or unmoderated chats, and every lesson is reviewed for age-appropriate language and safety before it's published — no shortcuts.
              No child account is ever required to learn.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge icon={ShieldCheck} label="Safe by design" variant="amber" />
          <Badge icon={Lock} label="No data collection from kids" variant="emerald" />
        </div>
      </GlassCard>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <GlassCard accent="blue" className="p-6">
          <MessageCircle size={20} className="text-blue-400 mb-3" />
          <p className="font-bold text-white text-sm mb-1">Talking to your kid about AI</p>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            A short guide with discussion prompts for starting the AI-safety conversation at home.
          </p>
          <Badge label="Guide coming soon" variant="slate" size="xs" />
        </GlassCard>
        <GlassCard accent="emerald" className="p-6">
          <GraduationCap size={20} className="text-emerald-400 mb-3" />
          <p className="font-bold text-white text-sm mb-1">Teacher lesson packs</p>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            Classroom-ready material built around the same 5 Golden Safety Rules kids see on Spark.
          </p>
          <Badge label="Packs coming soon" variant="slate" size="xs" />
        </GlassCard>
      </div>

      <GlassCard accent="slate" className="p-6 mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <HelpCircle size={20} className="text-slate-400 shrink-0" />
          <div>
            <p className="font-bold text-white text-sm">Questions about privacy or safety?</p>
            <p className="text-xs text-slate-400">Read the full policy — what we collect (almost nothing), and why.</p>
          </div>
        </div>
        <Link
          to="/legal/privacy"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--aarya-accent)] hover:opacity-80 shrink-0"
        >
          Privacy Policy <ChevronRight size={14} />
        </Link>
      </GlassCard>

      <div
        className="rounded-[22px] p-7 text-center"
        style={{ background: 'rgba(29,78,216,0.06)', border: '1px solid rgba(56,189,248,0.18)' }}
      >
        <h3 className="text-base font-black text-white mb-2">Looking for AI skills for yourself instead?</h3>
        <p className="text-sm text-slate-400 mb-5">Compass teaches practical AI for non-technical professionals — a separate track, built for grown-ups.</p>
        <a
          href="https://compass.aaryaai.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-black text-white transition-all hover:-translate-y-0.5"
          style={{ background: 'linear-gradient(135deg,#1d4ed8,#1e40af)', border: '1px solid rgba(56,189,248,0.45)' }}
        >
          <Compass size={14} /> Visit Compass <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
