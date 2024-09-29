import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecommendedVideos.css';
import VideoCard from './VideosCard';

const options = {
  method: 'GET',
  url: 'https://yt-api.p.rapidapi.com/home',
  headers: {
    'x-rapidapi-key': 'ca4a2c1d6dmsh908ef1e8ec1b4ffp12bc29jsn6a05cd068e03',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  }
};

function RecommendedVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data.data);
        setVideos(response.data.data);
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
          video.type === "video" ?
          (<VideoCard
            key={index}
            videoId={video.videoId}
            title={video.title}
            views={video.viewCount}
            timestamp={video.lengthText}
            channelImage={video.channelThumbnail && video.channelThumbnail[0].url}
            channel={video.channelTitle}
            image={video.thumbnail[0].url}
          />) : null
        ))}
      </div>
    </div>
  );
}

export default RecommendedVideos;
