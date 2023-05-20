import React from "react";
import Banner from "../Banner/Banner";

import { useLoaderData } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import TabsCard from "../TabsCard/TabsCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <TabsCard></TabsCard>
    </div>
  );
};

export default Home;
