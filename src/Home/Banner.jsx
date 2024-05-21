import React from "react";
import banner from "../assets/images/header_img.png";

const Banner = () => {
  return (
    <div className="relative">
      <img src={banner} alt="Banner" className="w-full h-auto" />
      <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-3 md:p-10 lg:p-16 w-full bg-black bg-opacity-30">
        <div className="md:w-1/2">
          <h1 className="text-white text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl font-semibold md:py-4">
            Order Your <br /> favourite food here
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white py-1 md:py-4">
            Choose from a diverse menu featuring a delectable array of dishes.
            Our mission is to satisfy your dining experience, one delicious meal
            at a time.
          </p>
          <button className="rounded-3xl px-2 py-1 text-xs sm:px-3 sm:py-0 sm:text-xs md:text-base lg:text-lg text-slate-500 bg-white hover:bg-slate-200 hover:text-black w-1/3 sm:w-1/3 lg:w-1/4">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
