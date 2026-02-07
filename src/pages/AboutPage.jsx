import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Heart, Sparkles, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import perfilImg from '@/assets/fotos/perfil.jpg';

function AboutPage() {
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
              "Soy la prueba viviente de que se puede ser escritora y comediante sin sufrir una crisis existencial... O, al menos no todos los días"
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
                    También toco el ukelele, aunque mis vecinos probablemente preferirían que no lo hiciera a las 2 a.m.
                    Mi vida es un delicado equilibrio entre escribir versos melancólicos y hacer chistes sobre lo absurdo de la existencia.
                    Algunos días gana la poesía, otros gana la comedia. La mayoría de los días, gana el café.
                  </p>
                  <p>
                    Mi nombre artístico es <strong className="text-[var(--text-brown)]">"la que toca el ukelele"</strong> —suerte que tengo un ukelele (que no es una guitarrita pequeña), porque si no sería simplemente "la que toca". Hago humor desde la música, rimando versos y chistes mientras me hago la que canto. He sido poeta, narradora, diseñadora y estudiante de música a medio tiempo; básicamente, el cóctel perfecto para terminar haciendo stand-up: un cóctel molotov.
                  </p>
                  <p>
                    Vengo del mundo literario. Soy egresada del Centro de Formación Literaria Onelio Jorge Cardoso y he recibido premios como el Premio Poesía de Amor (2011), La Llave Pública (2014) y el Premio de la Ciudad de Nueva Gerona (2015). He publicado libros como <em>Como mienten los boleros</em>, <em>Otra canción para Magda</em>, el poema ilustrado <em>Un regalo diferente</em> y <em>Breve manual para esperar(te)</em>.
                  </p>
                  <p>
                    Después de años habitando las páginas de los libros, entendí que mis versos también necesitaban un micrófono. Así nació esta mutación natural hacia el humor musical y el stand-up, que me llevó a formar parte del grupo{' '}
                    <a href="https://latinoscomedy.com" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] underline transition-colors">Latinos Comedy</a>
                    {' '}y a participar en el primer festival de comedia en español en EE. UU., <em>Miami es un chiste</em> (2025).
                  </p>
                  <p>
                    He compartido escenario con comediantes como{' '}
                    <a href="https://www.instagram.com/luischataing" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] underline transition-colors">Luis Chataing</a>,{' '}
                    <a href="https://www.instagram.com/kabeto" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] underline transition-colors">Kabeto</a> y{' '}
                    <a href="https://www.instagram.com/abelardo/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] underline transition-colors">Abelardo</a>,
                    {' '}y he participado en shows como <em>Comediantes</em> y <em>Tres comediantes hablando sobre comunismo</em>.
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

      {/* ── Contacto ── */}
      <section className="py-16 md:py-24 bg-[var(--primary-turquoise)]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-12 h-12 text-[var(--primary-turquoise)]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-brown)] mb-4">
              Contacto
            </h2>
            <p className="text-xl text-[var(--text-brown-light)] max-w-2xl mx-auto leading-relaxed">
              ¿Tienes una idea? ¿Una propuesta? ¿O simplemente quieres decir hola? Escríbeme
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                      className="w-full px-4 py-3 bg-[var(--accent-white)] border-2 border-[var(--primary-turquoise)]/20 rounded-lg focus:outline-none focus:border-[var(--primary-turquoise)] transition-colors text-[var(--text-brown)]"
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
                      className="w-full px-4 py-3 bg-[var(--accent-white)] border-2 border-[var(--primary-turquoise)]/20 rounded-lg focus:outline-none focus:border-[var(--primary-turquoise)] transition-colors text-[var(--text-brown)]"
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
                      className="w-full px-4 py-3 bg-[var(--accent-white)] border-2 border-[var(--primary-turquoise)]/20 rounded-lg focus:outline-none focus:border-[var(--primary-turquoise)] transition-colors resize-none text-[var(--text-brown)]"
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
      </section>
    </>
  );
}

export default AboutPage;
