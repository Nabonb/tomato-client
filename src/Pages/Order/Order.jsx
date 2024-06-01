import React from "react";
import { food_list } from "../../assets/images/assets";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { assets } from "../../assets/images/assets";
import SingleOrder from "./SingleOrder";
import CartTotal from "./CartTotal";
import EmptyState from "../../Components/Shared/EmptyState/EmptyState";

const Order = () => {
  const { cartItems, getSubTotalCartAmount } = useContext(AuthContext);
  console.log(cartItems);
  return (
    <div>
      {getSubTotalCartAmount() === 0 ? (
        <EmptyState message="No Items Are Added Right Now" address='/' label="Add Now"></EmptyState>
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
              {food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <SingleOrder
                      key={index}
                      item={item}
                      cartItems={cartItems}
                    ></SingleOrder>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="grid md:grid-cols-2 my-8 gap-8 md:gap-48">
        <CartTotal buttonText="Proceed To Checkout"></CartTotal>
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
