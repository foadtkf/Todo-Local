import React, { useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import BlogCard from "../Shared/BlogCard";

const All = () => {
  const [searchName, setSearchName] = useState("");
  // const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
  const [blogs, setBlogs] = useState(
    JSON.parse(localStorage.getItem("blogs") || "[]")
  );

  const handleDelete = (name) => {
    // console.log(name);
    const updatedArray = blogs.filter((item) => item.heading !== name);
    setBlogs(updatedArray);
    // console.log(updatedArray);
    localStorage.setItem("blogs", JSON.stringify(updatedArray));
  };
  return (
    <div className="my-5">
      <h1 className="text-center">All Tasks</h1>
      <div className=" mb-3 w-75 mx-auto">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Search by name"
          onChange={(event) => {
            setSearchName(event.target.value);
          }}
        ></input>
      </div>
      <Row>
        {blogs
          .filter((bl) => {
            if (searchName === "") {
              return bl;
            } else if (
              bl.heading.toLowerCase().includes(searchName.toLowerCase())
            ) {
              return bl;
            }
          })
          .map((bl) => (
            <BlogCard bl={bl} handleDelete={handleDelete} />
          ))}
      </Row>
    </div>
  );
};

export default All;
