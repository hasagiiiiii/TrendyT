import React from "react";
import Logo from "../../assest/logo1.png";
import styled from "styled-components";
import { Typography } from "antd";
const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 2px black;
  .help-content {
    color: red;
  }
`;
const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 1200px;
`;
const LinkStyled = styled(Typography.Link)`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 150px;
  color: black;
  .logo {
    width: 200px;
    height: 150px;
    object-fit: cover;
    padding-top: 20px;
  }
`;
const HeaderLayoutLogin = () => {
  return (
    <ContainerStyled>
      <HeaderStyled>
        <div className="header-logo-box">
          <LinkStyled href="/">
            <img src={Logo} className="logo" alt="" />
            <h1>Đăng nhập</h1>
          </LinkStyled>
        </div>
        <div className="header-help-box">
          <LinkStyled href="/" className="help-content">
            Bạn cần giúp đỡ ?
          </LinkStyled>
        </div>
      </HeaderStyled>
    </ContainerStyled>
  );
};

export default HeaderLayoutLogin;
