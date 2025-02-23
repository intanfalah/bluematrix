import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to MyApp</h1>
      <p>Your interactive mapping solution</p>
      <Link to="/login">
        <Button variant="primary" className="m-2">Login</Button>
      </Link>
      <Link to="/signin">
        <Button variant="secondary" className="m-2">Sign In</Button>
      </Link>
    </Container>
  );
};

export default LandingPage;
