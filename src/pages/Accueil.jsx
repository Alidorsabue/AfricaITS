import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoEschoolb from '../assets/eschoolb-logo.png';

const slides = [
  {
    index: 1,
    img: '../assets//code1.jpg',
    alt: 'Code',
    title: 'Développement des logiciels sur mesure',
    text: "Offrez-vous d'une solution informatique pour améliorer les performances et booster votre entreprise vers le plus grand succès.",
    buttonText: 'Nos services',
    buttonLink: '/services'
  },
  {
    index: 2,
    img: '../assets//it1.jpg',
    alt: 'IT',
    title: 'Data Engineering & Analytics',
    text: "Transformez vos données en insights actionnables. Nous construisons des pipelines robustes et des analyses qui éclairent vos décisions stratégiques.",
    buttonText: 'Découvrir',
    buttonLink: '/services'
  },
  {
    index: 3,
    img: '../assets/data1.jpg',
    alt: 'Data',
    title: "Data Science & Intelligence Artificielle",
    text: "L'IA au service de votre croissance. Modèles prédictifs, machine learning et solutions intelligentes adaptées au contexte africain.",
    buttonText: 'En savoir plus',
    buttonLink: '/services'
  },
  {
    index: 4,
    img: '../assets/data1.jpg',
    alt: 'Data',
    title: "Solutions IT & Data pour la transformation digitale",
    text: "Accompagnons les entreprises et organisations africaines dans leur transformation numérique avec des solutions sur mesure et orientées impact.",
    buttonText: 'Contactez-nous',
    buttonLink: '/contact'
  }
];

function Accueil() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const plusSlide = (n) => {
    setCurrent((prev) => (prev + n + total) % total);
  };

  const currentSlide = (n) => {
    setCurrent(n);
  };

  // Défilement automatique de droite à gauche
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000); // Change de slide toutes les 5 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [total]);

  return (
    <main className="accueil-main">
      {/* Section présentation simple */}
      <section className="presentation-section">
        <div className="container">
          <h2>Bienvenue chez Africa IT Solution</h2>
          <p className="presentation-text">
            Africa Information Technology Solution (AITS) est une entreprise technologique basée en République Démocratique du Congo,
            spécialisée dans le développement de solutions informatiques, l'ingénierie des données, l'analyse des données, la data science, 
            l'intelligence artificielle et l'annotation des données.
            <br />
            Nous accompagnons les organisations africaines et internationales 
            dans leur transformation digitale grâce à des solutions fiables, innovantes et orientées impact.
            <br />
            Notre promesse : transformer vos données en décisions, et vos idées en solutions numériques performantes.
          </p>
          <div className="presentation-buttons">
            <Link to="/services" className="btn-primary">Nos services</Link>
            <Link to="/contact" className="btn-secondary">Demander un devis</Link>
          </div>
        </div>
      </section>

      {/* Hero Section avec Slider */}
      <section id="main-image" className="hero-slider">
        <div className="Slide-contener">
          <div className="overlaye fade">
            <img className="slide-img" src={slides[current].img} alt={slides[current].alt} />
            <div className="slide-overlay"></div>
            <div className="slideTexte">
              <h1 className="hero-title">{slides[current].title}</h1>
              <p className="hero-text">{slides[current].text}</p>
              <Link to={slides[current].buttonLink} className="btn-slide">
                {slides[current].buttonText}
              </Link>
            </div>
          </div>
          <button className="prev" onClick={() => plusSlide(-1)} aria-label="Slide précédent">
            ‹
          </button>
          <button className="next" onClick={() => plusSlide(1)} aria-label="Slide suivant">
            ›
          </button>
        </div>
        <div className="slide-dot">
          {slides.map((slide, idx) => (
            <span
              key={idx}
              className={"dot" + (idx === current ? " active" : "")}
              onClick={() => currentSlide(idx)}
              aria-label={`Aller au slide ${idx + 1}`}
            ></span>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Besoin d'un devis personnalisé ?</h2>
          <p>Contactez-nous pour discuter de votre projet et obtenir une estimation adaptée à vos besoins.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Demander un devis</Link>
            <Link to="/formations" className="btn-secondary">Découvrir nos formations</Link>
          </div>
        </div>
      </section>

      {/* Section Nos Partenaires */}
      <section className="partners-section">
        <div className="container">
          <h2>Nos Partenaires</h2>
          <p className="partners-intro">
            Nous collaborons avec des organisations et institutions qui partagent notre vision 
            de la transformation digitale en Afrique.
          </p>
          <div className="partners-grid partners-grid--single">
            <div className="partner-item">
              <div className="partner-logo-placeholder">
                <img
                  src={logoEschoolb}
                  alt="E-SchoolB - Digitalisons les écoles"
                  className="partner-logo-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accueil;
