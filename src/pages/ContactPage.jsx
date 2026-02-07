import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Mail, Send, Instagram, Youtube, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

function ContactPage() {
  const { toast } = useToast();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "📬 Mensaje recibido",
      description: "Gracias por escribir. Te responderé pronto (probablemente después de mi tercera taza de café).",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  // Custom Icons
  const TikTokIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.394 6.394 0 0 0-5.394 9.365 6.394 6.394 0 0 0 10.964-2.413V8.25c1.2.918 2.726 1.462 4.381 1.462v-3.5a4.755 4.755 0 0 1-.718-.026Z" />
    </svg>
  );

  const SpotifyIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.375 -0.375 12 12"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75">
        <path d="M5.625 0.703125c2.71828125 0 4.921875 2.20359375 4.921875 4.921875s-2.20359375 4.921875 -4.921875 4.921875S0.703125 8.34328125 0.703125 5.625 2.90671875 0.703125 5.625 0.703125Z" />
        <path d="M8.671875 4.775156249999999c-0.7535156249999999 -0.579609375 -1.723828125 -0.9075 -2.7067968749999998 -0.998671875 -0.9782812500000001 -0.090703125 -2.0114062500000003 0.04921875 -2.9182031250000002 0.451171875" />
        <path d="M7.8609374999999995 6.251953125c-0.594375 -0.46828125 -1.3621875 -0.7335937499999999 -2.1398437500000003 -0.806953125 -0.7942968749999999 -0.075 -1.63453125 0.04640625 -2.364375 0.392109375" />
        <path d="M7.042734375 7.734375c-0.43453125000000004 -0.35390625 -0.9963281250000001 -0.5540625 -1.5656249999999998 -0.609375 -0.566015625 -0.055078125 -1.164375 0.030468750000000003 -1.68820312500000004 0.27632812500000004" />
      </g>
    </svg>
  );

  const PatreonIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z" />
    </svg>
  );

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/laquetocaelukelele_', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@laquetocaelukelele_', label: 'TikTok' },
    { icon: Youtube, href: 'https://www.youtube.com/@laquetocaelukelele', label: 'YouTube' },
    { icon: SpotifyIcon, href: 'https://open.spotify.com/intl-es/artist/5Fq06EhgUeDvxtTyXI8sVp?si=qvGM5ACfQNGmaXiqSYa0zg', label: 'Spotify' },
    { icon: PatreonIcon, href: 'https://www.patreon.com/cw/laquetocaelukelele', label: 'Patreon' },
    { icon: Facebook, href: 'https://www.facebook.com/laquetocaelukelele', label: 'Facebook' },
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Ailin González</title>
        <meta name="description" content="Ponte en contacto con Ailin González para shows, colaboraciones o simplemente para decir 'hola.'" />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mt-20 flex items-center justify-center mb-4">
              <Mail className="w-12 h-12 text-[var(--primary-turquoise)]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[var(--text-brown)] mb-4">
              Contacto
            </h1>
            <p className="text-xl text-[var(--text-brown-light)] max-w-2xl mx-auto leading-relaxed">
              ¿Tienes una idea? ¿Una propuesta? ¿O simplemente quieres decir hola? Escríbeme
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-2xl p-8 border-2 border-[var(--primary-turquoise)]/20 shadow-xl">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-brown)] mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-[var(--primary-turquoise)]/20 rounded-lg focus:outline-none focus:border-[var(--primary-turquoise)] transition-colors text-[var(--text-brown)]"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-brown)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-[var(--primary-turquoise)]/20 rounded-lg focus:outline-none focus:border-[var(--primary-turquoise)] transition-colors text-[var(--text-brown)]"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-brown)] mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border-2 border-[var(--primary-turquoise)]/20 rounded-lg focus:outline-none focus:border-[var(--primary-turquoise)] transition-colors resize-none text-[var(--text-brown)]"
                      placeholder="Cuéntame qué tienes en mente..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--primary-turquoise)] hover:bg-[var(--secondary-coral)] text-white py-6 rounded-lg font-medium transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Email */}
              <div className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-xl p-6 border-2 border-[var(--primary-turquoise)]/20 shadow-lg">
                <h3 className="text-xl font-bold text-[var(--text-brown)] mb-3">Email directo</h3>
                <a
                  href="mailto:laquetocaelukelele@gmail.com"
                  className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] hover:underline text-lg transition-colors"
                >
                  laquetocaelukelele@gmail.com
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-[var(--accent-white)]/60 backdrop-blur-sm rounded-xl p-6 border-2 border-[var(--primary-turquoise)]/20 shadow-lg">
                <h3 className="text-xl font-bold text-[var(--text-brown)] mb-4">Redes sociales</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--secondary-coral)]/10 transition-colors group"
                      >
                        <Icon className="w-6 h-6 text-[var(--text-brown)] group-hover:text-[var(--secondary-coral)]" />
                        <span className="text-[var(--text-brown)] group-hover:text-[var(--secondary-coral)]">
                          {social.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-[var(--primary-turquoise)]/10 backdrop-blur-sm rounded-xl p-6 border-2 border-[var(--primary-turquoise)]/20">
                <h3 className="text-xl font-bold text-[var(--text-brown)] mb-3">Disponible para:</h3>
                <ul className="space-y-2 text-[var(--text-brown-light)]">
                  <li>✨ Shows de stand-up</li>
                  <li>🎭 Presentaciones artísticas</li>
                  <li>🎤 Eventos corporativos</li>
                  <li>📰 Entrevistas y prensa</li>
                </ul>
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
      </div>
    </>
  );
}

export default ContactPage;