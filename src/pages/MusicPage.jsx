import React from 'react';
import { Helmet } from 'react-helmet';
import { Music, Music as Guitar, ExternalLink, CalendarHeart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useExclusiveVideo } from '@/hooks/useExclusiveVideo';

import efemeride1 from '@/assets/videos/efemerides/13 de febrero.mp4';
import efemeride2 from '@/assets/videos/efemerides/14 de marzo - Dia mundial del sueño.mp4';
import efemeride3 from '@/assets/videos/efemerides/9 febrero - Dia mundial de la pizza.mp4';
// Canciones
import cancionComunista from '@/assets/videos/canciones/comunista.mp4';
import cancionAmerican from '@/assets/videos/canciones/American dream.mp4';
import cancionMiami from '@/assets/videos/canciones/Miami es un chiste.mp4';
import cancionMetrico from '@/assets/videos/canciones/Sistema métrico cubano.mp4';
import cancionMiedo from '@/assets/videos/canciones/Miedo viajar en avion.mp4';
import cancionChataing from '@/assets/videos/canciones/Chataing.mp4';
import cancionAlcohol from '@/assets/videos/canciones/Alcohol.mp4';
// Venezuela
import vzlaNoEsLoMismo from '@/assets/videos/venezuela/No es lo mismo.mp4';
import vzlaAprendiendo from '@/assets/videos/venezuela/Aprendiendo.mp4';
import vzlaArrecho from '@/assets/videos/venezuela/Arrecho.mp4';
import vzlaVenezuela from '@/assets/videos/venezuela/Venezuela.mp4';

function MusicPage() {
  useExclusiveVideo();

  const efemerides = [
    { src: efemeride3, title: 'Día mundial de la pizza', date: '9 de febrero' },
    { src: efemeride1, title: 'Día del amante', date: '13 de febrero' },
    { src: efemeride2, title: 'Día del sueño', date: '14 de marzo' },
  ];

  const canciones = [
    { src: cancionAlcohol, title: 'Alcohol' },
    { src: cancionAmerican, title: 'American Dream' },
    { src: cancionChataing, title: 'Chataing' },
    { src: cancionComunista, title: 'Comunista' },
    { src: cancionMiami, title: 'Miami es un chiste' },
    { src: cancionMiedo, title: 'Miedo a viajar en avión' },
    { src: cancionMetrico, title: 'Sistema métrico cubano' },
  ];

  const venezuela = [
    { src: vzlaArrecho, title: 'Arrecho' },
    { src: vzlaAprendiendo, title: 'Aprendiendo' },
    { src: vzlaVenezuela, title: 'Venezuela' },
    { src: vzlaNoEsLoMismo, title: 'No es lo mismo' },
  ];


  return (
    <>
      <Helmet>
        <title>Música - Ailin González</title>
        <meta
          name="description"
          content="Explora la música de Ailin González: ukelele, spoken word y melodías que tocan el alma."
        />
      </Helmet>

      <div className="min-h-screen py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <div className="mt-16 sm:mt-20 flex items-center justify-center mb-3 sm:mb-4">
              <Guitar className="w-9 h-9 sm:w-12 sm:h-12 text-[var(--primary-turquoise)]" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[var(--text-brown)] mb-3 sm:mb-4">
              Música
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[var(--text-brown-light)] max-w-2xl mx-auto leading-relaxed">
              Donde el ukelele se encuentra con las palabras y nacen canciones
            </p>
          </motion.div>

          {/* Featured Release */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 sm:mb-16"
          >
            <div
              className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-2xl
                         p-5 sm:p-8
                         max-w-3xl mx-auto
                         border-2 border-[var(--secondary-coral)]/30 shadow-xl
                         hover:border-[var(--secondary-coral)]/50 transition-all duration-300"
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://open.spotify.com/embed/album/2tzmR0amnjECRtRfPkbujT?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  style={{ border: 'none', borderRadius: '12px' }}
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify album player"
                />
              </div>

              <div className="mt-4 sm:mt-5 flex justify-center">
                <a
                  href="https://open.spotify.com/intl-es/album/2tzmR0amnjECRtRfPkbujT?si=_4CPBwmBS1qBm2NA66AQNg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             px-5 sm:px-6 py-2.5 sm:py-3
                             text-sm sm:text-base
                             bg-[var(--secondary-coral)] text-white rounded-full
                             hover:bg-[var(--primary-turquoise)] transition-all hover:scale-105 shadow-lg"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  Escuchar en Spotify
                </a>
              </div>
            </div>
          </motion.div>

          {/* Canciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Music className="w-6 h-6 text-[var(--secondary-coral)]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-brown)]">Canciones</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {canciones.map((cancion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-xl overflow-hidden
                             border border-[var(--secondary-coral)]/20 shadow-md
                             hover:shadow-lg hover:border-[var(--secondary-coral)]/40 transition-all duration-300"
                >
                  <video
                    src={cancion.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full aspect-[9/16] object-cover"
                  />
                  <div className="p-2 sm:p-3 text-center">
                    <p className="text-xs sm:text-sm font-semibold text-[var(--text-brown)] truncate">
                      {cancion.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Venezuela */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-8 justify-center">
              <span className="text-2xl">🇻🇪</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-brown)]">Canciones de Venezuela</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {venezuela.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-xl overflow-hidden
                             border border-[var(--primary-turquoise)]/20 shadow-md
                             hover:shadow-lg hover:border-[var(--primary-turquoise)]/40 transition-all duration-300"
                >
                  <video
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full aspect-[9/16] object-cover"
                  />
                  <div className="p-2 sm:p-3 text-center">
                    <p className="text-xs sm:text-sm font-semibold text-[var(--text-brown)] truncate">
                      {video.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Efemérides / Días Raros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-8 justify-center">
              <CalendarHeart className="w-6 h-6 text-[var(--primary-turquoise)]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-brown)]">Efemérides / Días Raros</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {efemerides.map((efemeride, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-2xl overflow-hidden
                             border-2 border-[var(--primary-turquoise)]/20 shadow-lg"
                >
                  <video
                    src={efemeride.src}
                    controls
                    playsInline
                    className="w-full h-auto"
                  />
                  <div className="p-3 sm:p-4">
                    <p className="text-sm font-semibold text-[var(--text-brown)]">
                      {efemeride.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default MusicPage;