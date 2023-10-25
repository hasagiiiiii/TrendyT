import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import AllProduct from "./component/ProductManagementLayout/AllProduct";
import "./App.css";
import ListAll from "./component/ProductManagementLayout/ProductListLayout/ListAll";
import LayoutLogin from "./Layout/LayoutLogin";

const App = () => {
  return (
    <BrowserRouter basename="TrendyT">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/All" element={<AllProduct />} />
          <Route path="/AllProduct/List" element={<ListAll />} />
        </Route>

        <Route path="/Login" element={<LayoutLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
