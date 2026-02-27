import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    index: 1,
    img: 'images/code1.jpg',
    alt: 'Code',
    title: 'Développement des logiciels sur mesure',
    text: "Offrez-vous d'une solution informatique pour améliorer les performances et booster votre entreprise vers le plus grand succès.",
    buttonText: 'Nos services',
    buttonLink: '/services'
  },
  {
    index: 2,
    img: 'images/it1.jpg',
    alt: 'IT',
    title: 'Data Engineering & Analytics',
    text: "Transformez vos données en insights actionnables. Nous construisons des pipelines robustes et des analyses qui éclairent vos décisions stratégiques.",
    buttonText: 'Découvrir',
    buttonLink: '/services'
  },
  {
    index: 3,
    img: 'images/data1.jpg',
    alt: 'Data',
    title: "Data Science & Intelligence Artificielle",
    text: "L'IA au service de votre croissance. Modèles prédictifs, machine learning et solutions intelligentes adaptées au contexte africain.",
    buttonText: 'En savoir plus',
    buttonLink: '/services'
  },
  {
    index: 4,
    img: 'images/data1.jpg',
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
              <div className="slide-index">{current + 1} / {total}</div>
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

      {/* Section Projets Réalisés */}
      <section className="projects-section">
        <div className="container">
          <h2>Quelques projets que nous avons réalisés</h2>
          <p className="projects-intro">
            Nous concevons et déployons des solutions complètes, de la phase d&apos;idée à la mise en production,
            en combinant développement logiciel, data engineering et intelligence artificielle.
          </p>
          <div className="projects-grid">
            <article className="project-card">
              <h3>E‑School – Plateforme de gestion scolaire</h3>
              <p>
                E‑School est une plateforme web de gestion scolaire complète, conçue pour les écoles et instituts africains.
                Elle centralise la gestion des élèves, enseignants, classes, notes, présences et communications avec les parents,
                afin de réduire la charge administrative et améliorer le suivi pédagogique.
              </p>
              <ul className="project-features">
                <li>Gestion des inscriptions, dossiers élèves et historiques scolaires.</li>
                <li>Saisie et génération automatisée des bulletins, relevés et états statistiques.</li>
                <li>Suivi des présences et discipline avec tableaux de bord en temps réel.</li>
                <li>Accès sécurisé pour administration, enseignants, parents et élèves.</li>
              </ul>
              <p className="project-tech">
                <strong>Technologies :</strong> Backend Django / Django REST, base de données relationnelle,
                frontend web moderne, déploiement cloud.
              </p>
            </article>

            <article className="project-card">
              <h3>AfricaHire+ – Plateforme ATS de recrutement intelligente</h3>
              <p>
                AfricaHire+ est une plateforme ATS (Applicant Tracking System) dédiée au marché africain,
                intégrant un module de Machine Learning pour automatiser le screening et le shortlisting des candidats,
                ainsi que l&apos;organisation de tests techniques en ligne.
              </p>
              <ul className="project-features">
                <li>Centralisation des offres d&apos;emploi, candidatures et étapes du processus de recrutement.</li>
                <li>Modèle de scoring intelligent pour classer les CV en fonction des compétences et de l&apos;expérience.</li>
                <li>Organisation et correction automatisée des tests techniques en ligne.</li>
                <li>Tableaux de bord RH pour le suivi des indicateurs de recrutement (temps de recrutement, qualité des profils, etc.).</li>
              </ul>
              <p className="project-tech">
                <strong>Technologies :</strong> API backend, modèles de Machine Learning pour le screening des CV,
                interface web réactive, intégration avec des outils RH et messagerie.
              </p>
            </article>
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
          <div className="partners-grid">
            <div className="partner-item">
              <div className="partner-logo-placeholder">
                <span>Logo Partenaire 1</span>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-logo-placeholder">
                <span>Logo Partenaire 2</span>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-logo-placeholder">
                <span>Logo Partenaire 3</span>
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-logo-placeholder">
                <span>Logo Partenaire 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accueil;
