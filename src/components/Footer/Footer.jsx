import './Footer.css'
import { useContext }  from "react";
import { GeneralContext } from '../../contexts/GeneralContext.jsx'

const Footer = () => {
  const { logado } = useContext(GeneralContext);

    return (
      <>
        <footer>
          <span>Fabrica de carros LTDA - 2023</span>
        </footer>
      </>
    )
  }
  
export default Footer