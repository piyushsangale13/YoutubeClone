import React, { useEffect, useState } from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideosCard';

const url = 'https://youtube-v3-alternative.p.rapidapi.com/trending?geo=US&lang=en';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'ca4a2c1d6dmsh908ef1e8ec1b4ffp12bc29jsn6a05cd068e03',
    'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

function RecommendedVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (Array.isArray(result.data)) {
          setVideos(result.data);
        } else {
          console.error('Expected array of videos, received:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        {videos.map((video, index) => (
          <VideoCard
            key={video.videoId}
            title={video.title}
            views={video.viewCount}
            timestamp={video.lengthText}
            channelImage={video.channelThumbnail}
            channel={video.channelTitle}
            image={video.thumbnail[0].url}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
