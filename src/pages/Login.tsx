import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h2>Login</h2>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
