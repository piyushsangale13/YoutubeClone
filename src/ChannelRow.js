import React from 'react'
import { Avatar } from '@mui/material'
import "./ChannelRow.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ChannelRow({image, channel, verified, subscriber, noOfVideos, description}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow__logo' 
            src={image} 
            alt={channel} 
        />
        
        <div className="channelRow__text">
            <h4>
                {channel} {verified && <CheckCircleOutlineIcon />}
            </h4>
            <p>
                {subscriber} subscribers • {noOfVideos} videos
            </p>
            <p>{description}</p>
        </div>



    </div>
  )
}

export default ChannelRow