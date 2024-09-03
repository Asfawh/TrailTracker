/* react */
import { useContext } from 'react';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

/* React Bootstrap  */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/* React Router Bootstrap */
import { LinkContainer } from 'react-router-bootstrap';

/* local */
import { AuthContext } from '../context/AuthContext';

// const { SearchBar } = Search;

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
                <Nav.Link>Create / View</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
        {/* <ToolkitProvider keyField="id" data={products} columns={columns} search>
          {(props) => (
            <div>
              <h3>Input something at below input field:</h3>
              <SearchBar {...props.searchProps} />
              <hr />
              <BootstrapTable {...props.baseProps} />
            </div>
          )}
        </ToolkitProvider> */}
      </Container>
    </Navbar>
  );
}

export default AppBar;
