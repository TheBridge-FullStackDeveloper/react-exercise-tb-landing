import '../styles/herosection.css'
import data from '../../data.json'

function HeroSection() {
    return (
        <div className="hero">
            <div className="hero-child-1">
                <div className='child-1-content'>
                    <h1>{data.header.title}</h1>
                    <h3>{data.header.subheading}</h3>
                    <p>{data.header.paragraph}</p>
                    <button>{data.header.button}</button>
                </div>
            </div>
            <div className="hero-child-2"></div>
        </div>
    )
}

export default HeroSection;