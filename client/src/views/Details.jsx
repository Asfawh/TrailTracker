import axios from 'axios';
/* react */
import { useContext } from 'react';
import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TRAIL_SERVICE from '../services/trail.service';
import { AuthContext } from '../context/AuthContext';

import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';

function Details() {
  const { id } = useParams();
  const [trail, setTrail] = useState({});
  const { state } = useContext(AuthContext);

  const baseUrl = 'http://localhost:8004/api/trails';

  const removeTrail = (id) => {
    TRAIL_SERVICE.deleteTrailById(id);
    setTrail((prev) => prev.filter((trail) => id != trail._id));
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setTrail(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Fragment>
      <p className="text-center mt-3">
        <strong>{trail.trailName}</strong>
      </p>
      <div className="card-footer text-end mb-3">
        {state.user && (
          <Link
            to={`/trails/`}
            className="btn btn-sm btn-danger"
            onClick={() => removeTrail(trail._id)}
          >
            Remove
          </Link>
        )}
      </div>
      {trail && (
        <div className="row">
          <Card bg="light" text="dark" className="col">
            <img
              src={trail.image}
              alt={trail.trailName}
              className="img-fluid mb-3"
            />
          </Card>
          <div className="col">
            <Card bg="light" text="dark" className="shadow">
              <Card.Body>
                <Figure>
                  <p className="mb-3">
                    <strong>Length:</strong> {trail.length} Miles
                  </p>
                  <p className="mb-3">
                    <strong>Elevation:</strong> {trail.elevation} feet
                  </p>
                  <p className="mb-3">
                    <strong>Location:</strong> {trail.location}
                  </p>
                  <p className="mb-3">
                    <strong> Difficulty Level:</strong> {trail.difficulty}
                  </p>
                  <p className="mb-3">
                    <strong>Description:</strong> {trail.description}
                  </p>
                </Figure>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </Fragment>
  );
}
export default Details;
