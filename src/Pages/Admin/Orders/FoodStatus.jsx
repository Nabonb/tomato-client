import React, { useEffect } from "react";
import { foodStatus } from "../../../api/food";

const FoodStatus = ({ food }) => {

  return (
    <div className="flex justify-between items-center mb-2 w-full">
      <div className="flex flex-col">
        <p className="m-0">
          {food.name} <span> x {food.quantity}</span>
        </p>
        <p className="font-semibold">${food.price * food.quantity}</p>
      </div>
      
    </div>
  );
};

export default FoodStatus;
