
import "../../styles/Course.css"
function Course({course}){
    return (
        <div key={course?.id} className="newfeatureCard">
            <div className="newfeatureImageWrapper">
                {course?.img && (
                <img 
                    src={course.img} 
                    alt={course?.title || 'Course'} 
                    className="newfeatureImage"
                    onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200';
                    }}
                />
                )}
            </div>
            <div className="newfeatureContent">
                <h3 className="newfeatureTitle">{course?.title || 'Course Title'}</h3>
                <p className="newfeatureFormat">{course?.format || 'Format not specified'}</p>
                <p className="newfeatureHours">{course?.hours ? `${course.hours} Hours` : 'Duration not specified'}</p>
                <p className="newfeatureDescription">{course?.description || 'No description available'}</p>
                <a className="newfeatureButton">+INFO</a>
            </div>
        </div>
    )
}

export default Course