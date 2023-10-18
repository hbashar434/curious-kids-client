import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-88px)] max-w-[1440px] mx-auto bg-purple-50">
        <Outlet></Outlet>
      </div>
      <div className="my-bg-pink lg:px-8">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
