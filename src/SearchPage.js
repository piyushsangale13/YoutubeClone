import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';
import VideoRow from './VideoRow';

const SearchPage = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${searchTerm}&geo=US&lang=en`;
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'ca4a2c1d6dmsh908ef1e8ec1b4ffp12bc29jsn6a05cd068e03',
          'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setVideos(result.data); // Assuming result is an array of videos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='searchPage'>

      <h2>Search Results for: {searchTerm}</h2>
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      {Array.isArray(videos) && videos.map((video, index) => (
        <VideoRow
          key={video.videoId}
          title={video.title}
          views={video.viewCount}
          timestamp={video.publishedText}
          channelImage={video.channelThumbnail[0].url}
          channel={video.channelTitle}
          image={video.thumbnail[0].url}
          description={video.description}
        />
      ))}

      <hr />
    </div>
  );
};

export default SearchPage;
