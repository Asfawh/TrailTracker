import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import TrailsList from './TrailsList';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const query = useQuery().get('query');
  const { trailData } = useParams();

  const [trail, setTrail] = useState({});

  const baseUrl = 'http://localhost:8004/api/trails/search';

  useEffect(() => {
    axios
      .get(`${baseUrl}/${trailData}`)
      .then((res) => setTrail(res.data))
      .catch((err) => console.error(err));
  }, [trailData]);
  console.log(trail);

  return (
    <div>
      <h1>Search Results</h1>
      <p>
        Showing results for: <strong>{query}</strong>
      </p>
      <p>
        Showing results for: <strong>{query}</strong>
      </p>
      <TrailsList trails={query} />
      {/* <Link to={`/trails/${trail.trailName}`} className="link-primary">
        View
      </Link> */}
      {/* Render your search results here */}
    </div>
  );
};

export default SearchResults;
