import React, { useState } from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-flex">
          {/* Mobile Menu Button */}
          <button
            className="menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Which Manuka Button */}
          <div className="which-manuka">
            <span>WHICH MANUKA IS FOR ME?</span>
          </div>

          {/* Logo */}
          <div className="logo">
            <img
              src="/images/img_link.svg"
              alt="New Zealand Honey Co. Logo"
            />
          </div>

          {/* Navigation Menu */}
          <nav className={`nav ${menuOpen ? "show" : ""}`}>
            <button className="nav-link">Shop</button>
            <button className="nav-link">Explore</button>
            <button className="nav-link">About</button>
            <button className="nav-link">Rewards</button>
            <button className="nav-link">Contact</button>
          </nav>

          {/* Right Menu Items */}
          <div className="right-menu">
            {/* Action Icons */}
            <div className="icons">
              <button>
                <img
                  src="/images/img_link_blue_gray_900.svg"
                  alt="Search"
                  className="search-icon"
                />
              </button>
              <button>
                <img
                  src="/images/img_details_modal.svg"
                  alt="Account"
                  className="account-icon"
                />
              </button>
              <div className="cart">
                <button>
                  <img src="/images/img_svg.svg" alt="Cart" className="cart-icon" />
                  <span className="cart-count">0</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
