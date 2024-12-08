import React from "react";
import { data } from "../restApi.json";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
          We offer a variety of freshly prepared dishes designed to cater to every taste. From delicious, oven-baked meals topped with a perfect balance of savory ingredients, to tender cuts of protein cooked to perfection with seasoning that elevates their natural flavors, our menu is crafted to satisfy.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
