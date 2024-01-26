import NavBar from "./Nav";
import Hero from "./Content";

function App() {
  return (
    <>
      <NavBar />
      <Hero />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 100px",
        }}
      >
        <div>
          <p>EXPERIENCIAS FORMATIVAS QUE CAMBIARÁN TU CARRERA</p>
          <h2>Descubre nuestros Bootcamps</h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "200px",
              border: "2px solid black",
              padding: "20px",
              margin: "10px",
            }}
          >
            <h5>Ciberseguridad</h5>
            <p>
              Con nuestro bootcamp adquirirás los conocimientos para ser miembro
              de equipo Red Team o Blue Team utilizando las estrategias y
              herramientas más actuales, en uno de los mejores programas del
              mundo en 2021.
            </p>
            <a href="" style={{ textDecoration: "none", color: "red" }}>
              <b>+INFO</b>
            </a>
          </div>

          <div
            style={{
              width: "200px",
              border: "2px solid black", 
              padding: "20px", 
              margin: "10px",
            }}
          >
            <h5>Data Science</h5>
            <p>
              Aprenderás Python, sus librerías de análisis de datos y de Machine
              Learning y Deep para construir y desplegar modelos y mostrar su
              utilidad al negocio.
            </p>
            <a href="" style={{ textDecoration: "none", color: "red" }}>
              <b>+INFO</b>
            </a>
          </div>

          <div
            style={{
              width: "200px",
              border: "2px solid black", 
              padding: "20px",
              margin: "10px",
            }}
          >
            <h5>Desarrollo Web Full Stack</h5>
            <p>
              Con nuestro bootcamp te transformarás en un desarrollador Web Full
              Stack. Aprende desde cero HTML, JavaScript node.JS y bases de
              datos. Acelera tus proyectos utilizando ReactJS, y conoce los
              fundamentos de DevOps para el despliegue y mantenimiento de tus
              proyectos.
            </p>
            <a href="" style={{ textDecoration: "none", color: "red" }}>
              <b>+INFO</b>
            </a>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: "200px",
              border: "2px solid black", 
              padding: "20px",
              margin: "10px", 
            }}
          >
            <h5>Digital Marketing OPS</h5>
            <p>
              Una aproximación práctica al Marketing Digital que te permitirá
              conocer las últimas herramientas y los nuevos medios, con foco en
              la planificación, análisis y automatización para la optimización
              de resultados.
            </p>
            <a href="" style={{ textDecoration: "none", color: "red" }}>
              <b>+INFO</b>
            </a>
          </div>

          <div
            style={{
              width: "200px",
              border: "2px solid black", 
              padding: "20px",
              margin: "10px",
            }}
          >
            <h5>UX/UI Product Design</h5>
            <p>
              Te familiarizarás con conceptos clave sobre experiencia de
              usuario: metodologías de investigación y análisis de datos,
              arquitectura de la información, ideación y principios del diseño
              visual y de experiencia de usuario.
            </p>
            <a href="" style={{ textDecoration: "none", color: "red" }}>
              <b>+INFO</b>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
