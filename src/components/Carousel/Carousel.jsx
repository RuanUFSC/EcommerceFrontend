import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";
import { useState, useEffect } from "react";
import download from "../../assets/download.png";
import { Link } from "react-router-dom";

function UncontrolledExample() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          "https://cervejaria-backend.onrender.com/produtos/consultar-produtos"
        );
        const data = await response.json();
        setProdutos(data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    };

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

export default UncontrolledExample;
