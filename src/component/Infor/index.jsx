import React, { useRef } from "react";
import { RiImageAddFill } from "react-icons/ri";
import "./index.css";
const Infor = () => {
  const inpRef = useRef(null);
  const handleFocusInput = () => {
    inpRef.current.click();
  };
  return (
    <div className="infor_basic">
      <div className="title-content">
        <h2 className="title">Thông tin cơ bản</h2>
      </div>
      <form action="" className="valueInfor">
        <div className="form_inp">
          <div className="title_inp">
            <p>Hình ảnh sản phẩm</p>
          </div>
          <div className="input-Value">
            <label htmlFor="img_product">Hình ảnh tỉ lệ 1:1</label>
            <button
              type="button"
              onClick={handleFocusInput}
              className="focus_input"
            >
              <div className="btn-content">
                <div className="icons">
                  <RiImageAddFill fill="#ee4d2d" size={20} />
                </div>
                <p>
                  Thêm hình ảnh (<span>0</span>/9)
                </p>
              </div>
            </button>
            <input
              style={{ display: "none" }}
              type="file"
              name="img_product"
              ref={inpRef}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Infor;
