import "../styles/bootcamps.css";
import data from "../../data.json";
import Card from "./Card";

const Bootcamps = () => {
  return (
    <>
      <main className="bootcamps">
        <div className="title">
          <h6>{data.bootcamps.title}</h6>
        </div>

        <div className="header">
          <h1>{data.bootcamps.header}</h1>
        </div>

        <section>
          <div className="cards-container">
            {data.bootcamps.courses.map((course, i) => (
              <Card
                key={i}
                title={course.title}
                hours={course.hours}
                format={course.format}
                description={course.description}
                img={course.img}
                info={course.info}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Bootcamps;
