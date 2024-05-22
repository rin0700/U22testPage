import React from "react";
import "../style/menuStyle.css";

const Menu = () => {
  return (
    <div>
      <h2>-店長おすすめ商品-</h2>
      <div className="menu-container">
        <div className="menu-item">
          <div className="image-wrapper">
            <img src="../alc1.jpg" alt="Alc1" />
            <p>オレンジカクテル</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="image-wrapper">
            <img src="../alc2.jpg" alt="Alc2" />
            <p>なぜかHiになる飲み物</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="image-wrapper">
            <img src="../alc3.jpg" alt="Alc3" />
            <p>スピリタス</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="image-wrapper">
            <img src="../alc4.jpg" alt="Alc4" />
            <p>ニンニクテキーラ</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="image-wrapper">
            <img src="../menu1.jpg" alt="Menu1" />
            <p>ハムハムバーガー</p>
          </div>
        </div>
        <div className="menu-item">
          <div className="image-wrapper">
            <img src="../menu2.jpg" alt="Menu2" />
            <p>フィッシュ&&チップス</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
