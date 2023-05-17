import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-40">
      <div className="my-bg-pink lg:px-10">
        <Navbar></Navbar>
      </div>
      <div className="h-[calc(100vh-88px)]">
        <Outlet></Outlet>
      </div>
      <div className="my-bg-pink lg:px-8">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
