import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video-list.module.css';
const VideoList = (props) => {
  return (
    <ul className={styles.videoList}>
      {props.videos &&
        props.videos.map((video) => {
          return <VideoItem key={video.id} video={video} />;
        })}
    </ul>
  );
};

export default VideoList;
