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
        <Col span={4}>
          <RootSiderbarLayout />
        </Col>
        <Col span={18}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default RootLayout;
