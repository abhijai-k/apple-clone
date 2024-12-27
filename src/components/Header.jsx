import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import cart from "../assets/cart.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Apple Logo" />
      </div>
      <nav>
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Store</Link></li>
          <li><Link to="/">Mac</Link></li>
          <li><Link to="/">iPad</Link></li>
          <li><Link to="/">iPhone</Link></li>
          <li><Link to="/">Watch</Link></li>
          <li><Link to="/">AirPods</Link></li>
          <li><Link to="/">TV & Home</Link></li>
          <li><Link to="/">Entertainment</Link></li>
          <li><Link to="/">Accessories</Link></li>
          <li><Link to="/">Support</Link></li>
        </ul>
      </nav>
      <div className="header-icons">
        <div className="search">
          <img src={search} alt="Search" />
        </div>
        <div className="cart">
          <img src={cart} alt="Cart" />
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
}

export default Header;
