import React from "react";
import CartTotal from "../Order/CartTotal";
import { useState } from "react";
import { orderedFood } from "../../api/food";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    orderedFood(formData).then(data=>{
      toast.success('Order Getting Ready')
      console.log(data)
    })
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
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
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
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
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
            />
            <input
              type="text"
              name="country"
              value={formData.confirmZipCode}
              onChange={handleChange}
              placeholder="Country"
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:border-red-500"
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
            />
          </div>
        </form>
      </div>
      <div><CartTotal buttonText='Proceed To Payment' handleSubmit={handleSubmit}></CartTotal></div>
    </div>
  );
};

export default PlaceOrder;
