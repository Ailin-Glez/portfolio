import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Heart, Sparkles, Mail, Send, Instagram, Youtube, Download, FileText, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import perfilImg from '@/assets/fotos/perfil.webp';
import posterImg from '@/assets/fotos/ailin poster.webp';

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.394 6.394 0 0 0-5.394 9.365 6.394 6.394 0 0 0 10.964-2.413V8.25c1.2.918 2.726 1.462 4.381 1.462v-3.5a4.755 4.755 0 0 1-.718-.026Z"/>
  </svg>
);

function AboutPage() {
  const { toast } = useToast();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/laquetocaelukelele_', label: 'Instagram', handle: '@laquetocaelukelele_' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@laquetocaelukelele_', label: 'TikTok', handle: '@laquetocaelukelele_' },
    { icon: Youtube, href: 'https://www.youtube.com/@laquetocaelukelele', label: 'YouTube', handle: '@laquetocaelukelele' },
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Sobre Mí - Ailin González</title>
        <meta name="description" content="Conoce a Ailin González: comediante, escritora, poeta y creadora de contenido. Ponte en contacto para shows, colaboraciones o simplemente para decir hola." />
      </Helmet>

      {/* ── Sobre Mí ── */}
      <div className="min-h-screen py-12 pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mt-10 flex items-center justify-center mb-4">
              <Sparkles className="w-12 h-12 text-[var(--primary-turquoise)]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[var(--text-brown)] mb-4">
              Sobre Mí
            </h1>
            <p className="text-xl text-[var(--text-brown-light)] max-w-2xl mx-auto leading-relaxed italic">
              "Soy la prueba viviente de que se puede ser escritora y comediante sin sufrir una crisis existencial... O al menos, no todos los días"
            </p>
          </motion.div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-[var(--primary-turquoise)]/20">
                <img
                  src={perfilImg}
                  alt="Portrait of Ailin González"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 warm-overlay opacity-30"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[var(--secondary-coral)] text-white rounded-full p-8 shadow-xl">
                <Heart className="w-12 h-12 fill-current" />
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-xl p-8 border-2 border-[var(--primary-turquoise)]/20 shadow-lg">
                <h2 className="text-3xl font-bold text-[var(--text-brown)] mb-4">
                  Hola, soy Ailin 👋
                </h2>
                <div className="space-y-4 text-[var(--text-brown-light)] leading-relaxed">
                  <p>
                    Soy <strong className="text-[var(--text-brown)]">Ailín González, comediante, escritora, poeta y creadora de contenido</strong>.
                    <p>
                    Mi nombre artístico es <strong className="text-[var(--text-brown)]">"la que toca el ukelele"</strong> —suerte que tengo un ukelele (que no es una guitarrita pequeña), porque si no sería simplemente "la que toca". Hago humor desde la música, rimando versos y chistes mientras me hago la que canto.                  
                  </p>
                    Mi vida es un delicado equilibrio entre escribir versos melancólicos y hacer chistes sobre lo absurdo de la existencia.
                    Algunos días gana la poesía, otros gana la comedia. La mayoría de los días, gana el café.
                  </p>

                  <p>
                    Vengo del mundo literario. Soy egresada del Centro de Formación Literaria Onelio Jorge Cardoso y he recibido premios como el Premio Poesía de Amor (2011), La Llave Pública (2014) y el Premio de la Ciudad de Nueva Gerona (2015). He publicado libros como <em>Como mienten los boleros</em>, <em>Otra canción para Magda</em>, el poema ilustrado <em>Un regalo diferente</em> y <em>Breve manual para esperar(te)</em>.
                  </p>
                  <p>
                    Después de años habitando las páginas de los libros, entendí que mis versos también necesitaban un micrófono. Así nació esta mutación natural hacia el humor musical y el stand-up, que me llevó a formar parte del grupo{' '}
                    <a href="https://latinoscomedy.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] underline transition-colors">Latinos Comedy</a>
                    {' '}y a participar en el primer festival de comedia en español en EE. UU., <a href='https://miamiesunchiste.com/' target='_blank' rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] underline transition-colors">Miami es un chiste</a> (2025).
                  </p>
                  <p>
                    He compartido escenario con comediantes como{' '}
                    <a href="https://www.instagram.com/luischataing" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] underline transition-colors">Luis Chataing</a>,{' '}
                    <a href="https://www.instagram.com/kabeto" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] underline transition-colors">Kabeto</a> y{' '}
                    <a href="https://www.instagram.com/abelardo/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] underline transition-colors">Abelardo</a>,
                    {' '}y he participado en los shows de <a href="https://www.chisteinterno.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] underline transition-colors">Chiste Interno</a> <em>Comediantes</em> y <em>Tres comediantes hablando sobre comunismo</em>.
                  </p>
                  <p>
                    Mi experiencia en el stand-up todavía cabe en un meme, pero voy sumando pasos, escenarios y aprendizajes. Con suerte, algún día podré completar un libro entero… aunque probablemente sea un libro de memes.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Media Kit ── */}
      <section className="pt-16 md:pt-24 pb-4 md:pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-12 h-12 text-[var(--primary-turquoise)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-brown)] mb-4">
              Media Kit
            </h2>
            <p className="text-xl text-[var(--text-brown-light)] max-w-2xl mx-auto leading-relaxed">
              Material de prensa para bookings y colaboraciones
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bio corta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 border-[var(--primary-turquoise)]/20 shadow-lg"
            >
              <h3 className="text-xl font-bold text-[var(--text-brown)] mb-4">Bio corta</h3>
              <p className="text-sm text-[var(--text-brown-light)] leading-relaxed mb-4 text-justify">
                Ailín González es escritora, comediante y creadora de contenido cubana radicada en Miami. Conocida en redes como "la que toca el ukelele", combina la poesía, el humor musical y el stand-up comedy. Es autora de los libros <em>Como mienten los boleros</em>, <em>Otra canción para Magda</em>, <em>Un regalo diferente</em> y <em>Breve manual para esperar(te)</em>. Forma parte del grupo Latinos Comedy y ha compartido escenario con comediantes como Luis Chataing, Kabeto y Abelardo.
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('Ailín González es escritora, comediante y creadora de contenido cubana radicada en Miami. Conocida en redes como "la que toca el ukelele", combina la poesía, el humor musical y el stand-up comedy. Es autora de los libros Como mienten los boleros, Otra canción para Magda, Un regalo diferente y Breve manual para esperar(te). Forma parte del grupo Latinos Comedy y ha compartido escenario con comediantes como Luis Chataing, Kabeto y Abelardo.');
                  toast({ title: 'Bio copiada al portapapeles' });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                           bg-[var(--primary-turquoise)]/10 text-[var(--primary-turquoise)]
                           hover:bg-[var(--primary-turquoise)]/20 transition-colors"
              >
                <FileText className="w-4 h-4" />
                Copiar bio
              </button>
            </motion.div>

            {/* Fotos de prensa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 border-[var(--primary-turquoise)]/20 shadow-lg"
            >
              <h3 className="text-xl font-bold text-[var(--text-brown)] mb-4">Fotos de prensa</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                  <img src={perfilImg} alt="Ailin González - Foto de prensa 1" className="w-full h-full object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                  <img src={posterImg} alt="Ailin González - Foto de prensa 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={perfilImg}
                  download="ailin-gonzalez-prensa-1.webp"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                             bg-[var(--primary-turquoise)]/10 text-[var(--primary-turquoise)]
                             hover:bg-[var(--primary-turquoise)]/20 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Foto 1
                </a>
                <a
                  href={posterImg}
                  download="ailin-gonzalez-prensa-2.webp"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                             bg-[var(--primary-turquoise)]/10 text-[var(--primary-turquoise)]
                             hover:bg-[var(--primary-turquoise)]/20 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Foto 2
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contacto booking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-[var(--primary-turquoise)]/10 backdrop-blur-sm rounded-xl p-6 border-2 border-[var(--primary-turquoise)]/20 text-center"
          >
            <p className="text-[var(--text-brown)] font-medium mb-2">
              Para bookings y colaboraciones:
            </p>
            <a
              href="mailto:laquetocaelukelele@gmail.com?subject=Booking / Colaboración"
              className="text-lg text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] font-semibold transition-colors"
            >
              laquetocaelukelele@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section className="pt-4 md:pt-6 pb-16 md:pb-14 bg-[var(--primary-turquoise)]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-center">
            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 w-full max-w-xl"
            >

              {/* Social Media */}
              <div className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-xl p-6 border-2 border-[var(--primary-turquoise)]/20 shadow-lg">
                <h3 className="text-xl font-bold text-[var(--text-brown)] mb-4">Sígueme en redes</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg
                                   hover:bg-[var(--primary-turquoise)]/10 transition-all duration-200 group"
                      >
                        <div className="p-2 rounded-full bg-[var(--primary-turquoise)]/10 text-[var(--primary-turquoise)]
                                        group-hover:bg-[var(--secondary-coral)]/20 group-hover:text-[var(--secondary-coral)]
                                        transition-all duration-200">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium text-[var(--text-brown)] text-sm">{social.label}</p>
                          <p className="text-xs text-[var(--text-brown-light)]">{social.handle}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Fun Note */}
              <div className="bg-[var(--secondary-coral)]/10 backdrop-blur-sm rounded-xl p-6 border-2 border-[var(--secondary-coral)]/20">
                <p className="text-sm text-[var(--text-brown-light)] italic">
                  💌 Respondo todos los mensajes personalmente. Si tardo, no es falta de interés: estoy buscando la rima perfecta… o preparando café. ¡Gracias por tu paciencia!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
