import React from 'react';
import Image from 'next/image';
import styles from './ContentCard.module.sass';
import { ContentCardResponse } from 'app/services/content-cards/content-cards-models';
import { ContentTextCard } from './ContentTextCard/ContentTextCard';
import { CommentList } from '../CommentList/CommentList';

interface ContentCardProps {
  content: ContentCardResponse;
}

export const ContentCard = ({ content }: ContentCardProps) => {
  return (
    <article>
      <div className={styles.ContentCard}>
        <div className={styles.ContentCard__imageContainer}>
          <Image
            src={content.imageUri}
            alt="products marketplace"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.ContentCard__contentContainer}>
          <div className={styles.ContentCard__contentHeader}>
            <div>
              <h2 className={styles.ContentCard__title}>{content.title}</h2>
              <p className={styles.ContentCard__subtitle}>{content.subtitle}</p>
            </div>
            <h6 className={styles.ContentCard__author}>{content.author}</h6>
          </div>
          <ContentTextCard content={content.content} />
          <CommentList comments={content.comments} />
        </div>
      </div>
    </article>
  );
};
