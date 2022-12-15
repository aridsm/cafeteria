import React, { useEffect, useRef, useState } from "react";
import "../Styles/Components/Header.scss";
import { ReactComponent as MenuSvg } from "../assets/menu.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const btnMenuRef = useRef();

  const toggleMenuHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const checkElementClicked = (e) => {
      const didClickOutsideElement =
        e.target !== btnMenuRef.current &&
        !btnMenuRef.current.contains(e.target);

      if (didClickOutsideElement) setMenuOpen(false);
    };

    window.addEventListener("click", checkElementClicked);
    return () => {
      window.removeEventListener("click", checkElementClicked);
    };
  }, []);

  return (
    <header className="header">
      <nav className="container">
        <a href="/" className="logo">
          Coffee
        </a>
        <button
          title="abrir menu"
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={toggleMenuHandler}
          ref={btnMenuRef}
        >
          <MenuSvg />
        </button>
        <ul className={menuOpen ? "active" : ""}>
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
