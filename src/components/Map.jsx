import React from "react";
import "../style/mapStyle.css";

const Map = () => {
  return (
    <div className="map-container">
      <div className="text">
        <h2>アクセス</h2>
        <p>
          〒951-8063 新潟県新潟市中央区
          <br />
          古町7番町935番 NSGスクエア7F
        </p>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1573.653330463697!2d139.04223840497076!3d37.923265771944045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff4c99ea6a6bf6b%3A0xf962b0d01da5751d!2z5paw5r2f44Kz44Oz44OU44Ol44O844K_5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1716398371320!5m2!1sja!2sjp"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h2>Created by 電子遊戯部</h2>
    </div>
  );
};

export default Map;
