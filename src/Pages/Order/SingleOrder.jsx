import React, { useContext } from "react";
import { assets } from "../../assets/images/assets";
import { AuthContext } from "../../providers/AuthProvider";

const SingleOrder = ({ item, cartItems }) => {
  const { removeFromCart } = useContext(AuthContext);
  const totalQuantity = cartItems[item._id]
  const totalPrice = totalQuantity*item.price
  console.log(item);
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
      <td>${item.price}</td>
      <td>{cartItems[item._id]}</td>
      <td className="">${totalPrice}</td>
      <td>
        <button
          onClick={() => removeFromCart(item._id)}
          className="btn btn-ghost btn-xs"
        >
          <img className="w-3" src={assets.cross_icon} alt="" />
        </button>
      </td>
    </tr>
  );
};

export default SingleOrder;
