import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Card from "../components/card";
import Footer from "../components/footer";
import '../assets/css/candidatos.css';
import { Modal, Button } from 'react-bootstrap';

const Candidatos = () => {
    const [APIData, setAPIData] = useState([]);
    const [APIEspecialidad, setAPIEspecialidad] = useState([]);
    const [APINivel_ingles, setAPINivel_ingles] = useState([]);
    const [APITecnologia, setAPITecnologia] = useState([]);
    const [selectedEspecialidad, setSelectedEspecialidad] = useState("");
    const [selectedNivelIngles, setSelectedNivelIngles] = useState("");
    const [selectedTecnologia, setSelectedTecnologia] = useState("");
    const [selectedDisponibilidadViajar, setSelectedDisponibilidadViajar] = useState("");

    const [modalShow, setModalShow] = useState(false);
    const [formData, setFormData] = useState([]);

    const handleShow = () => setModalShow(true);
    const handleClose = () => {
        setModalShow(false);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const nombre_candidato = localStorage.getItem('nombresSeleccionados')
        const nombre = e.target.nombre.value;
        const empresa = e.target.empresa.value;
        const email = e.target.email.value;
        const telefono = e.target.telefono.value;
        const data = {
          nombre,
          nombre_candidato,
          empresa,
          email,
          telefono,
        }
        
        try {
          const response = axios.post('http://localhost:6996/mailer/', {data}, {
              headers: {
              'x-api-token-jwt': token,
              }
          });
          console.log('Respuesta del servidor:', response.data);
        } catch (error) {
          console.error('Error al enviar el formulario:', error);
        } 
      };

    const handleEspecialidadChange = (value)  => {
        setSelectedEspecialidad(value)
    };

    const handleNivelInglesChange = (value) => {
        setSelectedNivelIngles(value);
    };

    const handleTecnologiaChange = (value) => {
        setSelectedTecnologia(value);
    };

    const handleDisponibilidadViajarChange = (value) => {
        setSelectedDisponibilidadViajar(value);
    };

    useEffect(() => {
        axios.get(`http://localhost:6996/api/candidato/activos`)
          .then((response) => {
            setAPIData(response.data);
            console.log(response.data);
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
            console.log(response.data);
        })
    },[])

    const filtrarCandidatos = () => {
        const params = {
            id_especialidad: selectedEspecialidad || null,
            id_nivel_ingles: selectedNivelIngles || null,
            id_tecnologia: selectedTecnologia || null,
            disponibilidad_viajar: selectedDisponibilidadViajar || null
        };

        console.log(params);

        axios.post(`http://localhost:6996/api/candidato/filtrar`, params)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                            name="especialidad"
                            onChange={(e) => {
                                handleEspecialidadChange(e.target.value);
                            }}
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
                            onChange={(e) => {
                                handleNivelInglesChange(e.target.value);
                            }}
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
                            onChange={(e) => {
                                handleTecnologiaChange(e.target.value);
                            }}
                        >
                            <option value="opcionA">Tecnologias</option>
                            {APITecnologia.map((tecnologia) => (
                                <option key={tecnologia.id_tecnologia} value={tecnologia.id_tecnologia}>
                                    {tecnologia.tecnologia}
                                </option>
                            ))}
                        </select>
                        <select
                            className="filter-select"
                            value={selectedDisponibilidadViajar}
                            onChange={(e) => {
                                handleDisponibilidadViajarChange(e.target.value);

                            }}
                        >
                            <option value="">Disponibilidad viajar</option>
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>

                    </div>
                    <button className="btn-buscar" onClick={filtrarCandidatos}>Buscar</button>
                    <button onClick={handleShow}>Consultar varios</button>
                    <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Información Del Candidato</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal_form_container'>
          <h4>Contactar</h4>

          <form  className="modal_form" onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                required
              />
              <label htmlFor="empresa">Empresa</label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                required
              />

              <label htmlFor="telefono">Telefono Contacto</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                required
              />

              <label htmlFor="email">Email Contacto</label>
              <input
                type="email"
                id="email"
                name="email"
                className='mover_abajo'
                value={formData.email}
                required
              />

              <button type="submit">Enviar</button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
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
