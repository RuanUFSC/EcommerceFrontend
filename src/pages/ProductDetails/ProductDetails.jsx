import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetails.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import download from "../../assets/download.png";

const ProductDetails = () => {
  const { product } = useParams();
  const [produtos, setProdutos] = useState([]);
  console.log(product);
  const produtoAtual = produtos.find((item, index) => index == product);
  console.log(produtoAtual);

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
  }, [product]);

  return (
    <>
      <Link to="/produtos">
        <span className="left-arrow text-dark display-5">{"< voltar"}</span>
      </Link>
      {produtoAtual &&(<>
      <h1>{produtoAtual?.nome}</h1>
      <Sidebar />
      <img className="imagem" src={download} />
      <div>Descrição: {produtoAtual?.descricao}</div>
      <div>
        Preço:{" "}
        {Number(
          produtoAtual?.preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        }
      </div></>)}
    </>
  );
};

export default ProductDetails;
