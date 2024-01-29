import React from 'react';
import './bootcamps.css';
import headerData from '../../../data.json'; // Asegúrate de que esta es la ruta correcta
import backgroundImage from "../../../assets/444.png"; // Asegúrate de que esta es la ruta correcta

function Bootcamps() {
  const { title, subheading, paragraph, button } = headerData.header;
  const [firstLine, ...restOfTitle] = title.split(' '); // Asumiendo que 'title' es "Acelera tu carrera digital."

  return (
    <div className="bootcamps-container">
      <div className="left-content">
        <h1>
         Acelera tu carrera digital
        </h1>
        <h2>{subheading}</h2>
        <p>{paragraph}</p>
        <button>{button}</button>
      </div>
      <div className="right-content">
        <img src={backgroundImage} alt="Background" className="background-image" />
      </div>
    </div>
  );
}


export default Bootcamps;

