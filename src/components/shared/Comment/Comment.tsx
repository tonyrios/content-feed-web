import React from 'react';
import Image from 'next/image';
import { TComment } from 'app/services/content-cards/content-cards-models';
import styles from './Comment.module.sass';

interface CommentProps {
  comment: TComment;
}

export const Comment = ({ comment }: CommentProps) => {
  return (
    <div className={styles.Comment}>
      <div className={styles.Comment__profilePicContainer}>
        <Image
          src={comment.profilePic}
          alt="products marketplace"
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.Comment__bodyContainer}>
        <h3 className={styles.Comment__author}>{comment.author}</h3>
        <div className={styles.Comment__text}>{comment.text}</div>
      </div>
    </div>
  );
};
