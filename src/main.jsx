import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './assets/components/Shop/Shop';
import Home from './assets/components/Home/Home';
import Orders from './assets/components/Orders/Orders';
import Inventory from './assets/components/Inventory/Inventory';
import Login from './assets/components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        // loader: () => fetch('products.json')
        loader: cartProductsLoader

      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
