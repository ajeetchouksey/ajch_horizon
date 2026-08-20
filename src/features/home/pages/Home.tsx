import { Link } from 'react-router-dom';
import { Sparkles, Compass, ArrowRight, ExternalLink } from 'lucide-react';
import { GlassCard, SectionHeader, Badge } from '@/components/ui';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="page-eyebrow justify-center">Aarya family</p>
        <h1 className="text-4xl font-bold mb-3">
          <span className="heading-gradient">Spark</span>
        </h1>
        <p className="text-slate-400 max-w-lg mx-auto">
          Free, safe AI lessons for kids — no jargon, no shortcuts on
          safety, nothing to sign up for.
        </p>
      </div>

      <GlassCard accent="amber" className="p-6 mb-4" rounded="2xl">
        <SectionHeader
          title="For Kids"
          icon={Sparkles}
          subtitle="Safe, simple lessons on how AI works and how to use it responsibly."
          as="h2"
        />
        <Badge label="Coming soon" variant="amber" className="mb-4" />
        <Link
          to="/kids"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--aarya-accent)] hover:opacity-80"
        >
          Explore <ArrowRight size={14} />
        </Link>
      </GlassCard>

      <GlassCard className="p-6" rounded="2xl" border="border-slate-700/30">
        <div className="flex items-start gap-3">
          <Compass size={20} className="text-slate-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-slate-300 mb-1">
              Looking for AI skills for work, not for kids?
            </p>
            <p className="text-xs text-slate-500 mb-3">
              Compass teaches practical AI to non-technical professionals —
              finance, ops, anyone with a job to do. Same Aarya family,
              different audience.
            </p>
            <a
              href="https://compass.aaryaai.dev"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white"
            >
              Visit Compass <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
