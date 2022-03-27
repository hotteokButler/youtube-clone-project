import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video-list.module.css';

const VideoList = ({ videos }) => {
  return (
    <ul className={styles.videoList}>
      {videos &&
        videos.map((video) => {
          return <VideoItem key={video.id} video={video} />;
        })}
    </ul>
  );
};

export default VideoList;
