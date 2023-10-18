import React from 'react'
import  Avatar  from '@mui/material'
import "./VideoRow.css"

function VideoRow({image, title, channel, views, timestamp, channelImage, description}) {
  return (
    <div className='videoRow'>
        <img className="videoRow__thumbnail" src={image} alt=''/>
        <div className="videoRow__text">
            <h3>{title}</h3>
            <p className='videoRow__headline'>
                {channel} • <span className='videoRow__subscriber'>{views}</span> • {timestamp}
            </p>
            <p className='videoRow__description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow