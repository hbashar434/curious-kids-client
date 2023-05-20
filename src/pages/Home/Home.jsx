import React from "react";
import Banner from "../Banner/Banner";

import TabsCard from "../TabsCard/TabsCard";
import Gallery from "../Gallery/Gallery";

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
