import React from "react";
import { useLoaderData } from "react-router-dom";
import StarRatings from "react-star-ratings";
const ToyDetails = () => {
  const toyDetails = useLoaderData();
  const {
    pictureURL,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
  } = toyDetails;

  return (
    <div className="flex justify-center my-10">
      <div className="card md:w-6/12 bg-base-100 shadow-xl">
        <div className="bg-purple-500 text-white px-4 py-2 rounded-t-lg flex items-center">
          <h2 className="text-2xl font-bold">{name}</h2>
        </div>
        <figure className="px-6 pt-6">
          <img src={pictureURL} alt="Toy" className="rounded-xl" />
        </figure>
        <div className="flex justify-between px-10 pt-4">
          
          <p className="font-semibold text-lg">{price} $</p>
        </div>
        <div className="card-body pt-2">
          <h2 className="card-title">{sellerName}</h2>
          <p>{sellerEmail}</p>
          <p>Quantity : {availableQuantity} pcs</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
