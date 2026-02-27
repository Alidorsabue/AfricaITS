import React from 'react';

function CasClientCard({ titre, defi, solution, resultats }) {
  return (
    <div className="cas-client-card">
      <h3>{titre}</h3>
      <strong>Défi :</strong>
      <p>{defi}</p>
      <strong>Solution AITS :</strong>
      <p>{solution}</p>
      <strong>Résultats :</strong>
      <p>{resultats}</p>
    </div>
  );
}

export default CasClientCard; 