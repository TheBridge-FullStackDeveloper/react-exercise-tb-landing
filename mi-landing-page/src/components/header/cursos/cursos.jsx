import React, { useState, useEffect } from 'react';
import data from '../../../data.json';
import './Cursos.css';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    setCursos(data.bootcamps.courses);
  }, []);

  return (
    <section className="cursos-container">
        <h2 className="bootcamp-subtitle">{data.bootcamps.title}</h2>
        <h1 className="discover-title">Descubre nuestros</h1>
        <h1 className="bootcamps-main-title">Bootcamps</h1>
      
        <div className="cursos-grid">
          {cursos.map((curso) => (
            <div key={curso.name} className="curso-card">
              <img src={curso.img} alt={curso.title} />
              <h3>{curso.title}</h3>
              <div className="curso-info">
                <span className="curso-horas">
                  {curso.hours} Horas
                </span>
                <span className="curso-formato">
                  {curso.format}
                </span>
              </div>
              <p>{curso.description}</p>
              <a href="/info" className="info-button">+ INFO</a>
            </div>
          ))}
        </div>
    </section>
  );
}

export default Cursos;
