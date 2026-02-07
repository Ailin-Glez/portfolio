import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Laugh, SmilePlus, ChevronLeft, ChevronRight, Clapperboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExclusiveVideo } from '@/hooks/useExclusiveVideo';
import meme1 from '@/assets/fotos/memes/472440558_3395830140550871_198826107512849148_n.jpg';
import meme2 from '@/assets/fotos/memes/499216851_1661883167806856_6341256020799193747_n.jpg';
import meme3 from '@/assets/fotos/memes/meme 1.png';
// Chistes
import chisteJose from '@/assets/videos/chistes/Jose y el cerquillo.mp4';
import chisteAfeitarse from '@/assets/videos/chistes/Afeitarse.mp4';
import chisteVarita from '@/assets/videos/chistes/Varita magica.mp4';
import chistePeludito from '@/assets/videos/chistes/Peludito es mas bonito.mp4';

function ComedyPage() {
  useExclusiveVideo();
  const [currentMeme, setCurrentMeme] = useState(0);

  const memes = [meme1, meme2, meme3];

  const chistes = [
    { src: chisteAfeitarse, title: 'Afeitarse' },
    { src: chisteJose, title: 'José y el cerquillo' },
    { src: chistePeludito, title: 'Peludito es más bonito' },
    { src: chisteVarita, title: 'Varita mágica' },
  ];

  const [expandedChiste, setExpandedChiste] = useState(null);

  const nextMeme = () => setCurrentMeme((prev) => (prev + 1) % memes.length);
  const prevMeme = () => setCurrentMeme((prev) => (prev - 1 + memes.length) % memes.length);

  return (
    <>
      <Helmet>
        <title>Comedia - Ailin González</title>
        <meta name="description" content="El lado cómico de Ailin González: stand-up, humor y risas garantizadas." />
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
              <Laugh className="w-9 h-9 sm:w-12 sm:h-12 text-[var(--primary-turquoise)]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[var(--text-brown)] mb-3 sm:mb-4">
              Comedia
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-brown-light)] max-w-2xl mx-auto leading-relaxed">
              Porque la vida es demasiado seria para no reírse de ella
            </p>
          </motion.div>

          {/* Memes Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <SmilePlus className="w-6 h-6 text-[var(--primary-turquoise)]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-brown)]">Memes</h2>
            </div>

            <div className="relative max-w-lg mx-auto flex items-center gap-2 sm:gap-4">
              <button
                onClick={prevMeme}
                className="flex-shrink-0 p-2 rounded-full bg-[var(--primary-turquoise)]/10 hover:bg-[var(--primary-turquoise)]/20
                           text-[var(--primary-turquoise)] transition-colors"
                aria-label="Meme anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMeme}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden rounded-2xl shadow-lg border-2 border-[var(--primary-turquoise)]/20"
                  >
                    <img
                      src={memes[currentMeme]}
                      alt={`Meme ${currentMeme + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {memes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentMeme(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        i === currentMeme
                          ? 'bg-[var(--primary-turquoise)] scale-125'
                          : 'bg-[var(--primary-turquoise)]/25 hover:bg-[var(--primary-turquoise)]/50'
                      }`}
                      aria-label={`Ir al meme ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={nextMeme}
                className="flex-shrink-0 p-2 rounded-full bg-[var(--primary-turquoise)]/10 hover:bg-[var(--primary-turquoise)]/20
                           text-[var(--primary-turquoise)] transition-colors"
                aria-label="Siguiente meme"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </motion.div>

          {/* Chistes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <Clapperboard className="w-6 h-6 text-[var(--secondary-coral)]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-brown)]">Chistes</h2>
            </div>

            <div className="space-y-4">
              {chistes.map((chiste, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-2xl overflow-hidden
                             border-2 border-[var(--secondary-coral)]/15 shadow-md
                             hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedChiste(expandedChiste === index ? null : index)}
                    className="w-full flex items-center gap-4 p-4 sm:p-5 text-left
                               hover:bg-[var(--secondary-coral)]/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full
                                    bg-[var(--secondary-coral)]/15 flex items-center justify-center">
                      <Laugh className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--secondary-coral)]" />
                    </div>
                    <span className="text-base sm:text-lg font-semibold text-[var(--text-brown)] flex-1">
                      {chiste.title}
                    </span>
                    <ChevronRight className={`w-5 h-5 text-[var(--text-brown-light)] transition-transform duration-300 ${
                      expandedChiste === index ? 'rotate-90' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {expandedChiste === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                          <video
                            src={chiste.src}
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

    </>
  );
}

export default ComedyPage;