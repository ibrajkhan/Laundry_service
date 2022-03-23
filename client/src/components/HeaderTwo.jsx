import React from "react";
import "./Css/HeaderTwo.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <h3 className="Laundry__Text">Laundry</h3>
      </div>
      <div className="nav">
        <nav>
          <ul className="navbar">
            <li>Home</li>
            <li>Career</li>
            <li>UserName</li>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
