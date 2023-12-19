import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='footer-map'>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5558789573856!2d-73.12853592469168!3d7.061353292941173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f18ef59f9a1%3A0xffbf118f3e8f20c!2sZona%20Franca%20Santander!5e0!3m2!1ses-419!2sco!4v1703016763104!5m2!1ses-419!2sco"
            width="500"
            height="350"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="info-lists">
          <ul className="contact-list">
            <li>
              <strong>Contacto:</strong>
            </li>
            <li>Dirección: Zona Franca Santander, Zenith, Anillo Vial #piso 6, Bucaramanga</li>
            <li>Teléfono: +57 3118807659</li>
            <li>Email: CampusLands@gmail.com</li>
          </ul>
          <ul className="social-list">
            <li>
              <strong>Síguenos en:</strong>
            </li>
            <li>
              <a href="https://www.facebook.com/Campuslands/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/campuslands/?originalSubdomain=co" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/campuslands/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2023 Campuslands</p>
    </footer>
  );
};

export default Footer;
