import React, {useState} from "react";
import Navbar from "../components/navbar";
import '../assets/css/panel_admin.css'
import axios from "axios";

const Panel_Admin = () =>{
    
    const [APIData, setAPIData] = useState([]);

    const [candidatoSeleccionado, setCandidatoSeleccionado] = useState(null);

    const handleVerDatos = (nombre) => {
        setCandidatoSeleccionado(nombre);
    };


    return (
        <div className="container_panel_admin">
        <Navbar></Navbar>
        <div className="panel_container">
            <div className="panel">
            <div className="titulo_panel">
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
                <p>a</p>
            </div>
            <div className="cuerpo_panel">
            <div className="cartas_candidatos">
                <div className="carta_panel_candidatos">
                <h3>Nombre 1</h3>
                <button className="btn_panel" onClick={() => handleVerDatos("Nombre 1")}>
                    Ver Datos
                </button>
                </div>
                <div className="carta_panel_candidatos">
                <h3>Nombre 2</h3>
                <button className="btn_panel" onClick={() => handleVerDatos("Nombre 2")}>
                    Ver Datos
                </button>
                </div>
                <div className="carta_panel_candidatos">
                <h3>Nombre 3</h3>
                <button className="btn_panel" onClick={() => handleVerDatos("Nombre 3")}>
                    Ver Datos
                </button>
                </div>
            </div>
            <div className="informacion_candidato">
                <div className="cuadro_info_panel">
                {/* Renderiza el contenido basado en la carta seleccionada */}
                {candidatoSeleccionado && (
                    <div>
                    <h3>{candidatoSeleccionado}</h3>
                    {/* Agrega más contenido según sea necesario */}
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