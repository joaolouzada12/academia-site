import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logo from "../components/img/logo1.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Academia Fit Logo" />
      </div>

      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>Sobre</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contato</Link></li>
          <li><Link to="/modalities" onClick={toggleMenu}>Modalidades</Link></li>
        </ul>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
