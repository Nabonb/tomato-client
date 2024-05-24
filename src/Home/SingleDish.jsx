import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { assets } from "../assets/images/assets";

const SingleDish = ({ food }) => {
  const [count,setCount] = useState(0)
  console.log(count)
  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl" data-aos="zoom-in-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000">
      <figure className="relative">
        <img src={food.image} alt="Shoes" className="w-full rounded-2xl" />

        <button onClick={()=>{setCount(count+1)}} className="absolute bottom-10 right-10 flex justify-center items-center gap-3">
          <AiFillPlusCircle size={42} className="text-white font-semibold" />
          <p className="text-white text-xl font-medium">{count}</p>
        </button>
      </figure>
      <div className="card-body text-left">
        <div className="flex justify-between">
          <h2 className="card-title">{food.name}</h2>
          <div  className="flex items-center">
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
