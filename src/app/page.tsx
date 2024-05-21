import { ContentFeeds } from 'app/components/home/ContentFeeds';
import { getContentFeeds } from 'app/services/content-cards/content-cards';
import { ContentCardResponse } from 'app/services/content-cards/content-cards-models';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const contentCards: ContentCardResponse[] = await getContentFeeds();

  return (
    <main>
      <ContentFeeds contentCards={contentCards} />
    </main>
  );
}
