import React from "react";
import data from "../../../data.json";

import ("./Navbar.css")

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
        <h5>{link0}</h5>
        <h5>{link1}</h5>
        <h5>{link2}</h5>
        <h5>{link3}</h5>
        <h5>{link4}</h5>
      </nav>
    </>
  );
}

export default Navbar;
