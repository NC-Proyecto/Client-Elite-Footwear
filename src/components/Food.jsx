import React, { useState } from "react";
import { data } from "../data/data.js";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-black-600 font-bold text-4xl text-left">Sneakers</h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
        {/* Fliter Type */}
        <div className="flex justify-between w-full lg:w-auto">
          <div className="flex flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 px-3 py-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("Nike")}
              className="m-1 px-3 py-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Nike
            </button>
            <button
              onClick={() => filterType("Underarmour")}
              className="m-1 px-3 py-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Underarmour
            </button>
            <button
              onClick={() => filterType("Adidas")}
              className="m-1 px-3 py-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Adidas
            </button>
            <button
              onClick={() => filterType("Peak")}
              className="m-1 px-3 py-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
              Peak
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div className="flex justify-between w-full lg:w-auto">
          <p className="font-bold text-gray-700"></p>
          <div className="flex">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 px-3 py-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 px-3 py-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 px-3 py-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 px-3 py-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
        {/* Search Input */}
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[150px] sm:w-[250px] lg:w-[350px]">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mt-7">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-green-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
