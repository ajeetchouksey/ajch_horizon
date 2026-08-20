import { Link } from 'react-router-dom';
import { Sparkles, Briefcase, ArrowRight } from 'lucide-react';
import { GlassCard, SectionHeader, Badge } from '@/components/ui';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="page-eyebrow justify-center">Aarya family</p>
        <h1 className="text-4xl font-bold mb-3">
          <span className="heading-gradient">Spark</span>
        </h1>
        <p className="text-slate-400 max-w-lg mx-auto">
          Free AI learning, built for two audiences who don't want the jargon —
          kids, and grown-ups who just want to get things done.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <GlassCard accent="violet" className="p-6" rounded="2xl">
          <SectionHeader
            title="For Kids"
            icon={Sparkles}
            subtitle="Safe, simple lessons on how AI works and how to use it responsibly."
            as="h2"
          />
          <Badge label="Coming soon" variant="violet" className="mb-4" />
          <Link
            to="/kids"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-violet-200"
          >
            Explore <ArrowRight size={14} />
          </Link>
        </GlassCard>

        <GlassCard accent="blue" className="p-6" rounded="2xl">
          <SectionHeader
            title="For Grown-ups"
            icon={Briefcase}
            subtitle="Practical AI skills for non-technical professionals — no jargon, no code."
            as="h2"
          />
          <Badge label="Migrating content" variant="blue" className="mb-4" />
          <Link
            to="/grownups"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-300 hover:text-blue-200"
          >
            Explore <ArrowRight size={14} />
          </Link>
        </GlassCard>
      </div>
    </div>
  );
}
