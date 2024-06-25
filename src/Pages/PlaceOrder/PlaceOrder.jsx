import React, { useContext, useEffect } from "react";
import CartTotal from "../Order/CartTotal";
import { useState } from "react";
import { orderedFood } from "../../api/food";
import toast from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";

const PlaceOrder = () => {
  const { cartItems, user } = useContext(AuthContext);
  const [errors, setErrors] = useState([]);
  // console.log(cartItems)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userEmail: user?.email,
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
    cartItems: [],
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      cartItems: cartItems,
    }));
  }, [cartItems]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "address",
      "city",
      "state",
      "zipCode",
      "country",
      "phoneNumber",
    ];
    const newErrors = requiredFields.filter((field) => !formData[field]);

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error("Please Fill Out The Form TO Order !!");
      return;
    }

    try {
      const data = await orderedFood(formData);
      console.log(data);

      if (data.insertedId) {
        toast.success("Order Getting Ready");

        const stripe = await loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

        const headers = {
          "Content-Type": "application/json",
        };

        const body = {
          product: cartItems,
        };

        const response = await fetch(
          "http://localhost:5000/create-checkout-session",
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
          }
        );

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.log(result.error);
        }
      }
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-x-10">
      <div className="w-full">
        <form>
          <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-x-2">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
              required
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-x-2">
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Zip Code"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
              required
            />
            <input
              type="text"
              name="country"
              value={formData.confirmZipCode}
              onChange={handleChange}
              placeholder="Country"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
              required
            />
          </div>
        </form>
      </div>
      <div>
        <CartTotal
          buttonText="Proceed To Payment"
          handleSubmit={handleSubmit}
        ></CartTotal>
      </div>
    </div>
  );
};

export default PlaceOrder;
