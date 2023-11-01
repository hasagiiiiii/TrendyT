import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../../css/RootProduct.css";

export default function AllProduct() {
  const navigate = useNavigate();
  return (
    <div className="product-content">
      <div className="product-filter-cart">
        <form className="filter-form">
          <div className="filter-form-box">
            <div className="filter-col-left">
              <div className="product-form-item">
                <input placeholder="...." />
              </div>
              <div className="product-form-item">
                <label>Kho hàng</label>
                <input placeholder="Tối thiểu" />
                <input placeholder="Tối đa" />
              </div>
            </div>
            <div className="filter-col-right">
              <div className="product-form-item item-top">
                <label>Ngành hàng</label>
                <input placeholder="Chọn" />
              </div>
              <div className="product-form-item">
                <label>Doanh số</label>
                <input placeholder="Tối thiểu" />
                <input placeholder="Tối đa" />
              </div>
            </div>
          </div>
          <div className="submit-form-box">
            <button>Tìm</button>
            <button>Nhập Lại</button>
          </div>
        </form>
      </div>
      <div className="product-list-main">
        <div className="product-tabs-nav">
          <ul>
            <li>
              <Link
                to="/AllProduct/List"
                onClick={() => navigate("/AllProduct/List")}
              >
                Tất cả
              </Link>
              {/* <div onClick={() => navigate("/AllProduct/List")}>Tất cả</div> */}
            </li>
            <li>
              <Link to="/list/active">Đang hoạt động</Link>
            </li>
            <li>
              <Link to="/list/soldout">Hết hàng</Link>
            </li>
            <li>
              <Link to="/list/reviewing">Chờ duyệt</Link>
            </li>
            <li>
              <Link to="/banned/action">Vi phạm</Link>
            </li>
            <li>
              <Link to="/list/unlisted">Đã ẩn</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
}