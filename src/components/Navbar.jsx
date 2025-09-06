import React, { useState } from "react";
import "./navbar.css";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="logo" />

      {/* Menu Items */}
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          Home
        </li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          Menu
        </li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          Contact Us
        </li>
        <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          Mobile App
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        {/* Search */}
        <div className="navbar-search-icon">
          <img src={assets.search_icon} alt="Search" />
        </div>

        {/* Basket with dot */}
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" />
          <div className="dot"></div>
        </div>

        {/* Button */}
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
