import React from "react";
import logo from "./assets/logo.svg";

import "./NavBar.scss";

export function NavBar() {
  return (
    <div className="nav">
      <div id="nav-left">
        <img src={logo} alt="logo" />
      </div>
      <button
        id="about-button"
        onClick={() => console.log("about page clicked")}
      >
        about
      </button>
    </div>
  );
}
