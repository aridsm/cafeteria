import React, { useEffect } from "react";
import "../Styles/Components/Subscribe.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <section className="section-pd subscribe">
      <div className="container" data-aos="fade-up">
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
