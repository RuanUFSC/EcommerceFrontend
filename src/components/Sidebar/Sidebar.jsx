import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  
  const arrayJogos = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return (
      <ul>
        {arrayJogos.map(item => 
        <Link to={`/detalhes/${item}`} key={item}>Produto {item}</Link>          
        )}
      </ul>
    )
  }
  
export default Sidebar