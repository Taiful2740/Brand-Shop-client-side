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
