import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import AllProduct from "./component/AllProduct/AllProduct";
import "./App.css";
import ListAll from "./component/ProductListLayout/ListAll";
import LayoutLogin from "./Layout/LayoutLogin";
import AddProduct from "./pages/AddProduct";

const App = () => {
  return (
    <BrowserRouter basename="/TrendyT">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/AllProduct" element={<AllProduct />}>
            <Route path="/AllProduct/List" element={<ListAll />} />
          </Route>
          <Route path="/AddProduct" element={<AddProduct />} />
        </Route>
        <Route path="/Login" element={<LayoutLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
