import React, { useState, useEffect } from 'react';
import data from '../../../data.json';
import './Cursos.css';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const ordenPredefinido = ["ds", "ux", "fs", "dm"]; // El orden en el que quieres los cursos
    const cursosOrdenados = ordenPredefinido.map(id =>
      data.bootcamps.courses.find(curso => curso.name === id)
    );
    setCursos(cursosOrdenados);
  }, []);

  return (
    <section className="cursos-container">
      <h2 className="bootcamp-subtitle">{data.bootcamps.title}</h2>
      <h1 className="discover-title">Descubre nuestros</h1>
      <h1 className="bootcamps-main-title">Bootcamps</h1>
      
      <div className="cursos-grid">
        {cursos.map((curso, index) => {
          // Agrega la clase 'curso-card-with-line' a las tres primeras tarjetas
          const cardClassName = `curso-card ${index < 3 ? 'curso-card-with-line' : ''}`;

          return (
            <div key={curso.name} className={cardClassName}>
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
          );
        })}
      </div>
    </section>
  );
}

export default Cursos;
