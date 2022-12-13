import React from "react";
import "../Styles/Components/Subscribe.scss";

const Subscribe = () => {
  return (
    <section className="section-pd subscribe">
      <div className="container">
        <h2 className="h2">Quis hendrerit dolor magna</h2>
        <form>
          <label>Your email</label>
          <input type="email" placeholder="your email here" />
          <button className="btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
