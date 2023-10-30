import React from "react";
import { Outlet } from "react-router-dom";
import RootHeader from "../component/componentLayout/RootHeader";
import { Row, Col } from "antd";
import RootSiderbarLayout from "../component/RootSidebarLayout";
const RootLayout = () => {
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
