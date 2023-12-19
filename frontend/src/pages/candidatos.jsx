import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import '../assets/css/candidatos.css';

const Candidatos = () => {
    const [APIData, setAPIData] = useState([]);
    const [APIEspecialidad, setAPIEspecialidad] = useState([]);
    const [APINivel_ingles, setAPINivel_ingles] = useState([]);
    const [APITecnologia, setAPITecnologia] = useState([]);
    const [selectedEspecialidad, setSelectedEspecialidad] = useState("");
    const [selectedNivelIngles, setSelectedNivelIngles] = useState("");
    const [selectedTecnologia, setSelectedTecnologia] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:6996/api/candidato/activos`)
          .then((response) => {
            setAPIData(response.data);
        })
        axios.get(`http://localhost:6996/api/especialidad`)
        .then((response) => {
            setAPIEspecialidad(response.data);
        })
        axios.get(`http://localhost:6996/api/nivel_ingles`)
        .then((response) => {
            setAPINivel_ingles(response.data);
        })
        axios.get(`http://localhost:6996/api/tecnologia`)
        .then((response) => {
            setAPITecnologia(response.data);
        })
    },[])

    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="card-filter">
                <div className="filter-container">
                    <h2>Fortalece tu grupo con nuestras habilidades destacadas.</h2>
                    <div className="filter-selects">
                        <select
                            className="filter-select"
                            value={selectedEspecialidad}
                            onChange={(e) => setSelectedEspecialidad(e.target.value)}
                        >
                            <option value="opcion1">Especialidades</option>
                            {APIEspecialidad.map((especialidad) => (
                                <option key={especialidad.id_especialidad} value={especialidad.id_especialidad}>
                                    {especialidad.especialidad}
                                </option>
                            ))}
                        </select>
                        <select
                            className="filter-select"
                            value={selectedNivelIngles}
                            onChange={(e) => setSelectedNivelIngles(e.target.value)}
                        >
                            <option value="opcionA">Niveles de inglés</option>
                            {APINivel_ingles.map((nivelIngles) => (
                                <option key={nivelIngles.id_nivel_ingles} value={nivelIngles.id_nivel_ingles}>
                                    {nivelIngles.nivel_ingles}
                                </option>
                            ))}
                        </select>
                        <select
                            className="filter-select"
                            value={selectedTecnologia}
                            onChange={(e) => setSelectedTecnologia(e.target.value)}
                        >
                            <option value="opcionA">Tecnologias</option>
                            {APITecnologia.map((tecnologia) => (
                                <option key={tecnologia.id_tecnologia} value={tecnologia.id_tecnologia}>
                                    {tecnologia.tecnologia}
                                </option>
                            ))}
                        </select>
                        <select className="filter-select">
                            <option value="opcionA">Disponibilidad viajar</option>
                            <option value={true}>Si</option>
                            <option value={false}>No</option>
                        </select>
                    </div>
                </div>
                <div className="card-container">
                    {APIData.map((data, index) => (
                        <Card
                            nombre={data.nombre_usuario}
                            especialidad={data.nombre_especialidad}
                            avatar={data.avatar}
                            disponibilidad_viajar={data.disponibilidad_viajar}
                            tecnologias={data.tecnologias}
                            descripcion={data.descripcion}
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Candidatos;
