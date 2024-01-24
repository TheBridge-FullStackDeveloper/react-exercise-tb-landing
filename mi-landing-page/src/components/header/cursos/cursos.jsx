import React, { useState, useEffect } from 'react';
import data from '../../../data.json';
import './Cursos.css';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    // Asegúrate de que la ruta al archivo data.json es correcta y de que la estructura del archivo JSON es como la proporcionaste.
    setCursos(data.bootcamps.courses);
  }, []);

  return (
    <section className="cursos-container">
        <h2>{data.bootcamps.title}</h2>
      <h1>Descubre nuestros</h1>
      <h1 className="bootcamps-title">Bootcamps</h1>
      
      <div className="cursos-grid">
        {cursos.map((curso) => (
          <div key={curso.name} className="curso-card">
            <img src={curso.img} alt={curso.title} />
            <h3>{curso.title}</h3>
            <span>{curso.hours} Horas - {curso.format}</span>
            <p>{curso.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cursos;
