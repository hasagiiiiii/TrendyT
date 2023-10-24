import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import AllProduct from "./component/ProductManagementLayout/AllProduct";
import "./App.css";

import LayoutLogin from "./Layout/LayoutLogin";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/AllProduct",
          element: <AllProduct/>,
          children: [
            {
              path: '/AllProduct/list/all',
              element:<ListAll/>
            }
          ]
        }
      ]
    },
    {
      path: "/Login",
      element: <LayoutLogin />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
