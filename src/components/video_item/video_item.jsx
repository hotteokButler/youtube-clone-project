import React from 'react';
import styles from './video-item.module.css';

/*props에서도 deconstructing이 가능하다 :props중에 특정한 요소를 가져오고싶다면,
  구조분해할당을 통해서 인자를 전달하게되면 된다. 그리고 video안에있는 snippet을 가져오려하면 
  아래처럼 deconstructing을 해주면된다
 */
const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.videoCard}>
      <figure className={styles.thumbnailImg}>
        <img src={snippet.thumbnails.medium.url} alt="썸네일 이미지" />
      </figure>
      <div className={styles.descriptions}>
        <p className={styles.videoTitle}>{snippet.title}</p>
        <p className={styles.channelName}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
