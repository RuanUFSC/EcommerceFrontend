import { LoginContext } from './contexts/LoginContext.jsx';
import { useContext } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Products from './pages/Products/Products.jsx'
import User from './pages/User/User.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import Login from './pages/Login/Login.jsx'
import Layout from './pages/Layout.jsx'
import Register from './pages/Register/Register.jsx'

function Router() {
  
  const { logado } = useContext(LoginContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: logado ? <Layout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/produtos",
          element: <Products />,
        },
        {
          path: "/detalhes/:product",
          element: <ProductDetails />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/register",
          element: <Register />,
        }
      ],
    },
    {
      path: "/login",
      element: logado ? <Navigate to="/" /> : <Login /> 
    },
    {
      path: "*",
      element: <Navigate to="/" />
    }
  ]);
  
  return (    
    <RouterProvider router={router} />
  )
}

export default Router
