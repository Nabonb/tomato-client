import React from "react";
import banner from "../assets/images/header_img.png";

const Banner = () => {
  return (
    <div className="relative">
      <img src={banner} alt="" />
      <div className="absolute inset-0 flex flex-col justify-center p-2 md:p-16 w-full  md:w-1/2">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-5xl font-semibold md:py-4">
          Order Your <br /> favourite food here
        </h1>
        <p className="text-sm md:text-base text-white md:py-4">
          Choose from a diverse menu featuring a delectable array of dishes.Our mission
          is to satisfy your dining experience, one
          delicious meal at a time.
        </p>
        <button className="rounded-3xl px-2 py-2 text-xs md:text-lg text-slate-500 bg-white hover:bg-slate-200 hover:text-black w-1/3">View Menu</button>
      </div>
    </div>
  );
};

export default Banner;
