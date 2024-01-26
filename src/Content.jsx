export default function Hero() {
    return (
        <div
        style={{
          display: "flex",
          justifyContent: "center"
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
          <button style={{ backgroundColor: "red", color: "white" }}>
            PIDE INFORMACIÓN
          </button>
        </div>

        <img
          src="public/imagen.fondo.png"
          alt=""
          style={{ alignSelf: "flex-end", maxWidth: "700px", width: "100%" }}
        />
      </div>
    )
}