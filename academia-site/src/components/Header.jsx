import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Academia Fit</h1>
        <p>Transforme seu corpo e sua mente</p>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/modalities">Modalidades</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
