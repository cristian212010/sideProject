import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/img/background1.jpg';
import '../assets/css/carousel.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={image}></img>
        <Carousel.Caption className="custom-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image}></img>
        <Carousel.Caption className="custom-caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image}></img>
        <Carousel.Caption className="custom-caption">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;