export default function NavBar() {
    return (
        <nav
        style={{
          backgroundColor: "purple",
          padding: "5px",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <img src="public/logo.png" alt="" style={{ width: "200px" }} />
          <li>The Bridge</li>
          <li>Cursos</li>
          <li>Dónde estudiar</li>
          <li>Financiación y becas</li>
          <li>Empresas e instituciones</li>
          <li>Sobre nosotros</li>
        </ul>
      </nav>
    )
}