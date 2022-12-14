import React from "react";
import "../Styles/Components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <a href="/" className="logo">
          Coffee
        </a>
        <ul>
          <li>
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">The store</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
        </ul>
        <a href="/" className="btn">
          Start shopping
        </a>
      </nav>
    </header>
  );
};

export default Header;
