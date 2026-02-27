import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Configuration EmailJS
// IMPORTANT: Vous devez créer un compte sur https://www.emailjs.com/
// et remplacer ces valeurs par vos propres clés
const EMAILJS_SERVICE_ID = 'service_283p0uc'; // Remplacez par votre Service ID
const EMAILJS_TEMPLATE_ID = 'template_80n3wmu'; // Remplacez par votre Template ID
const EMAILJS_PUBLIC_KEY = '4f6dlznai5iXuaGah'; // Remplacez par votre Public Key

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' ou 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Réinitialiser le statut si l'utilisateur modifie le formulaire
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Vérifier si EmailJS est configuré
    if (EMAILJS_SERVICE_ID === 'service_283p0uc' || 
        EMAILJS_TEMPLATE_ID === 'template_80n3wmu' || 
        EMAILJS_PUBLIC_KEY === '4f6dlznai5iXuaGah') {
      // EmailJS n'est pas encore configuré, utiliser mailto: comme solution temporaire
      const subject = encodeURIComponent(`Contact AITS - ${formData.subject}`);
      const body = encodeURIComponent(
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Téléphone: ${formData.phone || 'Non renseigné'}\n` +
        `Sujet: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );
      const mailtoLink = `mailto:alidorsabue@africaits.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setSubmitStatus('success');
      alert('Votre client email va s\'ouvrir. Veuillez envoyer le message depuis votre application email.\n\nNote: Pour activer l\'envoi automatique, configurez EmailJS (voir EMAILJS_SETUP.md)');
      return;
    }
    
    try {
      // Préparer les paramètres pour EmailJS
      // IMPORTANT: L'adresse du destinataire (To Email) doit être configurée dans le template EmailJS
      // Allez sur https://dashboard.emailjs.com/admin/template et configurez:
      // - To Email: alidorsabue@africaits.com (ou utilisez {{to_email}} si vous voulez le passer en paramètre)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email, // Email pour répondre
        phone: formData.phone || 'Non renseigné',
        subject: formData.subject,
        message: formData.message,
        to_email: 'alidorsabue@africaits.com' // Utilisé si le template utilise {{to_email}}
      };

      // Envoyer l'email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Succès
      setSubmitStatus('success');
      alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // Erreur
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      
      // Message d'erreur plus détaillé
      let errorMessage = 'Une erreur est survenue lors de l\'envoi de votre message.';
      if (error.text) {
        errorMessage += `\n\nDétails: ${error.text}`;
      }
      errorMessage += '\n\nVeuillez réessayer ou nous contacter directement par email à alidorsabue@africaits.com';
      
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="contact-hero">
        <div className="container">
          <h1>Nous contacter</h1>
          <p className="hero-subtitle">
            Une question ? Un projet ? Contactez-nous et nous vous répondrons rapidement.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Envoyez-nous un message</h2>
                <p className="form-subtitle">Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.</p>
                {submitStatus === 'success' && (
                  <div className="form-message success-message">
                    ✓ Message envoyé avec succès ! Nous vous répondrons bientôt.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-message error-message">
                    ✗ Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.
                  </div>
                )}
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Nom complet <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alidorsabue@africaits.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+243 835 561 737"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Sujet <span className="required">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="service">Information sur nos services</option>
                      <option value="formation">Information sur les formations</option>
                      <option value="partenariat">Partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre question..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <span>📧</span>
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="contact-info-section">
              <div className="info-header">
                <h2>Nos coordonnées</h2>
                <p>Plusieurs façons de nous joindre</p>
              </div>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-icon email-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <a href="mailto:alidorsabue@africaits.com">alidorsabue@africaits.com</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon whatsapp-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382C17.007 14.382 16.577 14.27 16.202 14.09L13.202 12.59C12.827 12.41 12.452 12.41 12.202 12.59L9.202 14.09C8.827 14.27 8.397 14.382 7.932 14.382C6.857 14.382 6 13.525 6 12.45V7.55C6 6.475 6.857 5.618 7.932 5.618C8.397 5.618 8.827 5.73 9.202 5.91L12.202 7.41C12.452 7.59 12.827 7.59 13.202 7.41L16.202 5.91C16.577 5.73 17.007 5.618 17.472 5.618C18.547 5.618 19.404 6.475 19.404 7.55V12.45C19.404 13.525 18.547 14.382 17.472 14.382Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>WhatsApp Business</h3>
                    <a href="https://wa.me/243835561737" target="_blank" rel="noopener noreferrer">
                      +243 835 561 737
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon linkedin-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.367C3.274 4.224 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.224 7.401 5.367C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/company/aits-africa" target="_blank" rel="noopener noreferrer">
                      Suivez-nous sur LinkedIn
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon location-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Adresse</h3>
                    <p>
                      République Démocratique du Congo<br />
                      Kinshasa (adresse à compléter)
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon time-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h3>Horaires</h3>
                    <p>
                      Lundi - Vendredi : 9h00 - 18h00<br />
                      Samedi : Sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps?q=Kinshasa,+R%C3%A9publique+D%C3%A9mocratique+du+Congo&output=embed"
                  title="Localisation AITS - Kinshasa, RDC"
                  className="map-iframe"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
