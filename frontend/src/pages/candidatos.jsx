import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import '../assets/css/candidatos.css';

const Candidatos = () =>{
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:6996/api/candidato/activos`)
          .then((response) => {
            setAPIData(response.data);
            console.log(response.data);
          })
    },[])

    return(
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="card-filter">
                <div className="filter-container">
                    <h2>Fortalece tu grupo con nuestras habilidades destacadas.</h2>
                    <div className="filter-selects">
                        <select className="filter-select">
                        <option value="opcion1">Especialidades</option>
                        <option value="opcion2">Opción 2</option>
                        <option value="opcion3">Opción 3</option>
                        </select>
                        <select className="filter-select">
                        <option value="opcionA">Niveles de inglés</option>
                        <option value="opcionB">Opción B</option>
                        <option value="opcionC">Opción C</option>
                        </select>
                        <select className="filter-select">
                        <option value="opcionA">Tecnologias</option>
                        <option value="opcionB">Opción B</option>
                        <option value="opcionC">Opción C</option>
                        </select>
                        <select className="filter-select">
                        <option value="opcionA">Disponibilidad viajar</option>
                        <option value="opcionB">Opción B</option>
                        <option value="opcionC">Opción C</option>
                        </select>
                    </div>
                </div>
                <div className="card-container">
                    {
                        APIData.map((data, index) =>{
                            return(
                                <Card
                                    nombre={data.nombre_usuario}
                                    especialidad={data.nombre_especialidad}
                                    avatar={data.avatar}
                                    disponibilidad_viajar={data.disponibilidad_viajar}
                                    tecnologias={data.tecnologias}
                                    descripcion={data.descripcion}
                                    key={index}>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Candidatos;