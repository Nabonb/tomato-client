import React, { useContext } from "react";
import { assets } from "../../assets/images/assets";
import { AuthContext } from "../../providers/AuthProvider";

const SingleOrder = ({ item, cartItems }) => {
  const { removeFromCart } = useContext(AuthContext);

  // Find the quantity of the current item in the cart
  const totalQuantity = cartItems.find(cartItem => cartItem._id === item._id)?.quantity || 0;
  const price = parseFloat(item.price); // Ensure item.price is a number
  const totalPrice = totalQuantity * price;

  return (
    <tr className="text-center">
      <td>
        <div className="flex justify-center items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={item.image} alt={`${item.name}`} />
            </div>
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td>${price.toFixed(2)}</td>
      <td>{totalQuantity}</td>
      <td>${totalPrice.toFixed(2)}</td>
      <td>
        <button
          onClick={() => removeFromCart(item._id)}
          className="btn btn-ghost btn-xs"
        >
          <img className="w-3" src={assets.cross_icon} alt="Remove" />
        </button>
      </td>
    </tr>
  );
};

export default SingleOrder;
