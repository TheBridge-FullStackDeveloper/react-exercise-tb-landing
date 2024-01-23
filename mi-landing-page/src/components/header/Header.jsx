// src/components/Header/Header.jsx
import React from 'react';
//import logo from '../../assets/thebridge.jpg'; // Asegúrate de que la ruta es correcta
import './Header.css';
import navbarData from '../../data.json';




function Header() {
  // Utiliza los datos importados para la imagen y los enlaces
  const { img, links } = navbarData.navbar;

  return (
    <nav className="navbar">
      {/* Utiliza la imagen del JSON */}
      <img src={img} alt="The Bridge Logo" className="navbar-logo" />
      <ul className="menu">
        {/* Mapea los enlaces del JSON */}
        {links.map((item, index) => (
          <li key={index} className="menu-item">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
