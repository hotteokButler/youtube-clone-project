import React, { memo, useState } from 'react';
import styles from './comment-item.module.css';

const CommentItem = memo(({ topLevelComment: { snippet } }) => {
  const [moreViewButton, setMoreViewButton] = useState('자세히보기');
  const [replyStyle, setReplyStyle] = useState(`${styles.commentTxt} ${styles.moreView}`);
  const moreView = () => {
    if (moreViewButton === '자세히보기') {
      setReplyStyle(styles.commentTxt);
      setMoreViewButton('가리기');
    } else {
      setReplyStyle(`${styles.commentTxt} ${styles.moreView}`);
      setMoreViewButton('자세히보기');
    }
  };

  return (
    <li className={styles.comment}>
      <figure className={styles.profileImg}>
        <img src={snippet.authorProfileImageUrl} alt="프로필이미지" />
      </figure>
      <div className={styles.textBox}>
        <p className={styles.name}>{snippet.authorDisplayName}</p>
        <pre className={replyStyle}>{snippet.textOriginal}</pre>
        <div className={styles.like}>
          <button>
            <i className="fa-regular fa-thumbs-up"></i>
          </button>
          <button>
            <i className="fa-regular fa-thumbs-down"></i>
          </button>
          <button className={styles.reply}>댓글</button>
          {snippet.textOriginal.length > 100 && (
            <button className={styles.more} onClick={moreView}>
              {moreViewButton}
            </button>
          )}
        </div>
      </div>
      <button className={styles.button}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </li>
  );
});

export default CommentItem;
