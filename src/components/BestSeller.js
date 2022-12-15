import React, { useState } from "react";
import "../Styles/Components/BestSeller.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/prod1.webp";
import img2 from "../assets/prod2.webp";
import img3 from "../assets/prod3.webp";
import img4 from "../assets/prod4.webp";
import img5 from "../assets/prod5.webp";
import img6 from "../assets/prod6.webp";
import img7 from "../assets/prod7.webp";
import img8 from "../assets/prod8.webp";
import "swiper/css";
import { ReactComponent as ArrowSvg } from "../assets/arrow.svg";

const products = [
  {
    name: "Cras sed",
    description: "Feugiat nibh sed pulvinar proin",
    price: "$ 12.99",
    cal: "185kcal",
    img: img1,
  },
  {
    name: "Consequat",
    description: "Nibh tellus molestie nunc non",
    price: "$ 8.95",
    cal: "185kcal",
    img: img2,
  },
  {
    name: "Sollicitudin",
    description: "Id porta nibh venenatis cras sed",
    price: "$ 5.49",
    cal: "185kcal",
    img: img3,
  },
  {
    name: "Amet",
    description: "Et pharetra pharetra massa massa ultricies",
    price: "$ 12.99",
    cal: "185kcal",
    img: img4,
  },
  {
    name: "Blandit",
    description: "Feugiat nibh sed pulvinar proin",
    price: "$ 8.52",
    cal: "185kcal",
    img: img5,
  },
  {
    name: "Venenatis",
    description: "Habitant morbi tristique senectus",
    price: "$ 8.99",
    cal: "185kcal",
    img: img6,
  },
  {
    name: "Ultricies",
    description: "Vel pretium lectus quam id leo",
    price: "$ 14.25",
    cal: "185kcal",
    img: img7,
  },
  {
    name: "Turpis",
    description: "Diam sit amet nisl suscipit adipiscing",
    price: "$ 11.59",
    cal: "185kcal",
    img: img8,
  },
];

const BestSeller = () => {
  const [swiper, setSwiper] = useState(null);

  const nextSlideHandler = () => {
    swiper.slideNext();
  };

  const prevSlideHandler = () => {
    swiper.slidePrev();
  };

  return (
    <section className="section-pd best-seller">
      <div className="container">
        <div className="header-best-seller">
          <div className="title">
            <h2 className="h2">Our best seller</h2>
            <p className="paragraph">Quis hendrerit dolor magna</p>
          </div>
          <a href="/" className="btn">
            See all
          </a>
        </div>
        <div className="slider-container">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            scrollbar={{ draggable: true }}
            className="slider"
            onSwiper={(s) => {
              console.log("initialize swiper", s);
              setSwiper(s);
            }}
            breakpoints={{
              200: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              910: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {products.map((prod) => (
              <SwiperSlide key={prod.name} className="slide-item">
                <a href="/">
                  <img src={prod.img} alt={prod.name} />
                  <span className="cal">{prod.cal}</span>
                  <h3>{prod.name}</h3>
                  <p className="paragraph">{prod.description}</p>
                  <span className="price">{prod.price}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={prevSlideHandler}
            className="arrow arrow-left"
            title="slide anterior"
          >
            <ArrowSvg />
          </button>
          <button
            onClick={nextSlideHandler}
            className="arrow arrow-right"
            title="slide posterior"
          >
            <ArrowSvg />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
