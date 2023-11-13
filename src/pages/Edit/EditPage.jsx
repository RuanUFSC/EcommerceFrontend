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

  const [selectedOption, setSelectedOption] = useState('')

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
    setProduto({
      ...produto,
      [name]: value,
    });
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
  };

  const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
  }
  

  return (
    <div>
      <ToastContainer />
      <h1>Editar o Produto {product}</h1>
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
            <input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={(e) => handleOptionChange(e)}/>
            Faixa 1 - até R$50.000
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={(e) => handleOptionChange(e)}/>
            Faixa 2 - até R$500.000
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" checked={selectedOption === 'option3'} onChange={(e) => handleOptionChange(e)}/>
            Faixa 3 - até R$5.000.000
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
