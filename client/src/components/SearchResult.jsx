import React from 'react';
import { useLocation } from 'react-router-dom';

import EachTrail from './EachTrail';
import Details from '../views/Details';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get('query');

  return (
    <div>
      <h1>Search Results</h1>
      <p>
        Showing results for: <strong>{query}</strong>
      </p>
      {/* <EachTrail /> */}
      <Details />
      {/* Render your search results here */}
    </div>
  );
};

export default SearchResults;
