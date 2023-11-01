import React from "react";
import { Outlet } from "react-router-dom";
import RootHeader from "../component/componentLayout/RootHeader";
import { Row, Col } from "antd";
import RootSiderbarLayout from "../component/RootSidebarLayout";
const RootLayout = () => {
  const value = async () => {
    await fetch(
      "http://csmtung2003-001-site1.atempurl.com/api/LoginUser/v1/GetTestCookie"
    )
      .then((res) => res)
      .then((data) => console.log(data));
  };
  value();
  return (
    <div>
      <RootHeader />
      <Row style={{ paddingTop: "70px" }}>
        <Col span={4} style={{ background: "#fff" }}>
          <RootSiderbarLayout />
        </Col>
        <Col span={20}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default RootLayout;
