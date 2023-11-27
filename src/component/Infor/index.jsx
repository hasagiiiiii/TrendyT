import React, { useRef } from "react";
import { RiImageAddFill } from "react-icons/ri";
import "./index.css";
import { Link } from "react-router-dom";
import { Checkbox , Input} from "antd";
import { MaterialSymbolsLightYoutubeActivity } from "../../icons/youtube_activity";
const Infor = () => {
  const [lengthInput,setLengthInput] = React.useState(null)
  const inpRef = useRef(null);
  const handleFocusInput = () => {
    inpRef.current.click();
  };
  const onChangeInput = (e)=>{
    setLengthInput(e.target.value.length)
    console.log(lengthInput)
  }
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
            <div className="checkbox_ratio">
              {/* <input type="checkbox" name="ratio" /> */}
              <Checkbox defaultChecked={false}   />
              <label htmlFor="ratio">Hình ảnh tỉ lệ 3:4 <span>Giúp sản phẩm tỷ lệ với hình ảnh 3:4 <Link to="#">Xem ví dụ</Link></span></label>
            </div>
          </div>
        </div>
        <div className="form_inp">
          <div className="title_inp">
            <p>Hình ảnh sản phẩm</p>
          </div>
          <div className="input-Value_second">
            <button
              type="button"
              onClick={handleFocusInput}
              className="focus_input"
            >
              <div className="btn-content">
                <div className="icons">
                  {/* <RiImageAddFill fill="#ee4d2d" size={20} /> */}
                  <MaterialSymbolsLightYoutubeActivity/>
                  
                </div>
                <p>
                  Thêm video 
                </p>
              </div>
            </button>
            <input
              style={{ display: "none" }}
              type="file"
              name="video_product"
              ref={inpRef}
            />
           <ul className="list_detail">
            <li>Kích thước tối đa 30MB, độ phân giải không vượt quá 1280px x 1280px</li>
            <li>Độ dài:10s-60s</li>
            <li>Định dạng: MP4 (không hỗ trợ vp9)</li>
            <li>Lưu ý: sản phẩm có thể hiển thị trong khi video đang được xử lý. Video sẽ tự động hiển thị sau khi đã xử lý thành công.</li>
           </ul>
          </div>
        </div>
        <div className="form_inp">
          <div className="title_inp">
            <p>Tên sản phẩm</p>
          </div>
          <div className="input-Value_third">
            <Input 
            name="name_product"
             onChange={(e)=>onChangeInput(e)} 
             placeholder="Nhập vào"
             size="middle"
             status={lengthInput<10 || lengthInput!=null ?"error" : ""}
             />
             <label htmlFor="name_product">{lengthInput===null?"0":lengthInput}/20</label>
             {lengthInput === 0 ? <span>Không được để ô trống </span>:lengthInput<10? <span>Tên sản phẩm của bạn quá ngắn. Vui lòng nhập ít nhất 10 ký tự</span>:""}
          </div>
        </div>

      </form>
    </div>
  );
};

export default Infor;