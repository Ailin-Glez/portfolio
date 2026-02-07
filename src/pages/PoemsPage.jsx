import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BookOpen, Feather } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx';

function PoemsPage() {
  const [selectedPoem, setSelectedPoem] = useState(null);

  // Placeholder poems - empty state for now
  const poems = [];

  return (
    <>
      <Helmet>
        <title>Poemas - Ailin González</title>
        <meta name="description" content="Explora la colección de poemas de Ailin González, donde las palabras danzan entre la melancolía y la esperanza." />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mt-20 flex items-center justify-center mb-4">
              <Feather className="w-12 h-12 text-[var(--primary-turquoise)]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-brown)] mb-4">
              Poemas
            </h1>
            <p className="text-xl text-[var(--text-brown-light)] max-w-2xl mx-auto leading-relaxed">
              Versos que nacen del alma, palabras que buscan refugio en el papel
            </p>
          </motion.div>

          {/* Poems Grid or Empty State */}
          {poems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {poems.map((poem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedPoem(poem)}
                  className="group cursor-pointer bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-xl p-6 border-2 border-[var(--primary-turquoise)]/20 hover:border-[var(--secondary-coral)] shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-2xl font-bold text-[var(--text-brown)] mb-4 group-hover:text-[var(--secondary-coral)] transition-colors">
                    {poem.title}
                  </h3>
                  <p className="text-[var(--text-brown-light)] leading-relaxed line-clamp-4 italic">
                    {poem.preview}
                  </p>
                  <div className="mt-4 text-sm text-[var(--primary-turquoise)] font-medium group-hover:text-[var(--secondary-coral)] transition-colors">
                    Leer más →
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-2xl p-12 max-w-2xl mx-auto border-2 border-[var(--primary-turquoise)]/30 shadow-xl">
                <BookOpen className="w-20 h-20 text-[var(--primary-turquoise)] mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[var(--text-brown)] mb-4">
                  El lienzo está en blanco...
                </h2>
                <p className="text-lg text-[var(--text-brown-light)] leading-relaxed mb-4">
                  Por ahora, este espacio espera pacientemente a que las musas visiten a Ailin.
                </p>
                <p className="text-base text-[var(--text-brown-light)] italic">
                  (Pero entre tú y yo, seguro que ya está escribiendo algo hermoso en su libreta) ✨
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Poem Dialog */}
      <Dialog open={!!selectedPoem} onOpenChange={() => setSelectedPoem(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl mb-4 text-[var(--primary-turquoise)]">{selectedPoem?.title}</DialogTitle>
          </DialogHeader>
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--text-brown)] leading-loose whitespace-pre-line">
              {selectedPoem?.fullText}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PoemsPage;