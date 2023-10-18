import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage__filter">
            <TuneIcon/>
            <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelRow
            image="https://yt3.ggpht.com/ZNfyQU0p0lCWEcgNd9wNeJLr3ln5Eyw9JyOSdNPCht36D4jgVSEPvgIYsGkPyrxTTo4ejRzmuw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel ="Gyan Therapy"
            verified
            subscriber="2.83M"
            noOfVideos={382}
            description="Welcome
            Subscribe for Tech Videos ⚡️
            
            Er.Rakesh 🇮🇳 India
            
            Only for business inquiries Contact at-
            gyantherapyindia@gmail.com
            "
        />

        <hr />

        <VideoRow
            title="I Bought iPhone 15 Pro MAX ₹11000 only - Real vs Fake !"
            views="292K views"
            timestamp="19 hours ago"
            channelImage="https://yt3.ggpht.com/ZNfyQU0p0lCWEcgNd9wNeJLr3ln5Eyw9JyOSdNPCht36D4jgVSEPvgIYsGkPyrxTTo4ejRzmuw=s88-c-k-c0x00ffffff-no-rj"
            channel="Gyan Therapy"
            image="https://img.youtube.com/vi/F4iyKwHNqk4/mqdefault.jpg"
            description = "I bought Apple iPhone 15 pro MAX at price 11000 in Budget price. In this video i talked about Real iPhone 15 pro vs Fake iPhone 15 Pro MAX "

        />
        <VideoRow 
            title="Use Loops With Array in Javascript | Javascript Tutorial in Hindi #15"
            views="13 views"
            timestamp="3 days ago"
            channelImage="https://yt3.ggpht.com/ZehqXHvs8K2kECHQj4hbdJS4Y0_a17Tupu8vwoE5IVXpcBjkjE-WPYVGvz4EAA1dXViFvg8Qyw=s68-c-k-c0x00ffffff-no-rj"
            channel="The Coding Dev"
            image="https://img.youtube.com/vi/eZMNzsDUXto/mqdefault.jpg"
            description="In this video, we are going to learn about,

            Use Loops with Array in Javascript
            
            - For Loop
            - ForEach Loop
            - Array from Loop
            - For of Loop
            - For in Loop"
          />
          <VideoRow 
            title="Kreo Chimera Wired/Wireless Gaming Mouse"
            views="1M views"
            timestamp="27 minutes ago"
            channelImage="https://yt3.ggpht.com/fjZdGAR2ZaKCXvWgrVwx5t1_IIvNnavCh-W_NDF639b0lK8QkwflaZ3nEaM-WU7I4jWtULhk=s68-c-k-c0x00ffffff-no-rj"
            channel="Tech Box Hindi"
            image="https://img.youtube.com/vi/4XiWDk4NA1E/mqdefault.jpg"
            description="🔥 MOUSE SHOWN IN THIS VIDEO (Amazon=🔵Official Website =🔴)
            🛍️Best Buy Links 👇
            
            ⚡️Kreo Chimera Wired (Apply Amazon 5% Discount code at checkout Gift Code = TECHBOX5)
            🔵https://amzn.to/3PUItcN"
          />
          <VideoRow 
            title="Mystery of Flight 571 | World's Greatest Miracle | Dhruv Rathee"
            views="4.7M views"
            timestamp="1 month ago"
            channelImage="https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s88-c-k-c0x00ffffff-no-rj"
            channel="Dhruv Rathee"
            image="https://img.youtube.com/vi/KIvfM4g4aG4/mqdefault.jpg"
            description="✏️ JOIN MY TIME MANAGEMENT COURSE: 
            Learn how to manage time and maximize productivity in my specialised online course. 
            Join here: https://academy.dhruvrathee.com"
          />
    </div>
  )
}

export default SearchPage