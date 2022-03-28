import React, { useEffect, useState } from 'react';
import Comments from '../comment_list/comments';
import styles from './video-detail.module.css';
// rsi!!!!!

const VideoDetail = ({ video, video: { snippet }, youtubeApi }) => {
  const publishedDate = snippet.publishedAt.substr(0, 10);
  const [moretext, setMoreText] = useState('자세히');
  const [videoDetailStyle, setVideoDetailStyle] = useState(`${styles.videoDetail} ${styles.shorCut}`);

  const viewMoreDesc = () => {
    if (moretext === '자세히') {
      setVideoDetailStyle(styles.videoDetail);
      setMoreText('간략히');
    } else {
      setVideoDetailStyle(`${styles.videoDetail} ${styles.shorCut}`);
      setMoreText('자세히');
    }
  };

  return (
    <>
      <section className={styles.detail}>
        <iframe
          className={styles.video}
          type="text/html"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <dl className={styles.description}>
          <dt className={styles.title}>{snippet.title}</dt>
          <dl className={styles.publishedDate}>{publishedDate}</dl>
          <dl className={styles.channelName}>{snippet.channelTitle}</dl>
          <dl>
            <pre className={videoDetailStyle}>{snippet.description}</pre>
          </dl>
        </dl>
        <button className={styles.moreButton} onClick={viewMoreDesc}>
          {moretext}
        </button>
      </section>
      <Comments video={video} youtubeApi={youtubeApi} />
    </>
  );
};

export default VideoDetail;
