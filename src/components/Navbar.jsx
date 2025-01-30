import "../styles/navbar.css";
import { IconChevronDown } from "@tabler/icons-react";
import data from "../../data.json";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={data.navbar.img} alt="logotb" />

        <ul className="links">
          {data.navbar.links.map((link, i) => (
            <li key={i}>
              {link} <IconChevronDown stroke={4} size={18} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;