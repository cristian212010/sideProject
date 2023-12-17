import React from "react";
import "../assets/css/perfil.css"
import candidato from "../assets/img/avatar.jpg"
import MultiSelectCheckbox from "../components/buttomRadio";

const Perfil = () => {
         return (
        <div className="card_container_form">
        <div className="card_form">
            
        <div className="image-container_form">
                <img src={candidato} alt='imgCandidato' className='avatarCandidato_form'></img>              
            <div className="price_form">Jr.</div>
        </div>

        <div className="content_form">
            <form action="">
            <div className='name_full_form'>
                <div className='nombre_fomr'> 
                    <label>Nombre</label>
                    <div className="input_nombre">
                        <input type="text" /> <input type="text" />
                    </div>
                </div>
            </div>
            <div className='espec_viaje_form'>
            <div className='espec_form'> 
                <label>Especialidad</label>
                <select name="Selecciona una opcion" id="">
                    <option value="">opcion 1</option>
                    <option value="">opcion 2</option>
                </select>
            </div>
            <div className='Viaje_form'> 
                <label>Viajar</label>
                <div className="checkbox-container">
                    <label className="checkbox-label">
                        <input
                        type="checkbox"
                        className="custom-checkbox"
                        />
                        <span className="checkmark"></span>
                        
                    </label>
                </div>
            </div>
            </div>
            <div className='tegnologias_form'>
                  <MultiSelectCheckbox></MultiSelectCheckbox>
            </div>
        

        <div className="button-container_form">
            <button className="buy-button_form button_form">ACTUALIZAR DATOS</button>
        </div>
        
        </form>
        </div>
        
    </div>
    
    </div>
    )
}

export default Perfil