import React from "react";
import "../Styles/Components/HomeSlide.scss";
import img1 from "../assets/home-img-1.png";
import { ReactComponent as ArrowSvg } from "../assets/arrow.svg";

const coffeesList = [
  {
    name: "Pretium fusce",
    description: "Sem integer vitae justo eget",
    price: "$5.99",
    img: img1,
  },
  {
    name: "Pretium fusce 2",
    description: "Sem integer vitae justo eget 3",
    price: "$5.99 2",
    img: img1,
  },
  {
    name: "Pretium fusce 3",
    description: "Sem integer vitae justo eget 3",
    price: "$5.99 3",
    img: img1,
  },
];

const HomeSlide = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <div className="prod-name">
          <span>imperdiet</span>
          <p>Sem integer vitae justo eget</p>
        </div>
        <div className="img-container">
          <img src={img1} alt="" />
          <span className="price">$ 5.99</span>
        </div>
      </div>
      <div className="buttons-list">
        <button className="arrow">
          <ArrowSvg />
        </button>
        {coffeesList.map((coffee, index) => (
          <button key={coffee.name}>0{index + 1}</button>
        ))}
        <button className="arrow arrow-down">
          <ArrowSvg />
        </button>
      </div>
    </div>
  );
};

export default HomeSlide;
