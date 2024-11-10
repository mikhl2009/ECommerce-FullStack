import React, { useState } from "react";
import { ShoppingCart, Search, User, Heart, Menu } from "lucide-react";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <p>Free Shipping on Orders $49+ | Order now!</p>
          <div className="flex items-center gap-4">
            <span>Call Us: +1800 354 4321</span>
            <a href="#" className="hover:text-red-600">
              Log In
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="logo">VAPEZO</div>

            {/* Search Bar */}
            <div className={`search-bar ${isOpen ? "active" : ""}`}>
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search product..."
                  className="search-input"
                />
                <button className="search-button">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="icon-container">
              <Heart className="icon" />
              <div className="cart-icon">
                <ShoppingCart className="icon" />
                <span className="cart-count">0</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="navbar">
        <div className="container">
          <div className="flex items-center">
            <button className="menu-button">
              <Menu className="w-5 h-5" />
              ALL CATEGORIES
            </button>
            <div className={`menu-links ${isOpen ? "active" : ""}`}>
              <a href="#" className="hover:text-gray-200">
                HOME
              </a>
              <a href="#" className="hover:text-gray-200">
                SHOP
              </a>
              <a href="#" className="hover:text-gray-200">
                PRODUCTS
              </a>
              <a href="#" className="hover:text-gray-200">
                BLOG
              </a>
              <a href="#" className="hover:text-gray-200">
                PAGE
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
