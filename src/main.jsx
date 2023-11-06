import ReactDOM from 'react-dom/client'
import Routes from './Routes.jsx'
import './index.css'
import { LoginProvider } from './contexts/LoginContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginProvider>
    <Routes />
  </LoginProvider>
)
