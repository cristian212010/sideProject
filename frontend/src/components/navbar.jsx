import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import campus from '../assets/img/campus.png'
import axios from "axios";
import '../assets/css/navbar.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [documento, setDocumento] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const getUser = async(documento)=> {
    try {
      const userResponse = await axios.get(`http://localhost:6996/api/usuario/getOne/${documento}`);
      console.log(userResponse.data[0].rol);
      return userResponse.data[0].rol;
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const fetchUserData = async () => {
      const doc = localStorage.getItem("documento") || null;
      if (doc !== null) {
        const userRole = await getUser(doc);
        setDocumento(userRole);
      }
    }
    fetchUserData();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("documento");
    localStorage.removeItem("token");
    setDocumento(null);
  };

  return (
    <div className={`navbar-container ${scrolling ? 'scrolling' : ''}`}>
      <div className="menu">
        <img src={campus} alt="logo" className="logo" />
        <ul className="options">
          <li>Quiénes somos</li>
          <li>Candidatos</li>
          <li>Contacto</li>
          {documento === "ADMIN" && (
            <li>Usuarios</li>
          )}
        </ul>
      </div>
      <div className="container-button">
      {documento === null ? (
          <Link to='/login'>
            <button className="button_navbar">
              <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">Iniciar Sesión</span>
              </span>
            </button>
          </Link>
        ) : (
          <div className="user-cerrar-sesion">
            <div className="user-circle" onClick={handleLogout}>
              <img src={documento?.avatar || 'ruta_por_defecto'} alt="User Avatar" className="user-avatar" />
              <span className="user-name">{'hola'}</span>
            </div>
            <button className="button_navbar" onClick={handleLogout}>
              <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">Cerrar Sesión</span>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;