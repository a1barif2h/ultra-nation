import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);
  console.log(country);
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div>
      <h1>this is country detail components {countryName} </h1>
      <h4> {country.name} </h4>
    </div>
  );
};

export default CountryDetail;
