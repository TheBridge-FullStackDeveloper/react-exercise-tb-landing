import React from 'react';
import '../styles/bootcampCard.css';
import data from '../data/data.json';

function BootcampCard() {
  return (
    <div>
      {data.bootcamps.courses.map((course) => (
        <div key={course.name} className="bootcamp-card">
          <img src={course.img} alt={course.title} />
          <h3>{course.title}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BootcampCard;
