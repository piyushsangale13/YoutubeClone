import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import './VideoCard.css'

function VideosCard({ image, videoId, title, channel, views, timestamp, channelImage }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/watch/${videoId}`);
    };

    return (
        <div className='videoCard' onClick={handleClick}>
            <img className='videoCard__thumbnail' src={image} alt="" />
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideosCard