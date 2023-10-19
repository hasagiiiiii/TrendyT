import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import "./App.css";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
