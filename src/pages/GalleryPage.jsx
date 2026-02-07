import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog.jsx';
import showLC1 from '@/assets/fotos/gallery/show LC 1.jpg';
import showLC2 from '@/assets/fotos/gallery/show LC 2.jpg';
import showLC3 from '@/assets/fotos/gallery/show LC 3.jpg';
import showLC4 from '@/assets/fotos/gallery/show LC 4.jpeg';
import showLC5 from '@/assets/fotos/gallery/show LC 5.jpg';
import jpg588 from '@/assets/fotos/gallery/JPG-588.jpg';
import jpg61 from '@/assets/fotos/gallery/JPG-61 (1).jpg';
import saveClip from '@/assets/fotos/gallery/SaveClip.App_502080217_1414290856366466_1642971280603127051_n.jpg';
import yisusPH from '@/assets/fotos/gallery/By @YisusPH _DSF7036 (1).jpg';
import dsc3910 from '@/assets/fotos/gallery/DSC_3910-5 (1).jpg';
import dsc5066 from '@/assets/fotos/gallery/DSC_5066-30.jpg';
import dsc5070 from '@/assets/fotos/gallery/DSC_5070-32.jpg';
import dsc5113 from '@/assets/fotos/gallery/DSC_5113-34.jpg';
import jpg18 from '@/assets/fotos/gallery/JPG-18.jpg';
import jpg5 from '@/assets/fotos/gallery/JPG-5 (1).jpg';

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { url: showLC1, title: 'Aguantando la risa' },
    { url: showLC2, title: 'Rock star' },
    { url: showLC3, title: 'No es lo que crees' },
    { url: showLC4, title: 'Confesiones' },
    { url: showLC5, title: 'Festival Miami es un chiste 2025' },
    { url: jpg588, title: 'Bruja buena' },
    { url: jpg61, title: 'Bruja mala' },
    { url: saveClip, title: 'Practicando el acorde' },
    { url: yisusPH, title: 'Conversando casual' },
    { url: dsc3910, title: 'Con ukelele' },
    { url: dsc5066, title: 'Amenazante' },
    { url: dsc5070, title: 'Sin labial no hay paraiso' },
    { url: dsc5113, title: 'Sesión fotográfica' },
    { url: jpg18, title: 'Mini maquillaje' },
    { url: jpg5, title: 'Asustada por salir' },
  ];

  return (
    <>
      <Helmet>
        <title>Galería - Ailin González</title>
        <meta name="description" content="Galería fotográfica de Ailin González: momentos artísticos, performances y vida creativa." />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mt-20 flex items-center justify-center mb-4">
              <Camera className="w-12 h-12 text-[var(--primary-turquoise)]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[var(--text-brown)] mb-4">
              Galería
            </h1>
            <p className="text-xl text-[var(--text-brown-light)] max-w-2xl mx-auto leading-relaxed">
              Momentos capturados en shows y presentaciones, historias visuales, instantes que merecen ser recordados
            </p>
          </motion.div>

          {/* Gallery Grid */}
          {images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedImage(image)}
                  className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square border-2 border-transparent hover:border-[var(--primary-turquoise)]"
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-turquoise)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">{image.title}</p>
                    </div>
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
                <ImageIcon className="w-20 h-20 text-[var(--primary-turquoise)] mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[var(--text-brown)] mb-4">
                  La cámara está lista...
                </h2>
                <p className="text-lg text-[var(--text-brown-light)] leading-relaxed mb-4">
                  Pronto este espacio se llenará de momentos capturados, performances y la vida artística de Ailin.
                </p>
                <p className="text-base text-[var(--text-brown-light)] italic">
                  (Mientras tanto, está decidiendo cuál de las 847 fotos en su galería merece estar aquí) 📸
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-2 bg-black/90 border-none shadow-none flex items-center justify-center">
          <img
            src={selectedImage?.url}
            alt={selectedImage?.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default GalleryPage;