import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Secteurs from './pages/Secteurs';
import Formations from './pages/Formations';
import InscriptionFormationIAGenerative from './pages/InscriptionFormationIAGenerative';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import './App.css';

const INSCRIPTION_IA_GENERATIVE_PATH = '/formations/inscription-ia-generative';

function AppLayout({ theme, toggleTheme }) {
  const location = useLocation();
  const chromeInactive = location.pathname === INSCRIPTION_IA_GENERATIVE_PATH;

  useEffect(() => {
    if (!chromeInactive) {
      document.body.classList.remove('app-form-focus-active');
      return undefined;
    }
    document.body.classList.add('app-form-focus-active');
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.classList.remove('app-form-focus-active');
      document.body.style.overflow = previousOverflow;
    };
  }, [chromeInactive]);

  return (
    <>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        chromeInactive={chromeInactive}
      />
      <div
        className={
          chromeInactive ? 'content content--form-focus-island' : 'content'
        }
      >
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/secteurs" element={<Secteurs />} />
          <Route path="/formations" element={<Formations />} />
          <Route
            path={INSCRIPTION_IA_GENERATIVE_PATH}
            element={<InscriptionFormationIAGenerative />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </div>
      <Footer chromeInactive={chromeInactive} />
      {chromeInactive && (
        <div
          className="app-form-focus-overlay"
          aria-hidden="true"
        />
      )}
    </>
  );
}

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
      <AppLayout theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}

export default App;
