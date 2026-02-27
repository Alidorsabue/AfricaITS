import React from 'react';

function About() {
  return (
    <main>
      <section className="about-hero">
        <div className="container">
          <h1>À propos de nous</h1>
          <p className="hero-subtitle">
            Africa Information Technology Solution (AITS) est née de la volonté de combler le fossé technologique entre l’Afrique et le reste du monde, en proposant des solutions IT et Data adaptées aux réalités locales. 
            Basée en RDC, AITS opère au service des ONG, entreprises privées, institutions publiques et startups.
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-card">
            <h2>Notre Mission</h2>
            <p>
              Fournir des solutions technologiques innovantes, accessibles et orientées impact qui répondent 
              aux défis spécifiques du continent africain. Nous accompagnons les entreprises et organisations 
              dans leur transformation digitale avec des solutions sur mesure.
            </p>
          </div>

          <div className="vision-card">
            <h2>Notre Vision</h2>
            <p>
              Devenir le partenaire technologique de référence en Afrique pour les solutions IT & Data, 
              en contribuant activement à la transformation digitale du continent et à l'émergence d'une 
              économie numérique inclusive et durable.
            </p>
          </div>

          <div className="values-card">
            <h2>Nos Valeurs</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Nous restons à la pointe de la technologie pour offrir les meilleures solutions</p>
              </div>
              <div className="value-item">
                <h3>Accessibilité</h3>
                <p>Des solutions performantes à des tarifs adaptés au marché africain</p>
              </div>
              <div className="value-item">
                <h3>Impact</h3>
                <p>Nous privilégions les projets qui créent un impact positif sur les communautés</p>
              </div>
              <div className="value-item">
                <h3>Excellence</h3>
                <p>Un engagement constant pour la qualité et la satisfaction client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <h2>Notre Approche</h2>
          <p className="approach-intro">
            AITS combine trois piliers fondamentaux pour offrir des solutions complètes :
          </p>
          <div className="approach-grid">
            <div className="approach-item">
              <h3>IT</h3>
              <p>Développement de solutions informatiques robustes et scalables</p>
            </div>
            <div className="approach-item">
              <h3>Data</h3>
              <p>Ingénierie et analyse de données pour des décisions éclairées</p>
            </div>
            <div className="approach-item">
              <h3>IA</h3>
              <p>Intelligence artificielle appliquée pour l'innovation et l'efficacité</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rdc-hub">
        <div className="container">
          <h2>Pourquoi la RDC comme hub technologique ?</h2>
          <p>
            La République Démocratique du Congo représente un marché en pleine croissance avec un potentiel 
            énorme pour la transformation digitale. En nous basant en RDC, nous sommes au cœur des défis 
            et des opportunités du continent africain, ce qui nous permet de mieux comprendre les besoins 
            locaux et de proposer des solutions véritablement adaptées.
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Équipe fondatrice</h2>
          <p className="team-intro">
            Notre équipe combine expertise technique internationale et connaissance approfondie du contexte africain.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-placeholder">👤</div>
              <h3>Profil 1</h3>
              <p className="member-role">Fondateur & Directeur Technique</p>
              <p>Expertise en développement logiciel et architecture de systèmes</p>
            </div>
            <div className="team-member">
              <div className="member-placeholder">👤</div>
              <h3>Profil 2</h3>
              <p className="member-role">Co-fondateur & Data Lead</p>
              <p>Spécialiste en Data Engineering et Data Science</p>
            </div>
            <div className="team-member">
              <div className="member-placeholder">👤</div>
              <h3>Profil 3</h3>
              <p className="member-role">Co-fondateur & Business Development</p>
              <p>Expert en stratégie digitale et développement d'affaires en Afrique</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Nos Partenaires</h2>
          <p>
            Nous collaborons avec des organisations et institutions qui partagent notre vision 
            de la transformation digitale en Afrique.
          </p>
          <div className="partners-placeholder">
            <p>Section partenaires à compléter</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
