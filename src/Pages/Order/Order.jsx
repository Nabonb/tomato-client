import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SingleOrder from "./SingleOrder";
import CartTotal from "./CartTotal";
import EmptyState from "../../Components/Shared/EmptyState/EmptyState";
import { getAllFood } from "../../api/food";

const Order = () => {
  const { cartItems, getSubTotalCartAmount, user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getAllFood()
      .then((foodList) => {
        console.log("Fetched food items:", foodList); // Debugging step
        setFoods(foodList);
      })
      .catch((err) => console.log("Error fetching food items:", err.message));
  }, []);

  console.log("Cart items:", cartItems); // Debugging step
  console.log("Foods:", foods); // Debugging step

  return (
    <div>
      {getSubTotalCartAmount(cartItems) === 0 ? (
        <EmptyState
          message="No Items Are Added Right Now"
          address="/"
          label="Add Now"
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>Items</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((item) => {
                const matchingCartItem = cartItems.find(
                  (cartItem) => cartItem._id === item._id
                );
                if (matchingCartItem) {
                  return (
                    <SingleOrder
                      key={item._id} // Use item._id as key for uniqueness
                      item={item}
                      cartItems={cartItems}
                    />
                  );
                }
                return null;
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="grid md:grid-cols-2 my-8 gap-8 md:gap-48">
        <CartTotal buttonText="Proceed To Checkout" />
        <div>
          <p className="text-slate-500 my-2">
            If you have a promo code Enter it here
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn bg-black text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
