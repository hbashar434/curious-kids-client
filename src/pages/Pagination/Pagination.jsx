import React, { useEffect, useState } from "react";
import { IoIosPricetags } from "react-icons/io";

const Pagination = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://curious-kids-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(toys.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = toys.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex flex-col items-center px-4 md:px-8 md:my-24 my-10">
      <div className="mb-4 md:mb-10 md:w-6/12 md:mx-auto md:text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
          Get Your Perfect Robot Toy
        </h2>
        <p className="md:text-lg text-gray-700 mt-4">
          Immerse yourself in a world of futuristic fun with our collection of
          robot toys.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((toy) => (
          <div
            key={toy._id}
            className="card w-full bg-purple-100 hover:shadow-md"
          >
            <figure className="px-10 md:px-6 pt-10 md:pt-8">
              <img
                src={toy?.pictureURL}
                alt="Toy"
                className="rounded-xl h-36 w-72"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{toy.name}</h2>
              <p className="font-semibold text-lg flex items-center gap-2">
                <IoIosPricetags size={20} color="#E74646" /> {toy?.price} $
              </p>
              <div className="card-actions">
                <button className="my-btn-indigoPurple">Purchase</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-warp mt-6">
        <button
          className={`px-8 py-2 mx-3 mt-2 rounded ${
            currentPage === 1 ? "bg-purple-200" : "my-bg-gr"
          }`}
          disabled={currentPage === 1}
          onClick={handlePrevious}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-8 py-2 mx-3 mt-2 rounded ${
              currentPage === index + 1 ? "my-bg-gr" : "bg-purple-200"
            }`}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`px-8 py-2 mx-3 mt-2 rounded ${
            currentPage === totalPages ? "bg-purple-200" : "my-bg-gr"
          }`}
          disabled={currentPage === totalPages}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
