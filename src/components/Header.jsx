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
          title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
        >
          {theme === 'dark' ? (
            <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <Navbar />
      </div>
    </header>
  );
}

export default Header; 