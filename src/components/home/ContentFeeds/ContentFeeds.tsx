import styles from './ContentFeeds.module.sass';
import { ContentCard } from 'app/components/shared/ContentCard/ContentCard';
import { ContentCardResponse } from 'app/services/content-cards/content-cards-models';

interface ContentFeedsProps {
  contentCards: ContentCardResponse[];
}

export const ContentFeeds = ({ contentCards }: ContentFeedsProps) => {
  return (
    <section className={styles.MainProducts}>
      <h3>✨ New feeds!</h3>
      <div className={styles.MainProducts__grid}>
        {contentCards?.map((contentCard) => {
          return <ContentCard key={contentCard.id} content={contentCard} />;
        })}
      </div>
    </section>
  );
};
