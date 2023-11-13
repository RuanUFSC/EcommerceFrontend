import { useContext, useState } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext';
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
const Login = () => {
  const [ usuario, setUsuario ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();

  const { login } = useContext(GeneralContext);

  const realizarLogin = () => {
    if(usuario == "ruan" && password == "123"){
      login();       
      return navigate("/");
    }
  } 
  
    return (
      <>
        <h1>Login</h1>
        <div className='container-login'>
          <div>
            Usuario
            <input type="text" value={usuario} onChange={(event) => setUsuario(event.target.value)}/>
          </div>
          <div>
            Senha
            <input type="password" values={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div>
            <button onClick={realizarLogin}>Enviar</button>
          </div>
        </div>
        <Footer/>
      </>
    )
  }
  
export default Login