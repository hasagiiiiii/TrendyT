import React, { useEffect, useState } from "react";

const TestAPI = () => {
  useEffect(() => {
    fetch("http://csmtung2003-001-site1.atempurl.com/api/user/Cookie")
      .then((response) => {
        if (response.headers.set("Set-Cookie")) {
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
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>this is test APi</p>
    </div>
  );
};

export default TestAPI;
