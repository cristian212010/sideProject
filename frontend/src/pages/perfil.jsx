import React from "react";
import "../assets/css/perfil.css"
import candidato from "../assets/img/avatar.jpg"
import MultiSelectCheckbox from "../components/buttomRadio";
import Navbar from "../components/navbar";

const Perfil = () => {
         return (
        <div className="perfil_container">
            <Navbar></Navbar>
        <div className="card_container_form">
        <div className="card_form">
            
        <div className="image-container_form">
                <img src={candidato} alt='imgCandidato' className='avatarCandidato_form'></img>              
            <div className="price_form">Jr.</div>
        </div>

        <div className="content_form">
            <form action="">
            <div className='name_full_form'>
                <div className='nombre_form'> 
                    <div className="form-control">
                    <input required type="text" />
                    <label>
                        <span style={{ transitionDelay: '250ms' }}>N</span>
                        <span style={{ transitionDelay: '200ms' }}>o</span>
                        <span style={{ transitionDelay: '150ms' }}>m</span>
                        <span style={{ transitionDelay: '100ms' }}>b</span>
                        <span style={{ transitionDelay: '50ms' }}>r</span>
                        <span style={{ transitionDelay: '0ms' }}>e</span>
                    </label>
                    </div>
                    <div className="form-control">
                    <input required type="text" />
                    <label>
                        <span style={{ transitionDelay: '250ms' }}>A</span>
                        <span style={{ transitionDelay: '250ms' }}>p</span>
                        <span style={{ transitionDelay: '200ms' }}>e</span>
                        <span style={{ transitionDelay: '150ms' }}>l</span>
                        <span style={{ transitionDelay: '100ms' }}>l</span>
                        <span style={{ transitionDelay: '50ms' }}>i</span>
                        <span style={{ transitionDelay: '0ms' }}>d</span>
                        <span style={{ transitionDelay: '0ms' }}>o</span>
                    </label>
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
    </div>
    )
}

export default Perfil