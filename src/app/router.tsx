import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('@/features/home/pages/Home'));
const Discover = lazy(() => import('@/features/discover/pages/Discover'));
const DiscoverLesson = lazy(() => import('@/features/discover/pages/DiscoverLesson'));
const Play = lazy(() => import('@/features/play/pages/Play'));
const Build = lazy(() => import('@/features/build/pages/Build'));
const BuildTier = lazy(() => import('@/features/build/pages/BuildTier'));
const StaySafe = lazy(() => import('@/features/safety/pages/StaySafe'));
const StaySafeTopic = lazy(() => import('@/features/safety/pages/StaySafeTopic'));
const GrownUps = lazy(() => import('@/features/grownups/pages/GrownUps'));
const Privacy = lazy(() => import('@/features/legal/pages/Privacy'));

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/discover/:slug" element={<DiscoverLesson />} />
      <Route path="/play" element={<Play />} />
      <Route path="/build" element={<Build />} />
      <Route path="/build/:tier" element={<BuildTier />} />
      <Route path="/stay-safe" element={<StaySafe />} />
      <Route path="/stay-safe/:slug" element={<StaySafeTopic />} />
      <Route path="/grown-ups" element={<GrownUps />} />
      <Route path="/legal/privacy" element={<Privacy />} />
      {/* Retired Phase-1 kids gateway — the whole site is the kids product now. */}
      <Route path="/kids" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
