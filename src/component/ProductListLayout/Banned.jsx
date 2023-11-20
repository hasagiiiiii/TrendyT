import React from "react";
import ListTable from "./ListTable";

const Banned = () => {
  return (
    <div className="list-panel">
      <div className="list-all">
        <div className="prodcut-list-header">
          <div className="product-list-section">
            <div className="title-box">
              <div className="page-title"> 1 sản phẩm </div>
              <div className="percent-des">
                Có thể đăng tải thêm 1000 sản phẩm
                <i className="bi bi-question-circle"></i>
              </div>
            </div>
            <div className="action-box">
              <button>Lịch sử vi phạm</button>
            </div>
          </div>
        </div>
        <ListTable />
      </div>
    </div>
  );
};

export default Banned;
