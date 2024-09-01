/* react */
import { useContext } from 'react';

/* React Bootstrap  */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/* React Router Bootstrap */
import { LinkContainer } from 'react-router-bootstrap';

/* local */
import { AuthContext } from '../context/AuthContext';

function AppBar() {
  const { state } = useContext(AuthContext);

  return (
    <Navbar variant="dark" bg="primary" expand="lg">
      <Container>
        <LinkContainer to="/trails">
          <Navbar.Brand>TrailBlazer </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="nav-menu" />
        <Navbar.Collapse id="nav-menu">
          <Nav className="me-auto">
            {state.user && (
              <LinkContainer to="/trails/new">
                <Nav.Link>Create /and Display</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;