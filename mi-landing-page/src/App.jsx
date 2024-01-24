import { useState } from "react";
import Cards from "./Cards.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav>
          <h1>THE BRIDGE</h1>
          <h4>Cursos</h4>
          <h4>Donde Estudiar</h4>
          <h4>Financiacion y becas</h4>
          <h4>Empresas e instituciones</h4>
          <div>Sobre nosotros</div>
        </nav>
        
        <div>
          <h2>Acelera tu carrera digital</h2>
          <h3>
            En una época de cambios y desarrollo tecnológico, tu formación no
            puede perder el ritmo.
          </h3>
          <p>
            Cuando eliges un bootcamp en The Bridge estás dando el paso
            definitivo hacia una de las profesiones del futuro más demandadas en
            el presente, ya sea Ciberseguridad, Data Science, Desarrollo de
            Software, Diseño de Producto UX/Ul o Marketing Digital.
          </p>
          <img src="" alt="" />
        </div>
        <footer>Pide formación</footer>

        <p>EXPERIENCIAS FORMATIVAS QUE CAMBIARÁN TU CARRERA</p>

        <h3>Descubre nuestros bootcamps</h3>

        <Cards />
      </header>
    </>
  );
}

export default App;
