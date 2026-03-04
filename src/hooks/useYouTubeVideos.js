import { useState, useEffect } from 'react';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_HANDLE = 'laquetocaelukelele';
const BASE = 'https://www.googleapis.com/youtube/v3';

function parseDuration(duration) {
  if (!duration) return 0;
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  const hours = parseInt(match[1] || 0);
  const minutes = parseInt(match[2] || 0);
  const seconds = parseInt(match[3] || 0);
  return hours * 3600 + minutes * 60 + seconds;
}

export function useYouTubeVideos(maxResults = 6) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        // 1. Get the uploads playlist ID from the channel handle
        const channelRes = await fetch(
          `${BASE}/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`
        );
        const channelData = await channelRes.json();
        const uploadsPlaylistId =
          channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

        if (!uploadsPlaylistId) throw new Error('Canal no encontrado');

        // 2. Fetch latest videos from the uploads playlist
        const videosRes = await fetch(
          `${BASE}/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${API_KEY}`
        );
        const videosData = await videosRes.json();
        const rawItems = videosData.items ?? [];

        // 3. Fetch video details to get duration (to detect Shorts ≤ 60s)
        const videoIds = rawItems.map((item) => item.snippet.resourceId.videoId).join(',');
        const detailsRes = await fetch(
          `${BASE}/videos?part=contentDetails&id=${videoIds}&key=${API_KEY}`
        );
        const detailsData = await detailsRes.json();

        const durationMap = {};
        detailsData.items?.forEach((item) => {
          durationMap[item.id] = parseDuration(item.contentDetails.duration);
        });

        const items = rawItems.map((item) => {
          const videoId = item.snippet.resourceId.videoId;
          const duration = durationMap[videoId] ?? 0;
          return {
            id: videoId,
            title: item.snippet.title,
            thumbnail:
              item.snippet.thumbnails?.maxres?.url ||
              item.snippet.thumbnails?.standard?.url ||
              item.snippet.thumbnails?.high?.url ||
              item.snippet.thumbnails?.default?.url,
            publishedAt: item.snippet.publishedAt,
            isShort: duration > 0 && duration <= 180,
          };
        });

        setVideos(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [maxResults]);

  return { videos, loading, error };
}
