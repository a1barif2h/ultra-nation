import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NotFound = () => {
  const notFoundStyle = {
    backgroundColor: "yellow",
    color: "red",
    textAlign: "center",
    height: "550px",
    paddingTop: "250px",
  };
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/home">Ultra Nation</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <div style={notFoundStyle}>
        <h1>404</h1>
        <h4>Expected result is not found!!</h4>
      </div>
    </div>
  );
};

export default NotFound;
