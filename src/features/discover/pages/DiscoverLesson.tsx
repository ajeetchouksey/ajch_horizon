import { useParams, Navigate } from 'react-router-dom';
import { DISCOVER_TOPICS } from '@/content/discover';
import { LessonPage } from '@/components/LessonPage';

import whatIsAi from '@/content/discover/what-is-ai.md?raw';
import howMachinesLearn from '@/content/discover/how-machines-learn.md?raw';
import aiInYourDay from '@/content/discover/ai-in-your-day.md?raw';
import aiVsHuman from '@/content/discover/ai-vs-human.md?raw';
import typesOfAi from '@/content/discover/types-of-ai.md?raw';

const CONTENT: Record<string, string> = {
  'what-is-ai': whatIsAi,
  'how-machines-learn': howMachinesLearn,
  'ai-in-your-day': aiInYourDay,
  'ai-vs-human': aiVsHuman,
  'types-of-ai': typesOfAi,
};

export default function DiscoverLesson() {
  const { slug = '' } = useParams();
  const topic = DISCOVER_TOPICS.find((t) => t.slug === slug);
  const markdown = CONTENT[slug];

  if (!topic || !markdown) return <Navigate to="/discover" replace />;

  return (
    <LessonPage
      icon={topic.icon}
      title={topic.title}
      summary={topic.summary}
      backTo="/discover"
      backLabel="All Discover topics"
      markdown={markdown}
    />
  );
}
