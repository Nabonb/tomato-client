import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { assets } from "../../../assets/images/assets";
// import { foodStatus } from "../../../api/food";
import FoodStatus from "./FoodStatus";
import { foodStatus } from "../../../api/food";

const SingleOrders = ({ item }) => {
  const [status, setStatus] = useState("Food Processing");
  var sum = 0;

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    foodStatus(item._id,status).then(data=>console.log(data))
  };
  useEffect(() => {
    // foodStatus(item._id,status).then(data=>console.log(data))
  }, [status]);

  return (
    <div className="border-2 border-orange-500 flex flex-col lg:flex-row gap-4 items-center mb-4 p-4 w-full">
      <img src={assets.parcel_icon} alt="" className="w-12 h-12" />
      <div className="flex-grow w-full lg:w-auto">
        {item.cartItems.map((food, index) => (
          //   <div
          //     key={index}
          //     className="flex justify-between items-center mb-2 w-full"
          //   >
          //     <div className="flex flex-col">
          //       <p className="m-0">
          //         {food.name} <span> x {food.quantity}</span>
          //       </p>
          //       <p className="font-semibold">${food.price * food.quantity}</p>
          //     </div>
          //     <div className="hidden">
          //       {(sum = sum + food.price * food.quantity)}
          //     </div>
          //   </div>
          <>
            <FoodStatus key={index} status={status} food={food}></FoodStatus>
            <div className="hidden">
              {(sum = sum + food.price * food.quantity)}
            </div>
          </>
        ))}
      </div>
      <div className="flex flex-col items-end w-full lg:w-auto">
        <p className="m-3 font-bold">Items: {item.cartItems.length}</p>
        <p className="m-3 font-bold">Total = ${sum}</p>
        <div className="relative inline-block w-full lg:w-auto">
          <select
            value={status}
            onChange={handleStatusChange}
            className="block appearance-none w-full lg:w-auto bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline pr-10"
          >
            <option value="Food Processing">Food Processing</option>
            <option value="Out For Delivery">Out For Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 13l-5-5h10l-5 5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrders;
