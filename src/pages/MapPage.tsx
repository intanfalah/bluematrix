import { Container } from "react-bootstrap";
import Map from "../components/Map";

const MapPage = () => {
  return (
    <Container className="mt-5">
      <h2>Interactive Map</h2>
      <Map />
    </Container>
  );
};

export default MapPage;
