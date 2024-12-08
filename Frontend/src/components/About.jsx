import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The Only Thing we are serious about is FOOD.</p>
          </div>
          <p className="mid">
            Welcome to Palm and Pine, where flavors meet harmony! Located in the
            vibrant heart of Coimbatore,Tamil Nadu , our restaurant is inspired
            by the essence of two worlds: the tropical charm of the palm and the
            evergreen resilience of the pine. At Palm and Pine, we take pride in
            curating a menu that blends timeless classics with innovative
            creations, all made from the finest, locally sourced ingredients.
            Whether it’s a refreshing dish that evokes coastal breezes or a
            hearty meal reminiscent of a forest retreat, every plate tells a
            story of balance and flavor. Our mission is simple: to create a
            space where food, ambiance, and community come together. Be it a
            casual lunch, a special celebration, or a cozy evening out, we’re
            here to make every moment unforgettable. Thank you for choosing Palm
            and Pine—your journey to exceptional dining starts here!
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
