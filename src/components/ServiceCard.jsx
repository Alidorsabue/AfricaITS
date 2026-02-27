import React from 'react';

function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card">
      {icon && <span className="icon">{icon}</span>}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard; 