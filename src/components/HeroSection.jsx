import "../styles/HeroSection.css";
import data from "../../data.json"
function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>{data.header.title}</h1>
                <h3>{data.header.subheading}</h3>
                <p>{data.header.paragraph}</p>
                <button>{data.header.button}</button>
            </div>
            <div className="hero-img">

            </div>
        </section>
    );
}

export default HeroSection;
