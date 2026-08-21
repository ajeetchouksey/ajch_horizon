import { useParams, Navigate } from 'react-router-dom';
import { BUILD_TIERS } from '@/content/build';
import { LessonPage } from '@/components/LessonPage';

import sparks from '@/content/build/sparks.md?raw';
import flames from '@/content/build/flames.md?raw';
import blaze from '@/content/build/blaze.md?raw';

const CONTENT: Record<string, string> = { sparks, flames, blaze };

export default function BuildTier() {
  const { tier = '' } = useParams();
  const meta = BUILD_TIERS.find((t) => t.slug === tier);
  const markdown = CONTENT[tier];

  if (!meta || !markdown) return <Navigate to="/build" replace />;

  return (
    <LessonPage
      icon={meta.icon}
      title={meta.name}
      summary={meta.vibe}
      badge={{ label: meta.ageRange, variant: meta.badgeVariant }}
      backTo="/build"
      backLabel="All Build tiers"
      markdown={markdown}
    />
  );
}
