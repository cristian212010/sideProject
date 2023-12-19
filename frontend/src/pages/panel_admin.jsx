import React, {useState,useEffect } from "react";
import Navbar from "../components/navbar";
import '../assets/css/panel_admin.css'
import axios from "axios";

const Panel_Admin = () =>{
    
    const [datosCandidato, setDatosCandidato] = useState([]);
    const [candidatoSeleccionado, setCandidatoSeleccionado] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:6996/api/candidato/pendientes/')
          .then(response => {
            setDatosCandidato(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error al obtener datos del candidato:', error);
          });
    }, []);

    const AceptarCandidato = (id) => {
        console.log(id);  
    };

    const RechazarCandidato = (data) => {
         const token = localStorage.getItem('token');
         console.log(data);
         const mailerData = {
            nombre_candidato: data.nombre_usuario,
            email: data.email,
         }
         console.log(mailerData);
         try {
            const response = axios.post('http://localhost:6996/mailer/rechazo/', {mailerData}, {
                headers: {
                'x-api-token-jwt': token,
                }
            });
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }   
    };

    const handleVerDatos = (candidato) => {
        setCandidatoSeleccionado(candidato);
      };


    return (
        <div className="container_panel_admin">
        <Navbar></Navbar>
        <div className="panel_container">
            <div className="panel">
            <div className="titulo_panel">
                <p>Bienvenido a nuestro panel de Administracion</p>   
            </div>
            <div className="cuerpo_panel">
            <div className="cartas_candidatos">
                {datosCandidato.map((candidato, index) => (
                <div key={index} className="carta_panel_candidatos">
                    <h3>{candidato.nombre_usuario}</h3>
                    <button className="btn_panel" onClick={() => handleVerDatos(candidato)}>
                    Ver Datos
                    </button>
                </div>
                ))}
            </div>
            <div className="informacion_candidato">
                <div className="cuadro_info_panel">
                {candidatoSeleccionado && (
                    <div>
                    <div className="contenido">
                    <h3>Especialidad:{candidatoSeleccionado.nombre_especialidad}</h3>
                    <p>Nivel Ingles: {candidatoSeleccionado.nivel_de_ingles}</p>
                    <p>
                    Disponibilidad para viajar: {' '}
                    <span
                        style={{
                        color: candidatoSeleccionado.disponibilidad_viajar === 0 ? 'red' : 'green',
                        fontWeight: 'bold',
                        }}
                    >
                        {candidatoSeleccionado.disponibilidad_viajar === 0 ? '✗ No' : '✔ Sí'}
                    </span>
                    </p>
                    <p>Descripcion: {candidatoSeleccionado.descripcion}</p>
                    <p>Tecnologias: {candidatoSeleccionado.tecnologias}</p>
                    </div>
                    <div className="btn_candidatos">
                        <button className="btn_aceptar_canidatos" onClick={() => AceptarCandidato(candidatoSeleccionado.id_candidato)}>Aceptar</button>
                        <button className="btn_rechazar_canidatos" onClick={() => RechazarCandidato(candidatoSeleccionado) }>Rechazar</button>
                    </div>
                    </div>
                )}
                </div>
            </div>
            </div>
            </div>
        </div>

        </div>
    )
}

export default Panel_Admin