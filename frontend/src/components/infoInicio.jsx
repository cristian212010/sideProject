import React from 'react';
import '../assets/css/infoInicio.css';
import image from '../assets/img/GoForIt.png';

function InfoInicio() {
  return (
    <div className="container">
      <div className="text-section">
        <div className="text-content">
        <h2>Bienvenido a nuestro sitio</h2>
        <p>Descubre todo lo que tenemos para ofrecerte. Explora nuestras características y servicios excepcionales para hacer tu experiencia inolvidable.</p>
        </div>
      </div>
      <div className="image-section">
        <img
          src={image}
          alt="Imagen a la Derecha"
          className="image-content"
        />
      </div>
    </div>
  );
}

export default InfoInicio;
