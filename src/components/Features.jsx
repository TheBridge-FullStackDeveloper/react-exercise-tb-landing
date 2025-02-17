import "../styles/Features.css";
import bootcamps from '../../data.json';
import { useState, useEffect } from 'react';
import Course from "./Course/Course";

function Features() {
const [error, setError] = useState(null);
if (!bootcamps?.bootcamps?.courses) {
    return (
    <section className="features" id="features">
        <h2>Error Loading Courses</h2>
        <p>Unable to load course data. Please try again later.</p>
    </section>
    );
}

return (
    <section className="features" id="features">
    <h2>{bootcamps?.bootcamps?.header || 'Our Courses'}</h2>
    <p className="featuresSubtitle">{bootcamps?.bootcamps?.title || 'Explore our available courses'}</p>
    <div className="featuresGrid">
        {bootcamps?.bootcamps?.courses?.map((course) => <Course course={course} key={course.name}></Course>)}
    </div>
    
</section>
);
}

export default Features;
