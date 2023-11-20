import React, { useState } from "react";
import HeaderLayoutLogin from "../component/componentLayout/HeaderLayoutLogin";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import Logo from "../assest/logo2.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import { useNavigate } from "react-router-dom";
const ContainerContent = styled.div`
  background: aqua;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-content {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
const FormStyled = styled(Form)`
  background-color: white;
  height: 480px;
  width: 400px;
  display: flex;
  justitfy-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputStyled = styled(Input)`
  width: 70%;
  margin-top: 20px;
`;
const ButtonStyled = styled(Button)`
  width: 70%;
  background-color: aqua;
  color: black;
  margin-top: 20px;
`;
const LayoutLogin = () => {
  const initalFormValue = {
    account: "",
    password: "",
  };
  const [formValue, setFormValue] = useState(initalFormValue);

  const handleChangeFormValue = (e) => {
    setFormValue((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  // const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      await fetch(
        "http://csmtung2003-001-site1.atempurl.com/api/login/v1/Login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValue),
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <HeaderLayoutLogin />
      <ContainerContent className="box-content-login">
        <div className="box-content">
          <div className="Logo">
            <img src={Logo} alt="" />
            <h1>
              Xu Hướng Trẻ
              <br />
              Nền tảng thương mại điện tử
            </h1>
          </div>
          <FormStyled onFinish={onSubmit}>
            <h1>Đăng nhập</h1>
            <InputStyled
              placeholder="Enter your username or Email"
              prefix={<UserOutlined />}
              size="large"
              name="account"
              value={formValue.username}
              onChange={(e) => handleChangeFormValue(e)}
            />
            <InputStyled
              placeholder="Enter your Password"
              prefix={<LockOutlined />}
              size="large"
              name="password"
              value={formValue.password}
              onChange={(e) => handleChangeFormValue(e)}
            />

            <ButtonStyled htmlType="submit">Đăng nhập</ButtonStyled>
          </FormStyled>
        </div>
      </ContainerContent>
    </div>
  );
};

export default LayoutLogin;
