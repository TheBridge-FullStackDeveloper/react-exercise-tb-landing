import React from "react";

const HeaderInfo = {
  header: {
    title: "Acelera tu carrera digital",
    subheading:
      "En una época de cambios y desarrollo tecnológico, tu formación no puede perder el ritmo.",
    paragraph:
      "Cuando eliges un bootcamp en The Bridge estás dando el paso definitivo hacia una de las profesiones del futuro más demandadas en el presente, ya sea Ciberseguridad, Data Science, Desarrollo de Software, Diseño de Producto UX/UI o Marketing Digital.",
    button: "pide información",
  },
};
function Header() {
  return (
    <div className="flex-header" id="flex-header">
      <div className="header-info" id="header-info">
        <h1>{HeaderInfo.header.title}</h1>
        <h2>{HeaderInfo.header.subheading}</h2>
        <p>{HeaderInfo.header.paragraph}</p>
        <button className="header-button">{HeaderInfo.header.button}</button>
      </div>
      <div className="header-image" id="header-image">
        <img
          src="./src/assets/img/750_x_1040_Imagen_5_9d451882d8.webp"
          alt="A classroom full of people working with their computers"
          className="header-photo"
        ></img>
      </div>
    </div>
  );
}

export default Header;
