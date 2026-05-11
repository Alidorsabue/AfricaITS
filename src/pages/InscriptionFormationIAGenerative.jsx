import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TALLY_EMBED_SRC = 'https://tally.so/widgets/embed.js';
const TALLY_FORM_URL = 'https://tally.so/r/GxXYVO?transparentBackground=1';

function InscriptionFormationIAGenerative() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Inscription — Formation IA générative et prompt engineering | AITS';
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    let script = document.querySelector(`script[src="${TALLY_EMBED_SRC}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = TALLY_EMBED_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main className="formation-tally-page">
      <div className="formation-tally-page-header">
        <div className="container formation-tally-page-header-inner">
          <Link to="/formations" className="formation-tally-back">
            ← Retour aux formations
          </Link>
          <h1 className="formation-tally-page-title">
            Inscription — Formation IA générative et prompt engineering
          </h1>
        </div>
      </div>
      <div className="formation-tally-embed-wrap">
        <iframe
          data-tally-src={TALLY_FORM_URL}
          width="100%"
          height="100%"
          title="Formulaire d'inscription — Formation IA générative et prompt engineering"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </main>
  );
}

export default InscriptionFormationIAGenerative;
