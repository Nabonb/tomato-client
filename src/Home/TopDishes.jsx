import React, { useEffect, useState } from "react";
import { food_list } from "../assets/images/assets";
import SingleDish from "./SingleDish";
import { useSearchParams } from "react-router-dom";
import { getAllFood } from "../api/food";

const TopDishes = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // getAllFood().then(data=>{console.log(data)})
    if (category) {
      const filteredFood = food_list.filter(
        (food) => food.category === category
      );
      setFoods(filteredFood);
    } else {
      setFoods(food_list);
    }
  }, [category]);
  return (
    <div className="text-center">
      <h1 className="text-xl md:text-2xl font-semibold">Top Dishes Near You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {foods.map((food, index) => (
          <SingleDish key={index} food={food}></SingleDish>
        ))}
      </div>
    </div>
  );
};

export default TopDishes;
