import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosCard = ({ animation, picture }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="p-4"
      data-aos={animation}
      data-aos-offset="200"
      data-aos-duration="3000"
    >
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          className="w-full h-80 object-cover"
          src={picture}
          alt="Card Image"
        />
      </div>
    </div>
  );
};

export default AosCard;
