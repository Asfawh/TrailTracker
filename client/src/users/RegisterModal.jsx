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
  username: '',
  email: '',
  password: '',
};

function RegisterModal({ showRegister, handleClose }) {
  const [formState, setFormState] = useState(initialFormState);
  const { loginReg, errors, isLoading } = useLoginReg();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const handleCancel = () => {
    setFormState(initialFormState);
    handleClose('register');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginReg('register', formState);
      setFormState(initialFormState);
      handleClose('register');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={showRegister} onHide={() => handleClose('register')}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={formState.username}
              onChange={handleChange}
            />
            {errors?.username && (
              <Form.Text className="text-warning">
                {errors.username.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="text"
              value={formState.email}
              onChange={handleChange}
            />
            {errors?.email && (
              <Form.Text className="text-warning">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            {errors?.password && (
              <Form.Text className="text-warning">
                {errors.password.message}
              </Form.Text>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" size="sm" disabled={isLoading}>
            Register
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default RegisterModal;
