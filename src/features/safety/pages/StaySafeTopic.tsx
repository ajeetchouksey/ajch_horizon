import { useParams, Navigate } from 'react-router-dom';
import { SAFETY_TOPICS } from '@/content/stay-safe';
import { LessonPage } from '@/components/LessonPage';

import privacyData from '@/content/stay-safe/privacy-data.md?raw';
import scamsPhishing from '@/content/stay-safe/scams-phishing.md?raw';
import deepfakesMisinformation from '@/content/stay-safe/deepfakes-misinformation.md?raw';
import digitalFootprint from '@/content/stay-safe/digital-footprint.md?raw';
import healthyHabits from '@/content/stay-safe/healthy-habits.md?raw';

const CONTENT: Record<string, string> = {
  'privacy-data': privacyData,
  'scams-phishing': scamsPhishing,
  'deepfakes-misinformation': deepfakesMisinformation,
  'digital-footprint': digitalFootprint,
  'healthy-habits': healthyHabits,
};

export default function StaySafeTopic() {
  const { slug = '' } = useParams();
  const topic = SAFETY_TOPICS.find((t) => t.slug === slug);
  const markdown = CONTENT[slug];

  if (!topic || !markdown) return <Navigate to="/stay-safe" replace />;

  return (
    <LessonPage
      icon={topic.icon}
      title={topic.title}
      summary={topic.summary}
      backTo="/stay-safe"
      backLabel="All Stay Safe topics"
      markdown={markdown}
    />
  );
}
