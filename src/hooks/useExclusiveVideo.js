import { useEffect } from 'react';

export function useExclusiveVideo() {
  useEffect(() => {
    const handlePlay = (e) => {
      if (e.target.tagName === 'VIDEO') {
        document.querySelectorAll('video').forEach((v) => {
          if (v !== e.target) v.pause();
        });
      }
    };

    document.addEventListener('play', handlePlay, true);
    return () => document.removeEventListener('play', handlePlay, true);
  }, []);
}
