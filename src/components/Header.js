import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        alt="amazon logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon"></SearchIcon>
      </div>
      <div className="header-nav">
        <div className="header-nav-categories">
          <span className="header-line-one">Hello Guest</span>
          <span className="header-line-two">Sign in</span>
        </div>
        <div className="header-nav-categories">
          <span className="header-line-one">Returns</span>
          <span className="header-line-two">& Orders</span>
        </div>
        <div className="header-nav-categories">
          <span className="header-line-one">Your</span>
          <span className="header-line-two">Prime</span>
        </div>
        <div className="header-nav-basket">
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span className="header-line-two header-basket-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
