import React from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";

const BlogCard = ({ bl, handleDelete }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={bl.image} />
        <Card.Body>
          <Card.Title>
            {bl.heading} <Badge bg="secondary">{bl.type.toUpperCase()}</Badge>
          </Card.Title>
          <Card.Text>{bl.description}</Card.Text>
          <Button variant="danger" onClick={() => handleDelete(bl.heading)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogCard;
