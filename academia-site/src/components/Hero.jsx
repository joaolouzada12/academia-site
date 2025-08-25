import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Bem-vindo à nossa Academia!</h1>
      <p>Transforme seu corpo e sua mente.</p>
      <a href="/modalities" className="cta-button">Explore Nossas Modalidades</a>
    </section>
  );
};

export default Hero;
