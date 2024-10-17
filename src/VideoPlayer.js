// VideoPlayer.jsx
import React, { useEffect, useRef } from 'react';
import DPlayer from 'dplayer';

const VideoPlayer = ({ formats }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (formats && playerRef.current) {
      // Map the formats array to get quality options
      const qualityOptions = formats.map((format) => ({
        name: format.qualityLabel, // Quality label (e.g., 360p)
        url: format.url,           // URL for this quality
        type: format.mimeType.split(';')[0] // Extract the video type (e.g., video/mp4)
      }));

      // Initialize DPlayer with quality options
      const dp = new DPlayer({
        container: playerRef.current,
        autoplay: false,
        video: {
          quality: qualityOptions,
          defaultQuality: 0, // Set the first quality as default
        },
      });

      // Cleanup function to destroy DPlayer instance when component unmounts
      return () => {
        dp.destroy();
      };
    }
  }, [formats]);

  return <div ref={playerRef} />;
};

export default VideoPlayer;
