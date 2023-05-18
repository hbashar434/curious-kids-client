import React from "react";
import Lottie from "lottie-react";
import spinner from "../../../assets/spinner.json";
const Loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <Lottie animationData={spinner} loop={true} className="w-96"></Lottie>
    </div>
  );
};

export default Loading;
