import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('@/features/home/pages/Home'));
const KidsHome = lazy(() => import('@/features/kids/pages/KidsHome'));
const GrownupsHome = lazy(() => import('@/features/grownups/pages/GrownupsHome'));

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kids" element={<KidsHome />} />
      <Route path="/grownups" element={<GrownupsHome />} />
    </Routes>
  );
}
