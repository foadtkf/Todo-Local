import React, { useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";

const All = () => {
    const [searchName,setSearchName]=useState('')
  const blogs = JSON.parse(localStorage.getItem("blogs")||"[]");
  return (
    <div className="my-5">
      <h1 className="text-center">All Blogs</h1>
      <div className=" mb-3 w-75 mx-auto">
          <input type="text" className="form-control" id="floatingInput"  placeholder="Search by name" onChange={(event)=>{setSearchName(event.target.value)}}></input>
          </div>
      <Row>
        {blogs.filter((bl)=>{
            if(searchName===""){
                return bl
            }
            else if(bl.heading.toLowerCase().includes(searchName.toLowerCase())){
                return bl
            }
        }).map((bl) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={bl.image} />
              <Card.Body>
                <Card.Title>{bl.heading} <Badge bg="secondary">{bl.type.toUpperCase()}</Badge></Card.Title>
                <Card.Text>
                  {bl.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default All;
