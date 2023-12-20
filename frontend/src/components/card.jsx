import React,{useState} from 'react';
import '../assets/css/card.css'; 
import TuComponente from './validacionViajes';
import avatarPerfil from '../assets/img/avatar.jpg';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const Card = ({ nombre, especialidad, avatar, disponibilidad_viajar,descripcion, tecnologias, index }) => {
    const tecnologiasArray = tecnologias ? tecnologias.split(',') : []; 
    const [modalShow, setModalShow] = useState(false);
    const [formData, setFormData] = useState([])

    const handleShow = () => setModalShow(true);
    const handleClose = () => {
        setModalShow(false);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const nombre_candidato = e.target.nombre_candidato.value;
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

    return (
        <div className="card">
            
        <div className="image-container">
                <img src={avatarPerfil} alt='imgCandidato' className='avatarCandidato'></img>              
            <div className="price">Jr.</div>
        </div>

        <div className="content">
            <div className='name_full'>
                <div className='nombre'> 
                <label>Nombre</label>
                <h5>{nombre}</h5>
                </div>
            </div>
            <div className='espec_viaje'>
            <div className='espec'> 
                <label>Especialidad</label>
                <h5>{especialidad}</h5>
            </div>
            <div className='Viaje'> 
                <label>Viajar</label>
                <h5><TuComponente respuesta={disponibilidad_viajar} /></h5>
            </div>
            </div>
            <div className='tegnologias'>
                {
                    tecnologiasArray.map((data, index) =>(
                        <div key={index} className='tecno'>{data}</div>
                    ))
                }
            </div>
        </div>

        <div className='container-opciones'>
        <div className="button-container" onClick={handleShow}>
            <button className="buy-button button">VER CANDIDATO</button>
        </div>
        <input type="checkbox" />
        </div>

        <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Información Del Candidato</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal_form_container'>
          <h3>Descripcion</h3>
          <p>{descripcion}</p>
          <br />
          <h4>Contactar</h4>
          {/* Agrega más campos según la información de la persona */}
          <form  className="modal_form" onSubmit={handleSubmit}>
                <input type="hidden" name="nombre_candidato" value={nombre} />
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
              {/* Agrega más campos de formulario según sea necesario */}
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
    );
};

export default Card;
