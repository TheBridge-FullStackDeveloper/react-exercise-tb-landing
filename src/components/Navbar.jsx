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
              {link} <IconChevronDown stroke={2} size={16} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
