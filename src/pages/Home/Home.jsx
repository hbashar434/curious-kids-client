import React from "react";
import Banner from "../Banner/Banner";

import { useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
