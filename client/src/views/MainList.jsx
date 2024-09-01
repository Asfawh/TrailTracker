/* React */
import { Fragment, useContext, useEffect, useState } from "react";

/* react-router */
import { useOutletContext } from "react-router-dom";

/* local */
import { AuthContext } from "../context/AuthContext";
import EachTrail from "../components/EachTrail";
import Details from "./Details";
import styles from "../css/trail-list.module.css";
import TRAIL_SERVICE from "../services/trail.service";

function MainList() {
  // const { getAllItems } = useOutletContext();
  const [trails, setTrails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    state: { user },
  } = useContext(AuthContext);

  // useEffect(() => {
  //   getAllItems()
  //     .then((trails) => {
  //       setTrails(trails);
  //       setIsCurrent(true);
  //     })
  //     .catch((err) => console.log(err));
  // }, [isCurrent]);

  useEffect(() => {
    TRAIL_SERVICE.getAllTrail()
      .then((res) => {
        setTrails(res);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [isLoaded]);

  let subtitle = "Login or register for more.";

  if (user) {
    subtitle = "Click view for more details and action!";
  }

  return (
    <Fragment>
      <h1 className="mb-4 text-center">Display All </h1>
      <h5 className="mb-4 text-center">{subtitle}</h5>
      <div className={styles.grid}>
        {trails.map((trail, i) => (
          <EachTrail key={i} trail={trail} setIsLoaded={setIsLoaded} />
        ))}
      </div>
    </Fragment>
  );
}

export default MainList;
