import { Collapse, Typography } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import HeaderReducer from "../../redux/HeaderReducer";
import { LiaShippingFastSolid } from "react-icons/lia";
import { LuClipboardList, LuShoppingBag } from "react-icons/lu";

const PanelStyled = styled(Collapse.Panel)`
  &&& {
    .ant-collapse-item {
      margin-right: 10px;
    }
    .ant-collapse-header {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;

      h3 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        svg {
          margin-right: 10px;
        }
      }
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
const RootSiderbarLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getValueLink = () => {
    dispatch(
      HeaderReducer.actions.addURLSideBar(location.pathname.split("/").pop())
    );
  };
  return (
    <div>
      <Collapse size="small" ghost defaultActiveKey={["1"]}>
        <PanelStyled
          header={
            <h3>
              <LiaShippingFastSolid size={20} /> Vận Chuyển
            </h3>
          }
          key="1"
        >
          <LinkStyled href="/TrendyT/AllProduct" onClick={getValueLink}>
            Quản Lý Vận Chuyển
          </LinkStyled>
          <LinkStyled href="/TrendyT/AddProduct" onClick={getValueLink}>
            Giao Hàng Loạt
          </LinkStyled>
          <LinkStyled>Cài Đặt Vận Chuyển</LinkStyled>
        </PanelStyled>

        <PanelStyled
          header={
            <h3>
              <LuShoppingBag size={20} /> Quản lý đơn hàng
            </h3>
          }
        >
          <LinkStyled href="/TrendyT/AllProduct" onClick={getValueLink}>
            Quản Lý Vận Chuyển
          </LinkStyled>
          <LinkStyled href="/TrendyT/AddProduct" onClick={getValueLink}>
            Giao Hàng Loạt
          </LinkStyled>
          <LinkStyled>Cài Đặt Vận Chuyển</LinkStyled>
        </PanelStyled>
        <PanelStyled
          header={
            <h3>
              <LuClipboardList /> Quản Lý Sản Phẩm
            </h3>
          }
        />
        <PanelStyled header="Quản Lý Sản Phẩm" key="1">
          <LinkStyled href="/trendyt/all">Tất cả sản phẩm</LinkStyled>
          <LinkStyled>Thêm sản phẩm</LinkStyled>
          <LinkStyled href="/trendyt/banned/action">
            Sản phẩm vi phạm
          </LinkStyled>
          <LinkStyled href="/TrendyT/AllProduct" onClick={getValueLink}>
            Tất cả sản phẩm
          </LinkStyled>
          <LinkStyled href="/TrendyT/AddProduct" onClick={getValueLink}>
            Thêm sản phẩm
          </LinkStyled>
          <LinkStyled>Sản phẩm vi phạm</LinkStyled>
          <LinkStyled>Cài đặt sản phẩm</LinkStyled>
        </PanelStyled>
      </Collapse>
    </div>
  );
};

export default RootSiderbarLayout;
