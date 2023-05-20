import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StarRatings from "react-star-ratings";
import { IoIosPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const TabsCard = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState([]);
  const [currentTab, setCurrentTab] = useState("Robotic-Astronauts");

  useEffect(() => {
    fetch(`https://curious-kids-server.vercel.app/subcategory/${currentTab}`)
      .then((res) => res.json())
      .then((result) => {
        setCategory(result);
      });
  }, [currentTab]);

  const handleTab = (tabName) => {
    setCurrentTab(tabName);
  };

  const handleViewDetails = () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login First!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const colors = [
    "bg-pink-200",
    "bg-yellow-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-purple-200",
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const cardColor = getRandomColor();

  return (
    <Tabs className="my-10 md:my-24">
      {/* <TabList>
        <Tab onClick={() => handleTab("Robotic-Astronauts")}>
          <span className="text-xs my-text-gr md:text-lg md:font-semibold">Robotic Astronauts</span>
        </Tab>
        <Tab onClick={() => handleTab("Robotic-Pets")}>
            <span className="text-xs my-text-gr md:text-lg md:font-semibold">Robotic Pets</span>
            </Tab>
        <Tab onClick={() => handleTab("Robotic-Vehicles")}>
          <span className="text-xs my-text-gr md:text-lg md:font-semibold">Robotic Vehicles</span>
        </Tab>
      </TabList> */}
      <TabList className="flex space-x-2">
        <Tab
          className={`p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${getRandomColor()}`}
          onClick={() => handleTab("Robotic-Astronauts")}
        >
          <span className="text-xs md:text-lg md:font-semibold">
            Robotic Astronauts
          </span>
        </Tab>
        <Tab
          className={`p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${getRandomColor()}`}
          onClick={() => handleTab("Robotic-Pets")}
        >
          <span className="text-xs md:text-lg md:font-semibold">
            Robotic Pets
          </span>
        </Tab>
        <Tab
          className={`p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 ${getRandomColor()}`}
          onClick={() => handleTab("Robotic-Vehicles")}
        >
          <span className="text-xs md:text-lg md:font-semibold">
            Robotic Vehicles
          </span>
        </Tab>
      </TabList>

      <TabPanel>
        <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
          {category.map((tab) => (
            <div
              key={tab._id}
              className={`max-w-sm pb-8 rounded overflow-hidden shadow-lg ${cardColor} hover:scale-105 transition duration-500 ease-in-out transform hover:rotate-3 hover:shadow-2xl`}
            >
              <img className="w-full" src={tab?.pictureURL} alt={tab?.name} />
              <div className="px-4 py-3 sm:px-6 lg:px-4">
                <div className="flex gap-2">
                  <div className="font-bold text-xl sm:text-2xl text-purple-900 mb-2">
                    {tab?.name}
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-500 rounded-full h-3 w-3 sm:h-4 sm:w-4"></div>
                    <div className="bg-yellow-500 rounded-full h-3 w-3 sm:h-4 sm:w-4 ml-2"></div>
                    <div className="bg-green-500 rounded-full h-3 w-3 sm:h-4 sm:w-4 ml-2"></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="font-semibold text-lg flex items-center gap-2">
                    <IoIosPricetags size={25} color="#E74646" /> {tab?.price} $
                  </p>
                  <div>
                    <StarRatings
                      rating={parseFloat(tab?.rating)}
                      starRatedColor="#FC4F00"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                      name="rating"
                    />{" "}
                    {tab?.rating}
                  </div>
                </div>
              </div>
              <div className="px-4">
                <Link
                  to={`/toy-details/${tab._id}`}
                  className="my-btn-cherry"
                  onClick={handleViewDetails}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
          {category.map((tab) => (
            <div
              key={tab._id}
              className={`max-w-sm pb-8 rounded overflow-hidden shadow-lg ${cardColor} hover:scale-105 transition duration-500 ease-in-out transform hover:rotate-3 hover:shadow-2xl`}
            >
              <img className="w-full" src={tab?.pictureURL} alt={tab?.name} />
              <div className="px-4 py-3 sm:px-6 lg:px-4">
                <div className="flex gap-2">
                  <div className="font-bold text-xl sm:text-2xl text-purple-900 mb-2">
                    {tab?.name}
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-500 rounded-full h-3 w-3 sm:h-4 sm:w-4"></div>
                    <div className="bg-yellow-500 rounded-full h-3 w-3 sm:h-4 sm:w-4 ml-2"></div>
                    <div className="bg-green-500 rounded-full h-3 w-3 sm:h-4 sm:w-4 ml-2"></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="font-semibold text-lg flex items-center gap-2">
                    <IoIosPricetags size={25} color="#E74646" /> {tab?.price} $
                  </p>
                  <div>
                    <StarRatings
                      rating={parseFloat(tab?.rating)}
                      starRatedColor="#FC4F00"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                      name="rating"
                    />{" "}
                    {tab?.rating}
                  </div>
                </div>
              </div>
              <div className="px-4">
                <Link
                  to={`/toy-details/${tab._id}`}
                  className="my-btn-cherry"
                  onClick={handleViewDetails}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
          {category.map((tab) => (
            <div
              key={tab._id}
              className={`max-w-sm pb-8 rounded overflow-hidden shadow-lg ${cardColor} hover:scale-105 transition duration-500 ease-in-out transform hover:rotate-3 hover:shadow-2xl`}
            >
              <img className="w-full" src={tab?.pictureURL} alt={tab?.name} />
              <div className="px-4 py-3 sm:px-6 lg:px-4">
                <div className="flex gap-2">
                  <div className="font-bold text-xl sm:text-2xl text-purple-900 mb-2">
                    {tab?.name}
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-500 rounded-full h-3 w-3 sm:h-4 sm:w-4"></div>
                    <div className="bg-yellow-500 rounded-full h-3 w-3 sm:h-4 sm:w-4 ml-2"></div>
                    <div className="bg-green-500 rounded-full h-3 w-3 sm:h-4 sm:w-4 ml-2"></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="font-semibold text-lg flex items-center gap-2">
                    <IoIosPricetags size={25} color="#E74646" /> {tab?.price} $
                  </p>
                  <div>
                    <StarRatings
                      rating={parseFloat(tab?.rating)}
                      starRatedColor="#FC4F00"
                      numberOfStars={5}
                      starDimension="20px"
                      starSpacing="1px"
                      name="rating"
                    />{" "}
                    {tab?.rating}
                  </div>
                </div>
              </div>
              <div className="px-4">
                <Link
                  to={`/toy-details/${tab._id}`}
                  className="my-btn-cherry"
                  onClick={handleViewDetails}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabsCard;
