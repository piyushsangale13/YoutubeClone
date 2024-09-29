// VideoPlayerPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Avatar } from '@mui/material';
import VideoPlayer from './VideoPlayer'; // Import the VideoPlayer component

function VideoPlayerPage() {
    const { videoId } = useParams();
    const [video, setVideo] = useState(null); // Store video object

    useEffect(() => {
        const fetchVideo = async () => {
            const options = {
                method: 'GET',
                url: 'https://yt-api.p.rapidapi.com/dl',
                params: { id: videoId },
                headers: {
                    'x-rapidapi-key': 'ca4a2c1d6dmsh908ef1e8ec1b4ffp12bc29jsn6a05cd068e03',
                    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response);
                setVideo(response.data); // Store the entire video object
            } catch (error) {
                console.error('Error fetching video URL:', error);
            }
        };

        fetchVideo();
    }, [videoId]);

    return (
        <div className="videoPlayerPage">
            {video && (
                <div className="videoPlayerPage__details">
                    <div className='videoPlayerPage__player'>
                        <VideoPlayer formats={video.formats} />
                    </div>
                    <h2>{video.title}</h2>
                    <p>{video.viewCount} • {new Date(video.publishDate).toLocaleDateString()}</p>
                    <hr />
                    <div className="videoPlayerPage__channelInfo">
                        <Avatar
                            className="videoPlayerPage__avatar"
                            alt={video.channelTitle}
                            src={video.channelImage}
                        />
                        <div>
                            <h3>{video.channelTitle}</h3>
                            <p>{video.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideoPlayerPage;
