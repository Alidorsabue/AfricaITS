import React from 'react';
import Navbar from './Navbar';
import logoAITS from '../assets/logo_aits.png';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logoAITS} alt="Logo AITS" className="logo-aits" />
        <h1 className="site-title">Africa IT Solution<span className="orange">.</span></h1>
      </div>
      <div className="header-right">
        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle-btn"
          aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
        >
          {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
        </button>
        <Navbar />
      </div>
    </header>
  );
}

export default Header; 