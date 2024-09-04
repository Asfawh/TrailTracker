/* react */
import { useContext } from 'react';

/* react bootstrap */
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import styles from '../css/trail-list.module.css';

/* react router */
import { Link } from 'react-router-dom';

/* local */
import { AuthContext } from '../context/AuthContext';

function EachTrail({ trail, setIsCurrent }) {
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <Card bg="light" text="dark" className="shadow">
      <img
        // className={styles.img}
        src={trail.image}
        alt={trail.trailName}
        className="img-fluid mb-3"
      />
      <Card.Body>
        <Figure>
          <blockquote>
            <Card.Text>
              <strong>{trail.trailName}</strong>
            </Card.Text>
            <Card.Text className="mb-0">
              <strong>Description:</strong> {trail.description}
            </Card.Text>
          </blockquote>
          <Figure.Caption className="blockquote-footer">
            {/* {trail.creator.username} */}
          </Figure.Caption>
        </Figure>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center gap-2 bg-light">
        <small>
          <Link to={`/trails/${trail._id}`} className="link-primary">
            View
          </Link>
        </small>
      </Card.Footer>
    </Card>
  );
}

export default EachTrail;
