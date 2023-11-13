import { GeneralContext } from './contexts/GeneralContext.jsx';
import { useContext } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Products from './pages/Products/Products.jsx'
import User from './pages/User/User.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'
import Login from './pages/Login/Login.jsx'
import Layout from './pages/Layout.jsx'
import Register from './pages/Register/Register.jsx'
import Edit from './pages/Edit/Edit.jsx'
import EditPage from './pages/Edit/EditPage.jsx'

function Router() {
  
  const { logado } = useContext(GeneralContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: logado ? <Layout /> : <Navigate to="/login" />,
      children: [
        {
          path: "/",
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
        },
        {
          path: "/edit",
          element: <Edit />,
        },
        {
          path: "/edit/:product",
          element: <EditPage />,
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
