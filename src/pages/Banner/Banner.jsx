import React from "react";
import { Link } from "react-router-dom";
import robotKids from "../../assets/robotKids.png";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 items-center lg:pt-16">
      <div className="order-1 md:order-none">
        <div className=" text-3xl font-bold grid gap-3">
          <h1>
            Enter the World of TechToys: Where Imagination Meets Technology
          </h1>
          <h1 className="my-text-gr">
            Explore, Play, and Learn with our Amazing Collection!
          </h1>
        </div>
        <p className="mt-6 font-medium">
          Discover a world of fun and imagination for your little ones! From
          educational toys to interactive games, we have everything your child
          needs to learn, play, and grow.
        </p>
        <Link>
          <button className="mt-8 my-btn-cherry">Shop Now</button>
        </Link>
      </div>
      <figure>
        <img src={robotKids} alt="kids playing with robot" />
      </figure>
    </div>
  );
};

export default Banner;
