import React, { useState } from "react";
import "../assets/css/perfil.css"
import '../assets/css/buttonRadio.css';
import candidato from "../assets/img/avatar.jpg"
import Navbar from "../components/navbar";


const Perfil = () => {

    const user_id = localStorage.getItem("id_usuario")

    const [isChecked, setIsChecked] = useState(false);
    const [texto, setTexto] = useState('');

    const opciones = ['NodeJs', 'AWS', 'Php'];

  // Estado local para realizar un seguimiento de las opciones seleccionadas
  const [seleccionados, setSeleccionados] = useState([]);

  // Función para manejar cambios en la selección
  const handleSelect = (opcion) => {
    // Si la opción ya está seleccionada, quítala; de lo contrario, agrégala
    if (seleccionados.includes(opcion)) {
      setSeleccionados(seleccionados.filter((item) => item !== opcion));
    } else {
      setSeleccionados([...seleccionados, opcion]);
    }
    }

    console.log(typeof seleccionados);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

    const handleTextoChange = (event) => {
        setTexto(event.target.value);
      };

      


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
            <input type="hidden" name="" value={user_id} />
            </div>
            <div className='espec_viaje_form'>
            <div className='espec_form'> 
                <label>Especialidad</label>
                <select name="Selecciona una opcion" id="">
                    <option value="">opcion 1</option>
                    <option value="">opcion 2</option>
                </select>
            </div>

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
                        checked={isChecked}
                        value={isChecked} 
                        onChange={handleCheckboxChange} 
                        />
                        <span className="checkmark"></span>
                    </label>
                    </div>
            </div>
            </div>
            <div className='tegnologias_form'>
                   <div className='button_radio_container'>
                    {opciones.map((opcion) => (
                        <label key={opcion} className="custom-checkbox-label-radio">
                        <input
                            type="checkbox"
                            checked={seleccionados.includes(opcion)}
                            onChange={() => handleSelect(opcion)}
                            className="custom-checkbox-radio"
                        />
                        <div className="custom-checkbox-square-radio"></div>
                        {opcion}
                        </label>
                    ))}
                    </div>
            </div>
            <div className="descriccion_form">
                <div>
                    <label htmlFor="large-text-input">Descripcion:</label>
                    <textarea
                        id="large-text-input"
                        value={texto}
                        onChange={handleTextoChange}
                        rows={6} 
                        cols={37} 
                    ></textarea>
            </div>
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