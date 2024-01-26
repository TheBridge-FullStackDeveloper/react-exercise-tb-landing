import React from "react";
import data from "../../../data.json";

import("./Header.css");

const header = data.header;

function Header() {
  return (
    <div className="header">

      <div className="mainHeader">
        <div className="textHeader">
          <h2>{header.title}</h2>
          <h3>{header.subheading}</h3>
          <p>{header.paragraph}</p>
          <h6 id="footerHeader">{header.button}</h6>
        </div>

        <img src="../public/img1.png" className="imgHeader" alt="" />
        

      </div>

    </div>
  );
}

export default Header;
