import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

function ProdutoForm() {
  const [produto, setProduto] = useState({
    nome: "",
    preco: 0,
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const adicionar = async () => {
    try {
      const produtos = [
        {
          nome: "Peugeot",
          descricao: "Certeza que vai dar problema",
          preco: "20000.00",
        },
        {
          nome: "Camaro Amarelo",
          descricao: "Carro de clipe sertanejo",
          preco: "200000.00",
        },
        {
          nome: "Porsche",
          descricao: "Muito luxuoso",
          preco: "3500000.00",
        },
        {
          nome: "Celta",
          descricao: "O brabo",
          preco: "30000.00",
        },
        {
          nome: "Corsa",
          descricao: "O brabo dos brabos",
          preco: "20000.00",
        },
        {
          nome: "Gol",
          descricao: "Turbo",
          preco: "20000.00",
        },
        {
          nome: "Saveiro",
          descricao: "Rebaixada",
          preco: "100000.00",
        },
        {
          nome: "BMW",
          descricao: "x1 ou x6",
          preco: "200000.00",
        },
        {
          nome: "Mercedes",
          descricao: "Elegante",
          preco: "150000.00",
        },
        {
          nome: "Uno",
          descricao: "Com escada",
          preco: "20000.00",
        },
      ];
      for (const produto of produtos) {
        await axios.post(
          "https://cervejaria-backend.onrender.com/produtos/criar-produto",
          produto,
          { headers: { "Content-Type": "application/json" } }
        );
        toast.success("Produto criado com sucesso!");
      }
    } catch (error) {
      toast.error("Erro ao criar o produto. Por favor, tente novamente.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://cervejaria-backend.onrender.com/produtos/criar-produto",
        produto,
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("Produto criado com sucesso!");
    } catch (error) {
      toast.error("Erro ao criar o produto. Por favor, tente novamente.");
    }
  };

  return (
    <div>
      <ToastContainer />
      <h1>Criar um Produto</h1>
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
        <div>
          <label>Descrição:</label>
          <textarea
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Criar Produto</button>
        </div>
      </form>
    </div>
  );
}

export default ProdutoForm;
