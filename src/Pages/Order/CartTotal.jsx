import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { food_list } from "../../assets/images/assets";

const CartTotal = () => {
    const {getSubTotalCartAmount} = useContext(AuthContext)
    const deliveryFee = 5
    const totalAmount = getSubTotalCartAmount() + deliveryFee
  return (
    <div>
      <h1 className="text-2xl font-semibold">Cart Totals</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Subtotal</td>
              <td className="flex justify-end font-semibold">${getSubTotalCartAmount()}</td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Delivery Fee</td>
              <td className="flex justify-end font-semibold">${deliveryFee}</td>
            </tr>
            <tr>
                <td className="font-semibold">Total</td>
                <td className="flex justify-end font-semibold">${totalAmount}</td>
            </tr>

          </tbody>
        </table>
        <button style={{backgroundColor:"tomato"}} className="btn text-white">Proceed To Checkout</button>
      </div>
    </div>
  );
};

export default CartTotal;
