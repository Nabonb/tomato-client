import React, {useContext} from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const CartTotal = ({buttonText,handleSubmit}) => {
  const { getSubTotalCartAmount } = useContext(AuthContext);
  const deliveryFee = getSubTotalCartAmount()===0 ? 0: 2;
  const totalAmount = getSubTotalCartAmount() + deliveryFee;
  const navigate = useNavigate()

  return (
    <div>
      <h1 className="text-2xl font-bold">Cart Totals</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Subtotal</td>
              <td className="flex justify-end font-semibold">
                ${getSubTotalCartAmount()}
              </td>
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
        <button
          onClick={buttonText == 'Proceed To Payment'?handleSubmit:()=>navigate('/place-order')}
          style={{ backgroundColor: "tomato" }}
          className={'btn text-white'}
          // disabled={totalAmount === 0} todo
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
