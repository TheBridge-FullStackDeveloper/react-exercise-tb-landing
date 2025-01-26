import React from 'react';
import '../styles/navbar.css';
import data from '../data/data.json';

function Navbar() {
  return (
    <nav>
      {data.navbar.links.map((link, index) => (
        <a key={index} href={`#${link.replace(/ /g, '').toLowerCase()}`}>{link}</a>
      ))}
    </nav>
  );
}



export default Navbar;
