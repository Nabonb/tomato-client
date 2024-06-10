import React from "react";
import { assets } from "../../../assets/images/assets";

const SingleFood = ({item}) => {
  return (
    <tr className="text-center">
      <td>
        <div className="flex justify-center items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>${item.price}</td>
      <td>
        <button
        //   onClick={() => removeFromCart(item._id)}
          className="btn btn-ghost btn-xs"
        >
          <img className="w-3" src={assets.cross_icon} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default SingleFood;
