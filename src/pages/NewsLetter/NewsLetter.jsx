import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-purple-200 px-4 md:px-8 py-8 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="mb-6">
          Stay in the loop! Subscribe to our newsletter for the latest robotic toy information, exclusive offers, and exciting updates.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-lg px-4 py-2 w-full border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg transition duration-300 hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
