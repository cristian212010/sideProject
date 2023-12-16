import React from 'react';
import '../assets/css/hero.css'; 

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="background"></div>
      <div className="content">
        <h1 className='hero-titulo'>Descubre Nuestros Talentos Destacados para Tu Equipo</h1>
        <p className='hero-texto'>Profesionales con formación sólida, actitud proactiva y 
        disponibilidad excepcional. Son una valiosa oportunidad para enriquecer tu equipo.
        ¡Explora sus perfiles y cuéntanos cómo pueden aportar valor a tu 
        empresa!
        </p>
      </div>
    </div>
  );
};

export default Hero;
