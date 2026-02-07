import React from 'react';
import { Instagram, Facebook, Youtube, Book } from 'lucide-react';

// Custom Icons
const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.394 6.394 0 0 0-5.394 9.365 6.394 6.394 0 0 0 10.964-2.413V8.25c1.2.918 2.726 1.462 4.381 1.462v-3.5a4.755 4.755 0 0 1-.718-.026Z"/>
  </svg>
);

const PatreonIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z"/>
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

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/laquetocaelukelele_', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@laquetocaelukelele_', label: 'TikTok' },
    { icon: Youtube, href: 'https://www.youtube.com/@laquetocaelukelele', label: 'YouTube' },
    { icon: SpotifyIcon, href: 'https://open.spotify.com/intl-es/artist/5Fq06EhgUeDvxtTyXI8sVp?si=qvGM5ACfQNGmaXiqSYa0zg', label: 'Spotify' },
    { icon: PatreonIcon, href: 'https://www.patreon.com/cw/laquetocaelukelele', label: 'Patreon' },
    { icon: Facebook, href: 'https://www.facebook.com/laquetocaelukelele', label: 'Facebook' },
  ];

  return (
    <footer className="bg-[var(--bg-cream)] border-t border-[var(--primary-turquoise)]/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[var(--text-brown)] mb-2">Ailin González</h3>
            <p className="text-sm text-[var(--text-brown-light)] italic mb-4">
              Mi talento es probar✨
            </p>
            <a
              href="https://www.amazon.com/dp/B0GL9MXGF3?ref=ppx_yo2ov_dt_b_fed_asin_title"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center md:justify-start gap-2 text-sm font-medium text-[var(--primary-turquoise)] hover:text-[var(--secondary-coral)] transition-colors"
            >
              <Book className="w-4 h-4" />
              Mi Libro: Breve manual para esperar(te)
            </a>
          </div>

          {/* Social Media */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--primary-turquoise)]/10 text-[var(--primary-turquoise)]
                             hover:bg-[var(--secondary-coral)]/20 hover:text-[var(--secondary-coral)]
                             hover:scale-110 transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-sm text-[var(--text-brown-light)] mb-1">
              Disponible para shows y colaboraciones
            </p>
            <p className="text-sm text-[var(--text-brown-light)] font-semibold break-words">
              📧 laquetocaelukelele@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[var(--primary-turquoise)]/20 text-center">
          <p className="text-sm text-[var(--text-brown-light)] leading-relaxed">
            © {currentYear} Ailin González.{' '}
            <span className="whitespace-nowrap">
              Hecho con <span className="text-[var(--secondary-coral)]">♥</span> y mucho café ☕
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;