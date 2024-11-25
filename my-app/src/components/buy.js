import React from "react";
import Header from "./Header"; 
import Footer from "./Footer"; 
import "./buy.css"; 

function Buy() {
  return (
    <div className="buy-page">
      <Header /> 
      <div className="buy-content">
        <div className="buy-card">
          <h1>Thanh toán trang in</h1>
          <div className="buy-form-group">
            <label>
              Chọn số trang: <inline className="star">*</inline>
              <input type="number" defaultValue={1} min="1" />
            </label>
          </div>
          <div className="buy-form-group">
            <label>
              Phương thức thanh toán: <inline className="star">*</inline>
              <select>
                <option value="BKPAY">BKPAY</option>
                <option value="MOMO">MOMO</option>
              </select>
            </label>
          </div>
          <div className="brand">
            <img src="/bkpay.png" alt="Logo BKPay" className="brand-logo" />
            <span className="brand-name">BKPay</span>
          </div>
          <hr />
          <div className="summary">
            Tổng số tiền: 5.000 đ
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

export default Buy;
