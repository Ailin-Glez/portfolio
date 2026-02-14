import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Toaster } from './components/ui/toaster.jsx';

const StoriesPage = lazy(() => import('./pages/StoriesPage.jsx'));
const ComedyPage = lazy(() => import('./pages/ComedyPage.jsx'));
const MusicPage = lazy(() => import('./pages/MusicPage.jsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'));
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="literatura" element={<StoriesPage />} />
            <Route path="comedia" element={<ComedyPage />} />
            <Route path="musica" element={<MusicPage />} />
            <Route path="galeria" element={<GalleryPage />} />
            <Route path="sobre-mi" element={<AboutPage />} />
            <Route path="contacto" element={<Navigate to="/sobre-mi" replace />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;