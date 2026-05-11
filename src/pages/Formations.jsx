import React from 'react';
import { Link } from 'react-router-dom';

const formations = [
  {
    title: 'Formation Data Analysis',
    icon: '📊',
    description: 'Maîtrisez les outils et techniques d\'analyse de données',
    modules: [
      'Power BI : Création de dashboards interactifs',
      'Excel avancé : Analyse et modélisation de données',
      'Python pour l\'analyse : Pandas, NumPy, Matplotlib',
      'Statistiques descriptives et exploratoires',
      'Reporting automatisé et visualisation'
    ],
    duree: '40 heures',
    niveau: 'Débutant à Intermédiaire'
  },
  {
    title: 'Formation Data Engineering',
    icon: '⚙️',
    description: 'Construisez des pipelines de données robustes',
    modules: [
      'Architecture de données et Data Warehouse',
      'Pipelines ETL avec Python et SQL',
      'Gestion de bases de données (PostgreSQL, MongoDB)',
      'Automatisation et orchestration',
      'Bonnes pratiques et optimisation'
    ],
    duree: '50 heures',
    niveau: 'Intermédiaire à Avancé'
  },
  {
    title: 'Formation IA appliquée',
    icon: '🤖',
    description: 'Développez des solutions d\'intelligence artificielle',
    modules: [
      'Introduction au Machine Learning',
      'Modèles prédictifs avec Scikit-learn',
      'Deep Learning avec TensorFlow/Keras',
      'NLP (Natural Language Processing)',
      'Déploiement de modèles en production'
    ],
    duree: '60 heures',
    niveau: 'Intermédiaire à Avancé'
  },
  {
    title: 'Formation Développement logiciel',
    icon: '💻',
    description: 'Créez des applications web et mobiles modernes',
    modules: [
      'Développement web (React, Node.js)',
      'Développement mobile (React Native)',
      'APIs REST et GraphQL',
      'Bases de données et ORM',
      'Déploiement et DevOps de base'
    ],
    duree: '70 heures',
    niveau: 'Débutant à Intermédiaire'
  }
];

function Formations() {
  return (
    <main>
      <section className="formations-hero">
        <div className="container">
          <h1>Formations & Renforcement des capacités</h1>
          <p className="hero-subtitle">
            Développez vos compétences en IT, Data et IA avec nos formations pratiques
          </p>
        </div>
      </section>

      <section className="formation-tally-banner" aria-labelledby="formation-ia-banner-title">
        <div className="container">
          <div className="formation-tally-banner-inner">
            <div>
              <p className="formation-tally-banner-badge">Inscriptions ouvertes</p>
              <h2 id="formation-ia-banner-title" className="formation-tally-banner-title">
                Formation IA générative et prompt engineering
              </h2>
              <p className="formation-tally-banner-text">
                Réservez votre place via notre formulaire en ligne (quelques minutes).
              </p>
            </div>
            <Link
              to="/formations/inscription-ia-generative"
              className="btn-primary formation-tally-banner-cta"
            >
              S&apos;inscrire à la formation
            </Link>
          </div>
        </div>
      </section>

      <section className="formations-content">
        <div className="container">
          <div className="formations-grid">
            {formations.map((formation, index) => (
              <div key={index} className="formation-card">
                <div className="formation-header">
                  <div className="formation-icon">{formation.icon}</div>
                  <div>
                    <h2>{formation.title}</h2>
                    <p className="formation-description">{formation.description}</p>
                  </div>
                </div>
                <div className="formation-info">
                  <div className="info-item">
                    <strong>Durée :</strong> {formation.duree}
                  </div>
                  <div className="info-item">
                    <strong>Niveau :</strong> {formation.niveau}
                  </div>
                </div>
                <div className="formation-modules">
                  <h3>Modules de formation :</h3>
                  <ul>
                    {formation.modules.map((module, modIndex) => (
                      <li key={modIndex}>{module}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certification-section">
        <div className="container">
          <h2>Certification AITS</h2>
          <p>
            À l'issue de chaque formation, les participants reçoivent une certification AITS attestant 
            de leurs compétences acquises. Nos certifications sont reconnues dans le secteur et valorisent 
            votre profil professionnel.
          </p>
          <div className="certification-benefits">
            <div className="benefit-item">
              <h3>✓ Certification reconnue</h3>
              <p>Valorisez votre CV avec une certification professionnelle</p>
            </div>
            <div className="benefit-item">
              <h3>✓ Support post-formation</h3>
              <p>Accès à une communauté et ressources complémentaires</p>
            </div>
            <div className="benefit-item">
              <h3>✓ Approche pratique</h3>
              <p>Formations basées sur des cas réels et projets concrets</p>
            </div>
          </div>
        </div>
      </section>

      <section className="formations-cta">
        <div className="container">
          <h2>Intéressé par une formation ?</h2>
          <p>Contactez-nous pour connaître les dates des prochaines sessions et les modalités d'inscription.</p>
          <Link to="/contact" className="btn-primary">Demander des informations</Link>
        </div>
      </section>
    </main>
  );
}

export default Formations;

