import { header } from "../../data.json";
import "../styles/header.css";
import "../styles/globas.css";
import headerImg from "../img/header.png";

const Header = () => {
  const { title, subheading, paragraph, button } = header;
  return (
    <>
      <div className="container-header">
        <div className="grip-1">
          <h1>{title}</h1>
          <h4>{subheading}</h4>
          <p>{paragraph}</p>
          <button>{button}</button>
        </div>
        <img className="grip-2" src={headerImg} alt="" />
      </div>
    </>
  );
};

export default Header;
