import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Pagination({ response, setUrl }) {
  return (
    <Row className="mt-4">
      <Col xs={6}>
        <Button
          className="w-100"
          onClick={() => setUrl(response.previous)}
          disabled={!response.previous}
        >
          previous
        </Button>
      </Col>
      <Col xs={6}>
        <Button
          className="w-100"
          onClick={() => setUrl(response.next)}
          disabled={!response.next}
        >
          next
        </Button>
      </Col>
    </Row>
  );
}

export default Pagination;
