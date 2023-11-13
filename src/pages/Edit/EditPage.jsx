import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Edit.css";

function ProdutoForm() {
  const { product } = useParams();

  const [produto, setProduto] = useState({
    nome: "",
    preco: 0,
    descricao: "",
  });

  const [selectedOption, setSelectedOption] = useState('1')

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(
          "https://cervejaria-backend.onrender.com/produtos/consultar-produtos"
        );
        const respostaJson = await response.json();
        const produtoFind = respostaJson.data.find(produto => produto.produto_id == product)
        setProduto(produtoFind)
      } catch (error) {
        console.log(error);
      }
    };

    fetchProdutos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let range = 1;
    setProduto({
      ...produto,
      [name]: value,
    })
    if(value > 5000000) {
      range = 4
    } else if(value > 500000) {
      range = 3
    } else if(value > 50000) {
      range = 2
    }
    setSelectedOption(range)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://cervejaria-backend.onrender.com/produtos/atualizar-produto/${product}`,
        produto,
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("Produto editado com sucesso!");
    } catch (error) {
      toast.error("Erro ao editar o produto. Por favor, tente novamente.");
    }
  }  

  return (
    <div>
      <ToastContainer />
      <h3>Editar o Produto {product}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="number"
            name="preco"
            value={produto.preco}
            onChange={handleChange}
          />
        </div>
        
        <div className="radio">
          <label>
            <input type="radio" value="1" checked={selectedOption == '1'}/>
            Faixa 1 - até R$50.000
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="2" checked={selectedOption == '2'}/>
            Faixa 2 - até R$500.000
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="3" checked={selectedOption == '3'}/>
            Faixa 3 - até R$5.000.000
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="4" checked={selectedOption == '4'}/>
            Faixa 4 - Acima de R$5.000.000
          </label>
        </div>


        <div>
          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Editar Produto</button>
        </div>
      </form>
    </div>
  );
}

export default ProdutoForm;
