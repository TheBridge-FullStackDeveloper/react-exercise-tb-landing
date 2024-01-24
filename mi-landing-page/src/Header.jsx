import React from "react";
import data from "../../data.json";

const header = data.header;

function Header() {
  return (
    <>
      <div>
        <div>
          <h2>{header.title}</h2>
          <h3>{header.subheading}</h3>
          <p>{header.paragraph}</p>
        </div>
        <img src="../public/img1.png" alt="" />
      </div>
      <footer>{header.button}</footer>
    </>
  );
}

export default Header;
