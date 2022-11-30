import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Extrato from "../pages/Extrato";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Saque from "../pages/Saque";
import Trasferencia from "../pages/Trasferencia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Transferencia",
    element: <Trasferencia />,
  },
  {
    path: "/Extrato",
    element: <Extrato />,
  },
  {
    path: "/Saque",
    element: <Saque />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
