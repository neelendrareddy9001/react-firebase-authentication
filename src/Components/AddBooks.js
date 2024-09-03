import React, { useState } from "react";
import { Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [falg, setFlag] = useState(true);
  const [status, setStatus] = useState("Available");
  const [message, setMessage] = useState({error: false, ms:""})

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(title === "" || author === "") {
      setMessage({error: true, msg: "All fields are mandatory"})
    }
    const newBook = {
      title,
      author,
      status
    }
    console.log(newBook)
  };

  return (
    <div className="p-4 box">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBookTitle">
          <InputGroup>
            <InputGroup.Text style={{backgroundColor: "black", color:"white"}} id="formBookTitle">B</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Book title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBookAuthor">
          <InputGroup>
            <InputGroup.Text style={{backgroundColor: "black", color:"white"}} id="formBookAuthor">A</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Book Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
        <ButtonGroup aria-label="Basic Example" className="mb-3">
          <Button
            disabled={falg}
            variant="success"
            onClick={(e) => {
              setStatus("Not Available");
              setFlag(false);
            }}
          >
            Available
          </Button>
          <Button
          variant="danger"
            disabled={!falg}
            onClick={(e) => {
              setStatus("Not Available");
              setFlag(false);
            }}
          >
            Not Available
          </Button>
        </ButtonGroup>
        <div className="d-grid gap-2">
          <Button variant="primary" type="Submit">
            Add/ Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddBooks;
