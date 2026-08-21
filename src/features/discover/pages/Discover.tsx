import { Link } from 'react-router-dom';
import { Compass, ChevronRight } from 'lucide-react';
import { GlassCard, SectionHeader } from '@/components/ui';
import { DISCOVER_TOPICS } from '@/content/discover';

// "Discover" — What is AI? explainers. Master plan §5.1.
// Cards link to real full lesson pages (see DiscoverLesson.tsx) —
// metadata comes from the shared content-index module.
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
        {DISCOVER_TOPICS.map(({ slug, icon: Icon, title, summary, accent }) => (
          <Link key={slug} to={`/discover/${slug}`} className="block h-full">
            <GlassCard accent={accent} className="p-6 h-full transition-transform duration-200 hover:-translate-y-0.5">
              <Icon size={24} style={{ color: `var(--aarya-${accent}-400)` }} className="mb-3" />
              <p className="font-black text-white text-base mb-2">{title}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{summary}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: `var(--aarya-${accent}-400)` }}>
                Read the lesson <ChevronRight size={14} />
              </span>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
