import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import './Sidebar.css'

const Sidebar = () => {
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
      <ul>
        {produtos.map((item, index) => 
        <Link to={`/detalhes/${index}`} key={index}>{item.nome}</Link>          
        )}
      </ul>
    )
  }
  
export default Sidebar