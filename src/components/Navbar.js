import React, { Component } from "react";
import logo from "../img/logo.svg";
import "./ReactHandson.css";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="nav fixed-top nav-expand-md">
          <div className="float-left">
            <div
              className="button-collapse"
              onClick={this.props.toggleSlideOut}
            >
              <i className="fa fa-bars"></i>
              <span className="sr-only" aria-hidden="true">
                Toggle side navigation
              </span>
            </div>
          </div>
          <div>
            <button className="app-name">
              <a href="/">
                <img src={logo} className="App-logo" alt="logo" />
                <span>React Hands-on</span>
              </a>
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
