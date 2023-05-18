import React from "react";
import { Link } from "react-router-dom";
import errorRobot from "../../../assets/errorRobot.avif";
const ErrorPage = () => {
  return (
    <div className="grid justify-center md:mt-16">
      <img className="h-96" src={errorRobot} alt="error image" />
      <Link to="/" className="text-center pt-8">
        <button className="my-btn-cherry">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
