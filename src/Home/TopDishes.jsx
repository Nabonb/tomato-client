import React, { useContext, useEffect, useState } from "react";
import SingleDish from "./SingleDish";
import { useSearchParams } from "react-router-dom";
import { getAllFood } from "../api/food";


const TopDishes = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  const [foods, setFoods] = useState([]);


  useEffect(() => {
    getAllFood().then(foodList=>{
    if (category) {
      const filteredFood = foodList.filter(
        (food) => food.category === category
      );
      setFoods(filteredFood);
    } else {
      setFoods(foodList);
    }
  }).catch(err=>console.log(err.message))
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
