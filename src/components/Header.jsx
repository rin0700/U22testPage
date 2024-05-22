import React from "react";
import "../style/headerStyle.css";

const Header = () => {
  return (
    <header>
      <div class="header-logo">
        {/* ロゴ画像を追加 */}
        <a href="http://localhost//Cafe%20dolceCalmato/index.php">
          {/* ロゴがクリックされた時のリンク先を指定 */}
          <img src="../cafe_logo.png" alt="Cafe Logo" class="logo-image" />
        </a>

        <h1 id="page-top" class="font-1">
          Bad Tdequila
        </h1>
      </div>

      <nav>
        <ul class="menu-bar">
          <li>
            <h2 class="font-2">
              <a href="#home">Home</a>
            </h2>
          </li>
          <li>
            <h2 class="font-2">
              <a href="http://localhost//Cafe%20dolceCalmato/index.php#menu">
                Menu
              </a>
            </h2>
          </li>
          <li>
            <h2 class="font-2">
              <a href="http://localhost//Cafe%20dolceCalmato/TartOrder.php">
                Shop
              </a>
            </h2>
          </li>
          <li>
            <h2 class="font-2">
              <a href="#contact">Contact</a>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
