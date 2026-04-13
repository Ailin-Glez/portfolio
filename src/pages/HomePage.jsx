import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BookOpen, Music, Laugh, Camera, Calendar, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import photo from '@/assets/fotos/ailin poster.webp';
import posterShowLC from '@/assets/eventos/show lc.webp';
import posterMiami from '@/assets/eventos/miami es un chiste.webp';
import YouTubeSection from '@/components/YouTubeSection';

function HomePage() {
  const upcomingShows = [
    {
      day: '24',
      month: 'MAYO',
      title: 'Festival Miami es un chiste',
      ticketUrl: 'https://esunchiste.ticketplate.com/es/latinos-comedy-2605242130',
      poster: posterMiami,
    },
  ];

  const ctaButtons = [
    { icon: BookOpen, label: 'Leer', subtitle: 'Poemas & Cuentos', path: '/literatura' },
    { icon: Music, label: 'Escuchar', subtitle: 'Música', path: '/musica' },
    { icon: Laugh, label: 'Reír', subtitle: 'Comedia', path: '/comedia' },
    { icon: Camera, label: 'Ver', subtitle: 'Galería', path: '/galeria' },
  ];

  return (
    <>
      <Helmet>
        <title>Ailin González</title>
        <meta name="description" content="Bienvenido al mundo de Ailin González: donde la poesía se encuentra con la comedia, el ukelele con las palabras" />
        <link rel="canonical" href="https://ailingonzalez.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ailingonzalez.com/" />
        <meta property="og:title" content="Ailin González" />
        <meta property="og:description" content="Bienvenido al mundo de Ailin González: donde la poesía se encuentra con la comedia, el ukelele con las palabras" />
        <meta property="og:image" content="https://ailingonzalez.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ailin González" />
        <meta name="twitter:description" content="Bienvenido al mundo de Ailin González: donde la poesía se encuentra con la comedia, el ukelele con las palabras" />
        <meta name="twitter:image" content="https://ailingonzalez.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Latinos Comedy",
            "description": "Show de Stand Up Comedy en español en vivo con Latinos Comedy, todos los jueves de marzo en Real Café.",
            "startDate": "2026-03-05",
            "endDate": "2026-03-26",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Real Café",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "9600 SW 8th St",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "postalCode": "33174",
                "addressCountry": "US"
              }
            },
            "performer": { "@type": "Person", "name": "Ailin González", "url": "https://ailingonzalez.com" },
            "organizer": { "@type": "Organization", "name": "Latinos Comedy", "url": "https://latinoscomedy.com/" },
            "offers": {
              "@type": "Offer",
              "url": "https://www.eventbrite.com/e/latinos-comedy-show-de-stand-up-comedy-en-espanol-en-vivo-tickets-1983496627808",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Festival Miami es un chiste",
            "description": "Show de Stand Up Comedy en español con Latinos Comedy, parte del Festival Miami es un chiste.",
            "startDate": "2026-05-24",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Miami Improv Comedy Club",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3450 NW 83rd Ave",
                "addressLocality": "Doral",
                "addressRegion": "FL",
                "postalCode": "33122",
                "addressCountry": "US"
              }
            },
            "performer": { "@type": "Person", "name": "Ailin González", "url": "https://ailingonzalez.com" },
            "organizer": { "@type": "Organization", "name": "Miami es un chiste", "url": "https://miamiesunchiste.com/" },
            "offers": {
              "@type": "Offer",
              "url": "https://esunchiste.ticketplate.com/es/latinos-comedy-2605242130",
              "availability": "https://schema.org/InStock"
            }
          }
        ])}</script>
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
             md:translate-y-48"
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
                               bg-[rgba(45,212,198,0.5)] backdrop-blur-md
                               border border-[rgba(45,212,198,1)]
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
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-black group-hover:text-white transition-colors duration-300" />

                    <div className="flex flex-col">
                      <span className="text-sm md:text-lg font-bold text-black group-hover:text-white transition-colors duration-300">
                        {button.label}
                      </span>

                      <span className="hidden md:block text-sm text-black/80 group-hover:text-white/90 transition-colors duration-300">
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
      <section className="bg-[var(--bg-cream)] py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
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
                <div className={`flex-shrink-0 w-14 sm:w-24 rounded-lg sm:rounded-xl px-1 py-2 sm:py-3
                                flex flex-col items-center justify-center gap-0.5
                                ${show.highlight
                                  ? 'bg-[var(--secondary-coral)] text-white shadow-lg shadow-[var(--secondary-coral)]/25'
                                  : 'bg-[var(--primary-turquoise)] text-white shadow-lg shadow-[var(--primary-turquoise)]/25'
                                }`}>
                  <span className="text-[10px] sm:text-sm font-bold leading-tight text-center uppercase tracking-wide">{show.day}</span>
                  <span className="text-[9px] sm:text-xs font-medium uppercase tracking-wider opacity-90">{show.month}</span>
                </div>

                {/* Poster */}
                {show.poster && (
                  <div className="hidden sm:block flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={show.poster}
                      alt={`Poster ${show.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
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

      <YouTubeSection />
    </>
  );
}

export default HomePage;