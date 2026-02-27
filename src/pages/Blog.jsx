import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'La transformation digitale en Afrique : défis et opportunités',
    category: 'Data & IA en Afrique',
    date: '2024-01-15',
    excerpt: 'Analyse des enjeux de la transformation digitale sur le continent africain...'
  },
  {
    title: 'Comment démarrer avec Power BI : Guide pratique',
    category: 'Bonnes pratiques IT',
    date: '2024-01-10',
    excerpt: 'Un guide complet pour créer vos premiers dashboards avec Power BI...'
  },
  {
    title: 'Machine Learning pour les entreprises africaines',
    category: 'Data Science',
    date: '2024-01-05',
    excerpt: 'Comment les entreprises africaines peuvent tirer parti du machine learning...'
  }
];

const ressources = [
  {
    type: 'Livre blanc',
    title: 'Guide complet de la Data Analysis',
    format: 'PDF',
    description: 'Un guide approfondi sur les techniques et outils d\'analyse de données'
  },
  {
    type: 'Étude de cas',
    title: 'Cas d\'usage : Optimisation logistique avec IA',
    format: 'PDF',
    description: 'Retour d\'expérience sur un projet d\'optimisation logistique'
  }
];

function Blog() {
  return (
    <main>
      <section className="blog-hero">
        <div className="container">
          <h1>Blog & Ressources</h1>
          <p className="hero-subtitle">
            Articles, études de cas et ressources pour approfondir vos connaissances en IT, Data et IA
          </p>
        </div>
      </section>

      <section className="blog-articles">
        <div className="container">
          <h2>Articles récents</h2>
          <div className="articles-grid">
            {articles.map((article, index) => (
              <article key={index} className="article-card">
                <div className="article-category">{article.category}</div>
                <h3>{article.title}</h3>
                <div className="article-meta">
                  <span className="article-date">{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <p className="article-excerpt">{article.excerpt}</p>
                <Link to="/blog" className="article-link">Lire la suite →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ressources-section">
        <div className="container">
          <h2>Ressources téléchargeables</h2>
          <div className="ressources-grid">
            {ressources.map((ressource, index) => (
              <div key={index} className="ressource-card">
                <div className="ressource-type">{ressource.type}</div>
                <h3>{ressource.title}</h3>
                <p>{ressource.description}</p>
                <div className="ressource-format">{ressource.format}</div>
                <Link to="/blog" className="btn-secondary">Télécharger</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-cta">
        <div className="container">
          <h2>Restez informé</h2>
          <p>Abonnez-vous à notre newsletter pour recevoir nos derniers articles et ressources.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre adresse email" className="newsletter-input" />
            <button type="submit" className="btn-primary">S'abonner</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Blog;

