import React from 'react';
import '../styles/header.css';

function Header({ title, subheading, paragraph }) {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subheading}</h2>
      <p>{paragraph}</p>
    </header>
  );
}

export default Header;
