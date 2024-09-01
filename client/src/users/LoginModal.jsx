/* react */
import { useState } from 'react';

/* react bootstrap */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

/* local */
import useLoginReg from './hooks/useLoginReg';

/* variables */
const initialFormState = {
  email: '',
  password: '',
};

function LoginModal({ showLogin, handleClose }) {
  const [formState, setFormState] = useState(initialFormState);
  const { loginReg, errors, isLoading } = useLoginReg();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleCancel = () => {
    setFormState(initialFormState);
    handleClose('login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginReg('login', formState);
      setFormState(initialFormState);
      handleClose('login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={showLogin} onHide={() => handleClose('login')}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errors?.credentials && (
            <div className="bg-dark p-2 mb-2 text-warning">
              <small className="">{errors.credentials.message}</small>
            </div>
          )}
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              value={formState.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" size="sm" disabled={isLoading}>
            Login
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default LoginModal;
