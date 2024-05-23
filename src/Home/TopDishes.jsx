import React from "react";
import { food_list } from "../assets/images/assets";
import SingleDish from "./SingleDish";

const TopDishes = () => {
  return (
    <div className="text-center">
      <h1 className="text-xl md:text-2xl font-semibold">Top Dishes Near You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {food_list.map((food, index) => (
          <SingleDish key={index} food={food}></SingleDish>
        ))}
      </div>
    </div>
  );
};

export default TopDishes;
