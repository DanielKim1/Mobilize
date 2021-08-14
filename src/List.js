import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";

function List({ response }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {response.data.map((event) => (
        <Col key={event.id}>
          <Ratio aspectRatio="1x1">
            <Card>
              <Ratio aspectRatio="21x9">
                <Card.Img
                  src={event.featured_image_url}
                  style={{ objectFit: "cover" }}
                  variant="top"
                />
              </Ratio>
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.summary}</Card.Text>
              </Card.Body>
            </Card>
          </Ratio>
        </Col>
      ))}
    </Row>
  );
}

export default List;
