import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">Ultra Nation</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <div>
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Home;
