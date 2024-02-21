import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"></p>
          <p className="px-2"></p>
          {/* <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button> */}
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://i.pinimg.com/564x/6c/93/07/6c9307ada6ab967ad9d19a92a99801ea.jpg"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"></p>
          <p className="px-2"></p>
          {/* <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button> */}
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://i.pinimg.com/564x/01/d6/36/01d6365e937c6adb34cbc116e2bd3eec.jpg"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4"></p>
          <p className="px-2"></p>
          {/* <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button> */}
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://i.pinimg.com/564x/4b/7f/ef/4b7fefad7aebb5e85031d4134e6f666e.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
