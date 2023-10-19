import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import "./App.css";
import TestAPI from "./TestAPI";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
    },
    {
      path: "/testAPI",
      element: <TestAPI />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
