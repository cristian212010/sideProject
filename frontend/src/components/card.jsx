import React from 'react';
import '../assets/css/card.css'; 
import TuComponente from './validacionViajes';
import avatarPerfil from '../assets/img/avatar.jpg';

const Card = ({ nombre, especialidad, avatar, disponibilidad_viajar, tecnologias }) => {
    const tecnologiasArray = tecnologias ? tecnologias.split(',') : [];
    return (
        <div className="card">
            
        <div className="image-container">
                <img src={avatarPerfil} alt='imgCandidato' className='avatarCandidato'></img>              
            <div className="price">Jr.</div>
        </div>

        <div className="content">
            <div className='name_full'>
                <div className='nombre'> 
                <label>Nombre</label>
                <h3>{nombre}</h3>
                </div>
            </div>
            <div className='espec_viaje'>
            <div className='espec'> 
                <label>Especialidad</label>
                <h3>{especialidad}</h3>
            </div>
            <div className='Viaje'> 
                <label>Viajar</label>
                <h3><TuComponente respuesta={disponibilidad_viajar} /></h3>
            </div>
            </div>
            <div className='tegnologias'>
                {
                    tecnologiasArray.map((data, index) =>(
                        <div key={index} className='tecno'>{data}</div>
                    ))
                }
            </div>
        </div>

        <div className="button-container">
            <button className="buy-button button">VER CANDIDATO</button>
        </div>
    </div>
    );
};

export default Card;
