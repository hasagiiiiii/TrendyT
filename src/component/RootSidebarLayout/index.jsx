import { Collapse, Typography } from "antd";
import React from "react";
import styled from "styled-components";

const RootSiderbarLayout = () => {
  const PanelStyled = styled(Collapse.Panel)`
    &&& {
      .ant-collapse-item {
        margin-right: 10px;
      }
      .ant-collapse-header {
        display: flex;
        flex-direction: row-reverse;
      }
    }
  `;
  const LinkStyled = styled(Typography.Link)`
    &&& {
      display: block;
      padding: 5px 10px;
      color: black;
      &:hover {
        color: red;
      }
    }
  `;
  return (
    <div>
      <Collapse size="small" ghost defaultActiveKey={["1"]}>
        <PanelStyled header="Quản Lý Sản Phẩm" key="1">
          <LinkStyled href="/testApi">Tất cả sản phẩm</LinkStyled>
          <LinkStyled>Thêm sản phẩm</LinkStyled>
          <LinkStyled>Sản phẩm vi phạm</LinkStyled>
          <LinkStyled>Cài đặt sản phẩm</LinkStyled>
        </PanelStyled>
      </Collapse>
    </div>
  );
};

export default RootSiderbarLayout;
