import React from "react";
import logo from "../../../assets/images/logo.png";
import basket from "../../../assets/images/basket_icon.png"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="mt-8 flex justify-between" >
      <Link to='/'>
        <img src={logo} height={100} width={100} alt="" />
      </Link>
      <div className="flex gap-6">
        <p>Home</p>
        <p>Menu</p>
        <p>Mobile App</p>
        <p>Contact Us</p>
      </div>
      <div>
        <div><img src={basket} alt="" /></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
