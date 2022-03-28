import React, { useEffect, useState } from 'react';
import CommentItem from '../comment_item.jsx/comment_item';
import styles from './comment.module.css';
const Comments = ({ video, youtubeApi }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    youtubeApi //
      .comments(video.id) //
      .then((comments) => setComments(comments.items)) //
      .catch((error) => console.log(`Can't found`, error));
  }, [video]);

  return (
    <section className={styles.comments}>
      <h2 className={styles.commentTitle}>Comments</h2>
      <ul>
        {comments ? (
          comments.map((comment) => (
            <CommentItem key={comment.id} topLevelComment={comment.snippet.topLevelComment} />
          ))
        ) : (
          <h1 className={styles.noReply}>댓글이 없습니다.</h1>
        )}
      </ul>
    </section>
  );
};

export default Comments;
