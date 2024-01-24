import React from "react";
import data from "../../data.json";


function valueProperty(nameCourse, propCourse) {
  const cursoElegido = data.bootcamps.courses.find(
    (courses) => courses.name === nameCourse
  );
  const valueProperty = cursoElegido[propCourse];
  return valueProperty;
}

function Card({ title, img, hours, format, description }) {
  return (
    <>
      <h4>{title}</h4>
      <img src={img} alt="" />
      <div className="">
        <p>{hours}</p>
        <p>{format}</p>
      </div>
      <p>{description}</p>
      <p>+info</p>
    </>
  );
}

function Cards() {
  return (
    <>
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
    
    </>
  );
}

export default Cards;
