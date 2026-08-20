import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('@/features/home/pages/Home'));
const KidsHome = lazy(() => import('@/features/kids/pages/KidsHome'));
const GrownupsHome = lazy(() => import('@/features/grownups/pages/GrownupsHome'));
const GrownupsTrack = lazy(() => import('@/features/grownups/pages/GrownupsTrack'));
const GrownupsArticle = lazy(() => import('@/features/grownups/pages/GrownupsArticle'));

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kids" element={<KidsHome />} />
      <Route path="/grownups" element={<GrownupsHome />} />
      <Route path="/grownups/:trackId" element={<GrownupsTrack />} />
      <Route path="/grownups/:trackId/:slug" element={<GrownupsArticle />} />
    </Routes>
  );
}
