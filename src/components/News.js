import React, { useEffect } from "react";
import "../Styles/Components/News.scss";
import imgCoffee from "../assets/coffee-news-2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);
  return (
    <section className="section-pd news">
      <div className="container" data-aos="fade-up">
        <h2 className="h2">What's new?</h2>
        <p className="paragraph">Quis hendrerit dolor magna</p>

        <div className="news-container">
          <a href="/" className="news-1">
            <h3>Nibh tellus molestie nunc non</h3>
          </a>
          <a href="/" className="news-2">
            <h3>
              buy 1, <br /> get 2
            </h3>
            <div className="price">
              <div className="old-price">$ 11.98</div>
              <div className="new-price">$ 5.99</div>
            </div>
            <div className="imgs">
              <img src={imgCoffee} alt="" className="img-1" />
              <img src={imgCoffee} alt="" className="img-2" />
            </div>
          </a>
          <a href="/" className="news-3">
            <h3>Morbi blandit cursus </h3>
          </a>
        </div>
        <a href="/" className="btn see-more-btn">
          See more
        </a>
      </div>
    </section>
  );
};

export default News;
