import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "./Edit.css";

function ProdutoForm() {
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
    <div>
      <h1>Editar um Produto</h1>
      {produtos &&
        produtos.map((a, index) => (
          <>
            <Link to={`/edit/${a.produto_id}`}>
              <h5 key={index}>{a.nome}✏️</h5>
            </Link>
          </>
        ))}
    </div>
  );
}

export default ProdutoForm;
