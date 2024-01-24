import "./header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="headerInfo">
          <h1>Acelera tu carrera digital</h1>
          <h2>
            En una época de cambios y desarrollo tecnológico, tu formación no
            puede perder el ritmo.
          </h2>
          <p>
            Cuando eliges un bootcamp en The Bridge estás dando el paso
            definitivo hacia una de las profesiones del futuro más demandadas en
            el presente, ya sea Ciberseguridad, Data Science, Desarrollo de
            Software, Diseño de Producto UX/UI o Marketing Digital.
          </p>
          <button>PIDE INFORMACIÓN</button>
        </div>
        <div className="headerImage">
          <img src="https://www.pocketprep.com/wp-content/uploads/2021/03/Do-I-need-a-study-group_post-image-inline.jpg" />
        </div>
      </div>
    </>
  );
}

export default Header;
