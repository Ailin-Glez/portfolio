import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import PoemsPage from './pages/PoemsPage.jsx';
import StoriesPage from './pages/StoriesPage.jsx';
import ComedyPage from './pages/ComedyPage.jsx';
import MusicPage from './pages/MusicPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import { Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import { Toaster } from './components/ui/toaster.jsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="poemas" element={<PoemsPage />} />
          <Route path="cuentos" element={<StoriesPage />} />
          <Route path="comedia" element={<ComedyPage />} />
          <Route path="musica" element={<MusicPage />} />
          <Route path="galeria" element={<GalleryPage />} />
          <Route path="sobre-mi" element={<AboutPage />} />
          <Route path="contacto" element={<Navigate to="/sobre-mi" replace />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;