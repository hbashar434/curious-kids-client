import React from "react";
import Banner from "../Banner/Banner";
import TabsCard from "../TabsCard/TabsCard";
import Gallery from "../Gallery/Gallery";
import Pagination from "../Pagination/Pagination";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Pagination></Pagination>
      <Gallery></Gallery>
      <TabsCard></TabsCard>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
