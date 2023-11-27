import React, { useRef, useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { TbFrameOff } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import "./index.css";
const Infor = () => {
  const [imageList, setListImg] = useState([]);
  const inpRef = useRef(null);
  const handleFocusInput = () => {
    inpRef.current.click();
  };
  const handleChangeImg = () => {
    const lstImg = inpRef.current.files;
    if (lstImg.length > 0) {
      const convertImg = [...lstImg].map((img) => URL.createObjectURL(img));
      setListImg((pre) => [...pre, ...convertImg]);
    }
  };
  const handleRemoveImg = (indexRemove) => {
    console.log(indexRemove);
    let Update = [...imageList];
    Update.splice(indexRemove, 1);

    console.log(Update);
    setListImg(Update);
    console.log(imageList);
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
            <div className="showImg">
              <div className="list-img">
                {imageList.map((image, index) => {
                  if (index === 0) {
                    return (
                      <div key={index} className="imgItem">
                        <img
                          src={image}
                          style={{
                            width: "100px",
                            height: "78px",
                            marginRight: "5px",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                        <p className="titleImg">
                          <span>*</span>Ảnh bìa
                        </p>
                        <div className="relative">
                          <div className="img-action">
                            <div className="action-frame">
                              <TbFrameOff />
                            </div>
                            <div
                              onClick={() => handleRemoveImg(index)}
                              className="action-trash"
                            >
                              <FaRegTrashAlt />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div key={index} className="imgItem">
                      <img
                        src={image}
                        style={{
                          width: "100px",
                          height: "78px",
                          marginRight: "5px",
                          objectFit: "cover",
                        }}
                        alt=""
                      />

                      <div className="relative">
                        <div className="img-action">
                          <div className="action-frame">
                            <TbFrameOff />
                          </div>
                          <div
                            onClick={() => handleRemoveImg(index)}
                            className="action-trash"
                          >
                            <FaRegTrashAlt />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
                    Thêm hình ảnh (<span>{imageList.length}</span>/9)
                  </p>
                </div>
              </button>
            </div>
            <input
              style={{ display: "none" }}
              type="file"
              name="img_product"
              accept=".jpg, .jpeg"
              multiple
              onChange={handleChangeImg}
              ref={inpRef}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Infor;
