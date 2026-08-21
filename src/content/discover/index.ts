import type { ElementType } from 'react';
import { Brain, GitBranch, Smartphone, Users, Layers } from 'lucide-react';
import type { AccentKey } from '@/components/ui';

export interface DiscoverTopic {
  slug: string;
  icon: ElementType;
  title: string;
  summary: string;
  accent: AccentKey;
}

// Single source of truth for Discover's 5 topics (master plan §5.1) —
// read by the Discover hub page, the DiscoverLesson route, and Layout's
// breadcrumb label lookup.
export const DISCOVER_TOPICS: DiscoverTopic[] = [
  {
    slug: 'what-is-ai',
    icon: Brain,
    title: 'What is AI, really?',
    summary: "AI is a super-fast pattern-guesser, not a magic brain. It learns from examples instead of being told exact rules — and that's the key to understanding everything else about it.",
    accent: 'blue',
  },
  {
    slug: 'how-machines-learn',
    icon: GitBranch,
    title: 'How machines learn',
    summary: 'Imagine showing a computer 1,000 photos of cats until it starts noticing the patterns itself — pointy ears, whiskers, fur. That\'s the "show it lots of examples" story behind most AI.',
    accent: 'emerald',
  },
  {
    slug: 'ai-in-your-day',
    icon: Smartphone,
    title: 'AI in your day',
    summary: 'Video recommendations, voice assistants, game bots, autocorrect — AI is already quietly working behind a lot of the apps and games you use every day.',
    accent: 'amber',
  },
  {
    slug: 'ai-vs-human',
    icon: Users,
    title: 'AI vs. Human',
    summary: 'AI is great at spotting patterns in huge piles of data, fast. Only humans can truly feel, care, and make ethical judgment calls — that difference matters more than it sounds.',
    accent: 'purple',
  },
  {
    slug: 'types-of-ai',
    icon: Layers,
    title: 'Types of AI',
    summary: "Chatbots that talk, image makers that draw, recommenders that suggest, and robots that move — AI shows up in a few different shapes. Here's how to tell them apart.",
    accent: 'rose',
  },
];
