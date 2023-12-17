import React from "react";
import "../assets/css/perfil.css"

const Perfil = () => {
         return (
        <div className="card_form">
            
        <div className="image-container_form">
                <img src="" alt='imgCandidato' className='avatarCandidato_form'></img>              
            <div className="price">Jr.</div>
        </div>

        <div className="content_form">
            <div className='name_full_form'>
                <div className='nombre_fomr'> 
                <label>Nombre</label>
                <h3></h3>
                </div>
            </div>
            <div className='espec_viaje_form'>
            <div className='espec_form'> 
                <label>Especialidad</label>
                <h3></h3>
            </div>
            <div className='Viaje_form'> 
                <label>Viajar</label>
                <h3></h3>
            </div>
            </div>
            <div className='tegnologias_form'>
                  <div className='tecno_form'>NodeJs</div>
            </div>
        </div>

        <div className="button-container_form">
            <button className="buy-button_form button_form">VER CANDIDATO</button>
        </div>
    </div>
    )
}

export default Perfil