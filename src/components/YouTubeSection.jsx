import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';

const YouTubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

import { useYouTubeVideos } from '@/hooks/useYouTubeVideos';

const CHANNEL_URL = 'https://www.youtube.com/@laquetocaelukelele';

function VideoCard({ video, index }) {
  const href = video.isShort
    ? `https://www.youtube.com/shorts/${video.id}`
    : `https://www.youtube.com/watch?v=${video.id}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl shadow-md
                 border border-[var(--secondary-coral)]/20
                 hover:shadow-xl hover:border-[var(--secondary-coral)]/50
                 transition-all duration-300 hover:scale-[1.02]
                 will-change-transform"
    >
      {/* Thumbnail */}
      <div className={video.isShort ? 'aspect-[9/16] bg-black' : 'aspect-video bg-black'}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:opacity-85 transition-opacity duration-300"
          loading="lazy"
        />
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 flex items-end p-3">
  <span
    className="inline-flex items-center gap-1.5 bg-[#FF0000] text-white text-[10px] font-bold px-2 py-1 rounded-lg
               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <ExternalLinkIcon className="w-3 h-3" />
    Ver en YouTube
  </span>
</div>
    </motion.a>
  );
}

function YouTubeSection() {
  const { videos, loading, error } = useYouTubeVideos(4);

  if (error) return null;

  const shorts = videos.filter((v) => v.isShort).slice(0, 3);
  const regular = videos.filter((v) => !v.isShort).slice(0, 1);

  return (
    <section className="bg-[var(--bg-cream)] py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-1">
              <YouTubeIcon className="w-6 h-6 text-[var(--secondary-coral)]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--secondary-coral)]">
                En YouTube
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-brown)]">
              Mis videos más recientes
            </h2>
          </div>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
                       bg-[#FF0000] hover:bg-[#cc0000]
                       text-white font-semibold
                       px-5 py-2.5 rounded-xl
                       transition-all duration-300 hover:shadow-lg hover:shadow-[#FF0000]/25
                       text-sm"
          >
            <YouTubeIcon className="w-4 h-4" />
            Suscribirse al canal
          </a>
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center gap-3 sm:gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-[30%] aspect-[9/16] rounded-2xl bg-[var(--accent-white)]/60 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Shorts — portrait, centered flex (1, 2 o 3 quedan bien) */}
            {shorts.length > 0 && (
              <div className="flex justify-center gap-3 sm:gap-4">
                {shorts.map((video, index) => (
                  <div key={video.id} className="w-[30%]">
                    <VideoCard video={video} index={index} />
                  </div>
                ))}
              </div>
            )}

            {/* Regular videos — landscape, full width */}
            {regular.length > 0 && (
              <div>
                {regular.map((video, index) => (
                  <VideoCard key={video.id} video={video} index={shorts.length + index} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer link */}
        {!loading && videos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-brown-light)]
                         hover:text-[var(--secondary-coral)] transition-colors duration-300"
            >
              Ver todos los videos en YouTube
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default YouTubeSection;
