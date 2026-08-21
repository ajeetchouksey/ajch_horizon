import type { ElementType } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { GlassCard, Badge } from '@/components/ui';
import type { AccentKey, BadgeVariant } from '@/components/ui';

interface AgeTierCardProps {
  icon: ElementType;
  name: string;
  ageRange: string;
  vibe: string;
  accent: AccentKey;
  badgeVariant: BadgeVariant;
  to?: string;
}

// One card for the Sparks / Flames / Blaze age-tier picker (master plan §4.4, §6).
export function AgeTierCard({ icon: Icon, name, ageRange, vibe, accent, badgeVariant, to = '/build' }: AgeTierCardProps) {
  return (
    <Link to={to} className="block h-full">
      <GlassCard
        accent={accent}
        className="p-5 h-full flex items-center justify-between gap-4 transition-transform duration-200 hover:-translate-y-0.5"
      >
        <div className="flex items-center gap-3">
          <Icon size={20} className="shrink-0" style={{ color: `var(--aarya-${accent}-400, var(--aarya-accent))` }} />
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-black text-white text-base">{name}</span>
              <Badge label={ageRange} variant={badgeVariant} size="xs" />
            </div>
            <p className="text-xs text-slate-400">{vibe}</p>
          </div>
        </div>
        <ChevronRight size={16} className="shrink-0 text-slate-500" />
      </GlassCard>
    </Link>
  );
}
