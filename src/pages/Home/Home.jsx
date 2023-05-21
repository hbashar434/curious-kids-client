import React from "react";
import Banner from "../Banner/Banner";
import TabsCard from "../TabsCard/TabsCard";
import Gallery from "../Gallery/Gallery";
import Pagination from "../Pagination/Pagination";
import Newsletter from "../NewsLetter/NewsLetter";
import useTitle from "../../hooks/useTitle";
import ReviewSlider from "../ReviewSlider/ReviewSlider";


const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Pagination></Pagination>
      <Gallery></Gallery>
      <TabsCard></TabsCard>
      <ReviewSlider></ReviewSlider>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
