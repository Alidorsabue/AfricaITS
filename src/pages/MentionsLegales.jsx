import React from 'react';

function MentionsLegales() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <h1>Mentions légales & Politique</h1>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="legal-section">
            <h2>Mentions légales</h2>
            <div className="legal-info">
              <h3>Éditeur du site</h3>
              <p>
                <strong>Africa IT Solution (AITS)</strong><br />
                République Démocratique du Congo<br />
                Kinshasa<br />
                Email : contact@aits.africa
              </p>
            </div>

            <div className="legal-info">
              <h3>Hébergement</h3>
              <p>
                Informations d'hébergement à compléter
              </p>
            </div>

            <div className="legal-info">
              <h3>Propriété intellectuelle</h3>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, etc.) est la propriété exclusive 
                d'Africa IT Solution (AITS) et est protégé par les lois sur la propriété intellectuelle. 
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
            </div>
          </div>

          <div className="legal-section">
            <h2>Politique de confidentialité</h2>
            <div className="legal-info">
              <h3>Collecte des données</h3>
              <p>
                AITS collecte les données personnelles que vous nous fournissez volontairement via nos formulaires 
                de contact ou lors de l'utilisation de nos services. Ces données peuvent inclure : nom, prénom, 
                adresse email, numéro de téléphone, et autres informations que vous choisissez de partager.
              </p>
            </div>

            <div className="legal-info">
              <h3>Utilisation des données</h3>
              <p>
                Les données collectées sont utilisées pour :
              </p>
              <ul>
                <li>Répondre à vos demandes et questions</li>
                <li>Vous fournir nos services</li>
                <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                <li>Améliorer nos services et notre site web</li>
              </ul>
            </div>

            <div className="legal-info">
              <h3>Protection des données</h3>
              <p>
                AITS s'engage à protéger vos données personnelles et à ne pas les vendre, louer ou partager 
                avec des tiers sans votre consentement, sauf dans les cas prévus par la loi.
              </p>
            </div>

            <div className="legal-info">
              <h3>Vos droits</h3>
              <p>
                Conformément à la réglementation en vigueur, vous disposez des droits suivants concernant 
                vos données personnelles :
              </p>
              <ul>
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à : contact@aits.africa
              </p>
            </div>

            <div className="legal-info">
              <h3>Cookies</h3>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter 
                certaines fonctionnalités du site.
              </p>
            </div>
          </div>

          <div className="legal-section">
            <h2>Conditions d'utilisation</h2>
            <div className="legal-info">
              <h3>Acceptation des conditions</h3>
              <p>
                L'utilisation de ce site implique l'acceptation pleine et entière des présentes conditions d'utilisation.
              </p>
            </div>

            <div className="legal-info">
              <h3>Utilisation du site</h3>
              <p>
                Vous vous engagez à utiliser ce site de manière légale et conforme à sa destination. 
                Il est interdit d'utiliser le site pour des activités illégales ou nuisibles.
              </p>
            </div>

            <div className="legal-info">
              <h3>Limitation de responsabilité</h3>
              <p>
                AITS s'efforce de fournir des informations exactes et à jour, mais ne peut garantir 
                l'exactitude, la complétude ou l'actualité des informations. AITS ne pourra être tenu 
                responsable des dommages résultant de l'utilisation du site.
              </p>
            </div>

            <div className="legal-info">
              <h3>Modifications</h3>
              <p>
                AITS se réserve le droit de modifier ces conditions d'utilisation à tout moment. 
                Les modifications entrent en vigueur dès leur publication sur le site.
              </p>
            </div>
          </div>

          <div className="legal-section">
            <h2>Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, notre politique de confidentialité 
              ou nos conditions d'utilisation, vous pouvez nous contacter à :
            </p>
            <p>
              <strong>Email :</strong> contact@aits.africa<br />
              <strong>Dernière mise à jour :</strong> Janvier 2024
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MentionsLegales;

