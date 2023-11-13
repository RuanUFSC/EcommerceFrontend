import { createContext, useState, useEffect } from "react";

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const [produtos, setProdutos] = useState([])

  const login = () => {
    localStorage.setItem("logado", "true");
    setLogado(true);
  };
  const logout = () => {
    localStorage.removeItem("logado");
    setLogado(false);
  };
  
  const fetchProdutos = async () => {
    try {
      const response = await fetch(
        "https://cervejaria-backend.onrender.com/produtos/consultar-produtos"
      );
      const data = await response.json();
      setProdutos(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // // Verificar se o usuário está logado ao montar o componente
  useEffect(() => {
    const verificaLogado = localStorage.getItem("logado");
    if (verificaLogado) {
      setLogado(true);
    }
    fetchProdutos();
  }, []);

  return (
    <GeneralContext.Provider value={{ logado, login, logout, produtos, fetchProdutos }}>
      {children}
    </GeneralContext.Provider>
  );
};
