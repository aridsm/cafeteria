import React from "react";
import "../Styles/Components/BestSeller.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/prod1.webp";
import img2 from "../assets/prod2.webp";
import img3 from "../assets/prod3.webp";
import img4 from "../assets/prod4.webp";
import img5 from "../assets/prod5.webp";
import "swiper/css/navigation";
import "swiper/css";

const products = [
  {
    name: "lorem ipsum",
    description: "Feugiat nibh sed pulvinar proin",
    price: "$ 7.99",
    cal: "185kcal",
    img: img1,
  },
  {
    name: "lorem ipsum",
    description: "Nibh tellus molestie nunc non",
    price: "$ 7.99",
    cal: "185kcal",
    img: img2,
  },
  {
    name: "lorem ipsum",
    description: "Id porta nibh venenatis cras sed",
    price: "$ 7.99",
    cal: "185kcal",
    img: img3,
  },
  {
    name: "lorem ipsum",
    description: "Et pharetra pharetra massa massa ultricies",
    price: "$ 7.99",
    cal: "185kcal",
    img: img4,
  },
  {
    name: "lorem ipsum",
    description: "Feugiat nibh sed pulvinar proin",
    price: "$ 7.99",
    cal: "185kcal",
    img: img5,
  },
];

const BestSeller = () => {
  return (
    <section className="section-pd best-seller">
      <div className="container">
        <h2 className="h2">Our best seller</h2>
        <p>Quis hendrerit dolor magna</p>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
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
      </div>
    </section>
  );
};

export default BestSeller;
