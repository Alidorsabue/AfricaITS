import React from 'react';
import { Link } from 'react-router-dom';

const secteurs = [
  {
    name: 'Santé publique & communautaire',
    icon: '🏥',
    description: 'Solutions IT & Data pour améliorer l\'accès aux soins et la gestion des systèmes de santé',
    casUsage: 'Systèmes de gestion de dossiers patients, analyse de données épidémiologiques, plateformes de télémédecine'
  },
  {
    name: 'Humanitaire & ONG',
    icon: '🤝',
    description: 'Outils technologiques pour optimiser l\'impact des interventions humanitaires',
    casUsage: 'Gestion de projets, suivi d\'indicateurs, dashboards de reporting pour bailleurs'
  },
  {
    name: 'Finance & Assurances',
    icon: '💰',
    description: 'Solutions digitales pour moderniser les services financiers',
    casUsage: 'Applications bancaires, systèmes de gestion, analyse de risques, fraud detection'
  },
  {
    name: 'Éducation',
    icon: '🎓',
    description: 'Plateformes et outils pour améliorer l\'accès et la qualité de l\'éducation',
    casUsage: 'LMS (Learning Management Systems), analyse de performance éducative, e-learning'
  },
  {
    name: 'Logistique & Transport',
    icon: '🚚',
    description: 'Optimisation des chaînes logistiques et de transport',
    casUsage: 'Systèmes de tracking, optimisation d\'itinéraires, gestion de flotte'
  },
  {
    name: 'Institutions publiques',
    icon: '🏛️',
    description: 'Modernisation des services publics et amélioration de la gouvernance',
    casUsage: 'E-gouvernement, systèmes de gestion administrative, portails citoyens'
  }
];

function Secteurs() {
  return (
    <main>
      <section className="secteurs-hero">
        <div className="container">
          <h1>Secteurs d'intervention</h1>
          <p className="hero-subtitle">
            Des solutions adaptées aux besoins spécifiques de chaque secteur
          </p>
        </div>
      </section>

      <section className="secteurs-content">
        <div className="container">
          <div className="secteurs-grid">
            {secteurs.map((secteur, index) => (
              <div key={index} className="secteur-detail-card">
                <div className="secteur-icon-large">{secteur.icon}</div>
                <h2>{secteur.name}</h2>
                <p className="secteur-description">{secteur.description}</p>
                <div className="cas-usage">
                  <h3>Cas d'usage :</h3>
                  <p>{secteur.casUsage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secteurs-cta">
        <div className="container">
          <h2>Votre secteur n'est pas listé ?</h2>
          <p>Nous adaptons nos solutions à tous les secteurs d'activité. Contactez-nous pour discuter de vos besoins spécifiques.</p>
          <Link to="/contact" className="btn-primary">Contactez-nous</Link>
        </div>
      </section>
    </main>
  );
}

export default Secteurs;

