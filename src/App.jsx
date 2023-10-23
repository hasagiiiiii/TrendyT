import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import AllProduct from "./component/ProductManagementLayout/AllProduct";
import "./App.css";
import ListAll from "./component/ProductManagementLayout/ProductListLayout/ListAll";
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
  ]);
  return <RouterProvider router={router} />;
};

export default App;
