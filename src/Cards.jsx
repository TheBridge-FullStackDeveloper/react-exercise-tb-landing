import Card from "./Card";
import data from "../data.json";

export default function Cards() {
  const { bootcamps } = data;

  const bootcampElementArray = bootcamps.courses.map((course, index) => (
    <Card
      key={index}
      text={course.title}
      img={course.img}
      hours={course.hours}
      format={course.format}
      description={course.description}
    />
  ));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 100px",
      }}
    >
      <div>
        <p>{bootcamps.title}</p>
        <h2>{bootcamps.header}</h2>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {bootcampElementArray}
      </div>
    </div>
  );
}
