import type { ElementType } from 'react';
import { Sparkles, Flame, Zap } from 'lucide-react';
import type { AccentKey, BadgeVariant } from '@/components/ui';

export interface BuildTierMeta {
  slug: string;
  icon: ElementType;
  name: string;
  ageRange: string;
  vibe: string;
  accent: AccentKey;
  badgeVariant: BadgeVariant;
}

// Single source of truth for the 3 age tiers (master plan §6) — read by
// Home's age-tier picker, the Build hub page, the BuildTier route, and
// Layout's breadcrumb label lookup.
export const BUILD_TIERS: BuildTierMeta[] = [
  { slug: 'sparks', icon: Sparkles, name: 'Sparks', ageRange: '8–10', vibe: 'Curious beginners', accent: 'emerald', badgeVariant: 'emerald' },
  { slug: 'flames', icon: Flame, name: 'Flames', ageRange: '11–13', vibe: 'Confident creators', accent: 'amber', badgeVariant: 'amber' },
  { slug: 'blaze', icon: Zap, name: 'Blaze', ageRange: '14–16', vibe: 'Future builders', accent: 'purple', badgeVariant: 'purple' },
];
