import React from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import "./print.css"; 

function Print() {
  return (
    <div className="print-page">
      <Header /> 
      <div className="print-content">
        <div className="print-card">
          <h1>In tài liệu</h1>
          <h3>Upload file tài liệu: <inline className="star">*</inline></h3> 
          <div className="upload-box">
            Thêm các tập tin bằng cách kéo thả.
          </div>
          <div className="print-form-group">
            <label>
              Chọn máy in: <inline className="star">*</inline>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
            <label>
              Chọn cơ sở: <inline className="star">*</inline>
              <select>
                <option value="Di An">Dĩ An</option>
                <option value="Sai Gon">Sài Gòn</option>
              </select>
            </label>
          </div>
          <hr />
          <h3>Cấu hình file in: <inline className="star">*</inline></h3>
          <div className="print-form-group">
            <label>
              Kích cỡ giấy: <inline className="star">*</inline>
              <select>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
                <option value="A4">A4</option>
              </select>
            </label>
            <label>
              In 1 mặt/2 mặt: <inline className="star">*</inline>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </label>
          </div>
          <div className="print-form-group">
            <label>
              Số bản copy: <inline className="star">*</inline>
              <input type="number" defaultValue={1} min="1" />
            </label>
            <label>
              Số trang/mặt: <inline className="star">*</inline>
              <input type="number" defaultValue={1} min="1" />
            </label>
          </div>
          <div className="print-form-group">
            <label>
              Trang in: <inline className="star">*</inline>
              <select>
                <option value="odd">In trang số lẻ</option>
                <option value="even">In trang số chẵn</option>
              </select>
            </label>
            <label>
              Layout: <inline className="star">*</inline>
              <select>
                <option value="landscape">Ngang</option>
                <option value="portrait">Dọc</option>
              </select>
            </label>
          </div>
          <hr />
          <div className="summary">
            Tổng cộng số trang: 28
          </div>
          <div className="button-group">
            <button className="btn-complete">Hoàn tất</button>
            <button className="btn-back">Quay lại</button>
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default Print;
