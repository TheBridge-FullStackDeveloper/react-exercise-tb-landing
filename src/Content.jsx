import React from "react";
import data from "../data.json";

const Hero = () => {
  const { header } = data;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          border: "2px solid black",
          fontSize: "1.5em",
          padding: "50px",
        }}
      >
        <h2>{header.title}</h2>
        <p>
          <b>{header.subheading}</b>
        </p>
        <p>{header.paragraph}</p>
        <button style={{ backgroundColor: "red", color: "white" }}>
          {header.button}
        </button>
      </div>

      <img
        src="public/imagen.fondo.png"
        alt=""
        style={{ alignSelf: "flex-end", maxWidth: "700px", width: "100%" }}
      />
    </div>
  );
};

export default Hero;
