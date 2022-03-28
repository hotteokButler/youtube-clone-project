import React, { useEffect, useState } from 'react';
import CommentItem from '../comment_item.jsx/comment_item';

const Comments = ({ video, youtubeApi }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    youtubeApi //
      .comments(video.id) //
      .then((comments) => setComments(comments.items)) //
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <section>
      <ul>
        {comments &&
          comments.map((comment) => (
            <CommentItem key={comment.id} topLevelComment={comment.snippet.topLevelComment} />
          ))}
      </ul>
    </section>
  );
};

export default Comments;
