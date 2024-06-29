import React, { useContext, useState } from "react";
import { assets } from "../../assets/images/assets";
import { AuthContext } from "../../providers/AuthProvider";

const Ordered = ({ item }) => {
  const { foodReady } = useContext(AuthContext);
  var sum = 0;
  console.log(item)

  return (
    <div className="border-2 border-orange-500 flex flex-col lg:flex-row gap-4 items-center mb-4 p-4 w-full">
      <img src={assets.parcel_icon} alt="" className="w-12 h-12" />
      <div className="flex-grow w-full lg:w-auto">
        {item.cartItems.map((food, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2 w-full"
          >
            <div className="flex flex-col">
              <p className="m-0">
                {food.name} <span> x {food.quantity}</span>
              </p>
              <p className="font-semibold">${food.price * food.quantity}</p>
            </div>
            <div className="hidden">
              {(sum = sum + food.price * food.quantity)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-end w-full lg:w-auto">
        <p className="m-3 font-bold">Items: {item.cartItems.length}</p>
        <p className="m-3 font-bold">Total = ${sum}</p>
        <p className="flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full m-2"></span>
          {item.status}
        </p>
      </div>
    </div>
  );
};

export default Ordered;
