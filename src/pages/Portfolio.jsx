import React from 'react';
import { Link } from 'react-router-dom';

const projetsCategories = [
  {
    category: 'Projets IT - Applications Mobiles',
    description: 'Solutions mobiles innovantes pour la collecte de données et la gestion',
    projets: [
      {
        title: 'Application mobile de collecte des données GPS et tracking automobile',
        description: 'Solution mobile complète pour la collecte de données géolocalisées et le suivi en temps réel de véhicules. Permet la collecte précise de données GPS et le tracking automobile pour optimiser les déplacements et la logistique.',
        technologies: ['React Native', 'GPS', 'API REST', 'Base de données']
      },
      {
        title: 'Application mobile d\'enregistrement de prestataires',
        description: 'Application mobile complète pour l\'enregistrement de prestataires, la validation des présences et le suivi des rapports d\'approbation et de paiement. Solution intégrée pour la gestion des ressources humaines sur le terrain.',
        technologies: ['React Native', 'Backend API', 'Gestion de documents', 'Système de validation']
      }
    ]
  },
  {
    category: 'Projets IT - Plateformes Web',
    description: 'Plateformes digitales pour la gestion et les paiements',
    projets: [
      {
        title: 'Plateforme de paiement numérique des prestataires',
        description: 'Plateforme digitale complète pour le paiement des prestataires dans les activités communautaires, notamment les campagnes de vaccination. Système sécurisé de gestion des paiements et de suivi des transactions.',
        technologies: ['React', 'Node.js', 'API de paiement', 'Sécurité', 'Base de données']
      },
      {
        title: 'E‑School – Plateforme de gestion scolaire',
        description: 'Plateforme web de gestion scolaire complète destinée aux écoles et instituts africains. Elle centralise la gestion des élèves, enseignants, classes, notes, présences et communications avec les parents afin de réduire la charge administrative et d’améliorer le suivi pédagogique.',
        technologies: ['Django', 'Django REST', 'Base de données relationnelle', 'Frontend web', 'Déploiement cloud']
      }
    ]
  },
  {
    category: 'Projets Data Science & IA',
    description: 'Solutions intelligentes basées sur l\'intelligence artificielle et le machine learning',
    projets: [
      {
        title: 'Système Intelligent de détection des embouteillages',
        description: 'Système intelligent utilisant l\'IA et le machine learning pour détecter et prédire les embouteillages dans les villes de Kinshasa et Lubumbashi. Analyse en temps réel des données de trafic pour optimiser la circulation urbaine.',
        technologies: ['Machine Learning', 'Python', 'Analyse de données', 'IA', 'Traitement d\'images', 'API temps réel']
      },
      {
        title: 'AfricaHire+ – Plateforme ATS de recrutement intelligente',
        description: 'Plateforme ATS (Applicant Tracking System) dédiée au marché africain, intégrant un module de Machine Learning pour automatiser le screening et le shortlisting des candidats, ainsi que la passation de tests techniques en ligne. Elle permet aux équipes RH de centraliser les offres d’emploi, les candidatures et le suivi complet du processus de recrutement.',
        technologies: ['API backend', 'Machine Learning', 'Scoring de CV', 'Interface web', 'Intégration outils RH']
      }
    ]
  }
];

function Portfolio() {
  return (
    <main>
      <section className="portfolio-hero">
        <div className="container">
          <h1>Projets & Portfolio</h1>
          <p className="hero-subtitle">
            Découvrez nos réalisations et notre expertise à travers nos projets concrets
          </p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          {projetsCategories.map((categorie, catIndex) => (
            <div key={catIndex} className="portfolio-category">
              <h2>{categorie.category}</h2>
              <p className="category-description">{categorie.description}</p>
              <div className="projets-grid">
                {categorie.projets.map((projet, projIndex) => (
                  <div key={projIndex} className="projet-card">
                    <h3>{projet.title}</h3>
                    <p>{projet.description}</p>
                    <div className="technologies">
                      {projet.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="container">
          <h2>Vous avez un projet en tête ?</h2>
          <p>Discutons de votre projet et découvrons comment nous pouvons vous accompagner avec notre expertise.</p>
          <Link to="/contact" className="btn-primary">Contactez-nous</Link>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
