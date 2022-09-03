import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Entertainment = () => {
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    return (
        <div>
            <h1>Entertainment Blogs</h1>
            <Row>
        {blogs.map((bl) => (bl.type==='entertainment'&&
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={bl.image} />
              <Card.Body>
                <Card.Title>{bl.heading}</Card.Title>
                <Card.Text>
                  {bl.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        </div>
    );
};

export default Entertainment;