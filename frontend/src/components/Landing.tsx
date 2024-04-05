import React from 'react';

const Landing = () => {
  return (
    <div className="landing-container">
      Landing
      <div className="subtitle-container">
        <h2 className="subtitle">Bienvenue</h2>
      </div>
      <div className="sub-section-container">
        <div className="landing-info-container">
          <div className="landing-info-title-container">
            <h3 className="landing-info-title">À quoi ça sert ?</h3>
          </div>
          <div className="landing-info-text-container">
            <ol className="landing-info-text-list">
              <li className="landing-info-text-item">
                Le journal
                <p className="landing-info-text">Tenir un journal sur l'état de vos Lipo qui ajoute un point de sécurité.</p>
              </li>
              <li className="landing-info-text-item">
                Le partage
                <p className="landing-info-text">Le partage nous permet de croiser des informations, élaborer de nouvelles méthodes et d'apprendre des uns et des autres.</p>
              </li>
              <li className="landing-info-text-item">
                La centralisation
                <p className="landing-info-text">La centralisation des outils donc la réduction du nombre d'applications à utiliser, tout se trouve au même endroit.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
