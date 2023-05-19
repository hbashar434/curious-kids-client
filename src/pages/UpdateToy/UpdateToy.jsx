import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(`https://curious-kids-server.vercel.app/my-toys/${toy._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Successfully Update!");
        }
      });
  };

  return (
    <div className="container mx-auto p-4 bg-purple-200">
      <h1 className="text-3xl font-bold mb-4 text-center my-text-gr">
        Update Toy Info
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="pictureUrl"
              className="block font-bold mb-1 my-text-gr"
            >
              Picture URL of the Toy:
            </label>
            <input
              type="text"
              id="pictureUrl"
              defaultValue={toy?.pictureURL}
              {...register("pictureURL", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-1 my-text-gr">
              Toy Name:
            </label>
            <input
              type="text"
              id="name"
              defaultValue={toy?.name}
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerName"
              className="block font-bold mb-1 my-text-gr"
            >
              Seller Name:
            </label>
            <input
              type="text"
              id="sellerName"
              defaultValue={toy?.sellerName}
              {...register("sellerName")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="sellerEmail"
              className="block font-bold mb-1 my-text-gr"
            >
              Seller Email:
            </label>
            <input
              type="email"
              id="sellerEmail"
              value={toy?.sellerEmail}
              {...register("sellerEmail", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subCategory"
              className="block font-bold mb-1 my-text-gr"
            >
              Sub-category:
            </label>
            <select
              id="subCategory"
              defaultValue={toy?.subcategory}
              {...register("subcategory", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option>select category</option>
              <option value="Robotic-Pets">Robotic Pets</option>
              <option value="Robotic-Vehicles">Robotic Vehicles</option>
              <option value="Robotic Astronauts">Robotic-Astronauts</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-bold mb-1 my-text-gr">
              Price:
            </label>
            <input
              type="text"
              id="price"
              defaultValue={toy?.price}
              {...register("price", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block font-bold mb-1 my-text-gr"
            >
              Quantity:
            </label>
            <input
              type="text"
              id="quantity"
              defaultValue={toy?.availableQuantity}
              {...register("availableQuantity", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block font-bold mb-1 my-text-gr">
              Rating:
            </label>
            <input
              type="text"
              id="rating"
              defaultValue={toy?.rating}
              {...register("rating", { required: true, min: 1, max: 5 })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-bold mb-1 my-text-gr"
            >
              Description:
            </label>
            <textarea
              id="description"
              defaultValue={toy?.description}
              {...register("description", { required: true })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="md:pt-10">
            <button type="submit" className="w-full my-btn-indigoPurple">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
