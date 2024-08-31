import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import ShopCategory from "./Pages/ShopCategory/ShopCategory.jsx";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kid_banner from "./assets/banner_kids.png";
import Product from "./Components/Product/Product.jsx";
import Carts from "./Pages/Cart/Carts.jsx";
import Login from "./Pages/Login/Login.jsx";
import SignUp from "./Pages/Register/SignUp.jsx";
import AuthProvider from "./Components/Providers/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/mens",
        element: <ShopCategory banner={men_banner} category="men" />
      },
      {
        path: "/womens",
        element: <ShopCategory banner={women_banner} category="women" />
      },
      {
        path: "/kids",
        element: <ShopCategory banner={kid_banner} category="kid" />
      },
      // {
      //   path: "/product",
      //   element: <Product></Product>,
      //   loader: () => fetch('/allData.json')
      // },
      {
        path: "/product/:productId",
        element: <PrivateRoute><Product></Product></PrivateRoute>,
        loader: () => fetch('/allData.json')
      },
      {
        path: "/carts",
        element: <PrivateRoute><Carts></Carts></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);
