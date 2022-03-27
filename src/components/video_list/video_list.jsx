import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => {
  return (
    <ul>
      {props.videos &&
        props.videos.map((video) => {
          return <VideoItem key={video.id} video={video.snippet} />;
        })}
    </ul>
  );
};

export default VideoList;
