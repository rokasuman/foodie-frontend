import React, { useContext, useState } from "react";
import "./navbar.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({setLogin}) => {
  const [menu, setMenu] = useState("menu");
  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/"><img src={assets.logo} alt="Logo" className="logo" /></Link>

      {/* Menu Items */}
      <ul className="navbar-menu">
        <Link to= "/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          Home
        </Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>
          Menu
        </a>
        <a href="#app-download" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          Contact Us
        </a>
        <a href=" #footer" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          Mobile App
        </a>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        {/* Search */}
        <div className="navbar-search-icon">
          <img src={assets.search_icon} alt="Search" />
        </div>

        {/* Basket with dot */}
        <div className="navbar-search-icon">
          <Link to='/cart'> <img src={assets.basket_icon} alt="Basket" /></Link>
         
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {/* Button */}
        <button onClick={()=>setLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
