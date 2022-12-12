import React from "react";
import "../Styles/Components/About.scss";
import img from "../assets/about-img.jpg";

const About = () => {
  return (
    <section className="about section-pd">
      <div className="container">
        <div className="col-1">
          <h2 className="h2">About us</h2>
          <p className="paragraph">
            Neque egestas congue quisque egestas. Lectus sit amet est placerat
            in egestas erat. Pellentesque elit eget gravida cum sociis natoque.
          </p>
          <p className="paragraph">
            Erat pellentesque adipiscing commodo elit at imperdiet. Amet est
            placerat in egestas erat imperdiet sed euismod nisi.
          </p>

          <a href="/" className="btn">
            See more
          </a>
        </div>
        <img src={img} alt="coffee" className="img-about" />
      </div>
    </section>
  );
};

export default About;
