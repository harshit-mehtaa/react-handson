import React from "react";
import logo from "../logo.svg";
import "./ReactHandson.css";

function Header() {
  return (
    <div className="header">
      <a href="#" className="menu-icon">
        <div></div>
        <div></div>
        <div></div>
      </a>
      <button className="app-name">
        <img src={logo} className="App-logo" alt="logo" />
        <span>React-Handson</span>
      </button>
    </div>
  );
}

export default Header;
