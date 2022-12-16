import React, { useEffect } from "react";
import "../Styles/Components/Home.scss";
import HomeSlide from "./HomeSlide";
import SocialMedia from "./SocialMedia";
import AOS from "aos";
import "aos/dist/aos.css";

const coffee = ["c", "o", "f", "f", "e", "e"];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section className="home">
      <div className="coffee-shop">
        <div className="coffee">
          <div>
            {coffee.map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
        </div>
        <div className="shop">shop</div>
      </div>
      <div className="home-content">
        <div className="container">
          <div className="content flex" data-aos="fade-up">
            <h1>
              Nulla facilisi <br></br>morbi <span>tempus</span> <br></br>iaculis
              urna
            </h1>
            <HomeSlide />
          </div>
          <div
            className="flex flex-2"
            data-aos-delay="100"
            data-aos="fade-up"
            data-aos-offset="0"
          >
            <ul className="list-values">
              <li>
                <span>imperdiet</span>
                <p>Nec feugiat in fermentum</p>
              </li>
              <li>
                <span>faucibus</span>
                <p>Felis eget velit aliquet sagittis</p>
              </li>
              <li>
                <span>Consequat</span>
                <p>Quis hendrerit dolor magna</p>
              </li>
            </ul>
            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
