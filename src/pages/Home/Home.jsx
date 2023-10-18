import React from "react";
import Banner from "../Banner/Banner";
import TabsCard from "../TabsCard/TabsCard";
import Gallery from "../Gallery/Gallery";
import Pagination from "../Pagination/Pagination";
import Newsletter from "../NewsLetter/NewsLetter";
import useTitle from "../../hooks/useTitle";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import CraftIdeas from "../CraftIdeas/CraftIdeas";
import ToySafetyGuidelines from "../ToySafetyGuidelines/ToySafetyGuidelines";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <TabsCard></TabsCard>
      <Pagination></Pagination>
      <CraftIdeas></CraftIdeas>
      <ToySafetyGuidelines></ToySafetyGuidelines>
      <ReviewSlider></ReviewSlider>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
