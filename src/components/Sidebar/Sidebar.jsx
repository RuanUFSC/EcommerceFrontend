import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import "./Sidebar.css";
import { GeneralContext } from "../../contexts/GeneralContext.jsx";

const Sidebar = () => {
  const { produtos, fetchProdutos } = useContext(GeneralContext);

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <ul>
      {produtos.map((item, index) => (
        <Link to={`/detalhes/${index}`} key={index}>
          {item.nome}
        </Link>
      ))}
    </ul>
  );
};

export default Sidebar;
