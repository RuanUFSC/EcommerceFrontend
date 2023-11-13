import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext }  from "react";
import { LoginContext } from '../../contexts/LoginContext.jsx'

const Navbar = () => {
  
  const { logado, logout } = useContext(LoginContext);
    return (
      <>
        <nav>
          {logado ? <button onClick={() => logout()}>Sair</button> : ''}
            <Link to="/">Home</Link>
            <Link to="/produtos">Catalogo</Link>
            <Link to="/register">Cadastrar</Link>
            <Link to="/edit">Editar</Link>
            <Link to="/user">Minha Conta</Link>
        </nav>
      </>
    )
  }
  
export default Navbar