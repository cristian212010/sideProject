import React, { useState, useEffect } from "react";
import campus from '../assets/img/campus.png'
import '../assets/css/navbar.css';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${scrolling ? 'scrolling' : ''}`}>
      <div className="menu">
        <img src={campus} alt="logo" className="logo" />
        <ul className="options">
          <li>Quiénes somos</li>
          <li>Candidatos</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="container-button">
      <button className="button_navbar">
            <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">Iniciar Sesión</span>
            </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;