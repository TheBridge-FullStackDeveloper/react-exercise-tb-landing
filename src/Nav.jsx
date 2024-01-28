import React from "react";
import data from "../data.json";

const NavBar = () => {
  const { navbar } = data;

  return (
    <nav
      style={{
        backgroundColor: "indigo",
        padding: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={navbar.img}
          alt="Navbar Logo"
          style={{ height: "50px", marginRight: "10px" }}
        />
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {navbar.links.map((link, index) => (
            <li key={index} style={{ marginRight: "50px" }}>
              <a href="" style={{ color: "white", textDecoration: "none" }}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
