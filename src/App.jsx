import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Secteurs from './pages/Secteurs';
import Formations from './pages/Formations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('aits-theme') || 'light';
  });

  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
    localStorage.setItem('aits-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/secteurs" element={<Secteurs />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
