import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const toyCollection = useLoaderData();
  const [toys, setToys] = useState(toyCollection);
  const [searchValue, setSearchValue] = useState("");

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

  const handleSearch = () => {
    fetch(`https://curious-kids-server.vercel.app/search-toys/${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-pink-600">
        All Toys
      </h1>
      <div className="flex justify-center gap-4 mb-8">
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="search here"
          className="input input-bordered input-error h-10 w-48"
        />
        <button onClick={handleSearch} className="my-btn-cherry">
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-4 px-6 bg-purple-500 text-white">No.</th>
              <th className="py-4 px-6 bg-pink-500 text-white">Seller</th>
              <th className="py-4 px-6 bg-blue-500 text-white">Toy Name</th>
              <th className="py-4 px-6 bg-green-500 text-white">Category</th>
              <th className="py-4 px-6 bg-yellow-500 text-white">Price</th>
              <th className="py-4 px-6 bg-red-500 text-white">Quantity</th>
              <th className="py-4 px-6 bg-indigo-500 text-white">Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, idx) => (
              <tr key={toy._id}>
                <td className="py-4 px-6 border hover:bg-pink-200 transition-colors duration-300">
                  {idx + 1}
                </td>
                <td className="py-4 px-6 border hover:bg-pink-200 transition-colors duration-300">
                  {toy.sellerName || "N/A"}
                </td>
                <td className="py-4 px-6 border hover:bg-pink-200 transition-colors duration-300">
                  {toy.name}
                </td>
                <td className="py-4 px-6 border hover:bg-pink-200 transition-colors duration-300">
                  {toy.subcategory}
                </td>
                <td className="py-4 px-6 border hover:bg-pink-200 transition-colors duration-300">
                  {toy.price} $
                </td>
                <td className="py-4 px-6 border hover:bg-pink-200 transition-colors duration-300">
                  {toy.availableQuantity} pcs
                </td>
                <td className="py-4 px-6 text-center border">
                  <Link
                    to={`/toy-details/${toy._id}`}
                    className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
                    onClick={handleViewDetails}
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
