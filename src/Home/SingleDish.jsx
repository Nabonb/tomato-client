import React, { useContext, useState } from "react";
import { assets } from "../assets/images/assets";
import { AuthContext } from "../providers/AuthProvider";

const SingleDish = ({ food }) => {
  const {cartItems, addToCart,removeFromCart} = useContext(AuthContext)

  return (
    <div
      className="card bg-base-100 shadow-xl rounded-2xl"
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <figure className="relative">
        <img src={food.image} alt="Shoes" className="w-full rounded-2xl" />
        {!cartItems[food._id] ? (
          <img
            onClick={() => addToCart(food._id)}
            className="absolute bottom-10 right-10 flex justify-center items-center gap-3 cursor-pointer h-10 w-10"
            src={assets.add_icon_white}
          ></img>
        ) : (
          <div className="absolute bottom-10 right-10 flex justify-center items-center gap-3 bg-white rounded-full p-2">
            <img
              onClick={() => removeFromCart(food._id)}
              src={assets.remove_icon_red}
              alt=""
              className="cursor-pointer h-9 w-9"
            />
            <p className="text-black text-xl font-medium">{cartItems[food._id]}</p>
            <img
              onClick={() => addToCart(food._id)}
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
