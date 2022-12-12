import React from "react";
import "../Styles/Components/BestSeller.scss";

const products = [
  {
    name: "1",
    description: "lorem ipsum",
    price: "$ 7.99",
    cal: "185kcal",
  },
];

const BestSeller = () => {
  return (
    <section className="section-pd best-seller">
      <div className="container">
        <h2 className="h2">Our best seller</h2>
        <p>Quis hendrerit dolor magna</p>
        <ul>
          {products.map((prod) => (
            <li key={prod.name}>{prod.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BestSeller;
