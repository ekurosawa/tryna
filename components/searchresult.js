import { useEffect, useState, useCallback } from 'react';
import { Hit } from 'react-instantsearch-core';
import { Hits, connectSearchBox, Pagination, Highlight, PoweredBy } from 'react-instantsearch-dom';

function HitComponent({ hit, onClick }) {
  return (
    <a href={hit.url}>
      <button onClick={onClick} className="flex justify-start w-full px-5 py-5">
        <Highlight attribute="title" hit={hit} />
      </button>
    </a>
  );
}

const SearchResult = connectSearchBox(({ refine, currentRefinement }) => {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    setShow(!!currentRefinement);
  }, [currentRefinement]);

  const handleResetSearchWords = useCallback(() => {
    refine('');
  }, [refine]);

  const hitComponent = ({ hit }) => (
    <HitComponent hit={hit} onClick={handleResetSearchWords} />
  );

  if (!isShow) return null;
  return (
    <>
      {/*<p className="mt-5 text-sm font-semibold tracking-wider text-gray-500">記事一覧</p>*/}
      <Hits hitComponent={hitComponent} />
      
      <Pagination />
      {/*
      <PoweredBy />
      */}

    </>
  );
});

export default SearchResult;