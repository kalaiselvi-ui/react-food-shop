import React from "react";
import logo from "../../images/logo.png";
import "./style.css";

const Logo = () => {
  return (
    <div className="header-content_logo">
      <div>
        <img src={logo} alt="logo" />
        <span>
          <b>Taste</b>
        </span>
      </div>
      <p>
        <b>Restaurant & BBQ</b>
      </p>
    </div>
  );
};

export default Logo;
