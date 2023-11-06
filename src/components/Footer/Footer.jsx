import './Footer.css'
import { useContext }  from "react";
import { LoginContext } from '../../contexts/LoginContext.jsx'

const Footer = () => {
  const { logado } = useContext(LoginContext);

    return (
      <>
        <footer>
          <h2>Logado: { JSON.stringify(logado) }</h2>
        </footer>
      </>
    )
  }
  
export default Footer