import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext }  from "react";
import { GeneralContext } from '../../contexts/GeneralContext.jsx'

const Navbar = () => {
  
  const { logado, logout } = useContext(GeneralContext);
    return (
      <>
        <nav>
          {logado ? <button onClick={() => logout()}>Sair</button> : ''}
            <Link to="/">Catalogo</Link>
            <Link to="/register">Cadastrar</Link>
            <Link to="/edit">Editar</Link>
            <Link to="/user">Minha Conta</Link>
        </nav>
      </>
    )
  }
  
export default Navbar