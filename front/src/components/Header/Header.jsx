import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const nav = useNavigate();
  return (
    <div className="header">
      <div onClick={() => nav("")} className="logo">
        Logo
      </div>
      <div className="menu">
        <ul>
          <li onClick={() => nav("")}>Home</li>
          <li onClick={() => nav("/questions")}>question</li>
          <li onClick={() => nav("/login")}>login/signup</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
