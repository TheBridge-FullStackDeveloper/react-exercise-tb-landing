import { bootcamps } from '../../data.json' 
import "../styles/bootcamps.css";
import "../styles/globas.css";

const Carts = (course) =>{
    const { title, img, hours, format, description } = course.course
 
    return (
        <div className='cart'>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <div className='contenedor-iconos'>
        <span className='icon hours'>{hours}</span>
        <span className='icon format'>{format}</span>
        </div>
        <p className='description'>{description}</p>
        <p className='info'>+ INFO</p>
        </div>
    )
}

const Bootcamps = () =>{
    return (
        <>
        <div className='contenedor-bootcamps'>

        <p>{bootcamps.title}</p>
        <h2>{bootcamps.header}</h2>
        <div className='bootcamps'>

            {bootcamps.courses.map((courses, index)=>{
                return  <Carts key={index} course={courses} />
            })}
           
        </div>
        </div>
        </>
    )
}

export default Bootcamps