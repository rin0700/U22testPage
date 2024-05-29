import React from "react";
import { Link } from "react-router-dom";
import "../style/headerStyle.css";

const Header = () => {
  return (
    <header>
      <div class="header-logo">
        <Link to="/">
          <img src="../icon.png" alt="Cafe Logo" class="logo-image" />
        </Link>
        <h1 id="page-top" class="font-1">
          Bad Tdequila
        </h1>
      </div>
      <nav>
        <ul class="menu-bar">
          <Link to="/login">
            <li>
              <h2 class="font-2">
                <a href="#home">Login</a>
              </h2>
            </li>
          </Link>
          <Link to="/netshop">
            <li>
              <h2 class="font-2">
                <a>NetShop</a>
              </h2>
            </li>
          </Link>
          <Link to="/inquire">
            <li>
              <h2 class="font-2">
                <a>Inquire</a>
              </h2>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
