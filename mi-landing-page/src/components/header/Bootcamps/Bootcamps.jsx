import React from 'react';
import './bootcamps.css';
import headerData from '../../../data.json'; // Esta es la ruta correcta
import backgroundImage from "../../../assets/444.png";

function Bootcamps() {
  const { title, subheading, paragraph, button } = headerData.header;

  return (
    <div className="bootcamps-container">
      <div className="left-content">
        <h1>{title}</h1>
        <h2>{subheading}</h2>
        <p>{paragraph}</p>
        <button>{button}</button>
      </div>
      <div className="right-content">
        <div className="image-container">
          <img src={backgroundImage} alt="Background" className="background-image" />
        </div>
      </div>
    </div>
  );
}

export default Bootcamps;

