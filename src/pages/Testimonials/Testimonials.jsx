import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://curious-kids-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-10 md:my-24 px-4 md:px-8">
      <div className="mb-4 md:mb-10 md:w-6/12 md:mx-auto md:text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
          Thrilled Customers Share Their Love for Robot Toys!
        </h2>
        <p className="md:text-lg text-gray-700 mt-4">
          Customers are thrilled with our mesmerizing robot toys. From
          interactive play to educational experiences, these toys deliver
          endless excitement.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((item) => (
          <div
            key={item?._id}
            className="max-w-lg mx-auto bg-white rounded-lg shadow-sm border-2 py-6 px-8 flex flex-col justify-between h-full"
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
                starDimension="25px"
                starSpacing="3px"
                name="rating"
              />
              <span className="text-yellow-500 font-semibold text-lg mt-1 mr-1">
                {item?.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
