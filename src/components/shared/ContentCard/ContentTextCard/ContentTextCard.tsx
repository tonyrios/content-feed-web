'use client';

import React, { useState } from 'react';
import styles from '../ContentCard.module.sass';
import classNames from 'classnames';

interface ContentTextCardProps {
  content: string;
}

export const ContentTextCard = ({ content }: ContentTextCardProps) => {
  const [showAll, setShowAll] = useState(false);

  const showingAll = () => {
    setShowAll(true);
  };

  const contentTextClass = classNames({
    [styles['ContentCard__contentText']]: showAll,
    [styles['ContentCard__contentText--truncate']]: !showAll,
  });

  return (
    <div className={styles['ContentCard__contentTextContainer']}>
      <p className={contentTextClass}>{content}</p>
      {!showAll && (
        <button className={styles['ContentCard__button']} onClick={showingAll}>
          Show more
        </button>
      )}
    </div>
  );
};
