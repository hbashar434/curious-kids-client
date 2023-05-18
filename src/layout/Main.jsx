import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="mx-auto container">
      <div className="my-bg-pink">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-88px)] px-4">
        <Outlet></Outlet>
      </div>
      <div className="my-bg-pink lg:px-8">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
