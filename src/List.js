import { useRef, memo } from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";

/**
 * @param {object} event https://github.com/mobilizeamerica/api#event-object
 * @param {string} event.featured_image_url
 * @param {string} event.summary
 * @param {string} event.title
 */
function Event({ event }) {
  const BACKUP_IMAGE =
    "https://uploads-ssl.webflow.com/5e2f6f2acb2e5ea801e164bb/5ec2d9d5e8ad2c2eb84c21c2_Mobilize_Header%20Home.png";
  const ref = useRef(null);

  return (
    <Col>
      <Ratio aspectRatio="1x1">
        <Card>
          <Ratio aspectRatio="21x9">
            <Card.Img
              src={event.featured_image_url}
              style={{ objectFit: "cover" }}
              variant="top"
              ref={ref}
              onError={() => {
                ref.current.src = BACKUP_IMAGE;
                ref.current.onError = () => {
                  console.error("Replace BACKUP_IMAGE in List.js");
                };
              }}
              loading="lazy"
            />
          </Ratio>
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>{event.summary}</Card.Text>
          </Card.Body>
        </Card>
      </Ratio>
    </Col>
  );
}

/**
 * @param {object} response
 * @param {object[]} response.data
 */
function List({ response }) {
  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {response.data.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </Row>
  );
}

export default memo(List);
