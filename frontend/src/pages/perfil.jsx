import React, { useState,useEffect } from "react";
import "../assets/css/perfil.css"
import '../assets/css/buttonRadio.css';
import candidato from "../assets/img/avatar.jpg"
import Navbar from "../components/navbar";
import axios from 'axios'


const Perfil = () => {


    const user_id = localStorage.getItem("id_usuario")

    const [isChecked, setIsChecked] = useState(false);
    const [texto, setTexto] = useState('');
    const [nivelIngles, setNivelIngles] = useState([]);
    const [especialidad, setEspecialidad] = useState([]);
    const [tecnologia, setTecnologia] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:6996/api/nivel_ingles', {
          headers: {
            'x-api-token-jwt': token,
          },
        })
        .then((response) => {
          setNivelIngles(response.data);
        })

        axios.get('http://localhost:6996/api/especialidad')
        .then((response) => {
          setEspecialidad(response.data);
        })

        axios.get('http://localhost:6996/api/tecnologia')
        .then((response) => {
          setTecnologia(response.data);
        })

      },[])


  // Estado local para realizar un seguimiento de las opciones seleccionadas
  const [seleccionados, setSeleccionados] = useState([]);
  const handleSelect = (index) => {
    if (seleccionados.includes(index)) {
      setSeleccionados(seleccionados.filter((item) => item !== index));
    } else {
      setSeleccionados([...seleccionados, index]);
    }
  };


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

    const handleTextoChange = (event) => {
        setTexto(event.target.value);
        console.log(texto);
      };

    /* Post Candidato */

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        
        const formData = {
          avatar: "avatar.jpg",
          id_usuario_fk: Number(user_id),
          id_especialidad_fk: Number(event.target.especialidad.value),
          disponibilidad_viajar: isChecked,
          id_nivel_ingles_fk: Number(event.target.nivel_ingles.value),
          descripcion: texto,
        };

        /* seleccionados.map((datas)=>{
            const tecnologiadForm = {
                datas,
                id_usuario_fk: Number(user_id)
            }
            try {
                const response = axios.post('http://localhost:6996/api/candidato/', tecnologiadForm, {
                    headers: {
                    'x-api-token-jwt': token,
                    }
                });
                console.log('Respuesta del servidor:', response.data);
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
            }
        }) */
        

        try {
            const response = await axios.post('http://localhost:6996/api/candidato/', formData, {
                headers: {
                  'x-api-token-jwt': token,
                }
            });
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }


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
            <form onSubmit={handleSubmit}>
            <div className='name_full_form'>
            </div>
            <div className='espec_viaje_form'>
            <div className='espec_form'> 
                <label>Especialidad</label>
                <select name="especialidad" id="">
                    {
                        especialidad.map((data) =>{
                            return(
                                <option value={data.id_especialidad}>{data.especialidad}</option>
                            )
                        })
                    }
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
            <div className="level_ingles">
            <div className='espec_form'> 
                <label>Nivel Ingles</label>
                <select name="nivel_ingles" id="">
                {
                        nivelIngles.map((data) =>{
                            return(
                                <option value={data.id_nivel_ingles}>{data.nivel_ingles}</option>
                            )
                        })
                    }
                </select>
            </div>
            </div>
            <div className='tegnologias_form'>
                <div className='button_radio_container'>
                {tecnologia.map((data, index) => (
                    <label key={index} className="custom-checkbox-label-radio">
                    <input
                        type="checkbox"
                        checked={seleccionados.includes(index)}
                        onChange={() => handleSelect(index)}
                        className="custom-checkbox-radio"
                    />
                    <div className="custom-checkbox-square-radio"></div>
                    {data.tecnologia}
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
                        rows={5} 
                        cols={40} 
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