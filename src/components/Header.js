import React from "react";
import logo from "../logo.svg";
import "./ReactHandson.css";

function Header() {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} className="App-logo" alt="logo" />
        <span>React-Handson</span>
      </a>
    </div>
  );
}

export default Header;
