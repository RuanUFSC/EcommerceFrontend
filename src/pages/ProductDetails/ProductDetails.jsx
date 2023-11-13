import { useParams, Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import "./ProductDetails.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import download from "../../assets/download.png";
import { GeneralContext } from '../../contexts/GeneralContext.jsx'


const ProductDetails = () => {
  const { product } = useParams();
  const { produtos, fetchProdutos } = useContext(GeneralContext);
  const produtoAtual = produtos.find((item, index) => index == product);

  useEffect(() => {
    fetchProdutos();
  }, []);

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
