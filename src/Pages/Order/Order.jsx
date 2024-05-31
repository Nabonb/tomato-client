import React from "react";
import { food_list } from "../../assets/images/assets";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { assets } from "../../assets/images/assets";
import SingleOrder from "./SingleOrder";

const Order = () => {
  const { cartItems } = useContext(AuthContext);
  console.log(cartItems);
  return (
    <div>
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
                return(<SingleOrder key={index} item={item} cartItems={cartItems} ></SingleOrder>)
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
