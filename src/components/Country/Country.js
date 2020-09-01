import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Country.css";
import { Link } from "react-router-dom";

const Country = (props) => {
  //   console.log(props.country);
  const { name, flag, capital, region, subregion, population } = props.country;
  const countryStyle = {
    backgroundColor: "#282C34",
    padding: "20px",
    paddingLeft: "50px",
    display: "flex",
    borderBottom: "1px solid gray",
  };
  return (
    <div style={countryStyle}>
      <Row style={{ width: "75%", margin: "auto" }}>
        <Col md={6}>
          <div className="country-flag">
            <img src={flag} alt="" />
          </div>
        </Col>
        <Col md={6}>
          <div className="text-light">
            <h2>Country Name: {name}</h2>
            <h3>Capital: {capital} </h3>
            <h4>Region: {region} </h4>
            <h4>Subregion:{subregion} </h4>
            <h4>Population: {population} </h4>
            <Link to={`/country/${name}`}>
              <Button variant="outline-primary">More Details Hear !</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Country;
