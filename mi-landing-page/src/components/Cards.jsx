import React from "react";
import data from "../../../data.json";

import("./Cards.css");

function valueProperty(nameCourse, propCourse) {
  const cursoElegido = data.bootcamps.courses.find(
    (courses) => courses.name === nameCourse
  );
  const valueProperty = cursoElegido[propCourse];
  return valueProperty;
}

function Card({ title, img, hours, format, description }) {
  return (
    <div className="card">
      <div className="headCard1">
        <h4>{title}</h4>
        <img src={img} alt="" />
      </div>

      <div className="divCard2">
        <p>{hours}</p>
        <p>{format}</p>
      </div>

      <p className="description">{description}</p>
      <div className="infoDiv">
        <h6 id="info"> +info</h6>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <section className="cards">
      <div>
        <Card
          title={valueProperty("cs", "title")}
          img={valueProperty("cs", "img")}
          hours={valueProperty("cs", "hours")}
          format={valueProperty("cs", "format")}
          description={valueProperty("cs", "description")}
        />
      </div>
      <div>
        <Card
          title={valueProperty("ds", "title")}
          img={valueProperty("ds", "img")}
          hours={valueProperty("ds", "hours")}
          format={valueProperty("ds", "format")}
          description={valueProperty("ds", "description")}
        />
      </div>

      <div>
        <Card
          title={valueProperty("fs", "title")}
          img={valueProperty("fs", "img")}
          hours={valueProperty("fs", "hours")}
          format={valueProperty("fs", "format")}
          description={valueProperty("fs", "description")}
        />
      </div>

      <div>
        <Card
          title={valueProperty("dm", "title")}
          img={valueProperty("dm", "img")}
          hours={valueProperty("dm", "hours")}
          format={valueProperty("dm", "format")}
          description={valueProperty("dm", "description")}
        />
      </div>

      <div>
        <Card
          title={valueProperty("ux", "title")}
          img={valueProperty("ux", "img")}
          hours={valueProperty("ux", "hours")}
          format={valueProperty("ux", "format")}
          description={valueProperty("ux", "description")}
        />
      </div>
    </section>
  );
}

export default Cards;
