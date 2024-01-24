import React from "react";
import data from "../../data.json";

const img = data.navbar.img;

const link0 = data.navbar.links[0];
const link1 = data.navbar.links[1];
const link2 = data.navbar.links[2];
const link3 = data.navbar.links[3];
const link4 = data.navbar.links[4];

function Navbar() {
  return (
    <>
      <nav>
        <img src={img} alt="" />
        <h4>{link0}</h4>
        <h4>{link1}</h4>
        <h4>{link2}</h4>
        <h4>{link3}</h4>
        <h4>{link4}</h4>
      </nav>
    </>
  );
}

export default Navbar;
