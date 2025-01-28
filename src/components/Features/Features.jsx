import '../../styles/features.css'
import data from '../../../data.json'
import FeaturesCard from './FeaturesCard'

function Features() {
    return (
        <div className='features-section'>
            <p>{data.bootcamps.title}</p>
            <h1 className='feature-section-title'>{data.bootcamps.header}</h1>
            <div className='features-cards'>
            {
                data.bootcamps.courses.map((course => {
                    return <FeaturesCard course={course} key={course.name}></FeaturesCard>
                }))
            }
            </div>
        </div>
    )
}

export default Features