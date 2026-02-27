import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  return (
    <nav className="navbar">
      <button className="burger" onClick={handleToggle} aria-label="Ouvrir le menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={open ? 'open' : ''}>
        <li><Link to="/" onClick={handleClose}>Accueil</Link></li>
        <li><Link to="/services" onClick={handleClose}>Services</Link></li>
        <li><Link to="/about" onClick={handleClose}>À propos</Link></li>
        <li><Link to="/portfolio" onClick={handleClose}>Portfolio</Link></li>
        <li><Link to="/secteurs" onClick={handleClose}>Secteurs</Link></li>
        <li><Link to="/formations" onClick={handleClose}>Formations</Link></li>
        <li><Link to="/blog" onClick={handleClose}>Blog</Link></li>
        <li><Link to="/contact" onClick={handleClose}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 