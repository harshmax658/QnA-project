import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>question</li>
          <li>login/signup</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
