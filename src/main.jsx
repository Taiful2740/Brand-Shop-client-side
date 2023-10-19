import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Root from "./Root";
import Home from "./Components/Header/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Products from "./Components/Pages/Products";
import AddProduct from "./Components/Pages/AddProduct";
import AboutUs from "./Components/Pages/AboutUs";
import Register from "./Components/LoginRegister/Register";
import LogIn from "./Components/LoginRegister/LogIn";
import Profile from "./Components/Header/Profile";
import Reebok from "./Components/Brand/Reebok";
import Adidas from "./Components/Brand/Adidas";
import Puma from "./Components/Brand/Puma";
import Nike from "./Components/Brand/Nike";
import Gucci from "./Components/Brand/Gucci";
import Zara from "./Components/Brand/Zara";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/reebok",
        element: <Reebok></Reebok>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/adidas",
        element: <Adidas></Adidas>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/puma",
        element: <Puma></Puma>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/nike",
        element: <Nike></Nike>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/gucci",
        element: <Gucci></Gucci>,
        loader: () => fetch("http://localhost:5000/product"),
      },
      {
        path: "/zara",
        element: <Zara></Zara>,
        loader: () => fetch("http://localhost:5000/product"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
