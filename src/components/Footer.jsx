import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Africa IT Solution</h3>
          <p>Solutions IT & Data pour la transformation digitale en Afrique</p>
        </div>
        <div className="footer-section">
          <h3>Liens rapides</h3>
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/formations">Formations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Informations</h3>
          <ul>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/secteurs">Secteurs</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Africa IT Solution (AITS). Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer; 