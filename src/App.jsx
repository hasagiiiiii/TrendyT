import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import "./App.css";
import LayoutLogin from "./Layout/LayoutLogin";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
    },
    {
      path: "/Login",
      element: <LayoutLogin />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
