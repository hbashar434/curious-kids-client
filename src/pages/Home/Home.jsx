import React from "react";
import Banner from "../Banner/Banner";
import TabsCard from "../TabsCard/TabsCard";
import Gallery from "../Gallery/Gallery";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Pagination></Pagination>
      <Gallery></Gallery>
      <TabsCard></TabsCard>
    </div>
  );
};

export default Home;
