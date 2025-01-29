import '../styles/header.css';

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">The Bridge 🚀</div>
      <nav>
        <ul>
          <li><a href="#">Cursos</a></li>
          <li><a href="#">Dónde estudiar</a></li>
          <li><a href="#">Financiación</a></li>
          <li><a href="#">Empresas</a></li>
          <li><a href="#">Sobre nosotros</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


  