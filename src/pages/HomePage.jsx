import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BookOpen, Music, Laugh, Camera, Calendar, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import photo from '@/assets/fotos/ailin poster.jpg';

function HomePage() {
  const upcomingShows = [
    {
      day: '13',
      month: 'FEB',
      title: 'Amor fuera de tono',
      ticketUrl: 'https://www.eventbrite.com/e/amor-fuera-de-tono-tickets-1981945689911',
      poster: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1176180356%2F163929308460%2F1%2Foriginal.20260129-173029?crop=focalpoint&fit=crop&w=480&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.456&fp-y=0.435&s=c6a524f4ed758ee5c86a33089f158914',
    },
    {
      day: '19',
      month: 'FEB',
      title: 'Latinos Comedy',
      ticketUrl: 'https://www.eventbrite.com/e/latinos-comedy-show-de-stand-up-en-espanol-tickets-1981913364224?aff=ebdssbdestsearch',
      poster: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1176135188%2F469917114927%2F1%2Foriginal.20260129-050150?crop=focalpoint&fit=crop&w=480&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.6&fp-y=0.51&s=e974e7ad355102be00dc28ebe1dc32ea',
    },
    {
      day: '25',
      month: 'FEB',
      title: 'Comediantes',
      ticketUrl: 'https://www.ticketplate.com/checkout/comediantes-una-noche-de-stand-up-2602252000',
      poster: 'https://ticketplate-backend-prod.s3.amazonaws.com/events/25f0c215-a7c7-430d-b2a6-d907da18d4b4/images/comediantes_febrero-b.png'
    },
  ];

  const ctaButtons = [
    { icon: BookOpen, label: 'Leer', subtitle: 'Poemas & Cuentos', path: '/cuentos' },
    { icon: Music, label: 'Escuchar', subtitle: 'Música', path: '/musica' },
    { icon: Laugh, label: 'Reír', subtitle: 'Comedia', path: '/comedia' },
    { icon: Camera, label: 'Ver', subtitle: 'Galería', path: '/galeria' },
  ];

  return (
    <>
      <Helmet>
        <title>Ailin González</title>
        <meta
          name="description"
          content="Bienvenido al mundo de Ailin González: donde la poesía se encuentra con la comedia, el ukelele con las palabras, y la risa con la reflexión."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-20 md:pt-24"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={photo}
            alt="Ailin González - Comedian, Writer, and Poet"
            className="w-full h-full object-cover object-[50%_49%]"
          />
          <div className="absolute inset-0 warm-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-cream)]/10 to-[var(--bg-cream)]/60"></div>
        </div>

        {/* Content */}
        <div
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8
             text-center flex flex-col
             pt-6 sm:pt-10 md:pt-20
             md:translate-y-36"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* CTA Buttons - (Mobile) near top / (Desktop) keeps original spacing */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4
             mt-2 sm:mt-4 md:mt-10
             w-full max-w-[360px] md:max-w-5xl mx-auto"
            >
              {ctaButtons.map((button) => {
                const Icon = button.icon;
                return (
                  <Link
                    key={button.path}
                    to={button.path}
                    className="group relative overflow-hidden rounded-2xl
                               p-4 md:p-6
                               bg-[var(--accent-white)]/70 backdrop-blur-md
                               border border-[var(--accent-white)]/60
                               dark:border-[var(--primary-turquoise)]/30
                               hover:bg-[var(--secondary-coral)]
                               hover:border-[var(--secondary-coral)]
                               transition-all duration-300
                               hover:scale-[1.03] hover:shadow-2xl
                               flex items-center md:flex-col
                               justify-start md:justify-center
                               gap-3 md:gap-2
                               h-[72px] md:h-auto
                               md:aspect-square
                               text-left md:text-center"
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[var(--text-brown)] group-hover:text-white transition-colors duration-300" />

                    <div className="flex flex-col">
                      <span className="text-sm md:text-lg font-bold text-[var(--text-brown)] group-hover:text-white transition-colors duration-300">
                        {button.label}
                      </span>

                      <span className="hidden md:block text-sm text-[var(--text-brown)] group-hover:text-white/90 transition-colors duration-300">
                        {button.subtitle}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Shows del Mes */}
      <section className="bg-[var(--bg-cream)] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--primary-turquoise)]/10 rounded-full px-4 py-2 mb-4">
              <Calendar className="w-5 h-5 text-[var(--primary-turquoise)]" />
              <span className="text-sm font-semibold text-[var(--primary-turquoise)] uppercase tracking-wider">Febrero 2025</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-brown)]">
              Próximos Shows
            </h2>
          </motion.div>

          <div className="space-y-4">
            {upcomingShows.map((show, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="group bg-[var(--accent-white)]/70 backdrop-blur-sm rounded-2xl
                           border border-[var(--primary-turquoise)]/15
                           shadow-md hover:shadow-xl
                           transition-all duration-300 hover:scale-[1.01]
                           flex items-center gap-4 sm:gap-6 p-4 sm:p-5"
              >
                {/* Date Badge */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl
                                bg-[var(--primary-turquoise)] text-white
                                flex flex-col items-center justify-center
                                shadow-lg shadow-[var(--primary-turquoise)]/25">
                  <span className="text-lg sm:text-3xl font-bold leading-none">{show.day}</span>
                  <span className="text-[10px] sm:text-sm font-medium uppercase tracking-wider opacity-90">{show.month}</span>
                </div>

                {/* Poster */}
                {show.poster && (
                  <div className="hidden sm:block flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={show.poster}
                      alt={`Poster ${show.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Show Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-xl font-bold text-[var(--text-brown)]">
                    {show.title}
                  </h3>
                </div>

                {/* Ticket Button */}
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2
                             bg-[var(--secondary-coral)] hover:bg-[var(--secondary-coral)]/85
                             text-white font-semibold
                             px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl
                             transition-all duration-300 hover:shadow-lg hover:shadow-[var(--secondary-coral)]/25
                             text-sm sm:text-base"
                >
                  <Ticket className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Tickets</span>
                  <span className="sm:hidden">Tickets</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;