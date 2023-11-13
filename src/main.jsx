import ReactDOM from 'react-dom/client'
import Routes from './Routes.jsx'
import './index.css'
import { GeneralProvider } from './contexts/GeneralContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <GeneralProvider>
    <Routes />
  </GeneralProvider>
)
