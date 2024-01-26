import React from "react";
import data from "../../../data.json";

import Cards from "./Cards";

import ("./Bootcamps.css")

const bootcamps = data.bootcamps;

export default function Bootcamps() {
  return (
    <section 
      className="bootcamp"
    >

      <header>{bootcamps.title}</header>

      <h2>{bootcamps.header}</h2>


      <Cards />

    </section>
  );
}
