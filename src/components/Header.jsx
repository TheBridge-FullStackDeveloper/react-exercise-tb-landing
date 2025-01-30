import "../styles/header.css";
import data from "../../data.json";

const Header = () => {
  return (
    <>
      <section className="header-container">

        <div>
          
          <h1>{data.header.title}</h1>
          <h3>{data.header.subheading}</h3>
          <h4>{data.header.paragraph}</h4>
          <button>{data.header.button}</button>
        </div>
        

        <img className="students" src={data.header.img} alt="students" />
      </section>
    </>
  );
};

export default Header;
