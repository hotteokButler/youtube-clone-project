import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video-list.module.css';

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <>
      <ul className={styles.videoList}>
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display} />
        ))}
      </ul>
      <button className={styles.videoMore}>더보기</button>
    </>
  );
};

export default VideoList;
