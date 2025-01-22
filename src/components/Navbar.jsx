import { navbar } from "../../data.json";
import "../styles/Navbar.css";
import "../styles/globas.css";

const Enlace = ({ links }) => {
  return (
    <>
      {links.map((link, index) => {
        return <li key={index}>{link[0].toUpperCase() + link.substring(1)}</li>;
      })}
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="fondo-navbar">
        <div className="navbar">
          <img src={navbar.img} alt="" />
          <ul>
            <Enlace links={navbar.links} />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
