import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import campus from '../assets/img/campus.png'
import avatarPerfil from '../assets/img/avatar.jpg';
import axios from "axios";
import '../assets/css/navbar.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [documento, setDocumento] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getUser = async(documento)=> {
    try {
      const userResponse = await axios.get(`http://localhost:6996/api/usuario/getOne/${documento}`);
      return userResponse.data[0];
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
        const usuario = await getUser(doc);
        setDocumento(usuario.rol);
        setUsuario(usuario);
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
    localStorage.removeItem("idCandato");
    setDocumento(null);
  };

  return (
    <div className={`navbar-container ${scrolling ? 'scrolling' : ''}`}>
      <div className="menu">
        <img src={campus} alt="logo" className="logo" />
        <ul className={`options ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/inicio" className="link-navbar">
          <li>Quiénes somos</li>
          </Link>
          <Link to="/candidatos" className="link-navbar">
          <li>Candidatos</li>
          </Link>
          {documento === "ADMIN" && (
            <Link to="/usuarios" className="link-navbar">
              <li>Usuarios</li>
            </Link>
          )}
          {documento === "ADMIN" && (
            <Link to="/panel_admin" className="link-navbar">
              <li>Autorizar</li>
            </Link>
          )}
          {documento === "USER" && (
            <Link to="/perfil" className="link-navbar">
            <li>Perfil</li>
            </Link>
          )}
        </ul>
        <div className="hamburger-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {/* Resto del código ... */}
      {isMenuOpen && (
         <ul className="options">
         <Link to="/inicio">
         <li>Quiénes somos</li>
         </Link>
         <Link to="/candidatos">
         <li>Candidatos</li>
         </Link>
         {documento === "ADMIN" && (
           <Link to="/usuarios">
             <li>Usuarios</li>
           </Link>
         )}
         {documento === "ADMIN" && (
           <Link to="/panel_admin">
             <li>Autorizar</li>
           </Link>
         )}
         {documento === "USER" && (
           <Link to="/perfil">
           <li>Perfil</li>
           </Link>
         )}
       </ul>
      )}
      </div>
      {documento !== null && (
        <div className="user-circle" onClick={handleLogout}>
          <img src={avatarPerfil} alt="avatar" className="user-avatar" />
          <span className="user-name">{usuario.nombres}</span>
        </div>
      )}
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
          <button className="button_navbar" onClick={handleLogout}>
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">Cerrar Sesión</span>
            </span>
          </button>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;