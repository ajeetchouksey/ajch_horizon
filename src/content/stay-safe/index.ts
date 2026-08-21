import type { ElementType } from 'react';
import { Lock, Mail, Fingerprint, Footprints, Smile } from 'lucide-react';

export interface SafetyTopic {
  slug: string;
  icon: ElementType;
  title: string;
  summary: string;
}

// Single source of truth for Stay Safe's 5 deeper-safety topics
// (master plan §7.2) — read by the Stay Safe hub page, the
// StaySafeTopic route, and Layout's breadcrumb label lookup.
export const SAFETY_TOPICS: SafetyTopic[] = [
  {
    slug: 'privacy-data',
    icon: Lock,
    title: 'Privacy & data',
    summary: 'Why does AI want your info? Data is the fuel — guard it.',
  },
  {
    slug: 'scams-phishing',
    icon: Mail,
    title: 'Scams & phishing',
    summary: 'AI-written fake messages, prize scams, fake friend requests.',
  },
  {
    slug: 'deepfakes-misinformation',
    icon: Fingerprint,
    title: 'Deepfakes & misinformation',
    summary: 'Spotting the tells: weird hands, blurry backgrounds, "too perfect."',
  },
  {
    slug: 'digital-footprint',
    icon: Footprints,
    title: 'Digital footprint',
    summary: 'What you type may be stored — think before you share.',
  },
  {
    slug: 'healthy-habits',
    icon: Smile,
    title: 'Healthy habits',
    summary: 'Screen-time balance; AI is a tool, not a friend replacement.',
  },
];
