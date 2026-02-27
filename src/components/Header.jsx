import React from 'react';
import Navbar from './Navbar';
import logoAITS from '../assets/logo_aits.png';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logoAITS} alt="Logo AITS" className="logo-aits" />
        <h1 className="site-title">Africa IT Solution<span className="orange">.</span></h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header; 