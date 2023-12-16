import React from 'react';
import '../assets/css/card.css'; 
import TuComponente from './validacionViajes';

const Card = ({ title, description, imageUrl }) => {

  const respuestaUsuario = 'si';

  return (
    <div className="card">
      <div className="image-container">

        <label className="ui-bookmark">
            <input type="checkbox"/>
            <div className="bookmark">
                <svg viewBox="0 0 32 32">
                    <g>
                        <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                    </g>
                </svg>
            </div>
        </label>  
                              
          <div className="price">Jr.</div>
      </div>

      <div className="content">
        <div className='name_full'>
            <div className='nombre'> 
              <label>Nombre</label>
              <h3>Dannan Algadas</h3>
            </div>
        </div>
        <div className='espec_viaje'>
        <div className='espec'> 
              <label>Especialidad</label>
              <h3>FrontEnd</h3>
        </div>
        <div className='Viaje'> 
              <label>Viajar</label>
              <h3><TuComponente respuesta={respuestaUsuario} /></h3>
        </div>
        </div>
        <div className='tegnologias'>
          <div className='tecno'>AWS</div>
          <div className='tecno'>NodeJS</div>
          <div className='tecno'>Php</div>
          <div className='tecno'>ReactJS</div>
        </div>
      </div>

      <div className="button-container">
          <button className="buy-button button">Buy Now</button>
      </div>
  </div>
  );
};

export default Card;
