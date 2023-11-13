import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import { useEffect, useContext } from "react";
import download from "../../assets/download.png";
import { Link } from "react-router-dom";
import { GeneralContext } from "../../contexts/GeneralContext.jsx";

function CarouselComponent() {
  const { produtos, fetchProdutos } = useContext(GeneralContext);

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <Carousel>
      {produtos.map((a, index) => (
        <Carousel.Item key={index}>
          <Link to={`/detalhes/${index}`} key={index}>
            <h3 className="carousel-name">{a?.nome}</h3>
            <img className="d-block" src={download} alt="First slide" />
            <Carousel.Caption>
              <h5 className="carousel-text">
                {Number(a?.preco).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h5>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
