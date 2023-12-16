import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import '../assets/css/candidatos.css';

const Candidatos = () =>{
    return(
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="card-filter">
                <div className="filter-container">
                    <h2>Fortalece tu grupo con nuestras habilidades destacadas.</h2>
                    <div className="filter-selects">
                        <select className="filter-select">
                        <option value="opcion1">Opción 1</option>
                        <option value="opcion2">Opción 2</option>
                        <option value="opcion3">Opción 3</option>
                        </select>
                        <select className="filter-select">
                        <option value="opcionA">Opción A</option>
                        <option value="opcionB">Opción B</option>
                        <option value="opcionC">Opción C</option>
                        </select>
                        <select className="filter-select">
                        <option value="opcionA">Opción A</option>
                        <option value="opcionB">Opción B</option>
                        <option value="opcionC">Opción C</option>
                        </select>
                        <select className="filter-select">
                        <option value="opcionA">Opción A</option>
                        <option value="opcionB">Opción B</option>
                        <option value="opcionC">Opción C</option>
                        </select>
                    </div>
                </div>
                <div className="card-container">
                    <Card
                        title="Título de la Tarjeta 2"
                        description="Descripción de la Tarjeta 2."
                        imageUrl="https://via.placeholder.com/300">
                    </Card>
                    <Card
                        title="Título de la Tarjeta 2"
                        description="Descripción de la Tarjeta 2."
                        imageUrl="https://via.placeholder.com/300">
                    </Card>
                    <Card
                        title="Título de la Tarjeta 2"
                        description="Descripción de la Tarjeta 2."
                        imageUrl="https://via.placeholder.com/300">
                    </Card>
                    <Card
                        title="Título de la Tarjeta 2"
                        description="Descripción de la Tarjeta 2."
                        imageUrl="https://via.placeholder.com/300">
                    </Card>
                    <Card
                        title="Título de la Tarjeta 2"
                        description="Descripción de la Tarjeta 2."
                        imageUrl="https://via.placeholder.com/300">
                    </Card>
                    <Card
                        title="Título de la Tarjeta 2"
                        description="Descripción de la Tarjeta 2."
                        imageUrl="https://via.placeholder.com/300">
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Candidatos;