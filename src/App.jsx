import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import AllProduct from "./component/AllProduct/AllProduct";
import "./App.css";
import ListAll from "./component/ProductListLayout/ListAll";
import LayoutLogin from "./Layout/LayoutLogin";
import Active from "./component/ProductManagementLayout/ProductListLayout/Active";
import Banned from "./component/ProductManagementLayout/ProductListLayout/Banned";
import Soldout from "./component/ProductManagementLayout/ProductListLayout/Soldout";
import Reviewing from "./component/ProductManagementLayout/ProductListLayout/Reviewing";
import Unlisted from "./component/ProductManagementLayout/ProductListLayout/Unlisted";

const App = () => {
  return (
    <BrowserRouter basename="/TrendyT">
      <Routes>
        <Route path="/" element={<RootLayout />}>
<<<<<<< HEAD
          <Route path="/All" element={<AllProduct />} />
          <Route path="/AllProduct/List" element={<ListAll />} />
          <Route path="/AllProduct/active" element={<Active />} />
          <Route path="/AllProduct/soldout" element={<Soldout />} />
          <Route path="/AllProduct/reviewing" element={<Reviewing />} />
          <Route path="/AllProduct/unlisted" element={<Unlisted />} />
          <Route path="/banned/action" element={<Banned />} />
=======
          <Route path="/AllProduct" element={<AllProduct />}>
            <Route path="/AllProduct/List" element={<ListAll />} />
          </Route>
>>>>>>> 29871d75b23c79118868c2bd70b8e2744e888c21
        </Route>
        <Route path="/Login" element={<LayoutLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
