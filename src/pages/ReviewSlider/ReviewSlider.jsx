import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    img: "https://i.ibb.co/W3G35vG/person-2.jpg",
    description:
      "I recently bought this amazing RobotX toy for my nephew, and he absolutely loves it! The toy is highly interactive and engaging, and it keeps him entertained for hours on end.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Johnson",
    img: "https://i.ibb.co/qB28DtJ/person-7.jpg",
    description:
      "This RoboTech robot toy is absolutely fantastic! It's incredibly well-designed, durable, and packed with an impressive array of features. My son can't get enough of it and fun playing with it",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Daniel Lee",
    img: "https://i.ibb.co/z62H9G7/person-4.jpg",
    description:
      "I purchased awesome BotBuddy robot toy as a gift for my niece, and she adores it! The toy is educational, and it helps improve her problem-solving skills while having fun.",
    rating: 4.5,
  },
  {
    id: 4,
    name: "David Anderson",
    img: "https://i.ibb.co/0sWFQCn/person-3.jpg",
    description:
      "I was skeptical at first, but this RoboRacer robot toy exceeded my expectations. The quality is top-notch, and the remote control functionality adds an extra level of excitement.",
    rating: 4.7,
  },
  {
    id: 5,
    name: "James Wilson",
    img: "https://i.ibb.co/ZhBKXg0/person-9.jpg",
    description:
      "My daughter received fantastic DinoBot robot toy for her birthday, and it's been a hit! The toy is interactive, easy to use, and sparks her imagination. Highly recommended!",
    rating: 5,
  },
  {
    id: 6,
    name: "Daniel Thompson",
    img: "https://i.ibb.co/r3D5Pvb/person-5.jpg",
    description:
      "I bought collector's edition RetroBot robot toy for myself as a collector, and it's a gem! The attention to detail is remarkable, and it's a great addition to my collection.",
    rating: 4.8,
  },
];

const ReviewSlider = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#9384D1",
          paddingTop: "1px",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#9384D1",
          paddingTop: "1px",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="my-10 md:my-24 px-4 md:px-8">
      <div className="mb-4 md:mb-10 md:w-6/12 md:mx-auto md:text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
          Thrilled Customers Share Their Love
        </h2>
        <p className="md:text-lg text-gray-700 mt-4">
          Customers are thrilled with our mesmerizing robot toys. From
          interactive play to educational experiences, these toys deliver
          endless excitement.
        </p>
      </div>
      <div className="text-center w-9/12 mx-auto">
        <Slider {...sliderSettings}>
          {reviews.map((item) => (
            <div
              key={item?.id}
              className=" max-w-lg h-full md:h-60 text-start bg-white rounded-lg shadow-sm border-2 py-6 px-8"
            >
              <div className="flex items-center mb-4">
                <img
                  className="h-12 w-12 rounded-full object-cover mr-4"
                  src={item?.img}
                  alt="Reviewer"
                />
                <p className="text-lg font-semibold text-gray-800">
                  {item?.name}
                </p>
              </div>
              <p className="text-gray-700 text-base">{item?.description}</p>
              <div className="flex items-center gap-3 mt-4">
                <StarRatings
                  rating={parseFloat(item?.rating)}
                  starRatedColor="#F99417"
                  numberOfStars={5}
                  starDimension="17px"
                  starSpacing="3px"
                  name="rating"
                />
                <span className="text-yellow-500 font-semibold text-lg mt-1 mr-1">
                  {item?.rating}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSlider;
