import React from "react";
import "./Css/HeaderTwo.css";
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <h3 className="Laundry__Text">Laundry</h3>
      </div>
      <div className="nav">
        <nav> 
          <ul className="navbar">
            <Link to='/'><li>Home</li></Link>
            <li>Career</li>
            <li>UserName</li>
            <Link to='/'><li>Logout</li></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
