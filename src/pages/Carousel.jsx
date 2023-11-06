import Carousel from 'react-bootstrap/Carousel';
import download from './download.png';
import { Link } from 'react-router-dom';

function UncontrolledExample() {
  const arrayJogos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  return (
    <Carousel>
      {arrayJogos.map((a, index) => (  
        <Carousel.Item key={index}>
          
        <Link to={`/detalhes/${a}`} key={a}>  
          <img
            className="d-block"
            src={download}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{a}</h3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>

      ))}
    </Carousel>
  );
}

export default UncontrolledExample;