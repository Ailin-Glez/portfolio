import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BookMarked, PenTool, Book, Feather, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx';
import cubiertaImg from '@/assets/fotos/cubierta lg.webp';

function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentPoem, setCurrentPoem] = useState(0);

  const poems = [
    {
      title: 'No demores',
      source: 'Breve manual para esperar(te)',
      text: `Dime en qué rara ciudad
miras al mar sin barandas.
¿Cubres la felicidad
debajo de tus bufandas?

Dices que el otoño empieza,
que son rápidos los trenes,
que ha crecido la maleza,
pero no de cuándo vienes.

Aquí no hay trenes, te advierto,
ni bufandas, pero hay flores
para poblar un desierto.
Debes venir. No demores.`,
    },
    {
      title: 'Constelaciones',
      source: 'Breve manual para esperar(te)',
      text: `Tengo mi cuerpo repleto
de lunares como estrellas.
Los colecciono, son huellas
de cada beso indiscreto,
del orgasmo más completo
o la secreta adicción.
Te ofrezco, sin restricción,
mi cuerpo y la potestad
de trazar con libertad
tu propia constelación.`,
    },
  ];

  const nextPoem = () => setCurrentPoem((prev) => (prev + 1) % poems.length);
  const prevPoem = () => setCurrentPoem((prev) => (prev - 1 + poems.length) % poems.length);

  const stories = [];

  return (
    <>
      <Helmet>
        <title>Literatura - Ailin González</title>
        <meta
          name="description"
          content="Poemas y cuentos de Ailin González. Descubre su libro 'Breve manual para esperar(te)' y sus textos donde la narrativa se encuentra con la emoción."
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
              <PenTool className="w-9 h-9 sm:w-12 sm:h-12 text-[var(--primary-turquoise)]" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[var(--text-brown)] mb-3 sm:mb-4">
              Literatura
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[var(--text-brown-light)] max-w-2xl mx-auto leading-relaxed">
              Palabras que invitan a perderse
            </p>
          </motion.div>

          {/* ── Poemas ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 sm:mb-24"
          >
            <div className="flex items-center gap-3 mb-8">
              <Feather className="w-6 h-6 text-[var(--primary-turquoise)]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-brown)]">Poemas</h2>
            </div>

            {/* Book + Poem */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Book Cover */}
              <a
                href="https://www.amazon.com/dp/B0GL9MXGF3?ref=ppx_yo2ov_dt_b_fed_asin_title"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-[var(--primary-turquoise)]/20
                                hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  <img
                    src={cubiertaImg}
                    alt="Breve manual para esperar(te) - Cubierta del libro"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                  flex items-end justify-center pb-6">
                    <span className="bg-[var(--primary-turquoise)] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg">
                      Ver en Amazon
                    </span>
                  </div>
                </div>
              </a>

              {/* Poem Carousel */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPoem}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35 }}
                    className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-2xl
                               p-6 sm:p-8
                               border-2 border-[var(--primary-turquoise)]/20 shadow-lg"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-brown)] mb-2">
                      {poems[currentPoem].title}
                    </h3>
                    <p className="text-xs text-[var(--primary-turquoise)] font-medium mb-5">
                      de "{poems[currentPoem].source}"
                    </p>
                    <p className="text-[var(--text-brown-light)] leading-loose whitespace-pre-line font-serif text-base sm:text-lg">
                      {poems[currentPoem].text}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 mt-5">
                  <button
                    onClick={prevPoem}
                    className="p-2 rounded-full bg-[var(--primary-turquoise)]/10 hover:bg-[var(--primary-turquoise)]/20
                               text-[var(--primary-turquoise)] transition-colors"
                    aria-label="Poema anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex gap-2">
                    {poems.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPoem(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          i === currentPoem
                            ? 'bg-[var(--primary-turquoise)] scale-125'
                            : 'bg-[var(--primary-turquoise)]/25 hover:bg-[var(--primary-turquoise)]/50'
                        }`}
                        aria-label={`Ir al poema ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextPoem}
                    className="p-2 rounded-full bg-[var(--primary-turquoise)]/10 hover:bg-[var(--primary-turquoise)]/20
                               text-[var(--primary-turquoise)] transition-colors"
                    aria-label="Siguiente poema"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Reseña ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 sm:mb-24"
          >
            <div className="flex items-center gap-3 mb-8">
              <Book className="w-6 h-6 text-[var(--primary-turquoise)]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-brown)]">Reseña</h2>
            </div>

            <div className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border-2 border-[var(--primary-turquoise)]/20 shadow-lg">
              <p className="text-[var(--text-brown-light)] leading-relaxed text-sm sm:text-base mb-4 text-justify">
                <em>Nunca sabré si digo adiós, o pido que me salven.</em> Con ese verso del poeta Nelson Simón, se nos presenta este <strong>Breve manual para esperar(te)</strong>. Ailin González, su autora, nos instala en medio de una despedida, un viaje, dos amantes y una revisión pequeña y esencial de sus emociones. En este libro el lector podrá posicionarse desde la mirada de quien se queda, atado a la ciudad, a su circunstancia, reinventando una isla que se vuelve jaula. El que se queda elabora inventarios, envía telegramas, exige y advierte:
              </p>

              <blockquote className="pl-4 sm:pl-6 my-6 mx-auto max-w-md text-center font-serif text-[var(--text-brown)] leading-loose whitespace-pre-line text-sm sm:text-base italic">
{`…no sobreviven las presas.
Teje tú la telaraña,
conviértete en la montaña
inalcanzable al mortal,
cae siempre vertical,
para defenderte… engaña.`}
              </blockquote>

              <p className="text-[var(--text-brown-light)] leading-relaxed text-sm sm:text-base mb-4 text-justify">
                En la segunda parte del libro el lector podrá deshacer la maleta, sentir la extrañeza de quien se marcha y girar entre sweaters, catedrales, ruinas y bolsos extraños. Ailín nos propone estos apuntes de un viaje empleando estructuras rimadas como el romance, la décima y el soneto. Sin embargo, cuando la métrica y la rima son demasiada carga para poder expresar desde el dolor, acude al epigrama, el haiku, o la frase suelta.
              </p>

              <blockquote className="pl-4 sm:pl-6 my-6 mx-auto max-w-md text-center font-serif text-[var(--text-brown)] leading-loose whitespace-pre-line text-sm sm:text-base italic">
{`Vuela el pelícano
barcos sueltan amarras
otra ciudad
en las noches me salva
tu voz en el teléfono.`}
              </blockquote>

              <p className="text-[var(--text-brown-light)] leading-relaxed text-sm sm:text-base text-justify">
                Ailín es autora de los libros de cuentos: <em>Como mienten los boleros</em> (Ed. Áncoras, 2014); y <em>Otra canción para Magda</em> (Ed. Ávila, 2015). También publicó el libro infantil: <em>Un regalo diferente</em> (Ed. La Luz, 2018). Después de reinventarse y mutar hacia el diseño gráfico, la programación de software, la composición musical y el Stand Up Comedy, Ailín vuelve a la escritura, para contarnos una historia de amor desde la sencillez, sin alardes. En este libro de poesía de amor, hermosamente diseñado, se nos representa al olvido como un arma cargada. Habrá que leer estás páginas para saber si retumba algún disparo, o si hay regreso.
              </p>

              <p className="font-medium mt-6 text-md text-[var(--text-brown)] text-right">
                — Daniel Zayas
              </p>
            </div>
          </motion.div>

          {/* ── Cuentos ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <BookMarked className="w-6 h-6 text-[var(--primary-turquoise)]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-brown)]">Cuentos</h2>
            </div>

            {stories.length > 0 ? (
              <div className="space-y-6 sm:space-y-8">
                {stories.map((story, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setSelectedStory(story)}
                    className="group cursor-pointer bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-xl
                               p-5 sm:p-8
                               border-2 border-[var(--primary-turquoise)]/20 hover:border-[var(--secondary-coral)]
                               shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                      <h3 className="text-xl sm:text-3xl font-bold text-[var(--text-brown)] group-hover:text-[var(--secondary-coral)] transition-colors">
                        {story.title}
                      </h3>
                      <time className="text-xs sm:text-sm text-[var(--text-brown-light)] md:text-right">
                        {story.date}
                      </time>
                    </div>

                    <p className="text-sm sm:text-lg text-[var(--text-brown-light)] leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                      {story.excerpt}
                    </p>

                    <div className="text-sm text-[var(--primary-turquoise)] font-medium group-hover:text-[var(--secondary-coral)] transition-colors">
                      Leer historia completa →
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div
                className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-2xl
                           p-6 sm:p-10
                           max-w-2xl mx-auto text-center
                           border-2 border-[var(--primary-turquoise)]/20 shadow-lg"
              >
                <Book className="w-10 h-10 sm:w-14 sm:h-14 text-[var(--primary-turquoise)] mx-auto mb-4" />
                <p className="text-sm sm:text-lg text-[var(--text-brown-light)] leading-relaxed">
                  Nuevos cuentos en camino
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Story Dialog */}
      <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl mb-2 text-[var(--primary-turquoise)]">
              {selectedStory?.title}
            </DialogTitle>
            <p className="text-xs sm:text-sm text-[var(--text-brown-light)]">{selectedStory?.date}</p>
          </DialogHeader>
          <div className="prose prose-base sm:prose-lg max-w-none">
            <p className="text-[var(--text-brown)] leading-relaxed whitespace-pre-line">
              {selectedStory?.fullText}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default StoriesPage;
