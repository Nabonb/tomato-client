import React, { useContext } from "react";
import { assets } from "../assets/images/assets";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SingleDish = ({ food }) => {
  const { cartItems, addToCart, removeFromCart, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const cartItem = cartItems.find(item => item._id === food._id);

  return (
    <div
      className="card bg-base-100 shadow-xl rounded-2xl"
      data-aos="zoom-in-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <figure className="relative">
        <img src={food.image} alt="Dish" className="w-full rounded-2xl" />
        {!cartItem ? (
          <img
            onClick={() => { user ? addToCart(food) : navigate('/login'); }}
            className="absolute bottom-10 right-10 flex justify-center items-center gap-3 cursor-pointer h-11 w-11"
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="absolute bottom-10 right-10 flex justify-center items-center gap-3 bg-white rounded-full p-2">
            <img
              onClick={() => removeFromCart(food._id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
              className="cursor-pointer h-9 w-9"
            />
            <p className="text-black text-xl font-medium">{cartItem.quantity}</p>
            <img
              onClick={() => addToCart(food)}
              src={assets.add_icon_green}
              alt="Add to cart"
              className="cursor-pointer h-9 w-9"
            />
          </div>
        )}
      </figure>
      <div className="card-body text-left">
        <div className="flex justify-between">
          <h2 className="card-title">{food.name}</h2>
          <div className="flex items-center">
            <img src={assets.rating_starts} alt="Rating stars" />
          </div>
        </div>
        <p>{food.description}</p>
        <p className="text-amber-500 text-2xl font-semibold">${food.price}</p>
      </div>
    </div>
  );
};

export default SingleDish;
