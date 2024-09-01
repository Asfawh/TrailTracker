import { Fragment } from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';

import CreateForm from '../components/CreateForm';
import TrailsList from '../components/TrailsList';
import TRAIL_SERVICE from '../services/trail.service';

function Main() {
  const [trails, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    TRAIL_SERVICE.getAllTrail()
      .then((res) => {
        setItems(res);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [isLoaded]);
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <CreateForm setIsLoaded={setIsLoaded} />
        </div>
        <div className="col">
          {isLoaded && <TrailsList trails={trails} setIsLoaded={setIsLoaded} />}
        </div>
      </div>
    </Fragment>
  );
}
export default Main;
