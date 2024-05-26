import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { assets } from "../assets/images/assets";

const SingleDish = ({ food }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div
      className="card bg-base-100 shadow-xl rounded-2xl"
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <figure className="relative">
        <img src={food.image} alt="Shoes" className="w-full rounded-2xl" />
        {!itemCount ? (
          <img
            onClick={() => {
              setItemCount((prev) => prev + 1);
            }}
            className="absolute bottom-10 right-10 flex justify-center items-center gap-3 cursor-pointer h-10 w-10"
            src={assets.add_icon_white}
          ></img>
        ) : (
          <div className="absolute bottom-10 right-10 flex justify-center items-center gap-3">
            <img
              onClick={() => {
                setItemCount((prev) => prev - 1);
              }}
              src={assets.remove_icon_red}
              alt=""
              className="cursor-pointer h-9 w-9"
            />
            <p className="text-white text-xl font-medium">{itemCount}</p>
            <img
              onClick={() => {
                setItemCount((prev) => prev + 1);
              }}
              src={assets.add_icon_green}
              alt=""
              className="cursor-pointer h-9 w-9"
            />
          </div>
        )}
      </figure>
      <div className="card-body text-left">
        <div className="flex justify-between">
          <h2 className="card-title">{food.name}</h2>
          <div className="flex items-center">
            <img sizes={23} src={assets.rating_starts} alt="" />
          </div>
        </div>
        <p className="">{food.description}</p>
        <p className="text-amber-500 text-2xl font-semibold">${food.price}</p>
      </div>
    </div>
  );
};

export default SingleDish;
