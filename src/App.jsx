function App() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "purple",
          padding: "0px 10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle:"none",
            justifyContent: "space-around",
            color: "white",
          }}
        >
          <img src="public/logo.png" alt="" style={{ width: "150px" }} />
          <li>The Bridge</li>
          <li>Cursos</li>
          <li>Dónde estudiar</li>
          <li>Financiación y becas</li>
          <li>Empresas e instituciones</li>
          <li>Sobre nosotros</li>
        </ul>
      </nav>
      <div
        style={{
          display: "flex",
        }}
      >
<div style={{
  textAlign: "center",
}}>
    <h2>Acelera tu carrera digital</h2>
    <p>
      <b>
        En una época de cambios y desarrollo tecnológico, tu formación no
        puede perder el ritmo.
      </b>
    </p>
    <p>
      Cuando eliges un bootcamp en The Bridge estás dando el paso
      definitivo hacia una de las profesiones del futuro más demandadas en
      el presente, ya sea Ciberseguridad, Data Science, Desarrollo de
      Software, Diseño de Producto UX/UI o Marketing Digital.
    </p>
    <button>PIDE INFORMACIÓN</button>
</div>

        <img
          src="public/imagen.fondo.png"
          alt=""
          style={{ alignSelf: "flex-end" }}
        />
      </div>

      <div>
        <div>Ciberseguridad</div>
        <div>Data Science</div>
        <div>Desarrollo Web Full Stack</div>
        <div>Digital Marketing OPS</div>
        <div>UX/UI Product Design</div>
      </div>
    </>
  );
}

export default App;
