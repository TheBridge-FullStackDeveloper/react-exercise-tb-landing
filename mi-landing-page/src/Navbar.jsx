import "./navbar.css";
import TheBridgeLogo from "./TheBridgeLogo";

function Navbar() {
  return (
    <nav className="navBar">
      <TheBridgeLogo />
      <li className="listItem">Cursos</li>
      <li className="listItem">Dónde estudiar</li>
      <li className="listItem">Financiacion y becas</li>
      <li className="listItem">Empresas e instrucciones</li>
      <li className="listItem">Sobre nosotros</li>
    </nav>
  );
}

export default Navbar;
