import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

/**
 * @param {function} setUrl
 * @param {object} response https://github.com/mobilizeamerica/api#format
 * @param {string} response.next https://github.com/mobilizeamerica/api#paging
 * @param {string} response.previous https://github.com/mobilizeamerica/api#paging
 */
function Pagination({ response, setUrl }) {
  return (
    <Row className="mt-4">
      <Col xs={6}>
        <Button
          className="w-100"
          onClick={() => {
            setUrl(response.previous);
            window.scroll({ top: 0, behavior: "smooth" });
          }}
          disabled={!response.previous}
        >
          previous
        </Button>
      </Col>
      <Col xs={6}>
        <Button
          className="w-100"
          onClick={() => {
            setUrl(response.next);
            window.scroll({ top: 0, behavior: "smooth" });
          }}
          disabled={!response.next}
        >
          next
        </Button>
      </Col>
    </Row>
  );
}

export default Pagination;
