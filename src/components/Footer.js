import React from "react";
import "../Styles/Components/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <section className="coffee">
          <div className="logo">Coffee</div>
          <p>Scelerisque felis imperdiet proin fermentum leo. </p>
        </section>
        <section className="menu">
          <h2>Menu</h2>
          <nav>
            <a href="/">Home</a>
            <a href="/">Products</a>
            <a href="/">The store</a>
            <a href="/">Contact</a>
            <a href="/">News</a>
          </nav>
        </section>
        <section className="address">
          <h2>Visit us</h2>
          <address>
            <span>Lorem - IP</span>
            <span>City - District</span>
            <span>+00 1234 5678</span>
          </address>
        </section>
      </div>
      <a href="/" className="by">
        By Ariane Morelato
      </a>
    </footer>
  );
};

export default Footer;
