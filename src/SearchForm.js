import React, { useState } from "react";
import Weather from "./Weather";

export default function SearchForm() {
  let [searched, setSearched] = useState("");
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setCity(searched);
  }
  function updateCity(event) {
    setSearched(event.target.value);
    console.log(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search a city..." onChange={updateCity} />
      <input type="submit" value="Search" />
      <Weather city={city} />
    </form>
  );
}
