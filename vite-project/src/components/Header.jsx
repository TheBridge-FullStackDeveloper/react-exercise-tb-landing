import React from 'react';
import '../styles/header.css';
import data from '../data/data.json';

function Header() {
  const { title, subheading, paragraph } = data.header;
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subheading}</h2>
      <p>{paragraph}</p>
    </header>
  );
}

export default Header;
