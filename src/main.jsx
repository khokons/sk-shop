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
import Men from './Pages/ShopCategory/Men/Men.jsx';


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
        path: '/men',
        element: <Men></Men>
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
