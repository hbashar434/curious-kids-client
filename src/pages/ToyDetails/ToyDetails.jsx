import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  const {
    pictureURL,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    subcategory,
    availableQuantity,
  } = toyDetails;

  return <div></div>;
};

export default ToyDetails;
