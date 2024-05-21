'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TComment } from 'app/services/content-cards/content-cards-models';
import styles from './CommentList.module.sass';
import { Comment } from '../Comment/Comment';

interface CommentProps {
  comments: TComment[];
}

export const CommentList = ({ comments }: CommentProps) => {
  const [showComments, setShowComments] = useState(false);

  const showingComments = () => {
    setShowComments(true);
  };

  return (
    <div className={styles['CommentList']}>
      {!showComments && (
        <button
          className={styles['CommentList__button']}
          onClick={showingComments}
        >
          View all {comments.length} comments
        </button>
      )}
      {showComments && (
        <div>
          <h3>Comments</h3>
          {comments.map((comment) => (
            <Comment key={comment.text} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
