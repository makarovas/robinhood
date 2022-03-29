import React from "react";
import logo from "../assets/robinhood.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <div className="logo">
          <img src={logo} alt="logo" width="25" />
        </div>
      </div>
      <div className="header__search">
        <div className="search">
          <div className="search__wrapper">
            <input placeholder="Search" type="text" className="search__input" />
          </div>
        </div>
      </div>
      <div className="header__menu">
        <ul className="menu">
          <li className="">
            <a href="#">FreeStocks</a>
          </li>
          <li className="">
            <a href="#">Portfolio</a>
          </li>
          <li className="">
            <a href="#">Cash</a>
          </li>
          <li className="">
            <a href="#">Messages</a>
          </li>
          <li className="">
            <a href="#">Account</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
