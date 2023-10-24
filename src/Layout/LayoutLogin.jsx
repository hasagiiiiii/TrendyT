import React, { useState } from "react";
import HeaderLayoutLogin from "../component/componentLayout/HeaderLayoutLogin";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import Logo from "../assest/logo2.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
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
    email_User: "",
    pass_User: "",
  };
  const [formValue, setFormValue] = useState(initalFormValue);

  const handleChangeFormValue = (e) => {
    setFormValue((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async () => {
    try {
      await fetch(
        "http://csmtung2003-001-site1.atempurl.com/api/LoginUser/v1/LoginUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValue),
          credentials: "include",
        }
      ).then((response) => {
        if (response.headers.has("Set-Cookie")) {
          // Lấy giá trị của header Set-Cookie
          const cookieHeader = response.headers.has("Set-Cookie");

          // Chia nhỏ các phần của cookie nếu có nhiều cookie
          const cookieParts = cookieHeader.split(";");

          // Lưu từng phần vào cookie storage

          cookieParts.forEach((part) => {
            // Tách tên và giá trị của cookie
            console.log(part);
            const [name, value] = part.trim().split("=");
            console.log(cookieParts);
            // Lưu cookie vào cookie storage
            document.cookie = `${name}=${value};path="/Hello`;
          });

          // Hiển thị thông báo hoặc thực hiện các bước tiếp theo sau khi lưu cookie
          console.log("Cookie đã được lưu thành công!");
        } else {
          console.log("Không có cookie được gửi từ backend.");
        }
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
              name="email_User"
              value={formValue.username}
              onChange={(e) => handleChangeFormValue(e)}
            />
            <InputStyled
              placeholder="Enter your Password"
              prefix={<LockOutlined />}
              size="large"
              name="pass_User"
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
