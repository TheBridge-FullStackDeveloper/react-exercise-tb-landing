import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">The Bridge 🚀</div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <p className="footer-text">© 2024 The Bridge. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

  