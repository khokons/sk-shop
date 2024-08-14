import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import ErrorPage from './ErrorPage.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import ShopCategory from './Pages/ShopCategory/ShopCategory.jsx';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';
import Product from './Components/Product/Product.jsx';
import Carts from './Pages/Cart/Carts.jsx';
import Login from './Pages/Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/mens',
        element: <ShopCategory banner={men_banner} category="men" />,
      },
      {
        path: '/womens',
        element: <ShopCategory banner={women_banner} category="women" />,
      },
      {
        path: '/kids',
        element: <ShopCategory banner={kid_banner} category="kid" />,
      },
      {
        path: '/product',
        element: <Product></Product>
      },
      {
        path: '/product/:productId',
        element: <Product></Product>,
        loader: ()=> fetch('/public/allData.json')
      },
      {
        path: '/cart',
        element: <Carts></Carts>
      },
      {
        path: '/login',
        element: <Login></Login>
      }

      


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
  </StrictMode>,
)
