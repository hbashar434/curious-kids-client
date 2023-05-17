import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="mx-4 md:mx-16 lg:mx-40">
      <div className="bg-pink-100 lg:px-8">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-50px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
