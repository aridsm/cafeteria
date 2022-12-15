import React, { useState } from "react";
import "../Styles/Components/HomeSlide.scss";
import img1 from "../assets/home-img-1.png";
import img2 from "../assets/img-home-2.webp";
import img3 from "../assets/img-home-3.webp";
import { ReactComponent as ArrowSvg } from "../assets/arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const coffeesList = [
  {
    name: "Pretium fusce",
    description: "Sem integer vitae justo eget",
    price: "$ 7.99",
    img: img1,
  },
  {
    name: "Pretium fusce 2",
    description: "Sem integer vitae justo eget 3",
    price: "$ 12.49",
    img: img2,
  },
  {
    name: "Pretium fusce 3",
    description: "Sem integer vitae justo eget 3",
    price: "$ 9.99",
    img: img3,
  },
];

const HomeSlide = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlideHandler = () => {
    swiper.slideNext();
  };

  const prevSlideHandler = () => {
    swiper.slidePrev();
  };

  const activeSlide = (index) => {
    swiper.slideTo(index);
  };

  return (
    <div className="slide">
      <Swiper
        slidesPerView={1}
        className="slider"
        onSwiper={(s) => {
          setSwiper(s);
        }}
        onActiveIndexChange={(s) => {
          setActiveIndex(s.activeIndex);
        }}
        breakpoints={{
          910: {
            direction: "vertical",
          },
        }}
      >
        {coffeesList.map((coffee) => (
          <SwiperSlide className="slide-content" key={coffee.name}>
            <div className="prod-name">
              <span>{coffee.name}</span>
              <p>{coffee.description}</p>
            </div>
            <div className="img-container">
              <img src={coffee.img} alt="" />
              <span className="price">{coffee.price}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="buttons-list">
        <button
          className="arrow arrow-prev"
          onClick={prevSlideHandler}
          title="produto anterior"
        >
          <ArrowSvg />
        </button>
        {coffeesList.map((coffee, index) => (
          <button
            key={coffee.name}
            onClick={() => activeSlide(index)}
            className={`${activeIndex === index ? "active" : ""} btn-slide`}
          >
            0{index + 1}
          </button>
        ))}
        <button
          className="arrow arrow-next"
          onClick={nextSlideHandler}
          title="próximo produto"
        >
          <ArrowSvg />
        </button>
      </div>
    </div>
  );
};

export default HomeSlide;
