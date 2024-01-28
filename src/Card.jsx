import React from "react";
import { Card as CardAnt } from "antd";

export default function Card({ text, description, img, hours, format }) {
  return (
    <CardAnt
      style={{
        width: "200px",
        border: "2px solid black",
        padding: "20px",
        margin: "10px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h5>{text}</h5>
      <div style={{ position: "absolute", top: "0", right: "0" }}>
        <img src={img} alt={text} style={{ width: "65px", height: "65px" }} />
      </div>
      <div style={{ fontSize: "6px", display: "flex" }}>
        <div
          style={{ borderRadius: "5px", padding: "5px", background: "black" }}
        >
          <p style={{ margin: "0", color: "white" }}>🕒{hours}</p>
        </div>
        <div
          style={{
            borderRadius: "5px",
            padding: "5px",
            background: "black",
            marginLeft: "10px",
          }}
        >
          <p style={{ margin: "0", color: "white" }}>📍{format}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href="" style={{ textDecoration: "none", color: "red" }}>
        <b>+INFO</b>
      </a>
    </CardAnt>
  );
}
