import { MultipleQueriesQuery } from '@algolia/client-search';
import { hitComponent } from './HitComponent';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

import 'instantsearch.css/themes/satellite-min.css';
import "@/styles/algolia.css";

export default function Search() {
    const algoliaClient = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || '',
        process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || '',
    );

      // 検索結果なしのモック情報
  const mock = {
    hits: [],
    nbHits: 0,
    nbPages: 0,
    page: 0,
    processingTimeMS: 0,
  };

    // 空文字の場合は何もない情報をモックして渡す
    const searchClient = {
        ...algoliaClient,
        search(requests) {
          if (requests.every(({ params }) => !params?.query)) {
            return Promise.resolve(mock);
          }
          return algoliaClient.search(requests);
        },
      };

    const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX || '';

    return (
        <div>
        <InstantSearch indexName={indexName} searchClient={searchClient}>
          <SearchBox />
          <Hits sx={{my: 2}}
          hitComponent={hitComponent} />
        </InstantSearch>
      </div>
    );
}
