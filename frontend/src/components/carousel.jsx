import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/img/background1.jpg';
import image2 from '../assets/img/background-login.jpg';
import image3 from '../assets/img/img563.jpg';
import '../assets/css/carousel.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={image} alt="First slide"></img>
        <Carousel.Caption className="custom-caption">
          <h3>Entrenamiento Integral</h3>
          <p>Descubre en Campus Lands un enfoque único que combina la maestría en programación con habilidades en inglés y desarrollo personal, preparando a los estudiantes para sobresalir en la industria tecnológica.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="Second slide"></img>
        <Carousel.Caption className="custom-caption">
          <h3>Experiencia Inmersiva</h3>
          <p>Sumérgete en un programa intensivo que abarca desde los lenguajes de programación más relevantes hasta módulos especializados en inglés, proporcionando una experiencia educativa completa y práctica.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="Third slide"></img>
        <Carousel.Caption className="custom-caption">
          <h3>Preparación Profesional</h3>
          <p>En Campus Lands, nos comprometemos a equipar a nuestros estudiantes con las habilidades técnicas y personales necesarias para destacar en un entorno laboral competitivo y en constante evolución.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
