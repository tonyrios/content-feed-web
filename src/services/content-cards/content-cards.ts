import { env } from 'app/config/env';
import { contedFeedUrls } from './content-cards-urls';
import { ContentCardResponse } from './content-cards-models';

export const getContentFeeds = async (): Promise<ContentCardResponse[]> => {
  const response = await fetch(contedFeedUrls.contedCards.all, {
    cache: 'no-store',
  });
  const contentFeeds = await response.json();
  return contentFeeds;
};
