// import { createBrowserRouter } from "react-router-dom";

import Login from "../auth/login/Login";
import ProductDetails from "../components/products/ProductDetails.jsx";
import Register from "../auth/register/register.jsx";
import Products from "../components/products/products.jsx";
import {createBrowserRouter} from "react-router";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <Register />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/products/:id",
        element: <ProductDetails />
    }
]);

export default router;