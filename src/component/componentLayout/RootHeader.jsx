import React, { useState } from "react";
import UserInforImg from "../../assest/userInfo.png";
import {
  AiOutlineMenu,
  AiOutlineGift,
  AiOutlineBarChart,
  AiFillSetting,
  AiOutlineBell,
} from "react-icons/ai";
import { BiStore, BiImage } from "react-icons/bi";
import { BsWallet2, BsCashCoin } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosLogOut } from "react-icons/io";
import { SiHomeassistant } from "react-icons/si";
import { Link } from "react-router-dom";
import "../../css/RootHeader.css";
const RootHeader = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="header-content">
      <div className="header-logo">
        {/* img */}
        <h2>TrendyTTT</h2>
      </div>
      <div className="content-box">
        <h2>Kênh Người Bán</h2>
      </div>
      <div
        className={`trendyTTT-popover ${isHover ? "hovered" : ""}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="account-info-box">
          <div className="account-info">
            <img src={UserInforImg} alt="" />
            <div className="account-name">Trung Liver</div>
          </div>
        </div>
        <div className="menu-drop-down-popover">
          <ul className="content-popover">
            <li>
              <Link to="/">
                <BiImage />
                Hồ sơ shop
              </Link>
            </li>
            <li>
              <Link to="/">
                <IoIosLogOut />
                Đăng Xuất
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-action">
        <div className="trendyTTT-popover">
          <div className="drop-down-box">
            <div className="dropdown-button">
              <AiOutlineMenu />
            </div>
            <ul className="dropdown-menu">
              <li className="category-item">
                <Link to="">
                  <div style={{ background: "blue" }} className="icons">
                    <AiOutlineGift />
                  </div>
                  <p>Sản Phẩm</p>
                </Link>
              </li>
              <li className="category-item">
                <Link to="">
                  <div style={{ background: "green" }} className="icons">
                    <TfiMenuAlt />
                  </div>
                  <p>Danh Mục Của Shop</p>
                </Link>
              </li>
              <li className="category-item">
                <Link to="">
                  <div style={{ background: "#ee4d2d" }} className="icons">
                    <BiStore />
                  </div>
                  <p>Đơn Hàng</p>
                </Link>
              </li>
              <li className="category-item">
                <Link to="">
                  <div style={{ background: "#1f88ac" }} className="icons">
                    <SiHomeassistant />
                  </div>
                  <p>Kênh Marketting</p>
                </Link>
              </li>
              <li className="category-item">
                <Link to="">
                  <div style={{ background: "orange" }} className="icons">
                    <BsCashCoin />
                  </div>
                  <p>Doanh thu</p>
                </Link>
              </li>
              <li className="category-item">
                <Link to="">
                  <div style={{ background: "#165064" }} className="icons">
                    <BsWallet2 />
                  </div>
                  <p>Số Dư TK Shoppe</p>
                </Link>
              </li>
              <li className="category-item">
                <Link to="">
                  <div style={{ background: "#0882aa" }} className="icons">
                    <AiOutlineBarChart />
                  </div>
                  <p>Phân Tích Bán Hàng</p>
                </Link>
              </li>
              <li className="category-item">
                <Link to="">
                  <div style={{ background: "#505353" }} className="icons">
                    <AiFillSetting />
                  </div>
                  <p>Thiết Lập Shop</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="Notification">
          <div className="notifi-button">
            <AiOutlineBell />
            <p className="quantity-notifi">1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootHeader;
