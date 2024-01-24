import React from "react";
import data from "../../data.json";
import Cards from "./Cards";

const bootcamps = data.bootcamps;

export default function Bootcamps() {
  return (
    <>
      <header>{bootcamps.header}</header>

      <h2>{bootcamps.title}</h2>

      <Cards />

    </>
  );
}
