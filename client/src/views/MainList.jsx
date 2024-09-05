/* React */
import { Fragment, useContext, useEffect, useState } from 'react';

/* react-router */
import { useOutletContext } from 'react-router-dom';

/* local */
import { AuthContext } from '../context/AuthContext';
import EachTrail from '../components/EachTrail';
import Details from './Details';
import styles from '../css/trail-list.module.css';
import TRAIL_SERVICE from '../services/trail.service';
import Search from '../components/Search';

function MainList() {
  const [trails, setTrails] = useState([]);
  // console.log('************************');
  // console.log(trails);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    state: { user },
  } = useContext(AuthContext);

  useEffect(() => {
    TRAIL_SERVICE.getAllTrail()
      .then((res) => {
        setTrails(res);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [isLoaded]);

  let subtitle = 'Login or register for more.';

  if (user) {
    subtitle =
      'Click view for details below or search trail by trail name above.';
  }

  return (
    <Fragment>
      <h1 className="mb-4 mt-3 text-center">All Trails </h1>
      <Search />
      <h5 className="mb-4 mt-3 text-center">{subtitle}</h5>
      <div className={styles.grid}>
        {trails.map((trail, i) => (
          <EachTrail key={i} trail={trail} setIsLoaded={setIsLoaded} />
        ))}
      </div>
    </Fragment>
  );
}

export default MainList;
