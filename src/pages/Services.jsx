import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Développement de solutions informatiques',
    icon: '💻',
    description: 'Solutions sur mesure pour répondre à vos besoins spécifiques',
    details: [
      'Applications web modernes et responsives',
      'Applications mobiles (iOS & Android)',
      'APIs & systèmes d\'information',
      'Maintenance & support technique',
      'Intégration de systèmes existants'
    ]
  },
  {
    id: 2,
    title: 'Data Engineering',
    icon: '⚙️',
    description: 'Construisez des pipelines de données robustes et automatisés',
    details: [
      'Pipelines ETL (Extract, Transform, Load)',
      'Bases de données & Data Warehouse',
      'Migration Excel → Base de données',
      'Automatisation des flux de données',
      'Architecture de données scalable'
    ]
  },
  {
    id: 3,
    title: 'Data Analysis',
    icon: 'chart',
    description: 'Transformez vos données en insights actionnables',
    details: [
      'Nettoyage & qualité des données',
      'Analyse descriptive & exploratoire',
      'Reporting automatisé',
      'Dashboards Power BI / Tableau',
      'Analyses sectorielles (santé, finance, ONG)'
    ]
  },
  {
    id: 4,
    title: 'Data Science & Intelligence Artificielle',
    icon: '🤖',
    description: 'L\'IA au service de votre croissance et de vos décisions',
    details: [
      'Modèles prédictifs',
      'Machine Learning appliqué',
      'Détection d\'anomalies',
      'Optimisation & prévisions',
      'Solutions IA adaptées au contexte africain'
    ]
  },
  {
    id: 5,
    title: 'Data Annotation & Labeling',
    icon: '🏷️',
    description: 'Préparez vos données pour l\'entraînement de modèles IA',
    details: [
      'Annotation d\'images',
      'Transcription audio',
      'Labeling NLP (Natural Language Processing)',
      'Contrôle qualité (QA)',
      'Datasets structurés pour ML'
    ]
  },
  {
    id: 6,
    title: 'Formations & Renforcement des capacités',
    icon: '🎓',
    description: 'Développez vos compétences en IT, Data et IA avec nos formations pratiques',
    details: [
      'Formation Data Analysis (Power BI, Excel, Python)',
      'Formation Data Engineering',
      'Formation IA appliquée (Machine Learning, Deep Learning)',
      'Formation Développement logiciel (React, Node.js, Mobile)',
      'Certification AITS reconnue'
    ]
  }
];

function Services() {
  return (
    <main>
      <section className="services-hero">
        <div className="container">
          <h1>Nos Services</h1>
          <p className="hero-subtitle">
            Des solutions IT & Data complètes pour accompagner votre transformation digitale
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service) => (
            <div key={service.id} className="service-detail-card">
              <div className="service-header">
                <div className="service-icon">
                  {service.icon === 'chart' ? (
                    <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 3v18h18" />
                      <path d="M7 16v-5M12 16v-8M17 16v-2" />
                    </svg>
                  ) : (
                    service.icon
                  )}
                </div>
                <div>
                  <h2>{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
              <div className="service-details">
                <h3>Nos prestations :</h3>
                <ul>
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
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
    </main>
  );
}

export default Services;
